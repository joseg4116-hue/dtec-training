import { modules } from "@/data/modules";
import { quizBanks } from "@/data/quiz";
import type { QuizResult, TrainingEvent } from "@/lib/supabase";

export const DRIVER_ID = "driver-training";
const INACTIVE_DAYS = 30;
const STUCK_FAILS = 2;
const RUSHED_SECONDS_PER_QUESTION = 3;

// ── Module lookup ───────────────────────────────────────────────────────────
export const baseId = (id: string) => id.replace(/-(en|es)$/, "");

const titleByBase: Record<string, string> = { [DRIVER_ID]: "Driver Training" };
for (const m of modules) {
  const b = baseId(m.id);
  if (m.lang === "en" || !titleByBase[b]) titleByBase[b] = m.title;
}
export const moduleName = (id: string | null) => (id ? titleByBase[baseId(id)] ?? id : "—");

// Modules that have a quiz = the ones an employee can "complete"
export const TRACKED_MODULES: string[] = Array.from(
  new Set([...quizBanks.map((q) => baseId(q.moduleId)), DRIVER_ID])
);

// ── Formatting ──────────────────────────────────────────────────────────────
export function fmtDuration(sec: number | null | undefined): string {
  if (sec == null) return "—";
  if (sec < 60) return `${sec}s`;
  const m = Math.floor(sec / 60);
  if (m < 60) return `${m}m ${sec % 60}s`;
  return `${Math.floor(m / 60)}h ${m % 60}m`;
}

export function fmtDate(iso: string | null | undefined): string {
  if (!iso) return "—";
  return new Date(iso).toLocaleString("en-US", {
    month: "short", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit",
  });
}

export function fmtAgo(iso: string | null | undefined): string {
  if (!iso) return "never";
  const days = Math.floor((Date.now() - Date.parse(iso)) / 86_400_000);
  if (days <= 0) return "today";
  if (days === 1) return "yesterday";
  return `${days} days ago`;
}

// ── Row types ───────────────────────────────────────────────────────────────
export type ResultRow = QuizResult & {
  pct: number;
  attempt: number;      // nth try by this person on this module
  rushed: boolean;      // finished suspiciously fast
};

export type ModuleProgress = {
  base: string;
  name: string;
  lessonSec: number;
  lessonVisits: number;
  slidesPct: number | null;   // furthest coverage across lesson sessions
  attempts: number;
  fails: number;
  passed: boolean;
  bestPct: number | null;
  firstPassAt: string | null;
  lastAttemptAt: string | null;
  avgQuizSec: number | null;
};

export type Employee = {
  email: string;
  firstSeen: string | null;
  lastLogin: string | null;
  lastActivity: string | null;
  logins: number;
  appSec: number;       // active time in the app (all pages)
  lessonSec: number;    // active time on lessons
  attempts: number;
  passes: number;
  fails: number;
  modulesPassed: number;
  complete: boolean;
  flags: string[];
  progress: ModuleProgress[];
};

export type ModuleStat = {
  base: string;
  name: string;
  learners: number;
  passedLearners: number;
  attempts: number;
  passRate: number | null;          // % of attempts that passed
  firstTryRate: number | null;      // % of first attempts that passed
  avgScorePct: number | null;
  avgQuizSec: number | null;
  avgLessonSec: number | null;
  missed: { question: string; count: number }[];
};

const avg = (xs: number[]) => (xs.length ? xs.reduce((a, b) => a + b, 0) / xs.length : null);
const round = (n: number | null) => (n === null ? null : Math.round(n));
const latest = (a: string | null, b: string | null | undefined) => (!a ? b ?? null : !b ? a : a > b ? a : b);
const earliest = (a: string | null, b: string | null | undefined) => (!a ? b ?? null : !b ? a : a < b ? a : b);

// ── Aggregation ─────────────────────────────────────────────────────────────
export function buildResultRows(results: QuizResult[]): ResultRow[] {
  const asc = [...results].sort((a, b) => a.taken_at.localeCompare(b.taken_at));
  const counts = new Map<string, number>();
  const rows = asc.map((r) => {
    const key = `${r.name}|${baseId(r.module_id)}`;
    const attempt = (counts.get(key) ?? 0) + 1;
    counts.set(key, attempt);
    return {
      ...r,
      pct: r.total ? Math.round((r.score / r.total) * 100) : 0,
      attempt,
      rushed: r.duration_seconds != null && r.duration_seconds < r.total * RUSHED_SECONDS_PER_QUESTION,
    };
  });
  return rows.reverse(); // newest first
}

export function buildEmployees(rows: ResultRow[], events: TrainingEvent[]): Employee[] {
  const emails = new Set<string>([...rows.map((r) => r.name), ...events.map((e) => e.email)]);
  const now = Date.now();

  return Array.from(emails).map((email) => {
    const rs = rows.filter((r) => r.name === email);
    const es = events.filter((e) => e.email === email);
    const visits  = es.filter((e) => e.event_type === "login");
    const lessons = es.filter((e) => e.event_type === "lesson");

    const progress: ModuleProgress[] = TRACKED_MODULES.map((base) => {
      const mr = rs.filter((r) => baseId(r.module_id) === base);
      const ml = lessons.filter((e) => e.module_id && baseId(e.module_id) === base);
      const timed = mr.map((r) => r.duration_seconds).filter((d): d is number => d != null);
      const passedRows = mr.filter((r) => r.passed).sort((a, b) => a.taken_at.localeCompare(b.taken_at));
      const coverage = ml
        .filter((e) => e.total_slides)
        .map((e) => Math.round(((e.slides_viewed ?? 0) / e.total_slides!) * 100));
      return {
        base,
        name: moduleName(base),
        lessonSec: ml.reduce((s, e) => s + e.duration_seconds, 0),
        lessonVisits: ml.length,
        slidesPct: coverage.length ? Math.max(...coverage) : null,
        attempts: mr.length,
        fails: mr.filter((r) => !r.passed).length,
        passed: passedRows.length > 0,
        bestPct: mr.length ? Math.max(...mr.map((r) => r.pct)) : null,
        firstPassAt: passedRows[0]?.taken_at ?? null,
        lastAttemptAt: mr.reduce<string | null>((a, r) => latest(a, r.taken_at), null),
        avgQuizSec: round(avg(timed)),
      };
    });

    const lastLogin = visits.reduce<string | null>((a, e) => latest(a, e.started_at), null);
    const lastActivity = [
      lastLogin,
      ...lessons.map((e) => e.last_seen_at),
      ...rs.map((r) => r.taken_at),
    ].reduce<string | null>((a, b) => latest(a, b), null);
    const firstSeen = [
      ...es.map((e) => e.started_at),
      ...rs.map((r) => r.taken_at),
    ].reduce<string | null>((a, b) => earliest(a, b), null);

    const modulesPassed = progress.filter((p) => p.passed).length;
    const complete = modulesPassed === TRACKED_MODULES.length;

    const flags: string[] = [];
    for (const p of progress) {
      if (!p.passed && p.fails >= STUCK_FAILS) flags.push(`Stuck: ${p.name} (${p.fails} fails)`);
    }
    if (rs.some((r) => r.rushed)) flags.push("Rushed a quiz");
    if (!complete && lastActivity && now - Date.parse(lastActivity) > INACTIVE_DAYS * 86_400_000) {
      flags.push(`Inactive ${INACTIVE_DAYS}+ days`);
    }

    return {
      email, firstSeen, lastLogin, lastActivity,
      logins: visits.length,
      appSec: visits.reduce((s, e) => s + e.duration_seconds, 0),
      lessonSec: lessons.reduce((s, e) => s + e.duration_seconds, 0),
      attempts: rs.length,
      passes: rs.filter((r) => r.passed).length,
      fails: rs.filter((r) => !r.passed).length,
      modulesPassed, complete, flags, progress,
    };
  }).sort((a, b) => (b.lastActivity ?? "").localeCompare(a.lastActivity ?? ""));
}

export function buildModuleStats(rows: ResultRow[], events: TrainingEvent[]): ModuleStat[] {
  const pct = (n: number, d: number) => (d ? Math.round((n / d) * 100) : null);
  return TRACKED_MODULES.map((base) => {
    const mr = rows.filter((r) => baseId(r.module_id) === base);
    const ml = events.filter((e) => e.event_type === "lesson" && e.module_id && baseId(e.module_id) === base);
    const firstTry = mr.filter((r) => r.attempt === 1);
    const missedCounts = new Map<string, number>();
    mr.forEach((r) => r.missed_questions?.forEach((q) => missedCounts.set(q, (missedCounts.get(q) ?? 0) + 1)));
    const timed = mr.map((r) => r.duration_seconds).filter((d): d is number => d != null);
    const lessonByPerson = new Map<string, number>();
    ml.forEach((e) => lessonByPerson.set(e.email, (lessonByPerson.get(e.email) ?? 0) + e.duration_seconds));

    return {
      base, name: moduleName(base),
      learners: new Set(mr.map((r) => r.name)).size,
      passedLearners: new Set(mr.filter((r) => r.passed).map((r) => r.name)).size,
      attempts: mr.length,
      passRate: pct(mr.filter((r) => r.passed).length, mr.length),
      firstTryRate: pct(firstTry.filter((r) => r.passed).length, firstTry.length),
      avgScorePct: round(avg(mr.map((r) => r.pct))),
      avgQuizSec: round(avg(timed)),
      avgLessonSec: round(avg([...lessonByPerson.values()])),
      missed: Array.from(missedCounts, ([question, count]) => ({ question, count }))
        .sort((a, b) => b.count - a.count).slice(0, 5),
    };
  });
}

// ── CSV ─────────────────────────────────────────────────────────────────────
export function downloadCsv(filename: string, header: string[], rows: (string | number | null | undefined)[][]) {
  const esc = (v: string | number | null | undefined) => {
    const s = v == null ? "" : String(v);
    return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  };
  const csv = [header, ...rows].map((r) => r.map(esc).join(",")).join("\r\n");
  const url = URL.createObjectURL(new Blob(["﻿" + csv], { type: "text/csv;charset=utf-8" }));
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

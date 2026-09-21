"use client";
import { Fragment, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Home, CheckCircle, XCircle, RefreshCw, Lock, Download, Search, AlertTriangle,
  Users, ClipboardList, Activity, BarChart3, ChevronDown, ChevronRight, LogIn, BookOpen, Zap,
} from "lucide-react";
import type { QuizResult, TrainingEvent } from "@/lib/supabase";
import {
  TRACKED_MODULES, baseId, moduleName, fmtDate, fmtAgo, fmtDuration, downloadCsv,
  buildResultRows, buildEmployees, buildModuleStats,
  type ResultRow, type Employee,
} from "@/lib/adminStats";

const C = {
  charcoal:   "#2D2926",
  yellow:     "#C9B10A",
  lightGray:  "#EBEBEB",
  white:      "#FFFFFF",
  textDark:   "#1E1B18",
  textMuted:  "#5A5550",
  textLight:  "#FFFFFF",
  textSubtle: "#B8B0A8",
  red:        "#e05050",
  green:      "#3f7d3f",
};

const F = {
  heading: "Georgia, 'Times New Roman', serif",
  body:    "Calibri, 'Trebuchet MS', Arial, sans-serif",
};

type Tab = "employees" | "results" | "activity" | "modules";
const TABS: { key: Tab; label: string; icon: typeof Users }[] = [
  { key: "employees", label: "Employees",    icon: Users },
  { key: "results",   label: "Quiz Results", icon: ClipboardList },
  { key: "activity",  label: "Activity Log", icon: Activity },
  { key: "modules",   label: "Modules",      icon: BarChart3 },
];

const RANGES = [
  { key: "all", label: "All time", days: 0 },
  { key: "7",   label: "Last 7 days", days: 7 },
  { key: "30",  label: "Last 30 days", days: 30 },
  { key: "90",  label: "Last 90 days", days: 90 },
];

const card  = { background: C.white, border: "1px solid #D0CECA" } as const;
const th    = "px-4 py-3 text-left text-xs font-bold tracking-widest whitespace-nowrap";
const td    = "px-4 py-3";
const select = "px-3 py-2 rounded-lg text-sm outline-none";

function Pill({ children, color, bg }: { children: React.ReactNode; color: string; bg: string }) {
  return (
    <span className="px-2 py-0.5 rounded text-xs font-bold whitespace-nowrap" style={{ color, background: bg }}>
      {children}
    </span>
  );
}

function ResultBadge({ passed }: { passed: boolean }) {
  return passed
    ? <span className="flex items-center gap-1 text-xs font-bold" style={{ color: C.yellow }}><CheckCircle size={13} /> PASSED</span>
    : <span className="flex items-center gap-1 text-xs font-bold" style={{ color: C.red }}><XCircle size={13} /> FAILED</span>;
}

function Table({ head, children, empty }: { head: string[]; children: React.ReactNode; empty?: boolean }) {
  if (empty) {
    return <div className="rounded-2xl p-8 text-center" style={{ background: C.white }}><p style={{ color: C.textMuted }}>Nothing matches these filters.</p></div>;
  }
  return (
    <div className="rounded-2xl overflow-hidden shadow-sm" style={card}>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr style={{ background: C.charcoal, borderBottom: `2px solid ${C.yellow}` }}>
              {head.map((h) => <th key={h} className={th} style={{ color: C.textSubtle }}>{h}</th>)}
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </table>
      </div>
    </div>
  );
}

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authed, setAuthed]     = useState(false);
  const [authKey, setAuthKey]   = useState("");
  const [results, setResults]   = useState<QuizResult[]>([]);
  const [events, setEvents]     = useState<TrainingEvent[]>([]);
  const [noEventsTable, setNoEventsTable] = useState(false);
  const [error, setError]       = useState("");
  const [loading, setLoading]   = useState(false);
  const [loadedAt, setLoadedAt] = useState(0);

  const [tab, setTab]           = useState<Tab>("employees");
  const [search, setSearch]     = useState("");
  const [moduleFilter, setModuleFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState<"all" | "passed" | "failed">("all");
  const [range, setRange]       = useState("all");
  const [attentionOnly, setAttentionOnly] = useState(false);
  const [open, setOpen]         = useState<string | null>(null);

  const fetchAll = async (key: string) => {
    setLoading(true);
    setError("");
    try {
      const headers = { "x-admin-key": key };
      const [rRes, eRes] = await Promise.all([
        fetch("/api/results", { headers }),
        fetch("/api/events", { headers }),
      ]);
      if (rRes.status === 401 || eRes.status === 401) { setError("Incorrect password."); return; }
      if (!rRes.ok) { setError("Something went wrong. Try again."); return; }
      const rJson = await rRes.json();
      const eJson = eRes.ok ? await eRes.json() : { events: [] };
      setResults(rJson.results ?? []);
      setEvents(eJson.events ?? []);
      setNoEventsTable(!eRes.ok || !!eJson.missingTable);
      setLoadedAt(Date.now());
      setAuthed(true);
    } catch {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthKey(password);
    fetchAll(password);
  };

  // ── Derived data ──────────────────────────────────────────────────────────
  const rows      = useMemo(() => buildResultRows(results), [results]);
  const employees = useMemo(() => buildEmployees(rows, events), [rows, events]);
  const modStats  = useMemo(() => buildModuleStats(rows, events), [rows, events]);

  const q = search.trim().toLowerCase();
  const cutoff = (() => {
    const days = RANGES.find((r) => r.key === range)?.days ?? 0;
    return days ? loadedAt - days * 86_400_000 : 0;
  })();
  const inRange = (iso: string) => Date.parse(iso) >= cutoff;
  const modMatch = (id: string | null) => moduleFilter === "all" || (!!id && baseId(id) === moduleFilter);

  const filteredRows = rows.filter((r) =>
    (!q || r.name.includes(q)) && modMatch(r.module_id) && inRange(r.taken_at) &&
    (statusFilter === "all" || (statusFilter === "passed") === r.passed));

  const filteredEmployees = employees.filter((e) =>
    (!q || e.email.includes(q)) && (!attentionOnly || e.flags.length > 0));

  type Feed = { at: string; kind: "login" | "lesson" | "quiz"; email: string; module: string | null; duration: number | null; detail: string; passed?: boolean };
  const feed: Feed[] = useMemo(() => [
    ...events.map((e): Feed => ({
      at: e.started_at, kind: e.event_type, email: e.email, module: e.module_id, duration: e.duration_seconds,
      detail: e.event_type === "lesson" && e.total_slides ? `${e.slides_viewed ?? 0} of ${e.total_slides} slides viewed` : "",
    })),
    ...rows.map((r): Feed => ({
      at: r.taken_at, kind: "quiz", email: r.name, module: r.module_id, duration: r.duration_seconds ?? null,
      detail: `${r.score}/${r.total} (${r.pct}%) · attempt ${r.attempt}`, passed: r.passed,
    })),
  ].sort((a, b) => b.at.localeCompare(a.at)), [events, rows]);
  const filteredFeed = feed.filter((f) => (!q || f.email.includes(q)) && modMatch(f.module) && inRange(f.at));

  // ── Summary tiles ─────────────────────────────────────────────────────────
  const passCount = rows.filter((r) => r.passed).length;
  const weekAgo = loadedAt - 7 * 86_400_000;
  const activeThisWeek = employees.filter((e) => e.lastActivity && Date.parse(e.lastActivity) > weekAgo).length;
  const needAttention = employees.filter((e) => e.flags.length > 0).length;
  const timed = rows.map((r) => r.duration_seconds).filter((d): d is number => d != null);
  const avgQuiz = timed.length ? Math.round(timed.reduce((a, b) => a + b, 0) / timed.length) : null;

  const tiles = [
    { label: "Employees",        value: employees.length,               color: C.charcoal },
    { label: "Active (7 days)",  value: activeThisWeek,                 color: C.charcoal },
    { label: "Quiz Attempts",    value: rows.length,                    color: C.charcoal },
    { label: "Pass Rate",        value: rows.length ? `${Math.round((passCount / rows.length) * 100)}%` : "—", color: "#1a3a1a" },
    { label: "Avg Quiz Time",    value: fmtDuration(avgQuiz),           color: C.charcoal },
    { label: "Need Attention",   value: needAttention,                  color: needAttention ? "#3a1a1a" : C.charcoal },
  ];

  // ── CSV exports ───────────────────────────────────────────────────────────
  const exportEmployees = () => downloadCsv("dtec-employees.csv",
    ["Email", "Last login", "Logins", "Time in app", "Time on lessons", "Quiz attempts", "Passed attempts", "Failed attempts", "Modules passed", "Modules total", "Flags"],
    filteredEmployees.map((e) => [e.email, e.lastLogin, e.logins, fmtDuration(e.appSec), fmtDuration(e.lessonSec),
      e.attempts, e.passes, e.fails, e.modulesPassed, TRACKED_MODULES.length, e.flags.join("; ")]));
  const exportResults = () => downloadCsv("dtec-quiz-results.csv",
    ["Email", "Module", "Lang", "Attempt #", "Score", "Total", "Percent", "Result", "Taken at", "Quiz duration (sec)", "Missed questions"],
    filteredRows.map((r) => [r.name, moduleName(r.module_id), r.lang, r.attempt, r.score, r.total, r.pct,
      r.passed ? "Passed" : "Failed", r.taken_at, r.duration_seconds, r.missed_questions?.join(" | ")]));
  const exportActivity = () => downloadCsv("dtec-activity.csv",
    ["When", "Type", "Email", "Module", "Active time (sec)", "Detail"],
    filteredFeed.map((f) => [f.at, f.kind, f.email, f.module ? moduleName(f.module) : "", f.duration, f.detail]));

  const exportBtn = (onClick: () => void) => (
    <button onClick={onClick} className="flex items-center gap-1.5 text-xs px-3 py-2 rounded-lg" style={{ background: C.yellow, color: C.charcoal }}>
      <Download size={13} /> Export CSV
    </button>
  );

  const moduleSelect = (
    <select value={moduleFilter} onChange={(e) => setModuleFilter(e.target.value)} className={select} style={{ background: C.white, color: C.textDark }}>
      <option value="all">All modules</option>
      {TRACKED_MODULES.map((m) => <option key={m} value={m}>{moduleName(m)}</option>)}
    </select>
  );
  const rangeSelect = (
    <select value={range} onChange={(e) => setRange(e.target.value)} className={select} style={{ background: C.white, color: C.textDark }}>
      {RANGES.map((r) => <option key={r.key} value={r.key}>{r.label}</option>)}
    </select>
  );

  const employeeDetail = (e: Employee) => {
    const recent = feed.filter((f) => f.email === e.email).slice(0, 8);
    return (
      <div className="px-6 py-5 space-y-5" style={{ background: "#F4F2EF" }}>
        {e.flags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {e.flags.map((f) => <Pill key={f} color="#7a2020" bg="#FBE4E4">{f}</Pill>)}
          </div>
        )}
        <div>
          <p className="text-xs font-bold tracking-widest mb-2" style={{ color: C.textMuted }}>TRAINING PROGRESS</p>
          <div className="rounded-xl overflow-x-auto" style={card}>
            <table className="w-full text-xs">
              <thead>
                <tr style={{ borderBottom: "1px solid #ECEAE8", color: C.textMuted }}>
                  {["Module", "Status", "Lesson time", "Slides seen", "Attempts", "Fails", "Best", "Avg quiz time", "Passed on"].map((h) => (
                    <th key={h} className="px-3 py-2 text-left font-bold whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {e.progress.map((p) => (
                  <tr key={p.base} style={{ borderBottom: "1px solid #ECEAE8", color: C.textDark }}>
                    <td className="px-3 py-2 font-medium">{p.name}</td>
                    <td className="px-3 py-2">
                      {p.passed ? <Pill color="#1a3a1a" bg="#DDF0DD">Passed</Pill>
                        : p.attempts ? <Pill color="#7a2020" bg="#FBE4E4">Not passed</Pill>
                        : p.lessonVisits ? <Pill color="#7a5a00" bg="#FBF1CC">In progress</Pill>
                        : <Pill color={C.textMuted} bg="#E4E1DD">Not started</Pill>}
                    </td>
                    <td className="px-3 py-2">{p.lessonVisits ? `${fmtDuration(p.lessonSec)} (${p.lessonVisits}×)` : "—"}</td>
                    <td className="px-3 py-2">{p.slidesPct != null ? `${p.slidesPct}%` : "—"}</td>
                    <td className="px-3 py-2">{p.attempts || "—"}</td>
                    <td className="px-3 py-2" style={{ color: p.fails ? C.red : undefined }}>{p.fails || "—"}</td>
                    <td className="px-3 py-2">{p.bestPct != null ? `${p.bestPct}%` : "—"}</td>
                    <td className="px-3 py-2">{fmtDuration(p.avgQuizSec)}</td>
                    <td className="px-3 py-2 whitespace-nowrap">{p.firstPassAt ? fmtDate(p.firstPassAt) : "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <p className="text-xs font-bold tracking-widest mb-2" style={{ color: C.textMuted }}>RECENT ACTIVITY</p>
          {recent.length === 0 ? <p className="text-xs" style={{ color: C.textMuted }}>No activity yet.</p> : (
            <ul className="space-y-1 text-xs" style={{ color: C.textDark }}>
              {recent.map((f, i) => (
                <li key={i}>
                  <span style={{ color: C.textMuted }}>{fmtDate(f.at)}</span> — {f.kind === "login" ? "Logged in" : f.kind === "lesson" ? `Lesson: ${moduleName(f.module)}` : `Quiz: ${moduleName(f.module)}`}
                  {f.duration != null && f.duration > 0 && ` · ${fmtDuration(f.duration)}`}
                  {f.detail && ` · ${f.detail}`}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  };

  const missedList = (r: ResultRow) => r.missed_questions?.length
    ? <ul className="list-disc pl-4 space-y-0.5">{r.missed_questions.map((m) => <li key={m}>{m}</li>)}</ul>
    : <span style={{ color: C.textMuted }}>—</span>;

  return (
    <div className="min-h-screen" style={{ background: C.lightGray, fontFamily: F.body }}>
      <header style={{ background: C.charcoal }} className="px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-1 text-sm" style={{ color: C.textSubtle }}>
              <Home size={15} />
            </Link>
            <div>
              <h1 className="text-lg font-bold" style={{ color: C.textLight, fontFamily: F.heading }}>Training Results</h1>
              <p className="text-xs" style={{ color: C.textSubtle }}>DTEC Admin Dashboard</p>
            </div>
          </div>
          <a href="https://trustdtec.com" target="_blank" rel="noopener noreferrer" style={{ mixBlendMode: "screen" }}>
            <Image src="/images/dtec_30_years.png" alt="DTEC" width={80} height={32} className="object-contain" style={{ filter: "invert(1) opacity(0.85)" }} />
          </a>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {!authed ? (
          <div className="flex justify-center">
            <div className="w-full max-w-sm rounded-2xl overflow-hidden shadow-sm" style={card}>
              <div className="px-6 py-5" style={{ borderBottom: `3px solid ${C.yellow}` }}>
                <div className="flex items-center gap-3">
                  <Lock size={20} style={{ color: C.yellow }} />
                  <h2 className="font-bold" style={{ color: C.textDark, fontFamily: F.heading }}>Admin Access</h2>
                </div>
              </div>
              <form onSubmit={handleLogin} className="px-6 py-5 space-y-4">
                <div>
                  <label className="block text-xs font-bold mb-1.5 tracking-widest" style={{ color: C.textMuted }}>PASSWORD</label>
                  <input
                    type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter admin password" autoFocus
                    className="w-full px-4 py-2.5 rounded-xl text-sm outline-none border-2 border-transparent focus:border-[#C9B10A] transition-colors"
                    style={{ background: C.lightGray, color: C.textDark }}
                  />
                  {error && <p className="text-xs mt-1.5" style={{ color: C.red }}>{error}</p>}
                </div>
                <button type="submit" disabled={loading || !password}
                  className="w-full py-2.5 rounded-xl font-medium text-sm disabled:opacity-40"
                  style={{ background: C.charcoal, color: C.textLight }}>
                  {loading ? "Loading…" : "View Results"}
                </button>
              </form>
            </div>
          </div>
        ) : (
          <>
            {noEventsTable && (
              <div className="rounded-xl px-4 py-3 mb-5 text-sm flex items-start gap-2" style={{ background: "#FBF1CC", color: "#5a4500" }}>
                <AlertTriangle size={16} className="mt-0.5 shrink-0" />
                <span>Login and time tracking isn&apos;t set up in the database yet — run <b>supabase/admin-tracking.sql</b> in the Supabase SQL Editor. Quiz results below still work.</span>
              </div>
            )}

            {/* Summary tiles */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
              {tiles.map((s) => (
                <div key={s.label} className="rounded-2xl px-4 py-3.5 shadow-sm" style={{ background: s.color, border: "1px solid #D0CECA" }}>
                  <p className="text-xs mb-1" style={{ color: C.textSubtle }}>{s.label}</p>
                  <p className="text-2xl font-bold" style={{ color: C.yellow, fontFamily: F.heading }}>{s.value}</p>
                </div>
              ))}
            </div>

            {/* Tabs + refresh */}
            <div className="flex flex-wrap justify-between items-center gap-3 mb-4">
              <div className="flex flex-wrap gap-2">
                {TABS.map(({ key, label, icon: Icon }) => (
                  <button key={key} onClick={() => setTab(key)}
                    className="flex items-center gap-1.5 text-sm px-3.5 py-2 rounded-lg font-medium"
                    style={tab === key ? { background: C.charcoal, color: C.yellow } : { background: C.white, color: C.textDark, border: "1px solid #D0CECA" }}>
                    <Icon size={14} /> {label}
                  </button>
                ))}
              </div>
              <button onClick={() => fetchAll(authKey)} disabled={loading}
                className="flex items-center gap-1.5 text-xs px-3 py-2 rounded-lg disabled:opacity-50"
                style={{ background: C.charcoal, color: C.textLight }}>
                <RefreshCw size={12} className={loading ? "animate-spin" : ""} /> Refresh
              </button>
            </div>

            {/* Filters */}
            {tab !== "modules" && (
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <div className="relative">
                  <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: C.textMuted }} />
                  <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search email…"
                    className="pl-8 pr-3 py-2 rounded-lg text-sm outline-none w-56" style={{ background: C.white, color: C.textDark }} />
                </div>
                {tab !== "employees" && moduleSelect}
                {tab !== "employees" && rangeSelect}
                {tab === "results" && (
                  <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value as typeof statusFilter)} className={select} style={{ background: C.white, color: C.textDark }}>
                    <option value="all">Passed &amp; failed</option>
                    <option value="passed">Passed only</option>
                    <option value="failed">Failed only</option>
                  </select>
                )}
                {tab === "employees" && (
                  <label className="flex items-center gap-1.5 text-sm px-2" style={{ color: C.textDark }}>
                    <input type="checkbox" checked={attentionOnly} onChange={(e) => setAttentionOnly(e.target.checked)} />
                    Needs attention only
                  </label>
                )}
                <div className="ml-auto">
                  {tab === "employees" && exportBtn(exportEmployees)}
                  {tab === "results"   && exportBtn(exportResults)}
                  {tab === "activity"  && exportBtn(exportActivity)}
                </div>
              </div>
            )}

            {/* ── Employees ── */}
            {tab === "employees" && (
              <Table empty={filteredEmployees.length === 0}
                head={["", "Employee", "Progress", "Last login", "Logins", "Time on lessons", "Time in app", "Quizzes", "Fails", "Flags"]}>
                {filteredEmployees.map((e, i) => (
                  <Fragment key={e.email}>
                    <tr onClick={() => setOpen(open === e.email ? null : e.email)} className="cursor-pointer"
                      style={{ background: i % 2 === 0 ? C.white : "#F9F8F7", borderBottom: "1px solid #ECEAE8" }}>
                      <td className="pl-4 py-3" style={{ color: C.textMuted }}>{open === e.email ? <ChevronDown size={14} /> : <ChevronRight size={14} />}</td>
                      <td className={`${td} font-medium`} style={{ color: C.textDark }}>{e.email}</td>
                      <td className={td} style={{ color: C.textDark }}>
                        <div className="flex items-center gap-2">
                          <div className="h-1.5 w-20 rounded-full" style={{ background: "#E4E1DD" }}>
                            <div className="h-full rounded-full" style={{ width: `${(e.modulesPassed / TRACKED_MODULES.length) * 100}%`, background: e.complete ? C.green : C.yellow }} />
                          </div>
                          <span className="text-xs whitespace-nowrap">{e.modulesPassed}/{TRACKED_MODULES.length}</span>
                        </div>
                      </td>
                      <td className={`${td} text-xs`} style={{ color: C.textMuted }}>
                        {e.lastLogin ? <>{fmtDate(e.lastLogin)}<br /><span style={{ color: C.textSubtle }}>{fmtAgo(e.lastLogin)}</span></> : "—"}
                      </td>
                      <td className={td} style={{ color: C.textDark }}>{e.logins || "—"}</td>
                      <td className={td} style={{ color: C.textDark }}>{e.lessonSec ? fmtDuration(e.lessonSec) : "—"}</td>
                      <td className={td} style={{ color: C.textDark }}>{e.appSec ? fmtDuration(e.appSec) : "—"}</td>
                      <td className={td} style={{ color: C.textDark }}>{e.attempts}</td>
                      <td className={td} style={{ color: e.fails ? C.red : C.textMuted, fontWeight: e.fails ? 700 : 400 }}>{e.fails}</td>
                      <td className={td}>
                        {e.flags.length
                          ? <Pill color="#7a2020" bg="#FBE4E4">{e.flags.length} flag{e.flags.length > 1 ? "s" : ""}</Pill>
                          : e.complete ? <Pill color="#1a3a1a" bg="#DDF0DD">Complete</Pill> : null}
                      </td>
                    </tr>
                    {open === e.email && <tr><td colSpan={10} style={{ borderBottom: "1px solid #ECEAE8" }}>{employeeDetail(e)}</td></tr>}
                  </Fragment>
                ))}
              </Table>
            )}

            {/* ── Quiz results ── */}
            {tab === "results" && (
              <Table empty={filteredRows.length === 0}
                head={["Employee", "Module", "Lang", "Attempt", "Score", "Result", "Quiz time", "Missed questions", "Taken"]}>
                {filteredRows.map((r, i) => (
                  <tr key={r.id} style={{ background: i % 2 === 0 ? C.white : "#F9F8F7", borderBottom: "1px solid #ECEAE8" }}>
                    <td className={`${td} font-medium`} style={{ color: C.textDark }}>{r.name}</td>
                    <td className={td} style={{ color: C.textMuted }}>{moduleName(r.module_id)}</td>
                    <td className={td}>
                      <Pill color={r.lang === "en" ? "#4338CA" : "#92400E"} bg={r.lang === "en" ? "#EEF2FF" : "#FEF9EC"}>{r.lang.toUpperCase()}</Pill>
                    </td>
                    <td className={td} style={{ color: C.textDark }}>
                      #{r.attempt}
                    </td>
                    <td className={td} style={{ color: C.textDark }}>
                      {r.score}/{r.total}<span className="ml-1.5 text-xs" style={{ color: C.textMuted }}>({r.pct}%)</span>
                    </td>
                    <td className={td}><ResultBadge passed={r.passed} /></td>
                    <td className={`${td} text-xs whitespace-nowrap`} style={{ color: C.textDark }}>
                      {fmtDuration(r.duration_seconds)}
                      {r.rushed && <span className="ml-1.5 inline-flex items-center gap-0.5 font-bold" style={{ color: "#b45309" }} title="Finished in under 3 seconds per question"><Zap size={11} />Fast</span>}
                    </td>
                    <td className={`${td} text-xs`} style={{ color: C.textDark, minWidth: 220 }}>{missedList(r)}</td>
                    <td className={`${td} text-xs whitespace-nowrap`} style={{ color: C.textMuted }}>{fmtDate(r.taken_at)}</td>
                  </tr>
                ))}
              </Table>
            )}

            {/* ── Activity log ── */}
            {tab === "activity" && (
              <Table empty={filteredFeed.length === 0} head={["When", "Employee", "Activity", "Module", "Active time", "Detail"]}>
                {filteredFeed.slice(0, 500).map((f, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? C.white : "#F9F8F7", borderBottom: "1px solid #ECEAE8" }}>
                    <td className={`${td} text-xs whitespace-nowrap`} style={{ color: C.textMuted }}>{fmtDate(f.at)}</td>
                    <td className={`${td} font-medium`} style={{ color: C.textDark }}>{f.email}</td>
                    <td className={td}>
                      {f.kind === "login" && <span className="flex items-center gap-1 text-xs font-bold" style={{ color: "#4338CA" }}><LogIn size={13} /> LOGIN</span>}
                      {f.kind === "lesson" && <span className="flex items-center gap-1 text-xs font-bold" style={{ color: "#0f766e" }}><BookOpen size={13} /> LESSON</span>}
                      {f.kind === "quiz" && (f.passed
                        ? <span className="flex items-center gap-1 text-xs font-bold" style={{ color: C.yellow }}><CheckCircle size={13} /> QUIZ PASSED</span>
                        : <span className="flex items-center gap-1 text-xs font-bold" style={{ color: C.red }}><XCircle size={13} /> QUIZ FAILED</span>)}
                    </td>
                    <td className={td} style={{ color: C.textMuted }}>{f.module ? moduleName(f.module) : "—"}</td>
                    <td className={`${td} text-xs`} style={{ color: C.textDark }}>{f.duration ? fmtDuration(f.duration) : "—"}</td>
                    <td className={`${td} text-xs`} style={{ color: C.textMuted }}>{f.detail || "—"}</td>
                  </tr>
                ))}
              </Table>
            )}

            {/* ── Module stats ── */}
            {tab === "modules" && (
              <>
                <Table empty={false}
                  head={["Module", "Learners", "Passed", "Attempts", "Pass rate", "1st-try pass", "Avg score", "Avg lesson time", "Avg quiz time"]}>
                  {modStats.map((m, i) => (
                    <tr key={m.base} style={{ background: i % 2 === 0 ? C.white : "#F9F8F7", borderBottom: "1px solid #ECEAE8" }}>
                      <td className={`${td} font-medium`} style={{ color: C.textDark }}>{m.name}</td>
                      <td className={td} style={{ color: C.textDark }}>{m.learners}</td>
                      <td className={td} style={{ color: C.textDark }}>{m.passedLearners}</td>
                      <td className={td} style={{ color: C.textDark }}>{m.attempts}</td>
                      <td className={td} style={{ color: C.textDark }}>{m.passRate != null ? `${m.passRate}%` : "—"}</td>
                      <td className={td} style={{ color: C.textDark }}>{m.firstTryRate != null ? `${m.firstTryRate}%` : "—"}</td>
                      <td className={td} style={{ color: C.textDark }}>{m.avgScorePct != null ? `${m.avgScorePct}%` : "—"}</td>
                      <td className={td} style={{ color: C.textDark }}>{fmtDuration(m.avgLessonSec)}</td>
                      <td className={td} style={{ color: C.textDark }}>{fmtDuration(m.avgQuizSec)}</td>
                    </tr>
                  ))}
                </Table>

                <h2 className="font-bold text-sm mt-8 mb-3" style={{ color: C.textDark, fontFamily: F.heading }}>Most-missed questions</h2>
                {modStats.every((m) => m.missed.length === 0) ? (
                  <div className="rounded-2xl p-6 text-center text-sm" style={{ background: C.white, color: C.textMuted }}>
                    Shows up after employees miss questions on quizzes taken with the new tracking.
                  </div>
                ) : (
                  <div className="grid md:grid-cols-2 gap-4">
                    {modStats.filter((m) => m.missed.length).map((m) => (
                      <div key={m.base} className="rounded-2xl p-4 shadow-sm" style={card}>
                        <p className="font-bold text-sm mb-2" style={{ color: C.textDark }}>{m.name}</p>
                        <ul className="space-y-1.5 text-xs" style={{ color: C.textDark }}>
                          {m.missed.map((x) => (
                            <li key={x.question} className="flex gap-2">
                              <span className="font-bold shrink-0" style={{ color: C.red }}>{x.count}×</span>
                              <span>{x.question}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

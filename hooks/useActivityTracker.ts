"use client";
import { useEffect, useRef } from "react";

const EMAIL_KEY = "dtec_email";
const IDLE_LIMIT_MS = 120_000; // no mouse/key/touch for 2 min = stop counting
const FLUSH_EVERY_S = 30;

type Options = {
  enabled?: boolean;
  /** If set, the session id + start time persist in sessionStorage under this key (one per browser tab session). Otherwise every mount is a new session. */
  sessionKey?: string;
  eventType: "login" | "lesson";
  moduleId?: string;
  lang?: string;
  /** Extra fields sent with each heartbeat (e.g. slides viewed). Read fresh on every flush. */
  getExtra?: () => Record<string, number>;
  /** Count time even without interaction (e.g. audio read-aloud playing). */
  keepActive?: boolean;
};

/**
 * Counts *active* seconds (tab visible + recent interaction) and heartbeats
 * them to /api/events. Silent no-op until the employee has entered an email.
 */
export function useActivityTracker({ enabled = true, sessionKey, eventType, moduleId, lang, getExtra, keepActive }: Options) {
  const keepActiveRef = useRef(keepActive);
  const getExtraRef   = useRef(getExtra);
  useEffect(() => { keepActiveRef.current = keepActive; getExtraRef.current = getExtra; });

  useEffect(() => {
    if (!enabled) return;
    const { sessionId, started } = getSession(sessionKey);
    let seconds = 0;
    let sent = -1;
    let lastInput = Date.now();

    const bump = () => { lastInput = Date.now(); };
    const inputEvents = ["mousemove", "mousedown", "keydown", "touchstart", "scroll", "click"] as const;
    inputEvents.forEach((e) => window.addEventListener(e, bump, { passive: true }));

    const flush = () => {
      const email = localStorage.getItem(EMAIL_KEY);
      if (!email || seconds === sent) return;
      sent = seconds;
      fetch("/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        keepalive: true,
        body: JSON.stringify({
          session_id: sessionId,
          email,
          event_type: eventType,
          module_id: moduleId,
          lang,
          started_at: started,
          duration_seconds: seconds,
          ...(getExtraRef.current?.() ?? {}),
        }),
      }).catch(() => {});
    };

    // First heartbeat right away so the login/lesson start is recorded even for short visits
    flush();

    const tick = setInterval(() => {
      const visible = document.visibilityState === "visible";
      const recent  = Date.now() - lastInput < IDLE_LIMIT_MS;
      if (visible && (recent || keepActiveRef.current)) seconds++;
      if (seconds > 0 && seconds % FLUSH_EVERY_S === 0) flush();
    }, 1000);

    const onHide = () => { if (document.visibilityState === "hidden") flush(); };
    document.addEventListener("visibilitychange", onHide);
    window.addEventListener("pagehide", flush);

    return () => {
      clearInterval(tick);
      inputEvents.forEach((e) => window.removeEventListener(e, bump));
      document.removeEventListener("visibilitychange", onHide);
      window.removeEventListener("pagehide", flush);
      flush();
    };
  }, [enabled, sessionKey, eventType, moduleId, lang]);
}

function getSession(key?: string): { sessionId: string; started: string } {
  const fresh = { sessionId: newSessionId(), started: new Date().toISOString() };
  if (!key) return fresh;
  try {
    const saved = sessionStorage.getItem(key);
    if (saved) return JSON.parse(saved);
    sessionStorage.setItem(key, JSON.stringify(fresh));
  } catch { /* storage blocked: fall back to a per-mount session */ }
  return fresh;
}

function newSessionId(): string {
  return typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

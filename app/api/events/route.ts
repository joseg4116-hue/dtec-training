import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";
import { isAdmin } from "@/lib/adminAuth";

const EVENT_TYPES = ["login", "lesson"];
const MAX_SECONDS = 12 * 60 * 60;

const clampInt = (v: unknown, max: number) =>
  typeof v === "number" && Number.isFinite(v) ? Math.max(0, Math.min(max, Math.round(v))) : null;

// Heartbeat upsert: one row per session_id, duration grows as the session goes on.
export async function POST(req: NextRequest) {
  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Bad JSON" }, { status: 400 });
  }
  const { session_id, email, event_type, module_id, lang, started_at, duration_seconds, slides_viewed, total_slides } = body ?? {};

  if (!session_id || !email || !EVENT_TYPES.includes(event_type)) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const startedMs = Date.parse(started_at);
  const { error } = await getSupabaseAdmin()
    .from("training_events")
    .upsert(
      {
        session_id: String(session_id).slice(0, 64),
        email: String(email).trim().toLowerCase().slice(0, 200),
        event_type,
        module_id: module_id ? String(module_id).slice(0, 64) : null,
        lang: lang ? String(lang).slice(0, 5) : null,
        started_at: Number.isFinite(startedMs) ? new Date(startedMs).toISOString() : new Date().toISOString(),
        last_seen_at: new Date().toISOString(),
        duration_seconds: clampInt(duration_seconds, MAX_SECONDS) ?? 0,
        slides_viewed: clampInt(slides_viewed, 1000),
        total_slides: clampInt(total_slides, 1000),
      },
      { onConflict: "session_id" }
    );

  if (error) {
    console.error("Supabase events upsert error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ ok: true });
}

export async function GET(req: NextRequest) {
  if (!isAdmin(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { data, error } = await getSupabaseAdmin()
    .from("training_events")
    .select("*")
    .order("started_at", { ascending: false })
    .limit(10000);

  // Table not created yet (migration not run) -> empty list, not an error
  if (error) {
    if (error.code === "PGRST205" || error.code === "42P01") {
      return NextResponse.json({ events: [], missingTable: true });
    }
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ events: data });
}

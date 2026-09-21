import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";
import { isAdmin } from "@/lib/adminAuth";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email, module_id, lang, score, total, passed, started_at, duration_seconds, missed_questions } = body;

  if (!email || !module_id || !lang || score == null || total == null) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const base = { name: email, module_id, lang, score, total, passed };
  const extra = {
    started_at: started_at ?? null,
    duration_seconds: typeof duration_seconds === "number" ? Math.round(duration_seconds) : null,
    missed_questions: Array.isArray(missed_questions) ? missed_questions : null,
  };

  let { error } = await getSupabaseAdmin().from("quiz_results").insert([{ ...base, ...extra }]);

  // New columns not added yet (admin-tracking.sql not run): save the core result anyway
  if (error && (error.code === "PGRST204" || error.code === "42703")) {
    ({ error } = await getSupabaseAdmin().from("quiz_results").insert([base]));
  }

  if (error) {
    console.error("Supabase insert error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}

export async function GET(req: NextRequest) {
  const email = req.nextUrl.searchParams.get("email");

  if (req.headers.has("x-admin-key") || req.nextUrl.searchParams.has("key")) {
    if (!isAdmin(req)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const { data, error } = await getSupabaseAdmin()
      .from("quiz_results")
      .select("*")
      .order("taken_at", { ascending: false });
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ results: data });
  }

  if (email) {
    const { data, error } = await getSupabaseAdmin()
      .from("quiz_results")
      .select("module_id")
      .eq("name", email)
      .eq("passed", true);
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ passed: data?.map((r) => r.module_id) ?? [] });
  }

  return NextResponse.json({ error: "Missing key or email param" }, { status: 400 });
}

import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email, module_id, lang, score, total, passed } = body;

  if (!email || !module_id || !lang || score == null || total == null) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const { error } = await getSupabaseAdmin()
    .from("quiz_results")
    .insert([{ name: email, module_id, lang, score, total, passed }]);

  if (error) {
    console.error("Supabase insert error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}

export async function GET(req: NextRequest) {
  const key   = req.nextUrl.searchParams.get("key");
  const email = req.nextUrl.searchParams.get("email");

  if (key !== null) {
    if (key !== process.env.ADMIN_PASSWORD) {
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

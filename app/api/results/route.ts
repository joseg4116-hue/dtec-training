import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";
import { getAuthUser } from "@/lib/supabase-server";

export async function POST(req: NextRequest) {
  const user = await getAuthUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const { module_id, lang, score, total, passed } = body;

  if (!module_id || !lang || score == null || total == null) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const name = user.user_metadata?.full_name ?? user.email ?? "Unknown";

  const { error } = await getSupabaseAdmin().from("quiz_results").insert([
    { name, module_id, lang, score, total, passed, user_id: user.id },
  ]);

  if (error) {
    console.error("Supabase insert error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}

export async function GET(req: NextRequest) {
  const key = req.nextUrl.searchParams.get("key");
  if (key !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { data, error } = await getSupabaseAdmin()
    .from("quiz_results")
    .select("*")
    .order("taken_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ results: data });
}

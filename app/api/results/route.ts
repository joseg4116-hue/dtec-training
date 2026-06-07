import { NextRequest, NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, module_id, lang, score, total, passed } = body;

  if (!name || !module_id || !lang || score == null || total == null) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const { error } = await getSupabase().from("quiz_results").insert([
    { name, module_id, lang, score, total, passed },
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

  const { data, error } = await getSupabase()
    .from("quiz_results")
    .select("*")
    .order("taken_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ results: data });
}

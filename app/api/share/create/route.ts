import { NextRequest, NextResponse } from "next/server";
import { randomBytes } from "crypto";
import { setShare } from "@/lib/share-store";

export async function POST(req: NextRequest) {
  const { moduleId, moduleTitle } = await req.json();
  if (!moduleId) return NextResponse.json({ error: "Missing moduleId" }, { status: 400 });

  const id = randomBytes(8).toString("hex");
  const now = Date.now();

  setShare({ id, moduleId, moduleTitle, createdAt: now, expiresAt: now + 24 * 60 * 60 * 1000 });

  const host = req.headers.get("host") ?? "localhost:3000";
  const protocol = host.startsWith("localhost") ? "http" : "https";
  const shareUrl = `${protocol}://${host}/modules/${moduleId}/lesson?share=${id}`;

  return NextResponse.json({ id, shareUrl });
}

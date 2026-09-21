import { NextRequest } from "next/server";

// Admin password comes from the x-admin-key header (preferred) or the
// legacy ?key= query param used by the original dashboard.
export function isAdmin(req: NextRequest): boolean {
  const key = req.headers.get("x-admin-key") ?? req.nextUrl.searchParams.get("key");
  return key !== null && key === process.env.ADMIN_PASSWORD;
}

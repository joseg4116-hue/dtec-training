"use client";
import { usePathname } from "next/navigation";
import { useActivityTracker } from "@/hooks/useActivityTracker";

/** One "login" row per browser-tab session: when they arrived + active time in the app. */
export default function VisitTracker() {
  const pathname = usePathname();
  useActivityTracker({
    enabled: !pathname.startsWith("/admin"),
    sessionKey: "dtec_visit",
    eventType: "login",
  });
  return null;
}

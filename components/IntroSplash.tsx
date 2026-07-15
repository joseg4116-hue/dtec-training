"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const HOLD_MS = 3500;
const FADE_MS = 500;

export default function IntroSplash() {
  const [phase, setPhase] = useState<"visible" | "fading" | "done">("visible");

  useEffect(() => {
    const fadeTimer = setTimeout(() => setPhase("fading"), HOLD_MS);
    const doneTimer = setTimeout(() => setPhase("done"), HOLD_MS + FADE_MS);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      aria-hidden="true"
      className={`intro-splash ${phase === "fading" ? "intro-splash-fade" : ""}`}
    >
      <div className="intro-logo-wrap">
        <Image
          src="/images/dtec_30_years.png"
          alt=""
          width={220}
          height={92}
          priority
          className="intro-splash-logo"
          style={{ filter: "invert(1) opacity(0.85)", mixBlendMode: "screen" }}
        />
        <span className="intro-shine" />
      </div>
    </div>
  );
}

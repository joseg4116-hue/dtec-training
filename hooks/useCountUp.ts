"use client";
import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

const NUM = /^(-?[\d,]+\.?\d*)/;

function format(n: number, decimals: number, grouped: boolean): string {
  const fixed = n.toFixed(decimals);
  if (!grouped) return fixed;
  const [whole, frac] = fixed.split(".");
  const withCommas = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return frac ? `${withCommas}.${frac}` : withCommas;
}

/** Animates the leading number in a stat string (e.g. "40%", "1,200 lbs") from 0 up to its value. */
export function useCountUp(raw: string, duration = 900): string {
  const reduced = usePrefersReducedMotion();
  const [display, setDisplay] = useState(raw);

  useEffect(() => {
    const match = raw.match(NUM);
    if (!match || reduced) return;

    const numText  = match[0];
    const suffix   = raw.slice(numText.length);
    const target   = parseFloat(numText.replace(/,/g, ""));
    const grouped  = numText.includes(",");
    const decimals = (numText.split(".")[1] || "").length;

    let start: number | null = null;
    let raf = 0;

    function tick(ts: number) {
      if (start === null) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(format(target * eased, decimals, grouped) + suffix);
      if (p < 1) raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [raw, reduced, duration]);

  return display;
}

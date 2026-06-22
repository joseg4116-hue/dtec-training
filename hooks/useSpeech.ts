"use client";
import { useEffect, useRef, useState } from "react";
import { SpeechSegment } from "@/lib/getSlideSegments";

const RATES = [0.8, 1.0, 1.25] as const;
type Rate = (typeof RATES)[number];

function pickVoice(lang: "en" | "es"): SpeechSynthesisVoice | null {
  const voices = window.speechSynthesis.getVoices();
  if (!voices.length) return null;

  const preferred = lang === "es"
    ? ["Google español de Estados Unidos", "Google español", "es-US", "es-MX", "es-ES"]
    : ["Google US English", "Samantha", "Alex", "en-US", "en-GB"];

  for (const name of preferred) {
    const match = voices.find(
      (v) => v.name === name || v.lang === name
    );
    if (match) return match;
  }
  // Fallback: first voice matching the language family
  const family = lang === "es" ? "es" : "en";
  return voices.find((v) => v.lang.startsWith(family)) ?? null;
}

export function useSpeech() {
  const [isPlaying, setIsPlaying]   = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [rate, setRate]             = useState<Rate>(1.0);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    // voices load async in some browsers
    window.speechSynthesis?.getVoices();
    window.speechSynthesis?.addEventListener("voiceschanged", () => {});
    return () => { window.speechSynthesis?.cancel(); };
  }, []);

  function cycleRate() {
    setRate((r) => {
      const idx = RATES.indexOf(r);
      return RATES[(idx + 1) % RATES.length];
    });
  }

  function speak(
    fullText: string,
    lang: "en" | "es",
    segments: SpeechSegment[],
    onEnd?: () => void
  ) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(fullText);
    utterance.lang  = lang === "es" ? "es-MX" : "en-US";
    utterance.rate  = rate;
    const voice = pickVoice(lang);
    if (voice) utterance.voice = voice;

    utterance.onstart = () => setIsPlaying(true);
    utterance.onboundary = (e) => {
      if (e.name !== "word") return;
      const active = [...segments].reverse().find((s) => s.charStart <= e.charIndex);
      setActiveIndex(active?.index ?? -1);
    };
    utterance.onend = () => {
      setIsPlaying(false);
      setActiveIndex(-1);
      onEnd?.();
    };
    utterance.onerror = () => {
      setIsPlaying(false);
      setActiveIndex(-1);
    };
    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  }

  function stop() {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
    setActiveIndex(-1);
  }

  return { speak, stop, isPlaying, activeIndex, rate, cycleRate };
}

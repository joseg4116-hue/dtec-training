"use client";
import { useEffect, useRef, useState } from "react";
import { SpeechSegment } from "@/lib/getSlideSegments";

export function useSpeech() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    return () => { window.speechSynthesis?.cancel(); };
  }, []);

  function speak(
    fullText: string,
    lang: "en" | "es",
    segments: SpeechSegment[],
    onEnd?: () => void
  ) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(fullText);
    utterance.lang = lang === "es" ? "es-MX" : "en-US";
    utterance.rate = 0.92;
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

  return { speak, stop, isPlaying, activeIndex };
}

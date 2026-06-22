"use client";
import { useParams } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import {
  ChevronLeft, ChevronRight, Home, ClipboardList,
  Volume2, VolumeX, Repeat,
} from "lucide-react";
import { modules } from "@/data/modules";
import SlideRenderer from "@/components/slides/SlideRenderer";
import Link from "next/link";
import Image from "next/image";
import { useSpeech } from "@/hooks/useSpeech";
import { getSlideSegments } from "@/lib/getSlideSegments";

export default function LessonPage() {
  const { id } = useParams<{ id: string }>();
  const module = modules.find((m) => m.id === id);

  const [current, setCurrent]     = useState(0);
  const [direction, setDirection] = useState<"forward" | "back">("forward");
  const [autoPlay, setAutoPlay]   = useState(false);

  const { speak, stop, isPlaying, activeIndex, rate, cycleRate } = useSpeech();

  useEffect(() => {
    const saved = localStorage.getItem(`dtec_lesson_${id}`);
    setCurrent(saved ? parseInt(saved, 10) : 0);
  }, [id]);

  useEffect(() => {
    if (!module) return;
    localStorage.setItem(`dtec_lesson_${id}`, String(current));
  }, [id, current, module]);

  const total = module?.slides.length ?? 0;

  const goTo = useCallback((next: number, dir: "forward" | "back") => {
    stop();
    setDirection(dir);
    setCurrent(next);
  }, [stop]);

  // Auto-play: speak the slide, then advance on end
  useEffect(() => {
    if (!autoPlay || !module) return;
    const slide = module.slides[current];
    const { fullText, segments } = getSlideSegments(slide);
    const onEnd = current < total - 1
      ? () => { setDirection("forward"); setCurrent((c) => c + 1); }
      : () => setAutoPlay(false);
    speak(fullText, module.lang, segments, onEnd);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current, autoPlay]);

  if (!module) return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: "#1a1a1a" }}>
      <p className="text-white/50">Module not found.</p>
    </div>
  );

  const slide   = module.slides[current];
  const progress = ((current + 1) / total) * 100;

  const prev = () => current > 0         && goTo(current - 1, "back");
  const next = () => current < total - 1 && goTo(current + 1, "forward");

  function toggleSpeech() {
    if (isPlaying) {
      stop();
    } else {
      const { fullText, segments } = getSlideSegments(slide);
      const onEnd = current < total - 1 ? () => goTo(current + 1, "forward") : undefined;
      speak(fullText, module!.lang, segments, onEnd);
    }
  }

  function toggleAutoPlay() {
    if (autoPlay) {
      stop();
      setAutoPlay(false);
    } else {
      setAutoPlay(true);
    }
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#1a1a1a" }}>

      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-black/40">
        <Link href="/" className="text-white/60 hover:text-white flex items-center gap-1 text-sm">
          <Home size={15} /> Home
        </Link>
        <a href="https://trustdtec.com" target="_blank" rel="noopener noreferrer" style={{ mixBlendMode: "screen" }}>
          <Image src="/images/dtec_30_years.png" alt="DTEC" width={80} height={32} className="object-contain" style={{ filter: "invert(1) opacity(0.85)" }} />
        </a>
        <span className="text-white/60 text-xs">{current + 1} / {total}</span>
      </div>

      {/* Progress bar */}
      <div className="h-1 bg-white/10">
        <div className="h-full transition-all duration-500" style={{ width: `${progress}%`, background: "#C8A84B" }} />
      </div>

      {/* Slide — key forces remount → CSS animation fires */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div
          key={current}
          className={`relative w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl ${direction === "forward" ? "slide-enter-forward" : "slide-enter-back"}`}
          style={{ aspectRatio: "16/9" }}
        >
          <SlideRenderer slide={slide} moduleNum={module.moduleNum} lang={module.lang} activeIndex={activeIndex} />
        </div>
      </div>

      {/* Take quiz CTA — last slide */}
      {current === total - 1 && (
        <div className="flex justify-center pb-2">
          <Link
            href={`/modules/${id}/quiz`}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium"
            style={{ background: "#C9B10A", color: "#2D2926", fontFamily: "Calibri, sans-serif" }}
          >
            <ClipboardList size={16} />
            {id.endsWith("-es") ? "Tomar el Examen" : "Take the Quiz"}
          </Link>
        </div>
      )}

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 pb-6">
        <button onClick={prev} disabled={current === 0}
          className="w-12 h-12 rounded-full flex items-center justify-center text-white disabled:opacity-30 hover:bg-white/10 transition-colors">
          <ChevronLeft size={28} />
        </button>

        {/* Dot indicators */}
        <div className="flex gap-1.5">
          {module.slides.map((_, i) => (
            <button key={i} onClick={() => goTo(i, i > current ? "forward" : "back")}
              className="w-2 h-2 rounded-full transition-all duration-300"
              style={{ background: i === current ? "#C8A84B" : "rgba(255,255,255,0.3)", transform: i === current ? "scale(1.4)" : "scale(1)" }}
            />
          ))}
        </div>

        <button onClick={next} disabled={current === total - 1}
          className="w-12 h-12 rounded-full flex items-center justify-center text-white disabled:opacity-30 hover:bg-white/10 transition-colors">
          <ChevronRight size={28} />
        </button>

        {/* Read aloud */}
        <button onClick={toggleSpeech} title={isPlaying ? "Stop" : "Read slide aloud"}
          className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200"
          style={{ background: isPlaying && !autoPlay ? "#C8A84B" : "rgba(255,255,255,0.1)", color: isPlaying && !autoPlay ? "#1a1a1a" : "white" }}>
          {isPlaying && !autoPlay ? <VolumeX size={22} /> : <Volume2 size={22} />}
        </button>

        {/* Auto-play */}
        <button onClick={toggleAutoPlay} title={autoPlay ? "Stop auto-play" : "Auto-play all slides"}
          className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200"
          style={{ background: autoPlay ? "#C8A84B" : "rgba(255,255,255,0.1)", color: autoPlay ? "#1a1a1a" : "white" }}>
          <Repeat size={20} />
        </button>

        {/* Speed */}
        <button onClick={cycleRate} title="Playback speed"
          className="px-3 h-9 rounded-full text-xs font-bold transition-all duration-200 hover:bg-white/10"
          style={{ background: "rgba(255,255,255,0.1)", color: "white", minWidth: "44px" }}>
          {rate}×
        </button>
      </div>

    </div>
  );
}

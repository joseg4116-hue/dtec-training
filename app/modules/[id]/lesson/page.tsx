"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Home, ClipboardList } from "lucide-react";
import { modules } from "@/data/modules";
import SlideRenderer from "@/components/slides/SlideRenderer";
import Link from "next/link";
import Image from "next/image";

export default function LessonPage() {
  const { id } = useParams<{ id: string }>();
  const module = modules.find((m) => m.id === id);

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem(`dtec_lesson_${id}`);
    setCurrent(saved ? parseInt(saved, 10) : 0);
  }, [id]);

  useEffect(() => {
    if (!module) return;
    localStorage.setItem(`dtec_lesson_${id}`, String(current));
  }, [id, current, module]);

  if (!module) return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: "#F5F0E8" }}>
      <p className="text-gray-500">Module not found.</p>
    </div>
  );

  const slide = module.slides[current];
  const total = module.slides.length;
  const progress = ((current + 1) / total) * 100;

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(total - 1, c + 1));

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#1a1a1a" }}>
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-black/40">
        <Link href="/" className="text-white/60 hover:text-white flex items-center gap-1 text-sm">
          <Home size={15} /> Home
        </Link>
        <Image src="/images/dtec_30_years.png" alt="DTEC" width={80} height={32} className="object-contain" style={{ filter: "invert(1)", opacity: 0.7 }} />
        <span className="text-white/60 text-xs">{current + 1} / {total}</span>
      </div>

      {/* Progress bar */}
      <div className="h-1 bg-white/10">
        <div className="h-full transition-all duration-300" style={{ width: `${progress}%`, background: "#C8A84B" }} />
      </div>

      {/* Slide */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div
          className="relative w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl"
          style={{ aspectRatio: "16/9" }}
        >
          <SlideRenderer slide={slide} moduleNum={module.moduleNum} lang={module.lang} />
        </div>
      </div>

      {/* Take quiz CTA — shown on last slide */}
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
      <div className="flex items-center justify-center gap-6 pb-6">
        <button
          onClick={prev}
          disabled={current === 0}
          className="w-12 h-12 rounded-full flex items-center justify-center text-white disabled:opacity-30 hover:bg-white/10 transition-colors"
        >
          <ChevronLeft size={28} />
        </button>
        <div className="flex gap-1.5">
          {module.slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="w-2 h-2 rounded-full transition-all"
              style={{ background: i === current ? "#C8A84B" : "rgba(255,255,255,0.3)" }}
            />
          ))}
        </div>
        <button
          onClick={next}
          disabled={current === total - 1}
          className="w-12 h-12 rounded-full flex items-center justify-center text-white disabled:opacity-30 hover:bg-white/10 transition-colors"
        >
          <ChevronRight size={28} />
        </button>
      </div>

    </div>
  );
}

"use client";
import { modules } from "@/data/modules";
import Link from "next/link";
import Image from "next/image";
import { BookOpen, Globe, ClipboardList, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";

const C = {
  charcoal: "#2D2926",
  yellow:   "#C9B10A",
  lightGray: "#EBEBEB",
  textDark:  "#1E1B18",
  textMuted: "#5A5550",
  textLight: "#FFFFFF",
  textSubtle: "#B8B0A8",
};

// Only show module 00 for now
const visibleNums = [0];

export default function Home() {
  const [passed, setPassed] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const result: Record<string, boolean> = {};
    modules.forEach((m) => {
      result[m.id] = localStorage.getItem(`dtec_passed_${m.id}`) === "1";
    });
    setPassed(result);
  }, []);

  return (
    <main className="min-h-screen" style={{ background: C.lightGray, fontFamily: "Calibri, 'Trebuchet MS', Arial, sans-serif" }}>
      {/* Header */}
      <header style={{ background: C.charcoal }} className="px-6 py-5">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold" style={{ color: C.textLight, fontFamily: "Georgia, 'Times New Roman', serif" }}>
              Stormwater Training
            </h1>
            <p className="text-xs mt-0.5" style={{ color: C.textSubtle }}>
              Colorado Erosion Control & Stormwater Management
            </p>
          </div>
          <a href="https://trustdtec.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/dtec_30_years.png"
              alt="DTEC logo"
              width={120}
              height={50}
              className="object-contain"
              style={{ filter: "invert(1) opacity(0.65)" }}
            />
          </a>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-6 py-8 space-y-6">
        {visibleNums.map((num) => {
          const versions = modules.filter((m) => m.moduleNum === num);
          const en = versions.find((m) => m.lang === "en");
          const es = versions.find((m) => m.lang === "es");
          const enPassed = en ? passed[en.id] : false;
          const esPassed = es ? passed[es.id] : false;

          return (
            <div key={num} className="rounded-2xl overflow-hidden shadow-sm" style={{ background: C.textLight, border: `1px solid #D0CECA` }}>
              {/* Module header */}
              <div className="px-6 py-4 flex items-center gap-3" style={{ borderBottom: `3px solid ${C.yellow}` }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center font-bold shrink-0"
                  style={{ background: C.charcoal, color: C.yellow, fontFamily: "Georgia, serif" }}>
                  {String(num).padStart(2, "0")}
                </div>
                <div className="flex-1">
                  <h2 className="font-bold" style={{ color: C.textDark, fontFamily: "Georgia, serif" }}>
                    {en?.title ?? es?.title}
                  </h2>
                  <p className="text-xs" style={{ color: C.textMuted }}>{en?.subtitle ?? es?.subtitle}</p>
                </div>
                {(enPassed || esPassed) && (
                  <span className="flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full"
                    style={{ background: "#f0f7ee", color: "#2d6a2d" }}>
                    <CheckCircle size={13} /> Passed
                  </span>
                )}
              </div>

              {/* Language options */}
              <div className="px-6 py-4 flex gap-3 flex-wrap">
                {en && (
                  <Link href={`/modules/${en.id}/lesson`}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium hover:opacity-90 transition-opacity"
                    style={{ background: C.charcoal, color: C.textLight }}>
                    <BookOpen size={16} />
                    {enPassed ? "Review English" : "Start in English"}
                    <span className="ml-1 text-xs opacity-60">({en.slides.length} slides)</span>
                  </Link>
                )}
                {es && (
                  <Link href={`/modules/${es.id}/lesson`}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium hover:opacity-90 transition-opacity border-2"
                    style={{ borderColor: C.charcoal, color: C.textDark }}>
                    <Globe size={16} />
                    {esPassed ? "Repasar Español" : "Comenzar en Español"}
                    <span className="ml-1 text-xs opacity-60">({es.slides.length} slides)</span>
                  </Link>
                )}
              </div>

              {/* Quiz links */}
              <div className="px-6 pb-4 flex gap-3 flex-wrap border-t pt-3" style={{ borderColor: "#E0DDD9" }}>
                {en && (
                  <Link href={`/modules/${en.id}/quiz`}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium hover:opacity-90 transition-opacity"
                    style={{ background: enPassed ? "#e8f5e9" : C.yellow, color: enPassed ? "#2d6a2d" : C.charcoal }}>
                    {enPassed ? <CheckCircle size={15} /> : <ClipboardList size={15} />}
                    {enPassed ? "Passed (EN)" : "Take Quiz (EN)"}
                  </Link>
                )}
                {es && (
                  <Link href={`/modules/${es.id}/quiz`}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium hover:opacity-90 transition-opacity border-2"
                    style={{ borderColor: esPassed ? "#2d6a2d" : C.yellow, color: esPassed ? "#2d6a2d" : C.textDark }}>
                    {esPassed ? <CheckCircle size={15} /> : <ClipboardList size={15} />}
                    {esPassed ? "Aprobado (ES)" : "Tomar Examen (ES)"}
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <footer className="text-center py-8 text-xs" style={{ color: C.textMuted }}>
        DTEC — Colorado Erosion Control & Stormwater Management
      </footer>
    </main>
  );
}

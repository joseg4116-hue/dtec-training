import { modules } from "@/data/modules";
import Link from "next/link";
import Image from "next/image";
import { BookOpen, Globe } from "lucide-react";

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
          <Image
            src="/images/dtec_30_years.png"
            alt="DTEC logo"
            width={120}
            height={50}
            className="object-contain"
            style={{ filter: "invert(1)" }}
          />
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-6 py-8 space-y-6">
        {visibleNums.map((num) => {
          const versions = modules.filter((m) => m.moduleNum === num);
          const en = versions.find((m) => m.lang === "en");
          const es = versions.find((m) => m.lang === "es");

          return (
            <div key={num} className="rounded-2xl overflow-hidden shadow-sm" style={{ background: C.textLight, border: `1px solid #D0CECA` }}>
              {/* Module header */}
              <div className="px-6 py-4 flex items-center gap-3" style={{ borderBottom: `3px solid ${C.yellow}` }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center font-bold shrink-0"
                  style={{ background: C.charcoal, color: C.yellow, fontFamily: "Georgia, serif" }}>
                  {String(num).padStart(2, "0")}
                </div>
                <div>
                  <h2 className="font-bold" style={{ color: C.textDark, fontFamily: "Georgia, serif" }}>
                    {en?.title ?? es?.title}
                  </h2>
                  <p className="text-xs" style={{ color: C.textMuted }}>{en?.subtitle ?? es?.subtitle}</p>
                </div>
              </div>

              {/* Language options */}
              <div className="px-6 py-4 flex gap-3 flex-wrap">
                {en && (
                  <Link href={`/modules/${en.id}/lesson`}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium hover:opacity-90 transition-opacity"
                    style={{ background: C.charcoal, color: C.textLight }}>
                    <BookOpen size={16} />
                    Start in English
                    <span className="ml-1 text-xs opacity-60">({en.slides.length} slides)</span>
                  </Link>
                )}
                {es && (
                  <Link href={`/modules/${es.id}/lesson`}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium hover:opacity-90 transition-opacity border-2"
                    style={{ borderColor: C.charcoal, color: C.textDark }}>
                    <Globe size={16} />
                    Comenzar en Español
                    <span className="ml-1 text-xs opacity-60">({es.slides.length} slides)</span>
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

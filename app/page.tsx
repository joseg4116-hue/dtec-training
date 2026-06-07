import { modules } from "@/data/modules";
import Link from "next/link";
import { BookOpen, Globe } from "lucide-react";

const moduleNums = [...new Set(modules.map((m) => m.moduleNum))].sort();

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: "#F5F0E8" }}>
      {/* Header */}
      <header style={{ background: "#2D4A2D" }} className="px-6 py-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold tracking-widest mb-1" style={{ color: "#C8A84B" }}>DTEC</p>
          <h1 className="text-2xl font-bold text-white">Stormwater Training</h1>
          <p className="text-sm mt-1" style={{ color: "#A8C5A0" }}>
            Colorado Erosion Control & Stormwater Management
          </p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-8 space-y-8">
        {moduleNums.map((num) => {
          const versions = modules.filter((m) => m.moduleNum === num);
          const en = versions.find((m) => m.lang === "en");
          const es = versions.find((m) => m.lang === "es");
          const base = en ?? es!;

          return (
            <div key={num} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200">
              {/* Module header */}
              <div className="px-6 py-4 flex items-center gap-3" style={{ borderBottom: "3px solid #C8A84B" }}>
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white shrink-0"
                  style={{ background: "#2D4A2D" }}
                >
                  {String(num).padStart(2, "0")}
                </div>
                <div>
                  <h2 className="font-bold text-gray-900">{en?.title ?? es?.title}</h2>
                  <p className="text-xs text-gray-500">{en?.subtitle ?? es?.subtitle}</p>
                </div>
              </div>

              {/* Language options */}
              <div className="px-6 py-4 flex gap-3 flex-wrap">
                {en && (
                  <Link
                    href={`/modules/${en.id}/lesson`}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-white hover:opacity-90 transition-opacity"
                    style={{ background: "#2D4A2D" }}
                  >
                    <BookOpen size={16} />
                    Start in English
                    <span className="ml-1 text-xs opacity-70">({en.slides.length} slides)</span>
                  </Link>
                )}
                {es && (
                  <Link
                    href={`/modules/${es.id}/lesson`}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium hover:opacity-90 transition-opacity border-2"
                    style={{ borderColor: "#2D4A2D", color: "#2D4A2D" }}
                  >
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

      <footer className="text-center py-8 text-xs" style={{ color: "#8B8680" }}>
        DTEC — Colorado Erosion Control & Stormwater Management
      </footer>
    </main>
  );
}

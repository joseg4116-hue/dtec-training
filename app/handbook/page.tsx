"use client";
import { handbookDocs } from "@/data/handbook";
import { Lang } from "@/types/module";
import Link from "next/link";
import { Home, Search, X, ChevronDown, Globe, BookOpen } from "lucide-react";
import { useMemo, useState, useEffect, Fragment } from "react";

const C = {
  charcoal:   "#2D2926",
  yellow:     "#C9B10A",
  lightGray:  "#EBEBEB",
  textDark:   "#1E1B18",
  textMuted:  "#5A5550",
  textLight:  "#FFFFFF",
  textSubtle: "#B8B0A8",
};

const LABELS = {
  en: {
    heading: "Employee Handbook",
    subtitle: "Down to Earth Compliance",
    searchPlaceholder: "Search the handbook…",
    revised: "Revised",
    noResults: (q: string) => `No results for "${q}". Try different terms.`,
    resultsCount: (n: number) => `${n} section${n === 1 ? "" : "s"} match`,
    home: "Home",
  },
  es: {
    heading: "Manual del Empleado",
    subtitle: "Down to Earth Compliance",
    searchPlaceholder: "Buscar en el manual…",
    revised: "Revisado el",
    noResults: (q: string) => `Sin resultados para "${q}". Prueba con otros términos.`,
    resultsCount: (n: number) => `${n} secci${n === 1 ? "ón" : "ones"} coincide${n === 1 ? "" : "n"}`,
    home: "Inicio",
  },
};

function escapeRegExp(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function Highlighted({ text, query }: { text: string; query: string }) {
  const q = query.trim();
  if (!q) return <>{text}</>;
  const parts = text.split(new RegExp(`(${escapeRegExp(q)})`, "ig"));
  return (
    <>
      {parts.map((part, i) =>
        part.toLowerCase() === q.toLowerCase() ? (
          <mark key={i} style={{ background: C.yellow, color: C.charcoal, borderRadius: 2 }}>
            {part}
          </mark>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        )
      )}
    </>
  );
}

export default function HandbookPage() {
  const [lang, setLang] = useState<Lang>("en");
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (window.location.hash === "#es") setLang("es");
  }, []);

  const t = LABELS[lang];
  const doc = handbookDocs[lang];
  const q = query.trim().toLowerCase();

  const results = useMemo(() => {
    if (!q) return doc.sections;
    return doc.sections.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.paragraphs.some((p) => p.toLowerCase().includes(q))
    );
  }, [doc, q]);

  function toggle(id: string) {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  function isOpen(id: string) {
    return q ? true : !!expanded[id];
  }

  return (
    <main className="min-h-screen" style={{ background: C.lightGray, fontFamily: "Calibri, 'Trebuchet MS', Arial, sans-serif" }}>

      <header style={{ background: C.charcoal }} className="px-6 py-5">
        <div className="max-w-2xl mx-auto flex items-center justify-between gap-4">
          <div className="min-w-0">
            <h1 className="text-2xl font-bold truncate" style={{ color: C.textLight, fontFamily: "Georgia, 'Times New Roman', serif" }}>
              {t.heading}
            </h1>
            <p className="text-xs mt-0.5" style={{ color: C.textSubtle }}>
              {t.subtitle}
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button type="button" onClick={() => setLang("en")}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-150"
              style={{ background: lang === "en" ? C.yellow : "#3A3530", color: lang === "en" ? C.charcoal : C.textSubtle }}>
              <BookOpen size={13} /> EN
            </button>
            <button type="button" onClick={() => setLang("es")}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-150"
              style={{ background: lang === "es" ? C.yellow : "#3A3530", color: lang === "es" ? C.charcoal : C.textSubtle }}>
              <Globe size={13} /> ES
            </button>
            <Link href="/"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium"
              style={{ background: "#3A3530", color: C.textSubtle }}>
              <Home size={13} /> {t.home}
            </Link>
          </div>
        </div>
      </header>

      {/* Legal notice banner */}
      <div style={{ background: "#3A3530" }} className="px-6 py-3">
        <div className="max-w-2xl mx-auto">
          <p className="text-[11px] leading-snug" style={{ color: C.textSubtle }}>
            {doc.disclaimer}
          </p>
          <p className="text-[11px] mt-1" style={{ color: C.textSubtle }}>
            {t.revised} {doc.revised}
          </p>
        </div>
      </div>

      {/* Search */}
      <div className="sticky top-0 z-10 px-6 py-3 shadow-sm" style={{ background: C.lightGray, borderBottom: "1px solid #D0CECA" }}>
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: C.textMuted }} />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full pl-9 pr-9 py-2.5 rounded-xl text-sm outline-none border focus:border-[#C9B10A]"
              style={{ background: C.textLight, borderColor: "#D0CECA", color: C.textDark }}
            />
            {query && (
              <button type="button" onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2"
                style={{ color: C.textMuted }}>
                <X size={16} />
              </button>
            )}
          </div>
          {q && (
            <p className="text-xs mt-2" style={{ color: C.textMuted }}>
              {results.length > 0 ? t.resultsCount(results.length) : t.noResults(query.trim())}
            </p>
          )}
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-6 space-y-3">
        {results.map((s) => {
          const open = isOpen(s.id);
          return (
            <div key={s.id} className="rounded-2xl overflow-hidden shadow-sm"
              style={{ background: C.textLight, border: "1px solid #D0CECA" }}>

              <button type="button" onClick={() => toggle(s.id)}
                className="w-full flex items-center justify-between gap-3 px-5 py-3.5 text-left transition-transform duration-150 active:scale-[0.99]"
                style={{ background: C.charcoal }}>
                <div className="flex items-center gap-3 min-w-0">
                  {s.num && (
                    <span className="shrink-0 text-xs font-bold px-2 py-1 rounded-lg"
                      style={{ background: C.yellow, color: C.charcoal, fontFamily: "Georgia, serif" }}>
                      {s.num}
                    </span>
                  )}
                  <span className="font-bold truncate" style={{ color: C.textLight, fontFamily: "Georgia, serif" }}>
                    <Highlighted text={s.title} query={query} />
                  </span>
                </div>
                <ChevronDown size={16} className="shrink-0 transition-transform duration-200"
                  style={{ color: C.yellow, transform: open ? "rotate(180deg)" : "rotate(0deg)" }} />
              </button>

              {open && (
                <div className="px-5 py-4 space-y-3">
                  {s.paragraphs.map((p, i) => (
                    <p key={i} className="text-sm leading-relaxed" style={{ color: C.textDark }}>
                      <Highlighted text={p} query={query} />
                    </p>
                  ))}
                </div>
              )}
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

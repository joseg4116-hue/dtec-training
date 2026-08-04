"use client";
import { handbookDocs, HandbookSection } from "@/data/handbook";
import { handbookCategories } from "@/data/handbookCategories";
import { Lang } from "@/types/module";
import Link from "next/link";
import { Home, Search, X, Globe, BookOpen } from "lucide-react";
import { useMemo, useState, useEffect } from "react";
import { DisclaimerNotice } from "@/components/handbook/DisclaimerNotice";
import { CategorySection } from "@/components/handbook/CategorySection";
import { C, serif, body } from "@/components/handbook/theme";

const LABELS = {
  en: {
    heading: "Employee Handbook",
    subtitle: "Down to Earth Compliance",
    searchPlaceholder: "Search policies (e.g. PTO, overtime)…",
    noResults: (q: string) => `No results for "${q}". Try different terms.`,
    resultsCount: (n: number) => `${n} polic${n === 1 ? "y" : "ies"} match`,
    home: "Home",
  },
  es: {
    heading: "Manual del Empleado",
    subtitle: "Down to Earth Compliance",
    searchPlaceholder: "Buscar políticas (ej. PTO, horas extra)…",
    noResults: (q: string) => `Sin resultados para "${q}". Prueba con otros términos.`,
    resultsCount: (n: number) => `${n} polític${n === 1 ? "a" : "as"} coincide${n === 1 ? "" : "n"}`,
    home: "Inicio",
  },
};

export default function HandbookPage() {
  const [lang, setLang] = useState<Lang>("en");
  const [query, setQuery] = useState("");
  const [categoryOpen, setCategoryOpen] = useState<Record<string, boolean>>({});
  const [policyOpen, setPolicyOpen] = useState<Record<string, boolean>>({});
  const [disclaimerOpen, setDisclaimerOpen] = useState(false);

  useEffect(() => {
    if (window.location.hash === "#es") setLang("es");
  }, []);

  const t = LABELS[lang];
  const doc = handbookDocs[lang];
  const categories = handbookCategories[lang];
  const q = query.trim().toLowerCase();
  const searching = q.length > 0;

  const introSections = useMemo(
    () => doc.sections.filter((s) => s.num === null),
    [doc]
  );

  const sectionsByNum = useMemo(() => {
    const map = new Map<string, HandbookSection>();
    for (const s of doc.sections) if (s.num) map.set(s.num, s);
    return map;
  }, [doc]);

  function matches(s: HandbookSection) {
    return (
      s.title.toLowerCase().includes(q) ||
      s.paragraphs.some((p) => p.toLowerCase().includes(q))
    );
  }

  const groupedCategories = useMemo(() => {
    return categories
      .map((cat) => {
        const allSections = cat.nums
          .map((n) => sectionsByNum.get(n))
          .filter((s): s is HandbookSection => !!s);
        const sections = searching ? allSections.filter(matches) : allSections;
        return { ...cat, sections };
      })
      .filter((cat) => !searching || cat.sections.length > 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories, sectionsByNum, searching, q]);

  const totalMatches = useMemo(
    () => groupedCategories.reduce((n, c) => n + c.sections.length, 0),
    [groupedCategories]
  );

  function toggleCategory(id: string) {
    setCategoryOpen((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  function togglePolicy(id: string) {
    setPolicyOpen((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  return (
    <main className="min-h-screen" style={{ background: C.lightGray, fontFamily: body }}>

      <header style={{ background: C.charcoal }} className="px-4 py-4">
        <div className="max-w-2xl mx-auto flex items-center justify-between gap-3">
          <div className="min-w-0">
            <h1 className="text-xl font-bold truncate" style={{ color: C.textLight, fontFamily: serif }}>
              {t.heading}
            </h1>
            <p className="text-xs mt-0.5" style={{ color: C.textSubtle }}>
              {t.subtitle}
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button type="button" onClick={() => setLang("en")}
              className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg text-xs font-bold transition-all duration-150"
              style={{ background: lang === "en" ? C.yellow : "#3A3530", color: lang === "en" ? C.charcoal : C.textSubtle }}>
              <BookOpen size={14} /> EN
            </button>
            <button type="button" onClick={() => setLang("es")}
              className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg text-xs font-bold transition-all duration-150"
              style={{ background: lang === "es" ? C.yellow : "#3A3530", color: lang === "es" ? C.charcoal : C.textSubtle }}>
              <Globe size={14} /> ES
            </button>
            <Link href="/"
              className="flex items-center gap-1.5 px-3 py-2.5 rounded-lg text-xs font-medium"
              style={{ background: "#3A3530", color: C.textSubtle }}>
              <Home size={14} /> {t.home}
            </Link>
          </div>
        </div>
      </header>

      {/* Search */}
      <div className="sticky top-0 z-10 px-4 py-3 shadow-sm" style={{ background: C.lightGray, borderBottom: "1px solid #D0CECA" }}>
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: C.textMuted }} />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full pl-9 pr-9 py-3 rounded-xl text-[15px] outline-none border focus:border-[#C9B10A]"
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
          {searching && (
            <p className="text-xs mt-2" style={{ color: C.textMuted }}>
              {totalMatches > 0 ? t.resultsCount(totalMatches) : t.noResults(query.trim())}
            </p>
          )}
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-4 space-y-3">
        {!searching && (
          <DisclaimerNotice
            lang={lang}
            disclaimer={doc.disclaimer}
            revised={doc.revised}
            introSections={introSections}
            open={disclaimerOpen}
            onToggle={() => setDisclaimerOpen((v) => !v)}
          />
        )}

        {groupedCategories.map((cat) => (
          <CategorySection
            key={cat.id}
            label={cat.label}
            sections={cat.sections}
            query={query}
            open={searching || !!categoryOpen[cat.id]}
            onToggleCategory={() => toggleCategory(cat.id)}
            openPolicies={policyOpen}
            onTogglePolicy={togglePolicy}
            forceOpenPolicies={searching}
          />
        ))}
      </div>

      <footer className="text-center py-8 text-xs" style={{ color: C.textMuted }}>
        DTEC — Colorado Erosion Control & Stormwater Management
      </footer>
    </main>
  );
}

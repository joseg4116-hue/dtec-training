"use client";
import { modules } from "@/data/modules";
import { Category } from "@/types/module";
import Link from "next/link";
import Image from "next/image";
import { BookOpen, Globe, ClipboardList, CheckCircle, ChevronDown, FileText } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const EMAIL_KEY = "dtec_email";

const C = {
  charcoal:   "#2D2926",
  yellow:     "#C9B10A",
  lightGray:  "#EBEBEB",
  textDark:   "#1E1B18",
  textMuted:  "#5A5550",
  textLight:  "#FFFFFF",
  textSubtle: "#B8B0A8",
};

const CATEGORIES: { key: Category; label: string; visible: number[]; comingSoon: number[] }[] = [
  { key: "welcome", label: "Welcome", visible: [0], comingSoon: [] },
  { key: "stormwater", label: "Stormwater Training", visible: [0, 1], comingSoon: [2] },
  { key: "field-ops", label: "Field Operations", visible: [], comingSoon: [] },
  { key: "advanced", label: "Advanced & Specialty", visible: [], comingSoon: [] },
];

export default function Home() {
  const [email, setEmail]       = useState("");
  const [draft, setDraft]       = useState("");
  const [editing, setEditing]   = useState(false);
  const [passed, setPassed]     = useState<Record<string, boolean>>({});
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const inputRef = useRef<HTMLInputElement>(null);

  function toggleCategory(key: string) {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  useEffect(() => {
    const saved = localStorage.getItem(EMAIL_KEY) ?? "";
    setEmail(saved);
    setDraft(saved);
    if (saved) loadProgress(saved);
  }, []);

  async function loadProgress(e: string) {
    if (!e) { setPassed({}); return; }
    try {
      const res  = await fetch(`/api/results?email=${encodeURIComponent(e)}`);
      const json = await res.json();
      const ids  = new Set<string>(json.passed ?? []);
      const result: Record<string, boolean> = {};
      modules.forEach((m) => { result[m.id] = ids.has(m.id); });
      setPassed(result);
    } catch {
      setPassed({});
    }
  }

  function saveEmail(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = draft.trim().toLowerCase();
    if (!trimmed) return;
    localStorage.setItem(EMAIL_KEY, trimmed);
    setEmail(trimmed);
    setEditing(false);
    loadProgress(trimmed);
  }

  function startEdit() {
    setDraft(email);
    setEditing(true);
    setTimeout(() => inputRef.current?.focus(), 50);
  }

  return (
    <main className="min-h-screen" style={{ background: C.lightGray, fontFamily: "Calibri, 'Trebuchet MS', Arial, sans-serif" }}>

      <header style={{ background: C.charcoal }} className="px-6 py-5">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold" style={{ color: C.textLight, fontFamily: "Georgia, 'Times New Roman', serif" }}>
              Down to Earth Compliance
            </h1>
            <p className="text-xs mt-0.5" style={{ color: C.textSubtle }}>
              Colorado Erosion Control & Stormwater Management
            </p>
          </div>
          <a href="https://trustdtec.com" target="_blank" rel="noopener noreferrer"
            style={{ mixBlendMode: "screen" }}>
            <Image
              src="/images/dtec_30_years.png"
              alt="DTEC logo"
              width={110}
              height={46}
              className="object-contain"
              style={{ filter: "invert(1) opacity(0.85)" }}
            />
          </a>
        </div>
      </header>

      {/* Email progress banner */}
      <div style={{ background: "#3A3530" }} className="px-6 py-3">
        <div className="max-w-2xl mx-auto">
          {editing || !email ? (
            <form onSubmit={saveEmail} className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="email"
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 px-3 py-1.5 rounded-lg text-sm outline-none border border-transparent focus:border-[#C9B10A]"
                style={{ background: "#2D2926", color: C.textLight, fontFamily: "Calibri, sans-serif" }}
              />
              <button type="submit"
                disabled={!draft.trim()}
                className="px-4 py-1.5 rounded-lg text-sm font-medium disabled:opacity-40 transition-transform duration-150 active:scale-95"
                style={{ background: C.yellow, color: C.charcoal }}>
                Save
              </button>
              {email && (
                <button type="button" onClick={() => setEditing(false)}
                  className="text-xs px-2 py-1.5 rounded-lg"
                  style={{ color: C.textSubtle }}>
                  Cancel
                </button>
              )}
            </form>
          ) : (
            <div className="flex items-center justify-between">
              <span className="text-xs" style={{ color: C.textSubtle }}>
                Tracking progress for{" "}
                <span style={{ color: C.textLight }}>{email}</span>
              </span>
              <button onClick={startEdit}
                className="text-xs underline"
                style={{ color: C.textSubtle }}>
                Change
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-8 space-y-4">
        {CATEGORIES.map((cat, ci) => {
          const isOpen = !!expanded[cat.key];
          const isEmpty = cat.visible.length === 0 && cat.comingSoon.length === 0;

          return (
            <div key={cat.key} className="fade-up-enter rounded-2xl overflow-hidden shadow-sm"
              style={{ background: C.textLight, border: `1px solid #D0CECA`, animationDuration: "0.6s", animationDelay: `${ci * 160}ms` }}>

              <button type="button" onClick={() => toggleCategory(cat.key)}
                className="w-full flex items-center justify-between px-6 py-4 transition-transform duration-150 active:scale-[0.99]"
                style={{ background: C.charcoal }}>
                <span className="font-bold" style={{ color: C.textLight, fontFamily: "Georgia, serif" }}>
                  {cat.label}
                </span>
                <ChevronDown size={18}
                  className="transition-transform duration-200"
                  style={{ color: C.yellow, transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }} />
              </button>

              <div className={`accordion ${isOpen ? "accordion-open" : ""}`}>
                <div>
                <div className="p-6 space-y-6" style={{ background: C.lightGray }}>
                  {isEmpty && (
                    <p className="text-sm text-center py-4" style={{ color: C.textMuted }}>
                      New training modules coming soon.
                    </p>
                  )}
                  {cat.visible.map((num) => {
                    const versions = modules.filter((m) => m.moduleNum === num && m.category === cat.key);
                    const en = versions.find((m) => m.lang === "en");
                    const es = versions.find((m) => m.lang === "es");
                    const enPassed = en ? passed[en.id] : false;
                    const esPassed = es ? passed[es.id] : false;
                    const anyPassed = enPassed || esPassed;

                    return (
                      <div key={num} className="rounded-2xl overflow-hidden shadow-sm"
                        style={{ background: C.textLight, border: `1px solid #D0CECA` }}>

                        <div className="px-6 py-4 flex items-center gap-3"
                          style={{ borderBottom: `3px solid ${C.yellow}` }}>
                          <div className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm shrink-0"
                            style={{ background: C.charcoal, color: C.yellow, fontFamily: "Georgia, serif" }}>
                            {String(num).padStart(2, "0")}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h2 className="font-bold truncate" style={{ color: C.textDark, fontFamily: "Georgia, serif" }}>
                              {en?.title ?? es?.title}
                            </h2>
                            <p className="text-xs" style={{ color: C.textMuted }}>{en?.subtitle ?? es?.subtitle}</p>
                          </div>
                          {anyPassed && (
                            <span className="pop-in-enter flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full shrink-0"
                              style={{ background: "#f0f7ee", color: "#2d6a2d" }}>
                              <CheckCircle size={12} /> Passed
                            </span>
                          )}
                        </div>

                        <div className="px-6 pt-4 pb-3 grid grid-cols-2 gap-3">
                          {en && (
                            <Link href={`/modules/${en.id}/lesson`}
                              className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium hover:opacity-90 transition-all duration-150 active:scale-[0.97]"
                              style={{ background: C.charcoal, color: C.textLight }}>
                              <BookOpen size={15} />
                              {enPassed ? "Review EN" : "Start English"}
                            </Link>
                          )}
                          {es && (
                            <Link href={`/modules/${es.id}/lesson`}
                              className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium hover:opacity-90 transition-all duration-150 active:scale-[0.97]"
                              style={{ background: C.charcoal, color: C.yellow }}>
                              <Globe size={15} />
                              {esPassed ? "Repasar ES" : "Iniciar Español"}
                            </Link>
                          )}
                        </div>

                        <div className="px-6 pb-5 grid grid-cols-2 gap-3 border-t pt-3"
                          style={{ borderColor: "#E8E5E2" }}>
                          {en && (
                            <Link href={`/modules/${en.id}/quiz`}
                              className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium hover:opacity-90 transition-all duration-150 active:scale-[0.97]"
                              style={{
                                background: enPassed ? "#e8f5e9" : C.yellow,
                                color: enPassed ? "#2d6a2d" : C.charcoal,
                                border: enPassed ? "1.5px solid #a5d6a7" : "none",
                              }}>
                              {enPassed ? <CheckCircle size={15} /> : <ClipboardList size={15} />}
                              {enPassed ? "Passed (EN)" : "Quiz English"}
                            </Link>
                          )}
                          {es && (
                            <Link href={`/modules/${es.id}/quiz`}
                              className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium hover:opacity-90 transition-all duration-150 active:scale-[0.97]"
                              style={{
                                background: esPassed ? "#e8f5e9" : C.yellow,
                                color: esPassed ? "#2d6a2d" : C.charcoal,
                                border: esPassed ? "1.5px solid #a5d6a7" : "none",
                              }}>
                              {esPassed ? <CheckCircle size={15} /> : <ClipboardList size={15} />}
                              {esPassed ? "Aprobado (ES)" : "Examen Español"}
                            </Link>
                          )}
                        </div>

                      </div>
                    );
                  })}
                  {cat.key === "welcome" && (
                    <div className="rounded-2xl overflow-hidden shadow-sm"
                      style={{ background: C.textLight, border: `1px solid #D0CECA` }}>

                      <div className="px-6 py-4 flex items-center gap-3"
                        style={{ borderBottom: `3px solid ${C.yellow}` }}>
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                          style={{ background: C.charcoal, color: C.yellow }}>
                          <FileText size={18} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h2 className="font-bold truncate" style={{ color: C.textDark, fontFamily: "Georgia, serif" }}>
                            Employee Handbook
                          </h2>
                          <p className="text-xs" style={{ color: C.textMuted }}>Policies, PTO, benefits — searchable reference</p>
                        </div>
                      </div>

                      <div className="px-6 pt-4 pb-5 grid grid-cols-2 gap-3">
                        <Link href="/handbook"
                          className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium hover:opacity-90 transition-all duration-150 active:scale-[0.97]"
                          style={{ background: C.charcoal, color: C.textLight }}>
                          <BookOpen size={15} />
                          Open English
                        </Link>
                        <Link href="/handbook#es"
                          className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium hover:opacity-90 transition-all duration-150 active:scale-[0.97]"
                          style={{ background: C.charcoal, color: C.yellow }}>
                          <Globe size={15} />
                          Abrir Español
                        </Link>
                      </div>
                    </div>
                  )}
                  {cat.comingSoon.map((num) => {
                    const versions = modules.filter((m) => m.moduleNum === num && m.category === cat.key);
                    const en = versions.find((m) => m.lang === "en");
                    const es = versions.find((m) => m.lang === "es");

                    return (
                      <div key={`cs-${num}`} className="rounded-2xl overflow-hidden shadow-sm"
                        style={{ background: "#F7F6F5", border: `1px solid #D0CECA`, opacity: 0.75 }}>

                        <div className="px-6 py-4 flex items-center gap-3"
                          style={{ borderBottom: `3px solid #D0CECA` }}>
                          <div className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm shrink-0"
                            style={{ background: "#9A9590", color: "#FFFFFF", fontFamily: "Georgia, serif" }}>
                            {String(num).padStart(2, "0")}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h2 className="font-bold truncate" style={{ color: C.textMuted, fontFamily: "Georgia, serif" }}>
                              {en?.title ?? es?.title}
                            </h2>
                            <p className="text-xs" style={{ color: C.textSubtle }}>{en?.subtitle ?? es?.subtitle}</p>
                          </div>
                        </div>

                        <div className="px-6 pt-4 pb-3 grid grid-cols-2 gap-3">
                          <div className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium cursor-not-allowed"
                            style={{ background: "#DEDBD8", color: "#9A9590" }}>
                            <BookOpen size={15} />
                            Start English
                          </div>
                          <div className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium cursor-not-allowed"
                            style={{ background: "#DEDBD8", color: "#9A9590" }}>
                            <Globe size={15} />
                            Iniciar Español
                          </div>
                        </div>

                        <div className="px-6 pb-5 grid grid-cols-2 gap-3 border-t pt-3"
                          style={{ borderColor: "#E8E5E2" }}>
                          <div className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium cursor-not-allowed"
                            style={{ background: "#DEDBD8", color: "#9A9590" }}>
                            <ClipboardList size={15} />
                            Quiz English
                          </div>
                          <div className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium cursor-not-allowed"
                            style={{ background: "#DEDBD8", color: "#9A9590" }}>
                            <ClipboardList size={15} />
                            Examen Español
                          </div>
                        </div>

                      </div>
                    );
                  })}
                </div>
                </div>
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

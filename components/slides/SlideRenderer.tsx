"use client";
import { Slide } from "@/types/module";
import Image from "next/image";
import { useCountUp } from "@/hooks/useCountUp";

const C = {
  charcoal:    "#2D2926",
  darkBox:     "#3A3530",
  darkOverlay: "#2A2520",
  yellow:      "#C9B10A",
  yellowLight: "#E8D44D",
  lightGray:   "#EBEBEB",
  white:       "#FFFFFF",
  offWhite:    "#F5F5F3",
  textDark:    "#1E1B18",
  textMuted:   "#5A5550",
  textLight:   "#FFFFFF",
  textSubtle:  "#B8B0A8",
};

const F = {
  heading: "Georgia, 'Times New Roman', serif",
  body:    "Calibri, 'Trebuchet MS', Arial, sans-serif",
};

function Bullet({ text, highlighted }: { text: string; highlighted?: boolean }) {
  return (
    <li className="flex gap-2 leading-snug" style={{ fontFamily: F.body }}>
      <span className="mt-1.5 w-2 h-2 rounded-full shrink-0" style={{ background: C.yellow }} />
      <span style={{
        color: C.textDark,
        background: highlighted ? C.yellow + "40" : "transparent",
        borderRadius: "4px",
        padding: highlighted ? "1px 5px" : "1px 0",
        transition: "background 0.3s ease, padding 0.3s ease",
      }}>{text}</span>
    </li>
  );
}

function Header({ title }: { title: string }) {
  return (
    <div className="px-6 md:px-8 py-3 shrink-0" style={{ background: C.charcoal }}>
      <h2 className="text-base md:text-xl font-bold leading-tight" style={{ color: C.textLight, fontFamily: F.heading }}>{title}</h2>
    </div>
  );
}

// ── Title ─────────────────────────────────────────────────────────────────────
function TitleSlideView({ slide, moduleNum, lang }: { slide: Extract<Slide, { type: "title" }>; moduleNum: number; lang: string }) {
  return (
    <div className="w-full h-full flex flex-col justify-between p-8 md:p-12" style={{ background: C.charcoal }}>
      <div className="flex justify-between items-start">
        <span className="text-xs font-bold tracking-widest" style={{ color: C.yellow, fontFamily: F.body }}>
          MODULE {String(moduleNum).padStart(2, "0")}
        </span>
        <span className="text-xs font-bold" style={{ color: C.textSubtle, fontFamily: F.body }}>{lang.toUpperCase()}</span>
      </div>
      <div>
        <div className="h-1 w-16 mb-6 rounded" style={{ background: C.yellow }} />
        <h1 className="text-3xl md:text-4xl font-bold leading-tight whitespace-pre-line mb-4" style={{ color: C.textLight, fontFamily: F.heading }}>
          {slide.title}
        </h1>
        <p className="text-base md:text-lg" style={{ color: C.textSubtle, fontFamily: F.body }}>{slide.subtitle}</p>
      </div>
      <p className="text-xs" style={{ color: C.textSubtle, fontFamily: F.body }}>DTEC — Colorado Erosion Control & Stormwater Management</p>
    </div>
  );
}

// ── Section Divider ───────────────────────────────────────────────────────────
function SectionDividerView({ slide }: { slide: Extract<Slide, { type: "section-divider" }> }) {
  return (
    <div className="w-full h-full flex" style={{ background: C.lightGray }}>
      <div className="w-2 shrink-0" style={{ background: C.yellow }} />
      <div className="flex flex-col justify-center px-8 md:px-12">
        <span className="text-xs font-bold tracking-widest mb-2" style={{ color: C.yellow, fontFamily: F.body }}>
          SECTION {slide.sectionNum}
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: C.charcoal, fontFamily: F.heading }}>{slide.title}</h2>
        {slide.subtitle && <p className="text-base" style={{ color: C.textMuted, fontFamily: F.body }}>{slide.subtitle}</p>}
      </div>
    </div>
  );
}

// ── Content ───────────────────────────────────────────────────────────────────
function ContentSlideView({ slide, activeIndex }: { slide: Extract<Slide, { type: "content" }>; activeIndex: number }) {
  return (
    <div className="w-full h-full flex flex-col" style={{ background: C.lightGray }}>
      <Header title={slide.title} />
      <div className="flex-1 overflow-hidden flex">
        <div className="flex-1 overflow-auto px-6 md:px-8 py-4">
          <ul className="space-y-2.5 text-sm md:text-base">
            {slide.bullets.map((b, i) => <Bullet key={i} text={b} highlighted={activeIndex === i} />)}
          </ul>
        </div>
        {slide.image && (
          <div className="w-2/5 shrink-0 relative m-3 rounded-xl overflow-hidden">
            <Image src={slide.image} alt="" fill className="object-cover" />
          </div>
        )}
      </div>
      <div className="h-1" style={{ background: C.yellow }} />
    </div>
  );
}

// ── Two Column ────────────────────────────────────────────────────────────────
function TwoColumnView({ slide, activeIndex }: { slide: Extract<Slide, { type: "two-column" }>; activeIndex: number }) {
  const cols = [
    { title: slide.leftTitle, bullets: slide.leftBullets, offset: 0 },
    { title: slide.rightTitle, bullets: slide.rightBullets, offset: slide.leftBullets.length },
  ];
  return (
    <div className="w-full h-full flex flex-col" style={{ background: C.lightGray }}>
      <Header title={slide.title} />
      <div className="flex-1 overflow-hidden flex">
        <div className="flex-1 overflow-auto grid grid-cols-2 divide-x" style={{ borderColor: C.yellow + "40" }}>
          {cols.map((col, ci) => (
            <div key={ci} className="px-5 md:px-6 py-4">
              <p className="text-xs md:text-sm font-bold mb-3" style={{ color: C.charcoal, fontFamily: F.heading }}>{col.title}</p>
              <ul className="space-y-2 text-xs md:text-sm">
                {col.bullets.map((b, i) => <Bullet key={i} text={b} highlighted={activeIndex === col.offset + i} />)}
              </ul>
            </div>
          ))}
        </div>
        {slide.image && (
          <div className="w-2/5 shrink-0 relative m-3 rounded-xl overflow-hidden">
            <Image src={slide.image} alt="" fill className="object-cover" />
          </div>
        )}
      </div>
    </div>
  );
}

// ── Stat Callout ──────────────────────────────────────────────────────────────
function StatCard({ s, i, active }: { s: { value: string; label: string; detail?: string }; i: number; active: boolean }) {
  const value = useCountUp(s.value);
  return (
    <div className="fade-up-enter flex flex-col items-center justify-center rounded-xl p-5 md:p-6 flex-1 min-w-[130px] max-w-[210px] border-2"
      style={{
        background: C.charcoal,
        borderColor: C.yellow,
        boxShadow: active ? `0 0 18px ${C.yellow}70` : "none",
        transition: "box-shadow 0.3s ease",
        animationDelay: `${i * 90}ms`,
      }}>
      <span className="text-4xl md:text-5xl font-bold tabular-nums" style={{ color: C.yellow, fontFamily: F.heading }}>{value}</span>
      <span className="text-xs md:text-sm text-center mt-3 leading-snug" style={{ color: C.textLight, fontFamily: F.body }}>{s.label}</span>
      {s.detail && (
        <span className="text-[10px] md:text-xs text-center mt-2 leading-snug" style={{ color: C.textSubtle, fontFamily: F.body }}>{s.detail}</span>
      )}
    </div>
  );
}

function StatCalloutView({ slide, activeIndex }: { slide: Extract<Slide, { type: "stat-callout" }>; activeIndex: number }) {
  return (
    <div className="w-full h-full flex flex-col" style={{ background: C.lightGray }}>
      <Header title={slide.title} />
      <div className="flex-1 flex items-center justify-center gap-4 md:gap-6 px-6 flex-wrap">
        {slide.stats.map((s, i) => (
          <StatCard key={i} s={s} i={i} active={activeIndex === i} />
        ))}
      </div>
    </div>
  );
}

// ── Image Placeholder ─────────────────────────────────────────────────────────
function ImagePlaceholderView({ slide }: { slide: Extract<Slide, { type: "image-placeholder" }> }) {
  return (
    <div className="w-full h-full flex flex-col" style={{ background: C.lightGray }}>
      <Header title={slide.title} />
      <div className="flex-1 flex flex-col items-center justify-center px-8 gap-3">
        <div className="w-full max-w-2xl rounded-xl flex items-center justify-center p-8 border-2 border-dashed"
          style={{ background: C.white, borderColor: C.yellow + "80", minHeight: "160px" }}>
          <p className="text-sm text-center" style={{ color: C.textMuted, fontFamily: F.body }}>{slide.caption}</p>
        </div>
        {slide.note && <p className="text-xs text-center" style={{ color: C.textMuted, fontFamily: F.body }}>{slide.note}</p>}
      </div>
    </div>
  );
}

// ── Closing ───────────────────────────────────────────────────────────────────
function ClosingSlideView({ slide }: { slide: Extract<Slide, { type: "closing" }> }) {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center text-center px-8 md:px-16 relative" style={{ background: C.darkOverlay }}>
      <div className="h-1 w-24 mb-8 rounded" style={{ background: C.yellow }} />
      <h2 className="text-2xl md:text-3xl font-bold mb-6 leading-snug" style={{ color: C.textLight, fontFamily: F.heading }}>{slide.message}</h2>
      {slide.sub && <p className="text-sm md:text-base max-w-xl" style={{ color: C.textSubtle, fontFamily: F.body }}>{slide.sub}</p>}
      <p className="absolute bottom-5 text-xs" style={{ color: C.textSubtle, fontFamily: F.body }}>
        {slide.footer ?? "DTEC — Colorado Erosion Control & Stormwater Management"}
      </p>
    </div>
  );
}

// ── Numbered List ─────────────────────────────────────────────────────────────
function NumberedListView({ slide, activeIndex }: { slide: Extract<Slide, { type: "numbered-list" }>; activeIndex: number }) {
  return (
    <div className="w-full h-full flex flex-col" style={{ background: C.lightGray }}>
      <Header title={slide.title} />
      {slide.subtitle && (
        <p className="px-6 md:px-8 pt-3 text-xs md:text-sm" style={{ color: C.textMuted, fontFamily: F.body }}>{slide.subtitle}</p>
      )}
      <div className="flex-1 overflow-auto grid grid-cols-2 gap-3 p-5 md:p-6">
        {slide.items.map((item, i) => (
          <div key={i} className="rounded-xl p-4 flex flex-col gap-1"
            style={{
              background: C.charcoal,
              border: `1.5px solid ${C.yellow}`,
              boxShadow: activeIndex === i ? `0 0 0 2px ${C.yellow}80` : "none",
              transition: "box-shadow 0.3s ease",
            }}>
            <span className="text-2xl font-bold" style={{ color: C.yellow, fontFamily: F.heading }}>{item.num}</span>
            <span className="text-sm font-bold" style={{ color: activeIndex === i ? C.yellow : C.textLight, fontFamily: F.heading, transition: "color 0.3s ease" }}>{item.heading}</span>
            <span className="text-xs leading-snug" style={{ color: C.textSubtle, fontFamily: F.body }}>{item.body}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Glossary ──────────────────────────────────────────────────────────────────
function GlossaryView({ slide, activeIndex }: { slide: Extract<Slide, { type: "glossary" }>; activeIndex: number }) {
  return (
    <div className="w-full h-full flex flex-col" style={{ background: C.lightGray }}>
      <Header title={slide.title} />
      <div className="flex-1 overflow-auto px-6 md:px-8 py-3 grid grid-cols-1 gap-2">
        {slide.terms.map((t, i) => (
          <div key={i} className="flex gap-3 items-baseline border-b pb-1.5"
            style={{
              borderColor: C.yellow + "30",
              background: activeIndex === i ? C.yellow + "25" : "transparent",
              borderRadius: "4px",
              padding: activeIndex === i ? "2px 6px" : "0 0",
              transition: "background 0.3s ease, padding 0.3s ease",
            }}>
            <span className="text-sm font-bold shrink-0 w-16" style={{ color: C.charcoal, fontFamily: F.heading }}>{t.term}</span>
            <span className="text-xs md:text-sm" style={{ color: C.textDark, fontFamily: F.body }}>{t.definition}</span>
          </div>
        ))}
      </div>
      <div className="h-1" style={{ background: C.yellow }} />
    </div>
  );
}

// ── Story ─────────────────────────────────────────────────────────────────────
function StoryView({ slide }: { slide: Extract<Slide, { type: "story" }> }) {
  return (
    <div className="w-full h-full flex" style={{ background: C.darkBox }}>
      {slide.image && (
        <div className="w-2/5 shrink-0 relative">
          <Image src={slide.image} alt={slide.title} fill className="object-cover opacity-60" />
          <div className="absolute inset-0" style={{ background: `linear-gradient(to right, transparent, ${C.darkBox})` }} />
        </div>
      )}
      <div className="flex-1 flex flex-col justify-center px-6 md:px-8 py-6 overflow-auto">
        <span className="text-xs font-bold mb-1" style={{ color: C.yellow, fontFamily: F.body }}>{slide.date}</span>
        <h2 className="text-xl md:text-2xl font-bold mb-4" style={{ color: C.textLight, fontFamily: F.heading }}>{slide.title}</h2>
        <p className="text-xs md:text-sm whitespace-pre-line mb-4" style={{ color: C.textSubtle, fontFamily: F.body }}>{slide.body}</p>
        {slide.callout && (
          <div className="border-l-4 pl-4 py-1" style={{ borderColor: C.yellow }}>
            <p className="text-xs md:text-sm font-medium italic" style={{ color: C.textLight, fontFamily: F.body }}>{slide.callout}</p>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Timeline ──────────────────────────────────────────────────────────────────
function TimelineView({ slide, activeIndex }: { slide: Extract<Slide, { type: "timeline" }>; activeIndex: number }) {
  return (
    <div className="w-full h-full flex flex-col" style={{ background: C.lightGray }}>
      <Header title={slide.title} />
      <div className="flex-1 flex flex-col justify-center px-6 md:px-10 gap-4">
        <div className="flex items-start relative">
          <div className="absolute top-3 left-0 right-0 h-0.5" style={{ background: C.yellow + "60" }} />
          {slide.events.map((ev, i) => (
            <div key={i} className="flex-1 flex flex-col items-center relative">
              <div className="w-3 h-3 rounded-full z-10 mb-2"
                style={{
                  background: C.yellow,
                  transform: activeIndex === i ? "scale(1.6)" : "scale(1)",
                  transition: "transform 0.3s ease",
                }} />
              <span className="text-xs font-bold text-center"
                style={{ color: C.charcoal, fontFamily: F.heading, fontWeight: activeIndex === i ? 900 : 700, transition: "font-weight 0.3s ease" }}>{ev.year}</span>
              <span className="text-xs text-center whitespace-pre-line mt-1"
                style={{ color: activeIndex === i ? C.charcoal : C.textMuted, fontFamily: F.body, transition: "color 0.3s ease" }}>{ev.label}</span>
            </div>
          ))}
        </div>
        {slide.note && (
          <p className="text-xs px-2 pt-2 border-t" style={{ color: C.textMuted, borderColor: C.yellow + "40", fontFamily: F.body }}>{slide.note}</p>
        )}
      </div>
    </div>
  );
}

// ── Process Steps ─────────────────────────────────────────────────────────────
function ProcessStepsView({ slide, activeIndex }: { slide: Extract<Slide, { type: "process-steps" }>; activeIndex: number }) {
  return (
    <div className="w-full h-full flex flex-col" style={{ background: C.lightGray }}>
      <Header title={slide.title} />
      {slide.subtitle && (
        <p className="px-6 md:px-8 py-2 text-xs md:text-sm" style={{ color: C.textMuted, fontFamily: F.body }}>{slide.subtitle}</p>
      )}
      <div className="flex-1 flex items-stretch gap-0 divide-x px-6 md:px-8 py-5" style={{ borderColor: C.yellow + "40" }}>
        {slide.steps.map((step, i) => (
          <div key={i} className="flex-1 flex flex-col px-4 gap-2"
            style={{
              background: activeIndex === i ? C.yellow + "18" : "transparent",
              borderRadius: "8px",
              transition: "background 0.3s ease",
            }}>
            <span className="text-xs font-bold uppercase tracking-wide" style={{ color: C.yellow, fontFamily: F.body }}>{step.when}</span>
            <span className="text-sm font-bold" style={{ color: C.charcoal, fontFamily: F.heading }}>{step.action}</span>
            <span className="text-xs leading-snug" style={{ color: C.textDark, fontFamily: F.body }}>{step.detail}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Enforcement ───────────────────────────────────────────────────────────────
function EnforcementView({ slide, activeIndex }: { slide: Extract<Slide, { type: "enforcement" }>; activeIndex: number }) {
  return (
    <div className="w-full h-full flex flex-col" style={{ background: C.lightGray }}>
      <Header title={slide.title} />
      <div className="flex-1 flex flex-col px-6 md:px-8 py-4 gap-3">
        <div className="flex gap-3">
          {slide.columns.map((col, i) => (
            <div key={i} className="flex-1 rounded-xl p-4"
              style={{
                background: C.charcoal,
                boxShadow: activeIndex === i ? `0 0 0 2px ${C.yellow}` : "none",
                transition: "box-shadow 0.3s ease",
              }}>
              <p className="text-sm font-bold mb-2" style={{ color: C.yellow, fontFamily: F.heading }}>{col.level}</p>
              <p className="text-xs leading-snug" style={{ color: C.textLight, fontFamily: F.body }}>{col.detail}</p>
            </div>
          ))}
        </div>
        {slide.note && (
          <div className="rounded-lg px-4 py-2.5" style={{ background: C.yellow + "20", border: `1px solid ${C.yellow}40` }}>
            <p className="text-xs font-medium" style={{ color: C.textDark, fontFamily: F.body }}>{slide.note}</p>
          </div>
        )}
        {slide.footer && (
          <p className="text-xs italic" style={{ color: C.textMuted, fontFamily: F.body }}>{slide.footer}</p>
        )}
      </div>
    </div>
  );
}

// ── Site Map ──────────────────────────────────────────────────────────────────
function SiteMapView({ slide }: { slide: Extract<Slide, { type: "site-map" }> }) {
  const isGrid = slide.roads.length >= 4;
  return (
    <div className="w-full h-full flex flex-col" style={{ background: C.lightGray }}>
      <Header title={slide.title} />
      <div className="flex-1 overflow-hidden flex">
        <div className="flex-1 overflow-auto px-6 md:px-8 py-4 flex flex-col justify-center gap-3">
          <p className="text-sm md:text-base leading-relaxed" style={{ color: C.textDark, fontFamily: F.body }}>{slide.body}</p>
          {slide.tip && (
            <div className="border-l-4 pl-3 py-1" style={{ borderColor: C.yellow }}>
              <p className="text-xs md:text-sm font-medium leading-snug" style={{ color: C.textMuted, fontFamily: F.body }}>
                <span className="font-bold" style={{ color: C.charcoal }}>TIP: </span>{slide.tip}
              </p>
            </div>
          )}
        </div>
        <div className="w-2/5 shrink-0 relative m-3 rounded-xl overflow-hidden border-2" style={{ borderColor: C.yellow, background: C.white }}>
          <svg viewBox="0 0 300 220" className="w-full h-full">
            <rect x="0" y="0" width="300" height="220" fill={C.white} />
            {isGrid ? (
              <>
                <line x1="95" y1="10" x2="95" y2="205" stroke={C.textMuted} strokeWidth="3" />
                <line x1="195" y1="10" x2="195" y2="205" stroke={C.textMuted} strokeWidth="3" />
                <line x1="10" y1="65" x2="290" y2="65" stroke={C.textMuted} strokeWidth="3" />
                <line x1="10" y1="150" x2="290" y2="150" stroke={C.textMuted} strokeWidth="3" />
                <rect x="130" y="90" width="32" height="26" fill={C.yellow} stroke={C.charcoal} strokeWidth="1.5" />
                <text x="146" y="107" textAnchor="middle" fontSize="7" fontWeight="bold" fill={C.charcoal}>SITE</text>
                {slide.landmark && (
                  <>
                    <ellipse cx="45" cy="180" rx="30" ry="15" fill={C.lightGray} stroke={C.textMuted} strokeWidth="1.5" />
                    <text x="45" y="176" textAnchor="middle" fontSize="6" fill={C.textMuted}>{slide.landmark.split(" ")[0]}</text>
                    <text x="45" y="185" textAnchor="middle" fontSize="6" fill={C.textMuted}>{slide.landmark.split(" ").slice(1).join(" ")}</text>
                  </>
                )}
                {slide.roads[0] && <text x="95" y="20" textAnchor="middle" fontSize="6.5" fill={C.textMuted}>{slide.roads[0]}</text>}
                {slide.roads[1] && <text x="150" y="60" textAnchor="middle" fontSize="6.5" fill={C.textMuted}>{slide.roads[1]}</text>}
                {slide.roads[2] && <text x="195" y="200" textAnchor="middle" fontSize="6.5" fill={C.textMuted}>{slide.roads[2]}</text>}
                {slide.roads[3] && <text x="230" y="145" textAnchor="middle" fontSize="6.5" fill={C.textMuted}>{slide.roads[3]}</text>}
              </>
            ) : (
              <>
                <line x1="10" y1="150" x2="290" y2="150" stroke={C.textMuted} strokeWidth="3" />
                <text x="150" y="168" textAnchor="middle" fontSize="8" fill={C.textMuted}>{slide.roads[1]}</text>
                <line x1="20" y1="210" x2="260" y2="20" stroke={C.textMuted} strokeWidth="3" />
                <text x="175" y="55" textAnchor="middle" fontSize="8" fill={C.textMuted} transform="rotate(-40 175 55)">{slide.roads[0]}</text>
                <rect x="185" y="95" width="36" height="28" fill={C.yellow} stroke={C.charcoal} strokeWidth="1.5" />
                <text x="203" y="113" textAnchor="middle" fontSize="7" fontWeight="bold" fill={C.charcoal}>SITE</text>
              </>
            )}
          </svg>
          <div className="absolute top-2 right-2 w-7 h-7 rounded-full flex items-center justify-center" style={{ background: C.charcoal }}>
            <span className="text-[10px] font-bold" style={{ color: C.yellow, fontFamily: F.heading }}>N</span>
          </div>
          <div className="absolute bottom-1.5 left-0 right-0 text-center">
            <span className="text-[9px] font-bold tracking-wide" style={{ color: C.textMuted, fontFamily: F.body }}>{slide.mapLabel}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Boundary Diagram ──────────────────────────────────────────────────────────
function BoundaryDiagramView({ slide }: { slide: Extract<Slide, { type: "boundary-diagram" }> }) {
  return (
    <div className="w-full h-full flex flex-col" style={{ background: C.lightGray }}>
      <Header title={slide.title} />
      <div className="flex-1 flex px-6 md:px-8 py-4 gap-4 items-center">
        <div className="flex-1 flex flex-col gap-3">
          {[slide.outer, slide.inner].map((b, i) => (
            <div key={i} className="rounded-xl p-4" style={{ background: C.charcoal }}>
              <p className="text-sm font-bold mb-1" style={{ color: C.yellow, fontFamily: F.heading }}>{b.code} — {b.name}</p>
              <p className="text-xs leading-snug" style={{ color: C.textLight, fontFamily: F.body }}>{b.detail}</p>
            </div>
          ))}
        </div>
        <div className="w-2/5 shrink-0 relative rounded-xl overflow-hidden border-2 flex items-center justify-center"
          style={{ borderColor: C.yellow, background: C.white, aspectRatio: "4 / 3" }}>
          <svg viewBox="0 0 260 200" className="w-full h-full">
            <rect x="20" y="26" width="220" height="154" fill="none" stroke={C.textMuted} strokeWidth="2.5" strokeDasharray="8 5" />
            <text x="130" y="16" textAnchor="middle" fontSize="10" fontWeight="bold" fill={C.textMuted}>{slide.outer.code}</text>
            <rect x="55" y="55" width="150" height="95" fill={C.yellow + "30"} stroke={C.charcoal} strokeWidth="2.5" strokeDasharray="6 4" />
            <text x="130" y="48" textAnchor="middle" fontSize="10" fontWeight="bold" fill={C.charcoal}>{slide.inner.code}</text>
            <text x="130" y="106" textAnchor="middle" fontSize="8" fill={C.charcoal}>ACTIVE WORK</text>
          </svg>
        </div>
      </div>
      <div className="px-6 md:px-8 pb-4">
        <div className="rounded-lg px-4 py-2.5" style={{ background: C.yellow + "20", border: `1px solid ${C.yellow}40` }}>
          <p className="text-xs font-medium" style={{ color: C.textDark, fontFamily: F.body }}>{slide.note}</p>
        </div>
      </div>
    </div>
  );
}

// ── Scale Ruler ───────────────────────────────────────────────────────────────
function ScaleRulerView({ slide }: { slide: Extract<Slide, { type: "scale-ruler" }> }) {
  const ticks = [0, 10, 20, 30, 40, 50, 60];
  return (
    <div className="w-full h-full flex flex-col" style={{ background: C.lightGray }}>
      <Header title={slide.title} />
      <div className="flex-1 overflow-auto flex flex-col justify-center px-6 md:px-8 py-4 gap-4">
        <p className="text-sm md:text-base leading-relaxed" style={{ color: C.textDark, fontFamily: F.body }}>{slide.body}</p>
        <div className="rounded-xl p-4 md:p-5" style={{ background: C.white, border: "1px solid #D0CECA" }}>
          <svg viewBox="0 0 420 70" className="w-full" style={{ maxHeight: 70 }}>
            <line x1="20" y1="35" x2="400" y2="35" stroke={C.charcoal} strokeWidth="2" />
            {ticks.map((t, i) => {
              const x = 20 + (i * 380) / (ticks.length - 1);
              return (
                <g key={t}>
                  <line x1={x} y1="25" x2={x} y2="45" stroke={C.charcoal} strokeWidth="2" />
                  <text x={x} y="60" textAnchor="middle" fontSize="10" fill={C.textMuted}>{t}&apos;</text>
                </g>
              );
            })}
          </svg>
          <p className="text-center text-xs font-bold mt-1" style={{ color: C.charcoal, fontFamily: F.heading }}>{slide.scaleLabel}</p>
        </div>
        <div className="rounded-xl p-4" style={{ background: C.charcoal }}>
          <p className="text-xs font-bold mb-2 tracking-wide" style={{ color: C.yellow, fontFamily: F.body }}>WORKED EXAMPLE</p>
          <p className="text-sm" style={{ color: C.textLight, fontFamily: F.body }}>
            {slide.example.measured} &nbsp;·&nbsp; {slide.example.multiplier} &nbsp;=&nbsp;{" "}
            <b style={{ color: C.yellow }}>{slide.example.result}</b>
          </p>
        </div>
        <p className="text-xs italic" style={{ color: C.textMuted, fontFamily: F.body }}>{slide.instruction}</p>
      </div>
    </div>
  );
}

// ── Router ────────────────────────────────────────────────────────────────────
export default function SlideRenderer({
  slide,
  moduleNum,
  lang,
  activeIndex = -1,
}: {
  slide: Slide;
  moduleNum: number;
  lang: string;
  activeIndex?: number;
}) {
  switch (slide.type) {
    case "title":             return <TitleSlideView slide={slide} moduleNum={moduleNum} lang={lang} />;
    case "section-divider":   return <SectionDividerView slide={slide} />;
    case "content":           return <ContentSlideView slide={slide} activeIndex={activeIndex} />;
    case "two-column":        return <TwoColumnView slide={slide} activeIndex={activeIndex} />;
    case "stat-callout":      return <StatCalloutView slide={slide} activeIndex={activeIndex} />;
    case "image-placeholder": return <ImagePlaceholderView slide={slide} />;
    case "closing":           return <ClosingSlideView slide={slide} />;
    case "numbered-list":     return <NumberedListView slide={slide} activeIndex={activeIndex} />;
    case "glossary":          return <GlossaryView slide={slide} activeIndex={activeIndex} />;
    case "story":             return <StoryView slide={slide} />;
    case "timeline":          return <TimelineView slide={slide} activeIndex={activeIndex} />;
    case "process-steps":     return <ProcessStepsView slide={slide} activeIndex={activeIndex} />;
    case "enforcement":       return <EnforcementView slide={slide} activeIndex={activeIndex} />;
    case "site-map":          return <SiteMapView slide={slide} />;
    case "boundary-diagram":  return <BoundaryDiagramView slide={slide} />;
    case "scale-ruler":       return <ScaleRulerView slide={slide} />;
  }
}

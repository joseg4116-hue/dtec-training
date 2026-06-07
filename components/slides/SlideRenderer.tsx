import { Slide } from "@/types/module";
import Image from "next/image";

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

function Bullet({ text }: { text: string }) {
  return (
    <li className="flex gap-2 leading-snug" style={{ fontFamily: F.body }}>
      <span className="mt-1.5 w-2 h-2 rounded-full shrink-0" style={{ background: C.yellow }} />
      <span style={{ color: C.textDark }}>{text}</span>
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
function ContentSlideView({ slide }: { slide: Extract<Slide, { type: "content" }> }) {
  return (
    <div className="w-full h-full flex flex-col" style={{ background: C.lightGray }}>
      <Header title={slide.title} />
      <div className="flex-1 overflow-hidden flex">
        <div className="flex-1 overflow-auto px-6 md:px-8 py-4">
          <ul className="space-y-2.5 text-sm md:text-base">
            {slide.bullets.map((b, i) => <Bullet key={i} text={b} />)}
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
function TwoColumnView({ slide }: { slide: Extract<Slide, { type: "two-column" }> }) {
  return (
    <div className="w-full h-full flex flex-col" style={{ background: C.lightGray }}>
      <Header title={slide.title} />
      <div className="flex-1 overflow-auto grid grid-cols-2 divide-x" style={{ borderColor: C.yellow + "40" }}>
        {[{ title: slide.leftTitle, bullets: slide.leftBullets }, { title: slide.rightTitle, bullets: slide.rightBullets }].map((col, ci) => (
          <div key={ci} className="px-5 md:px-6 py-4">
            <p className="text-xs md:text-sm font-bold mb-3" style={{ color: C.charcoal, fontFamily: F.heading }}>{col.title}</p>
            <ul className="space-y-2 text-xs md:text-sm">
              {col.bullets.map((b, i) => <Bullet key={i} text={b} />)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Stat Callout ──────────────────────────────────────────────────────────────
function StatCalloutView({ slide }: { slide: Extract<Slide, { type: "stat-callout" }> }) {
  return (
    <div className="w-full h-full flex flex-col" style={{ background: C.lightGray }}>
      <Header title={slide.title} />
      <div className="flex-1 flex items-center justify-center gap-4 md:gap-6 px-6 flex-wrap">
        {slide.stats.map((s, i) => (
          <div key={i} className="flex flex-col items-center justify-center rounded-xl p-5 md:p-6 flex-1 min-w-[130px] max-w-[210px] border-2"
            style={{ background: C.charcoal, borderColor: C.yellow }}>
            <span className="text-4xl md:text-5xl font-bold" style={{ color: C.yellow, fontFamily: F.heading }}>{s.value}</span>
            <span className="text-xs md:text-sm text-center mt-3 leading-snug" style={{ color: C.textLight, fontFamily: F.body }}>{s.label}</span>
          </div>
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
function NumberedListView({ slide }: { slide: Extract<Slide, { type: "numbered-list" }> }) {
  return (
    <div className="w-full h-full flex flex-col" style={{ background: C.lightGray }}>
      <Header title={slide.title} />
      <div className="flex-1 overflow-auto grid grid-cols-2 gap-3 p-5 md:p-6">
        {slide.items.map((item, i) => (
          <div key={i} className="rounded-xl p-4 flex flex-col gap-1" style={{ background: C.charcoal, border: `1.5px solid ${C.yellow}` }}>
            <span className="text-2xl font-bold" style={{ color: C.yellow, fontFamily: F.heading }}>{item.num}</span>
            <span className="text-sm font-bold" style={{ color: C.textLight, fontFamily: F.heading }}>{item.heading}</span>
            <span className="text-xs leading-snug" style={{ color: C.textSubtle, fontFamily: F.body }}>{item.body}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Glossary ──────────────────────────────────────────────────────────────────
function GlossaryView({ slide }: { slide: Extract<Slide, { type: "glossary" }> }) {
  return (
    <div className="w-full h-full flex flex-col" style={{ background: C.lightGray }}>
      <Header title={slide.title} />
      <div className="flex-1 overflow-auto px-6 md:px-8 py-3 grid grid-cols-1 gap-2">
        {slide.terms.map((t, i) => (
          <div key={i} className="flex gap-3 items-baseline border-b pb-1.5" style={{ borderColor: C.yellow + "30" }}>
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
function TimelineView({ slide }: { slide: Extract<Slide, { type: "timeline" }> }) {
  return (
    <div className="w-full h-full flex flex-col" style={{ background: C.lightGray }}>
      <Header title={slide.title} />
      <div className="flex-1 flex flex-col justify-center px-6 md:px-10 gap-4">
        <div className="flex items-start relative">
          <div className="absolute top-3 left-0 right-0 h-0.5" style={{ background: C.yellow + "60" }} />
          {slide.events.map((ev, i) => (
            <div key={i} className="flex-1 flex flex-col items-center relative">
              <div className="w-3 h-3 rounded-full z-10 mb-2" style={{ background: C.yellow }} />
              <span className="text-xs font-bold text-center" style={{ color: C.charcoal, fontFamily: F.heading }}>{ev.year}</span>
              <span className="text-xs text-center whitespace-pre-line mt-1" style={{ color: C.textMuted, fontFamily: F.body }}>{ev.label}</span>
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
function ProcessStepsView({ slide }: { slide: Extract<Slide, { type: "process-steps" }> }) {
  return (
    <div className="w-full h-full flex flex-col" style={{ background: C.lightGray }}>
      <Header title={slide.title} />
      <div className="flex-1 flex items-stretch gap-0 divide-x px-6 md:px-8 py-5" style={{ borderColor: C.yellow + "40" }}>
        {slide.steps.map((step, i) => (
          <div key={i} className="flex-1 flex flex-col px-4 gap-2">
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
function EnforcementView({ slide }: { slide: Extract<Slide, { type: "enforcement" }> }) {
  return (
    <div className="w-full h-full flex flex-col" style={{ background: C.lightGray }}>
      <Header title={slide.title} />
      <div className="flex-1 flex flex-col px-6 md:px-8 py-4 gap-3">
        <div className="flex gap-3">
          {slide.columns.map((col, i) => (
            <div key={i} className="flex-1 rounded-xl p-4" style={{ background: C.charcoal }}>
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

// ── Router ────────────────────────────────────────────────────────────────────
export default function SlideRenderer({ slide, moduleNum, lang }: { slide: Slide; moduleNum: number; lang: string }) {
  switch (slide.type) {
    case "title":             return <TitleSlideView slide={slide} moduleNum={moduleNum} lang={lang} />;
    case "section-divider":   return <SectionDividerView slide={slide} />;
    case "content":           return <ContentSlideView slide={slide} />;
    case "two-column":        return <TwoColumnView slide={slide} />;
    case "stat-callout":      return <StatCalloutView slide={slide} />;
    case "image-placeholder": return <ImagePlaceholderView slide={slide} />;
    case "closing":           return <ClosingSlideView slide={slide} />;
    case "numbered-list":     return <NumberedListView slide={slide} />;
    case "glossary":          return <GlossaryView slide={slide} />;
    case "story":             return <StoryView slide={slide} />;
    case "timeline":          return <TimelineView slide={slide} />;
    case "process-steps":     return <ProcessStepsView slide={slide} />;
    case "enforcement":       return <EnforcementView slide={slide} />;
  }
}

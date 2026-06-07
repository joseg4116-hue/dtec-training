import { Slide } from "@/types/module";
import clsx from "clsx";

const C = {
  darkGreen: "#2D4A2D",
  midGreen: "#4A7C4A",
  lightGreen: "#A8C5A0",
  cream: "#F5F0E8",
  accentGold: "#C8A84B",
  charcoal: "#2C2C2C",
  warmGray: "#8B8680",
};

function Bullet({ text }: { text: string }) {
  return (
    <li className="flex gap-2 leading-snug">
      <span className="mt-1.5 w-2 h-2 rounded-full shrink-0" style={{ background: C.midGreen }} />
      <span>{text}</span>
    </li>
  );
}

export function TitleSlideView({ slide, moduleNum, lang }: { slide: Extract<Slide, { type: "title" }>; moduleNum: number; lang: string }) {
  return (
    <div className="w-full h-full flex flex-col justify-between p-8 md:p-12" style={{ background: C.darkGreen }}>
      <div className="flex justify-between items-start">
        <span className="text-xs font-bold tracking-widest" style={{ color: C.accentGold }}>
          MODULE {String(moduleNum).padStart(2, "0")}
        </span>
        <span className="text-xs font-bold" style={{ color: C.lightGreen }}>{lang.toUpperCase()}</span>
      </div>
      <div>
        <div className="h-1 w-16 mb-6 rounded" style={{ background: C.accentGold }} />
        <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight whitespace-pre-line mb-4">
          {slide.title}
        </h1>
        <p className="text-base md:text-lg" style={{ color: C.lightGreen }}>{slide.subtitle}</p>
      </div>
      <p className="text-xs" style={{ color: C.warmGray }}>DTEC — Colorado Erosion Control & Stormwater Management</p>
    </div>
  );
}

export function SectionDividerView({ slide }: { slide: Extract<Slide, { type: "section-divider" }> }) {
  return (
    <div className="w-full h-full flex" style={{ background: C.cream }}>
      <div className="w-2 shrink-0" style={{ background: C.midGreen }} />
      <div className="flex flex-col justify-center px-8 md:px-12">
        <span className="text-xs font-bold tracking-widest mb-2" style={{ color: C.midGreen }}>
          SECTION {slide.sectionNum}
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: C.darkGreen }}>{slide.title}</h2>
        {slide.subtitle && <p className="text-base" style={{ color: C.warmGray }}>{slide.subtitle}</p>}
      </div>
    </div>
  );
}

export function ContentSlideView({ slide }: { slide: Extract<Slide, { type: "content" }> }) {
  return (
    <div className="w-full h-full flex flex-col" style={{ background: C.cream }}>
      <div className="px-6 md:px-8 py-4" style={{ background: C.darkGreen }}>
        <h2 className="text-lg md:text-xl font-bold text-white">{slide.title}</h2>
      </div>
      <div className="flex-1 overflow-auto px-6 md:px-8 py-5">
        <ul className="space-y-2.5 text-sm md:text-base" style={{ color: C.charcoal }}>
          {slide.bullets.map((b, i) => <Bullet key={i} text={b} />)}
        </ul>
      </div>
      <div className="h-1 mx-0" style={{ background: C.lightGreen }} />
    </div>
  );
}

export function TwoColumnView({ slide }: { slide: Extract<Slide, { type: "two-column" }> }) {
  return (
    <div className="w-full h-full flex flex-col" style={{ background: C.cream }}>
      <div className="px-6 md:px-8 py-4" style={{ background: C.darkGreen }}>
        <h2 className="text-lg md:text-xl font-bold text-white">{slide.title}</h2>
      </div>
      <div className="flex-1 overflow-auto grid grid-cols-2 divide-x px-0" style={{ borderColor: C.lightGreen }}>
        {[
          { title: slide.leftTitle, bullets: slide.leftBullets },
          { title: slide.rightTitle, bullets: slide.rightBullets },
        ].map((col, ci) => (
          <div key={ci} className="px-5 md:px-7 py-4">
            <p className="text-xs md:text-sm font-bold mb-3" style={{ color: C.midGreen }}>{col.title}</p>
            <ul className="space-y-2 text-xs md:text-sm" style={{ color: C.charcoal }}>
              {col.bullets.map((b, i) => <Bullet key={i} text={b} />)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export function StatCalloutView({ slide }: { slide: Extract<Slide, { type: "stat-callout" }> }) {
  return (
    <div className="w-full h-full flex flex-col" style={{ background: C.cream }}>
      <div className="px-6 md:px-8 py-4" style={{ background: C.darkGreen }}>
        <h2 className="text-lg md:text-xl font-bold text-white">{slide.title}</h2>
      </div>
      <div className="flex-1 flex items-center justify-center gap-4 md:gap-6 px-6 flex-wrap">
        {slide.stats.map((s, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center rounded-xl p-5 md:p-6 flex-1 min-w-[140px] max-w-[220px] border-2"
            style={{ background: C.darkGreen, borderColor: C.accentGold }}
          >
            <span className="text-4xl md:text-5xl font-bold" style={{ color: C.accentGold }}>{s.value}</span>
            <span className="text-xs md:text-sm text-center mt-3 text-white leading-snug">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ImagePlaceholderView({ slide }: { slide: Extract<Slide, { type: "image-placeholder" }> }) {
  return (
    <div className="w-full h-full flex flex-col" style={{ background: C.cream }}>
      <div className="px-6 md:px-8 py-4" style={{ background: C.darkGreen }}>
        <h2 className="text-lg md:text-xl font-bold text-white">{slide.title}</h2>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center px-8 gap-3">
        <div
          className="w-full max-w-2xl rounded-xl flex items-center justify-center p-8 border-2 border-dashed"
          style={{ background: "#E8E4DC", borderColor: C.lightGreen, minHeight: "180px" }}
        >
          <p className="text-sm text-center" style={{ color: C.warmGray }}>{slide.caption}</p>
        </div>
        {slide.note && <p className="text-xs text-center" style={{ color: C.warmGray }}>{slide.note}</p>}
      </div>
    </div>
  );
}

export function ClosingSlideView({ slide }: { slide: Extract<Slide, { type: "closing" }> }) {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center text-center px-8 md:px-16" style={{ background: C.darkGreen }}>
      <div className="h-1 w-24 mb-8 rounded" style={{ background: C.accentGold }} />
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-snug">{slide.message}</h2>
      {slide.sub && <p className="text-sm md:text-base max-w-xl" style={{ color: C.lightGreen }}>{slide.sub}</p>}
      <p className="absolute bottom-6 text-xs" style={{ color: C.warmGray }}>DTEC — Colorado Erosion Control & Stormwater Management</p>
    </div>
  );
}

export default function SlideRenderer({ slide, moduleNum, lang }: { slide: Slide; moduleNum: number; lang: string }) {
  switch (slide.type) {
    case "title": return <TitleSlideView slide={slide} moduleNum={moduleNum} lang={lang} />;
    case "section-divider": return <SectionDividerView slide={slide} />;
    case "content": return <ContentSlideView slide={slide} />;
    case "two-column": return <TwoColumnView slide={slide} />;
    case "stat-callout": return <StatCalloutView slide={slide} />;
    case "image-placeholder": return <ImagePlaceholderView slide={slide} />;
    case "closing": return <ClosingSlideView slide={slide} />;
  }
}

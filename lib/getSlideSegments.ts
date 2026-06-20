import { Slide } from "@/types/module";

export type SpeechSegment = { charStart: number; index: number };
export type SlideSegments = { fullText: string; segments: SpeechSegment[] };

function build(pieces: Array<{ text: string; index: number }>): SlideSegments {
  const segments: SpeechSegment[] = [];
  let pos = 0;
  let fullText = "";
  for (const { text, index } of pieces) {
    if (!text) continue;
    segments.push({ charStart: pos, index });
    const chunk = text + ". ";
    fullText += chunk;
    pos += chunk.length;
  }
  return { fullText: fullText.trim(), segments };
}

export function getSlideSegments(slide: Slide): SlideSegments {
  switch (slide.type) {
    case "title":
      return build([{ text: `${slide.title}. ${slide.subtitle}`, index: -1 }]);
    case "section-divider":
      return build([{ text: `Section ${slide.sectionNum}. ${slide.title}${slide.subtitle ? ". " + slide.subtitle : ""}`, index: -1 }]);
    case "content":
      return build([
        { text: slide.title, index: -1 },
        ...slide.bullets.map((b, i) => ({ text: b, index: i })),
      ]);
    case "two-column":
      return build([
        { text: slide.title, index: -1 },
        { text: slide.leftTitle, index: -1 },
        ...slide.leftBullets.map((b, i) => ({ text: b, index: i })),
        { text: slide.rightTitle, index: -1 },
        ...slide.rightBullets.map((b, i) => ({ text: b, index: slide.leftBullets.length + i })),
      ]);
    case "stat-callout":
      return build([
        { text: slide.title, index: -1 },
        ...slide.stats.map((s, i) => ({ text: `${s.value} ${s.label}`, index: i })),
      ]);
    case "image-placeholder":
      return build([{ text: `${slide.title}. ${slide.caption}${slide.note ? ". " + slide.note : ""}`, index: -1 }]);
    case "closing":
      return build([{ text: `${slide.message}${slide.sub ? ". " + slide.sub : ""}${slide.footer ? ". " + slide.footer : ""}`, index: -1 }]);
    case "numbered-list":
      return build([
        { text: slide.title, index: -1 },
        ...slide.items.map((item, i) => ({ text: `${item.heading}. ${item.body}`, index: i })),
      ]);
    case "glossary":
      return build([
        { text: slide.title, index: -1 },
        ...slide.terms.map((t, i) => ({ text: `${t.term}: ${t.definition}`, index: i })),
      ]);
    case "story":
      return build([{ text: `${slide.title}${slide.date ? ". " + slide.date : ""}. ${slide.body}${slide.callout ? ". " + slide.callout : ""}`, index: -1 }]);
    case "process-steps":
      return build([
        { text: slide.title + (slide.subtitle ? ". " + slide.subtitle : ""), index: -1 },
        ...slide.steps.map((s, i) => ({ text: `${s.when}: ${s.action}. ${s.detail}`, index: i })),
      ]);
    case "timeline":
      return build([
        { text: slide.title, index: -1 },
        ...slide.events.map((e, i) => ({ text: `${e.year}: ${e.label}`, index: i })),
        ...(slide.note ? [{ text: slide.note, index: -1 }] : []),
      ]);
    case "enforcement":
      return build([
        { text: slide.title, index: -1 },
        ...slide.columns.map((c, i) => ({ text: `${c.level}: ${c.detail}`, index: i })),
        ...(slide.note ? [{ text: slide.note, index: -1 }] : []),
        ...(slide.footer ? [{ text: slide.footer, index: -1 }] : []),
      ]);
  }
}

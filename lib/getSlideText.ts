import { Slide } from "@/types/module";

export function getSlideText(slide: Slide): string {
  switch (slide.type) {
    case "title":
      return `${slide.title}. ${slide.subtitle}`;
    case "section-divider":
      return `Section ${slide.sectionNum}. ${slide.title}${slide.subtitle ? ". " + slide.subtitle : ""}`;
    case "content":
      return `${slide.title}. ${slide.bullets.join(". ")}`;
    case "two-column":
      return `${slide.title}. ${slide.leftTitle}: ${slide.leftBullets.join(". ")}. ${slide.rightTitle}: ${slide.rightBullets.join(". ")}`;
    case "stat-callout":
      return `${slide.title}. ${slide.stats.map((s) => `${s.value} ${s.label}`).join(". ")}`;
    case "image-placeholder":
      return `${slide.title}. ${slide.caption}${slide.note ? ". " + slide.note : ""}`;
    case "closing":
      return `${slide.message}${slide.sub ? ". " + slide.sub : ""}${slide.footer ? ". " + slide.footer : ""}`;
    case "numbered-list":
      return `${slide.title}. ${slide.items.map((i) => `${i.heading}. ${i.body}`).join(". ")}`;
    case "glossary":
      return `${slide.title}. ${slide.terms.map((t) => `${t.term}: ${t.definition}`).join(". ")}`;
    case "story":
      return `${slide.title}${slide.date ? ". " + slide.date : ""}. ${slide.body}${slide.callout ? ". " + slide.callout : ""}`;
    case "process-steps":
      return `${slide.title}${slide.subtitle ? ". " + slide.subtitle : ""}. ${slide.steps.map((s) => `${s.when}: ${s.action}. ${s.detail}`).join(". ")}`;
    case "timeline":
      return `${slide.title}. ${slide.events.map((e) => `${e.year}: ${e.label}`).join(". ")}${slide.note ? ". " + slide.note : ""}`;
    case "enforcement":
      return `${slide.title}. ${slide.columns.map((c) => `${c.level}: ${c.detail}`).join(". ")}${slide.note ? ". " + slide.note : ""}${slide.footer ? ". " + slide.footer : ""}`;
  }
}

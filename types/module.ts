export type Lang = "en" | "es";

export type TitleSlide = {
  type: "title";
  title: string;
  subtitle: string;
};

export type SectionDividerSlide = {
  type: "section-divider";
  sectionNum: number;
  title: string;
  subtitle?: string;
};

export type ContentSlide = {
  type: "content";
  title: string;
  bullets: string[];
  image?: string;
};

export type TwoColumnSlide = {
  type: "two-column";
  title: string;
  leftTitle: string;
  leftBullets: string[];
  rightTitle: string;
  rightBullets: string[];
  image?: string;
};

export type StatCalloutSlide = {
  type: "stat-callout";
  title: string;
  stats: { value: string; label: string; detail?: string }[];
};

export type ImagePlaceholderSlide = {
  type: "image-placeholder";
  title: string;
  caption: string;
  note?: string;
};

export type ClosingSlide = {
  type: "closing";
  message: string;
  sub?: string;
  footer?: string;
};

export type NumberedListSlide = {
  type: "numbered-list";
  title: string;
  subtitle?: string;
  items: { num: string; heading: string; body: string }[];
};

export type GlossarySlide = {
  type: "glossary";
  title: string;
  terms: { term: string; definition: string }[];
};

export type StorySlide = {
  type: "story";
  title: string;
  date?: string;
  body: string;
  callout?: string;
  image?: string;
};

export type ProcessStepsSlide = {
  type: "process-steps";
  title: string;
  subtitle?: string;
  steps: { when: string; action: string; detail: string }[];
};

export type TimelineSlide = {
  type: "timeline";
  title: string;
  events: { year: string; label: string }[];
  note?: string;
};

export type EnforcementSlide = {
  type: "enforcement";
  title: string;
  columns: { level: string; detail: string }[];
  note?: string;
  footer?: string;
};

export type SiteMapSlide = {
  type: "site-map";
  title: string;
  mapLabel: string;
  roads: string[];
  landmark?: string;
  body: string;
  tip?: string;
};

export type BoundaryDiagramSlide = {
  type: "boundary-diagram";
  title: string;
  outer: { code: string; name: string; detail: string };
  inner: { code: string; name: string; detail: string };
  note: string;
};

export type ScaleRulerSlide = {
  type: "scale-ruler";
  title: string;
  body: string;
  scaleLabel: string;
  example: { measured: string; multiplier: string; result: string };
  instruction: string;
};

export type Slide =
  | TitleSlide
  | SectionDividerSlide
  | ContentSlide
  | TwoColumnSlide
  | StatCalloutSlide
  | ImagePlaceholderSlide
  | ClosingSlide
  | NumberedListSlide
  | GlossarySlide
  | StorySlide
  | ProcessStepsSlide
  | TimelineSlide
  | EnforcementSlide
  | SiteMapSlide
  | BoundaryDiagramSlide
  | ScaleRulerSlide;

export type Category = "welcome" | "stormwater" | "field-ops" | "advanced";

export type Module = {
  id: string;
  moduleNum: number;
  lang: Lang;
  category: Category;
  title: string;
  subtitle: string;
  slides: Slide[];
};

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
};

export type TwoColumnSlide = {
  type: "two-column";
  title: string;
  leftTitle: string;
  leftBullets: string[];
  rightTitle: string;
  rightBullets: string[];
};

export type StatCalloutSlide = {
  type: "stat-callout";
  title: string;
  stats: { value: string; label: string }[];
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
};

export type Slide =
  | TitleSlide
  | SectionDividerSlide
  | ContentSlide
  | TwoColumnSlide
  | StatCalloutSlide
  | ImagePlaceholderSlide
  | ClosingSlide;

export type Module = {
  id: string;
  moduleNum: number;
  lang: Lang;
  title: string;
  subtitle: string;
  slides: Slide[];
};

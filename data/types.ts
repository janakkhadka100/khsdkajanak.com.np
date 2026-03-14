/**
 * Shared content types for the Janak Khadka public platform.
 * Reusable, strongly typed, CMS-ready.
 */

// Profile / biography
export type ProfileSummaryItem = {
  label: string;
  value: string | string[];
};

export type BioBlock = {
  id: string;
  title: string;
  body: string[];
};

// News / coverage
export type NewsCategory = "interview" | "feature" | "press" | "event" | "speech" | "program" | "panel" | "other";
export type SourceType = "news" | "magazine" | "tv" | "radio" | "online" | "event";
export type ContentLanguage = "en" | "ne";

export type NewsArticle = {
  id: string;
  title: string;
  publication: string;
  publicationDate: string;
  summary: string;
  url?: string;
  category: NewsCategory;
  tags?: string[];
  sourceType?: SourceType;
  language?: ContentLanguage;
  featuredImage?: string;
  featured?: boolean;
};

// Photo archive
export type PhotoArchiveItem = {
  id: string;
  imageUrl: string;
  caption?: string;
  source?: string;
  year?: string;
  event?: string;
  photographer?: string;
  alt: string;
  featured?: boolean;
  tags?: string[];
};

// Media timeline
export type TimelineCategory =
  | "film"
  | "media"
  | "civic"
  | "institutional"
  | "digital"
  | "ai"
  | "public-service"
  | "other";

export type TimelineEntry = {
  id: string;
  year: string;
  title: string;
  subtitle?: string;
  description: string;
  category: TimelineCategory;
  relatedLinks?: { label: string; url: string }[];
  image?: string;
  tags?: string[];
  featured?: boolean;
};

// Impact
export type ImpactPillar = {
  id: string;
  title: string;
  description: string;
  initiatives?: string[];
};

export type ImpactInitiative = {
  id: string;
  title: string;
  context: string;
  role?: string;
  impact: string;
  link?: string;
};

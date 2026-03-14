/**
 * News archive - derives from media.ts (single source of truth).
 * Add items to data/media.ts; they appear here automatically.
 * Optional overlays add news-specific fields (url, tags, sourceType).
 */

import { mediaItems } from "./media";
import type { NewsArticle, NewsCategory, SourceType } from "./types";

const mediaTypeToNewsCategory: Record<string, NewsCategory> = {
  interview: "interview",
  event: "event",
  speech: "speech",
  program: "program",
  feature: "feature",
  "press-mention": "press",
  panel: "panel",
};

/** Optional overlays for news-specific metadata. Key by media item id. */
const newsOverlays: Partial<Record<string, Pick<NewsArticle, "url" | "tags" | "sourceType">>> = {
  "press-mention-ai-tools": { url: "#", tags: ["AI", "Nepali", "Public tools"], sourceType: "online" },
};

function mediaToNewsArticle(item: (typeof mediaItems)[number]): NewsArticle {
  const overlay = newsOverlays[item.id];
  const category = mediaTypeToNewsCategory[item.type] ?? "other";
  const sourceType = overlay?.sourceType ?? (item.type === "panel" ? "event" : item.type === "program" ? "tv" : item.type === "press-mention" ? "online" : "event");

  return {
    id: item.id,
    title: item.title,
    publication: item.outlet,
    publicationDate: item.date,
    summary: item.excerpt,
    category,
    sourceType: sourceType as SourceType,
    featured: item.featured ?? false,
    ...overlay,
  };
}

/** All news articles — derived from media. Add to media.ts to extend. */
export const newsArticles: NewsArticle[] = mediaItems.map(mediaToNewsArticle);

export function getFeaturedNews(): NewsArticle[] {
  return newsArticles.filter((a) => a.featured);
}

export function getNewsByYear(year: string): NewsArticle[] {
  return newsArticles.filter((a) => a.publicationDate.startsWith(year));
}

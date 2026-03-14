/**
 * Photo archive - seed from media + projects. Import-ready.
 * Add entries to photoArchive array; structure supports future bulk import.
 * event/source reference real media appearances and projects.
 */

import { mediaItems } from "./media";
import type { PhotoArchiveItem } from "./types";

/** Placeholder image until real assets are added. Replace with /images/... or CDN. */
const PLACEHOLDER = "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&q=80";

/**
 * Seed photos from media appearances. Each references a media item.
 * Add more by pushing to photoArchive; same shape, no component changes.
 */
function seedFromMedia(): PhotoArchiveItem[] {
  const featured = mediaItems.filter((m) => m.featured);
  return featured.map((m, i) => {
    const year = m.date.slice(0, 4);
    return {
      id: `media-${m.id}`,
      imageUrl: m.image ?? PLACEHOLDER,
      caption: `${m.title} — ${m.outlet}`,
      source: m.outlet,
      year,
      event: m.title,
      alt: `${m.title}, ${m.outlet}, ${year}`,
      featured: true,
      tags: [m.type, "nepal"],
    };
  });
}

/** Additional curated photos (events, projects). Extend array to add more. */
const curatedPhotos: PhotoArchiveItem[] = [
  {
    id: "community-screening",
    imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80",
    caption: "Community Screenings & Conversations",
    source: "Local Cultural Center",
    year: "2023",
    event: "Community screenings",
    alt: "Community screening event, Nepal",
    featured: false,
    tags: ["event", "community", "film"],
  },
];

/** All photos. Add items here or via future import — same PhotoArchiveItem shape. */
export const photoArchive: PhotoArchiveItem[] = [
  ...seedFromMedia(),
  ...curatedPhotos,
];

export function getFeaturedPhotos(): PhotoArchiveItem[] {
  return photoArchive.filter((p) => p.featured);
}

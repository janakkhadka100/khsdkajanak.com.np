/**
 * Photo archive - uses public/images/janak-khadka/gallery/
 * Add more entries to galleryItems; same PhotoArchiveItem shape.
 */

import { assets } from "@/lib/assets";
import type { PhotoArchiveItem } from "./types";

const GALLERY = assets.gallery;

/** Media-mapped photos: event filenames linked to known appearances */
const mediaMappedPhotos: PhotoArchiveItem[] = [
  {
    id: "media-festival-conversation",
    imageUrl: `${GALLERY}/event-2025-11-12.jpg`,
    caption: "On the Future of Nepali Cinema",
    source: "Kathmandu Film Forum",
    year: "2025",
    event: "Festival conversation",
    alt: "Janak Khadka at Kathmandu Film Forum, 2025",
    featured: true,
    tags: ["panel", "film", "nepal"],
  },
  {
    id: "media-evening-program",
    imageUrl: `${GALLERY}/event-2025-10-23a.jpg`,
    caption: "Host, Stories from the Valley",
    source: "National Television (NTV)",
    year: "2025",
    event: "TV program",
    alt: "Janak Khadka, NTV Stories from the Valley, 2025",
    featured: true,
    tags: ["program", "media", "nepal"],
  },
  {
    id: "media-press-ai-tools",
    imageUrl: `${GALLERY}/event-2026-01-24a.jpg`,
    caption: "Using AI to Help Nepali Users Write Better",
    source: "Online News Portal",
    year: "2026",
    event: "AI tools coverage",
    alt: "Janak Khadka, AI tools coverage, 2026",
    featured: true,
    tags: ["press", "AI", "nepal"],
  },
];

/** Gallery photos - add more entries here as you add images */
const galleryItems: PhotoArchiveItem[] = [
  { id: "gallery-1", imageUrl: `${GALLERY}/event-2025-10-03.jpg`, caption: "Public event", source: "Archive", year: "2025", alt: "Janak Khadka, October 2025", featured: false, tags: ["nepal"] },
  { id: "gallery-2", imageUrl: `${GALLERY}/event-2025-10-05.jpg`, caption: "Public event", source: "Archive", year: "2025", alt: "Janak Khadka, October 2025", featured: false, tags: ["nepal"] },
  { id: "gallery-3", imageUrl: `${GALLERY}/event-2025-10-21.jpg`, caption: "Public event", source: "Archive", year: "2025", alt: "Janak Khadka, October 2025", featured: false, tags: ["nepal"] },
  { id: "gallery-4", imageUrl: `${GALLERY}/event-2025-10-23b.jpg`, caption: "Public event", source: "Archive", year: "2025", alt: "Janak Khadka, October 2025", featured: false, tags: ["nepal"] },
  { id: "gallery-5", imageUrl: `${GALLERY}/event-2025-11-23a.jpg`, caption: "Public event", source: "Archive", year: "2025", alt: "Janak Khadka, November 2025", featured: false, tags: ["nepal"] },
  { id: "gallery-6", imageUrl: `${GALLERY}/event-2025-11-23b.jpg`, caption: "Public event", source: "Archive", year: "2025", alt: "Janak Khadka, November 2025", featured: false, tags: ["nepal"] },
  { id: "gallery-7", imageUrl: `${GALLERY}/event-2025-11-27a.jpg`, caption: "Public event", source: "Archive", year: "2025", alt: "Janak Khadka, November 2025", featured: false, tags: ["nepal"] },
  { id: "gallery-8", imageUrl: `${GALLERY}/event-2025-11-27b.jpg`, caption: "Public event", source: "Archive", year: "2025", alt: "Janak Khadka, November 2025", featured: false, tags: ["nepal"] },
  { id: "gallery-9", imageUrl: `${GALLERY}/event-2025-12-17.jpg`, caption: "Public event", source: "Archive", year: "2025", alt: "Janak Khadka, December 2025", featured: false, tags: ["nepal"] },
  { id: "gallery-10", imageUrl: `${GALLERY}/event-2025-12-18.jpg`, caption: "Public event", source: "Archive", year: "2025", alt: "Janak Khadka, December 2025", featured: false, tags: ["nepal"] },
  { id: "gallery-11", imageUrl: `${GALLERY}/event-2025-12-24.jpg`, caption: "Community screenings", source: "Archive", year: "2025", event: "Community screenings", alt: "Janak Khadka, community event December 2025", featured: false, tags: ["event", "community", "nepal"] },
  { id: "gallery-12", imageUrl: `${GALLERY}/event-2026-01-17.jpg`, caption: "Public event", source: "Archive", year: "2026", alt: "Janak Khadka, January 2026", featured: false, tags: ["nepal"] },
  { id: "gallery-13", imageUrl: `${GALLERY}/event-2026-01-18.jpg`, caption: "Public event", source: "Archive", year: "2026", alt: "Janak Khadka, January 2026", featured: false, tags: ["nepal"] },
  { id: "gallery-14", imageUrl: `${GALLERY}/event-2026-01-23.jpg`, caption: "Public event", source: "Archive", year: "2026", alt: "Janak Khadka, January 2026", featured: false, tags: ["nepal"] },
  { id: "gallery-15", imageUrl: `${GALLERY}/event-2026-01-24b.jpg`, caption: "Public event", source: "Archive", year: "2026", alt: "Janak Khadka, January 2026", featured: false, tags: ["nepal"] },
  { id: "gallery-16", imageUrl: `${GALLERY}/event-fb-1.jpg`, caption: "Public event", source: "Archive", alt: "Janak Khadka", featured: false, tags: ["nepal"] },
  { id: "gallery-17", imageUrl: `${GALLERY}/event-fb-2.jpg`, caption: "Public event", source: "Archive", alt: "Janak Khadka", featured: false, tags: ["nepal"] },
  { id: "gallery-18", imageUrl: `${GALLERY}/event-fb-3.jpg`, caption: "Public event", source: "Archive", alt: "Janak Khadka", featured: false, tags: ["nepal"] },
];

export const photoArchive: PhotoArchiveItem[] = [
  ...mediaMappedPhotos,
  ...galleryItems,
];

export function getFeaturedPhotos(): PhotoArchiveItem[] {
  return photoArchive.filter((p) => p.featured);
}

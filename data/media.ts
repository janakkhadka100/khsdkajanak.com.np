export type MediaItemType =
  | "interview"
  | "event"
  | "speech"
  | "program"
  | "feature"
  | "press-mention"
  | "panel";

export type MediaItem = {
  id: string;
  type: MediaItemType;
  title: string;
  outlet: string;
  date: string;
  excerpt: string;
  link?: string;
  videoEmbedUrl?: string;
  image?: string;
  featured?: boolean;
  quote?: string;
};

export const mediaItems: MediaItem[] = [
  {
    id: "festival-conversation",
    type: "panel",
    title: "On the Future of Nepali Cinema",
    outlet: "Kathmandu Film Forum",
    date: "2025-11-12",
    excerpt:
      "A long-form on-stage conversation about how Nepali films can stay rooted and still travel globally.",
    quote:
      "“If we are honest about our own contradictions, the world will recognize itself in our stories.”",
    featured: true,
  },
  {
    id: "evening-program",
    type: "program",
    title: "Host, ‘Stories from the Valley’",
    outlet: "National Television (NTV)",
    date: "2025-08-03",
    excerpt:
      "Weekly program bringing artists, workers, and public voices into the same frame.",
    featured: true,
  },
  {
    id: "radio-interview",
    type: "interview",
    title: "Building Public Platforms, Not Just Content",
    outlet: "Radio Kathmandu",
    date: "2024-09-18",
    excerpt:
      "A discussion on film, media responsibility, and why AI should become a public utility in Nepal.",
  },
  {
    id: "college-speech",
    type: "speech",
    title: "Keynote at Youth Film & Media Summit",
    outlet: "Tribhuvan University",
    date: "2024-03-29",
    excerpt:
      "Addressing students on creativity, risk, and the importance of serious storytelling.",
  },
  {
    id: "press-mention-ai-tools",
    type: "press-mention",
    title: "Using AI to Help Nepali Users Write Better",
    outlet: "Online News Portal",
    date: "2026-02-05",
    excerpt:
      "Coverage of Janak’s experiment with AI-powered Nepali caption and letter tools.",
  },
  {
    id: "community-program",
    type: "event",
    title: "Community Screenings & Conversations",
    outlet: "Local Cultural Center",
    date: "2023-12-10",
    excerpt:
      "A series of neighborhood screenings followed by unrecorded, open conversations.",
  },
];


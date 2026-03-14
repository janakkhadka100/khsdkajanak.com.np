/**
 * Media timeline - visual journey of films, appearances, and milestones.
 */

import type { TimelineEntry } from "./types";

export const timelineEntries: TimelineEntry[] = [
  {
    id: "early-years",
    year: "Early years",
    title: "Stories, streets, and first scripts",
    description:
      "Begins observing everyday dramas that inform his storytelling voice.",
    category: "other",
    featured: false,
  },
  {
    id: "film-media-entry",
    year: "Film & media entry",
    title: "First steps into direction and public programs",
    description:
      "Assists on sets, contributes to media projects, learns how cameras and people come together.",
    category: "film",
    featured: false,
  },
  {
    id: "expanding-roles",
    year: "Expanding roles",
    title: "From storyteller to strategist",
    description:
      "Moves into designing narratives, shows, and initiatives with strategic spine.",
    category: "media",
    featured: false,
  },
  {
    id: "public-voice-studio",
    year: "Public Voice Studio",
    title: "Editorial conversations as civic infrastructure",
    description:
      "Host and curator of editorial conversations with working voices across Nepal.",
    category: "civic",
    relatedLinks: [{ label: "Media & appearances", url: "/media" }],
    featured: true,
  },
  {
    id: "youth-film-labs",
    year: "Youth Story & Film Labs",
    title: "Young storytellers and short film ideas",
    description:
      "Prototype labs where young people turn lived experience into short film ideas.",
    category: "institutional",
    featured: true,
  },
  {
    id: "janak-ai-desk",
    year: "Janak AI Public Desk",
    title: "AI as public utility",
    description:
      "Launches AI-assisted tools for Nepali users: letters, captions, speeches, press notes.",
    category: "ai",
    relatedLinks: [{ label: "AI tools hub", url: "/ai-tools" }],
    featured: true,
  },
];

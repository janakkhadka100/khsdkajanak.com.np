/**
 * Public impact - institutional, evidence-based.
 * Film, media, civic, digital contributions.
 */

import type { ImpactPillar, ImpactInitiative } from "./types";

export const impactPillars: ImpactPillar[] = [
  {
    id: "film-storytelling",
    title: "Film and storytelling initiatives",
    description:
      "Developing films and visual projects that document inner lives, social shifts, and quiet revolutions in Nepali society. Building a cinematic language for export without losing local texture.",
    initiatives: ["Cinematic Stories of a Changing Nepal", "Youth Story & Film Labs"],
  },
  {
    id: "media-discourse",
    title: "Media and public discourse",
    description:
      "Editorial conversations, formats, and programs that treat public conversation as civic infrastructure. Shifting programs away from shallow debate toward slower, deeper dialogue.",
    initiatives: ["Public Voice Studio", "Public Voice Circles"],
  },
  {
    id: "civic-leadership",
    title: "Civic and cultural leadership",
    description:
      "Designing narratives, campaigns, and platforms that help institutions, artists, and initiatives speak with clarity. Supporting underfunded issues with the right narrative and stage.",
    initiatives: ["Social Initiative Lab", "Community screenings"],
  },
  {
    id: "digital-ai",
    title: "Digital public tools and AI",
    description:
      "AI as civic infrastructure: caption, letter, speech, press, and proposal tools that save time for students, organizers, artists, and offices while encouraging better language.",
    initiatives: ["Janak AI Public Desk"],
  },
  {
    id: "youth-engagement",
    title: "Youth engagement and education",
    description:
      "Labs and programs where young storytellers bring real experiences and turn them into short film ideas and public conversations.",
    initiatives: ["Youth Story & Film Labs", "Keynotes and summits"],
  },
];

export const impactInitiatives: ImpactInitiative[] = [
  {
    id: "youth-film-labs",
    title: "Youth Story & Film Labs",
    context: "Education & youth partners",
    role: "Program design & narrative architecture",
    impact:
      "Prototype labs where young people turn lived experience into short film ideas and public conversations.",
  },
  {
    id: "public-voice-studio",
    title: "Public Voice Studio",
    context: "Media & civic discourse",
    role: "Host & curator",
    impact:
      "Editorial conversations with working voices across Nepal, treating talk shows as civic infrastructure.",
  },
  {
    id: "janak-ai-desk",
    title: "Janak AI Public Desk",
    context: "Digital public tools",
    role: "Creator & steward",
    impact:
      "Live experiment offering Nepali caption, letter, speech, and proposal tools as everyday civic utilities.",
    link: "/ai-tools",
  },
];

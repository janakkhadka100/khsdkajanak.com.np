export type InitiativeStatus = "ongoing" | "completed" | "upcoming";

export type Initiative = {
  id: string;
  title: string;
  summary: string;
  status: InitiativeStatus;
  category: "film" | "media" | "social" | "education" | "youth" | "other";
  link?: string;
};

export const initiatives: Initiative[] = [
  {
    id: "youth-film-labs",
    title: "Youth Story & Film Labs",
    summary:
      "Work-in-progress labs where young storytellers bring real experiences and turn them into short film ideas.",
    status: "upcoming",
    category: "education",
  },
  {
    id: "public-voice-circles",
    title: "Public Voice Circles",
    summary:
      "Small, recurring gatherings that prototype new kinds of public conversation formats away from the television lights.",
    status: "ongoing",
    category: "social",
  },
  {
    id: "ai-desk-experiments",
    title: "Janak AI Public Desk",
    summary:
      "Live experiment offering Nepali caption, letter, speech, and proposal tools as everyday utilities.",
    status: "ongoing",
    category: "media",
    link: "/ai-tools",
  },
];


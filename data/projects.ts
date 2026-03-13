export type ProjectCategory =
  | "film"
  | "media"
  | "ai"
  | "social"
  | "astrology"
  | "strategy";

export type ProjectStatus = "live" | "in-development" | "concept" | "archive";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  status: ProjectStatus;
  summary: string;
  impact: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export const projects: Project[] = [
  {
    slug: "cinematic-stories-changing-nepal",
    title: "Cinematic Stories of a Changing Nepal",
    category: "film",
    status: "in-development",
    summary:
      "A feature-length film project that follows people caught between villages, cities, and new digital lives.",
    impact:
      "Builds a cinematic, export-ready language for Nepali stories without losing local texture.",
  },
  {
    slug: "public-voice-studio",
    title: "Public Voice Studio",
    category: "media",
    status: "concept",
    summary:
      "A conversational media format that invites artists, thinkers, and working citizens into the same frame.",
    impact:
      "Shifts public programs away from shallow debate towards slower, deeper, more grounded dialogue.",
  },
  {
    slug: "janak-ai-public-desk",
    title: "Janak AI Public Desk",
    category: "ai",
    status: "live",
    summary:
      "A suite of AI-assisted utilities for Nepali users — captions, formal letters, speeches, press notes, bios, and ideas.",
    impact:
      "Saves time for students, organizers, artists, offices, and media teams while encouraging better language.",
    ctaLabel: "Open AI tools hub",
    ctaHref: "/ai-tools",
  },
  {
    slug: "astro-guidance-studio",
    title: "Astrology & Guidance Studio",
    category: "astrology",
    status: "in-development",
    summary:
      "A soft, premium guidance experience that treats astrology as space for reflection, not fear.",
    impact:
      "Offers gentle language and frameworks for people to think about their patterns, choices, and directions.",
  },
  {
    slug: "social-initiative-lab",
    title: "Social Initiative Lab",
    category: "social",
    status: "concept",
    summary:
      "Incubating public projects and campaigns that combine film, storytelling, and strategic communication.",
    impact:
      "Helps important but underfunded issues find the right narrative and public stage.",
  },
];


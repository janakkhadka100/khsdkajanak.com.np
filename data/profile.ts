/**
 * Public profile - derives from bio.ts and projects.ts (single source).
 * Add to bio.ts multiIdentity, aboutIntro; add to projects.ts for roles.
 * Output shape unchanged for profile page components.
 */

import { aboutIntro, multiIdentity } from "./bio";
import { projects } from "./projects";
import type { ProfileSummaryItem, BioBlock } from "./types";

/** Profile summary (At a glance) — built from bio + projects */
export const profileSummary: ProfileSummaryItem[] = [
  { label: "Born", value: "Nepal" },
  {
    label: "Profession",
    value: multiIdentity.map((m) => m.label.replace(/ & .*/, "").trim()).slice(0, 5),
  },
  {
    label: "Roles",
    value: projects
      .filter((p) => p.status === "live" || p.status === "in-development")
      .slice(0, 4)
      .map((p) => p.title),
  },
  {
    label: "Known for",
    value: [
      "Cinematic storytelling",
      "Civic discourse formats",
      "Nepali AI writing tools",
      "Youth film labs",
    ],
  },
  { label: "Region", value: "Nepal" },
  { label: "Current focus", value: "Film, media, civic tools, AI as public utility" },
];

/** Bio blocks — built from aboutIntro and multiIdentity */
export const profileBioBlocks: BioBlock[] = [
  {
    id: "short-bio",
    title: "Short bio",
    body: aboutIntro.body,
  },
  ...multiIdentity.map((m, i) => ({
    id: `bio-${i}`,
    title: m.label,
    body: [m.description] as string[],
  })),
];

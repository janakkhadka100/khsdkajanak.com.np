export type ImpactHighlight = {
  id: string;
  label: string;
  value: string;
  description?: string;
};

export const impactHighlights: ImpactHighlight[] = [
  {
    id: "programs-hosted",
    label: "Public programs, panels & conversations",
    value: "20+",
    description: "From small rooms to televised stages across Nepal.",
  },
  {
    id: "projects-incubated",
    label: "Creative & public projects incubated",
    value: "10+",
    description: "Film, media formats, social initiatives, and AI experiments.",
  },
  {
    id: "tools-launched",
    label: "AI tools & utilities",
    value: "5+",
    description: "Practical Nepali writing and guidance tools in active use.",
  },
];


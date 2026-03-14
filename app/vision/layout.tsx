import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vision & Ideas · Nepal's Creative & AI Future",
  description:
    "A vision for Nepal's creative, media, and AI-powered future. How film, media, AI, and public work can compound.",
  alternates: { canonical: "/vision" },
};

export default function VisionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

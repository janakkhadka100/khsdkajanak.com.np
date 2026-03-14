import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Tools Hub · Practical Utilities for Nepali Public Life",
  description:
    "Ask Janak AI, caption generator, formal letter desk, speech script, press notes, bios, tributes, and project proposals. Free AI-assisted drafting for Nepal.",
  alternates: { canonical: "/ai-tools" },
};

export default function AiToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

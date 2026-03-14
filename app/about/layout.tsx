import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About · Director, Civic Strategist, Cultural Architect",
  description:
    "Janak Khadka: filmmaker, strategist, writer, and public thinker from Nepal. Building a cinematic, civic, and AI-powered public ecosystem.",
  alternates: { canonical: "/about" },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

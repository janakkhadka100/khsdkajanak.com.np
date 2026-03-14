import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Astrology & Guidance · Reflective Experience",
  description:
    "A quiet corner for reflection—symbolic guidance based on date of birth. Not prediction; reflection and gentle direction. Premium consultations available.",
  alternates: { canonical: "/astrology" },
};

export default function AstrologyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

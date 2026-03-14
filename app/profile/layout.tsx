import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Janak Khadka · Public Profile",
  description:
    "Public profile of Janak Khadka: filmmaker, strategist, writer, and public thinker from Nepal. Film, media, civic discourse, AI tools, and institutional work.",
  alternates: { canonical: "/profile" },
};

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

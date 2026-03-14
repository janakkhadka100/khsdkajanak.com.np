import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Public Desk · Civic Writing Tools for Nepal",
  description:
    "Nepali AI civic writing desks: formal letters, speeches, press notes, bios, and tributes. Practical drafting assistants for everyday public life.",
  alternates: { canonical: "/public-desk" },
};

export default function PublicDeskLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

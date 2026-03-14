import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects · Film, Media, AI Tools & Social Initiatives",
  description:
    "An ecosystem of film, media, AI tools, and social initiatives. Each project connects back to public life in Nepal.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

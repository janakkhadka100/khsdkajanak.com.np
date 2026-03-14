import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights · Notes on film, society, strategy, media & AI in Nepal",
  description:
    "Long-form reflections, essays, and working notes on cinema, civic media, strategy, and AI tools—rooted in Nepal.",
  alternates: { canonical: "/blog" },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

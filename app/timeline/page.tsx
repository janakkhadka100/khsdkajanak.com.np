import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { TimelineEntryCard } from "@/components/timeline/TimelineEntryCard";
import { timelineEntries } from "@/data/timelineMedia";

export const metadata: Metadata = {
  title: "Media Timeline",
  description:
    "A visual timeline of Janak Khadka's public journey — films, media, civic work, institutional roles, and AI initiatives in Nepal.",
  alternates: { canonical: "/timeline" },
};

const allCategories = [
  "film",
  "media",
  "civic",
  "institutional",
  "digital",
  "ai",
  "public-service",
  "other",
];

const categoryLabels: Record<string, string> = {
  film: "Film",
  media: "Media",
  civic: "Civic",
  institutional: "Institutional",
  digital: "Digital",
  ai: "AI",
  "public-service": "Public Service",
  other: "Other",
};

export default function TimelinePage() {
  const featured = timelineEntries.filter((e) => e.featured);
  const rest = timelineEntries.filter((e) => !e.featured);

  return (
    <div className="page-shell space-y-16 pb-24 pt-10 md:space-y-20 md:pt-16">
      <section className="section-shell border-b border-gray-200 pb-10 pt-4">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Timeline" },
          ]}
          className="mb-4"
        />
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-600">
          Media timeline
        </p>
        <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
          A public journey across film, media, and civic work
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-gray-700">
          Key milestones, programs, and initiatives — from early film work to
          institutional leadership and AI-powered public tools.
        </p>
      </section>

      {featured.length > 0 && (
        <section className="section-shell">
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-600">
            Featured milestones
          </p>
          <div className="mt-6 space-y-4">
            {featured.map((entry) => (
              <TimelineEntryCard key={entry.id} entry={entry} />
            ))}
          </div>
        </section>
      )}

      <section className="section-shell">
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-600">
          Full timeline
        </p>
        <div className="mt-6 space-y-4">
          {rest.map((entry) => (
            <TimelineEntryCard key={entry.id} entry={entry} />
          ))}
        </div>
      </section>

      <section className="section-shell border-b-0">
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-600 mb-4">
          Explore by area
        </p>
        <div className="flex flex-wrap gap-2">
          {allCategories.map((cat) => (
            <span
              key={cat}
              className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs text-gray-700"
            >
              {categoryLabels[cat]}
            </span>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-4 text-sm">
          <Link
            href="/profile"
            className="text-gray-700 underline-offset-4 hover:text-royal-primary hover:underline"
          >
            Public profile →
          </Link>
          <Link
            href="/media"
            className="text-gray-700 underline-offset-4 hover:text-royal-primary hover:underline"
          >
            Media & appearances →
          </Link>
          <Link
            href="/impact"
            className="text-gray-700 underline-offset-4 hover:text-royal-primary hover:underline"
          >
            Public impact →
          </Link>
        </div>
      </section>
    </div>
  );
}

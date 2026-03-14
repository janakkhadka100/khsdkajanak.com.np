import Link from "next/link";
import type { TimelineEntry } from "@/data/types";

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

type Props = {
  entry: TimelineEntry;
};

export function TimelineEntryCard({ entry }: Props) {
  const categoryLabel = categoryLabels[entry.category] ?? entry.category;

  return (
    <article
      className={`relative rounded-xl border bg-white p-5 shadow-sm ${
        entry.featured ? "border-royal-primary/30 shadow-md" : "border-gray-200"
      }`}
    >
      <div className="flex flex-wrap items-baseline gap-2">
        <span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-royal-primary">
          {categoryLabel}
        </span>
        <span className="text-[0.7rem] text-gray-500">·</span>
        <span className="text-xs text-gray-600">{entry.year}</span>
      </div>
      <h3 className="mt-2 text-base font-semibold text-gray-900">{entry.title}</h3>
      {entry.subtitle && (
        <p className="mt-1 text-sm text-gray-600">{entry.subtitle}</p>
      )}
      <p className="mt-2 text-sm leading-relaxed text-gray-700">
        {entry.description}
      </p>
      {entry.relatedLinks && entry.relatedLinks.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-3">
          {entry.relatedLinks.map((link) => (
            <Link
              key={link.url}
              href={link.url}
              className="text-xs font-medium uppercase tracking-[0.14em] text-royal-primary underline-offset-4 hover:underline"
            >
              {link.label} →
            </Link>
          ))}
        </div>
      )}
    </article>
  );
}

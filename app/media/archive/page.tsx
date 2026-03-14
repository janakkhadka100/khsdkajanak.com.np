import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { NewsCard } from "@/components/news/NewsCard";
import { getFeaturedNews, getNewsByYear } from "@/data/news";

export const metadata: Metadata = {
  title: "News & Coverage Archive",
  description:
    "Articles, interviews, and press coverage about Janak Khadka. Film, media, AI tools, and civic work in Nepal.",
  alternates: { canonical: "/media/archive" },
};

const years = ["2026", "2025", "2024", "2023"];

export default function NewsArchivePage() {
  const featured = getFeaturedNews();

  return (
    <div className="page-shell space-y-16 pb-24 pt-10 md:space-y-20 md:pt-16">
      <section className="section-shell border-b border-gray-200 pb-10 pt-4">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Media", href: "/media" },
            { label: "News & Coverage" },
          ]}
          className="mb-4"
        />
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-600">
          News archive
        </p>
        <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
          Articles, interviews, and press coverage
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-gray-700">
          A curated record of media coverage, interviews, and press mentions
          connected to Janak Khadka&apos;s work in film, media, civic discourse,
          and AI tools.
        </p>
      </section>

      {featured.length > 0 && (
        <section className="section-shell">
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-600">
            Featured coverage
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {featured.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        </section>
      )}

      <section className="section-shell">
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-600">
          By year
        </p>
        <div className="mt-6 space-y-10">
          {years.map((year) => {
            const byYear = getNewsByYear(year);
            if (byYear.length === 0) return null;
            return (
              <div key={year}>
                <h2 className="text-lg font-semibold text-gray-900">{year}</h2>
                <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {byYear.map((article) => (
                    <NewsCard key={article.id} article={article} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section-shell border-b-0">
        <div className="flex flex-wrap gap-4 text-sm">
          <Link
            href="/media"
            className="text-gray-700 underline-offset-4 hover:text-royal-primary hover:underline"
          >
            Media & appearances →
          </Link>
          <Link
            href="/profile"
            className="text-gray-700 underline-offset-4 hover:text-royal-primary hover:underline"
          >
            Public profile →
          </Link>
          <Link
            href="/timeline"
            className="text-gray-700 underline-offset-4 hover:text-royal-primary hover:underline"
          >
            Timeline →
          </Link>
        </div>
      </section>
    </div>
  );
}

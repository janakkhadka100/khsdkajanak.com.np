import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import {
  impactPillars,
  impactInitiatives,
} from "@/data/impact";

export const metadata: Metadata = {
  title: "Public Impact",
  description:
    "Film and storytelling, media discourse, civic leadership, digital public tools, and youth engagement — Janak Khadka's institutional and civic contributions in Nepal.",
  alternates: { canonical: "/impact" },
};

export default function ImpactPage() {
  return (
    <div className="page-shell space-y-16 pb-24 pt-10 md:space-y-20 md:pt-16">
      <section className="section-shell border-b border-gray-200 pb-10 pt-4">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Impact" },
          ]}
          className="mb-4"
        />
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-600">
          Public impact
        </p>
        <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
          Where the work meets the public
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-gray-700">
          A structured view of contributions across film, media, civic
          leadership, digital tools, and youth engagement — institutional,
          evidence-based, and grounded in Nepal.
        </p>
      </section>

      <section className="section-shell">
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-600">
          Impact pillars
        </p>
        <div className="mt-6 space-y-6">
          {impactPillars.map((pillar) => (
            <article
              key={pillar.id}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-lg font-semibold text-gray-900">
                {pillar.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-700">
                {pillar.description}
              </p>
              {pillar.initiatives && pillar.initiatives.length > 0 && (
                <ul className="mt-4 flex flex-wrap gap-2">
                  {pillar.initiatives.map((init) => (
                    <li
                      key={init}
                      className="rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-700"
                    >
                      {init}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-600">
          Key initiatives
        </p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {impactInitiatives.map((init) => (
            <article
              key={init.id}
              className="flex flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <p className="text-[0.7rem] uppercase tracking-[0.18em] text-gray-500">
                {init.context}
              </p>
              <h3 className="mt-2 text-base font-semibold text-gray-900">
                {init.title}
              </h3>
              {init.role && (
                <p className="mt-1 text-xs text-gray-600">{init.role}</p>
              )}
              <p className="mt-3 flex-grow text-sm leading-relaxed text-gray-700">
                {init.impact}
              </p>
              {init.link && (
                <Link
                  href={init.link}
                  className="mt-4 text-xs font-medium uppercase tracking-[0.14em] text-royal-primary underline-offset-4 hover:underline"
                >
                  Learn more →
                </Link>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell border-b-0">
        <div className="flex flex-wrap gap-4 text-sm">
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
          <Link
            href="/projects"
            className="text-gray-700 underline-offset-4 hover:text-royal-primary hover:underline"
          >
            Projects →
          </Link>
          <Link
            href="/media"
            className="text-gray-700 underline-offset-4 hover:text-royal-primary hover:underline"
          >
            Media & appearances →
          </Link>
        </div>
      </section>
    </div>
  );
}

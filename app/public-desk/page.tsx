import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

const desks = [
  {
    name: "Nivedan & Bureaucratic Letter Architect",
    description: "Drafts formal Nepali letters for offices, institutions, and civic requests.",
    examples: ["Scholarship and leave applications", "Ward and municipality requests"],
    href: "/tools/nivedan-letter-architect",
  },
  {
    name: "Speech & Program Script Desk",
    description: "Prepares scripts for school programs, youth events, and public ceremonies.",
    examples: ["School annual day speeches", "Award distribution programs"],
    href: "/tools/speech-program-desk",
  },
  {
    name: "Press Desk",
    description: "Structures press notes and announcements for organizations and campaigns.",
    examples: ["Program announcements", "Clarification and statements"],
    href: "/tools/press-note-generator",
  },
  {
    name: "Biography Desk",
    description: "Creates concise public bios for artists, organizers, and public figures.",
    examples: ["Event brochures", "Panel introductions"],
    href: "/tools/bio-writer",
  },
  {
    name: "Tribute Desk",
    description: "Drafts dignified tributes, congratulations, and condolences.",
    examples: ["श्रद्धाञ्जली सन्देश", "बधाई र शुभकामना"],
    href: "/tools/tribute-writer",
  },
];

export default function PublicDeskPage() {
  return (
    <div className="page-shell space-y-16 pb-24 pt-10 md:space-y-20 md:pt-16">
      <section className="section-shell border-b border-gray-200 pb-12 pt-4 md:pb-16">
        <div className="space-y-4 max-w-3xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Public Desk" }]} className="mb-4" />
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-600">
            Public Tools
          </p>
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
            Janak AI Public Desk
          </h1>
          <p className="text-sm leading-relaxed text-gray-700 md:text-[0.95rem]">
            A set of civic writing desks designed to help Nepali users draft clear letters,
            speeches, press notes, and public messages for real institutions and public life.
          </p>
          <p className="text-[0.7rem] text-gray-600">
            These desks generate drafts. Review every output before submitting to an office,
            media house, or public body.
          </p>
        </div>
      </section>

      <section className="section-shell border-b-0">
        <div className="mb-8 space-y-4">
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-600">
            Civic writing desks
          </p>
          <h2 className="text-xl font-semibold text-gray-900 md:text-2xl">
            Everyday desks for Nepali public life.
          </h2>
          <p className="max-w-xl text-sm text-gray-600">
            Each desk produces drafts for you to review and edit. Not a replacement for
            judgment—a practical assistant for real institutions and public contexts.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {desks.map((desk, i) => {
            const isFeatured = i < 2;
            return (
              <Link
                key={desk.name}
                href={desk.href}
                className={`group rounded-xl border p-4 transition ${
                  isFeatured
                    ? "border-royal-accent/30 bg-white shadow-sm hover:border-royal-accent/50 hover:shadow-md"
                    : "border-gray-200 bg-white shadow-sm hover:border-gray-300 hover:shadow-md"
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <p className="text-sm font-semibold text-gray-900 group-hover:text-gray-900">
                    {desk.name}
                  </p>
                  {isFeatured && (
                    <span className="shrink-0 rounded bg-royal-accent/15 px-1.5 py-0.5 text-[0.6rem] font-semibold uppercase tracking-wider text-royal-accent">
                      Most used
                    </span>
                  )}
                </div>
                <p className="mt-2 text-xs leading-relaxed text-gray-700">
                  {desk.description}
                </p>
                <ul className="mt-3 space-y-0.5 text-[0.72rem] text-gray-600">
                  {desk.examples.map((ex) => (
                    <li key={ex}>• {ex}</li>
                  ))}
                </ul>
                <span className="mt-3 inline-flex text-[0.7rem] font-medium uppercase tracking-[0.18em] text-gray-600 group-hover:text-gray-700">
                  Open desk →
                </span>
              </Link>
            );
          })}
        </div>

        <div className="mt-10 rounded-xl border border-gray-200 bg-white shadow-sm p-4 max-w-2xl">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-gray-600">
            More tools
          </p>
          <p className="mt-2 text-sm text-gray-700">
            Ask Janak AI, Caption Desk, Bio, Tribute, and Project Proposal Helper are available in
            the{" "}
            <Link href="/ai-tools" className="text-gray-900 underline underline-offset-2 hover:text-royal-accent">
              AI Tools Hub
            </Link>
            . Astrology & reflection:{" "}
            <Link href="/astrology" className="text-gray-900 underline underline-offset-2 hover:text-royal-accent">
              Guidance
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
}


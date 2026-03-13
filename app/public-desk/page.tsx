import Link from "next/link";

const desks = [
  {
    name: "Formal Letter Desk",
    description: "Drafts formal Nepali letters for offices, institutions, and civic requests.",
    examples: ["Scholarship and leave applications", "Ward and municipality requests"],
    href: "/tools/formal-letter-writer",
  },
  {
    name: "Public Program Desk",
    description: "Prepares scripts for school programs, youth events, and public ceremonies.",
    examples: ["School annual day speeches", "Award distribution programs"],
    href: "/tools/speech-script-generator",
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
      <section className="section-shell border-b border-white/10 pb-12 pt-4 md:pb-16">
        <div className="space-y-4 max-w-3xl">
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-zinc-500">
            Public Tools
          </p>
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-zinc-50 md:text-4xl">
            Janak AI Public Desk
          </h1>
          <p className="text-sm leading-relaxed text-zinc-300 md:text-[0.95rem]">
            A set of civic writing desks designed to help Nepali users draft clear letters,
            speeches, press notes, and public messages for real institutions and public life.
          </p>
          <p className="text-[0.7rem] text-zinc-500">
            These desks generate drafts. Review every output before submitting to an office,
            media house, or public body.
          </p>
        </div>
      </section>

      <section className="section-shell border-b-0">
        <div className="mb-6 space-y-3">
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-zinc-500">
            Civic writing desks
          </p>
          <h2 className="text-xl font-semibold text-zinc-50 md:text-2xl">
            Everyday desks for Nepali public life.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3 text-sm text-zinc-200">
          {desks.map((desk) => (
            <div
              key={desk.name}
              className="rounded-2xl border border-white/12 bg-white/[0.03] p-4"
            >
              <p className="text-sm font-semibold text-zinc-50">
                {desk.name}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-zinc-300">
                {desk.description}
              </p>
              <ul className="mt-3 space-y-1 text-[0.72rem] text-zinc-400">
                {desk.examples.map((ex) => (
                  <li key={ex}>• {ex}</li>
                ))}
              </ul>
              <Link
                href={desk.href}
                className="mt-3 inline-flex text-[0.7rem] font-medium uppercase tracking-[0.18em] text-zinc-300 underline-offset-4 hover:text-zinc-100 hover:underline"
              >
                Open desk
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}


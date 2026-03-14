import Link from "next/link";
import { aboutIntro, coreValues, missionForNepal, multiIdentity, signatureQuote, timeline, whyTheDisciplinesConnect } from "@/data/bio";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export default function AboutPage() {
  return (
    <div className="page-shell space-y-16 pb-24 pt-10 md:space-y-20 md:pt-16">
      <section className="section-shell border-b border-gray-200 pb-10 pt-4">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} className="mb-4" />
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-600">
          About
        </p>
        <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
          A storyteller, strategist, connector, and public communicator.
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-gray-700">
          {aboutIntro.title}
        </p>
        <div className="mt-4 space-y-3 text-sm leading-relaxed text-gray-700">
          {aboutIntro.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-6 rounded-xl border border-gray-200 bg-white shadow-sm p-4 max-w-2xl">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-gray-600">
            Public mission
          </p>
          <p className="mt-2 text-sm leading-relaxed text-gray-700">
            This platform exists to build a long-term creative and civic ecosystem in Nepal—film, media, AI tools, and guidance—that people can trust and return to. Not a portfolio; a public work.
          </p>
        </div>
      </section>

      <section className="section-shell">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1.4fr)]">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-600">
              Multi-dimensional identity
            </p>
            <h2 className="mt-3 text-xl font-semibold text-gray-900 md:text-2xl">
              Many roles, one ecosystem.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-700">
              Janak does not treat his different roles as separate careers. They
              are different rooms in the same house. Film, media, strategy,
              social work, astrology, and AI tools all serve the same question:
              how can this be useful to people?
            </p>
          </div>
          <div className="grid gap-4 text-sm text-gray-700 md:grid-cols-2">
            {multiIdentity.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-gray-200 bg-white shadow-sm p-4"
              >
                <p className="text-xs uppercase tracking-[0.22em] text-gray-600">
                  {item.label}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-gray-700">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.7fr)_minmax(0,1.3fr)]">
          <div className="space-y-4">
            <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-600">
              Core values
            </p>
            <h2 className="text-xl font-semibold text-gray-900 md:text-2xl">
              What drives the work.
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              {coreValues.map((value) => (
                <li key={value} className="flex gap-2">
                  <span className="mt-1 h-1 w-4 rounded-full bg-royal-accent" />
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4 rounded-xl border border-gray-200 bg-white shadow-sm p-5 text-sm text-gray-700">
            <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-600">
              Mission for Nepal
            </p>
            <p>{missionForNepal}</p>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1.5fr)]">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-600">
              Why it all connects
            </p>
            <h2 className="mt-3 text-xl font-semibold text-gray-900 md:text-2xl">
              Film, media, strategy, public thought, and astrology.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-700">
              At first glance, these may look like separate paths. In practice,
              they are different ways of answering the same questions people
              bring: about their lives, their work, their country, and their
              possibilities.
            </p>
          </div>
          <div className="space-y-3 text-sm text-gray-700">
            {whyTheDisciplinesConnect.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-600">
          Journey
        </p>
        <h2 className="mt-3 text-xl font-semibold text-gray-900 md:text-2xl">
          Timeline of key milestones.
        </h2>
        <div className="mt-6 space-y-4">
          {timeline.map((item) => (
            <div
              key={item.title}
              className="grid gap-3 rounded-xl border border-gray-200 bg-white shadow-sm p-4 text-sm text-gray-700 md:grid-cols-[120px_minmax(0,1fr)]"
            >
              <div className="text-xs uppercase tracking-[0.22em] text-gray-600">
                {item.year}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">{item.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-gray-700">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="rounded-xl border border-royal-accent/30 bg-white p-6 text-center md:p-8">
          <p className="text-xs uppercase tracking-[0.26em] text-gray-600">
            Signature quote
          </p>
          <p className="mt-4 text-balance text-lg leading-relaxed text-gray-900 md:text-xl">
            {signatureQuote}
          </p>
        </div>
      </section>

      <section className="section-shell border-b-0">
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-600">
          Engage with the platform
        </p>
        <h2 className="mt-3 text-xl font-semibold text-gray-900 md:text-2xl">
          Work with this ecosystem.
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-700">
          Explore projects, media appearances, and public tools. For collaborations, speaking, advisory, or support—start a conversation.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center rounded-lg border-2 border-royal-primary bg-transparent px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-royal-primary transition hover:bg-gray-50"
          >
            Explore projects →
          </Link>
          <Link
            href="/media"
            className="inline-flex items-center rounded-lg border-2 border-royal-primary bg-transparent px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-royal-primary transition hover:bg-gray-50"
          >
            Media & appearances →
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-royal-accent px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-royal-primary-hover"
          >
            Collaborate
          </Link>
          <Link
            href="/membership"
            className="inline-flex items-center rounded-lg border-2 border-royal-primary bg-transparent px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-royal-primary transition hover:bg-gray-50"
          >
            Membership & support →
          </Link>
        </div>
      </section>
    </div>
  );
}


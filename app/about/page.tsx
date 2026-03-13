import { aboutIntro, coreValues, missionForNepal, multiIdentity, signatureQuote, timeline, whyTheDisciplinesConnect } from "@/data/bio";

export default function AboutPage() {
  return (
    <div className="page-shell space-y-16 pb-24 pt-10 md:space-y-20 md:pt-16">
      <section className="section-shell border-b border-white/10 pb-10 pt-4">
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-zinc-500">
          About
        </p>
        <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-zinc-50 md:text-4xl">
          A storyteller, strategist, connector, and public communicator.
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-zinc-300">
          {aboutIntro.title}
        </p>
        <div className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-300">
          {aboutIntro.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1.4fr)]">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.22em] text-zinc-500">
              Multi-dimensional identity
            </p>
            <h2 className="mt-3 text-xl font-semibold text-zinc-50 md:text-2xl">
              Many roles, one ecosystem.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-zinc-300">
              Janak does not treat his different roles as separate careers. They
              are different rooms in the same house. Film, media, strategy,
              social work, astrology, and AI tools all serve the same question:
              how can this be useful to people?
            </p>
          </div>
          <div className="grid gap-4 text-sm text-zinc-200 md:grid-cols-2">
            {multiIdentity.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/12 bg-white/[0.04] p-4"
              >
                <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
                  {item.label}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-zinc-200">
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
            <p className="text-[0.7rem] uppercase tracking-[0.22em] text-zinc-500">
              Core values
            </p>
            <h2 className="text-xl font-semibold text-zinc-50 md:text-2xl">
              What drives the work.
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-zinc-300">
              {coreValues.map((value) => (
                <li key={value} className="flex gap-2">
                  <span className="mt-1 h-1 w-4 rounded-full bg-[#f5b048]" />
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4 rounded-3xl border border-white/12 bg-white/[0.04] p-5 text-sm text-zinc-200">
            <p className="text-[0.7rem] uppercase tracking-[0.22em] text-zinc-500">
              Mission for Nepal
            </p>
            <p>{missionForNepal}</p>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1.5fr)]">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.22em] text-zinc-500">
              Why it all connects
            </p>
            <h2 className="mt-3 text-xl font-semibold text-zinc-50 md:text-2xl">
              Film, media, strategy, public thought, and astrology.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-zinc-300">
              At first glance, these may look like separate paths. In practice,
              they are different ways of answering the same questions people
              bring: about their lives, their work, their country, and their
              possibilities.
            </p>
          </div>
          <div className="space-y-3 text-sm text-zinc-300">
            {whyTheDisciplinesConnect.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-zinc-500">
          Journey
        </p>
        <h2 className="mt-3 text-xl font-semibold text-zinc-50 md:text-2xl">
          Timeline of key milestones.
        </h2>
        <div className="mt-6 space-y-4">
          {timeline.map((item) => (
            <div
              key={item.title}
              className="grid gap-3 rounded-2xl border border-white/12 bg-white/[0.03] p-4 text-sm text-zinc-200 md:grid-cols-[120px_minmax(0,1fr)]"
            >
              <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">
                {item.year}
              </div>
              <div>
                <p className="text-sm font-medium text-zinc-50">{item.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-zinc-300">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell border-b-0">
        <div className="rounded-3xl border border-white/15 bg-white/[0.03] p-6 text-center md:p-8">
          <p className="text-xs uppercase tracking-[0.26em] text-zinc-500">
            Signature quote
          </p>
          <p className="mt-4 text-balance text-lg leading-relaxed text-zinc-50 md:text-xl">
            {signatureQuote}
          </p>
        </div>
      </section>
    </div>
  );
}


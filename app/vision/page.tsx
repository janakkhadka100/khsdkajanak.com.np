import { visionIntro, visionSections } from "@/data/vision";

export default function VisionPage() {
  return (
    <div className="page-shell space-y-16 pb-24 pt-10 md:space-y-20 md:pt-16">
      <section className="section-shell border-b border-white/10 pb-10 pt-4">
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-zinc-500">
          Vision & Ideas
        </p>
        <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-zinc-50 md:text-4xl">
          A vision for Nepal’s creative, media, and AI-powered future.
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-zinc-300">
          {visionIntro}
        </p>
      </section>

      <section className="section-shell">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.8fr)_minmax(0,1.2fr)]">
          <div className="space-y-8">
            {visionSections.map((section) => (
              <article key={section.id} id={section.id} className="space-y-3">
                <h2 className="text-lg font-semibold text-zinc-50 md:text-xl">
                  {section.title}
                </h2>
                {section.body.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-sm leading-relaxed text-zinc-300"
                  >
                    {paragraph}
                  </p>
                ))}
              </article>
            ))}
          </div>

          <aside className="space-y-4 rounded-3xl border border-white/12 bg-white/[0.03] p-5 text-xs text-zinc-300">
            <p className="text-[0.7rem] uppercase tracking-[0.22em] text-zinc-500">
              For investors & collaborators
            </p>
            <p>
              This page doubles as an investment and partnership lens: it
              reveals how Janak thinks about Nepal’s future, and where film,
              media, AI, and public work can compound.
            </p>
            <p>
              If these ideas resonate with your institution, brand, or fund,
              the next step is a conversation — not a pitch deck.{" "}
            </p>
          </aside>
        </div>
      </section>
    </div>
  );
}


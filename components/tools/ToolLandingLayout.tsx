import Link from "next/link";
import type { ToolLandingMeta } from "@/data/toolLandings";
import { toolLandings } from "@/data/toolLandings";
import { ToolLandingCta } from "./ToolLandingCta";

type Props = {
  meta: ToolLandingMeta;
  pageSlug: string;
};

export function ToolLandingLayout({ meta, pageSlug }: Props) {
  const related = meta.relatedSlugs
    .map((s) => toolLandings[s as keyof typeof toolLandings])
    .filter(Boolean);

  return (
    <div className="page-shell space-y-16 pb-24 pt-10 md:space-y-20 md:pt-16">
      {/* Hero */}
      <section className="section-shell border-b border-white/10 pb-10 pt-4">
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-zinc-500">
          Free AI tool
        </p>
        <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-zinc-50 md:text-4xl">
          {meta.heroTitle}
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-zinc-300">
          {meta.heroSubtitle}
        </p>
      </section>

      {/* What it does + Who it's for */}
      <section className="section-shell">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
              What it does
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-200">
              {meta.whatItDoes}
            </p>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
              Who it&apos;s for
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-200">
              {meta.whoItsFor}
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-shell">
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
          Key benefits
        </h2>
        <ul className="mt-4 space-y-2">
          {meta.benefits.map((b) => (
            <li
              key={b}
              className="flex gap-3 text-sm text-zinc-200"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f5b048]" />
              {b}
            </li>
          ))}
        </ul>
      </section>

      {/* How it works */}
      <section className="section-shell">
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
          How it works
        </h2>
        <ol className="mt-4 grid gap-4 md:grid-cols-3">
          <li className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-zinc-200">
            <span className="text-xs font-medium text-zinc-500">Step 1</span>
            <p className="mt-2">Describe your need—post type, event, audience, or idea.</p>
          </li>
          <li className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-zinc-200">
            <span className="text-xs font-medium text-zinc-500">Step 2</span>
            <p className="mt-2">Generate. The AI returns a draft in Nepali (or as set).</p>
          </li>
          <li className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-zinc-200">
            <span className="text-xs font-medium text-zinc-500">Step 3</span>
            <p className="mt-2">Edit and use. Copy, tweak, and publish or submit.</p>
          </li>
        </ol>
      </section>

      {/* Sample output */}
      <section className="section-shell">
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
          Example
        </h2>
        <p className="mt-2 text-xs text-zinc-500">
          Sample input and output. Results are AI-generated and may vary.
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/12 bg-black/40 p-4">
            <p className="text-[0.7rem] uppercase tracking-[0.18em] text-zinc-500">
              Input
            </p>
            <p className="mt-2 whitespace-pre-line text-sm text-zinc-200">
              {meta.samplePrompt}
            </p>
          </div>
          <div className="rounded-2xl border border-white/12 bg-black/40 p-4">
            <p className="text-[0.7rem] uppercase tracking-[0.18em] text-zinc-500">
              Sample output
            </p>
            <p className="mt-2 whitespace-pre-line text-sm text-zinc-200">
              {meta.sampleOutput}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-shell">
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
          Frequently asked questions
        </h2>
        <dl className="mt-4 space-y-4">
          {meta.faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-4"
            >
              <dt className="text-sm font-medium text-zinc-50">
                {faq.question}
              </dt>
              <dd className="mt-2 text-sm text-zinc-300">
                {faq.answer}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* CTA + Related */}
      <section className="section-shell border-b-0">
        <div className="rounded-3xl border border-white/15 bg-white/[0.03] p-6 md:p-8">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
            Use this tool
          </h2>
          <p className="mt-2 text-sm text-zinc-200">
            Head to the AI tools hub to try {meta.name} and other utilities. No sign-up required.
          </p>
          <ToolLandingCta
            pageSlug={pageSlug}
            href={meta.toolHref}
            label={`Open ${meta.name}`}
          />
        </div>

        {related.length > 0 && (
          <div className="mt-10">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
              Related tools
            </h2>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/tools/${r.slug}`}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-zinc-200 transition hover:border-[#f5b048]/50 hover:bg-white/[0.06]"
                >
                  <p className="font-medium text-zinc-50">{r.name}</p>
                  <p className="mt-1 text-xs text-zinc-400">
                    {r.heroSubtitle.slice(0, 80)}…
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="mt-10 flex flex-wrap gap-4 text-xs text-zinc-400">
          <Link href="/blog" className="underline-offset-4 hover:text-zinc-200 hover:underline">
            Insights & articles
          </Link>
          <Link href="/contact" className="underline-offset-4 hover:text-zinc-200 hover:underline">
            Contact & collaboration
          </Link>
          <Link href="/membership" className="underline-offset-4 hover:text-zinc-200 hover:underline">
            Membership & premium
          </Link>
        </div>
      </section>
    </div>
  );
}

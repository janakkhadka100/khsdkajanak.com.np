import Link from "next/link";
import type { ToolLandingMeta } from "@/data/toolLandings";
import { toolLandings } from "@/data/toolLandings";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
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
      <section className="section-shell border-b border-gray-200 pb-10 pt-4">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Public Desk", href: "/public-desk" },
            { label: meta.name },
          ]}
          className="mb-4"
        />
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-600">
          Free AI tool
        </p>
        <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
          {meta.heroTitle}
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-gray-700">
          {meta.heroSubtitle}
        </p>
      </section>

      {/* What it does + Who it's for */}
      <section className="section-shell">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-600">
              What it does
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-700">
              {meta.whatItDoes}
            </p>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-600">
              Who it&apos;s for
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-700">
              {meta.whoItsFor}
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-shell">
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-600">
          Key benefits
        </h2>
        <ul className="mt-4 space-y-2">
          {meta.benefits.map((b) => (
            <li
              key={b}
              className="flex gap-3 text-sm text-gray-700"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-royal-accent" />
              {b}
            </li>
          ))}
        </ul>
      </section>

      {/* How it works */}
      <section className="section-shell">
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-600">
          How it works
        </h2>
        <ol className="mt-4 grid gap-4 md:grid-cols-3">
          <li className="rounded-xl border border-gray-200 bg-white shadow-sm p-4 text-sm text-gray-700">
            <span className="text-xs font-medium text-gray-600">Step 1</span>
            <p className="mt-2">Describe your need—post type, event, audience, or idea.</p>
          </li>
          <li className="rounded-xl border border-gray-200 bg-white shadow-sm p-4 text-sm text-gray-700">
            <span className="text-xs font-medium text-gray-600">Step 2</span>
            <p className="mt-2">Generate. The AI returns a draft in Nepali (or as set).</p>
          </li>
          <li className="rounded-xl border border-gray-200 bg-white shadow-sm p-4 text-sm text-gray-700">
            <span className="text-xs font-medium text-gray-600">Step 3</span>
            <p className="mt-2">Edit and use. Copy, tweak, and publish or submit.</p>
          </li>
        </ol>
      </section>

      {/* Sample output */}
      <section className="section-shell">
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-600">
          Example
        </h2>
        <p className="mt-2 text-xs text-gray-600">
          Sample input and output. Results are AI-generated and may vary.
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-gray-200 bg-white p-4">
            <p className="text-[0.7rem] uppercase tracking-[0.18em] text-gray-600">
              Input
            </p>
            <p className="mt-2 whitespace-pre-line text-sm text-gray-700">
              {meta.samplePrompt}
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-4">
            <p className="text-[0.7rem] uppercase tracking-[0.18em] text-gray-600">
              Sample output
            </p>
            <p className="mt-2 whitespace-pre-line text-sm text-gray-700">
              {meta.sampleOutput}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-shell">
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-600">
          Frequently asked questions
        </h2>
        <dl className="mt-4 space-y-4">
          {meta.faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-xl border border-gray-200 bg-gray-50 p-4"
            >
              <dt className="text-sm font-medium text-gray-900">
                {faq.question}
              </dt>
              <dd className="mt-2 text-sm text-gray-700">
                {faq.answer}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Related Codex nodes (if any) */}
      {meta.codexLinks && meta.codexLinks.length > 0 && (
        <section className="section-shell">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-600">
            Related Codex nodes
          </h2>
          <p className="mt-2 text-xs text-gray-600">
            Essays and notes from the Digital Codex that sit behind this desk.
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {meta.codexLinks.map((node) => (
              <Link
                key={node.href}
                href={node.href}
                className="rounded-xl border border-gray-200 bg-white shadow-sm p-4 text-sm text-gray-700 transition hover:border-royal-accent/50 hover:shadow-md"
              >
                <p className="font-medium text-gray-900">{node.title}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* CTA + Related */}
      <section className="section-shell border-b-0">
        <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-6 md:p-8">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-600">
            Use this tool
          </h2>
          <p className="mt-2 text-sm text-gray-700">
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
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-600">
              Related tools
            </h2>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/tools/${r.slug}`}
                  className="rounded-xl border border-gray-200 bg-white shadow-sm p-4 text-sm text-gray-700 transition hover:border-royal-accent/50 hover:shadow-md"
                >
                  <p className="font-medium text-gray-900">{r.name}</p>
                  <p className="mt-1 text-xs text-gray-600">
                    {r.heroSubtitle.slice(0, 80)}…
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="mt-10 flex flex-wrap gap-4 text-xs text-gray-600">
          <Link href="/blog" className="underline-offset-4 hover:text-gray-700 hover:underline">
            Insights & articles
          </Link>
          <Link href="/contact" className="underline-offset-4 hover:text-gray-700 hover:underline">
            Contact & collaboration
          </Link>
          <Link href="/membership" className="underline-offset-4 hover:text-gray-700 hover:underline">
            Membership & premium
          </Link>
        </div>
      </section>
    </div>
  );
}

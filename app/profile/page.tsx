import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { profileSummary, profileBioBlocks } from "@/data/profile";
import { mediaItems } from "@/data/media";
import { projects } from "@/data/projects";
import { signatureQuote } from "@/data/bio";

export default function ProfilePage() {
  const featuredMedia = mediaItems.filter((m) => m.featured).slice(0, 3);
  const featuredProjects = projects.filter((p) => p.status === "live").slice(0, 2);

  return (
    <div className="page-shell space-y-16 pb-24 pt-10 md:space-y-20 md:pt-16">
      {/* Hero / Profile header */}
      <section className="section-shell border-b border-gray-200 pb-10 pt-4">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Janak Khadka" },
          ]}
          className="mb-4"
        />
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.8fr)_minmax(0,1fr)] md:items-start">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-600">
              Public profile
            </p>
            <h1 className="mt-3 text-balance text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Janak Khadka
            </h1>
            <p className="mt-4 text-base leading-relaxed text-gray-700">
              Filmmaker, strategist, writer, and public thinker from Nepal. Building
              a cinematic, civic, and AI-powered public ecosystem.
            </p>
          </div>

          {/* Summary block - Wikipedia-style */}
          <aside className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm md:sticky md:top-28">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-gray-600">
              At a glance
            </p>
            <dl className="mt-4 space-y-3 text-sm">
              {profileSummary.map((item) => (
                <div key={item.label}>
                  <dt className="font-medium text-gray-900">{item.label}</dt>
                  <dd className="mt-0.5 text-gray-700">
                    {Array.isArray(item.value) ? (
                      <ul className="list-disc space-y-0.5 pl-4">
                        {item.value.map((v) => (
                          <li key={v}>{v}</li>
                        ))}
                      </ul>
                    ) : (
                      item.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      {/* Bio blocks */}
      <section className="section-shell">
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-600">
          Biography
        </p>
        <h2 className="mt-3 text-xl font-semibold text-gray-900 md:text-2xl">
          Factual overview
        </h2>
        <div className="mt-6 space-y-8">
          {profileBioBlocks.map((block) => (
            <div key={block.id}>
              <h3 className="text-base font-semibold text-gray-900">{block.title}</h3>
              <div className="mt-2 space-y-2 text-sm leading-relaxed text-gray-700">
                {block.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Signature quote */}
      <section className="section-shell">
        <div className="rounded-xl border border-royal-accent/30 bg-white p-6 text-center shadow-sm md:p-8">
          <blockquote className="text-lg leading-relaxed text-gray-900 md:text-xl">
            {signatureQuote}
          </blockquote>
        </div>
      </section>

      {/* Selected works and appearances */}
      <section className="section-shell">
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-600">
          Selected works
        </p>
        <h2 className="mt-3 text-xl font-semibold text-gray-900 md:text-2xl">
          Projects and media
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((p) => (
            <Link
              key={p.slug}
              href={p.ctaHref ?? "/projects"}
              className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md"
            >
              <p className="text-sm font-semibold text-gray-900">{p.title}</p>
              <p className="mt-1 text-xs text-gray-600">{p.summary}</p>
            </Link>
          ))}
          {featuredMedia.map((m) => (
            <div
              key={m.id}
              className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
            >
              <p className="text-sm font-semibold text-gray-900">{m.title}</p>
              <p className="mt-1 text-xs text-gray-600">
                {m.outlet} · {new Date(m.date).getFullYear()}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-4 text-sm">
          <Link
            href="/projects"
            className="text-gray-700 underline-offset-4 hover:text-royal-primary hover:underline"
          >
            All projects →
          </Link>
          <Link
            href="/media"
            className="text-gray-700 underline-offset-4 hover:text-royal-primary hover:underline"
          >
            Media & appearances →
          </Link>
          <Link
            href="/blog"
            className="text-gray-700 underline-offset-4 hover:text-royal-primary hover:underline"
          >
            Insights & essays →
          </Link>
          <Link
            href="/timeline"
            className="text-gray-700 underline-offset-4 hover:text-royal-primary hover:underline"
          >
            Timeline →
          </Link>
        </div>
      </section>

      {/* Public archive links */}
      <section className="section-shell border-b-0">
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-600">
          Public archive
        </p>
        <h2 className="mt-3 text-xl font-semibold text-gray-900 md:text-2xl">
          Explore the platform
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Link
            href="/media/archive"
            className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md"
          >
            <p className="text-sm font-semibold text-gray-900">News & coverage</p>
            <p className="mt-1 text-xs text-gray-600">Articles and press mentions</p>
          </Link>
          <Link
            href="/media/photos"
            className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md"
          >
            <p className="text-sm font-semibold text-gray-900">Photo archive</p>
            <p className="mt-1 text-xs text-gray-600">Public images and events</p>
          </Link>
          <Link
            href="/timeline"
            className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md"
          >
            <p className="text-sm font-semibold text-gray-900">Timeline</p>
            <p className="mt-1 text-xs text-gray-600">Media and public journey</p>
          </Link>
          <Link
            href="/impact"
            className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md"
          >
            <p className="text-sm font-semibold text-gray-900">Public impact</p>
            <p className="mt-1 text-xs text-gray-600">Contributions and initiatives</p>
          </Link>
        </div>
      </section>
    </div>
  );
}

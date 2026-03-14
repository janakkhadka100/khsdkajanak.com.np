import Link from "next/link";
import { projects } from "@/data/projects";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

const categoryLabels: Record<string, string> = {
  film: "Film projects",
  media: "Media projects",
  ai: "AI & digital platforms",
  social: "Social initiatives",
  astrology: "Astrology & spiritual platforms",
  strategy: "Strategic communication",
};

const statusLabels: Record<string, string> = {
  live: "Live",
  "in-development": "In development",
  concept: "Concept",
  archive: "Archive",
};

export default function ProjectsPage() {
  return (
    <div className="page-shell space-y-16 pb-24 pt-10 md:space-y-20 md:pt-16">
      <section className="section-shell border-b border-gray-200 pb-10 pt-4">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Projects" }]} className="mb-4" />
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-600">
          Projects & ecosystem
        </p>
        <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
          An ecosystem of film, media, AI tools, and social initiatives.
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-gray-700">
          This page is a living map of the projects Janak is building, shaping,
          or incubating — from films and media formats to AI platforms and
          social initiatives. Each project is designed to connect back to public
          life in Nepal.
        </p>
      </section>

      <section className="section-shell">
        <div className="mb-5 flex flex-wrap gap-3 text-[0.7rem] uppercase tracking-[0.22em] text-gray-600">
          <span className="pill bg-gray-100 text-[0.65rem]">
            Ecosystem builder
          </span>
          <span>Film · Media · Strategy · AI · Social · Guidance</span>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => {
            const isLive = project.status === "live";
            return (
              <article
                key={project.slug}
                className={`flex flex-col justify-between rounded-xl border p-5 text-sm transition ${
                  isLive
                    ? "border-royal-accent/25 bg-white shadow-sm hover:border-royal-accent/40"
                    : "border-gray-200 bg-white shadow-sm hover:border-gray-300 hover:shadow-md"
                }`}
              >
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-600">
                      {categoryLabels[project.category]}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-zinc-600" />
                    <span className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-gray-600">
                      {statusLabels[project.status]}
                    </span>
                    {isLive && (
                      <span className="rounded bg-royal-accent/15 px-1.5 py-0.5 text-[0.6rem] font-semibold uppercase tracking-wider text-royal-accent">
                        Live
                      </span>
                    )}
                  </div>
                  <h2 className="text-base font-semibold text-gray-900">
                    {project.title}
                  </h2>
                  <p className="text-xs leading-relaxed text-gray-700">
                    {project.summary}
                  </p>
                </div>
                <div className="mt-4 space-y-3">
                  <p className="text-xs text-gray-600">{project.impact}</p>
                  {project.ctaHref && project.ctaLabel && (
                    <Link
                      href={project.ctaHref}
                      className="inline-flex items-center gap-2 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-gray-700 underline-offset-4 hover:text-royal-primary hover:underline"
                    >
                      {project.ctaLabel} →
                    </Link>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 flex flex-wrap gap-4 text-[0.7rem] font-medium uppercase tracking-[0.16em]">
          <Link
            href="/blog"
            className="text-gray-600 underline-offset-4 hover:text-royal-primary hover:underline"
          >
            Read insights →
          </Link>
          <Link
            href="/media"
            className="text-gray-600 underline-offset-4 hover:text-royal-primary hover:underline"
          >
            Media & appearances →
          </Link>
          <Link
            href="/ai-tools"
            className="text-gray-600 underline-offset-4 hover:text-royal-primary hover:underline"
          >
            AI tools hub →
          </Link>
        </div>
      </section>
    </div>
  );
}


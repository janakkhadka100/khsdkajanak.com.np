import { projects } from "@/data/projects";

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
      <section className="section-shell border-b border-white/10 pb-10 pt-4">
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-zinc-500">
          Projects & ecosystem
        </p>
        <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-zinc-50 md:text-4xl">
          An ecosystem of film, media, AI tools, and social initiatives.
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-zinc-300">
          This page is a living map of the projects Janak is building, shaping,
          or incubating — from films and media formats to AI platforms and
          social initiatives. Each project is designed to connect back to public
          life in Nepal.
        </p>
      </section>

      <section className="section-shell">
        <div className="mb-5 flex flex-wrap gap-3 text-[0.7rem] uppercase tracking-[0.22em] text-zinc-500">
          <span className="pill bg-white/5 text-[0.65rem]">
            Ecosystem builder
          </span>
          <span>Film · Media · Strategy · AI · Social · Guidance</span>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="flex flex-col justify-between rounded-2xl border border-white/12 bg-white/[0.03] p-5 text-sm text-zinc-200"
            >
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2 text-[0.7rem] uppercase tracking-[0.22em] text-zinc-500">
                  <span>{categoryLabels[project.category]}</span>
                  <span className="h-[1px] w-6 bg-zinc-700" />
                  <span>{statusLabels[project.status]}</span>
                </div>
                <h2 className="text-base font-semibold text-zinc-50">
                  {project.title}
                </h2>
                <p className="text-xs leading-relaxed text-zinc-300">
                  {project.summary}
                </p>
              </div>
              <div className="mt-4 space-y-3">
                <p className="text-xs text-zinc-400">{project.impact}</p>
                {project.ctaHref && project.ctaLabel && (
                  <a
                    href={project.ctaHref}
                    className="inline-flex items-center gap-2 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-zinc-200 underline-offset-4 hover:text-zinc-50 hover:underline"
                  >
                    {project.ctaLabel}
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}


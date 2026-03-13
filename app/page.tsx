import Link from "next/link";
import { mediaItems } from "@/data/media";
import { impactHighlights } from "@/data/highlights";
import { testimonials } from "@/data/testimonials";
import { initiatives } from "@/data/initiatives";
import { StatsRow } from "@/components/common/stats-row";
import { TestimonialCard } from "@/components/common/testimonial-card";
import { LogoStrip } from "@/components/common/logo-strip";
import { EmailCaptureBar } from "@/components/common/EmailCaptureBar";
import { HeroSection } from "@/components/home/HeroSection";
import { SectionReveal } from "@/components/motion/SectionReveal";

const brandPillars = [
  "Film & Creative Leadership",
  "AI-Powered Public Utility",
  "Strategic Ideas for Nepal",
  "Media, Writing & Public Voice",
];

const ecosystemAreas = [
  {
    title: "Film & Direction",
    description:
      "Narrative films, visual experiments, and cinematic storytelling rooted in Nepali realities.",
  },
  {
    title: "Media & Public Voice",
    description:
      "Programs, interviews, and public communication that shape discourse rather than noise.",
  },
  {
    title: "Strategy & Ideas",
    description:
      "Strategic thinking for culture, institutions, campaigns, and creative ecosystems.",
  },
  {
    title: "Social Initiatives",
    description:
      "Community-facing projects, mentorship, and public initiatives that move conversations forward.",
  },
  {
    title: "Astrology & Guidance",
    description:
      "Soft, thoughtful guidance that blends symbolism, reflection, and grounded life direction.",
  },
  {
    title: "AI & Digital Platforms",
    description:
      "Practical AI tools, public utilities, and media experiments designed for Nepali audiences.",
  },
];

const featuredProjects = [
  {
    title: "Cinematic Stories of a Changing Nepal",
    role: "Writer & Director",
    status: "In Development",
    impact: "Feature-length film exploring migration, dreams, and quiet revolutions.",
  },
  {
    title: "Public Voice Studio",
    role: "Host & Curator",
    status: "Live Concept",
    impact:
      "Editorial conversations with artists, thinkers, and working voices from across Nepal.",
  },
  {
    title: "Janak AI Public Desk",
    role: "Creator",
    status: "Beta",
    impact:
      "AI-powered Nepali utilities for captions, letters, speeches, and proposals.",
  },
];

const featuredTools = [
  {
    name: "Janak AI Chat",
    description:
      "Ask about films, ideas, public messaging, and life direction in a Janak-toned voice.",
    href: "/ai-tools",
    badge: "AI Companion",
  },
  {
    name: "Nepali Caption Studio",
    description:
      "Generate powerful Nepali captions for events, tributes, and public posts.",
    href: "/ai-tools",
    badge: "Public Utility",
  },
  {
    name: "Formal Letter & Press Desk",
    description:
      "Nepali formal letters, press notes, and program invites for real-world use.",
    href: "/ai-tools",
    badge: "For Offices & Media",
  },
];

const sampleArticles = [
  {
    title: "Cinema as Public Memory in Nepal",
    href: "/blog/cinema-as-public-memory-nepal",
    category: "Film · Society",
  },
  {
    title: "AI as a Public Utility, Not a Toy",
    href: "/blog/ai-as-public-utility-in-nepal",
    category: "AI · Strategy",
  },
  {
    title: "The Future Voice of Nepali Media",
    href: "/blog/future-voice-of-nepali-media",
    category: "Media · Ideas",
  },
];

export default function Home() {
  const notableMedia = mediaItems.slice(0, 3);
  const featuredTestimonials = testimonials.filter((t) => t.featured);

  return (
    <div className="page-shell space-y-16 pb-24 pt-10 md:space-y-20 md:pt-16">
      <HeroSection />

      {/* Trust: notable appearances & impact */}
      <SectionReveal className="section-shell">
        <div className="mb-6 space-y-4">
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-zinc-500">
            Public trust & footprint
          </p>
          <h2 className="text-xl font-semibold text-zinc-50 md:text-2xl">
            Notable appearances and early impact.
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.7fr)_minmax(0,1.3fr)]">
          <div className="space-y-4">
            <p className="text-[0.7rem] uppercase tracking-[0.22em] text-zinc-500">
              Selected appearances
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              {notableMedia.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-xs text-zinc-300"
                >
                  <p className="text-[0.65rem] uppercase tracking-[0.22em] text-zinc-500">
                    {item.outlet}
                  </p>
                  <p className="mt-2 text-sm font-medium text-zinc-50">
                    {item.title}
                  </p>
                  <p className="mt-2 line-clamp-3 text-[0.74rem] text-zinc-400">
                    {item.excerpt}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-3 flex items-center justify-between gap-4">
              <LogoStrip />
              <Link
                href="/media"
                className="hidden text-[0.7rem] font-medium uppercase tracking-[0.22em] text-zinc-300 underline-offset-4 hover:text-zinc-100 hover:underline md:inline-flex"
              >
                View media archive
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <StatsRow items={impactHighlights} />
          </div>
        </div>
      </SectionReveal>

      {/* Brand positioning strip */}
      <SectionReveal className="section-shell border-none pt-0">
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 pt-1 text-[0.7rem] uppercase tracking-[0.22em] text-zinc-400 md:justify-between md:overflow-visible">
          {brandPillars.map((pillar) => (
            <div
              key={pillar}
              className="snap-start rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-zinc-200 shadow-[0_0_30px_rgba(0,0,0,0.6)]"
            >
              {pillar}
            </div>
          ))}
        </div>
      </SectionReveal>

      {/* Signature introduction */}
      <section className="section-shell">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.8fr)_minmax(0,1.2fr)] md:items-start">
          <div className="space-y-4">
            <p className="text-[0.7rem] uppercase tracking-[0.22em] text-zinc-500">
              Signature introduction
            </p>
            <p className="text-balance text-lg leading-relaxed text-zinc-100 md:text-xl">
              Janak Khadka is a filmmaker, strategist, writer, astrologer, and
              media personality building{" "}
              <span className="text-[#f5b048]">
                a new kind of public platform for Nepal
              </span>{" "}
              — where cinema, ideas, and AI-driven public tools live in one
              ecosystem.
            </p>
            <p className="max-w-2xl text-sm leading-relaxed text-zinc-300">
              This is not a portfolio. It is a living headquarters for films,
              public thinking, media experiments, and AI utilities that ordinary
              Nepali people can actually use — from captions and speeches to
              formal letters and soft guidance.
            </p>
          </div>

          <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-5 text-xs text-zinc-300">
            <p className="text-[0.7rem] uppercase tracking-[0.22em] text-zinc-500">
              Positioning
            </p>
            <p>
              Filmmaker, Strategist, Writer, Public Thinker, Media Personality,
              and builder of creative & AI-driven public platforms in Nepal.
            </p>
            <p className="text-[0.7rem] text-zinc-500">
              Tone: premium, intelligent, Nepali-rooted yet globally ambitious,
              serious about impact and public trust.
            </p>
          </div>
        </div>
      </section>

      {/* Ecosystem showcase */}
      <section className="section-shell">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.22em] text-zinc-500">
              Ecosystem
            </p>
            <h2 className="mt-2 text-xl font-semibold text-zinc-50 md:text-2xl">
              One public personality, many connected domains
            </h2>
          </div>
          <Link
            href="/projects"
            className="text-xs font-medium text-zinc-300 underline-offset-4 hover:text-zinc-100 hover:underline"
          >
            View all projects
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {ecosystemAreas.map((area) => (
            <div
              key={area.title}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-[#f5b048]/50 hover:bg-white/[0.06]"
            >
              <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
                {area.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-200">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured projects */}
      <section className="section-shell">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.22em] text-zinc-500">
              Featured projects
            </p>
            <h2 className="mt-2 text-xl font-semibold text-zinc-50 md:text-2xl">
              Film, media, and AI initiatives
            </h2>
          </div>
          <Link
            href="/projects"
            className="text-xs font-medium text-zinc-300 underline-offset-4 hover:text-zinc-100 hover:underline"
          >
            Explore ecosystem map
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {featuredProjects.map((project) => (
            <div
              key={project.title}
              className="flex flex-col justify-between rounded-2xl border border-white/12 bg-white/[0.04] p-4 text-sm text-zinc-200"
            >
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
                  {project.status}
                </p>
                <h3 className="text-sm font-semibold text-zinc-50">
                  {project.title}
                </h3>
                <p className="text-xs text-zinc-400">{project.role}</p>
                <p className="text-xs leading-relaxed text-zinc-300">
                  {project.impact}
                </p>
              </div>
              <button className="mt-4 inline-flex w-max items-center gap-1 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-zinc-300">
                View more soon
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* AI / public utility teaser */}
      <section className="section-shell">
        <div className="card-elevated relative overflow-hidden p-6 md:p-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(46,196,166,0.16),transparent_55%)]" />
          <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl space-y-3">
              <p className="text-[0.7rem] uppercase tracking-[0.22em] text-zinc-400">
                AI tools for the Nepali public
              </p>
              <h2 className="text-lg font-semibold text-zinc-50 md:text-xl">
                Practical AI, not hype — built for how Nepal actually writes,
                speaks, and works.
              </h2>
              <p className="text-sm leading-relaxed text-zinc-200">
                From Nepali captions and formal letters to speeches, press
                notes, and project ideas — this platform hosts tools that save
                real time for students, organizers, artists, offices, and media
                teams.
              </p>
              <Link
                href="/ai-tools"
                className="inline-flex items-center justify-center rounded-full border border-emerald-300/40 bg-emerald-400/15 px-5 py-2 text-xs font-medium uppercase tracking-[0.22em] text-emerald-100"
              >
                Enter AI tools hub
              </Link>
              <p className="text-[0.7rem] text-zinc-400">
                All tools are AI-assisted and include clear disclaimers. They do
                not replace professional, legal, or medical advice.
              </p>
            </div>

            <div className="grid gap-3 text-xs text-zinc-100 md:w-80">
              {featuredTools.map((tool) => (
                <Link
                  key={tool.name}
                  href={tool.href}
                  className="group rounded-2xl border border-white/15 bg-black/20 p-4 transition hover:border-[#f5b048]/70 hover:bg-black/40"
                >
                  <p className="mb-1 text-[0.65rem] uppercase tracking-[0.22em] text-zinc-400">
                    {tool.badge}
                  </p>
                  <p className="text-sm font-semibold text-zinc-50">
                    {tool.name}
                  </p>
                  <p className="mt-1 text-xs text-zinc-300">
                    {tool.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest articles / insights */}
      <section className="section-shell">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.22em] text-zinc-500">
              Latest insights
            </p>
            <h2 className="mt-2 text-xl font-semibold text-zinc-50 md:text-2xl">
              Film, society, strategy, and AI
            </h2>
          </div>
          <Link
            href="/blog"
            className="text-xs font-medium text-zinc-300 underline-offset-4 hover:text-zinc-100 hover:underline"
          >
            View all articles
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {sampleArticles.map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-zinc-200 transition hover:border-[#f5b048]/50 hover:bg-white/[0.06]"
            >
              <p className="text-[0.7rem] uppercase tracking-[0.22em] text-zinc-500">
                {article.category}
              </p>
              <p className="mt-3 text-sm font-semibold text-zinc-50 group-hover:text-zinc-50">
                {article.title}
              </p>
              <p className="mt-3 text-[0.7rem] text-zinc-400">
                Long-form notes on film, society, and the future of Nepali
                public life.
              </p>
            </Link>
          ))}
        </div>
        <div className="mt-8 max-w-xl">
          <EmailCaptureBar
            variant="block"
            title="Stay in the loop"
            subtitle="Insights, updates, and platform news. No spam."
          />
        </div>
      </section>

      {/* Selected initiatives & testimonials */}
      <section className="section-shell">
        <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.22em] text-zinc-500">
              Initiatives & voices
            </p>
            <h2 className="mt-2 text-xl font-semibold text-zinc-50 md:text-2xl">
              Selected public initiatives and what people say.
            </h2>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.7fr)_minmax(0,1.3fr)]">
          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              {initiatives.map((initiative) => (
                <div
                  key={initiative.id}
                  className="rounded-2xl border border-white/12 bg-white/[0.03] p-4 text-sm text-zinc-200"
                >
                  <p className="text-[0.7rem] uppercase tracking-[0.22em] text-zinc-500">
                    {initiative.status === "ongoing"
                      ? "Ongoing"
                      : initiative.status === "completed"
                        ? "Completed"
                        : "Upcoming"}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-zinc-50">
                    {initiative.title}
                  </p>
                  <p className="mt-2 text-xs text-zinc-300">
                    {initiative.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            {featuredTestimonials.map((t) => (
              <TestimonialCard key={t.id} item={t} />
            ))}
          </div>
        </div>
      </section>

      {/* Media credibility */}
      <section className="section-shell">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1.4fr)] md:items-center">
          <div className="space-y-4">
            <p className="text-[0.7rem] uppercase tracking-[0.22em] text-zinc-500">
              Media & public presence
            </p>
            <h2 className="text-xl font-semibold text-zinc-50 md:text-2xl">
              Built for cameras, stages, and conversations.
            </h2>
            <p className="text-sm leading-relaxed text-zinc-300">
              Interviews, festival appearances, speeches, public programs, and
              media features will live in one editorial archive — giving
              journalists, collaborators, and audiences a clear record of work.
            </p>
            <Link
              href="/media"
              className="text-xs font-medium text-zinc-300 underline-offset-4 hover:text-zinc-100 hover:underline"
            >
              View media & press layout
            </Link>
          </div>

          <div className="grid gap-4 text-xs text-zinc-300 md:grid-cols-2">
            <div className="rounded-2xl border border-white/12 bg-white/[0.04] p-4">
              <p className="text-[0.7rem] uppercase tracking-[0.22em] text-zinc-500">
                Appearances
              </p>
              <p className="mt-2 text-sm text-zinc-100">
                Interviews, festival panels, television, and live public
                programs.
              </p>
            </div>
            <div className="rounded-2xl border border-white/12 bg-white/[0.04] p-4">
              <p className="text-[0.7rem] uppercase tracking-[0.22em] text-zinc-500">
                Press & features
              </p>
              <p className="mt-2 text-sm text-zinc-100">
                Press notes, feature stories, and curated coverage for quick
                reference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why this platform matters + collaboration CTA */}
      <section className="section-shell border-b-0">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.7fr)_minmax(0,1.3fr)] md:items-center">
          <div className="space-y-4">
            <p className="text-[0.7rem] uppercase tracking-[0.22em] text-zinc-500">
              Why this platform matters
            </p>
            <h2 className="text-xl font-semibold text-zinc-50 md:text-2xl">
              More than a personal site — a growing public ecosystem.
            </h2>
            <p className="text-sm leading-relaxed text-zinc-200">
              This platform exists to connect film, writing, strategy, social
              work, astrology, and AI into one cohesive public offering. It is
              designed to be useful to ordinary people today, and investable as
              a media + AI + advisory engine tomorrow.
            </p>
            <p className="text-sm leading-relaxed text-zinc-300">
              Over time, this ecosystem will host premium AI tools, astrology
              consultations, strategic advisory, and collaborations with brands,
              institutions, and public initiatives that care about depth, not
              noise.
            </p>
          </div>

          <div className="card-elevated relative overflow-hidden p-6 md:p-7">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(245,176,72,0.2),transparent_55%)]" />
            <div className="relative space-y-4 text-sm text-zinc-50">
              <p className="text-[0.7rem] uppercase tracking-[0.22em] text-zinc-200">
                Collaboration & investment
              </p>
              <p>
                For media houses, brands, institutions, investors, and public
                initiatives looking to build something serious in Nepal.
              </p>
              <ul className="list-disc space-y-1 pl-5 text-xs text-zinc-200">
                <li>Film and media collaborations</li>
                <li>Strategic storytelling & campaign design</li>
                <li>AI-powered public tools and platforms</li>
                <li>Advisory, speaking, and partnerships</li>
              </ul>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-zinc-50 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-black"
                >
                  Open collaboration channel
                </Link>
                <Link
                  href="/membership"
                  className="inline-flex items-center justify-center rounded-full border border-white/18 bg-black/40 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-100"
                >
                  Explore membership & advisory
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


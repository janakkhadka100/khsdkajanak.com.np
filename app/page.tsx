import type { Metadata } from "next";
import Link from "next/link";
import { mediaItems } from "@/data/media";
import { getFeaturedNews } from "@/data/news";
import { getFeaturedPhotos } from "@/data/photos";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};
import { HeroSection } from "@/components/home/HeroSection";
import { NewsCard } from "@/components/news/NewsCard";
import { SectionReveal } from "@/components/motion/SectionReveal";
import { EmailCaptureBar } from "@/components/common/EmailCaptureBar";

const frameworkPillars = [
  {
    title: "Cinematic Narrative",
    description:
      "Films and visual work that document Nepali lives, inner worlds, and social shifts.",
    href: "/projects",
    cta: "Read more",
  },
  {
    title: "Civic Discourse",
    description:
      "Formats, programs, and strategies that treat public conversation as civic infrastructure.",
    href: "/media",
    cta: "Read more",
  },
  {
    title: "Digital Systems",
    description:
      "AI tools and platforms that quietly structure how people write, speak, and organize.",
    href: "/ai-tools",
    cta: "Read more",
  },
];

const institutionalPrograms = [
  {
    title: "Youth Story & Film Labs",
    context: "Education & youth partners",
    role: "Program design & narrative architecture",
    impact:
      "Prototype labs where young people turn lived experience into short film ideas and public conversations.",
  },
  {
    title: "Public Voice Studio",
    context: "Media & civic discourse",
    role: "Host & curator",
    impact:
      "Editorial conversations with working voices across Nepal, treating talk shows as civic infrastructure.",
  },
  {
    title: "Janak AI Public Desk",
    context: "Digital public tools",
    role: "Creator & steward",
    impact:
      "Live experiment offering Nepali caption, letter, speech, and proposal tools as everyday civic utilities.",
  },
];

const publicTools = [
  {
    name: "Formal Letter Desk",
    description:
      "Drafts clear letters for offices, institutions, and civic requests in natural Nepali.",
    href: "/tools/nivedan-letter-architect",
  },
  {
    name: "Speech & Program Script Desk",
    description:
      "Generates stage-ready scripts for programs, youth events, and public addresses.",
    href: "/tools/speech-program-desk",
  },
  {
    name: "Press Desk",
    description:
      "Structures headlines and press notes for organizations, campaigns, and cultural programs.",
    href: "/tools/press-note-generator",
  },
  {
    name: "Biography Desk",
    description:
      "Creates public-facing bios for artists, organizers, and public figures in Nepali.",
    href: "/tools/bio-writer",
  },
  {
    name: "Tribute Desk",
    description:
      "Helps write dignified tributes, congratulations, and condolences for public and community contexts.",
    href: "/tools/tribute-writer",
  },
];

const sampleArticles = [
  {
    title: "Cinema as Public Memory in Nepal",
    href: "/blog/cinema-as-public-memory-nepal",
    category: "Essay · Film & Society",
    blurb: "On cinema as an archive for migration, memory, and quiet revolutions.",
  },
  {
    title: "AI as a Public Utility, Not a Toy",
    href: "/blog/ai-as-public-utility-in-nepal",
    category: "Essay · AI & Strategy",
    blurb: "Arguing for AI as civic infrastructure rather than novelty.",
  },
  {
    title: "The Future Voice of Nepali Media",
    href: "/blog/future-voice-of-nepali-media",
    category: "Essay · Media & Ideas",
    blurb: "Thinking about how media formats can serve public discourse instead of noise.",
  },
];

export default function Home() {
  const curatedMedia = mediaItems.slice(0, 2);

  const selectedWorks = [
    {
      title: sampleArticles[0].title,
      href: sampleArticles[0].href,
      kind: "Essay",
      meta: sampleArticles[0].category,
      description: sampleArticles[0].blurb,
    },
    {
      title: sampleArticles[1].title,
      href: sampleArticles[1].href,
      kind: "Essay",
      meta: sampleArticles[1].category,
      description: sampleArticles[1].blurb,
    },
    {
      title: "Cinematic Stories of a Changing Nepal",
      href: "/projects",
      kind: "Film / Project",
      meta: "Feature project",
      description:
        "A feature-length film project exploring migration, dreams, and the subtle shifts in Nepali life.",
    },
    curatedMedia[0] && {
      title: curatedMedia[0].title,
      href: curatedMedia[0].link ?? "/media",
      kind: "Conversation",
      meta: `Media · ${curatedMedia[0].outlet}`,
      description: curatedMedia[0].excerpt,
    },
    curatedMedia[1] && {
      title: curatedMedia[1].title,
      href: curatedMedia[1].link ?? "/media",
      kind: "Conversation",
      meta: `Media · ${curatedMedia[1].outlet}`,
      description: curatedMedia[1].excerpt,
    },
  ].filter(Boolean) as {
    title: string;
    href: string;
    kind: string;
    meta: string;
    description: string;
  }[];

  return (
    <div className="page-shell space-y-16 pb-24 pt-10 md:space-y-20 md:pt-16">
      {/* 1. Cinematic hero */}
      <HeroSection />

      {/* 2. Core thesis */}
      <SectionReveal className="section-shell pt-16">
        <div className="space-y-4 max-w-3xl">
          <p className="section-label">
            Thesis
          </p>
          <h2 className="section-title text-xl md:text-2xl">
            A platform for culture, media, and digital futures.
          </h2>
          <p className="manifesto-text text-sm leading-relaxed">
            Nepal’s stories, institutions, and digital systems are deeply entangled. This
            platform treats cinema, civic media, strategic advisory, and AI-driven tools as
            one ecosystem—so culture, organizations, and citizens can think more clearly
            about how narratives, policy, and algorithms shape everyday civic life.
          </p>
          <p className="text-[0.7rem] text-gray-700 max-w-md">
            This is not a portfolio. It is the public work of Janak Khadka across film,
            institutions, and digital public tools.
          </p>
        </div>
      </SectionReveal>

      {/* 3. Three pillars – core framework */}
      <SectionReveal className="section-shell" delay={0.05}>
        <div className="mb-8 space-y-4">
          <p className="section-label">
            Framework
          </p>
          <h2 className="section-title text-xl md:text-2xl">
            Three pillars of the ecosystem.
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-gray-700">
            The work is organized around cinema, civic discourse, and digital systems.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {frameworkPillars.map((pillar, i) => (
            <Link
              key={pillar.title}
              href={pillar.href}
              className="group flex flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md hover:border-royal-primary/30"
            >
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gray-600">
                Pillar {i + 1}
              </span>
              <h3 className="mt-2 text-base font-semibold text-gray-900">
                {pillar.title}
              </h3>
              <p className="mt-2 flex-grow text-sm leading-relaxed text-gray-700">
                {pillar.description}
              </p>
              <span className="mt-4 inline-flex text-[0.7rem] font-medium uppercase tracking-[0.18em] text-royal-primary group-hover:underline">
                {pillar.cta} →
              </span>
            </Link>
          ))}
        </div>
      </SectionReveal>

      {/* 4. Institutional authority */}
      <SectionReveal className="section-shell" delay={0.05}>
        <div className="mb-6 space-y-4">
          <p className="section-label">
            Institutional Work
          </p>
          <h2 className="section-title text-xl md:text-2xl">
            Selected national-level programs and ecosystems.
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-gray-700">
            Initiatives and institutional collaborations shaping Nepal’s cultural and media
            landscape.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3 text-sm text-gray-700">
          {institutionalPrograms.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
            >
              <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-600">
                {item.context}
              </p>
              <p className="mt-2 text-sm font-semibold text-gray-900">{item.title}</p>
              <p className="mt-1 text-[0.7rem] text-gray-600">Role: {item.role}</p>
              <p className="mt-2 text-xs leading-relaxed text-gray-700">
                {item.impact}
              </p>
            </div>
          ))}
        </div>
      </SectionReveal>

      {/* 5. Public tools – consolidated */}
      <SectionReveal className="section-shell" delay={0.05}>
        <div className="mb-8 space-y-4">
          <p className="section-label">
            Janak AI Public Desk
          </p>
          <h2 className="section-title text-xl md:text-2xl">
            Nepali AI tools for everyday public life.
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-gray-700">
            Civic writing desks for letters, speeches, press notes, and public messaging—built
            as practical drafting assistants, not replacements for judgment.
          </p>
          <Link
            href="/public-desk"
            className="inline-flex items-center gap-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-gray-800 underline-offset-4 hover:text-royal-primary hover:underline"
          >
            View all desks
            <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {publicTools.slice(0, 6).map((tool) => (
            <Link
              key={tool.name}
              href={tool.href}
              className="group flex flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md hover:border-royal-primary/30"
            >
              <p className="text-sm font-semibold text-gray-900">
                {tool.name}
              </p>
              <p className="mt-2 flex-grow text-xs leading-relaxed text-gray-700">
                {tool.description}
              </p>
              <span className="mt-4 inline-flex min-h-[44px] min-w-[120px] items-center justify-center rounded-lg bg-royal-primary px-4 py-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white shadow-sm transition group-hover:bg-royal-primary-hover">
                Start →
              </span>
            </Link>
          ))}
        </div>
      </SectionReveal>

      {/* 6. Public platform preview */}
      <SectionReveal className="section-shell" delay={0.05}>
        <div className="mb-8 space-y-4">
          <p className="section-label">
            Public platform
          </p>
          <h2 className="section-title text-xl md:text-2xl">
            Profile, archive, and impact.
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-gray-700">
            Structured biography, news coverage, photo archive, timeline, and public impact — the full public record.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Link
            href="/profile"
            className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md hover:border-royal-primary/30"
          >
            <p className="text-[0.7rem] uppercase tracking-[0.18em] text-gray-600">About</p>
            <p className="mt-2 text-sm font-semibold text-gray-900">Public profile</p>
            <p className="mt-2 text-xs leading-relaxed text-gray-700">
              Biography, roles, and affiliations.
            </p>
            <span className="mt-3 inline-flex text-[0.7rem] font-medium uppercase tracking-[0.14em] text-royal-primary">
              View profile →
            </span>
          </Link>
          <Link
            href="/media/archive"
            className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md hover:border-royal-primary/30"
          >
            <p className="text-[0.7rem] uppercase tracking-[0.18em] text-gray-600">Coverage</p>
            <p className="mt-2 text-sm font-semibold text-gray-900">News archive</p>
            <p className="mt-2 text-xs leading-relaxed text-gray-700">
              Articles, interviews, and press.
            </p>
            <span className="mt-3 inline-flex text-[0.7rem] font-medium uppercase tracking-[0.14em] text-royal-primary">
              Browse archive →
            </span>
          </Link>
          <Link
            href="/media/photos"
            className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md hover:border-royal-primary/30"
          >
            <p className="text-[0.7rem] uppercase tracking-[0.18em] text-gray-600">Visual</p>
            <p className="mt-2 text-sm font-semibold text-gray-900">Photo archive</p>
            <p className="mt-2 text-xs leading-relaxed text-gray-700">
              Public images and galleries.
            </p>
            <span className="mt-3 inline-flex text-[0.7rem] font-medium uppercase tracking-[0.14em] text-royal-primary">
              View gallery →
            </span>
          </Link>
          <Link
            href="/impact"
            className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md hover:border-royal-primary/30"
          >
            <p className="text-[0.7rem] uppercase tracking-[0.18em] text-gray-600">Impact</p>
            <p className="mt-2 text-sm font-semibold text-gray-900">Public impact</p>
            <p className="mt-2 text-xs leading-relaxed text-gray-700">
              Institutional and civic contributions.
            </p>
            <span className="mt-3 inline-flex text-[0.7rem] font-medium uppercase tracking-[0.14em] text-royal-primary">
              Explore impact →
            </span>
          </Link>
        </div>
        <div className="mt-6 flex flex-wrap gap-4 text-[0.7rem] font-medium uppercase tracking-[0.16em]">
          <Link href="/timeline" className="text-gray-700 underline-offset-4 hover:text-royal-primary hover:underline">
            Timeline →
          </Link>
        </div>
      </SectionReveal>

      {/* Latest News + Photo Highlights */}
      <SectionReveal className="section-shell" delay={0.05}>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="section-label">Latest News</p>
            <h2 className="section-title mt-2 text-xl md:text-2xl">
              Coverage and press
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {getFeaturedNews().slice(0, 4).map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
            <Link
              href="/media/archive"
              className="mt-4 inline-flex text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-royal-primary underline-offset-4 hover:underline"
            >
              Browse news archive →
            </Link>
          </div>
          <div>
            <p className="section-label">Photo Highlights</p>
            <h2 className="section-title mt-2 text-xl md:text-2xl">
              Public events and programs
            </h2>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {getFeaturedPhotos().slice(0, 6).map((photo) => (
                <Link
                  key={photo.id}
                  href="/media/photos"
                  className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-gray-200 bg-gray-100 shadow-sm transition hover:shadow-md"
                >
                  <img
                    src={photo.imageUrl}
                    alt={photo.alt}
                    className="h-full w-full object-cover transition group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                    <p className="truncate text-[0.65rem] font-medium text-white">{photo.caption ?? photo.event}</p>
                  </div>
                </Link>
              ))}
            </div>
            <Link
              href="/media/photos"
              className="mt-4 inline-flex text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-royal-primary underline-offset-4 hover:underline"
            >
              View photo gallery →
            </Link>
          </div>
        </div>
      </SectionReveal>

      {/* Partnership / Institutional roles */}
      <SectionReveal className="section-shell" delay={0.05}>
        <p className="section-label">Institutional presence</p>
        <h2 className="section-title mt-2 text-xl md:text-2xl">
          Programs and collaborations
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-700">
          Film, media, civic, and digital initiatives across Nepal — institutional partnerships and public programs.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {[
            "Youth Story & Film Labs",
            "Public Voice Studio",
            "Janak AI Public Desk",
            "Cinematic Stories of a Changing Nepal",
            "Social Initiative Lab",
          ].map((name) => (
            <span
              key={name}
              className="rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-gray-800 shadow-sm"
            >
              {name}
            </span>
          ))}
        </div>
        <Link
          href="/impact"
          className="mt-6 inline-flex text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-royal-primary underline-offset-4 hover:underline"
        >
          Explore public impact →
        </Link>
      </SectionReveal>

      {/* 7. Archive */}
      <SectionReveal className="section-shell border-b-0" delay={0.05}>
        <div className="mb-8 space-y-4">
          <p className="section-label">
            The Archive
          </p>
          <h2 className="section-title text-xl md:text-2xl">
            Essays, films, and public conversations.
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-gray-700">
            A curated public record exploring culture, institutions, and digital life in Nepal.
          </p>
          <div className="flex flex-wrap gap-4 text-[0.7rem] font-medium uppercase tracking-[0.16em]">
            <Link
              href="/blog"
              className="text-gray-700 underline-offset-4 hover:text-royal-primary hover:underline"
            >
              All insights →
            </Link>
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
              href="/media/archive"
              className="text-gray-700 underline-offset-4 hover:text-royal-primary hover:underline"
            >
              News archive →
            </Link>
            <Link
              href="/profile"
              className="text-gray-700 underline-offset-4 hover:text-royal-primary hover:underline"
            >
              Public profile →
            </Link>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {selectedWorks.map((work) => (
            <Link
              key={work.title}
              href={work.href}
              className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md hover:border-royal-accent/40"
            >
              <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-600">
                {work.kind} · {work.meta}
              </p>
              <p className="mt-2 text-sm font-semibold text-gray-900">
                {work.title}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-gray-700">
                {work.description}
              </p>
            </Link>
          ))}
        </div>

        <div id="subscribe" className="mt-12 max-w-xl scroll-mt-20">
          <EmailCaptureBar
            variant="block"
            title="Follow the archive"
            subtitle="Occasional essays, project notes, and platform updates. No spam."
          />
        </div>
      </SectionReveal>
    </div>
  );
}


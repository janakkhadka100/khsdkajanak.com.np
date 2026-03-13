import Link from "next/link";
import { mediaItems } from "@/data/media";
import { HeroSection } from "@/components/home/HeroSection";
import { SectionReveal } from "@/components/motion/SectionReveal";
import { EmailCaptureBar } from "@/components/common/EmailCaptureBar";

const frameworkPillars = [
  {
    title: "Cinematic Narrative",
    description:
      "Films and visual work that document Nepali lives, inner worlds, and social shifts.",
  },
  {
    title: "Civic Discourse",
    description:
      "Formats, programs, and strategies that treat public conversation as civic infrastructure.",
  },
  {
    title: "Digital Systems",
    description:
      "AI tools and platforms that quietly structure how people write, speak, and organize.",
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
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-zinc-500">
            Thesis
          </p>
          <h2 className="text-xl font-semibold text-zinc-50 md:text-2xl">
            A platform for culture, media, and digital futures.
          </h2>
          <p className="manifesto-text text-sm leading-relaxed text-zinc-300">
            Nepal’s stories, institutions, and digital systems are deeply entangled. This
            platform treats cinema, civic media, strategic advisory, and AI-driven tools as
            one ecosystem—so culture, organizations, and citizens can think more clearly
            about how narratives, policy, and algorithms shape everyday civic life.
          </p>
          <p className="text-[0.7rem] text-zinc-500 max-w-md">
            This is not a portfolio. It is the public work of Janak Khadka across film,
            institutions, and digital public tools.
          </p>
        </div>
      </SectionReveal>

      {/* 3. Institutional authority */}
      <SectionReveal className="section-shell pt-16">
        <div className="mb-6 space-y-4">
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-zinc-500">
            Institutional Work
          </p>
          <h2 className="text-xl font-semibold text-zinc-50 md:text-2xl">
            Selected national-level programs and ecosystems.
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-zinc-300">
            Selected initiatives, national programs, and institutional collaborations shaping
            Nepal’s cultural and media landscape.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3 text-sm text-zinc-200">
          {institutionalPrograms.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/12 bg-white/[0.03] p-4"
            >
              <p className="text-[0.7rem] uppercase tracking-[0.22em] text-zinc-500">
                {item.context}
              </p>
              <p className="mt-2 text-sm font-semibold text-zinc-50">{item.title}</p>
              <p className="mt-1 text-[0.7rem] text-zinc-400">Role: {item.role}</p>
              <p className="mt-2 text-xs leading-relaxed text-zinc-300">
                {item.impact}
              </p>
            </div>
          ))}
        </div>
      </SectionReveal>

      {/* 4. Framework */}
      <SectionReveal className="section-shell">
        <div className="mb-6 space-y-3">
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-zinc-500">
            Framework
          </p>
          <h2 className="text-xl font-semibold text-zinc-50 md:text-2xl">
            Three pillars of the ecosystem.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3 text-sm text-zinc-300">
          {frameworkPillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
            >
              <h3 className="text-sm font-semibold text-zinc-50">
                {pillar.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-zinc-300">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </SectionReveal>

      {/* 5. Most used desks */}
      <SectionReveal className="section-shell">
        <div className="mb-6 space-y-3">
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-zinc-500">
            Janak AI Public Desk
          </p>
          <h2 className="text-xl font-semibold text-zinc-50 md:text-2xl">
            Most used desks today.
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-zinc-300">
            Civic writing desks that Nepali users return to most often for letters, programs,
            and announcements.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3 text-sm text-zinc-200">
          {publicTools.slice(0, 3).map((tool) => (
            <div
              key={tool.name}
              className="rounded-2xl border border-white/12 bg-white/[0.03] p-4"
            >
              <p className="text-sm font-semibold text-zinc-50">{tool.name}</p>
              <p className="mt-2 text-xs leading-relaxed text-zinc-300">
                {tool.description}
              </p>
              <Link
                href={tool.href}
                className="mt-3 inline-flex text-[0.7rem] font-medium uppercase tracking-[0.18em] text-zinc-300 underline-offset-4 hover:text-zinc-100 hover:underline"
              >
                Open desk
              </Link>
            </div>
          ))}
        </div>
      </SectionReveal>

      {/* 6. Public tools */}
      <SectionReveal className="section-shell">
        <div className="mb-6 space-y-3">
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-zinc-500">
            Public Tools · Desks
          </p>
          <h2 className="text-xl font-semibold text-zinc-50 md:text-2xl">
            Nepali AI tools and desks for everyday public life.
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-zinc-300">
            Practical, language-aware tools built for letters, speeches, media notes, and
            public messaging in Nepal—treated as civic infrastructure rather than novelty.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3 text-sm text-zinc-200">
          {publicTools.map((tool) => (
            <div
              key={tool.name}
              className="rounded-2xl border border-white/12 bg-white/[0.03] p-4"
            >
              <p className="text-sm font-semibold text-zinc-50">{tool.name}</p>
              <p className="mt-2 text-xs leading-relaxed text-zinc-300">
                {tool.description}
              </p>
              <Link
                href={tool.href}
                className="mt-3 inline-flex text-[0.7rem] font-medium uppercase tracking-[0.18em] text-zinc-300 underline-offset-4 hover:text-zinc-100 hover:underline"
              >
                Open tool
              </Link>
            </div>
          ))}
        </div>
      </SectionReveal>

      {/* 6. Archive */}
      <SectionReveal className="section-shell border-b-0">
        <div className="mb-6 space-y-3">
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-zinc-500">
            The Archive
          </p>
          <h2 className="text-xl font-semibold text-zinc-50 md:text-2xl">
            Essays, films, and public conversations.
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-zinc-300">
            A curated public record of essays, films, and conversations exploring culture,
            institutions, and digital life in Nepal.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3 text-sm text-zinc-200">
          {selectedWorks.map((work) => (
            <Link
              key={work.title}
              href={work.href}
              className="group rounded-2xl border border-white/12 bg-white/[0.03] p-4 transition hover:border-[#f5b048]/50 hover:bg-white/[0.06]"
            >
              <p className="text-[0.7rem] uppercase tracking-[0.22em] text-zinc-500">
                {work.kind} · {work.meta}
              </p>
              <p className="mt-2 text-sm font-semibold text-zinc-50 group-hover:text-zinc-50">
                {work.title}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-zinc-300">
                {work.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-10 max-w-xl">
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


import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-background/80 pb-6 pt-8 text-xs text-zinc-500 backdrop-blur-xl">
      <div className="page-shell flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="space-y-1">
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-zinc-400">
            Janak Khadka Ecosystem
          </p>
          <p className="max-w-md text-xs text-zinc-500">
            A cinematic, AI-powered public platform for film, strategy, media,
            and creative initiatives rooted in Nepal.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 md:gap-6">
          <div className="flex flex-col gap-1">
            <p className="text-[0.7rem] uppercase tracking-[0.18em] text-zinc-400">
              Platform
            </p>
            <Link href="/projects" className="hover:text-zinc-300">
              Projects & Ecosystem
            </Link>
            <Link href="/media" className="hover:text-zinc-300">
              Media & Appearances
            </Link>
            <Link href="/blog" className="hover:text-zinc-300">
              Insights & Articles
            </Link>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-[0.7rem] uppercase tracking-[0.18em] text-zinc-400">
              Public Tools
            </p>
            <Link href="/ai-tools" className="hover:text-zinc-300">
              AI Tools Hub
            </Link>
            <Link href="/astrology" className="hover:text-zinc-300">
              Astrology & Guidance
            </Link>
            <Link href="/membership" className="hover:text-zinc-300">
              Membership
            </Link>
            <Link href="/contact" className="hover:text-zinc-300">
              Collaborations & Advisory
            </Link>
          </div>
        </div>

        <p className="text-[0.7rem] text-zinc-600">
          © {new Date().getFullYear()} Janak Khadka. All rights reserved.
        </p>
      </div>
    </footer>
  );
}


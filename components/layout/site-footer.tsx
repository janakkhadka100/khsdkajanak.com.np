import Link from "next/link";

export function SiteFooter() {
  return (
    <footer
      className="border-t border-gray-200 bg-gray-50 pb-8 pt-10 text-sm"
      style={{ paddingBottom: "max(2rem, env(safe-area-inset-bottom, 0px))" }}
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="page-shell">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="max-w-md space-y-4">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-gray-800">
              Janak Khadka Ecosystem
            </p>
            <p className="text-sm leading-relaxed text-gray-700">
              A cinematic, AI-powered public platform for film, strategy, media,
              and creative initiatives rooted in Nepal.
            </p>
            <Link
              href="/#subscribe"
              className="inline-flex min-h-[44px] items-center rounded-lg bg-royal-primary px-4 py-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white shadow-sm transition hover:bg-royal-primary-hover"
            >
              Subscribe to updates
            </Link>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-wrap gap-10 md:gap-16">
            <div className="flex flex-col gap-3">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-gray-800">
                Platform
              </p>
              <Link href="/" className="min-h-[44px] min-w-[44px] text-gray-700 transition-colors hover:text-royal-primary">
                Ecosystem
              </Link>
              <Link href="/about" className="min-h-[44px] min-w-[44px] text-gray-700 transition-colors hover:text-royal-primary">
                About
              </Link>
              <Link href="/projects" className="min-h-[44px] min-w-[44px] text-gray-700 transition-colors hover:text-royal-primary">
                Projects
              </Link>
              <Link href="/media" className="min-h-[44px] min-w-[44px] text-gray-700 transition-colors hover:text-royal-primary">
                Media & Appearances
              </Link>
              <Link href="/blog" className="min-h-[44px] min-w-[44px] text-gray-700 transition-colors hover:text-royal-primary">
                Insights
              </Link>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-gray-800">
                Tools
              </p>
              <Link href="/public-desk" className="min-h-[44px] min-w-[44px] text-gray-700 transition-colors hover:text-royal-primary">
                Public Desk
              </Link>
              <Link href="/ai-tools" className="min-h-[44px] min-w-[44px] text-gray-700 transition-colors hover:text-royal-primary">
                AI Tools Hub
              </Link>
              <Link href="/astrology" className="min-h-[44px] min-w-[44px] text-gray-700 transition-colors hover:text-royal-primary">
                Guidance
              </Link>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-gray-800">
                Engage
              </p>
              <Link href="/membership" className="min-h-[44px] min-w-[44px] text-gray-700 transition-colors hover:text-royal-primary">
                Membership
              </Link>
              <Link href="/contact" className="min-h-[44px] min-w-[44px] text-gray-700 transition-colors hover:text-royal-primary">
                Collaborate
              </Link>
              <Link href="/profile" className="min-h-[44px] min-w-[44px] text-gray-700 transition-colors hover:text-royal-primary">
                Profile
              </Link>
            </div>
          </nav>
        </div>

        <div className="mt-10 border-t border-gray-200 pt-6">
          <p className="text-[0.7rem] text-gray-700">
            © {new Date().getFullYear()} Janak Khadka. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}


"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Ecosystem" },
  { href: "/about", label: "About" },
  { href: "/vision", label: "Vision & Ideas" },
  { href: "/projects", label: "Projects" },
  { href: "/media", label: "Media" },
  { href: "/blog", label: "Insights" },
  { href: "/ai-tools", label: "AI Tools" },
  { href: "/astrology", label: "Guidance" },
  { href: "/membership", label: "Membership" },
  { href: "/contact", label: "Collaborate" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-background/80 backdrop-blur-xl">
      <div className="page-shell flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full border border-white/30 bg-gradient-to-br from-[#f5b048] to-transparent shadow-[0_0_40px_rgba(245,176,72,0.55)]" />
          <div className="flex flex-col leading-tight">
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Janak Khadka
            </span>
            <span className="text-[0.72rem] text-zinc-400">
              Film · Strategy · Media · AI
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-xs font-medium uppercase tracking-[0.18em] text-zinc-400 md:flex">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative transition-colors hover:text-foreground ${
                  isActive ? "text-foreground" : ""
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute inset-x-0 -bottom-2 h-px bg-gradient-to-r from-transparent via-[#f5b048] to-transparent" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/ai-tools"
            className="hidden rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-zinc-100 shadow-[0_0_32px_rgba(0,0,0,0.7)] md:inline-flex"
          >
            Talk to Janak AI
          </Link>
        </div>
      </div>
    </header>
  );
}


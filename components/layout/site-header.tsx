"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { assets } from "@/lib/assets";

const navItems: { href: string; label: string; children?: { href: string; label: string }[] }[] = [
  { href: "/", label: "Ecosystem" },
  { href: "/projects", label: "Projects" },
  {
    href: "/media",
    label: "Media",
    children: [
      { href: "/media/archive", label: "News archive" },
      { href: "/media/photos", label: "Photo gallery" },
      { href: "/timeline", label: "Timeline" },
    ],
  },
  {
    href: "/ai-tools",
    label: "Tools",
    children: [
      { href: "/public-desk", label: "Public Desk" },
      { href: "/astrology", label: "Guidance" },
    ],
  },
  {
    href: "/about",
    label: "About",
    children: [
      { href: "/profile", label: "Profile" },
      { href: "/impact", label: "Impact" },
    ],
  },
  { href: "/blog", label: "Insights" },
  { href: "/membership", label: "Membership" },
  { href: "/contact", label: "Collaborate" },
];

function HeaderLogo() {
  const [imgError, setImgError] = useState(false);
  if (imgError) {
    return <div className="h-8 w-8 shrink-0 rounded-full border-2 border-royal-primary bg-royal-primary" aria-hidden />;
  }
  return (
    <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full border-2 border-royal-primary/30">
      <Image
        src={assets.profileSquare}
        alt=""
        fill
        sizes="32px"
        className="object-cover"
        onError={() => setImgError(true)}
      />
    </div>
  );
}

function NavLink({
  href,
  label,
  isActive,
  onNavigate,
}: {
  href: string;
  label: string;
  isActive: boolean;
  onNavigate?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      aria-current={isActive ? "page" : undefined}
      className={`nav-link relative flex min-h-[44px] min-w-[44px] items-center transition-colors ${
        isActive ? "font-medium text-royal-primary" : "text-gray-700 hover:text-royal-primary"
      }`}
    >
      {label}
      {isActive && (
        <span className="absolute inset-x-0 -bottom-2 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
      )}
    </Link>
  );
}

function NavItem({
  item,
  pathname,
  onNavigate,
}: {
  item: (typeof navItems)[number];
  pathname: string;
  onNavigate?: () => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const isActive = pathname?.startsWith(item.href);
  const hasChildren = item.children && item.children.length > 0;

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!hasChildren) {
    return (
      <NavLink
        href={item.href}
        label={item.label}
        isActive={item.href === "/" ? pathname === "/" : isActive}
        onNavigate={onNavigate}
      />
    );
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls={`nav-dropdown-${item.label}`}
        id={`nav-trigger-${item.label}`}
        onClick={() => setOpen((o) => !o)}
        className={`nav-link relative flex min-h-[44px] min-w-[44px] items-center gap-1 transition-colors ${
          isActive ? "font-medium text-royal-primary" : "text-gray-700 hover:text-royal-primary"
        }`}
      >
        {item.label}
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden className={`transition-transform ${open ? "rotate-180" : ""}`}>
          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div
        id={`nav-dropdown-${item.label}`}
        role="menu"
        aria-labelledby={`nav-trigger-${item.label}`}
        className={`absolute left-0 top-full z-50 mt-1 min-w-[180px] rounded-lg border border-gray-200 bg-white py-2 shadow-lg transition ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
      >
        <Link
          href={item.href}
          onClick={() => { setOpen(false); onNavigate?.(); }}
          className="block px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-gray-700 hover:bg-gray-50 hover:text-royal-primary"
        >
          {item.label} overview
        </Link>
        {item.children!.map((child) => (
          <Link
            key={child.href}
            href={child.href}
            role="menuitem"
            onClick={() => { setOpen(false); onNavigate?.(); }}
            className="block px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-gray-700 hover:bg-gray-50 hover:text-royal-primary"
          >
            {child.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const close = () => setMobileOpen(false);

  useEffect(() => {
    if (pathname) setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className="sticky top-0 z-40 border-b border-gray-200 bg-white shadow-sm"
      style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
    >
      <div className="page-shell flex items-center justify-between py-4">
        <Link href="/" className="flex min-h-[44px] min-w-[44px] items-center gap-2" aria-label="Janak Khadka - Home">
          <HeaderLogo />
          <div className="flex flex-col leading-tight">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-900">
              Janak Khadka
            </span>
            <span className="text-[0.72rem] text-gray-700">
              Film · Strategy · Media · AI
            </span>
          </div>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-6 text-xs font-medium uppercase tracking-[0.16em] lg:flex">
          {navItems.map((item) => (
            <NavItem key={item.href} item={item} pathname={pathname} />
          ))}
        </nav>

        <div className="flex min-h-[44px] items-center gap-2">
          <Link
            href="/ai-tools"
            className="hidden min-h-[44px] min-w-[44px] items-center justify-center rounded-lg bg-royal-primary px-4 py-1.5 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-white shadow-sm transition hover:bg-royal-primary-hover md:inline-flex"
          >
            Talk to Janak AI
          </Link>

          <button
            type="button"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((o) => !o)}
            className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-gray-200 bg-gray-50 text-gray-800 transition hover:bg-gray-100 hover:text-gray-900 md:hidden"
          >
            {mobileOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        role="dialog"
        aria-label="Mobile navigation"
        className={`fixed inset-0 top-[73px] z-30 flex flex-col overflow-y-auto bg-white transition md:hidden ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="page-shell flex flex-col gap-1 py-6 text-sm font-medium uppercase tracking-[0.16em]">
          {navItems.flatMap((item) => {
            const links: { href: string; label: string }[] = item.children
              ? [{ href: item.href, label: item.label }, ...item.children]
              : [{ href: item.href, label: item.label }];
            return links.map((l) => (
              <Link
                key={`${l.href}-${l.label}`}
                href={l.href}
                onClick={close}
                className={`flex min-h-[44px] min-w-[44px] items-center py-2 ${
                  pathname === l.href || (l.href !== "/" && pathname?.startsWith(l.href))
                    ? "font-medium text-royal-primary"
                    : "text-gray-800 hover:text-royal-primary"
                }`}
              >
                {l.label}
              </Link>
            ));
          })}
          <Link
            href="/ai-tools"
            onClick={close}
            className="mt-4 flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg bg-royal-primary px-4 text-white"
          >
            Talk to Janak AI
          </Link>
        </nav>
      </div>
    </header>
  );
}

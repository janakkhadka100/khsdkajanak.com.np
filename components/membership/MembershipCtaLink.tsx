"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

type Props = {
  href: string;
  cta: string;
  variant?: "outline" | "primary" | "neutral";
  children: React.ReactNode;
  className?: string;
};

export function MembershipCtaLink({ href, cta, variant = "outline", children, className = "" }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-2 text-xs font-medium uppercase tracking-[0.22em] transition";
  const styles =
    variant === "primary"
      ? "bg-[#f5b048] text-black shadow-[0_18px_60px_rgba(0,0,0,0.85)] hover:bg-[#ffbe55]"
      : variant === "neutral"
        ? "bg-zinc-50 text-black hover:bg-zinc-100"
        : "border border-white/18 bg-white/5 text-zinc-200 backdrop-blur-md hover:bg-white/10";

  return (
    <Link
      href={href}
      onClick={() => trackEvent("membership_interest_clicked", { cta })}
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </Link>
  );
}

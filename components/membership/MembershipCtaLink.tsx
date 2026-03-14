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
    "inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full px-5 py-2.5 text-xs font-medium uppercase tracking-[0.22em] transition";
  const styles =
    variant === "primary"
      ? "bg-royal-primary text-white shadow-sm hover:bg-royal-primary-hover"
      : variant === "neutral"
        ? "bg-gray-100 text-gray-900 hover:bg-gray-200"
        : "border-2 border-royal-primary text-royal-primary hover:bg-gray-50";

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

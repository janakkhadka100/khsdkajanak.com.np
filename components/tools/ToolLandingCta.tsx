"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

type Props = {
  pageSlug: string;
  href: string;
  label: string;
};

export function ToolLandingCta({ pageSlug, href, label }: Props) {
  return (
    <Link
      href={href}
      onClick={() =>
        trackEvent("landing_page_cta_clicked", {
          page: `tools/${pageSlug}`,
          cta: "try_tool",
        })
      }
      className="mt-4 inline-flex items-center justify-center rounded-full bg-[#f5b048] px-6 py-2.5 text-sm font-semibold text-black shadow-[0_18px_60px_rgba(0,0,0,0.85)] transition hover:bg-[#ffbe55]"
    >
      {label}
    </Link>
  );
}

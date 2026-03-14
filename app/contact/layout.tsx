import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Collaborate",
  description:
    "Media requests, collaborations, speaking invitations, strategic advisory, or support conversations. A focused channel for work that respects depth.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

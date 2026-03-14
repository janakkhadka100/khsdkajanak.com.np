import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Membership · Support the Ecosystem",
  description:
    "Sustain a public platform—film, media, AI tools, and guidance—so it stays useful and independent. Premium access and support options.",
  alternates: { canonical: "/membership" },
};

export default function MembershipLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

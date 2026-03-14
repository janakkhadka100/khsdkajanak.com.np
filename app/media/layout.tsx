import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Media & Appearances · Interviews, Programs & Public Record",
  description:
    "Interviews, festival conversations, television programs, speeches, and press mentions. A public record of Janak Khadka's media and appearances.",
  alternates: { canonical: "/media" },
};

export default function MediaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

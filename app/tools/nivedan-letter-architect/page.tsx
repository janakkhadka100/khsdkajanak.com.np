import type { Metadata } from "next";
import { NivedanLetterDeskPage } from "@/components/tools/NivedanLetterDeskPage";

export const metadata: Metadata = {
  title: "Nepali Nivedan Letter Writer | Janak AI Public Desk",
  description:
    "Write formal Nepali letters for schools, ward offices, ministries, and public institutions using the Nivedan & Bureaucratic Letter Architect.",
  alternates: { canonical: "/tools/nivedan-letter-architect" },
};

export default function NivedanLetterArchitectPage() {
  return <NivedanLetterDeskPage />;
}


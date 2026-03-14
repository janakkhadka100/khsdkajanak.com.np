import type { Metadata } from "next";
import { SpeechProgramDeskClientPage } from "@/components/tools/SpeechProgramDeskClientPage";

export const metadata: Metadata = {
  title: "Speech & Program Script Generator | Janak AI Public Desk",
  description:
    "Generate structured Nepali speeches and program scripts for school events, public programs, inaugurations, and community gatherings.",
  alternates: { canonical: "/tools/speech-program-desk" },
};

export default function SpeechProgramDeskPage() {
  return <SpeechProgramDeskClientPage />;
}


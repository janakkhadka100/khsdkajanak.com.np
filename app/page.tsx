import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

import { HeroSection } from "@/components/home/HeroSection";
import { ThesisStatement } from "@/components/home/ThesisStatement";
import { ThreePillars } from "@/components/home/ThreePillars";
import { AdvisorySection } from "@/components/home/AdvisorySection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <HeroSection />
      <ThesisStatement />
      <ThreePillars />
      <AdvisorySection />
    </div>
  );
}

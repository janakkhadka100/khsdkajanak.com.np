"use client";

import type { ReactNode } from "react";
import { FadeUp } from "./FadeUp";

type SectionRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function SectionReveal({
  children,
  className,
  delay = 0,
}: SectionRevealProps) {
  return (
    <FadeUp as="section" className={className} delay={delay}>
      {children}
    </FadeUp>
  );
}


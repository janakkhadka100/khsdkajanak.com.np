"use client";

import { MotionProps, motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type FadeUpProps = {
  as?: "div" | "section";
  children: ReactNode;
  className?: string;
  delay?: number;
} & MotionProps;

export function FadeUp({
  as = "div",
  children,
  className,
  delay = 0,
  ...rest
}: FadeUpProps) {
  const shouldReduceMotion = useReducedMotion();
  const Component = motion[as];

  if (shouldReduceMotion) {
    return (
      <Component className={className} {...rest}>
        {children}
      </Component>
    );
  }

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      {...rest}
    >
      {children}
    </Component>
  );
}


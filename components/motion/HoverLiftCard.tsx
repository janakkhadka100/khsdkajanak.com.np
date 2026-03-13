"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type HoverLiftCardProps = {
  children: ReactNode;
  className?: string;
};

export function HoverLiftCard({ children, className }: HoverLiftCardProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      whileHover={{ scale: 1.02, y: -3 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
    >
      {children}
    </motion.div>
  );
}


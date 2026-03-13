"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { ComponentProps, ReactNode } from "react";

type GlowButtonBaseProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

type GlowButtonProps =
  | (GlowButtonBaseProps & { href: string; onClick?: never })
  | (GlowButtonBaseProps & {
      href?: never;
      onClick?: ComponentProps<"button">["onClick"];
    });

export function GlowButton(props: GlowButtonProps) {
  const { variant = "primary", className, children } = props;
  const shouldReduceMotion = useReducedMotion();

  const baseClasses =
    variant === "primary"
      ? "btn-primary"
      : "btn-secondary";

  const Element = "href" in props ? Link : motion.button;
  const elementProps: any =
    "href" in props
      ? { href: props.href }
      : { type: "button", onClick: props.onClick };

  if (shouldReduceMotion) {
    const StaticElement = "href" in props ? Link : "button";
    return (
      <StaticElement className={`${baseClasses} ${className ?? ""}`} {...elementProps}>
        {children}
      </StaticElement>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -1 }}
      whileTap={{ scale: 0.97, y: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
      className={className}
    >
      <Element className={baseClasses} {...elementProps}>
        {children}
      </Element>
    </motion.div>
  );
}


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

  const isLink = "href" in props;

  if (shouldReduceMotion) {
    if (isLink) {
      const href = (props as { href: string }).href;
      return (
        <Link
          href={href}
          className={`${baseClasses} ${className ?? ""}`}
        >
          {children}
        </Link>
      );
    }
    return (
      <button
        type="button"
        onClick={props.onClick}
        className={`${baseClasses} ${className ?? ""}`}
      >
        {children}
      </button>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -1 }}
      whileTap={{ scale: 0.97, y: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
      className={className}
    >
      {isLink ? (
        <Link
          href={(props as { href: string }).href}
          className={baseClasses}
        >
          {children}
        </Link>
      ) : (
        <motion.button
          type="button"
          onClick={props.onClick}
          className={baseClasses}
        >
          {children}
        </motion.button>
      )}
    </motion.div>
  );
}


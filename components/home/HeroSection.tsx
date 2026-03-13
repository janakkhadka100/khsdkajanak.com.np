"use client";

import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { GlowButton } from "@/components/common/GlowButton";
import { HoverLiftCard } from "@/components/motion/HoverLiftCard";

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const cardY = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 12]);

  return (
    <section className="section-shell border-b border-white/10 pb-14 pt-10 md:pb-20 md:pt-16">
      <div className="relative lighting-blobs">
        {/* Animated gradient background */}
        {!shouldReduceMotion && (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
            initial={{ opacity: 0.7 }}
            animate={{ opacity: [0.7, 0.9, 0.7] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            style={{
              background:
                "radial-gradient(circle at 0% -10%, rgba(245,176,72,0.35), transparent 55%), radial-gradient(circle at 80% -20%, rgba(88,104,180,0.45), transparent 60%)",
            }}
          />
        )}

        <div className="grid gap-10 md:grid-cols-[minmax(0,2.05fr)_minmax(0,1.35fr)] md:items-end">
          {/* Left column */}
          <div className="space-y-9">
            <div className="pill w-max bg-white/5 text-[0.7rem] text-zinc-100">
              <span className="h-1.5 w-1.5 rounded-full bg-[#f5b048]" />
              Public Ecosystem · Nepal
            </div>

            <div className="space-y-5">
              <div className="space-y-3">
                <h1 className="hero-title text-balance text-4xl md:text-5xl lg:text-6xl">
                  Janak Khadka
                </h1>
                <p className="hero-subtitle max-w-xl text-zinc-400">
                  Filmmaker · Strategist · Writer · Public Thinker
                </p>
              </div>
              <p className="hero-body max-w-2xl text-zinc-300 md:text-base">
                Building creative, cultural, media, and AI-powered public platforms for Nepal — a
                cinematic headquarters where stories, strategy, and public tools live in one
                ecosystem.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <GlowButton href="/projects" variant="primary">
                <span>Explore the Ecosystem</span>
                <span aria-hidden>↗</span>
              </GlowButton>
              <GlowButton href="/ai-tools" variant="secondary">
                Talk to Janak AI
              </GlowButton>
            </div>
          </div>

          {/* Right column card */}
          <motion.div style={{ y: cardY }}>
            <HoverLiftCard className="card-elevated card-premium-intel relative overflow-hidden px-6 py-6 md:px-8 md:py-8">
              {/* Glow orb behind content */}
              {!shouldReduceMotion && (
                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute -inset-10 -z-10"
                  initial={{ opacity: 0.6, scale: 1 }}
                  animate={{ opacity: [0.6, 0.85, 0.6], scale: [1, 1.04, 1] }}
                  transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
                  style={{
                    background:
                      "radial-gradient(circle at 0% 0%, rgba(245,176,72,0.55), transparent 55%)",
                  }}
                />
              )}

              <div className="relative flex h-full flex-col justify-between gap-6">
                <div className="space-y-3">
                  <p className="text-[0.7rem] uppercase tracking-[0.22em] text-zinc-500">
                    At a glance
                  </p>
                  <p className="text-sm text-zinc-200">
                    A single public desk where film, media, ideas, and AI tools are shaped for
                    Nepal’s everyday audience.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 text-xs text-zinc-300">
                  <div>
                    <p className="text-[0.7rem] uppercase tracking-[0.22em] text-zinc-500">
                      Domains
                    </p>
                    <p className="mt-1 text-sm text-zinc-100">Film · Media · AI</p>
                  </div>
                  <div>
                    <p className="text-[0.7rem] uppercase tracking-[0.22em] text-zinc-500">
                      Focus
                    </p>
                    <p className="mt-1 text-sm text-zinc-100">Public tools & stories</p>
                  </div>
                  <div>
                    <p className="text-[0.7rem] uppercase tracking-[0.22em] text-zinc-500">
                      Based in
                    </p>
                    <p className="mt-1 text-sm text-zinc-100">Nepal</p>
                  </div>
                </div>
              </div>
            </HoverLiftCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


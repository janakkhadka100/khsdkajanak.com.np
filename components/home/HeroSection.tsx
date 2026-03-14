"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { GlowButton } from "@/components/common/GlowButton";
import { HoverLiftCard } from "@/components/motion/HoverLiftCard";
import { assets } from "@/lib/assets";

export function HeroSection() {
  const [heroImageError, setHeroImageError] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const cardY = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 12]);
  const showHeroImage = !heroImageError;

  return (
    <section className="section-shell border-b border-gray-200 pb-14 pt-10 md:pb-20 md:pt-16">
      <div className="relative lighting-blobs">
        <div className="grid gap-10 md:grid-cols-[minmax(0,2.2fr)_minmax(0,1.2fr)] md:items-end">
          {/* Left column */}
          <div className="space-y-9">
            <div className="pill w-max">
              <span className="h-1.5 w-1.5 rounded-full bg-royal-accent" />
              Public Ecosystem · Nepal
            </div>

            <div className="space-y-5">
              <div className="space-y-3">
                <h1 className="hero-title text-balance text-4xl md:text-5xl lg:text-[3.9rem]">
                  Janak Khadka
                </h1>
                <p className="hero-subtitle max-w-xl text-gray-700">
                  Film · Strategy · Civic
                </p>
              </div>
              <p className="hero-body max-w-2xl md:text-base">
                Building public platforms at the intersection of cinema, civic discourse, and digital
                systems. Film, media, AI tools, and institutional work rooted in Nepal.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <GlowButton href="/projects" variant="primary">
                <span>Explore Projects</span>
                <span aria-hidden>↗</span>
              </GlowButton>
              <GlowButton href="/ai-tools" variant="primary">
                <span>Explore Tools</span>
                <span aria-hidden>↗</span>
              </GlowButton>
              <GlowButton href="/public-desk" variant="secondary">
                Public Desk
              </GlowButton>
              <GlowButton href="/contact" variant="secondary">
                Collaborate
              </GlowButton>
            </div>
          </div>

          {/* Right column: portrait or card */}
          <motion.div style={{ y: cardY }} className="flex flex-col gap-6">
            {showHeroImage && (
              <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-xl border border-gray-200 shadow-md">
                <Image
                  src={assets.heroPortrait}
                  alt="Janak Khadka — Filmmaker, strategist, writer, Nepal"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 384px"
                  className="object-cover"
                  onError={() => setHeroImageError(true)}
                />
              </div>
            )}
            <HoverLiftCard className="card-elevated card-premium-intel relative overflow-hidden px-5 py-5 md:px-7 md:py-7">
              <div className="relative flex h-full flex-col justify-between gap-6">
                <div className="space-y-3">
                  <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-600">
                    At a glance
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    A focused public desk for film, media, ideas, and AI tools in Nepal.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 text-xs text-gray-700">
                  <div>
                    <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-600">
                      Domains
                    </p>
                    <p className="mt-1 text-sm font-medium text-gray-900">Film · Media · AI</p>
                  </div>
                  <div>
                    <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-600">
                      Focus
                    </p>
                    <p className="mt-1 text-sm font-medium text-gray-900">Public tools & stories</p>
                  </div>
                  <div>
                    <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-600">
                      Based in
                    </p>
                    <p className="mt-1 text-sm font-medium text-gray-900">Nepal</p>
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


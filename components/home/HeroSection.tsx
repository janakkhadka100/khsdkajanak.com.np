"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { assets } from "@/lib/assets";

export function HeroSection() {
  const [heroImageError, setHeroImageError] = useState(false);
  const showPortrait = !heroImageError;

  return (
    <section className="relative flex min-h-[90vh] items-center bg-[#0a0a0a]">
      <div className="page-shell grid w-full grid-cols-1 gap-16 md:grid-cols-[1fr_1fr] md:items-center md:gap-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col justify-center"
        >
          <p className="font-sans text-sm text-zinc-400">The Office of</p>
          <h1 className="font-serif mt-2 text-6xl font-normal tracking-tight text-zinc-100 md:text-7xl lg:text-8xl">
            Janak Khadka
          </h1>
          <p className="font-sans mt-6 text-xs font-medium uppercase tracking-[0.35em] text-zinc-400">
            Director · Media Strategist · Cultural Architect
          </p>
          <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:gap-10">
            <Link
              href="/projects"
              className="group inline-flex items-center font-sans text-sm text-zinc-300 transition duration-700 ease-out hover:text-zinc-100"
            >
              Explore the Ecosystem
              <span className="ml-2 opacity-0 transition-all duration-500 group-hover:ml-3 group-hover:opacity-100">
                →
              </span>
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center font-sans text-sm text-zinc-300 transition duration-700 ease-out hover:text-zinc-100"
            >
              Advisory Inquiries
              <span className="ml-2 opacity-0 transition-all duration-500 group-hover:ml-3 group-hover:opacity-100">
                →
              </span>
            </Link>
          </div>
        </motion.div>

        {showPortrait && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative aspect-[4/5] w-full max-w-lg overflow-hidden"
          >
            <Image
              src={assets.heroPortrait}
              alt="Janak Khadka"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 512px"
              className="object-cover grayscale"
              onError={() => setHeroImageError(true)}
            />
          </motion.div>
        )}
      </div>
    </section>
  );
}


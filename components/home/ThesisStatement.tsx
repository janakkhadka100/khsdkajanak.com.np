"use client";

import { motion } from "framer-motion";

export function ThesisStatement() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="flex justify-center bg-[#0a0a0a] py-40"
    >
      <p className="max-w-4xl px-6 text-center font-serif text-2xl leading-relaxed text-zinc-100 md:text-3xl lg:text-4xl">
        Operating at the intersection of cinematic storytelling, public discourse, and
        digital infrastructure, we shape the narratives that define modern Nepal. Bridging
        ancient cultural truths with frontier technology.
      </p>
    </motion.section>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const pillars = [
  {
    title: "Cinematic Narrative",
    subtitle: "Directing, Storytelling Frameworks",
    href: "/projects",
  },
  {
    title: "Civic Discourse",
    subtitle: "Journalism, Political Strategy, Writing",
    href: "/media",
  },
  {
    title: "Digital Systems",
    subtitle: "AI interfaces, Web architecture, Vedic insights",
    href: "/ai-tools",
  },
];

export function ThreePillars() {
  return (
    <section className="border-t border-zinc-800 bg-[#0a0a0a] py-32">
      <div className="page-shell">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: "easeOut" }}
              className="border-t border-zinc-800 pt-8"
            >
              <Link
                href={pillar.href}
                className="group block"
              >
                <h3 className="font-serif text-xl font-normal text-zinc-100 transition duration-700 ease-out group-hover:text-zinc-300 md:text-2xl">
                  {pillar.title}
                </h3>
                <p className="mt-3 font-sans text-sm text-zinc-400">
                  {pillar.subtitle}
                </p>
                <span className="mt-4 inline-block font-sans text-xs text-zinc-500 opacity-0 transition-all duration-500 group-hover:opacity-100">
                  →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

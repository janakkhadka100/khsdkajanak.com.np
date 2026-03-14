"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const links = [
  { label: "Press & Media Discourse", href: "/media" },
  { label: "Institutional Advisory", href: "/contact" },
  { label: "Cinematic Collaborations", href: "/projects" },
];

export function AdvisorySection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="border-t border-zinc-800 bg-[#0a0a0a] py-40"
    >
      <div className="page-shell max-w-3xl">
        <h2 className="font-serif text-2xl font-normal text-zinc-100 md:text-3xl">
          Advisory & Collaborations
        </h2>
        <p className="mt-6 font-sans text-sm leading-relaxed text-zinc-400">
          The office collaborates with national institutions, media houses, and production
          studios. Direct your inquiry to the appropriate desk.
        </p>
        <nav className="mt-12 flex flex-col gap-6" aria-label="Advisory and collaboration links">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group inline-flex items-center font-sans text-sm text-zinc-400 transition duration-700 ease-out hover:text-zinc-100"
            >
              {link.label}
              <span className="ml-2 opacity-0 transition-all duration-500 group-hover:ml-3 group-hover:opacity-100">
                →
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </motion.section>
  );
}

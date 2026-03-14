"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import type { CarouselSlide } from "@/data/carousel";

type Props = {
  slides: CarouselSlide[];
};

export function MediaCarousel({ slides }: Props) {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (isPaused) return;
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [active, isPaused, next]);

  if (slides.length === 0) return null;

  return (
    <section
      className="relative overflow-hidden bg-[#0f1419] py-16 md:py-24"
      aria-label="Public record and media discourse"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="page-shell">
        <p className="carousel-heading text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-white/70">
          Public Record &amp; Media Discourse
        </p>
        <h2 className="carousel-heading mt-3 text-xl font-bold tracking-tight text-white md:text-2xl">
          In The Press
        </h2>
      </div>

      <div className="page-shell mt-10 overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="min-w-full flex-shrink-0 px-1"
            >
              <article className="group relative overflow-hidden rounded-xl bg-white/[0.04] shadow-lg ring-1 ring-white/5 transition hover:ring-white/10">
                <div className="grid gap-6 md:grid-cols-[1fr_1.2fr] md:items-stretch">
                  <div className="relative aspect-[4/3] min-h-[200px] md:aspect-auto">
                    <Image
                      src={slide.imageUrl}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 45vw"
                      className="object-cover transition duration-500 grayscale group-hover:grayscale-0"
                    />
                  </div>
                  <div className="flex flex-col justify-between p-6 md:p-8">
                    <div>
                      <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-royal-accent">
                        {slide.tag}
                      </span>
                      <h3 className="carousel-heading mt-3 text-lg font-semibold leading-snug text-white md:text-xl">
                        {slide.headline}
                      </h3>
                      <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-white/75">
                        {slide.summary}
                      </p>
                    </div>
                    {slide.link && (
                      <Link
                        href={slide.link}
                        target={slide.link.startsWith("http") ? "_blank" : undefined}
                        rel={slide.link.startsWith("http") ? "noreferrer" : undefined}
                        className="mt-6 inline-flex items-center gap-2 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-white/90 underline-offset-4 transition hover:text-royal-accent hover:underline"
                      >
                        {slide.linkLabel ?? "Read full article"}
                        <span aria-hidden>→</span>
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between">
          <div className="flex gap-2" role="tablist" aria-label="Carousel slides">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-label={`Slide ${i + 1}`}
                onClick={() => setActive(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === active ? "w-8 bg-royal-accent" : "w-1.5 bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setActive((p) => (p - 1 + slides.length) % slides.length)}
              aria-label="Previous slide"
              className="rounded-full p-2 text-white/70 transition hover:bg-white/10 hover:text-white"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next slide"
              className="rounded-full p-2 text-white/70 transition hover:bg-white/10 hover:text-white"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

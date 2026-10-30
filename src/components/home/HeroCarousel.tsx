"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { images } from "@/config/images";

export function HeroCarousel() {
  const [active, setActive] = useState(0);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const slides = images.heroSlides;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const card = container.querySelector<HTMLElement>(
      `[data-slide-index="${active}"]`,
    );
    if (!card) return;

    card.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [active]);

  const move = (direction: 1 | -1) => {
    setActive((index) => (index + direction + slides.length) % slides.length);
  };

  return (
    <div className="mt-5 lg:mt-6">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue">
          Featured solutions
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Previous solution"
            onClick={() => move(-1)}
            className="focus-ring grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-[#0b1827] text-white transition hover:bg-white hover:text-navy"
          >
            <ChevronLeft size={15} />
          </button>
          <button
            type="button"
            aria-label="Next solution"
            onClick={() => move(1)}
            className="focus-ring grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-[#0b1827] text-white transition hover:bg-white hover:text-navy"
          >
            <ChevronRight size={15} />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="carousel flex snap-x gap-4 overflow-x-auto pb-3 scroll-smooth"
        aria-label="Featured CCTV solutions"
      >
        {slides.map((slide, index) => (
          <article
            key={slide.src}
            data-slide-index={index}
            className={`group relative min-w-[240px] flex-1 snap-center overflow-hidden rounded-[1.2rem] border transition-all ${
              active === index
                ? "border-blue/80 shadow-[0_20px_40px_rgba(20,72,120,0.18)]"
                : "border-white/10"
            }`}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="h-40 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-44"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071722]/90 via-[#071722]/15 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-4 text-white">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-100">
                {slide.eyebrow}
              </p>
              <h3 className="mt-1 text-base font-black leading-snug">
                {slide.title}
              </h3>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

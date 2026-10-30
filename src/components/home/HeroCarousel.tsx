"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { images } from "@/config/images";

export function HeroCarousel() {
  const [active, setActive] = useState(0);
  const slides = images.heroSlides;
  const current = slides[active];

  const move = (direction: 1 | -1) => {
    setActive((index) => (index + direction + slides.length) % slides.length);
  };

  return (
    <div className="mt-5">
      <div className="relative overflow-hidden rounded-2xl bg-navy">
        <img
          src={current.src}
          alt={current.alt}
          className="h-28 w-full object-cover opacity-65 sm:h-36"
        />
        <div className="absolute inset-0 flex items-center justify-between bg-gradient-to-r from-navy/85 via-navy/35 to-transparent px-3 sm:px-5">
          <div className="max-w-[75%] text-white">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-200">
              {current.eyebrow}
            </p>
            <p className="mt-1 text-sm font-black sm:text-lg">
              {current.title}
            </p>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous hero image"
              onClick={() => move(-1)}
              className="focus-ring grid h-9 w-9 place-items-center rounded-full bg-white/15 text-white backdrop-blur transition hover:bg-white hover:text-navy"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              aria-label="Next hero image"
              onClick={() => move(1)}
              className="focus-ring grid h-9 w-9 place-items-center rounded-full bg-white/15 text-white backdrop-blur transition hover:bg-white hover:text-navy"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
      <div className="mt-3 flex justify-center gap-2" aria-label="Hero slides">
        {slides.map((slide, index) => (
          <button
            type="button"
            key={slide.src}
            aria-label={`Show hero slide ${index + 1}`}
            aria-current={index === active}
            onClick={() => setActive(index)}
            className={`h-1.5 rounded-full transition-all ${
              index === active ? "w-8 bg-blue" : "w-3 bg-navy/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

"use client";

import { useEffect, useRef } from "react";
import { images } from "@/config/images";

export function HeroBackground() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const indexRef = useRef(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const timer = window.setInterval(() => {
      indexRef.current = (indexRef.current + 1) % images.heroSlides.length;
      container.scrollTo({
        left: container.clientWidth * indexRef.current,
        behavior: "smooth",
      });
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div
      ref={scrollRef}
      onScroll={(event) => {
        const container = event.currentTarget;
        if (container.clientWidth > 0) {
          indexRef.current = Math.round(
            container.scrollLeft / container.clientWidth,
          );
        }
      }}
      className="absolute inset-0 flex snap-x snap-mandatory touch-pan-x overflow-x-auto overscroll-x-contain scroll-smooth"
      aria-label="CCTV Care hero images"
    >
      {images.heroSlides.map((slide) => (
        <div
          key={slide.src}
          className="relative min-w-full snap-center"
          aria-hidden="true"
        >
          <img
            src={slide.src}
            alt=""
            className="h-full w-full bg-[#071722] object-contain object-center"
          />
        </div>
      ))}
    </div>
  );
}

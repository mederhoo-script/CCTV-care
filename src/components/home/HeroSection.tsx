"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { images } from "@/config/images";

export function HeroSection() {
  const [active, setActive] = useState(0);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const isInteracting = useRef(false);
  const isProgrammaticScroll = useRef(false);
  const settleTimer = useRef<number | null>(null);
  const slides = images.heroSlides;

  useEffect(() => {
    const timer = window.setInterval(() => {
      if (isInteracting.current) return;
      setActive((current) => (current + 1) % slides.length);
    }, 5000);

    return () => {
      window.clearInterval(timer);
      if (settleTimer.current) {
        window.clearTimeout(settleTimer.current);
      }
    };
  }, [slides.length]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    isProgrammaticScroll.current = true;
    container.scrollTo({
      left: container.clientWidth * active,
      behavior: "smooth",
    });

    const timer = window.setTimeout(() => {
      isProgrammaticScroll.current = false;
    }, 500);

    return () => window.clearTimeout(timer);
  }, [active]);

  const handleScroll = () => {
    const container = scrollRef.current;
    if (
      !container ||
      container.clientWidth === 0 ||
      isProgrammaticScroll.current
    ) {
      return;
    }

    if (settleTimer.current) {
      window.clearTimeout(settleTimer.current);
    }

    settleTimer.current = window.setTimeout(() => {
      const next = Math.round(container.scrollLeft / container.clientWidth);
      if (next !== active && next >= 0 && next < slides.length) {
        setActive(next);
      }
    }, 120);
  };

  const current = slides[active];

  return (
    <section className="hero-security relative min-h-[19rem] overflow-hidden text-white sm:min-h-[23rem]">
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        onPointerDown={() => {
          isInteracting.current = true;
          isProgrammaticScroll.current = false;
        }}
        onPointerUp={() => {
          isInteracting.current = false;
        }}
        onPointerCancel={() => {
          isInteracting.current = false;
        }}
        className="absolute inset-0 flex snap-x snap-mandatory touch-auto overflow-x-auto overscroll-x-auto scroll-smooth"
        aria-label="CCTV Care hero images"
      >
        {slides.map((slide, index) => (
          <div key={slide.src} className="min-w-full snap-center">
            <img
              src={slide.src}
              alt=""
              className="h-full w-full object-cover object-center"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute -right-10 -top-20 select-none text-[14rem] font-black leading-none text-white/[0.04]">
        ◉
      </div>

      <div className="container pointer-events-none relative flex min-h-[19rem] max-w-3xl items-center justify-center px-4 py-7 text-center sm:min-h-[23rem] sm:py-10">
        <div className="drop-shadow-[0_2px_5px_rgba(0,0,0,0.75)]">
          <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-blue-100">
            {current.eyebrow}
          </p>
          <h1 className="mt-1 text-2xl font-black leading-tight tracking-tight sm:text-4xl">
            {current.title}
          </h1>
          <p className="mx-auto mt-2 max-w-2xl text-xs leading-5 text-white/90 sm:text-base sm:leading-6">
            {current.description}
          </p>
          <div className="mt-4 flex justify-center gap-2">
            <Link
              className="pointer-events-auto rounded-full bg-blue px-4 py-2 text-xs font-bold text-white transition hover:bg-white hover:text-navy sm:px-5 sm:py-2.5 sm:text-sm"
              href="/store"
            >
              Explore CCTV store{" "}
              <ArrowRight className="ml-1 inline" size={15} />
            </Link>
            <Link
              className="pointer-events-auto rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-bold text-white transition hover:bg-white hover:text-navy sm:px-5 sm:py-2.5 sm:text-sm"
              href="/request-quote"
            >
              Request a quote
            </Link>
          </div>
          <div className="mt-3 hidden justify-center gap-5 text-xs font-bold text-white sm:flex">
            <span>
              <CheckCircle2 className="mr-1 inline text-blue-200" size={15} />
              Demo-ready catalogue
            </span>
            <span>
              <CheckCircle2 className="mr-1 inline text-blue-200" size={15} />
              Nationwide coverage
            </span>
          </div>
          <div
            className="mt-4 flex justify-center gap-2"
            aria-label="Hero slides"
          >
            {slides.map((slide, index) => (
              <button
                type="button"
                key={slide.src}
                aria-label={`Show hero slide ${index + 1}`}
                aria-current={index === active}
                onClick={() => setActive(index)}
                className={`pointer-events-auto h-1.5 rounded-full transition-all ${
                  index === active ? "w-8 bg-white" : "w-2 bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

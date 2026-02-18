"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* ─── Slide data ─────────────────────────────────────────────────────────── */
// Replace these with your real slide content / images
const heroSlides = [
  {
    id: 1,
    bg: "from-blue-600 to-indigo-700",
    headline: "Fresh Clothes, Every Time",
    sub: "Professional laundry & dry-cleaning at your doorstep.",
    emoji: "👕",
  },
  {
    id: 2,
    bg: "from-cyan-500 to-blue-600",
    headline: "Same-Day Delivery",
    sub: "Drop off by 10 AM, get it back by 6 PM — guaranteed.",
    emoji: "🚚",
  },
  {
    id: 3,
    bg: "from-indigo-600 to-purple-700",
    headline: "Eco-Friendly Cleaning",
    sub: "We use biodegradable detergents that are safe for your family.",
    emoji: "🌿",
  },
];

/* ─── Component ──────────────────────────────────────────────────────────── */
export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const total = heroSlides.length;

  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + total) % total),
    [total],
  );
  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);

  // Auto-advance every 4 seconds
  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="home" className="relative w-full">
      {/* ── Slide track ── */}
      <div className="relative w-full overflow-hidden rounded-2xl shadow-xl">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {heroSlides.map((slide) => (
            <div
              key={slide.id}
              className={`min-w-full bg-gradient-to-br ${slide.bg} flex flex-col items-center justify-center gap-6 px-8 py-28 text-center text-white`}
            >
              <span className="text-7xl">{slide.emoji}</span>
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
                {slide.headline}
              </h1>
              <p className="max-w-xl text-lg text-white/80">{slide.sub}</p>
              <Link
                href="/book-now"
                className="mt-2 rounded-full bg-white px-8 py-3 text-sm font-semibold text-blue-700 shadow-md transition hover:bg-blue-50"
              >
                Book Now
              </Link>
            </div>
          ))}
        </div>

        {/* ── Prev / Next buttons ── */}
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition hover:bg-white/40"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition hover:bg-white/40"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* ── Dot indicators ── */}
      <div className="mt-5 flex items-center justify-center gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === current
                ? "w-7 bg-blue-600"
                : "w-2.5 bg-zinc-300 hover:bg-zinc-400 dark:bg-zinc-600"
            }`}
          />
        ))}
      </div>

      {/* ── Tagline ── */}
      <p className="mt-6 text-center text-2xl font-semibold italic text-zinc-700 dark:text-zinc-300">
        You leave it, we clean it !
      </p>
    </section>
  );
}

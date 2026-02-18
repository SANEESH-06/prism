"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade-out after 1.6s, then unmount after the transition (400ms)
    const fadeTimer = setTimeout(() => setFadeOut(true), 1600);
    const hideTimer = setTimeout(() => setVisible(false), 2000);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white dark:bg-zinc-950 transition-opacity duration-500 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Animated logo */}
      <div
        className={`flex flex-col items-center gap-4 transition-all duration-700 ${
          fadeOut ? "scale-95 opacity-0" : "scale-100 opacity-100"
        }`}
      >
        {/* Pulsing ring */}
        <div className="relative flex items-center justify-center">
          <span className="absolute inline-flex h-20 w-20 animate-ping rounded-full bg-blue-400 opacity-20" />
          <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 dark:bg-blue-950 shadow-lg">
            <Image
              src="/prism.svg"
              alt="Prism"
              width={36}
              height={40}
              priority
            />
          </div>
        </div>

        {/* Brand name */}
        <p className="text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
          PRISM <span className="text-blue-600">Laundry</span>
        </p>

        {/* Loading bar */}
        <div className="mt-2 h-1 w-40 overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
          <div className="h-full animate-[loading_1.4s_ease-in-out_forwards] rounded-full bg-blue-600" />
        </div>
      </div>

      <style>{`
        @keyframes loading {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </div>
  );
}

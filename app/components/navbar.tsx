"use client";

import { useState } from "react";
import Image from "next/image";
import { toast } from "sonner";
import { ThemeToggle } from "./theme-toggle";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200 dark:bg-zinc-900/80 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNav(e, "#home")}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Image
              src="/prism.svg"
              alt="Prism Logo"
              width={32}
              height={36}
              priority
            />
            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Prism
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() =>
                toast.error("Online services currently not available!")
              }
              className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 hover:opacity-90 hover:shadow-blue-500/40 transition-all cursor-pointer"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 group"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 bg-zinc-900 dark:bg-white rounded transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-zinc-900 dark:bg-white rounded transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-zinc-900 dark:bg-white rounded transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen
            ? "max-h-[calc(100vh-4rem)] opacity-100 overflow-y-auto"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-4 pb-4 pt-2 bg-white dark:bg-zinc-900 border-t border-zinc-100 dark:border-zinc-800">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNav(e, link.href)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center justify-between px-3 py-2">
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Theme
            </span>
            <ThemeToggle />
          </div>
          <button
            onClick={() => {
              setMenuOpen(false);
              toast.error("Online services currently not available!");
            }}
            className="mt-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-2 text-center text-sm font-semibold text-white shadow-lg shadow-blue-500/30 hover:opacity-90 hover:shadow-blue-500/40 transition-all cursor-pointer"
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}

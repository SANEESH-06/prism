"use client";

import {
  Shirt,
  Wind,
  Sparkles,
  Clock,
  Truck,
  Leaf,
  Flame,
  Star,
} from "lucide-react";

const services = [
  {
    icon: Shirt,
    title: "Wash & Fold",
    description:
      "We wash, dry, and neatly fold your everyday clothes — returned fresh and ready to wear.",
    color: "bg-blue-50 dark:bg-blue-950/40",
    iconColor: "text-blue-600 dark:text-blue-400",
    border: "border-blue-100 dark:border-blue-900",
  },
  {
    icon: Wind,
    title: "Dry Cleaning",
    description:
      "Expert dry cleaning for suits, dresses, and delicate fabrics using professional-grade solvents.",
    color: "bg-indigo-50 dark:bg-indigo-950/40",
    iconColor: "text-indigo-600 dark:text-indigo-400",
    border: "border-indigo-100 dark:border-indigo-900",
  },
  {
    icon: Sparkles,
    title: "Stain Removal",
    description:
      "Stubborn stains? Our specialists treat and remove even the toughest marks without damaging fabric.",
    color: "bg-purple-50 dark:bg-purple-950/40",
    iconColor: "text-purple-600 dark:text-purple-400",
    border: "border-purple-100 dark:border-purple-900",
  },
  {
    icon: Clock,
    title: "Express Service",
    description:
      "Need it fast? Our express turnaround gets your laundry back to you within a few hours.",
    color: "bg-amber-50 dark:bg-amber-950/40",
    iconColor: "text-amber-600 dark:text-amber-400",
    border: "border-amber-100 dark:border-amber-900",
  },
  {
    icon: Truck,
    title: "Pickup & Delivery",
    description:
      "Schedule a free pickup and delivery at your doorstep — no trips to the laundromat needed.",
    color: "bg-emerald-50 dark:bg-emerald-950/40",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    border: "border-emerald-100 dark:border-emerald-900",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Wash",
    description:
      "We use biodegradable, plant-based detergents that are gentle on clothes and kind to the planet.",
    color: "bg-green-50 dark:bg-green-950/40",
    iconColor: "text-green-600 dark:text-green-400",
    border: "border-green-100 dark:border-green-900",
  },
  {
    icon: Flame,
    title: "Ironing & Pressing",
    description:
      "Crisp, wrinkle-free results every time. We press your clothes to perfection before returning them.",
    color: "bg-orange-50 dark:bg-orange-950/40",
    iconColor: "text-orange-600 dark:text-orange-400",
    border: "border-orange-100 dark:border-orange-900",
  },
  {
    icon: Star,
    title: "Shoe Cleaning",
    description:
      "Restore your sneakers and leather shoes to like-new condition with our specialist cleaning service.",
    color: "bg-rose-50 dark:bg-rose-950/40",
    iconColor: "text-rose-600 dark:text-rose-400",
    border: "border-rose-100 dark:border-rose-900",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="w-full py-20 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <span className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-700 dark:bg-blue-900/50 dark:text-blue-300">
          What We Offer
        </span>
        <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
          Our Services
        </h2>
        <p className="mt-4 text-lg text-zinc-500 dark:text-zinc-400">
          From everyday laundry to delicate dry cleaning — we handle it all with
          care, speed, and a smile.
        </p>
      </div>

      {/* Cards grid */}
      <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.title}
              className={`group relative flex flex-col gap-4 rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${service.color} ${service.border}`}
            >
              {/* Icon */}
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm dark:bg-zinc-900 ${service.iconColor}`}
              >
                <Icon className="h-6 w-6" />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {service.description}
                </p>
              </div>

              {/* Hover arrow */}
              <span className="mt-auto text-sm font-semibold text-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:text-blue-400">
                Learn more →
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

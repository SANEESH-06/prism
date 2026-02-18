import { CheckCircle } from "lucide-react";

const highlights = [
  "Modern equipment & premium detergents",
  "Fast, reliable turnaround times",
  "Delicate fabric specialists",
  "Trusted by thousands of happy customers",
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-zinc-900"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left — text content */}
          <div>
            <span className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-700 dark:bg-blue-900/50 dark:text-blue-300">
              About Us
            </span>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
              At Prism Laundry, we believe{" "}
              <span className="text-blue-600 dark:text-blue-400">
                clean clothes make life better.
              </span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              Our mission is simple: to provide fast, reliable, and high-quality
              laundry services that fit your busy lifestyle.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              With modern equipment, premium detergents, and attention to
              detail, we ensure every garment is treated with care. Whether
              it&apos;s everyday wear, delicate fabrics, or bulky items like
              comforters, our experienced team handles your laundry as if it
              were our own.
            </p>

            {/* Highlights */}
            <ul className="mt-8 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
                  <span className="text-zinc-700 dark:text-zinc-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="/contact"
              className="mt-10 inline-block rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              Get in Touch
            </a>
          </div>

          {/* Right — decorative card */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-md rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-10 text-white shadow-2xl">
              {/* Decorative blobs */}
              <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-blue-400/30 blur-2xl" />
              <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-indigo-400/30 blur-2xl" />

              <p className="text-5xl font-black">5★</p>
              <p className="mt-2 text-lg font-semibold">
                Rated by our customers
              </p>
              <p className="mt-1 text-sm text-white/70">
                Over 10,000 happy customers trust Prism Laundry every month.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4 text-center">
                {[
                  { value: "10K+", label: "Customers" },
                  { value: "24h", label: "Turnaround" },
                  { value: "99%", label: "Satisfaction" },
                  { value: "6+", label: "Services" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl bg-white/10 px-4 py-4 backdrop-blur-sm"
                  >
                    <p className="text-2xl font-extrabold">{stat.value}</p>
                    <p className="text-xs text-white/70">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

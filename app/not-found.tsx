import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 px-4 text-center dark:bg-black">
      <div className="mb-8">
        <Image
          src="/prism.svg"
          alt="Prism Logo"
          width={80}
          height={90}
          className="mx-auto"
          priority
        />
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-zinc-900 bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent sm:text-5xl">
          404
        </h1>
      </div>
      <h2 className="mb-4 text-2xl font-bold text-zinc-800 dark:text-zinc-100">
        Page Not Found
      </h2>
      <p className="mb-8 max-w-md text-zinc-600 dark:text-zinc-400">
        Sorry, we couldn&apos;t find the page you&apos;re looking for. It might
        have been removed, renamed, or doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 hover:opacity-90 transition-all"
      >
        Back to Home
      </Link>
    </div>
  );
}

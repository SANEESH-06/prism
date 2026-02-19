import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PageLoader from "./components/page-loader";
import { Toaster } from "sonner";
import { ThemeProvider } from "./components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/**
 * Full SEO Optimized Metadata + Google Verification
 */
export const metadata: Metadata = {
  metadataBase: new URL("https://prism-333.vercel.app"),

  // Google Search Console verification
  verification: {
    google: "vN7yQk9k1gvGehqRacxB8vOFkGKgX89B6iD5bqJh1KY",
  },

  title: {
    default: "Prism Laundry | Online Laundry & Dry Cleaning Service",
    template: "%s | Prism Laundry",
  },

  description:
    "Prism Laundry provides fast, reliable, and professional laundry and dry cleaning services with easy pickup and delivery. Manage your laundry efficiently using our modern web platform.",

  keywords: [
    "Prism Laundry",
    "Laundry Service",
    "Dry Cleaning",
    "Laundry Pickup",
    "Laundry Delivery",
    "Online Laundry Booking",
    "Laundry Management System",
    "Laundry App India",
    "Prism Laundry Website",
    "Next.js Laundry App",
  ],

  authors: [
    {
      name: "Prism Laundry",
      url: "https://prism-333.vercel.app",
    },
  ],

  creator: "Prism Laundry",
  publisher: "Prism Laundry",

  alternates: {
    canonical: "https://prism-333.vercel.app",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "Prism Laundry | Online Laundry Service",
    description:
      "Professional laundry and dry cleaning service with convenient pickup and delivery.",
    url: "https://prism-333.vercel.app",
    siteName: "Prism Laundry",
    images: [
      {
        url: "https://prismlaundry.com/prism.svg",
        width: 1200,
        height: 630,
        alt: "Prism Laundry",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Prism Laundry | Online Laundry Service",
    description:
      "Book laundry pickup and delivery easily with Prism Laundry.",
    images: ["https://prismlaundry.com/prism.svg"],
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Extra SEO tags */}
        <link rel="canonical" href="https://prism-333.vercel.app" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="application-name" content="Prism Laundry" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <PageLoader />
          <Toaster position="bottom-right" richColors />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

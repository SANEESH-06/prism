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
 * SEO + Google Verification for prism-333.vercel.app
 */
export const metadata: Metadata = {
  metadataBase: new URL("https://prism-333.vercel.app"),

  verification: {
    google: "MW96HzBNfcQ8cyZmydTBggDPP7IK3r9tZYpXrXFVmzw",
  },

  title: {
    default: "Prism Laundry | Online Laundry & Dry Cleaning Service",
    template: "%s | Prism Laundry",
  },

  description:
    "Prism Laundry provides fast, reliable, and professional laundry and dry cleaning services with easy pickup and delivery.",

  keywords: [
    "Prism Laundry",
    "Laundry Service",
    "Dry Cleaning",
    "Laundry Pickup",
    "Laundry Delivery",
    "Online Laundry Booking",
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
  },

  openGraph: {
    title: "Prism Laundry",
    description: "Professional laundry service with pickup and delivery.",
    url: "https://prism-333.vercel.app",
    siteName: "Prism Laundry",
    images: [
      {
        url: "https://prism-333.vercel.app/prism.svg",
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
    title: "Prism Laundry",
    description: "Book laundry pickup and delivery easily.",
    images: ["https://prism-333.vercel.app/prism.svg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://prism-333.vercel.app" />
        <meta name="theme-color" content="#ffffff" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <PageLoader />
          <Toaster position="bottom-right" richColors />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

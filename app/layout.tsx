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

export const metadata: Metadata = {
  title: {
    default: "Prism Laundry",
    template: "%s | Prism Laundry",
  },
  description:
    "Fast, reliable, and high-quality laundry services at your doorstep.",
  keywords: ["Laundry", "Dry Cleaning", "Pickup", "Delivery", "Wash and Fold"],
  openGraph: {
    title: "Prism Laundry",
    description:
      "Fast, reliable, and high-quality laundry services at your doorstep.",
    url: "https://prismlaundry.com",
    siteName: "Prism Laundry",
    images: [
      {
        url: "/prism.svg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prism Laundry",
    description:
      "Fast, reliable, and high-quality laundry services at your doorstep.",
    images: ["/prism.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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

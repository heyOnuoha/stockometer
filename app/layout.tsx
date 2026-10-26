import type { Metadata, Viewport } from "next";
import { SITE, SITE_URL } from "@/lib/site";
import { StructuredData } from "@/components/structured-data";
import { assetPath } from "@/lib/assets";
import Image from "next/image";
import { Suspense } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { TickerMarquee } from "@/components/ticker-marquee";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE.name} · ${SITE.tagline}`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "live stock prices",
    "stock market dashboard",
    "top gainers and losers",
    "stock screener",
    "market indices",
    "sector performance",
    "stock price history",
    "marketstack",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE.name,
    title: `${SITE.name} · ${SITE.tagline}`,
    description: SITE.description,
    locale: SITE.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} · ${SITE.tagline}`,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  authors: [{ name: "APILayer", url: "https://apilayer.com/" }],
  creator: "APILayer",
};

/** themeColor belongs in `viewport`; in `metadata` it is dropped from the head. */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <StructuredData />
      </head>
      <body className="flex min-h-full flex-col bg-(--color-bg) text-(--color-text)">
        <Suspense fallback={<div className="h-7 border-b border-(--color-border) bg-(--color-surface)" />}>
          <TickerMarquee />
        </Suspense>
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-(--color-border) pt-6 pb-20">
          <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-3 px-4 text-xs text-(--color-text-dim) sm:flex-row sm:justify-between">
            <div className="flex flex-wrap items-center gap-2">
              <span>StockoMeter — built on</span>
              <a
                href="https://apilayer.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center transition-opacity hover:opacity-80"
                aria-label="APILayer"
              >
                <Image
                  src={assetPath("/apilayer-logo.png")}
                  alt="APILayer"
                  width={84}
                  height={16}
                  style={{ width: "auto" }}
                  className="h-4"
                />
              </a>
              <span>· Data via Marketstack · Live polling shared across users</span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://apilayer.com/products/marketstack/?utm_source=stockometer_devtools&utm_medium=internal&utm_campaign=featured_section"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-(--color-brand)"
              >
                Marketstack API
              </a>
              <a
                href="https://apilayer.com/marketplace"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-(--color-brand)"
              >
                APILayer Marketplace
              </a>
              <a
                href="https://apilayer.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-(--color-brand)/40 px-3 py-1 text-(--color-brand) transition-colors hover:bg-(--color-brand)/10"
              >
                Visit APILayer →
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

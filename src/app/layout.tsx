import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/config/site";
import { BRAND_COLORS } from "@/lib/brand-colors";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const { business, seo } = siteConfig;
const titleDefault = business.metaTitle ?? `${business.name} — ${business.slogan}`;

export const metadata: Metadata = {
  metadataBase: new URL(seo.url),
  title: { default: titleDefault, template: `%s | ${business.name}` },
  description: business.shortDescription,
  applicationName: business.name,
  keywords: [
    "hygiene supplies",
    "toiletry supplies",
    "janitorial supplies UK",
    "care home cleaning supplies",
    "hotel toiletries",
    "commercial cleaning supplies",
    "reseller",
    "trade account",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: business.name,
    locale: seo.locale,
    url: seo.url,
    title: titleDefault,
    description: business.shortDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: titleDefault,
    description: business.shortDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // Ink chrome reads as premium; swap to brand (#FFC400) if the client prefers a bolder tab colour.
  themeColor: BRAND_COLORS.ink,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <JsonLd />
      </body>
    </html>
  );
}

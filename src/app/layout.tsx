import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import { Navbar } from "@/components/layout/Navbar";
import { siteContent } from "@/content/site";
import "@/styles/globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Troy Teknoloji | AR-GE ve İleri Mühendislik Çözümleri",
  description:
    "Troy Teknoloji; ürün geliştirme, mekanik ve elektromekanik sistemler, hızlı prototipleme ve ileri mühendislik alanlarında AR-GE çözümleri sunar.",
  applicationName: siteContent.company.name,
  keywords: [
    "Troy Teknoloji",
    "AR-GE",
    "ileri mühendislik",
    "ürün geliştirme",
    "mekanik sistemler",
    "elektromekanik sistemler",
    "hızlı prototipleme",
  ],
  authors: [{ name: siteContent.company.name }],
  creator: siteContent.company.name,
  icons: {
    icon: siteContent.media.favicon,
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    title: "Troy Teknoloji | AR-GE ve İleri Mühendislik Çözümleri",
    description:
      "Ürün geliştirme, mekanik ve elektromekanik sistemler, hızlı prototipleme ve ileri mühendislik çözümleri.",
    siteName: siteContent.company.name,
    images: [
      {
        url: siteContent.media.openGraphImage,
        width: 1200,
        height: 630,
        alt: "Troy Teknoloji",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#07111b",
  width: "device-width",
  initialScale: 1,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteContent.company.legalName,
  description: siteContent.company.description,
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="tr">
      <body>
        <a
          className="fixed top-3 left-3 z-[100] -translate-y-20 bg-accent px-4 py-3 text-sm font-semibold text-ink transition-transform focus:translate-y-0 focus:outline-2 focus:outline-offset-2 focus:outline-white"
          href="#ana-icerik"
        >
          Ana içeriğe geç
        </a>
        <Navbar />
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
          }}
          type="application/ld+json"
        />
      </body>
    </html>
  );
}

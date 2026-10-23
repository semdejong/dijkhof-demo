import type { Metadata, Viewport } from "next";
import { Nunito, Source_Sans_3 } from "next/font/google";
import type { CSSProperties } from "react";
import "./globals.css";
import { content } from "@/content";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import MobileBar from "@/components/MobileBar";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-source",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: content.seo.title,
    template: "%s | Hoveniersbedrijf G. Dijkhof",
  },
  description: content.seo.description,
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
  icons: { icon: content.company.logo },
};

export const viewport: Viewport = { themeColor: "#16245B" };

const TRACKER_SRC = "https://sleads-demo-analytics.vercel.app/t.js";
const TRACKER_ENDPOINT = "https://basic-tiger-117.convex.site/track";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LandscapeService",
  name: content.company.name,
  telephone: "+31553011795",
  email: content.contact.email,
  areaServed: content.werkgebied,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Klarenbeek",
    addressCountry: "NL",
  },
};

const c = content.colors;
const themeVars = {
  "--brand": c.primary,
  "--brand-fg": c.primaryForeground,
  "--accent": c.accent,
  "--background": c.background,
  "--foreground": c.foreground,
  "--muted": c.muted,
} as CSSProperties;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang={content.seo.lang} style={themeVars} className={`${nunito.variable} ${sourceSans.variable} h-full scroll-smooth antialiased`}>
      <head>
        <script async src={TRACKER_SRC} data-demo={content.slug} data-endpoint={TRACKER_ENDPOINT} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="flex min-h-full flex-col">
        <a href="#inhoud" className="skip-link">
          Ga naar de inhoud
        </a>
        <SiteHeader />
        <main id="inhoud" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <MobileBar />
      </body>
    </html>
  );
}

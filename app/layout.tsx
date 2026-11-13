import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { site } from "@/content/site";
import "@/content/validate";
import { getAllCases } from "@/lib/mdx";
import { THEME_SCRIPT } from "@/lib/theme";
import { Sidebar } from "@/components/layout/sidebar";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Footer } from "@/components/layout/footer";
import { BackToTop } from "@/components/layout/back-to-top";
import { GlobalClient } from "@/components/layout/global-client";
import { Toaster } from "@/components/layout/toaster";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--font-instrument-serif",
  display: "swap",
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.seo.homeTitle, template: site.seo.titleTemplate },
  description: site.seo.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_IN",
    url: "/",
    title: site.seo.homeTitle,
    description: site.seo.description,
  },
  twitter: { card: "summary_large_image", title: site.seo.homeTitle, description: site.seo.description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0B" },
    { media: "(prefers-color-scheme: light)", color: "#FAFAF9" },
  ],
};

/** Vercel Analytics only loads on Vercel (avoids 404s for its script elsewhere). */
const onVercel = !!process.env.VERCEL;

export default function RootLayout({ children }: LayoutProps<"/">) {
  const cases = getAllCases().map(({ slug, title, company }) => ({ slug, title, company }));

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      <body className="min-h-dvh">
        <a
          href="#content"
          className="sr-only rounded-button bg-accent px-4 py-2 text-sm font-medium text-on-accent focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[70]"
        >
          Skip to content
        </a>
        <Sidebar />
        <MobileNav />
        <div className="lg:pl-[280px]">
          <div className="mx-auto max-w-[880px] px-5 sm:px-8 lg:px-12">
            <main id="content" tabIndex={-1} className="outline-none">
              {children}
            </main>
            <Footer />
          </div>
        </div>
        <BackToTop />
        <Toaster />
        <GlobalClient cases={cases} />
        {onVercel && (
          <>
            <Analytics />
            <SpeedInsights />
          </>
        )}
      </body>
    </html>
  );
}

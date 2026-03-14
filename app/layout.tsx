import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { StructuredData } from "@/components/seo/StructuredData";
import { Analytics } from "./analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Janak Khadka · Film, Strategy & Public Platform | Nepal",
    template: "%s | Janak Khadka",
  },
  description:
    "The cinematic, AI-powered public ecosystem of filmmaker, strategist, writer, and media personality Janak Khadka from Nepal. Film, civic discourse, AI tools.",
  metadataBase: new URL("https://khadkajanak.com.np"),
  keywords: ["Janak Khadka", "Nepal film", "Nepali AI tools", "civic discourse", "public platform"],
  authors: [{ name: "Janak Khadka", url: "https://khadkajanak.com.np" }],
  openGraph: {
    title: "Janak Khadka · Film, Strategy & Public Platform",
    description:
      "A premium ecosystem for film direction, media, strategy, AI-powered public tools, and social initiatives in Nepal.",
    url: "https://khadkajanak.com.np",
    siteName: "Janak Khadka",
    type: "website",
    locale: "en_NP",
  },
  twitter: {
    card: "summary_large_image",
    title: "Janak Khadka · Film, Strategy & Public Platform",
    description: "Cinematic, AI-powered public ecosystem for film, media, and civic tools in Nepal.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased with-film-grain`}
      >
        <StructuredData />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-royal-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:outline-none"
        >
          Skip to main content
        </a>
        <div className="min-h-screen bg-background text-foreground">
          <SiteHeader />
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
          <SiteFooter />
        </div>
        <Analytics />
      </body>
    </html>
  );
}


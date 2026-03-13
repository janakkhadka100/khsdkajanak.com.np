import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
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
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Janak Khadka · Film, Strategy & Public Platform",
  description:
    "The cinematic, AI-powered public ecosystem of filmmaker, strategist, writer, and media personality Janak Khadka from Nepal.",
  metadataBase: new URL("https://khadkajanak.com.np"),
  openGraph: {
    title: "Janak Khadka · Film, Strategy & Public Platform",
    description:
      "A premium ecosystem for film direction, media, strategy, AI-powered public tools, and social initiatives in Nepal.",
    url: "https://khadkajanak.com.np",
    siteName: "Janak Khadka",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased with-film-grain with-vignette`}
      >
        <div className="min-h-screen bg-background text-foreground">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
        <Analytics />
      </body>
    </html>
  );
}


import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { BRAND_NAME, TAGLINE, LOGO_URL } from "@/lib/constants";
import Script from "next/script";

export const metadata: Metadata = {
  title: `${BRAND_NAME} | ${TAGLINE}`,
  description: "Raipur's premier modern mechanized car care brand. Professional car cleaning, detailing, and auto services using advanced technology.",
  keywords: ["Car Wash Raipur", "Car Detailing Raipur", "Auto Service Raipur", "Mechanized Car Cleaning", "Ceramic Coating Raipur", "Car Maintenance Raipur"],
  icons: {
    icon: LOGO_URL,
    shortcut: LOGO_URL,
    apple: LOGO_URL,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="antialiased bg-background text-foreground min-h-screen flex flex-col">
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="aa06d267-e334-4e28-9c88-e58ebe55d970"
        />
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

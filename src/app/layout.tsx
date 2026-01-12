import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { BRAND_NAME, TAGLINE, LOGO_URL } from "@/lib/constants";

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

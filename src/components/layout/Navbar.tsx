"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { BRAND_NAME, LOGO_URL, PHONE } from "@/lib/constants";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/#services" },
  { name: "About", href: "/#about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-12 h-12 overflow-hidden rounded-lg border border-brand-blue/20">
            <Image
              src={LOGO_URL}
              alt={BRAND_NAME}
              fill
              className="object-cover transition-transform group-hover:scale-110"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-heading tracking-tighter leading-none text-white">
              URBAN <span className="text-brand-blue">AUTO</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">
              Raipur
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-brand-blue transition-colors uppercase tracking-widest"
            >
              {link.name}
            </Link>
          ))}
          <Button asChild variant="outline" className="border-brand-blue/50 text-brand-blue hover:bg-brand-blue hover:text-white rounded-full uppercase tracking-widest text-xs font-bold px-6">
            <Link href={`tel:${PHONE.replace(/\s/g, '')}`} className="flex items-center gap-2">
              <Phone size={14} />
              {PHONE}
            </Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium hover:text-brand-blue transition-colors uppercase tracking-widest"
                >
                  {link.name}
                </Link>
              ))}
              <Button asChild className="bg-brand-blue hover:bg-brand-blue/80 text-white rounded-full uppercase tracking-widest font-bold mt-4">
                <Link href={`tel:${PHONE.replace(/\s/g, '')}`} className="flex items-center justify-center gap-2">
                  <Phone size={18} />
                  Call Now
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

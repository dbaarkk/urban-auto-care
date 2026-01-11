"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, ChevronRight } from "lucide-react";
import { BRAND_NAME, LOGO_URL, PHONE, EMAIL, ADDRESS, WORKING_HOURS, SERVICES } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-brand-charcoal pt-16 pb-8 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-10 h-10 overflow-hidden rounded-lg">
                <Image src={LOGO_URL} alt={BRAND_NAME} fill className="object-cover" />
              </div>
              <span className="text-2xl font-heading tracking-tighter text-white">
                URBAN <span className="text-brand-blue">AUTO</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Urban Auto is Raipur's premier modern mechanized car care brand, dedicated to pampering your vehicle with advanced technology and professional expertise.
            </p>
            </div>
            {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h4 className="text-lg font-heading tracking-widest text-white uppercase">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {["Home", "Services", "About", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    href={link === "Home" ? "/" : link === "Contact" ? "/contact" : `/#${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-brand-blue transition-colors flex items-center gap-2 text-sm"
                  >
                    <ChevronRight size={14} className="text-brand-blue" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-6">
            <h4 className="text-lg font-heading tracking-widest text-white uppercase">Our Services</h4>
            <ul className="grid grid-cols-1 gap-3">
              {SERVICES.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-muted-foreground hover:text-brand-blue transition-colors flex items-center gap-2 text-sm"
                  >
                    <ChevronRight size={14} className="text-brand-blue" />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <h4 className="text-lg font-heading tracking-widest text-white uppercase">Contact Us</h4>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3 text-sm">
                <MapPin size={20} className="text-brand-blue shrink-0" />
                <span className="text-muted-foreground">{ADDRESS}</span>
              </div>
              <div className="flex gap-3 text-sm items-center">
                <Phone size={20} className="text-brand-blue shrink-0" />
                <Link href={`tel:${PHONE.replace(/\s/g, '')}`} className="text-muted-foreground hover:text-brand-blue">
                  {PHONE}
                </Link>
              </div>
              <div className="flex gap-3 text-sm items-center">
                <Mail size={20} className="text-brand-blue shrink-0" />
                <Link href={`mailto:${EMAIL}`} className="text-muted-foreground hover:text-brand-blue">
                  {EMAIL}
                </Link>
              </div>
              <div className="mt-2 p-3 border border-white/5 rounded bg-white/5">
                <p className="text-[10px] uppercase tracking-widest text-brand-blue font-bold mb-1">Working Hours</p>
                <p className="text-xs text-muted-foreground">{WORKING_HOURS}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Designed for Premium Performance in Raipur.
          </p>
        </div>
      </div>
    </footer>
  );
}

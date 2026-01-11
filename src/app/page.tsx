"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Phone, 
  Calendar, 
  ChevronRight, 
  Shield, 
  Zap, 
  Award, 
  Star,
  ShowerHead,
  Armchair,
  Sparkles,
  Settings,
  Paintbrush,
  Wrench,
  Disc,
  ShieldCheck,
  Truck,
  ShieldAlert
} from "lucide-react";
import { BRAND_NAME, TAGLINE, PHONE, SERVICES } from "@/lib/constants";
import { Button } from "@/components/ui/button";

const iconMap: Record<string, any> = {
  ShowerHead,
  Armchair,
  Sparkles,
  Settings,
  Paintbrush,
  Wrench,
  Disc,
  ShieldCheck,
  Truck,
  ShieldAlert
};

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2000"
            alt="Premium Car Care"
            fill
            className="object-cover opacity-40 grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-bold uppercase tracking-widest mb-6"
            >
              <Zap size={14} />
              Raipur's Best Mechanized Car Care
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading leading-[0.9] text-white mb-6 uppercase tracking-tighter">
              Premium <span className="text-brand-blue">Car Care</span> <br />
              & Auto Services
            </h1>
            
            <p className="text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed">
              Experience the future of vehicle maintenance. We use advanced mechanized cleaning and professional detailing to give your car the pampering it deserves.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-brand-blue hover:bg-brand-blue/80 text-white rounded-full h-14 px-8 text-sm font-bold uppercase tracking-widest group">
                <Link href="/#services" className="flex items-center gap-2">
                  Explore Services
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/20 hover:bg-white/10 rounded-full h-14 px-8 text-sm font-bold uppercase tracking-widest">
                <Link href={`tel:${PHONE.replace(/\s/g, '')}`} className="flex items-center gap-2">
                  <Phone size={18} />
                  Call Now
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute bottom-10 right-10 hidden lg:block">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="glass-card p-6 rounded-2xl border-white/10"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-blue flex items-center justify-center text-white">
                <Award size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-white uppercase tracking-widest leading-tight">Certified</p>
                <p className="text-xs text-muted-foreground">Expert Technicians</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 bg-mesh relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square"
            >
              <div className="absolute inset-0 border-2 border-brand-blue/30 translate-x-4 translate-y-4 -z-10" />
              <Image
                src="https://images.unsplash.com/photo-1563720223185-11003d516905?q=80&w=1200"
                alt="Urban Auto Workshop"
                fill
                className="object-cover"
              />
              <div className="absolute -bottom-8 -right-8 bg-brand-charcoal border border-white/10 p-8 hidden md:block">
                <p className="text-4xl font-heading text-brand-blue mb-1">100%</p>
                <p className="text-xs uppercase tracking-widest font-bold text-white">Customer Trust</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-brand-blue font-bold uppercase tracking-[0.3em] text-xs mb-4">The Urban Auto Way</p>
              <h2 className="text-4xl md:text-5xl font-heading text-white mb-8 leading-tight">
                Modern Car Care <br /> Defined by Precision
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Urban Auto is a modern mechanized car care brand that is changing the way people think about vehicle maintenance in Raipur. We believe that cars are more than just machines; they are an extension of your lifestyle.
                </p>
                <p>
                  Our workshop is equipped with advanced technology including high-pressure cleaning machines, spray injection & extraction systems, high-powered vacuum cleaners, and professional-grade detailing tools.
                </p>
                <p>
                  Every vehicle at Urban Auto is pampered by trained technicians who treat your car with the same care they would their own. From basic cleaning to complex accidental repairs, we ensure quality at every step.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 mt-12">
                <div className="flex gap-4">
                  <Shield className="text-brand-blue shrink-0" size={32} />
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-2">Quality First</h4>
                    <p className="text-xs text-muted-foreground">Premium chemicals & genuine spare parts.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Star className="text-brand-blue shrink-0" size={32} />
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-2">Expert Team</h4>
                    <p className="text-xs text-muted-foreground">Certified technicians with years of experience.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 bg-brand-charcoal">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-brand-blue font-bold uppercase tracking-[0.3em] text-xs mb-4">Our Expertise</p>
              <h2 className="text-4xl md:text-6xl font-heading text-white uppercase tracking-tighter">Professional <br /> Services</h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-md text-right md:text-left"
            >
              <p className="text-muted-foreground text-sm leading-relaxed">
                From specialized detailing to comprehensive mechanical repairs, we offer a full suite of automotive solutions designed for performance and longevity.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {SERVICES.map((service, index) => {
              const Icon = iconMap[service.icon];
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={`/services/${service.slug}`}
                    className="group relative block h-[400px] overflow-hidden border border-white/5"
                  >
                    <div className="absolute inset-0 z-0">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-50"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/20 to-transparent" />
                    </div>

                    <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end">
                      <div className="w-12 h-12 rounded-full bg-brand-blue/20 backdrop-blur-md border border-brand-blue/30 flex items-center justify-center text-brand-blue mb-4 group-hover:bg-brand-blue group-hover:text-white transition-all">
                        {Icon && <Icon size={24} />}
                      </div>
                      <h3 className="text-2xl font-heading text-white uppercase tracking-widest mb-2 group-hover:text-brand-blue transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs text-muted-foreground line-clamp-2 mb-4 group-hover:text-white/70 transition-colors">
                        {service.tagline}
                      </p>
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-blue opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                        View Details <ChevronRight size={14} />
                      </div>
                    </div>

                    <div className="absolute top-4 right-4 text-white/5 font-heading text-6xl leading-none select-none">
                      {(index + 1).toString().padStart(2, '0')}
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-blue opacity-5 -z-10" />
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-heading text-white uppercase tracking-tighter mb-8">
              Ready to Give Your Car <br /> The <span className="text-brand-blue">Urban Auto</span> Treatment?
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              <Button asChild size="lg" className="bg-brand-blue hover:bg-brand-blue/80 text-white rounded-full h-16 px-10 text-base font-bold uppercase tracking-widest">
                <Link href="/contact" className="flex items-center gap-2">
                  <Calendar size={20} />
                  Book Appointment
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/20 hover:bg-white/10 rounded-full h-16 px-10 text-base font-bold uppercase tracking-widest">
                <Link href={`tel:${PHONE.replace(/\s/g, '')}`} className="flex items-center gap-2">
                  <Phone size={20} />
                  Call Us Now
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

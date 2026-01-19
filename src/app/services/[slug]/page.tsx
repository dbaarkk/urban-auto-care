import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  MessageCircle, 
  Calendar,
  ChevronRight,
  ShowerHead,
  Armchair,
  Sparkles,
  Settings,
  Paintbrush,
  Wrench,
  Disc,
  ShieldCheck,
  Truck,
  ShieldAlert,
  Handshake
} from "lucide-react";
import { SERVICES, BRAND_NAME, PHONE, WHATSAPP } from "@/lib/constants";
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
  ShieldAlert,
  Handshake
};

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} in Raipur | ${BRAND_NAME}`,
    description: service.description[0].substring(0, 160),
    openGraph: {
      title: `${service.title} | ${BRAND_NAME} Raipur`,
      description: service.tagline,
      images: [service.image],
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) notFound();

  const Icon = iconMap[service.icon];
  const relatedServices = SERVICES.filter((s) => s.id !== service.id).slice(0, 4);

  return (
    <div className="flex flex-col w-full">
      {/* 1. SERVICE HERO SECTION */}
      <section className="relative min-h-[60vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover opacity-40 grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-bold uppercase tracking-widest mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              {Icon && <Icon size={14} />}
              Mechanized Car Care
            </div>
            <h1 className="text-5xl md:text-7xl font-heading text-white uppercase tracking-tighter mb-4 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
              {service.title}
            </h1>
            {service.price && (
              <p className="text-2xl md:text-3xl text-brand-blue font-bold mb-4 animate-in fade-in slide-in-from-bottom-7 duration-700 delay-150">
                {service.price}
              </p>
            )}
            <p className="text-xl md:text-2xl text-white/70 font-medium mb-10 max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
              {service.tagline}
            </p>

            <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
              <Button asChild size="lg" className="bg-brand-blue hover:bg-brand-blue/80 text-white rounded-full h-14 px-8 text-sm font-bold uppercase tracking-widest">
                <Link href="/contact" className="flex items-center gap-2">
                  <Calendar size={18} />
                  Book This Service
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/20 hover:bg-white/10 rounded-full h-14 px-8 text-sm font-bold uppercase tracking-widest text-white">
                <Link href={`tel:${PHONE.replace(/\s/g, '')}`} className="flex items-center gap-2">
                  <Phone size={18} />
                  Call Now
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-[#25D366]/50 text-[#25D366] hover:bg-[#25D366] hover:text-white rounded-full h-14 px-8 text-sm font-bold uppercase tracking-widest">
                <Link href={`https://wa.me/${WHATSAPP.replace(/\s/g, "")}`} className="flex items-center gap-2">
                  <MessageCircle size={18} />
                  WhatsApp
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DETAILED DESCRIPTION */}
      <section className="py-24 bg-brand-charcoal">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-6">
              <p className="text-brand-blue font-bold uppercase tracking-[0.3em] text-xs">Deep Analysis</p>
              <h2 className="text-4xl font-heading text-white uppercase tracking-tighter mb-8">Why Choose Our <br /> {service.title}?</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                {service.description.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="sticky top-32 glass-card p-10 border-white/5 bg-mesh">
                <h3 className="text-2xl font-heading text-white uppercase tracking-widest mb-8 border-b border-white/10 pb-4">Service Excellence</h3>
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-lg bg-brand-blue/20 flex items-center justify-center text-brand-blue shrink-0">
                      <ShieldCheck size={28} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-1">Precision Tools</h4>
                      <p className="text-xs text-muted-foreground">Advanced high-pressure & extraction machines for perfect results.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-lg bg-brand-blue/20 flex items-center justify-center text-brand-blue shrink-0">
                      <Settings size={28} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-1">Expert Technicians</h4>
                      <p className="text-xs text-muted-foreground">Trained professionals who understand your car's specific needs.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-lg bg-brand-blue/20 flex items-center justify-center text-brand-blue shrink-0">
                      <Sparkles size={28} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-1">Premium Chemicals</h4>
                      <p className="text-xs text-muted-foreground">Eco-friendly and pH-balanced chemicals for long-term protection.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT'S INCLUDED & 5. BENEFITS */}
      <section className="py-24 bg-background border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* What's Included */}
            <div>
              <h2 className="text-3xl font-heading text-white uppercase tracking-widest mb-10">What's Included</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.included.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-white/5 border border-white/5 hover:border-brand-blue/30 transition-colors">
                    <CheckCircle2 size={20} className="text-brand-blue shrink-0" />
                    <span className="text-sm text-muted-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="text-3xl font-heading text-white uppercase tracking-widest mb-10">Key Benefits</h2>
              <div className="space-y-4">
                {service.benefits.map((benefit, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="w-6 h-6 rounded-full border border-brand-blue flex items-center justify-center text-brand-blue shrink-0 mt-1 group-hover:bg-brand-blue group-hover:text-white transition-all">
                      <ChevronRight size={14} />
                    </div>
                    <p className="text-muted-foreground text-base group-hover:text-white transition-colors">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROCESS FLOW */}
      <section className="py-24 bg-brand-charcoal overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-brand-blue font-bold uppercase tracking-[0.3em] text-xs mb-4">How we work</p>
            <h2 className="text-4xl md:text-5xl font-heading text-white uppercase tracking-tighter">Our Systematic Process</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((step, i) => (
              <div key={i} className="relative p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all group">
                <span className="text-6xl font-heading text-white/5 absolute top-4 right-4 group-hover:text-brand-blue/10 transition-colors">
                  {step.step}
                </span>
                <h4 className="text-xl font-heading text-white uppercase tracking-widest mb-4 group-hover:text-brand-blue transition-colors">
                  {step.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed relative z-10">
                  {step.description}
                </p>
                {i < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 translate-y-[-50%] z-20 text-brand-blue">
                    <ArrowRight size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. RELATED SERVICES */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-heading text-white uppercase tracking-widest">Other Professional Services</h2>
            <Link href="/#services" className="text-brand-blue text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-2 hover:gap-4 transition-all">
              View All <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedServices.map((related) => {
              const RelatedIcon = iconMap[related.icon];
              return (
                <Link
                  key={related.id}
                  href={`/services/${related.slug}`}
                  className="group block relative aspect-[4/5] overflow-hidden border border-white/5"
                >
                  <Image
                    src={related.image}
                    alt={related.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-40"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <div className="w-10 h-10 rounded bg-brand-blue/20 backdrop-blur text-brand-blue flex items-center justify-center mb-3 group-hover:bg-brand-blue group-hover:text-white transition-all">
                      {RelatedIcon && <RelatedIcon size={20} />}
                    </div>
                    <h4 className="text-lg font-heading text-white uppercase tracking-widest mb-1 group-hover:text-brand-blue transition-colors">
                      {related.title}
                    </h4>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                      Explore Service
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. CALL-TO-ACTION SECTION */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="bg-brand-blue p-12 md:p-20 text-center relative overflow-hidden">
             {/* Decorative Background */}
             <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute -top-20 -left-20 w-80 h-80 bg-white rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white rounded-full blur-3xl" />
             </div>
             
             <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-heading text-white uppercase tracking-tighter mb-6">
                  Book an Appointment Now
                </h2>
                <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto font-medium">
                  Your car deserves the best care in Raipur. Let our experts bring back the shine and performance of your vehicle today.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  <Button asChild size="lg" className="bg-white text-brand-blue hover:bg-white/90 rounded-full h-16 px-10 text-base font-bold uppercase tracking-widest shadow-xl">
                    <Link href={`tel:${PHONE.replace(/\s/g, '')}`} className="flex items-center gap-2">
                      <Phone size={20} />
                      Call Us: {PHONE}
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10 rounded-full h-16 px-10 text-base font-bold uppercase tracking-widest">
                    <Link href={`https://wa.me/${WHATSAPP.replace(/\s/g, "")}`} className="flex items-center gap-2">
                      <MessageCircle size={20} />
                      WhatsApp Us
                    </Link>
                  </Button>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutomotiveBusiness",
            "name": BRAND_NAME,
            "description": service.description[0],
            "image": service.image,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Sunder Nagar",
              "addressLocality": "Raipur",
              "addressRegion": "Chhattisgarh",
              "postalCode": "492001",
              "addressCountry": "IN"
            },
            "telephone": PHONE,
            "url": `https://urbanauto.in/services/${service.slug}`,
            "priceRange": "$$",
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
              ],
              "opens": "09:00",
              "closes": "21:00"
            }
          })
        }}
      />
    </div>
  );
}

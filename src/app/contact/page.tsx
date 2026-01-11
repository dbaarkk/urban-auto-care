"use client";

import { motion } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Send,
  CheckCircle2
} from "lucide-react";
import { 
  BRAND_NAME, 
  PHONE, 
  WHATSAPP, 
  EMAIL, 
  ADDRESS, 
  WORKING_HOURS,
  SERVICES 
} from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { useState } from "react";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Reset after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative py-24 pt-32 overflow-hidden bg-mesh">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-brand-blue font-bold uppercase tracking-[0.3em] text-xs mb-4">Connect With Us</p>
            <h1 className="text-5xl md:text-7xl font-heading text-white uppercase tracking-tighter mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Have questions or ready to book a service? Our team in Raipur is here to help you with all your automotive needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="py-24 bg-brand-charcoal">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="glass-card p-8 border-white/5 group hover:border-brand-blue/30 transition-all">
                  <div className="w-12 h-12 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-6 group-hover:bg-brand-blue group-hover:text-white transition-all">
                    <Phone size={24} />
                  </div>
                  <h3 className="text-white font-heading text-xl uppercase tracking-widest mb-2">Call Us</h3>
                  <p className="text-muted-foreground text-sm mb-4">Available during working hours</p>
                  <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="text-brand-blue font-bold hover:underline">
                    {PHONE}
                  </a>
                </div>

                <div className="glass-card p-8 border-white/5 group hover:border-brand-blue/30 transition-all">
                  <div className="w-12 h-12 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-6 group-hover:bg-brand-blue group-hover:text-white transition-all">
                    <MessageCircle size={24} />
                  </div>
                  <h3 className="text-white font-heading text-xl uppercase tracking-widest mb-2">WhatsApp</h3>
                  <p className="text-muted-foreground text-sm mb-4">Quick response for queries</p>
                  <a href={`https://wa.me/${WHATSAPP.replace(/\s/g, "")}`} className="text-brand-blue font-bold hover:underline">
                    {WHATSAPP}
                  </a>
                </div>

                <div className="glass-card p-8 border-white/5 group hover:border-brand-blue/30 transition-all">
                  <div className="w-12 h-12 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-6 group-hover:bg-brand-blue group-hover:text-white transition-all">
                    <Mail size={24} />
                  </div>
                  <h3 className="text-white font-heading text-xl uppercase tracking-widest mb-2">Email Us</h3>
                  <p className="text-muted-foreground text-sm mb-4">For detailed information</p>
                  <a href={`mailto:${EMAIL}`} className="text-brand-blue font-bold hover:underline">
                    {EMAIL}
                  </a>
                </div>

                <div className="glass-card p-8 border-white/5 group hover:border-brand-blue/30 transition-all">
                  <div className="w-12 h-12 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-6 group-hover:bg-brand-blue group-hover:text-white transition-all">
                    <Clock size={24} />
                  </div>
                  <h3 className="text-white font-heading text-xl uppercase tracking-widest mb-2">Working Hours</h3>
                  <p className="text-muted-foreground text-sm mb-4">Monday – Sunday</p>
                  <span className="text-brand-blue font-bold">{WORKING_HOURS}</span>
                </div>
              </div>

              <div className="glass-card p-8 border-white/5">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-heading text-xl uppercase tracking-widest mb-2">Visit Our Workshop</h3>
                    <p className="text-muted-foreground leading-relaxed">{ADDRESS}</p>
                    <div className="mt-6 aspect-video w-full rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.9664536254477!2d81.60492197593644!3d21.23315808046754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28de0380000001%3A0x6d8594248443354b!2sSunder%20Nagar%2C%20Raipur%2C%20Chhattisgarh!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="glass-card p-8 md:p-12 border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue opacity-5 rounded-full -mr-16 -mt-16 blur-3xl" />
                
                <h2 className="text-3xl font-heading text-white uppercase tracking-widest mb-8">Send a Message</h2>
                
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-20 h-20 rounded-full bg-brand-blue/20 flex items-center justify-center text-brand-blue mb-6">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-2xl font-heading text-white uppercase tracking-widest mb-4">Message Sent!</h3>
                    <p className="text-muted-foreground">Thank you for reaching out. Our team will contact you shortly.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground">Your Name</label>
                        <Input 
                          placeholder="John Doe" 
                          required 
                          className="bg-white/5 border-white/10 rounded-none h-12 text-white focus:border-brand-blue"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground">Phone Number</label>
                        <Input 
                          placeholder="+91 00000 00000" 
                          required 
                          type="tel"
                          className="bg-white/5 border-white/10 rounded-none h-12 text-white focus:border-brand-blue"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground">Service Required</label>
                      <Select>
                        <SelectTrigger className="bg-white/5 border-white/10 rounded-none h-12 text-white focus:border-brand-blue">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent className="bg-brand-charcoal border-white/10 text-white">
                          {SERVICES.map((s) => (
                            <SelectItem key={s.id} value={s.slug} className="focus:bg-brand-blue focus:text-white">
                              {s.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground">Your Message</label>
                      <Textarea 
                        placeholder="Tell us about your requirements..." 
                        required 
                        rows={5}
                        className="bg-white/5 border-white/10 rounded-none text-white focus:border-brand-blue resize-none"
                      />
                    </div>

                    <Button type="submit" className="w-full bg-brand-blue hover:bg-brand-blue/80 text-white rounded-none h-14 text-sm font-bold uppercase tracking-widest group">
                      <span className="flex items-center gap-2">
                        Send Message
                        <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </span>
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

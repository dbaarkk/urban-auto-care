"use client";

import { motion } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Send,
  CheckCircle2,
  Lock,
  Eye,
  EyeOff,
  X,
  User,
  Calendar
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
import { useState, useEffect } from "react";

interface Message {
  id: string;
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
  timestamp: string;
}

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showSecretPanel, setShowSecretPanel] = useState(false);
  const [secretName, setSecretName] = useState("");
  const [secretPhone, setSecretPhone] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: ""
  });

  useEffect(() => {
    const stored = localStorage.getItem("urbanAutoMessages");
    if (stored) {
      setMessages(JSON.parse(stored));
    }
  }, [showSecretPanel]);

  const handleSecretAccess = () => {
    if (secretName === "mridulsharma" && secretPhone === "8889822220") {
      setShowSecretPanel(true);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newMessage: Message = {
      id: Date.now().toString(),
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      service: formData.service,
      message: formData.message,
      timestamp: new Date().toLocaleString()
    };

    const existingMessages = JSON.parse(localStorage.getItem("urbanAutoMessages") || "[]");
    const updatedMessages = [...existingMessages, newMessage];
    localStorage.setItem("urbanAutoMessages", JSON.stringify(updatedMessages));

    setIsSubmitted(true);
    setFormData({ name: "", phone: "", email: "", service: "", message: "" });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const deleteMessage = (id: string) => {
    const updated = messages.filter(m => m.id !== id);
    setMessages(updated);
    localStorage.setItem("urbanAutoMessages", JSON.stringify(updated));
  };

  if (showSecretPanel) {
    return (
      <div className="flex flex-col w-full min-h-screen bg-brand-charcoal pt-24">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-heading text-white uppercase tracking-widest">Message Dashboard</h1>
            <Button 
              onClick={() => setShowSecretPanel(false)}
              variant="outline"
              className="border-white/20 hover:bg-white/10"
            >
              <X size={18} className="mr-2" /> Close Panel
            </Button>
          </div>
          
          <div className="mb-4 text-muted-foreground">
            Total Messages: {messages.length}
          </div>

          {messages.length === 0 ? (
            <div className="glass-card p-12 text-center border-white/5">
              <p className="text-muted-foreground">No messages yet</p>
            </div>
          ) : (
            <div className="grid gap-4">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="glass-card p-6 border-white/5 hover:border-brand-blue/30 transition-all"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-brand-blue/20 flex items-center justify-center text-brand-blue">
                        <User size={20} />
                      </div>
                      <div>
                        <h3 className="text-white font-bold">{msg.name}</h3>
                        <p className="text-xs text-muted-foreground flex items-center gap-1">
                          <Calendar size={12} /> {msg.timestamp}
                        </p>
                      </div>
                    </div>
                    <Button
                      onClick={() => deleteMessage(msg.id)}
                      variant="ghost"
                      size="sm"
                      className="text-red-400 hover:text-red-300 hover:bg-red-400/10"
                    >
                      <X size={16} />
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="bg-white/5 rounded-lg p-3">
                      <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Phone</p>
                      <p className="text-white text-sm">{msg.phone}</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Email</p>
                      <p className="text-white text-sm">{msg.email || "Not provided"}</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Service</p>
                      <p className="text-brand-blue text-sm font-semibold">{msg.service || "Not selected"}</p>
                    </div>
                  </div>
                  
                  <div className="bg-white/5 rounded-lg p-4">
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2">Message</p>
                    <p className="text-white/80 text-sm leading-relaxed">{msg.message}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

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
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="bg-white/5 border-white/10 rounded-xl h-12 text-white focus:border-brand-blue"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground">Phone Number</label>
                        <Input 
                          placeholder="+91 00000 00000" 
                          required 
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="bg-white/5 border-white/10 rounded-xl h-12 text-white focus:border-brand-blue"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground">Email (Optional)</label>
                      <Input 
                        placeholder="your@email.com" 
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="bg-white/5 border-white/10 rounded-xl h-12 text-white focus:border-brand-blue"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground">Service Required</label>
                      <Select onValueChange={(value) => setFormData({...formData, service: value})}>
                        <SelectTrigger className="bg-white/5 border-white/10 rounded-xl h-12 text-white focus:border-brand-blue">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent className="bg-brand-charcoal border-white/10 text-white">
                          {SERVICES.map((s) => (
                            <SelectItem key={s.id} value={s.title} className="focus:bg-brand-blue focus:text-white">
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
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="bg-white/5 border-white/10 rounded-xl text-white focus:border-brand-blue resize-none"
                      />
                    </div>

                    <Button type="submit" className="w-full bg-brand-blue hover:bg-brand-blue/80 text-white rounded-full h-14 text-sm font-bold uppercase tracking-widest group">
                      <span className="flex items-center gap-2">
                        Send Message
                        <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </span>
                    </Button>

                    {/* Secret Access Fields */}
                    <div className="pt-8 border-t border-white/5 mt-8">
                      <div className="flex items-center gap-2 mb-4">
                        <Lock size={14} className="text-muted-foreground" />
                        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground">Admin Access</span>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <Input 
                          placeholder="Username" 
                          value={secretName}
                          onChange={(e) => setSecretName(e.target.value)}
                          className="bg-white/5 border-white/10 rounded-xl h-10 text-white text-sm focus:border-brand-blue"
                        />
                        <Input 
                          placeholder="Access Code" 
                          type="password"
                          value={secretPhone}
                          onChange={(e) => setSecretPhone(e.target.value)}
                          onKeyDown={(e) => e.key === "Enter" && handleSecretAccess()}
                          className="bg-white/5 border-white/10 rounded-xl h-10 text-white text-sm focus:border-brand-blue"
                        />
                      </div>
                      <Button 
                        type="button"
                        onClick={handleSecretAccess}
                        variant="ghost"
                        className="w-full mt-3 text-muted-foreground hover:text-white text-xs"
                      >
                        Access Dashboard
                      </Button>
                    </div>
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

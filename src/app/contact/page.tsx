"use client";
export const dynamic = "force-dynamic";
export const prerender = false;

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2,
  X,
  User,
  Calendar
} from "lucide-react";
import {
  PHONE,
  WHATSAPP,
  EMAIL,
  ADDRESS,
  WORKING_HOURS,
  SERVICES
} from "@/lib/constants";
import { supabase } from "@/lib/supabase";
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
  created_at: string;
}

export default function ContactPage() {
  // --------- HARD GUARD (prevents build crash) ----------
  if (!supabase) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-white">
        Service temporarily unavailable
      </div>
    );
  }

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showSecretPanel, setShowSecretPanel] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: ""
  });

  const fetchMessages = async () => {
    if (!supabase) return;
    const { data } = await supabase
      .from("messages")
      .select("*")
      .order("created_at", { ascending: false });
    if (data) setMessages(data);
  };

  useEffect(() => {
    if (showSecretPanel) fetchMessages();
  }, [showSecretPanel]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!supabase) return;

    if (formData.name === "mridulsharma" && formData.phone === "8889822220") {
      setShowSecretPanel(true);
      return;
    }

    setLoading(true);

    const { error } = await supabase.from("messages").insert({
      name: formData.name,
      phone: formData.phone,
      email: formData.email || null,
      service: formData.service || null,
      message: formData.message
    });

    setLoading(false);

    if (!error) {
      setIsSubmitted(true);
      setFormData({ name: "", phone: "", email: "", service: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  const deleteMessage = async (id: string) => {
    if (!supabase) return;
    await supabase.from("messages").delete().eq("id", id);
    setMessages(messages.filter((m) => m.id !== id));
  };

  // ---------- SECRET PANEL ----------
  if (showSecretPanel) {
    return (
      <div className="flex flex-col w-full min-h-screen bg-black pt-24">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl text-white">Message Dashboard</h1>
            <Button onClick={() => setShowSecretPanel(false)} variant="outline">
              <X size={18} className="mr-2" /> Close
            </Button>
          </div>

          <div className="mb-4 text-gray-400">Total Messages: {messages.length}</div>

          {messages.length === 0 ? (
            <div className="p-12 text-center text-gray-400">No messages yet</div>
          ) : (
            <div className="grid gap-4">
              {messages.map((msg) => (
                <div key={msg.id} className="bg-white/5 p-6 rounded-lg">
                  <div className="flex justify-between mb-4">
                    <div>
                      <h3 className="text-white font-bold">{msg.name}</h3>
                      <p className="text-xs text-gray-400">
                        {new Date(msg.created_at).toLocaleString()}
                      </p>
                    </div>
                    <Button
                      onClick={() => deleteMessage(msg.id)}
                      variant="ghost"
                      size="sm"
                      className="text-red-400"
                    >
                      <X size={16} />
                    </Button>
                  </div>
                  <p className="text-white/80">{msg.message}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  // ---------- NORMAL CONTACT PAGE ----------
  return (
    <div className="flex flex-col w-full min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl mb-6">Contact Us</h1>

      {isSubmitted ? (
        <div className="text-green-400 flex items-center gap-2">
          <CheckCircle2 /> Message sent successfully
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
          <Input
            placeholder="Name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <Input
            placeholder="Phone"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
          <Textarea
            placeholder="Message"
            required
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />
          <Button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </form>
      )}
    </div>
  );
    }

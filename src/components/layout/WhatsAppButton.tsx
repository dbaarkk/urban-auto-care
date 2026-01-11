"use client";

import { MessageCircle } from "lucide-react";
import { WHATSAPP } from "@/lib/constants";
import { motion } from "framer-motion";

export function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${WHATSAPP.replace(/\s/g, "")}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ y: -5 }}
    >
      <MessageCircle size={28} />
      <span className="absolute right-full mr-3 bg-white text-black text-xs font-bold py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl border border-black/5">
        Chat with us
      </span>
    </motion.a>
  );
}

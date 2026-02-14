"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Download, Smartphone, ShieldCheck, Globe, AlertTriangle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const APK_URL = "https://oarwluyxadtjtpyaveqf.supabase.co/storage/v1/object/public/apk/urbanauto.apk";

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-background pt-28 pb-20">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-bold uppercase tracking-widest mb-6">
            <Smartphone size={14} />
            Mobile App
          </div>
          <h1 className="text-4xl md:text-5xl font-heading text-white uppercase tracking-tighter mb-4">
            Download <span className="text-brand-blue">Our App</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Get the Urban Auto experience on your Android device
          </p>
        </motion.div>

        {/* Warning Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-6 md:p-8 mb-8"
        >
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-lg bg-yellow-500/20 shrink-0">
              <AlertTriangle className="text-yellow-500" size={24} />
            </div>
            <div>
              <h2 className="text-xl font-heading text-white uppercase tracking-tight mb-3">
                Why you may see &quot;Scan app&quot; warning
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                When installing the APK directly, Android/Play Protect may show a &quot;Scan app&quot; or warning message. This happens because the app is installed outside the Play Store. The app is safe and signed, and this scan is just Android&apos;s normal security check.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Installation Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-card border border-border rounded-2xl p-6 md:p-8 mb-8"
        >
          <h2 className="text-xl font-heading text-white uppercase tracking-tight mb-6 flex items-center gap-3">
            <ShieldCheck className="text-brand-blue" size={24} />
            How to install the APK
          </h2>
          <div className="space-y-5">
            {[
              "Download the APK from our official website.",
              "Open the downloaded file from your browser.",
              "If Play Protect shows a scan message, you can choose to scan the app or continue installing anyway.",
              "Wait for installation to finish, then open the app normally.",
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-brand-blue/20 border border-brand-blue/30 flex items-center justify-center shrink-0">
                  <span className="text-brand-blue font-bold text-sm">{i + 1}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed pt-1">{step}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-start gap-4 bg-green-500/10 border border-green-500/20 rounded-xl p-4">
            <CheckCircle className="text-green-500 shrink-0 mt-0.5" size={20} />
            <p className="text-muted-foreground text-sm">
              The Android scan may show a message that the app looks safe.
            </p>
          </div>
        </motion.div>

        {/* Download Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center space-y-4"
        >
          <Button
            asChild
            size="lg"
            className="bg-brand-blue hover:bg-brand-blue/80 text-white rounded-full uppercase tracking-widest font-bold px-10 py-6 text-base"
          >
            <a href={APK_URL} download="urbanauto.apk">
              <Download size={20} className="mr-2" />
              Download APK
            </a>
          </Button>

          <div className="pt-2">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-brand-blue/50 text-brand-blue hover:bg-brand-blue hover:text-white rounded-full uppercase tracking-widest text-xs font-bold px-8"
            >
              <a href="https://app.theurbanauto.com" target="_blank" rel="noopener noreferrer">
                <Globe size={16} className="mr-2" />
                Or directly use our webapp
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

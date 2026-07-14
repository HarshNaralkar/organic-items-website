"use client";

import React from "react";
import { Phone, MessageSquare, MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const ease = [0.215, 0.61, 0.355, 1.0] as const;

const whatsappUrl = "https://wa.me/919820098200?text=Hello!%20I%27m%20interested%20in%20ordering%20from%20The%20Urban%20Peasant.";
const phoneUrl = "tel:+919820098200";

const marqueeWords = [
  "Organic", "Chemical-Free", "Women-Owned", "Small Batches", "Farm Fresh",
  "Lower Parel", "Mumbai Delivery", "Artisanal", "Ethically Sourced",
];

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-forest-green py-24 md:py-36">

      {/* Decorative BG letter */}
      <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-[0.04]">
        <span className="text-serif font-bold text-primary-bg" style={{ fontSize: "clamp(200px,35vw,600px)", lineHeight: 0.85 }}>
          UPF
        </span>
      </div>

      {/* Accent lines */}
      <div className="absolute top-0 inset-x-0 h-1 bg-accent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-primary-bg/10" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-14 flex flex-col items-center text-center gap-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease }}
          className="flex flex-col items-center gap-6"
        >
          <span className="inline-flex items-center gap-2 border border-accent/40 text-accent text-mono text-[10px] uppercase tracking-[0.22em] px-5 py-2 font-bold">
            <span className="pulse-dot w-1.5 h-1.5 rounded-full bg-accent" />
            Nourish Your Family
          </span>

          <h2 className="text-serif font-normal text-primary-bg leading-[1.0]" style={{ fontSize: "clamp(42px,7vw,96px)" }}>
            Healthy living
            <br />
            <span className="italic text-natural-beige font-light">begins in your kitchen.</span>
          </h2>

          <p className="text-sans text-base text-primary-bg/70 font-light leading-[1.8] max-w-lg">
            Visit our Lower Parel farm shop or reach out directly for doorstep delivery across Mumbai. Pure food, delivered with honesty.
          </p>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease, delay: 0.15 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#visit"
            className="group flex items-center gap-2.5 bg-primary-bg text-forest-green text-mono text-[10.5px] uppercase tracking-widest px-9 py-4 hover:bg-natural-beige transition-all duration-300 shadow-lg"
          >
            <MapPin className="w-4 h-4 text-warm-clay" />
            Visit Us
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 bg-[#22c55e] text-white text-mono text-[10.5px] uppercase tracking-widest px-9 py-4 hover:bg-[#16a34a] transition-all duration-300 shadow-[0_8px_24px_rgba(34,197,94,0.35)]"
          >
            <MessageSquare className="w-4 h-4" />
            WhatsApp Us
          </a>

          <a
            href={phoneUrl}
            className="flex items-center gap-2.5 border-2 border-primary-bg/25 text-primary-bg text-mono text-[10.5px] uppercase tracking-widest px-9 py-4 hover:border-primary-bg/60 hover:bg-primary-bg/8 transition-all duration-300"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
        </motion.div>

        {/* Trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-mono text-[9px] uppercase tracking-[0.25em] text-primary-bg/40 mt-4"
        >
          Deliveries dispatched daily · Across Greater Mumbai
        </motion.p>
      </div>

      {/* Marquee ticker */}
      <div className="absolute bottom-0 inset-x-0 overflow-hidden border-t border-primary-bg/10 py-3 bg-deep-green/60">
        <div className="marquee-track">
          {[...marqueeWords, ...marqueeWords].map((word, i) => (
            <span key={i} className="text-mono text-[9px] uppercase tracking-[0.2em] text-primary-bg/40 mx-6 whitespace-nowrap">
              {word} <span className="text-accent mx-3">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, ShieldCheck, Leaf, Heart, Sparkles, Truck } from "lucide-react";

const ease = [0.215, 0.61, 0.355, 1.0] as const;

const items = [
  {
    num: "01",
    title: "100% Organic Certified",
    icon: Award,
    desc: "Our farming partners follow strict organic standards. No chemical fertilizers, no synthetic pesticides — and absolutely no compromises.",
    accent: "text-accent",
  },
  {
    num: "02",
    title: "Zero Preservatives or Chemicals",
    icon: ShieldCheck,
    desc: "Every product in its native form. No sulfur in sugar, no chemicals in ghee, no synthetic preservatives in pickles.",
    accent: "text-warm-clay",
  },
  {
    num: "03",
    title: "Farm Fresh Integrity",
    icon: Leaf,
    desc: "Minimal storage time. Fresh vegetables harvested daily; stone-ground grains milled fresh so nutrients stay alive.",
    accent: "text-light-sage",
  },
  {
    num: "04",
    title: "Ethically Sourced & Fair Trade",
    icon: Heart,
    desc: "Fair prices to local farming cooperatives — empowering small farmers, sustaining rural ecosystems, keeping traditions alive.",
    accent: "text-accent",
  },
  {
    num: "05",
    title: "Women-Owned Family Business",
    icon: Sparkles,
    desc: "Driven by women leaders. Rooted in traditional kitchen wisdom and authentic family recipes passed down over generations.",
    accent: "text-warm-clay",
  },
  {
    num: "06",
    title: "Mumbai-Wide Delivery",
    icon: Truck,
    desc: "Hand-delivered from our Lower Parel shop across all of Mumbai, in plastic-free glass or biodegradable containers.",
    accent: "text-light-sage",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="relative py-24 md:py-36 bg-parchment overflow-hidden">

      {/* Top accent strip */}
      <div className="absolute top-0 inset-x-0 h-1 bg-forest-green" />

      {/* Giant watermark */}
      <div aria-hidden="true" className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none overflow-hidden opacity-[0.04]">
        <span className="text-serif font-bold text-typography-color" style={{ fontSize: "clamp(140px,22vw,380px)", lineHeight: 0.85 }}>
          WHY
        </span>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-14">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div>
            <span className="section-rule" />
            <span className="text-mono text-[10px] uppercase tracking-[0.22em] text-warm-clay font-bold block mb-3">
              Our Standard
            </span>
            <h2 className="text-serif font-normal leading-[1.06]" style={{ fontSize: "clamp(36px,5vw,64px)" }}>
              Honest food,{" "}
              <br />
              <span className="italic text-forest-green font-light">without compromise.</span>
            </h2>
          </div>
          <p className="text-sans text-sm text-muted-text font-light leading-relaxed max-w-sm lg:text-right">
            We hold ourselves to higher culinary and ethical standards — here is how we verify that trust every single day.
          </p>
        </div>

        {/* Grid cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: idx * 0.08, ease }}
                className="bg-secondary-bg border border-natural-beige/50 p-8 flex flex-col gap-5 card-lift group relative overflow-hidden"
              >
                {/* Number watermark */}
                <div aria-hidden="true" className="absolute top-3 right-4 text-serif font-bold text-natural-beige/60 select-none pointer-events-none" style={{ fontSize: "64px", lineHeight: 1 }}>
                  {item.num}
                </div>

                {/* Icon */}
                <div className={`w-12 h-12 flex items-center justify-center bg-primary-bg border border-natural-beige/60 ${item.accent} group-hover:bg-forest-green group-hover:text-primary-bg group-hover:border-forest-green transition-all duration-300`}>
                  <Icon className="w-5 h-5" />
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-serif text-xl font-medium text-typography-color leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sans text-[13px] text-muted-text font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className={`h-0.5 w-0 bg-forest-green group-hover:w-full transition-all duration-500 ease-out mt-auto`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Leaf } from "lucide-react";

const ease = [0.215, 0.61, 0.355, 1.0] as const;

export function BrandStory() {
  return (
    <section id="story" className="relative overflow-hidden bg-deep-green py-24 md:py-36">

      {/* ── Decorative background serif text ── */}
      <div aria-hidden="true" className="absolute right-0 bottom-0 pointer-events-none select-none overflow-hidden opacity-[0.04]">
        <span className="text-serif font-bold text-primary-bg" style={{ fontSize: "clamp(120px,20vw,320px)", lineHeight: 0.85 }}>
          FARM
        </span>
      </div>

      {/* ── Diagonal accent strip ── */}
      <div className="absolute top-0 right-0 w-1/3 h-1 bg-accent" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 items-center">

          {/* ── Left: Image stack ── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.1, ease }}
            className="lg:col-span-6 relative h-[420px] md:h-[580px]"
          >
            {/* Shadow / depth card behind */}
            <div className="absolute -bottom-5 -right-5 w-full h-full border border-accent/20" />

            {/* Main image */}
            <div className="relative w-full h-full img-zoom overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
              <Image
                src="/images/brand_story.png"
                alt="Hands crafting stone ground flour in a wooden bowl"
                fill
                sizes="(max-width:1024px) 100vw, 50vw"
                className="object-cover zoom-target"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-green/60 via-transparent to-transparent" />
            </div>

            {/* Floating quote block */}
            <div className="absolute -bottom-6 left-6 md:left-10 right-6 bg-forest-green border-l-4 border-accent p-5 shadow-xl z-10">
              <p className="text-serif text-base italic text-primary-bg/90 leading-relaxed">
                "Quality over quantity, always. Every jar we fill is a promise we keep."
              </p>
              <span className="text-mono text-[9px] uppercase tracking-widest text-accent mt-2 block font-bold">
                — The Founders
              </span>
            </div>
          </motion.div>

          {/* ── Right: Story text ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.1, ease, delay: 0.15 }}
            className="lg:col-span-6 flex flex-col gap-8 pt-6 lg:pt-0"
          >
            <div>
              <span className="section-rule" />
              <span className="text-mono text-[10px] uppercase tracking-[0.22em] text-accent font-bold mb-4 block">
                Our Roots
              </span>
              <h2 className="text-serif font-normal leading-[1.08] text-primary-bg">
                <span className="block" style={{ fontSize: "clamp(36px, 4.5vw, 58px)" }}>
                  Born from respect
                </span>
                <span className="block italic font-light text-natural-beige" style={{ fontSize: "clamp(34px, 4.2vw, 54px)" }}>
                  for the honest soil.
                </span>
              </h2>
            </div>

            <div className="flex flex-col gap-5 text-primary-bg/75 text-sans text-[15px] leading-[1.85] font-light">
              <p>
                The Urban Peasant was founded with one belief: nourishment should be simple, pure, and grounded in respect for nature. We watched the food industry speed up — prioritising shelf life over human life. We chose a different path.
              </p>
              <p>
                As a women-owned family business, we bridge the gap between traditional Indian farming wisdom and modern Mumbai homes. We work directly with small-holder farmers who cultivate their land without chemical inputs.
              </p>
            </div>

            {/* Three pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 border-t border-primary-bg/15 pt-8">
              {[
                { icon: <Leaf className="w-5 h-5" />, label: "100% Organic", sub: "No chemicals ever" },
                { icon: <Leaf className="w-5 h-5" />, label: "Small Batches", sub: "Never mass produced" },
                { icon: <Leaf className="w-5 h-5" />, label: "Women-Owned", sub: "Family run since 2018" },
              ].map(({ icon, label, sub }) => (
                <div key={label} className="flex flex-col gap-2">
                  <div className="text-accent">{icon}</div>
                  <span className="text-mono text-[10px] uppercase tracking-widest text-primary-bg font-semibold">
                    {label}
                  </span>
                  <span className="text-sans text-xs text-primary-bg/55 font-light">{sub}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

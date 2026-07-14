"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Star } from "lucide-react";
import Image from "next/image";

const ease = [0.215, 0.61, 0.355, 1.0] as const;

export function Hero() {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.13, delayChildren: 0.25 } },
  };
  const itemUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease } },
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-primary-bg">

      {/* ── Large decorative background letters ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-end pr-6 pointer-events-none select-none overflow-hidden"
      >
        <span
          className="text-serif font-bold leading-none text-natural-beige/30 hidden xl:block"
          style={{ fontSize: "clamp(220px, 28vw, 420px)", lineHeight: 0.85 }}
        >
          UP
        </span>
      </div>

      {/* ── Subtle diagonal texture bands ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-light-sage/12" />
        <div className="absolute bottom-0 left-0 w-1/3 h-[40%] bg-natural-beige/25" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-14 w-full pt-28 pb-16 md:pt-0 md:pb-0 md:py-0 flex items-center min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center w-full">

          {/* ── Left: Typography ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 xl:col-span-5 flex flex-col gap-7 xl:gap-8"
          >
            {/* Badge */}
            <motion.div variants={itemUp} className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 border border-forest-green/25 bg-forest-green/6 text-forest-green text-mono text-[10px] uppercase tracking-[0.22em] px-4 py-2 font-semibold">
                <span className="pulse-dot w-1.5 h-1.5 rounded-full bg-forest-green" />
                Organic · Women-Owned · Since 2018
              </span>
            </motion.div>

            {/* H1 */}
            <motion.div variants={itemUp}>
              <h1 className="text-serif font-normal leading-[0.98] tracking-tight">
                <span
                  className="block text-typography-color"
                  style={{ fontSize: "clamp(56px, 7.5vw, 112px)" }}
                >
                  Eat Pure.
                </span>
                <span
                  className="block italic text-forest-green font-light"
                  style={{ fontSize: "clamp(52px, 7vw, 104px)" }}
                >
                  Live Naturally.
                </span>
              </h1>
            </motion.div>

            {/* Sub */}
            <motion.p
              variants={itemUp}
              className="text-sans text-base md:text-[17px] text-muted-text max-w-md leading-[1.75] font-light"
            >
              Naturally grown foods, handcrafted organic products & wholesome living — delivered with honesty and care from our Lower Parel boutique in Mumbai.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemUp} className="flex flex-col sm:flex-row gap-4 pt-1">
              <a
                href="#categories"
                className="group flex items-center justify-center gap-2.5 bg-forest-green text-primary-bg text-mono text-[10.5px] uppercase tracking-widest px-9 py-4.5 hover:bg-dark-olive transition-all duration-300 shadow-[0_8px_28px_rgba(49,93,57,0.28)] hover:shadow-[0_14px_40px_rgba(49,93,57,0.38)] hover:-translate-y-0.5"
                style={{ paddingTop: "1.125rem", paddingBottom: "1.125rem" }}
              >
                Explore Products
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>
              <a
                href="#visit"
                className="group flex items-center justify-center gap-2.5 border-2 border-earth-brown/25 text-typography-color text-mono text-[10.5px] uppercase tracking-widest px-9 hover:border-forest-green/40 hover:bg-natural-beige/30 transition-all duration-300"
                style={{ paddingTop: "1.125rem", paddingBottom: "1.125rem" }}
              >
                Visit Store
                <MapPin className="w-3.5 h-3.5 text-warm-clay transition-transform duration-300 group-hover:scale-110" />
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={itemUp}
              className="grid grid-cols-3 border-t-2 border-natural-beige/60 pt-8 mt-2 gap-2"
            >
              {[
                { num: "100%", label: "Chemical Free" },
                { num: "5.0★", label: "Google Rating" },
                { num: "200+", label: "Products" },
              ].map(({ num, label }) => (
                <div key={label} className="flex flex-col gap-1">
                  <span className="text-serif text-2xl md:text-[2rem] text-forest-green font-semibold stat-number leading-none">
                    {num}
                  </span>
                  <span className="text-mono text-[9px] uppercase tracking-[0.2em] text-muted-text">
                    {label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: Layered images ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.3, ease, delay: 0.2 }}
            className="lg:col-span-6 xl:col-span-7 relative h-[420px] sm:h-[560px] md:h-[680px] lg:h-[80vh] lg:max-h-[820px]"
          >
            {/* Main image – full bleed */}
            <div className="absolute inset-0 img-zoom overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.1)]">
              <Image
                src="/images/hero_harvest.png"
                alt="Freshly harvested organic vegetables in a woven basket"
                fill
                priority
                sizes="(max-width:1024px) 100vw, 55vw"
                className="object-cover zoom-target"
              />
              {/* Rich gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-deep-green/55 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-bg/20 to-transparent" />
            </div>

            {/* Floating bottom card */}
            <div className="absolute bottom-6 left-6 right-6 md:left-8 md:right-8 md:bottom-8 bg-parchment/97 backdrop-blur-md border border-natural-beige/50 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.1)] flex justify-between items-center gap-4 z-10">
              <div>
                <span className="text-mono text-[8.5px] uppercase tracking-[0.2em] text-warm-clay font-bold block mb-1">
                  Lower Parel Boutique
                </span>
                <span className="text-serif text-base font-medium text-typography-color">
                  Mathuradas Mill Compound
                </span>
                <span className="text-sans text-xs text-muted-text block mt-0.5">
                  Shop No.3, Shree Siddhivinayak Estate
                </span>
              </div>
              <div className="flex-shrink-0 text-right">
                <div className="flex items-center gap-1 justify-end mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-sans text-xs font-semibold text-forest-green block">5.0</span>
                <span className="text-mono text-[8.5px] uppercase tracking-wider text-muted-text">
                  87+ Reviews
                </span>
              </div>
            </div>

            {/* Small floating accent badge – top right */}
            <div className="absolute top-6 right-6 md:top-8 md:right-8 bg-forest-green text-primary-bg px-4 py-3 shadow-lg z-10">
              <span className="text-mono text-[9px] uppercase tracking-widest font-bold block">Open Daily</span>
              <span className="text-serif text-sm italic block mt-0.5">9 AM – 8 PM</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-mono text-[8.5px] uppercase tracking-widest text-muted-text">Scroll</span>
        <div className="w-px h-10 bg-warm-clay/40 relative overflow-hidden">
          <motion.div
            className="absolute top-0 w-full bg-warm-clay"
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            style={{ height: "40%" }}
          />
        </div>
      </motion.div>
    </section>
  );
}

"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Category {
  id: string;
  title: string;
  subtitle: string;
  items: string[];
  span: string;
  bg: string;
  border: string;
  text: string;
  sub: string;
  dot: string;
  tag: string;
  tagStyle: string;
}

const ease = [0.215, 0.61, 0.355, 1.0] as const;

const categories: Category[] = [
  {
    id: "flours",
    title: "Stone Ground Flours",
    subtitle: "Ancient Grains, Modern Nutrition",
    items: ["Khapli Wheat Atta", "Multigrain Mix", "Gluten-Free Blend"],
    span: "md:col-span-7",
    bg: "bg-forest-green",
    border: "border-forest-green",
    text: "text-primary-bg",
    sub: "text-primary-bg/60",
    dot: "bg-accent",
    tag: "BESTSELLER",
    tagStyle: "bg-accent text-deep-green",
  },
  {
    id: "ghee-honey",
    title: "Artisanal Ghee & Honey",
    subtitle: "Pure A2 & Raw Forest Honey",
    items: ["A2 Bilona Cow Ghee", "Wild Forest Honey", "Sidr Honey"],
    span: "md:col-span-5",
    bg: "bg-natural-beige",
    border: "border-natural-beige",
    text: "text-typography-color",
    sub: "text-muted-text",
    dot: "bg-forest-green",
    tag: "PURE",
    tagStyle: "bg-forest-green text-primary-bg",
  },
  {
    id: "oils",
    title: "Cold Pressed Oils",
    subtitle: "Wood-Pressed, Nutrition-Intact",
    items: ["Kachi Ghani Mustard Oil", "Cold Pressed Coconut Oil", "Sesame Oil"],
    span: "md:col-span-5",
    bg: "bg-parchment",
    border: "border-natural-beige",
    text: "text-typography-color",
    sub: "text-muted-text",
    dot: "bg-warm-clay",
    tag: "ARTISAN",
    tagStyle: "bg-warm-clay text-primary-bg",
  },
  {
    id: "millets",
    title: "Ancient Millets",
    subtitle: "Nutrient-Dense Superfood Grains",
    items: ["Finger Millet (Ragi)", "Pearl Millet (Bajra)", "Millet Noodles"],
    span: "md:col-span-7",
    bg: "bg-earth-brown",
    border: "border-earth-brown",
    text: "text-primary-bg",
    sub: "text-primary-bg/60",
    dot: "bg-accent",
    tag: "SUPERFOOD",
    tagStyle: "bg-accent text-deep-green",
  },
  {
    id: "preserves",
    title: "Preserves & Pickles",
    subtitle: "Handcrafted Traditional Jars",
    items: ["Sun-Dried Mango Pickle", "Damask Rose Gulkand", "Garlic Herb Infusion"],
    span: "md:col-span-6",
    bg: "bg-light-sage",
    border: "border-light-sage",
    text: "text-typography-color",
    sub: "text-muted-text",
    dot: "bg-earth-brown",
    tag: "TRADITIONAL",
    tagStyle: "bg-earth-brown text-primary-bg",
  },
  {
    id: "fresh",
    title: "Fresh Farm Produce",
    subtitle: "Harvested Daily, Chemical Free",
    items: ["Native Leafy Greens", "Heirloom Tomatoes", "Seasonal Fruits & Herbs"],
    span: "md:col-span-6",
    bg: "bg-secondary-bg",
    border: "border-natural-beige/60",
    text: "text-typography-color",
    sub: "text-muted-text",
    dot: "bg-forest-green",
    tag: "FRESH DAILY",
    tagStyle: "bg-forest-green text-primary-bg",
  },
];

export function Categories() {
  return (
    <section id="categories" className="py-24 md:py-32 bg-primary-bg">
      <div className="max-w-[1440px] mx-auto px-6 md:px-14">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="section-rule" />
            <span className="text-mono text-[10px] uppercase tracking-[0.22em] text-warm-clay font-bold block mb-3">
              The Collection
            </span>
            <h2 className="text-serif font-normal leading-[1.05]" style={{ fontSize: "clamp(36px,5vw,64px)" }}>
              Handcrafted{" "}
              <span className="italic text-forest-green font-light">Pantry Staples</span>
            </h2>
          </div>
          <p className="text-sans text-sm text-muted-text font-light leading-relaxed max-w-xs md:text-right">
            Every item sourced directly, packed in eco-conscious glass, and quality-vetted by our family.
          </p>
        </div>

        {/* Masonry grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.75, delay: idx * 0.07, ease }}
              className={`${cat.span} ${cat.bg} border ${cat.border} card-lift p-8 md:p-10 flex flex-col justify-between min-h-[300px] md:min-h-[340px] relative overflow-hidden group`}
            >
              {/* Background giant letter */}
              <div
                aria-hidden="true"
                className="absolute -bottom-4 -right-3 pointer-events-none select-none opacity-[0.06]"
              >
                <span className={`text-serif font-bold ${cat.text}`} style={{ fontSize: "140px", lineHeight: 1 }}>
                  {cat.title[0]}
                </span>
              </div>

              {/* Top row */}
              <div className="flex items-start justify-between gap-4 relative z-10">
                <div className="flex flex-col gap-1.5">
                  <span className={`inline-flex items-center text-mono text-[8px] uppercase tracking-widest px-2.5 py-1 font-bold ${cat.tagStyle}`}>
                    {cat.tag}
                  </span>
                  <span className={`text-mono text-[9px] uppercase tracking-wider ${cat.sub} mt-1`}>
                    {cat.subtitle}
                  </span>
                </div>
                <a
                  href="#visit"
                  className={`flex-shrink-0 p-2.5 border transition-all duration-300 ${
                    cat.bg.includes("forest") || cat.bg.includes("earth")
                      ? "border-primary-bg/20 text-primary-bg hover:bg-primary-bg hover:text-typography-color"
                      : "border-typography-color/15 text-typography-color hover:bg-typography-color hover:text-primary-bg"
                  }`}
                  aria-label="Visit store"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              {/* Title */}
              <div className="relative z-10 my-6">
                <h3
                  className={`text-serif font-normal leading-tight ${cat.text}`}
                  style={{ fontSize: "clamp(26px,3vw,38px)" }}
                >
                  {cat.title}
                </h3>
              </div>

              {/* Item list */}
              <div className={`border-t ${cat.bg.includes("forest") || cat.bg.includes("earth") ? "border-primary-bg/10" : "border-typography-color/8"} pt-5 relative z-10`}>
                <ul className="flex flex-col gap-2">
                  {cat.items.map((item) => (
                    <li key={item} className={`text-mono text-[10px] uppercase tracking-wider flex items-center gap-2.5 ${cat.sub}`}>
                      <span className={`w-1 h-1 rounded-full flex-shrink-0 ${cat.dot}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

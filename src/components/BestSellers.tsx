"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

const ease = [0.215, 0.61, 0.355, 1.0] as const;

const products = [
  {
    id: "a2-ghee",
    name: "Bilona A2 Ghee",
    category: "Ghee & Fats",
    image: "/images/product_ghee.png",
    desc: "Churned from grass-fed Gir cow curd by hand using the traditional Bilona method.",
    tag: "Artisan Quality",
    bg: "bg-natural-beige",
  },
  {
    id: "honey",
    name: "Raw Wildflower Honey",
    category: "Sweeteners",
    image: "/images/product_honey.png",
    desc: "Unfiltered, unheated honey collected by tribal farmers from wild forest hives.",
    tag: "100% Pure",
    bg: "bg-light-sage",
  },
  {
    id: "atta",
    name: "Stone Ground Atta",
    category: "Grains & Flours",
    image: "/images/brand_story.png",
    desc: "Slow stone-ground Khapli wheat preserving wheat germ, bran, and essential oils.",
    tag: "High Fibre",
    bg: "bg-parchment",
  },
  {
    id: "gulkand",
    name: "Sun-Cooked Gulkand",
    category: "Preserves",
    image: "/images/product_honey.png",
    desc: "Damask Rose petals layered with rock sugar and sun-cooked over 40 days.",
    tag: "Traditional",
    bg: "bg-natural-beige",
  },
  {
    id: "cold-oil",
    name: "Wood-Pressed Coconut Oil",
    category: "Cold Pressed Oils",
    image: "/images/hero_harvest.png",
    desc: "Extracted in traditional wooden mills at low temperature to retain antioxidants.",
    tag: "Kachi Ghani",
    bg: "bg-light-sage",
  },
];

export function BestSellers() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const onScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setProgress((scrollLeft / (scrollWidth - clientWidth)) * 100);
  };

  const scroll = (dir: "l" | "r") => {
    scrollRef.current?.scrollBy({ left: dir === "l" ? -480 : 480, behavior: "smooth" });
  };

  return (
    <section id="bestsellers" className="py-24 md:py-32 bg-deep-green overflow-hidden relative">

      {/* Accent corner */}
      <div className="absolute top-0 left-0 w-1 h-full bg-accent/30" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-14">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="block w-12 h-0.5 bg-accent mb-4" />
            <span className="text-mono text-[10px] uppercase tracking-[0.22em] text-accent font-bold block mb-3">
              Artisan Selections
            </span>
            <h2 className="text-serif font-normal leading-[1.05] text-primary-bg" style={{ fontSize: "clamp(36px,5vw,64px)" }}>
              Our{" "}
              <span className="italic text-natural-beige font-light">Best Sellers</span>
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll("l")}
              className="p-3.5 border border-primary-bg/20 text-primary-bg hover:bg-primary-bg/10 transition-colors"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("r")}
              className="p-3.5 bg-accent text-deep-green hover:bg-warm-clay hover:text-primary-bg transition-colors"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scroll track */}
        <div
          ref={scrollRef}
          onScroll={onScroll}
          className="flex gap-6 overflow-x-auto no-scrollbar pb-2 snap-x snap-mandatory"
        >
          {products.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: idx * 0.07, ease }}
              className="min-w-[300px] sm:min-w-[360px] md:min-w-[400px] snap-start flex flex-col group flex-shrink-0"
            >
              {/* Image box */}
              <div className={`relative aspect-[3/4] w-full img-zoom overflow-hidden ${p.bg} border border-natural-beige/20`}>
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="400px"
                  className="object-cover zoom-target opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-green/70 via-transparent to-transparent" />

                {/* Tag badge */}
                <div className="absolute top-4 left-4 bg-accent text-deep-green text-mono text-[8px] uppercase tracking-widest px-3 py-1.5 font-bold">
                  {p.tag}
                </div>

                {/* Bottom name */}
                <div className="absolute bottom-0 inset-x-0 p-5 translate-y-1 group-hover:translate-y-0 transition-transform duration-400">
                  <span className="text-serif text-xl font-medium text-primary-bg block">{p.name}</span>
                </div>
              </div>

              {/* Card text */}
              <div className="pt-5 flex flex-col gap-1.5">
                <span className="text-mono text-[9px] uppercase tracking-widest text-warm-clay font-bold">
                  {p.category}
                </span>
                <p className="text-sans text-[13px] text-primary-bg/70 font-light leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="mt-10 w-full h-[1px] bg-primary-bg/10 relative">
          <motion.div
            className="absolute top-0 left-0 h-full bg-accent"
            style={{ width: `${progress}%` }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          />
        </div>
      </div>
    </section>
  );
}

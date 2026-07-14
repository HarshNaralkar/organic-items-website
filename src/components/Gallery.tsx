"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ease = [0.215, 0.61, 0.355, 1.0] as const;

const items = [
  {
    id: "g1",
    src: "/images/store_front.png",
    alt: "Our Lower Parel boutique shop",
    label: "Our Lower Parel Shop",
    tag: "Storefront",
    aspect: "aspect-[4/5]",
    order: "lg:order-1",
  },
  {
    id: "g2",
    src: "/images/brand_story.png",
    alt: "Stone-grinding flour process",
    label: "Milling Stone Ground Flour",
    tag: "Process",
    aspect: "aspect-[1/1]",
    order: "lg:order-2",
  },
  {
    id: "g3",
    src: "/images/product_ghee.png",
    alt: "A2 Ghee glass jar packaging",
    label: "Eco-Conscious Glass Jars",
    tag: "Packaging",
    aspect: "aspect-[3/4]",
    order: "lg:order-3",
  },
  {
    id: "g4",
    src: "/images/hero_harvest.png",
    alt: "Fresh seasonal farm produce",
    label: "Fresh Seasonal Crops",
    tag: "Farm Life",
    aspect: "aspect-[4/3]",
    order: "lg:order-4",
  },
  {
    id: "g5",
    src: "/images/product_honey.png",
    alt: "Raw forest honey close up",
    label: "Direct Forest Honey",
    tag: "Ingredients",
    aspect: "aspect-[3/4]",
    order: "lg:order-5",
  },
  {
    id: "g6",
    src: "/images/hero_harvest.png",
    alt: "Organic greens close up",
    label: "Chemical-Free Harvesting",
    tag: "Organic Life",
    aspect: "aspect-[1/1]",
    order: "lg:order-6",
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-primary-bg">
      <div className="max-w-[1440px] mx-auto px-6 md:px-14">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-rule mx-auto" />
          <span className="text-mono text-[10px] uppercase tracking-[0.22em] text-warm-clay font-bold block mb-3">
            The Journal
          </span>
          <h2 className="text-serif font-normal leading-[1.06] mb-4" style={{ fontSize: "clamp(36px,5vw,64px)" }}>
            Framing our{" "}
            <span className="italic text-forest-green font-light">organic lifestyle</span>
          </h2>
          <p className="text-sans text-sm text-muted-text font-light leading-relaxed">
            A glimpse into our farms, our Lower Parel boutique, and the authentic techniques behind your pantry staples.
          </p>
        </div>

        {/* Masonry */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {items.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: idx * 0.07, ease }}
              className={`break-inside-avoid relative overflow-hidden group ${item.order}`}
            >
              <div className={`relative w-full ${item.aspect} img-zoom`}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="object-cover zoom-target"
                />

                {/* Dark overlay revealed on hover */}
                <div className="absolute inset-0 bg-deep-green/0 group-hover:bg-deep-green/55 transition-colors duration-400" />

                {/* Tag — always visible */}
                <div className="absolute top-4 left-4 z-10 bg-primary-bg/90 backdrop-blur-sm px-3 py-1.5 border border-natural-beige/30">
                  <span className="text-mono text-[8px] uppercase tracking-widest text-warm-clay font-bold">
                    {item.tag}
                  </span>
                </div>

                {/* Caption — slides up on hover */}
                <div className="absolute bottom-0 inset-x-0 z-10 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out">
                  <p className="text-serif text-xl text-primary-bg font-normal">{item.label}</p>
                  <span className="text-mono text-[9px] uppercase tracking-widest text-accent mt-1 block font-bold">
                    The Urban Peasant
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const ease = [0.215, 0.61, 0.355, 1.0] as const;

const reviews = [
  {
    id: "r1",
    quote: "The Bilona Ghee smells and tastes exactly like the ghee my grandmother used to make in Haryana. We have completely transitioned all our pantry essentials to The Urban Peasant.",
    author: "Priya Sharma",
    location: "Bandra West, Mumbai",
    initials: "PS",
  },
  {
    id: "r2",
    quote: "Finding clean, stone-ground emmer wheat in South Mumbai that is truly chemical-free used to be impossible. Their store in Lower Parel has become a sanctuary for our family.",
    author: "Aditya Goel",
    location: "Lower Parel, Mumbai",
    initials: "AG",
  },
  {
    id: "r3",
    quote: "As a mother, the absolute peace of mind knowing these vegetables are harvested and sent chemical-free is priceless. Their honesty in sourcing sets them completely apart.",
    author: "Ananya Mehta",
    location: "Juhu, Mumbai",
    initials: "AM",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 md:py-36 bg-secondary-bg overflow-hidden">

      {/* Top border accent */}
      <div className="absolute top-0 inset-x-0 h-px bg-natural-beige/60" />

      {/* BG watermark */}
      <div aria-hidden="true" className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none select-none overflow-hidden opacity-[0.03]">
        <span className="text-serif font-bold text-typography-color" style={{ fontSize: "clamp(120px,18vw,300px)", lineHeight: 0.85 }}>
          ★★★★★
        </span>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-14">

        {/* Header + rating callout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-end">
          <div className="lg:col-span-7">
            <span className="section-rule" />
            <span className="text-mono text-[10px] uppercase tracking-[0.22em] text-warm-clay font-bold block mb-3">
              Shared Trust
            </span>
            <h2 className="text-serif font-normal leading-[1.06]" style={{ fontSize: "clamp(36px,5vw,64px)" }}>
              Loved by local{" "}
              <span className="italic text-forest-green font-light">Mumbai families</span>
            </h2>
          </div>

          {/* Google rating box */}
          <div className="lg:col-span-5 flex justify-start lg:justify-end">
            <div className="flex items-center gap-6 bg-primary-bg border border-natural-beige/50 px-8 py-6 shadow-[0_8px_40px_rgba(0,0,0,0.05)]">
              <div className="flex flex-col">
                <span className="text-serif text-5xl font-semibold text-typography-color leading-none">5.0</span>
                <div className="flex gap-0.5 mt-2 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-mono text-[9px] uppercase tracking-widest text-muted-text">Google Rating</span>
              </div>
              <div className="w-px h-14 bg-natural-beige/50" />
              <div className="flex flex-col">
                <span className="text-serif text-3xl font-semibold text-forest-green leading-none">87+</span>
                <span className="text-sans text-xs text-muted-text mt-2 font-light">Verified Reviews</span>
                <span className="text-mono text-[9px] uppercase tracking-widest text-forest-green mt-1 font-bold">All 5 Stars</span>
              </div>
            </div>
          </div>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <motion.article
              key={rev.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.75, delay: idx * 0.12, ease }}
              className="bg-primary-bg border border-natural-beige/40 p-8 flex flex-col gap-6 card-lift group relative overflow-hidden"
            >
              {/* Top accent on hover */}
              <div className="absolute top-0 inset-x-0 h-0.5 bg-forest-green scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote icon */}
              <Quote className="w-8 h-8 text-natural-beige" />

              {/* Quote */}
              <p className="text-serif text-lg font-light italic leading-[1.75] text-typography-color flex-1">
                "{rev.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 border-t border-natural-beige/50 pt-5">
                <div className="w-10 h-10 rounded-full bg-forest-green flex items-center justify-center flex-shrink-0">
                  <span className="text-mono text-[10px] font-bold text-primary-bg">{rev.initials}</span>
                </div>
                <div>
                  <span className="text-sans text-sm font-semibold text-typography-color block">{rev.author}</span>
                  <span className="text-mono text-[9px] uppercase tracking-widest text-muted-text">{rev.location}</span>
                </div>
                <span className="ml-auto text-mono text-[8px] uppercase tracking-wider text-forest-green font-bold bg-light-sage px-2.5 py-1">
                  Verified
                </span>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}

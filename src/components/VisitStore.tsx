"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Navigation, Mail } from "lucide-react";

const ease = [0.215, 0.61, 0.355, 1.0] as const;

const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=Mathuradas+Mill+Compound+Lower+Parel+Mumbai";

const infoItems = [
  {
    icon: MapPin,
    label: "Address",
    content: (
      <p className="text-serif text-base text-typography-color leading-snug">
        Mathuradas Mill Compound<br />
        Shop No.3, Shree Siddhivinayak Estate<br />
        Lower Parel, Mumbai — 400013
      </p>
    ),
  },
  {
    icon: Clock,
    label: "Store Hours",
    content: (
      <div>
        <p className="text-sans text-sm text-typography-color font-light">
          Open Daily: <span className="font-semibold text-forest-green">9:00 AM – 8:00 PM</span>
        </p>
        <p className="text-sans text-xs text-muted-text mt-0.5">Including Sundays and Public Holidays</p>
      </div>
    ),
  },
  {
    icon: Phone,
    label: "Phone",
    content: (
      <a href="tel:+919820098200" className="text-sans text-sm text-typography-color font-light hover:text-forest-green transition-colors link-underline">
        +91 98200 98200
      </a>
    ),
  },
  {
    icon: Mail,
    label: "Email",
    content: (
      <a href="mailto:hello@theurbanpeasant.in" className="text-sans text-sm text-typography-color font-light hover:text-forest-green transition-colors link-underline">
        hello@theurbanpeasant.in
      </a>
    ),
  },
];

export function VisitStore() {
  return (
    <section id="visit" className="relative py-24 md:py-32 bg-parchment overflow-hidden">

      {/* Accent strip */}
      <div className="absolute top-0 inset-x-0 h-1 bg-forest-green" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">

          {/* ── Left: Info panel ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease }}
            className="lg:col-span-5 flex flex-col gap-10"
          >
            {/* Title */}
            <div>
              <span className="section-rule" />
              <span className="text-mono text-[10px] uppercase tracking-[0.22em] text-warm-clay font-bold block mb-3">
                Boutique Location
              </span>
              <h2 className="text-serif font-normal leading-[1.06]" style={{ fontSize: "clamp(36px,4.5vw,58px)" }}>
                Come visit our
                <br />
                <span className="italic text-forest-green font-light">farm shop</span>
              </h2>
              <p className="text-sans text-sm text-muted-text font-light leading-relaxed mt-5 max-w-sm">
                Experience the aromas of fresh stone-ground flour and pure bilona ghee in our Lower Parel boutique — in the heart of Mumbai's historic mill compound.
              </p>
            </div>

            {/* Info cards */}
            <div className="flex flex-col gap-4">
              {infoItems.map(({ icon: Icon, label, content }) => (
                <div
                  key={label}
                  className="flex items-start gap-4 bg-secondary-bg border border-natural-beige/50 p-5 group hover:border-forest-green/30 transition-colors"
                >
                  <div className="w-10 h-10 flex-shrink-0 border border-natural-beige bg-primary-bg flex items-center justify-center text-forest-green group-hover:bg-forest-green group-hover:text-primary-bg transition-all duration-300">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-mono text-[8.5px] uppercase tracking-widest text-warm-clay font-bold">
                      {label}
                    </span>
                    <div className="mt-1">{content}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Direction CTA */}
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 bg-forest-green text-primary-bg text-mono text-[10.5px] uppercase tracking-widest py-4.5 hover:bg-dark-olive transition-all duration-300 shadow-[0_8px_28px_rgba(49,93,57,0.25)] hover:shadow-[0_14px_40px_rgba(49,93,57,0.35)] hover:-translate-y-0.5"
              style={{ paddingTop: "1.125rem", paddingBottom: "1.125rem" }}
            >
              Get Directions
              <Navigation className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </motion.div>

          {/* ── Right: Map ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease, delay: 0.15 }}
            className="lg:col-span-7 relative min-h-[400px] lg:min-h-full border border-natural-beige/40 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.07)]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.802773229618!2d72.8242137759881!3d18.99532658219468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce868e4c7987%3A0xc3cf9c9c362955f1!2sMathuradas%20Mill%20Compound!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{
                border: 0,
                minHeight: "500px",
                filter: "grayscale(1) contrast(1.05) sepia(0.15)",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Urban Peasant Farm Shop Location"
            />

            {/* Floating location pill */}
            <div className="absolute bottom-5 left-5 right-5 bg-deep-green/95 backdrop-blur-sm border border-primary-bg/10 px-5 py-4 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="pulse-dot w-2 h-2 rounded-full bg-accent" />
                <span className="text-mono text-[9px] uppercase tracking-widest text-primary-bg font-bold">
                  Lower Parel Station — 5 Min Walk
                </span>
              </div>
              <span className="text-mono text-[9px] uppercase tracking-widest text-accent font-bold hidden sm:block">
                Open Now
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { ArrowUp } from "lucide-react";

// Inline SVG social icons (lucide-react doesn't ship Instagram/Facebook in this version)
const IconInstagram = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const IconFacebook = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const currentYear = new Date().getFullYear();

const footerLinks = [
  { name: "Our Story", href: "#story" },
  { name: "Categories", href: "#categories" },
  { name: "Why Choose Us", href: "#why-us" },
  { name: "Best Sellers", href: "#bestsellers" },
  { name: "Gallery", href: "#gallery" },
  { name: "Visit Shop", href: "#visit" },
];

export function Footer() {
  return (
    <footer className="bg-deep-green text-primary-bg/80 pt-20 pb-10 relative overflow-hidden">

      {/* Decorative BG letter */}
      <div aria-hidden="true" className="absolute right-0 bottom-0 pointer-events-none select-none overflow-hidden opacity-[0.04]">
        <span className="text-serif font-bold text-primary-bg" style={{ fontSize: "clamp(120px,18vw,260px)", lineHeight: 0.85 }}>
          UP
        </span>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-14 relative z-10">

        {/* Top: branding + links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-primary-bg/10">

          {/* Brand col */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div>
              <span className="text-serif font-semibold text-xl tracking-[0.1em] text-primary-bg block leading-none">
                THE URBAN PEASANT
              </span>
              <span className="text-mono text-[9px] tracking-[0.2em] uppercase text-accent font-semibold mt-1 block">
                थे अर्बन पीजेंट फार्म शॉप
              </span>
            </div>
            <p className="text-sans text-xs leading-relaxed text-primary-bg/55 max-w-xs font-light">
              A women-owned family farm shop delivering clean, chemical-free, stone-ground pantry essentials and farm-fresh produce across Mumbai. Sourced ethically, hand-bottled honestly.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-primary-bg/20 flex items-center justify-center text-primary-bg/60 hover:bg-primary-bg hover:text-deep-green transition-all duration-300"
                aria-label="Instagram"
              >
                <IconInstagram />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-primary-bg/20 flex items-center justify-center text-primary-bg/60 hover:bg-primary-bg hover:text-deep-green transition-all duration-300"
                aria-label="Facebook"
              >
                <IconFacebook />
              </a>
            </div>
          </div>

          {/* Nav links col */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <span className="text-mono text-[9px] uppercase tracking-widest text-accent font-bold mb-2">Explore</span>
            {footerLinks.map((l) => (
              <a
                key={l.name}
                href={l.href}
                className="text-sans text-xs text-primary-bg/55 hover:text-primary-bg transition-colors font-light link-underline"
              >
                {l.name}
              </a>
            ))}
          </div>

          {/* Contact col */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <span className="text-mono text-[9px] uppercase tracking-widest text-accent font-bold mb-2">The Shop</span>
            <div>
              <span className="text-mono text-[8.5px] uppercase tracking-widest text-primary-bg/40 block mb-1.5">Address</span>
              <p className="text-sans text-xs text-primary-bg/55 font-light leading-relaxed">
                Mathuradas Mill Compound<br />
                Shop No.3, Shree Siddhivinayak Estate<br />
                Lower Parel, Mumbai — 400013
              </p>
            </div>
            <div>
              <span className="text-mono text-[8.5px] uppercase tracking-widest text-primary-bg/40 block mb-1.5">Hours</span>
              <p className="text-sans text-xs text-primary-bg/55 font-light">
                Open Daily: <span className="text-primary-bg/80 font-medium">9:00 AM – 8:00 PM</span><br />
                Including Sundays & Holidays
              </p>
            </div>
            <div>
              <span className="text-mono text-[8.5px] uppercase tracking-widest text-primary-bg/40 block mb-1.5">Contact</span>
              <a href="tel:+919820098200" className="text-sans text-xs text-primary-bg/55 font-light hover:text-primary-bg transition-colors link-underline block">
                +91 98200 98200
              </a>
              <a href="mailto:hello@theurbanpeasant.in" className="text-sans text-xs text-primary-bg/55 font-light hover:text-primary-bg transition-colors link-underline block mt-0.5">
                hello@theurbanpeasant.in
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-mono text-[9px] uppercase tracking-widest text-primary-bg/30 text-center sm:text-left">
            © {currentYear} The Urban Peasant Farm Shop · All Rights Reserved · Handcrafted in Mumbai
          </span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-9 h-9 border border-primary-bg/20 flex items-center justify-center text-primary-bg/50 hover:bg-primary-bg/10 hover:text-primary-bg transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}

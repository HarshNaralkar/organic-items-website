"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { name: "Our Story", href: "#story" },
  { name: "Categories", href: "#categories" },
  { name: "Why Us", href: "#why-us" },
  { name: "Best Sellers", href: "#bestsellers" },
  { name: "Visit Shop", href: "#visit" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-parchment/97 border-b border-warm-clay/15 shadow-[0_4px_40px_rgba(0,0,0,0.06)] backdrop-blur-md py-4"
            : "py-7"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-14 flex items-center justify-between">

          {/* Logo */}
          <a href="#" className="flex flex-col gap-0.5 group" aria-label="Home">
            <span className="text-serif font-semibold text-[1.05rem] tracking-[0.12em] text-forest-green leading-none">
              THE URBAN PEASANT
            </span>
            <span className="text-mono text-[8.5px] tracking-[0.18em] uppercase text-warm-clay font-semibold leading-none">
              फार्म शॉप · Lower Parel
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-9">
            {navLinks.map((l) => (
              <a
                key={l.name}
                href={l.href}
                className="link-underline text-mono text-[10.5px] uppercase tracking-[0.18em] text-typography-color hover:text-forest-green transition-colors duration-300"
              >
                {l.name}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#visit"
              className="group flex items-center gap-2.5 bg-forest-green text-primary-bg text-mono text-[10px] uppercase tracking-widest px-7 py-3.5 hover:bg-dark-olive transition-all duration-300 shadow-[0_6px_20px_rgba(49,93,57,0.25)] hover:shadow-[0_10px_30px_rgba(49,93,57,0.35)] hover:-translate-y-0.5"
            >
              Visit Store
              <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-typography-color"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 top-0 z-40 bg-parchment/99 backdrop-blur-sm flex flex-col px-8 pt-28 pb-12 lg:hidden"
          >
            <nav className="flex flex-col gap-7 mb-10">
              {navLinks.map((l) => (
                <a
                  key={l.name}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-serif text-3xl font-normal text-typography-color hover:text-forest-green transition-colors"
                >
                  {l.name}
                </a>
              ))}
            </nav>
            <a
              href="#visit"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 bg-forest-green text-primary-bg text-mono text-xs uppercase tracking-widest py-4 hover:bg-dark-olive transition-colors"
            >
              Visit Store <ArrowRight className="w-4 h-4" />
            </a>
            <div className="mt-auto border-t border-natural-beige/50 pt-6 text-center">
              <span className="text-mono text-[9px] uppercase tracking-widest text-muted-text">
                Organic · Women-Owned · Since 2018
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

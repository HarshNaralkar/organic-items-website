"use client";

import React from "react";
import { Noise } from "@/components/Noise";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { MarqueeBanner } from "@/components/MarqueeBanner";
import { BrandStory } from "@/components/BrandStory";
import { Categories } from "@/components/Categories";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { BestSellers } from "@/components/BestSellers";
import { Testimonials } from "@/components/Testimonials";
import { Gallery } from "@/components/Gallery";
import { VisitStore } from "@/components/VisitStore";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-primary-bg text-typography-color">
      <Noise />
      <Navbar />
      <main>
        <Hero />
        <MarqueeBanner />
        <BrandStory />
        <Categories />
        <WhyChooseUs />
        <BestSellers />
        <Testimonials />
        <Gallery />
        <VisitStore />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

"use client";

import React from "react";

const words = [
  "100% Organic",
  "Zero Preservatives",
  "Women-Owned",
  "Lower Parel",
  "Farm Fresh Daily",
  "No Chemicals",
  "Mumbai Delivery",
  "Since 2018",
  "Stone-Ground",
  "Ethically Sourced",
];

export function MarqueeBanner() {
  return (
    <div className="w-full overflow-hidden bg-forest-green border-y border-forest-green py-3.5">
      <div className="marquee-track">
        {[...words, ...words].map((word, i) => (
          <span
            key={i}
            className="text-mono text-[9px] uppercase tracking-[0.22em] text-primary-bg/80 mx-7 whitespace-nowrap flex-shrink-0"
          >
            {word}
            <span className="text-accent mx-4 font-bold">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

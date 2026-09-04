"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const marqueeItems = [
  "WEB DEVELOPMENT",
  "LARAVEL PHP",
  "WORDPRESS FSE",
  "NEXT.JS & REACT",
  "FULL-STACK APPS",
  "TAILWIND CSS",
  "E-COMMERCE SOLUTIONS",
  "UI/UX ARCHITECTURE",
  "RESTFUL APIS",
];

export function Marquee() {
  return (
    <section className="py-14 sm:py-20 bg-[#08090C] border-y border-white/5 relative overflow-hidden">
      {/* Editorial Mission Statement */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-5xl mb-12 sm:mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-widest text-[#B8FF3D] mb-4"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Core Philosophy</span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight text-[#F5F5F2] leading-tight"
        >
          &ldquo;I TURN IDEAS INTO FAST, SCALABLE &amp; MEMORABLE DIGITAL PRODUCTS.&rdquo;
        </motion.h2>
      </div>

      {/* Infinite Horizontal Marquee Ticker */}
      <div className="relative w-full flex overflow-x-hidden group select-none">
        {/* Left & Right gradient edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#08090C] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#08090C] to-transparent z-10 pointer-events-none" />

        <div className="flex shrink-0 animate-[marquee_28s_linear_infinite] group-hover:[animation-play-state:paused] items-center gap-8 sm:gap-12">
          {marqueeItems.concat(marqueeItems).map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-8 sm:gap-12 whitespace-nowrap"
            >
              <span className="font-display font-black text-2xl sm:text-4xl md:text-5xl tracking-tight text-white/20 hover:text-[#B8FF3D] transition-colors duration-300">
                {item}
              </span>
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#B8FF3D] shadow-[0_0_8px_#B8FF3D]" />
            </div>
          ))}
        </div>

        <div className="flex shrink-0 animate-[marquee_28s_linear_infinite] group-hover:[animation-play-state:paused] items-center gap-8 sm:gap-12 ml-8 sm:ml-12" aria-hidden="true">
          {marqueeItems.concat(marqueeItems).map((item, idx) => (
            <div
              key={`repeat-${idx}`}
              className="flex items-center gap-8 sm:gap-12 whitespace-nowrap"
            >
              <span className="font-display font-black text-2xl sm:text-4xl md:text-5xl tracking-tight text-white/20 hover:text-[#B8FF3D] transition-colors duration-300">
                {item}
              </span>
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#B8FF3D] shadow-[0_0_8px_#B8FF3D]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

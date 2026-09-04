"use client";

import React from "react";
import { motion } from "framer-motion";
import { personalData } from "@/data/personal";

export function Stats() {
  return (
    <section className="py-20 sm:py-28 bg-[#08090C] border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow opacity-30 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B8FF3D] block mb-2">
            Metrics of Excellence
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl uppercase tracking-tight text-[#F5F5F2]">
            Built With Purpose.
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {personalData.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center flex flex-col items-center p-6 rounded-3xl bg-[#111318]/50 border border-white/5 hover:border-[#B8FF3D]/30 transition-all duration-300"
            >
              <span className="font-display font-black text-5xl sm:text-6xl md:text-7xl text-[#B8FF3D] tracking-tighter mb-2">
                {stat.value}
              </span>
              <h3 className="font-display font-bold text-base sm:text-lg text-[#F5F5F2] uppercase tracking-wide mb-1">
                {stat.label}
              </h3>
              <p className="text-xs text-[#9A9DA5] max-w-[200px] leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

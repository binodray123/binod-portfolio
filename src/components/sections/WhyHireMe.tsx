"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Zap, Smartphone, TrendingUp } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const pillars = [
  {
    number: "01",
    title: "Clean Code",
    tagline: "Maintainable, modular, and standard-compliant.",
    description:
      "I write clean, scalable code following industry conventions, strict TypeScript interfaces, and modular MVC architectures in Laravel that any engineering team can maintain effortlessly.",
    icon: Code,
  },
  {
    number: "02",
    title: "Performance First",
    tagline: "Sub-second load times & optimal Core Web Vitals.",
    description:
      "Every asset, query, and animation is measured. By avoiding bloated WordPress plugins and leveraging Server Components and optimized database indexing, I guarantee swift user experiences.",
    icon: Zap,
  },
  {
    number: "03",
    title: "Responsive by Default",
    tagline: "Flawless interaction from 320px mobile to 4K displays.",
    description:
      "Mobile is never an afterthought. Every interface is tested across diverse devices and viewport resolutions to ensure smooth touch controls, legible typography, and zero layout shifts.",
    icon: Smartphone,
  },
  {
    number: "04",
    title: "Business-Focused",
    tagline: "Engineering that drives client conversions & ROI.",
    description:
      "Technology serves business goals. Whether streamlining hospital appointments or reducing checkout friction for an e-commerce brand, I build software that produces tangible results.",
    icon: TrendingUp,
  },
];

export function WhyHireMe() {
  return (
    <section className="py-24 md:py-32 bg-[#08090C] relative">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
        <SectionHeading
          number="07"
          eyebrow="Core Principles"
          title="Why Work With Me?"
          titleAccent="Standards."
          description="A disciplined engineering methodology built on code quality, speed, user empathy, and commercial viability."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-3xl p-8 bg-[#111318] border border-white/5 hover:border-[#B8FF3D]/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-sm font-bold text-[#B8FF3D]">
                      /{pillar.number}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#F5F5F2] group-hover:text-[#08090C] group-hover:bg-[#B8FF3D] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-xl text-[#F5F5F2] group-hover:text-[#B8FF3D] transition-colors mb-2">
                    {pillar.title}
                  </h3>

                  <p className="font-mono text-xs text-[#B8FF3D]/90 mb-4">
                    {pillar.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-[#9A9DA5] leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-[#9A9DA5] group-hover:text-[#F5F5F2] transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B8FF3D]" />
                  <span>Guaranteed Principle</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

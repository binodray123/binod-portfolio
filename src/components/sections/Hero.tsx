"use client";

import React, { useRef } from "react";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Sparkles, Terminal, Code2, Layers } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { personalData } from "@/data/personal";

// Dynamically import 3D HeroScene to optimize initial load & prevent SSR hydration issues
const HeroScene = dynamic(
  () => import("@/components/3d/HeroScene").then((mod) => mod.HeroScene),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[400px] sm:h-[500px] flex items-center justify-center">
        <div className="w-10 h-10 rounded-full border-2 border-[#B8FF3D]/30 border-t-[#B8FF3D] animate-spin" />
      </div>
    ),
  }
);

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 md:pt-28 md:pb-20 overflow-hidden"
    >
      {/* Subtle grid pattern & top glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-radial-gradient pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Editorial Hero Typography & CTAs */}
          <motion.div
            style={{ y: contentY, opacity: contentOpacity }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-5"
            >
              <Badge variant="glow" size="md" pulse>
                Full-Stack Web Developer
              </Badge>
            </motion.div>

            {/* Main Editorial Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl tracking-tighter uppercase text-[#F5F5F2] leading-[0.95] mb-6"
            >
              Building <br />
              <span className="text-[#B8FF3D] selection:text-[#08090C]">
                Digital
              </span>{" "}
              <br />
              Experiences <br />
              <span className="text-white/40">That Matter.</span>
            </motion.h1>

            {/* Supporting Bio Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-[#9A9DA5] max-w-xl font-light leading-relaxed mb-8"
            >
              I design and develop fast, scalable, and user-focused websites and
              full-stack web applications using Laravel, WordPress, Next.js, and
              modern JavaScript architectures.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <Button href="#projects" variant="primary" size="lg" showArrow>
                View My Work
              </Button>
              <Button href="#contact" variant="secondary" size="lg">
                Let&apos;s Work Together
              </Button>
            </motion.div>

            {/* Micro Highlights Pill Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#9A9DA5] pt-6 border-t border-white/5 w-full max-w-lg"
            >
              <div className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-[#B8FF3D]" />
                <span>Next.js & React</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-white/20" />
              <div className="flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-[#B8FF3D]" />
                <span>Laravel & PHP</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-white/20" />
              <div className="flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#B8FF3D]" />
                <span>Custom WordPress FSE</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: 3D Interactive Scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative w-full flex items-center justify-center"
          >
            <HeroScene />
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none select-none text-[#9A9DA5]"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown className="w-3.5 h-3.5 text-[#B8FF3D]" />
        </motion.div>
      </motion.div>
    </section>
  );
}

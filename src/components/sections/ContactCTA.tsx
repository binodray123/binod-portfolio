"use client";

import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { personalData } from "@/data/personal";

// Dynamically import 3D ContactScene
const ContactScene = dynamic(
  () => import("@/components/3d/ContactScene").then((mod) => mod.ContactScene),
  {
    ssr: false,
    loading: () => null,
  }
);

export function ContactCTA() {
  return (
    <section className="py-24 md:py-32 bg-[#08090C] relative overflow-hidden">
      {/* 3D Animated Metallic Ring & Orbiting Particles */}
      <ContactScene />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-5xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-widest text-[#B8FF3D] mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-[#B8FF3D] animate-ping" />
          <span>Initiate Collaboration</span>
        </motion.div>

        {/* Huge Editorial Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tighter text-[#F5F5F2] leading-[0.95] mb-8"
        >
          Let&apos;s Build <br />
          <span className="text-[#B8FF3D]">Something</span> <br />
          Great.
        </motion.h2>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-xl text-[#9A9DA5] max-w-2xl mx-auto font-light leading-relaxed mb-10"
        >
          Have an idea, project, or opportunity? Let&apos;s turn it into something
          people remember. Available for selective freelance work and full-time
          engineering roles.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Button href="#contact-form" variant="primary" size="lg" showArrow>
            Start a Project
          </Button>

          <Button
            href={`mailto:${personalData.email}`}
            external
            variant="secondary"
            size="lg"
          >
            <Mail className="w-4 h-4 text-[#B8FF3D]" />
            <span>Email Me Directly</span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

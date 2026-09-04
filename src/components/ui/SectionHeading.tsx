"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  number?: string;
  eyebrow: string;
  title: string;
  titleAccent?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  number,
  eyebrow,
  title,
  titleAccent,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-20",
        align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl",
        className
      )}
    >
      {/* Eyebrow with optional number */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className={cn(
          "flex items-center gap-3 mb-3",
          align === "center" ? "justify-center" : "justify-start"
        )}
      >
        {number && (
          <span className="font-mono text-xs text-[#B8FF3D] font-bold tracking-widest">
            /{number}
          </span>
        )}
        <span className="text-xs uppercase tracking-[0.2em] font-mono text-[#9A9DA5]">
          {eyebrow}
        </span>
      </motion.div>

      {/* Main Display Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-tighter text-[#F5F5F2] leading-[1.05]"
      >
        {title}{" "}
        {titleAccent && (
          <span className="text-[#B8FF3D] relative inline-block">
            {titleAccent}
          </span>
        )}
      </motion.h2>

      {/* Optional Description */}
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 text-base md:text-lg text-[#9A9DA5] leading-relaxed font-light"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}

"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { experienceData, ExperienceItem } from "@/data/experience";

function TimelineCard({
  item,
  index,
}: {
  item: ExperienceItem;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30, y: 20 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative flex flex-col md:flex-row gap-8 items-start ${
        index % 2 === 0 ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Center Marker Node */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-4 w-7 h-7 rounded-full bg-[#08090C] border-2 border-[#B8FF3D] items-center justify-center shadow-[0_0_12px_rgba(184,255,61,0.5)] z-10">
        <span className="w-2.5 h-2.5 rounded-full bg-[#B8FF3D]" />
      </div>

      {/* Content Card (takes 1/2 width on desktop) */}
      <div className="w-full md:w-[calc(50%-2.5rem)] rounded-3xl p-7 sm:p-8 bg-[#111318] border border-white/10 hover:border-[#B8FF3D]/40 transition-all duration-300 shadow-xl group">
        {/* Header: Period badge & Employment Type */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-[#B8FF3D] font-bold">
              {item.period}
            </span>
            {item.current && (
              <Badge variant="glow" size="sm" pulse>
                Present
              </Badge>
            )}
          </div>
          <Badge variant="neutral" size="sm">
            {item.type}
          </Badge>
        </div>

        {/* Role & Company */}
        <h3 className="font-display font-bold text-2xl text-[#F5F5F2] group-hover:text-[#B8FF3D] transition-colors mb-1">
          {item.role}
        </h3>
        <p className="font-mono text-xs uppercase tracking-wider text-[#9A9DA5] mb-4 flex items-center gap-2">
          <span>{item.company}</span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <MapPin className="w-3 h-3 text-[#B8FF3D]" />
            {item.location}
          </span>
        </p>

        {/* Summary Description */}
        <p className="text-sm text-[#9A9DA5] leading-relaxed font-light mb-5">
          {item.description}
        </p>

        {/* Key Highlights */}
        <div className="space-y-2 mb-6 pt-4 border-t border-white/5">
          {item.highlights.map((highlight, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-white/80">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#B8FF3D] shrink-0 mt-0.5" />
              <span>{highlight}</span>
            </div>
          ))}
        </div>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {item.skills.map((skill) => (
            <span
              key={skill}
              className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 border border-white/5 text-[#9A9DA5] group-hover:border-white/15 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Empty half for staggered balance */}
      <div className="hidden md:block w-[calc(50%-2.5rem)]" />
    </motion.div>
  );
}

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <section id="experience" className="py-24 md:py-32 bg-[#08090C] relative">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-6xl">
        <SectionHeading
          number="03"
          eyebrow="Career Journey"
          title="Practical Experience in"
          titleAccent="Modern Web Engineering."
          description="Proven track record in full-time and client-facing freelance capacities, developing custom WordPress block themes and scalable Laravel applications."
        />

        {/* Timeline Container */}
        <div ref={containerRef} className="relative mt-16 space-y-12 sm:space-y-16">
          {/* Vertical Glowing Timeline Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-[2px] -translate-x-1/2 bg-white/10">
            <motion.div
              style={{ scaleY }}
              className="w-full h-full bg-gradient-to-b from-[#B8FF3D] via-[#6FAF20] to-[#B8FF3D] origin-top shadow-[0_0_12px_#B8FF3D]"
            />
          </div>

          {/* Timeline Cards */}
          {experienceData.map((item, index) => (
            <TimelineCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

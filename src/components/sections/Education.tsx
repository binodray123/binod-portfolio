"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { educationData } from "@/data/education";

export function Education() {
  return (
    <section id="education" className="py-24 md:py-32 bg-[#08090C] relative border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-6xl">
        <SectionHeading
          number="06"
          eyebrow="Academic Background"
          title="Formal Foundation in Science &"
          titleAccent="Information Security."
          description="Solid computer science, network infrastructure, and analytical background underpinning scalable software engineering."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-12">
          {educationData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-3xl p-7 sm:p-8 bg-[#111318] border border-white/10 hover:border-[#B8FF3D]/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl"
            >
              <div>
                {/* Year & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs font-bold text-[#B8FF3D]">
                    {item.period}
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#F5F5F2] group-hover:text-[#08090C] group-hover:bg-[#B8FF3D] transition-colors">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                </div>

                <span className="font-mono text-[11px] uppercase tracking-wider text-[#9A9DA5] block mb-1">
                  {item.degree}
                </span>

                <h3 className="font-display font-bold text-xl text-[#F5F5F2] group-hover:text-[#B8FF3D] transition-colors mb-2">
                  {item.field}
                </h3>

                <p className="text-xs font-mono text-[#9A9DA5] mb-4 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#B8FF3D]" />
                  <span>{item.institution}</span>
                </p>

                <p className="text-xs text-[#9A9DA5] leading-relaxed font-light mb-6">
                  {item.description}
                </p>
              </div>

              {/* Acquired Competencies */}
              <div className="pt-4 border-t border-white/5">
                <div className="flex flex-wrap gap-1.5">
                  {item.skillsGained.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-[#9A9DA5]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

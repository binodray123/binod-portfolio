"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillsData, Skill } from "@/data/skills";
import { Sparkles, Code2, Cpu, Database, Wrench } from "lucide-react";

// Dynamically import desktop 3D orbital constellation
const SkillsScene = dynamic(
  () => import("@/components/3d/SkillsScene").then((mod) => mod.SkillsScene),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[520px] rounded-3xl bg-[#111318]/50 border border-white/10 flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-2 border-[#B8FF3D]/30 border-t-[#B8FF3D] animate-spin" />
      </div>
    ),
  }
);

const categoryIcons = {
  Frontend: Code2,
  Backend: Cpu,
  "CMS & Frameworks": Sparkles,
  "Database & Tools": Database,
};

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const categories = ["All", "Frontend", "Backend", "CMS & Frameworks", "Database & Tools"];

  const filteredSkills =
    activeCategory === "All"
      ? skillsData
      : skillsData.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 md:py-32 bg-[#08090C] relative">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
        <SectionHeading
          number="04"
          eyebrow="Technical Stack"
          title="Engineered with Modern, Scalable"
          titleAccent="Technologies."
          description="A specialized full-stack toolkit centered on speed, developer velocity, clean modular code, and scalable database backends."
        />

        {/* Desktop 3D Orbital Constellation (Hidden on smaller screens) */}
        <div className="hidden lg:block mb-16">
          <div className="flex items-center justify-between mb-4 px-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#9A9DA5] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B8FF3D] animate-ping" />
              Interactive 3D Skill Orbital — Hover any node to inspect
            </span>
            <span className="text-xs font-mono text-[#9A9DA5]">
              Total Core Technologies: {skillsData.length}
            </span>
          </div>

          <SkillsScene onSkillSelect={setSelectedSkill} />
        </div>

        {/* Category Filter Tabs for Mobile & Interactive Grid */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#B8FF3D] text-[#08090C] font-bold shadow-[0_0_15px_rgba(184,255,61,0.3)]"
                  : "bg-[#111318] text-[#9A9DA5] hover:text-[#F5F5F2] border border-white/5 hover:border-white/15"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Responsive Skill Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredSkills.map((skill, index) => {
            const IconComponent = categoryIcons[skill.category] || Code2;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative rounded-2xl p-6 bg-[#111318] border border-white/5 hover:border-[#B8FF3D]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#B8FF3D] group-hover:bg-[#B8FF3D] group-hover:text-[#08090C] transition-colors">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-base text-[#F5F5F2] group-hover:text-[#B8FF3D] transition-colors">
                        {skill.name}
                      </h4>
                      <span className="font-mono text-[10px] text-[#9A9DA5] uppercase">
                        {skill.category}
                      </span>
                    </div>
                  </div>

                  <span className="font-mono text-xs text-[#B8FF3D] font-semibold">
                    {skill.level}%
                  </span>
                </div>

                <p className="text-xs text-[#9A9DA5] leading-relaxed mb-4">
                  {skill.description}
                </p>

                {/* Proficiency progress track */}
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="h-full bg-gradient-to-r from-[#6FAF20] to-[#B8FF3D] rounded-full"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

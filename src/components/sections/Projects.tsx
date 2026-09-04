"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "./ProjectCard";
import { projectsData } from "@/data/projects";

export function Projects() {
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "Full-Stack Web App", "E-Commerce", "Corporate / CMS"];

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((p) => {
          if (filter === "Corporate / CMS") {
            return (
              p.category === "Corporate / CMS" ||
              p.category === "Travel & Tourism" ||
              p.category === "Healthcare Agency"
            );
          }
          return p.category === filter;
        });

  return (
    <section id="projects" className="py-24 md:py-32 bg-[#08090C] relative">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <SectionHeading
            number="05"
            eyebrow="Selected Work"
            title="Real-World Projects Engineered for"
            titleAccent="Impact."
            description="A curated selection of live production websites and web applications built with Laravel, WordPress, and modern web architectures."
            className="mb-0"
          />

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 shrink-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                  filter === cat
                    ? "bg-[#B8FF3D] text-[#08090C] font-bold shadow-[0_0_15px_rgba(184,255,61,0.25)]"
                    : "bg-[#111318] text-[#9A9DA5] hover:text-[#F5F5F2] border border-white/5 hover:border-white/15"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Stack */}
        <div className="space-y-12 sm:space-y-16">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

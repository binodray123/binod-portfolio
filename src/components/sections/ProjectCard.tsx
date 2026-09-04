"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, ExternalLink, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { Project } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Mouse tilt tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.08 }}
      className="group relative rounded-3xl p-6 sm:p-10 lg:p-12 bg-[#111318] border border-white/10 hover:border-[#B8FF3D]/40 transition-all duration-500 shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.7),0_0_30px_rgba(184,255,61,0.08)]"
      data-cursor="project"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Project Information */}
        <div
          className={`lg:col-span-6 flex flex-col justify-between ${
            isEven ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <div>
            {/* Header: Project Number & Category */}
            <div className="flex items-center justify-between gap-4 mb-4">
              <span className="font-mono text-xs sm:text-sm font-bold tracking-widest text-[#B8FF3D]">
                /{project.number}
              </span>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-[#9A9DA5]">{project.year}</span>
                <span className="text-white/20">•</span>
                <Badge variant="neutral" size="sm">
                  {project.category}
                </Badge>
              </div>
            </div>

            {/* Project Title */}
            <h3 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-[#F5F5F2] group-hover:text-[#B8FF3D] transition-colors duration-300 leading-tight mb-2">
              {project.title}
            </h3>
            
            <p className="font-mono text-xs text-[#9A9DA5] mb-5 tracking-wide">
              {project.subtitle}
            </p>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#9A9DA5] leading-relaxed font-light mb-6">
              {project.description}
            </p>

            {/* Impact Statement */}
            <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 mb-6 text-xs text-white/90 flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-[#B8FF3D] shrink-0 mt-0.5" />
              <span className="leading-relaxed">
                <strong className="text-[#F5F5F2] font-semibold">Impact: </strong>
                {project.impact}
              </span>
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 group-hover:border-white/20 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/5">
            <Button
              href={project.liveUrl}
              external
              variant="primary"
              size="md"
              showArrow
            >
              View Project
            </Button>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 hover:bg-white/10 text-[#F5F5F2] hover:text-[#B8FF3D] border border-white/10 hover:border-[#B8FF3D]/40 font-mono text-xs uppercase tracking-wider transition-all duration-300"
                aria-label={`View code for ${project.title}`}
              >
                <GithubIcon className="w-4 h-4" />
                <span>Code Repository</span>
              </a>
            )}
          </div>
        </div>

        {/* Project Image Preview with Parallax & Hover Zoom */}
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={`lg:col-span-6 relative perspective-1000 ${
            isEven ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <motion.div
            style={{ rotateX, rotateY }}
            className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-[#0A0C10] border border-white/10 shadow-2xl group-hover:border-[#B8FF3D]/50 transition-colors duration-500"
          >
            {/* Project Image */}
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              priority={index < 2}
            />

            {/* Dark overlay with subtle lime reflection */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#08090C]/80 via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" />

            {/* Floating Live Badge */}
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4 p-3 rounded-full bg-[#08090C]/80 backdrop-blur-md border border-white/20 text-[#F5F5F2] group-hover:bg-[#B8FF3D] group-hover:text-[#08090C] group-hover:border-[#B8FF3D] transition-all duration-300 shadow-xl"
              aria-label={`Open live site for ${project.title}`}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

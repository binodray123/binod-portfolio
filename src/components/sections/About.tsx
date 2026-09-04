"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Code,
  Terminal,
  MapPin,
  Clock,
  Globe,
  Award,
  CheckCircle2,
  Copy,
  Check,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { personalData } from "@/data/personal";

const codeSnippets = {
  laravel: `<?php

namespace App\\Services;

use App\\Models\\Project;
use App\\Repositories\\AnalyticsRepository;

class HighPerformancePortfolioService
{
    public function __construct(
        protected AnalyticsRepository $analytics
    ) {}

    /**
     * Build scalable, high-speed digital product
     */
    public function deliverExperience(): array
    {
        return [
            'developer'  => 'Binod Ray',
            'specialty'  => ['Laravel', 'Next.js', 'WordPress'],
            'architecture' => 'Modular, Clean & Secure',
            'core_vitals'  => 'Optimized for 95+ PageSpeed',
            'status'     => 'Production Ready',
        ];
    }
}`,
  nextjs: `// High-Performance Next.js Architecture
import { FC } from 'react';
import { motion } from 'framer-motion';

interface DeveloperProfile {
  name: string;
  focus: string[];
  philosophy: string;
}

export const BinodProfile: FC = () => {
  const profile: DeveloperProfile = {
    name: 'Binod Ray',
    focus: ['Next.js 16', 'R3F 3D', 'Laravel Backend'],
    philosophy: 'Code with purpose, speed & clean UX'
  };

  return (
    <motion.div className="high-performance-stack">
      <h1>{profile.name}</h1>
      <p>{profile.philosophy}</p>
    </motion.div>
  );
};`,
  wordpress: `<?php
/**
 * Custom WordPress Full-Site Editing (FSE) Theme
 * Developed from scratch by Binod Ray
 */

add_action('after_setup_theme', function() {
    add_theme_support('wp-block-styles');
    add_theme_support('editor-styles');
    add_theme_support('responsive-embeds');
    
    // Custom block patterns without third-party bloat
    register_block_pattern_category('binod-patterns', [
        'label' => __('High Performance Patterns', 'binod')
    ]);
});`,
};

export function About() {
  const [activeTab, setActiveTab] = useState<"laravel" | "nextjs" | "wordpress">("laravel");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="py-24 md:py-32 bg-[#08090C] relative">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
        <SectionHeading
          number="01"
          eyebrow="About Me"
          title="Developer focused on turning complex ideas into"
          titleAccent="simple digital experiences."
          description="Blending robust backend architecture in Laravel & PHP with modern, responsive interfaces in Next.js and custom WordPress block engineering."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Bio Narrative & Quick Details */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4 text-[#9A9DA5] text-base sm:text-lg leading-relaxed font-light">
              {personalData.aboutStory.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Quick Facts Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-[#111318] border border-white/5 flex flex-col gap-1">
                <span className="text-xs font-mono text-[#9A9DA5] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#B8FF3D]" /> Location
                </span>
                <span className="font-display font-semibold text-sm sm:text-base text-[#F5F5F2]">
                  {personalData.location}
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-[#111318] border border-white/5 flex flex-col gap-1">
                <span className="text-xs font-mono text-[#9A9DA5] flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#B8FF3D]" /> Experience
                </span>
                <span className="font-display font-semibold text-sm sm:text-base text-[#F5F5F2]">
                  {personalData.experienceYears} Industry Years
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-[#111318] border border-white/5 flex flex-col gap-1">
                <span className="text-xs font-mono text-[#9A9DA5] flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-[#B8FF3D]" /> Languages
                </span>
                <span className="font-display font-semibold text-sm sm:text-base text-[#F5F5F2]">
                  {personalData.languages.slice(0, 2).join(", ")} +2
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-[#111318] border border-white/5 flex flex-col gap-1">
                <span className="text-xs font-mono text-[#9A9DA5] flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#B8FF3D]" /> Academic Degree
                </span>
                <span className="font-display font-semibold text-sm sm:text-base text-[#F5F5F2]">
                  BSc IT &amp; Security
                </span>
              </div>
            </div>

            {/* Core Competencies Checklist */}
            <div className="space-y-2.5 pt-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#9A9DA5]">
                Core Competencies
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[#F5F5F2]">
                {[
                  "Full-Stack Web Architecture",
                  "Custom Block Theme (FSE) Creation",
                  "Laravel Eloquent & RESTful APIs",
                  "Performance & Core Web Vitals",
                  "Cross-Browser Mobile-First UX",
                  "Secure Database Schema & SQL",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#B8FF3D] shrink-0" />
                    <span className="text-xs sm:text-sm font-normal text-white/90">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <Button href="#experience" variant="outline" size="md" showArrow>
                View Professional Journey
              </Button>
            </div>
          </div>

          {/* Right Column: Interactive Code Terminal / Workstation */}
          <div className="lg:col-span-6">
            <div className="sticky top-28 rounded-3xl bg-[#111318] border border-white/10 shadow-2xl overflow-hidden">
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between px-5 py-3.5 bg-[#171A21] border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]/80" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]/80" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]/80" />
                  <span className="ml-3 font-mono text-xs text-[#9A9DA5] hidden sm:inline-block">
                    binod-ray-dev ~/workspace
                  </span>
                </div>

                {/* Language Switcher Tabs */}
                <div className="flex items-center gap-1 bg-[#111318] p-1 rounded-xl border border-white/5">
                  {(["laravel", "nextjs", "wordpress"] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-mono uppercase transition-all duration-200 ${
                        activeTab === tab
                          ? "bg-[#B8FF3D] text-[#08090C] font-semibold"
                          : "text-[#9A9DA5] hover:text-[#F5F5F2]"
                      }`}
                    >
                      {tab === "nextjs" ? "Next.js" : tab === "wordpress" ? "WordPress" : "Laravel"}
                    </button>
                  ))}
                </div>

                {/* Copy button */}
                <button
                  onClick={handleCopy}
                  className="p-1.5 rounded-lg bg-white/5 text-[#9A9DA5] hover:text-[#B8FF3D] transition-colors"
                  aria-label="Copy snippet"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-[#B8FF3D]" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Terminal Code Body */}
              <div className="p-6 font-mono text-xs sm:text-sm overflow-x-auto leading-relaxed max-h-[460px] select-text">
                <pre className="text-white/80">
                  <code>{codeSnippets[activeTab]}</code>
                </pre>
              </div>

              {/* Status bar */}
              <div className="flex items-center justify-between px-5 py-2.5 bg-[#171A21]/60 border-t border-white/5 text-[11px] font-mono text-[#9A9DA5]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#B8FF3D] animate-ping" />
                  <span>Architecture: Clean &amp; Scalable</span>
                </div>
                <span>UTF-8 • LF • TypeScript/PHP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

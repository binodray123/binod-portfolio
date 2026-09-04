"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  FacebookIcon,
} from "@/components/ui/Icons";
import { personalData } from "@/data/personal";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050608] border-t border-white/10 pt-20 pb-12 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
        {/* Monolithic Brand Statement */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-16 border-b border-white/10">
          <div>
            <span className="font-mono text-xs text-[#B8FF3D] uppercase tracking-[0.25em] block mb-2">
              Portfolio &amp; Brand
            </span>
            <h2 className="font-display font-black text-5xl sm:text-7xl md:text-8xl tracking-tighter text-[#F5F5F2] uppercase select-none leading-none">
              BINOD RAY
            </h2>
            <p className="mt-4 font-mono text-xs sm:text-sm text-[#9A9DA5] uppercase tracking-wider">
              Web Developer • Laravel • WordPress • Next.js
            </p>
          </div>

          <button
            onClick={scrollToTop}
            data-cursor="link"
            className="self-start md:self-end flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 hover:bg-[#B8FF3D] text-[#F5F5F2] hover:text-[#08090C] border border-white/10 hover:border-[#B8FF3D] font-mono text-xs uppercase tracking-wider transition-all duration-300 group"
            aria-label="Scroll to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Links & Socials Grid */}
        <div className="py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 items-center justify-between">
          {/* Quick Nav Links */}
          <div className="md:col-span-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-mono text-xs uppercase tracking-wider text-[#9A9DA5] hover:text-[#B8FF3D] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social Icons */}
          <div className="md:col-span-4 flex items-center justify-start md:justify-end gap-3">
            <a
              href={personalData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#9A9DA5] hover:text-[#08090C] hover:bg-[#B8FF3D] hover:border-[#B8FF3D] transition-all duration-300"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={personalData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#9A9DA5] hover:text-[#08090C] hover:bg-[#B8FF3D] hover:border-[#B8FF3D] transition-all duration-300"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={personalData.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#9A9DA5] hover:text-[#08090C] hover:bg-[#B8FF3D] hover:border-[#B8FF3D] transition-all duration-300"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>

            <a
              href={personalData.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#9A9DA5] hover:text-[#08090C] hover:bg-[#B8FF3D] hover:border-[#B8FF3D] transition-all duration-300"
              aria-label="Facebook"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Copyright & Technical Credit */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#9A9DA5]">
          <p>© 2026 Binod Ray. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>Engineered with Next.js, Three.js &amp; Tailwind</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#B8FF3D]" />
            <span>Kathmandu, Nepal</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

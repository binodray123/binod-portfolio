"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { personalData } from "@/data/personal";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: { label: string; href: string }[];
  activeSection: string;
}

export function MobileMenu({
  isOpen,
  onClose,
  navItems,
  activeSection,
}: MobileMenuProps) {
  const containerVariants = {
    closed: {
      opacity: 0,
      clipPath: "circle(0% at 100% 0%)",
      transition: { duration: 0.4 },
    },
    open: {
      opacity: 1,
      clipPath: "circle(150% at 100% 0%)",
      transition: { duration: 0.5 },
    },
  };

  const linkVariants = {
    closed: { opacity: 0, y: 30 },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.15 + i * 0.06, duration: 0.4 },
    }),
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={containerVariants}
          initial="closed"
          animate="open"
          exit="closed"
          className="fixed inset-0 z-50 bg-[#08090C]/98 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-10 lg:hidden overflow-y-auto"
        >
          {/* Header row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#B8FF3D] animate-pulse" />
              <span className="font-display font-bold tracking-wider text-sm text-[#F5F5F2]">
                BINOD RAY
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-3 rounded-full bg-white/5 border border-white/10 text-[#F5F5F2] hover:text-[#B8FF3D] transition-colors"
              aria-label="Close navigation menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col space-y-4 my-auto py-8">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <motion.div
                  key={item.label}
                  custom={index}
                  variants={linkVariants}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={`group flex items-center justify-between py-2 border-b border-white/5 ${
                      isActive ? "text-[#B8FF3D]" : "text-[#F5F5F2]"
                    }`}
                  >
                    <span className="font-display font-bold text-3xl sm:text-4xl uppercase tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                      {item.label}
                    </span>
                    <span className="font-mono text-xs text-[#9A9DA5] group-hover:text-[#B8FF3D] transition-colors">
                      0{index + 1}
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Contact shortcuts & Socials */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-6 justify-between items-start sm:items-center">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-[#9A9DA5]">
                <Mail className="w-3.5 h-3.5 text-[#B8FF3D]" />
                <a href={`mailto:${personalData.email}`} className="hover:text-[#F5F5F2]">
                  {personalData.email}
                </a>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#9A9DA5]">
                <Phone className="w-3.5 h-3.5 text-[#B8FF3D]" />
                <a href={`tel:${personalData.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-[#F5F5F2]">
                  {personalData.phone}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={personalData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 text-[#9A9DA5] hover:text-[#B8FF3D] hover:border-[#B8FF3D]/50 transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 text-[#9A9DA5] hover:text-[#B8FF3D] hover:border-[#B8FF3D]/50 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                onClick={onClose}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#B8FF3D] text-[#08090C] font-semibold text-xs uppercase tracking-wider font-display hover:bg-[#c6ff5c] transition-colors"
              >
                Let&apos;s Talk
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

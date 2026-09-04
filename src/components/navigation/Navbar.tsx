"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, ArrowUpRight } from "lucide-react";
import { MobileMenu } from "./MobileMenu";
import { useActiveSection } from "@/hooks/useActiveSection";
import { Button } from "@/components/ui/Button";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const sectionIds = ["home", "about", "services", "experience", "skills", "projects", "contact"];
  const activeSection = useActiveSection(sectionIds, 250);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 sm:px-6 md:px-8 py-4 pointer-events-none transition-all duration-300">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`pointer-events-auto flex items-center justify-between w-full max-w-6xl rounded-full border transition-all duration-300 ${
            isScrolled
              ? "bg-[#08090C]/85 backdrop-blur-xl border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] py-2.5 px-4 sm:px-6"
              : "bg-[#111318]/60 backdrop-blur-md border-white/10 py-3 px-5 sm:px-7"
          }`}
        >
          {/* Logo / Brand */}
          <Link
            href="#home"
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="Binod Ray Home"
          >
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/15 bg-white/5 flex items-center justify-center group-hover:border-[#B8FF3D] transition-colors">
              <span className="font-display font-black text-xs text-[#B8FF3D]">BR</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm sm:text-base tracking-wider text-[#F5F5F2] group-hover:text-[#B8FF3D] transition-colors">
                BINOD RAY
              </span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#9A9DA5] hidden sm:block">
                Web Engineer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
                    isActive
                      ? "text-[#F5F5F2] font-semibold"
                      : "text-[#9A9DA5] hover:text-[#F5F5F2]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-white/10 border border-white/15 shadow-[0_0_15px_rgba(184,255,61,0.15)] -z-10"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B8FF3D] shadow-[0_0_8px_#B8FF3D]" />
                    )}
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Right Action Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Button
              href="#contact"
              variant="primary"
              size="sm"
              showArrow
              className="hidden sm:inline-flex"
            >
              Let&apos;s Talk
            </Button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-full bg-white/5 border border-white/10 text-[#F5F5F2] hover:text-[#B8FF3D] transition-colors focus:outline-none"
              aria-label="Open mobile menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </header>

      {/* Fullscreen Mobile Menu Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navItems={navItems}
        activeSection={activeSection}
      />
    </>
  );
}

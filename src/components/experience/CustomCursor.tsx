"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState<"default" | "link" | "project" | "cta">("default");
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  // Raw mouse coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for outer ring
  const springConfig = { damping: 25, stiffness: 250 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check if device supports fine hover (desktop mouse)
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    setIsTouchDevice(!media.matches);

    if (!media.matches) return;

    document.body.classList.add("has-custom-cursor");

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const projectCard = target.closest("[data-cursor='project']");
      const ctaBtn = target.closest("[data-cursor='cta']");
      const interactive = target.closest("a, button, input, textarea, [role='button'], [data-cursor='link']");

      if (projectCard) {
        setIsHovered(true);
        setCursorVariant("project");
        setCursorText("VIEW");
      } else if (ctaBtn) {
        setIsHovered(true);
        setCursorVariant("cta");
        setCursorText("");
      } else if (interactive) {
        setIsHovered(true);
        setCursorVariant("link");
        setCursorText("");
      } else {
        setIsHovered(false);
        setCursorVariant("default");
        setCursorText("");
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.body.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Small center dot - follows instantly */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#B8FF3D] pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
        style={{
          x: mouseX,
          y: mouseY,
          opacity: isHovered && cursorVariant === "project" ? 0 : 1,
        }}
        transition={{ duration: 0 }}
      />

      {/* Outer animated ring / expanding badge */}
      <motion.div
        className={`fixed top-0 left-0 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center font-display font-bold uppercase tracking-wider text-[11px] transition-colors duration-200 ${
          cursorVariant === "project"
            ? "bg-[#B8FF3D] text-[#08090C] w-18 h-18 shadow-[0_0_25px_rgba(184,255,61,0.6)]"
            : cursorVariant === "cta"
            ? "border-2 border-[#B8FF3D] bg-[#B8FF3D]/15 w-14 h-14 backdrop-blur-[1px]"
            : cursorVariant === "link"
            ? "border border-[#B8FF3D] bg-[#B8FF3D]/10 w-11 h-11"
            : "border border-white/30 bg-transparent w-8 h-8"
        }`}
        style={{
          x: smoothX,
          y: smoothY,
        }}
        animate={{
          scale: isHovered ? 1.15 : 1,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="tracking-widest"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </>
  );
}

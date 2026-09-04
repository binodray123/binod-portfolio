"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[100] pointer-events-none bg-white/[0.03]">
      <motion.div
        className="h-full bg-gradient-to-r from-[#6FAF20] via-[#B8FF3D] to-[#E2FF85] origin-left shadow-[0_0_12px_rgba(184,255,61,0.8)]"
        style={{ scaleX }}
      />
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Fast progress increment up to 100 within ~800ms
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 200);
          return 100;
        }
        return prev + Math.floor(Math.random() * 20) + 15;
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#08090C] text-[#F5F5F2]"
        >
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

          {/* Central Logo & Brand Typography */}
          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-3 h-3 rounded-full bg-[#B8FF3D] animate-ping" />
              <span className="font-display font-bold text-2xl md:text-3xl tracking-widest text-[#F5F5F2]">
                BINOD RAY
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.3 }}
              className="text-xs uppercase tracking-[0.25em] text-[#9A9DA5] mb-8"
            >
              Creative Web Engineer
            </motion.p>

            {/* Progress bar container */}
            <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
              <motion.div
                className="h-full bg-[#B8FF3D] shadow-[0_0_10px_#B8FF3D]"
                style={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>

            <span className="mt-3 font-mono text-xs text-[#9A9DA5]">
              {Math.min(progress, 100)}%
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "lime" | "neutral" | "outline" | "glow";
  size?: "sm" | "md";
  pulse?: boolean;
  className?: string;
}

export function Badge({
  children,
  variant = "neutral",
  size = "md",
  pulse = false,
  className,
}: BadgeProps) {
  const variantStyles = {
    lime: "bg-[#B8FF3D]/10 text-[#B8FF3D] border border-[#B8FF3D]/30",
    neutral: "bg-white/5 text-[#9A9DA5] border border-white/10 hover:border-white/20",
    outline: "bg-transparent text-[#F5F5F2] border border-white/15",
    glow: "bg-[#B8FF3D]/15 text-[#B8FF3D] border border-[#B8FF3D]/40 shadow-[0_0_12px_rgba(184,255,61,0.25)]",
  };

  const sizeStyles = {
    sm: "text-[11px] px-2.5 py-0.5 tracking-wider uppercase font-mono",
    md: "text-xs px-3.5 py-1 tracking-wider uppercase font-mono",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full font-medium transition-all duration-200 select-none",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B8FF3D] opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B8FF3D]" />
        </span>
      )}
      {children}
    </span>
  );
}

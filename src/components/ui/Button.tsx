"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  showArrow?: boolean;
  external?: boolean;
  magnetic?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className,
  showArrow = false,
  external = false,
  magnetic = true,
  disabled = false,
  type = "button",
}: ButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!magnetic || disabled) return;
    const { clientX, clientY } = e;
    if (!buttonRef.current) return;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.25;
    const y = (clientY - (top + height / 2)) * 0.25;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles =
    "relative inline-flex items-center justify-center font-display font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#B8FF3D] focus:ring-offset-2 focus:ring-offset-[#08090C] disabled:opacity-50 disabled:pointer-events-none group select-none";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs tracking-wider gap-1.5",
    md: "px-6 py-3 text-sm tracking-wide gap-2",
    lg: "px-8 py-4 text-base tracking-wide gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-[#B8FF3D] text-[#08090C] font-semibold hover:bg-[#c6ff5c] shadow-[0_0_20px_rgba(184,255,61,0.3)] hover:shadow-[0_0_30px_rgba(184,255,61,0.5)] border border-transparent",
    secondary:
      "bg-[#111318] text-[#F5F5F2] hover:text-[#B8FF3D] border border-white/10 hover:border-[#B8FF3D]/50 hover:bg-[#171A21]",
    outline:
      "bg-transparent text-[#F5F5F2] hover:text-[#B8FF3D] border border-white/20 hover:border-[#B8FF3D]",
    ghost:
      "bg-transparent text-[#9A9DA5] hover:text-[#F5F5F2] hover:bg-white/5",
  };

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {showArrow && (
          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-inherit" />
        )}
      </span>
    </>
  );

  const wrapperProps = {
    ref: buttonRef,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    "data-cursor": variant === "primary" ? "cta" : "link",
    className: "inline-block",
  };

  const animatedStyle = {
    x: position.x,
    y: position.y,
  };

  if (href) {
    if (external) {
      return (
        <motion.div {...wrapperProps} animate={animatedStyle} transition={{ type: "spring", stiffness: 150, damping: 15 }}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
          >
            {content}
          </a>
        </motion.div>
      );
    }
    return (
      <motion.div {...wrapperProps} animate={animatedStyle} transition={{ type: "spring", stiffness: 150, damping: 15 }}>
        <Link
          href={href}
          className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
        >
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div {...wrapperProps} animate={animatedStyle} transition={{ type: "spring", stiffness: 150, damping: 15 }}>
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      >
        {content}
      </button>
    </motion.div>
  );
}

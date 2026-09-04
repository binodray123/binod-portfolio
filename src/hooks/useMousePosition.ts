"use client";

import { useState, useEffect } from "react";

export interface MousePosition {
  x: number; // Client X
  y: number; // Client Y
  normalizedX: number; // -1 to 1
  normalizedY: number; // -1 to 1
}

export function useMousePosition(): MousePosition {
  const [position, setPosition] = useState<MousePosition>({
    x: 0,
    y: 0,
    normalizedX: 0,
    normalizedY: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      const normalizedX = (event.clientX / width) * 2 - 1;
      const normalizedY = -(event.clientY / height) * 2 + 1;

      setPosition({
        x: event.clientX,
        y: event.clientY,
        normalizedX,
        normalizedY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return position;
}

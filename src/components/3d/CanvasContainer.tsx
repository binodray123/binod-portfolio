"use client";

import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";

interface CanvasContainerProps {
  children: React.ReactNode;
  className?: string;
  camera?: {
    position?: [number, number, number];
    fov?: number;
  };
  fallback?: React.ReactNode;
}

export function CanvasContainer({
  children,
  className,
  camera = { position: [0, 0, 6], fov: 45 },
  fallback,
}: CanvasContainerProps) {
  const [mounted, setMounted] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    setMounted(true);
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      setHasWebGL(Boolean(gl));
    } catch {
      setHasWebGL(false);
    }
  }, []);

  if (!mounted) {
    return (
      <div className={className}>
        {fallback || (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-8 h-8 rounded-full border-2 border-[#B8FF3D]/30 border-t-[#B8FF3D] animate-spin" />
          </div>
        )}
      </div>
    );
  }

  if (!hasWebGL) {
    return (
      <div className={className}>
        {fallback || (
          <div className="w-full h-full flex items-center justify-center text-xs text-[#9A9DA5]">
            WebGL not supported
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={className}>
      <Canvas
        camera={camera}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <Suspense fallback={null}>{children}</Suspense>
      </Canvas>
    </div>
  );
}

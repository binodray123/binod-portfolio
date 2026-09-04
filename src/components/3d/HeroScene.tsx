"use client";

import React, { useRef, useMemo, useEffect, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { CanvasContainer } from "./CanvasContainer";

function Particles({ count = 180 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, scales] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sc = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      const radius = 2.2 + Math.random() * 2.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);

      sc[i] = Math.random() * 0.04 + 0.015;
    }
    return [pos, sc];
  }, [count]);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y += delta * 0.08;
    pointsRef.current.rotation.x += delta * 0.04;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#B8FF3D"
        transparent
        opacity={0.7}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function FloatingCore() {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.Mesh>(null);
  const ringRef1 = useRef<THREE.Mesh>(null);
  const ringRef2 = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  const { pointer } = useThree();

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
      // Gentle floating hover
      meshRef.current.position.y = Math.sin(time * 1.5) * 0.12;
    }

    if (wireframeRef.current) {
      wireframeRef.current.rotation.x -= delta * 0.15;
      wireframeRef.current.rotation.y -= delta * 0.25;
      wireframeRef.current.position.y = Math.sin(time * 1.5) * 0.12;
    }

    if (ringRef1.current) {
      ringRef1.current.rotation.x = Math.sin(time * 0.5) * 0.4 + 0.8;
      ringRef1.current.rotation.y += delta * 0.3;
    }

    if (ringRef2.current) {
      ringRef2.current.rotation.x = Math.cos(time * 0.4) * 0.5 - 0.5;
      ringRef2.current.rotation.z += delta * 0.25;
    }

    // Subtle pointer parallax tilt
    if (groupRef.current) {
      const targetRotationX = pointer.y * 0.4;
      const targetRotationY = pointer.x * 0.5;
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        targetRotationX,
        delta * 3
      );
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        targetRotationY,
        delta * 3
      );
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central Solid Geometric Core */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.2, 0]} />
        <meshStandardMaterial
          color="#151821"
          roughness={0.2}
          metalness={0.9}
          wireframe={false}
        />
      </mesh>

      {/* Outer Wireframe Overlay */}
      <mesh ref={wireframeRef}>
        <icosahedronGeometry args={[1.35, 1]} />
        <meshStandardMaterial
          color="#B8FF3D"
          wireframe
          transparent
          opacity={0.35}
          emissive="#B8FF3D"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Orbiting Ring 1 */}
      <mesh ref={ringRef1}>
        <torusGeometry args={[2.0, 0.02, 16, 100]} />
        <meshStandardMaterial
          color="#B8FF3D"
          roughness={0.1}
          metalness={0.8}
          emissive="#B8FF3D"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Orbiting Ring 2 */}
      <mesh ref={ringRef2}>
        <torusGeometry args={[2.4, 0.015, 16, 100]} />
        <meshStandardMaterial
          color="#ffffff"
          roughness={0.3}
          metalness={0.9}
          transparent
          opacity={0.4}
        />
      </mesh>
    </group>
  );
}

function SceneContent({ isMobile = false }: { isMobile?: boolean }) {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 8, 5]} intensity={1.2} />
      <pointLight position={[3, 3, 2]} color="#B8FF3D" intensity={2.5} distance={10} />
      <pointLight position={[-4, -3, -2]} color="#6FAF20" intensity={2} distance={8} />

      <FloatingCore />
      <Particles count={isMobile ? 80 : 220} />
    </>
  );
}

export function HeroScene() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="relative w-full h-[420px] sm:h-[500px] md:h-[580px] lg:h-[650px] flex items-center justify-center">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-radial-glow opacity-60 pointer-events-none" />

      {/* 3D Canvas */}
      <CanvasContainer
        className="w-full h-full"
        camera={{ position: [0, 0, isMobile ? 6.2 : 5.4], fov: 45 }}
      >
        <SceneContent isMobile={isMobile} />
      </CanvasContainer>

      {/* Floating Badges pinned around the 3D core */}
      <div className="absolute top-6 right-4 sm:right-8 bg-[#111318]/90 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl text-xs font-mono text-[#F5F5F2] shadow-xl flex items-center gap-2.5 z-10 select-none pointer-events-none animate-pulse">
        <div className="w-2 h-2 rounded-full bg-[#B8FF3D] shadow-[0_0_8px_#B8FF3D]" />
        <span>2+ Years Experience</span>
      </div>

      <div className="absolute bottom-10 left-4 sm:left-8 bg-[#111318]/90 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl text-xs font-mono text-[#F5F5F2] shadow-xl flex items-center gap-2.5 z-10 select-none pointer-events-none">
        <span className="text-[#B8FF3D] font-bold">⚡</span>
        <span>Available for Freelance</span>
      </div>
    </div>
  );
}

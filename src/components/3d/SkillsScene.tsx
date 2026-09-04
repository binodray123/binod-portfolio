"use client";

import React, { useRef, useState, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { CanvasContainer } from "./CanvasContainer";
import * as THREE from "three";
import { Skill, skillsData } from "@/data/skills";

// Helper to create circular canvas texture for crisp 3D skill pills
function createSkillTexture(text: string, isHovered: boolean) {
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 128;
  const ctx = canvas.getContext("2d");
  if (!ctx) return new THREE.CanvasTexture(canvas);

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Background rounded rectangle
  ctx.fillStyle = isHovered ? "rgba(184, 255, 61, 0.95)" : "rgba(17, 19, 24, 0.85)";
  ctx.strokeStyle = isHovered ? "#B8FF3D" : "rgba(255, 255, 255, 0.2)";
  ctx.lineWidth = 4;

  const radius = 24;
  const x = 8;
  const y = 20;
  const width = canvas.width - 16;
  const height = canvas.height - 40;

  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Text
  ctx.fillStyle = isHovered ? "#08090C" : "#F5F5F2";
  ctx.font = "bold 34px sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text, canvas.width / 2, canvas.height / 2);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

interface OrbitingSkillProps {
  skill: Skill;
  index: number;
  total: number;
  onHover: (skill: Skill | null) => void;
  hoveredSkill: Skill | null;
}

function OrbitingSkill({
  skill,
  index,
  total,
  onHover,
  hoveredSkill,
}: OrbitingSkillProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const lineRef = useRef<THREE.Line>(null);

  const isHovered = hoveredSkill?.name === skill.name;
  const angleOffset = (index / total) * Math.PI * 2;

  // Pre-generate textures for default and hovered states
  const defaultTexture = useMemo(() => createSkillTexture(skill.name, false), [skill.name]);
  const hoverTexture = useMemo(() => createSkillTexture(skill.name, true), [skill.name]);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    // Orbit speed pauses or slows slightly on hover
    const currentSpeed = hoveredSkill ? skill.orbitSpeed * 0.2 : skill.orbitSpeed;
    const angle = angleOffset + time * currentSpeed;

    const x = Math.cos(angle) * skill.orbitRadius;
    const z = Math.sin(angle) * (skill.orbitRadius * 0.55); // elliptical orbit
    const y = Math.sin(time * 1.5 + index) * 0.3;

    meshRef.current.position.set(x, y, z);
    // Keep sprite / billboard facing camera
    meshRef.current.rotation.set(0, 0, 0);

    // Update connection line when hovered
    if (lineRef.current) {
      const positions = lineRef.current.geometry.attributes.position.array as Float32Array;
      positions[0] = 0;
      positions[1] = 0;
      positions[2] = 0;
      positions[3] = x;
      positions[4] = y;
      positions[5] = z;
      lineRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <>
      {/* Line connecting to center when hovered */}
      {isHovered && (
        // @ts-expect-error - React 19 JSX types line as SVGLineElement whereas R3F uses THREE.Line
        <line ref={lineRef}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[new Float32Array(6), 3]}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#B8FF3D" linewidth={2} transparent opacity={0.8} />
        </line>
      )}

      {/* Orbiting skill sprite */}
      <mesh
        ref={meshRef}
        onPointerOver={(e) => {
          e.stopPropagation();
          onHover(skill);
        }}
        onPointerOut={() => onHover(null)}
        scale={isHovered ? [1.6, 0.8, 1] : [1.3, 0.65, 1]}
      >
        <planeGeometry args={[1.5, 0.75]} />
        <meshBasicMaterial
          map={isHovered ? hoverTexture : defaultTexture}
          transparent
          side={THREE.DoubleSide}
        />
      </mesh>
    </>
  );
}

function CenterCore({ hovered }: { hovered: boolean }) {
  const coreRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!coreRef.current) return;
    coreRef.current.rotation.y += delta * 0.5;
  });

  return (
    <group>
      <mesh ref={coreRef}>
        <octahedronGeometry args={[0.7, 0]} />
        <meshStandardMaterial
          color={hovered ? "#B8FF3D" : "#111318"}
          roughness={0.2}
          metalness={0.8}
          wireframe={!hovered}
          emissive={hovered ? "#B8FF3D" : "#000000"}
          emissiveIntensity={hovered ? 0.4 : 0}
        />
      </mesh>
      {/* Inner glowing sphere */}
      <mesh>
        <sphereGeometry args={[0.35, 16, 16]} />
        <meshBasicMaterial color="#B8FF3D" />
      </mesh>
    </group>
  );
}

export function SkillsScene({
  onSkillSelect,
}: {
  onSkillSelect?: (skill: Skill | null) => void;
}) {
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null);

  const handleHover = (skill: Skill | null) => {
    setHoveredSkill(skill);
    if (onSkillSelect) onSkillSelect(skill);
  };

  return (
    <div className="relative w-full h-[520px] rounded-3xl overflow-hidden bg-[#0A0C10]/80 border border-white/10 shadow-2xl">
      <CanvasContainer camera={{ position: [0, 0, 8.5], fov: 45 }} className="w-full h-full">
        <ambientLight intensity={0.7} />
        <pointLight position={[5, 5, 5]} color="#B8FF3D" intensity={1.5} />
        <CenterCore hovered={Boolean(hoveredSkill)} />

        {/* Orbit track rings */}
        <mesh rotation={[Math.PI / 2.3, 0, 0]}>
          <ringGeometry args={[2.59, 2.61, 64]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.06} side={THREE.DoubleSide} />
        </mesh>
        <mesh rotation={[Math.PI / 2.3, 0, 0]}>
          <ringGeometry args={[3.59, 3.61, 64]} />
          <meshBasicMaterial color="#B8FF3D" transparent opacity={0.1} side={THREE.DoubleSide} />
        </mesh>
        <mesh rotation={[Math.PI / 2.3, 0, 0]}>
          <ringGeometry args={[4.59, 4.61, 64]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.06} side={THREE.DoubleSide} />
        </mesh>

        {skillsData.slice(0, 10).map((skill, idx) => (
          <OrbitingSkill
            key={skill.name}
            skill={skill}
            index={idx}
            total={10}
            onHover={handleHover}
            hoveredSkill={hoveredSkill}
          />
        ))}
      </CanvasContainer>

      {/* Center Label */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none text-center">
        <span className="font-display font-black tracking-widest text-xs uppercase px-3 py-1 rounded-full bg-[#111318]/90 border border-white/10 text-[#F5F5F2]">
          BINOD CORE
        </span>
      </div>

      {/* Floating Info card at bottom on hover */}
      {hoveredSkill && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-11/12 max-w-md bg-[#111318]/95 backdrop-blur-md border border-[#B8FF3D]/40 p-4 rounded-2xl shadow-2xl transition-all duration-300 pointer-events-none">
          <div className="flex items-center justify-between mb-1.5">
            <span className="font-display font-bold text-[#F5F5F2] text-base">
              {hoveredSkill.name}
            </span>
            <span className="font-mono text-xs text-[#B8FF3D] font-bold">
              {hoveredSkill.level}% Proficiency
            </span>
          </div>
          <p className="text-xs text-[#9A9DA5] leading-relaxed">
            {hoveredSkill.description}
          </p>
        </div>
      )}
    </div>
  );
}

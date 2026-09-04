"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { CanvasContainer } from "./CanvasContainer";

function ContactRingParticles({ count = 90 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 2.4 + Math.random() * 1.5;
      const angle = (i / count) * Math.PI * 2;
      pos[i * 3] = Math.cos(angle) * radius;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 0.8;
      pos[i * 3 + 2] = Math.sin(angle) * radius;
    }
    return [pos];
  }, [count]);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y += delta * 0.15;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#B8FF3D"
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function ContactTorusRing() {
  const meshRef = useRef<THREE.Mesh>(null);
  const meshRef2 = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(time * 0.3) * 0.3 + 0.9;
      meshRef.current.rotation.y += delta * 0.2;
    }
    if (meshRef2.current) {
      meshRef2.current.rotation.x = -Math.sin(time * 0.25) * 0.2 + 0.8;
      meshRef2.current.rotation.z -= delta * 0.15;
    }
  });

  return (
    <group>
      <mesh ref={meshRef}>
        <torusGeometry args={[2.2, 0.05, 16, 100]} />
        <meshStandardMaterial
          color="#1A1D24"
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>
      <mesh ref={meshRef2}>
        <torusGeometry args={[2.6, 0.02, 16, 100]} />
        <meshStandardMaterial
          color="#B8FF3D"
          roughness={0.2}
          metalness={0.8}
          emissive="#B8FF3D"
          emissiveIntensity={0.25}
        />
      </mesh>
    </group>
  );
}

export function ContactScene() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-60">
      <CanvasContainer camera={{ position: [0, 0, 6], fov: 45 }} className="w-full h-full">
        <ambientLight intensity={0.4} />
        <directionalLight position={[3, 5, 2]} intensity={1} />
        <pointLight position={[0, 0, 2]} color="#B8FF3D" intensity={2} />
        <ContactTorusRing />
        <ContactRingParticles />
      </CanvasContainer>
    </div>
  );
}

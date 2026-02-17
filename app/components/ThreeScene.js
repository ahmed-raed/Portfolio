"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float, Icosahedron } from "@react-three/drei";

function AnimatedShape() {
  const meshRef = useRef(null);

  useFrame((state) => {
    if (meshRef.current) {
        const time = state.clock.getElapsedTime();
        meshRef.current.rotation.x = time * 0.1;
        meshRef.current.rotation.y = time * 0.12;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <Icosahedron args={[1, 0]} ref={meshRef} scale={2.5}>
        <MeshDistortMaterial
          color="#4afdfb"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          transparent
          opacity={0.15}
          wireframe
        />
      </Icosahedron>
    </Float>
  );
}

export default function ThreeScene() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none",
      }}
    >
      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <AnimatedShape />
      </Canvas>
    </div>
  );
}

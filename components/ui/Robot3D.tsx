"use client";
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, Float, ContactShadows, Environment } from '@react-three/drei';
import * as THREE from 'three';

const CuteRobot = () => {
  const headRef = useRef<THREE.Group>(null);
  const leftArmRef = useRef<THREE.Mesh>(null);
  const rightArmRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (headRef.current) {
      const mouseX = state.mouse.x;
      const mouseY = state.mouse.y;

      headRef.current.rotation.y = THREE.MathUtils.lerp(headRef.current.rotation.y, mouseX * 0.5, 0.1);
      headRef.current.rotation.x = THREE.MathUtils.lerp(headRef.current.rotation.x, -mouseY * 0.3, 0.1);
    }

    if (leftArmRef.current && rightArmRef.current) {
        const t = state.clock.getElapsedTime();
        leftArmRef.current.position.y = -0.5 + Math.sin(t * 2) * 0.05;
        rightArmRef.current.position.y = -0.5 + Math.sin(t * 2 + 1) * 0.05;
        rightArmRef.current.rotation.z = Math.sin(t * 3) * 0.2; 
    }
  });

  return (
    // ADJUSTED: Moved Y down slightly (-0.2) to center it better when zoomed in
    <group position={[0, -0.2, 0]}>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5} floatingRange={[0, 0.2]}>
        
        {/* --- HEAD GROUP --- */}
        <group ref={headRef} position={[0, 0.6, 0]}>
          <mesh>
            <sphereGeometry args={[0.8, 32, 32]} />
            <meshStandardMaterial color="#ffffff" roughness={0.3} metalness={0.1} />
          </mesh>
          <mesh position={[0, 0.05, 0.55]} scale={[0.85, 0.65, 0.5]}>
            <sphereGeometry args={[0.8, 32, 32]} />
            <meshPhysicalMaterial color="#000000" roughness={0.2} metalness={0.8} clearcoat={1} clearcoatRoughness={0.1} />
          </mesh>
          <mesh position={[-0.25, 0.1, 0.9]} rotation={[0, 0, -0.2]}>
            <capsuleGeometry args={[0.08, 0.2, 4, 8]} />
            <meshBasicMaterial color="#00eaff" />
          </mesh>
          <mesh position={[0.25, 0.1, 0.9]} rotation={[0, 0, 0.2]}>
            <capsuleGeometry args={[0.08, 0.2, 4, 8]} />
            <meshBasicMaterial color="#00eaff" />
          </mesh>
          <mesh position={[-0.85, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
            <cylinderGeometry args={[0.15, 0.15, 0.3]} />
            <meshStandardMaterial color="#f97316" roughness={0.2} metalness={0.5} />
          </mesh>
          <mesh position={[0.85, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
            <cylinderGeometry args={[0.15, 0.15, 0.3]} />
            <meshStandardMaterial color="#f97316" roughness={0.2} metalness={0.5} />
          </mesh>
          <mesh position={[0, 0.8, 0]}>
             <cylinderGeometry args={[0.1, 0.2, 0.1]} />
             <meshStandardMaterial color="#f97316" roughness={0.2} metalness={0.5} />
          </mesh>
        </group>

        {/* --- BODY GROUP --- */}
        <group position={[0, -0.6, 0]}>
           <mesh position={[0, 0, 0]}>
             <capsuleGeometry args={[0.5, 0.6, 4, 16]} />
             <meshStandardMaterial color="#ffffff" roughness={0.3} metalness={0.1} />
           </mesh>
           <mesh position={[0, 0.1, 0.45]} rotation={[0.1, 0, 0]}>
             <boxGeometry args={[0.4, 0.3, 0.1]} />
             <meshStandardMaterial color="#f97316" roughness={0.2} metalness={0.5} />
           </mesh>
        </group>

        {/* --- ARMS --- */}
        <mesh ref={leftArmRef} position={[-0.7, -0.5, 0]} rotation={[0, 0, 0.5]}>
           <capsuleGeometry args={[0.15, 0.6, 4, 8]} />
           <meshStandardMaterial color="#ffffff" roughness={0.3} metalness={0.1} />
        </mesh>
        <mesh ref={rightArmRef} position={[0.7, -0.3, 0.2]} rotation={[0, 0, -0.5]}>
           <capsuleGeometry args={[0.15, 0.6, 4, 8]} />
           <meshStandardMaterial color="#ffffff" roughness={0.3} metalness={0.1} />
        </mesh>

      </Float>
      <ContactShadows position={[0, -1.8, 0]} opacity={0.4} scale={10} blur={2.5} far={4} color="#f97316" />
    </group>
  );
};

export const Robot3D = () => {
  return (
    <div className="w-full h-full relative cursor-none pointer-events-none">
      <Canvas shadows dpr={[1, 1.5]} performance={{ min: 0.5 }}>
        {/* CHANGED: Position Z changed from 6.5 to 5.2 to Zoom In (Make bigger) */}
        <PerspectiveCamera makeDefault position={[0, 0, 4.2]} fov={45} />
        
        <ambientLight intensity={0.7} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#f97316" />
        <Environment preset="city" />
        <CuteRobot />
      </Canvas>
    </div>
  );
};
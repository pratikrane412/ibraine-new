"use client";
import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const Cursor = () => {
  const [isVisible, setIsVisible] = useState(false);

  // 1. Track Raw Mouse Position
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // 2. PHYSICS CONFIGURATION (Cinematic/Heavy Feel)
  
  // OUTER RING (The Leader - "First")
  // stiffness: 150 (Reduced from 500) -> Makes it float to the mouse, not snap.
  // damping: 20 -> Adds a "weighty" slide when stopping.
  const springConfigRing = {
    stiffness: 150, 
    damping: 20,    
    mass: 0.5,
  };

  // INNER DOT (The Follower - "Second")
  // stiffness: 80 -> Very slow, lags behind the ring significantly.
  // mass: 1 -> Feels heavy.
  const springConfigDot = {
    stiffness: 80, 
    damping: 20,   
    mass: 1,      
  };

  // Apply springs
  const ringX = useSpring(cursorX, springConfigRing);
  const ringY = useSpring(cursorY, springConfigRing);
  
  const dotX = useSpring(cursorX, springConfigDot);
  const dotY = useSpring(cursorY, springConfigDot);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY, isVisible]);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <div
      className={`fixed top-0 left-0 z-[9999] pointer-events-none transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ mixBlendMode: "difference" }}
    >
      {/* OUTER RING (First - The Leader) */}
      <motion.div
        style={{
          translateX: ringX,
          translateY: ringY,
        }}
        className="absolute -left-5 -top-5 w-10 h-10 rounded-full border border-white will-change-transform"
      />

      {/* INNER DOT (Second - The Heavy Follower) */}
      <motion.div
        style={{
          translateX: dotX,
          translateY: dotY,
        }}
        className="absolute -left-1 -top-1 w-2 h-2 bg-white rounded-full will-change-transform"
      />
    </div>
  );
};
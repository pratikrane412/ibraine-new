"use client";
import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const Cursor = () => {
  const [isVisible, setIsVisible] = useState(false);

  // 1. Track Mouse Position
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // 2. SMOOTH SPRING CONFIG (Faster & Fluid)
  const springConfig = { 
    damping: 15, 
    stiffness: 150, 
    mass: 0.5 
  };
  
  // Only the Outer Ring uses the spring (lag effect)
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY, isVisible]);

  // Hide on mobile devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <div className={`fixed inset-0 z-[9999] pointer-events-none transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}>
      
      {/* OUTER RING (Smooth Follower) */}
      <motion.div
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          left: -24, 
          top: -24,
        }}
        className="fixed w-12 h-12 border border-zinc-500 dark:border-white/50 rounded-full pointer-events-none"
      />

      {/* INNER DOT (Instant Movement - No lag) */}
      <motion.div
        style={{
          translateX: cursorX, // Direct tracking for precision
          translateY: cursorY,
          left: -4, 
          top: -4, 
        }}
        className="fixed w-2 h-2 bg-orange-500 rounded-full pointer-events-none"
      />
    </div>
  );
};
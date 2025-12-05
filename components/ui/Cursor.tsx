"use client";
import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const Cursor = () => {
  const [isVisible, setIsVisible] = useState(false);

  // 1. Track Mouse Position
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // 2. Create Smooth Springs for the Outer Ring
  // stiffness = speed, damping = bounciness (lower is bouncier)
  const springConfig = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Show cursor only after first movement to avoid jumping
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY, isVisible]);

  // Hide on mobile devices (touch screens)
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <div className={`fixed inset-0 z-[9999] pointer-events-none transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}>
      
      {/* 
         OUTER RING (Smooth Follower) 
         We subtract half the width/height (24px) to center it perfectly
      */}
      <motion.div
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          left: -24, // Half of w-12
          top: -24,  // Half of h-12
        }}
        className="fixed w-12 h-12 border border-zinc-800 dark:border-white rounded-full pointer-events-none"
      />

      {/* 
         INNER DOT (Instant Movement) 
         We subtract half the width/height (4px) to center it perfectly
      */}
      <motion.div
        style={{
          translateX: cursorX,
          translateY: cursorY,
          left: -4, // Half of w-2
          top: -4,  // Half of h-2
        }}
        className="fixed w-2 h-2 bg-zinc-900 dark:bg-white rounded-full pointer-events-none"
      />
    </div>
  );
};
"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop", // Office
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop", // Data
  "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=800&auto=format&fit=crop", // Meeting
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop", // Team
];

export const VisualShowcase = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section
      ref={containerRef}
      className="py-24 bg-zinc-50 dark:bg-zinc-950 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            We don't just work.
            <br />
            We craft experiences.
          </h2>
          <p className="text-zinc-500">
            From our studio in Mumbai to the global stage.
          </p>
        </div>
      </div>

      <div className="flex gap-6 md:gap-8 justify-center min-w-[120%] -ml-[10%]">
        {/* Column 1 - Moving Up */}
        <motion.div
          style={{ y: y1 }}
          className="flex flex-col gap-6 w-64 md:w-80 pt-20"
        >
          <div className="h-96 rounded-2xl overflow-hidden shadow-lg">
            <img
              src={images[0]}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              alt="Office"
            />
          </div>
          <div className="h-64 rounded-2xl overflow-hidden shadow-lg">
            <img
              src={images[1]}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              alt="Data"
            />
          </div>
        </motion.div>

        {/* Column 2 - Moving Down */}
        <motion.div
          style={{ y: y2 }}
          className="flex flex-col gap-6 w-64 md:w-80 -mt-20"
        >
          <div className="h-64 rounded-2xl overflow-hidden shadow-lg">
            <img
              src={images[2]}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              alt="Meeting"
            />
          </div>
          <div className="h-96 rounded-2xl overflow-hidden shadow-lg">
            <img
              src={images[3]}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              alt="Team"
            />
          </div>
        </motion.div>

        {/* Column 3 - Moving Up */}
        <motion.div
          style={{ y: y1 }}
          className="flex flex-col gap-6 w-64 md:w-80 pt-10 hidden md:flex"
        >
          <div className="h-80 rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              alt="Work"
            />
          </div>
          <div className="h-72 rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              alt="Design"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

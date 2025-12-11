"use client";
import React from "react";
import { motion } from "framer-motion";

// --- DATA: List of Badge Images ---
// Increased base widths for larger rendering
const badges = [
  { src: "/badges/google.png", alt: "Google Partner", width: 180 },
  { src: "/badges/meta.png", alt: "Meta Business Partner", width: 200 },
  { src: "/badges/2022.png", alt: "Powerful Men in Business 2022", width: 160 },
  { src: "/badges/2019.png", alt: "Most Promising Digital Marketing Consultant 2019", width: 160 },
  { src: "/badges/2018.png", alt: "Most Promising Digital Marketing Service Provider 2018", width: 160 },
];

export const VerifiedBy = () => {
  return (
    <section className="py-24 bg-white dark:bg-black transition-colors duration-300 border-t border-zinc-200 dark:border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Section Heading */}
        <h3 className="text-xl md:text-2xl font-bold uppercase tracking-widest mb-16 text-zinc-400 dark:text-zinc-600">
          Awards & <span className="text-orange-500">Recognitions</span>
        </h3>

        {/* Badges Grid */}
        {/* REMOVED: grayscale classes. REDUCED: gap classes. */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {badges.map((badge, index) => (
            <motion.div 
              key={index}
              // Reduced hover scale slightly since they are closer together now
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center"
            >
              <img 
                src={badge.src} 
                alt={badge.alt} 
                // INCREASED: max-h classes to allow them to be bigger
                className="object-contain max-h-32 md:max-h-40 w-auto mix-blend-multiply dark:mix-blend-normal" 
                // INCREASED: dynamic max-width allows them to grow larger based on base width
                style={{ width: "auto", height: "auto", maxWidth: badge.width + 60 }} 
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
"use client";
import React from "react";
import { motion } from "framer-motion";

// --- DATA: List of Badge Images with Links ---
const badges = [
  { 
    src: "/badges/google.png", 
    alt: "Google Partner", 
    width: 180, 
    link: "https://www.google.com/partners/agency?id=3351257335" // <--- Add your link here
  },
  { 
    src: "/badges/meta.png", 
    alt: "Meta Business Partner", 
    width: 200, 
    link: "https://www.facebook.com/business/marketing-partners" // <--- Add your link here
  },
  { 
    src: "/badges/2022.png", 
    alt: "Powerful Men in Business 2022", 
    width: 160, 
    link: "https://ciolookindia.com/harsh-pareek-staunch-leadership-acumen/" // <--- Add your link here
  },
  { 
    src: "/badges/2019.png", 
    alt: "Most Promising Digital Marketing Consultant 2019", 
    width: 160, 
    link: "https://marketing.siliconindia.com/ranking/digital-marketing-consultants-2019-rid-587.html" // <--- Add your link here
  },
  { 
    src: "/badges/2018.png", 
    alt: "Most Promising Digital Marketing Service Provider 2018", 
    width: 160, 
    link: "https://technology.siliconindia.com/vendor/ibraine-implementing-effective-optimization-techniques-to-maximize-customers--marketing-potentials-cid-5574.html" // <--- Add your link here
  },
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
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
          {badges.map((badge, index) => (
            <motion.a 
              key={index}
              href={badge.link}
              target="_blank"            // Opens in a new tab
              rel="noopener noreferrer"  // Security best practice for new tabs
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }} // Adds a subtle click effect
              className="flex items-center justify-center cursor-pointer"
            >
              <img 
                src={badge.src} 
                alt={badge.alt} 
                className="object-contain max-h-32 md:max-h-40 w-auto mix-blend-multiply dark:mix-blend-normal" 
                style={{ width: "auto", height: "auto", maxWidth: badge.width + 60 }} 
              />
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};
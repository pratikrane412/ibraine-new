import React from "react";

// Matches the blue in "Braine"
const BRAND_BLUE = "#2B7ABC"; 
// Matches the orange dot/underline
const BRAND_ORANGE = "#FF6B00"; 

export const Clients = () => {
  const clients = [
    "MOTOEARTH",
    "BLUEHOST",
    "WORKWISE",
    "HOUSE OF KHICHDI",
    "PAPITA",
    "BRAGPACKER",
    "NATVENTURE",
  ];

  return (
    <section 
      className="py-10 border-y border-blue-500/20 transition-colors duration-300"
      style={{ backgroundColor: BRAND_BLUE }} // Using inline style to ensure exact brand match
    >
      <div className="overflow-hidden whitespace-nowrap">
        <div className="inline-flex animate-marquee gap-16 items-center">
          {[...clients, ...clients, ...clients, ...clients].map(
            (client, index) => (
              <span
                key={index}
                // Text is semi-transparent white, turning full white on hover
                // Added a slight text shadow for depth
                className="text-2xl md:text-4xl font-bold text-white/40 uppercase tracking-widest hover:text-white transition-colors cursor-default"
              >
                {client}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
};
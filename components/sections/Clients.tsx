"use client";
import React from "react";
import { motion } from "framer-motion";

// Matches the blue in "Braine"
const BRAND_BLUE = "#2B7ABC"; 

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
      className="py-6 border-y border-white/10 overflow-hidden relative z-20"
      style={{ backgroundColor: BRAND_BLUE }} 
    >
      <div className="flex overflow-hidden whitespace-nowrap">
        <motion.div 
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-16 items-center pr-16"
        >
          {[...clients, ...clients, ...clients, ...clients].map(
            (client, index) => (
              <span
                key={index}
                // REMOVED: font-black
                // ADDED: font-medium (Standard weight, clean look)
                className="text-xl md:text-3xl font-medium text-white uppercase tracking-wider cursor-default select-none shrink-0"
              >
                {client}
              </span>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
};
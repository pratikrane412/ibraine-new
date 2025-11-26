"use client";
import React from 'react';
import { motion } from 'framer-motion';

const brands = [
  "Jio", "Bajaj", "BMW", "Tata Motors", "RBL Bank", "Lupin", "Eris",
  "Just In Time", "Ram Bandhu", "P.F. Changs", "Somaiya", "Crossword",
  "PressTo", "Infra.Market", "Phillips", "Western", "Hosteller", "Delhivery",
  "Sila", "Honeywell", "Sandwizza", "HomeTown", "Elgi", "Everest Fleet",
  "ONDC", "Maharashtra Gov", "SOS Villages", "The Byke", "Alkem", "Pidilite",
  "SmeDream", "MotoEarth", "Papita", "FitXFatLoss", "NatVenture", "WorkWise"
];

export const TrustGrid = () => {
  return (
    <section className="py-24 px-4 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4 transition-colors">
            Brands Who <span className="text-orange-500">Trust Us</span>
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg transition-colors">
            Delivering value to market leaders for over 8 years.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          
          {brands.map((brand, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.02, duration: 0.4 }}
              whileHover={{ 
                y: -5, 
              }}
              className="h-28 bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-white/5 rounded-xl flex items-center justify-center p-4 cursor-default transition-all group hover:border-orange-500/30 dark:hover:border-white/20 shadow-sm dark:shadow-none"
            >
              <span className="text-lg font-bold text-zinc-400 group-hover:text-zinc-900 dark:text-zinc-600 dark:group-hover:text-white transition-colors text-center">
                {brand}
              </span>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};
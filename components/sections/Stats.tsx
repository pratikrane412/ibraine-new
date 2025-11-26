"use client";
import React from 'react';
import { motion } from 'framer-motion';

export const Stats = () => {
  const stats = [
    { label: "Revenue Generated", value: "$50M+" },
    { label: "Active Clients", value: "120+" },
    { label: "Retention Rate", value: "98%" },
    { label: "Years Experience", value: "12+" },
  ];

  return (
    <section className="py-20 border-b border-white/5 bg-zinc-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl md:text-6xl font-bold text-white mb-2 tracking-tight">
                {stat.value}
              </h3>
              <p className="text-zinc-500 text-sm md:text-base uppercase tracking-wider font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
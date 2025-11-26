import React from 'react';

export const Clients = () => {
  const clients = ["MOTOEARTH", "SMEDREAM", "WORKWISE", "JOULES", "PAPITA", "FITXFATLOSS", "NATVENTURE"];
  
  return (
    <section className="py-10 border-y border-zinc-100 dark:border-white/5 bg-white dark:bg-white/[0.02] transition-colors duration-300">
      <div className="overflow-hidden whitespace-nowrap">
        <div className="inline-flex animate-marquee gap-16 items-center">
          {/* Duplicating the list to ensure seamless infinite scroll */}
          {[...clients, ...clients, ...clients, ...clients].map((client, index) => (
            <span 
              key={index} 
              className="text-2xl md:text-4xl font-bold text-zinc-300 dark:text-white/20 uppercase tracking-widest hover:text-orange-500/50 dark:hover:text-orange-500/50 transition-colors cursor-default"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
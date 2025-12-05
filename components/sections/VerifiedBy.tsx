"use client";
import React from 'react';
import { motion } from 'framer-motion';

// --- 1. GOOGLE PARTNER BADGE (Square Card) ---
const GoogleBadge = () => (
  <div className="w-32 h-32 bg-white border border-gray-200 rounded-lg flex flex-col items-center justify-center shadow-sm relative overflow-hidden group">
    {/* Colored Top Bar */}
    <div className="absolute top-0 left-0 w-full h-1.5 flex">
      <div className="w-1/4 bg-blue-500"></div>
      <div className="w-1/4 bg-green-500"></div>
      <div className="w-1/4 bg-yellow-500"></div>
      <div className="w-1/4 bg-red-500"></div>
    </div>
    <svg viewBox="0 0 24 24" className="w-12 h-12 mb-2">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
    <div className="text-center leading-none">
      <span className="block text-gray-500 text-[10px] font-medium">Google</span>
      <span className="block text-gray-700 text-sm font-bold">Partner</span>
    </div>
  </div>
);

// --- 2. META PARTNER BADGE (Rounded Pill) ---
const MetaBadge = () => (
  <div className="w-40 h-24 bg-white border border-gray-300 rounded-xl flex items-center justify-center gap-3 shadow-sm px-4">
    <svg viewBox="0 0 24 24" fill="#0668E1" className="w-10 h-10 shrink-0">
      <path d="M22.616 5.86c-1.72-.592-3.32.222-4.133 1.83l-.337.667c-.822 1.622-2.149 2.149-3.236 2.149-.783 0-1.282-.363-1.455-.989.266-2.556 1.737-4.14 4.195-4.14h.139c.928 0 1.68-.752 1.68-1.68 0-.928-.752-1.68-1.68-1.68H17.65c-4.453 0-6.93 2.893-7.393 7.393-.167.092-.34.18-.518.259-.974.425-2.392.296-3.197-1.29l-.336-.666c-.813-1.608-2.414-2.422-4.133-1.83-1.77.61-2.673 2.597-2.022 4.352l.965 2.607c1.37 3.702 4.925 6.163 8.871 6.163 1.939 0 3.82-.596 5.437-1.724 1.617 1.128 3.498 1.724 5.437 1.724 3.946 0 7.502-2.46 8.87-6.163l.966-2.607c.651-1.755-.252-3.742-2.022-4.352ZM8.083 17.518c-2.31 0-4.38-1.432-5.176-3.583l-.965-2.607c-.12-.324.045-.69.369-.801.32-.11.666.042.813.333l.337.666c1.377 2.715 4.49 2.91 5.922 2.285.534-.233 1.025-.546 1.459-.922-.72 2.533-2.04 4.629-2.76 4.63Z" />
    </svg>
    <div className="flex flex-col text-left">
      <span className="text-gray-900 font-bold text-sm leading-tight">Meta</span>
      <span className="text-gray-500 text-[10px] leading-tight">Business Partner</span>
    </div>
  </div>
);

// --- 3. CLUTCH BADGE (Hexagon) ---
const ClutchBadge = () => (
  <div className="relative w-32 h-36 flex items-center justify-center drop-shadow-md">
    {/* Hexagon Shape */}
    <svg viewBox="0 0 100 115" className="absolute inset-0 w-full h-full fill-white stroke-slate-700 stroke-2">
      <path d="M50 0 L93.3 25 L93.3 75 L50 100 L6.7 75 L6.7 25 Z" />
    </svg>
    <div className="relative z-10 flex flex-col items-center gap-1 mt-[-10px]">
      <div className="text-[8px] font-bold text-slate-500 uppercase tracking-widest text-center">Top<br/>Agency</div>
      <div className="text-xl font-black text-slate-800 tracking-tighter">Clutch</div>
      <div className="flex gap-0.5">
        {[1,2,3,4,5].map(i => <div key={i} className="w-1 h-1 bg-red-500 rounded-full" />)}
      </div>
      <div className="text-[8px] font-bold text-slate-400 mt-1">2024</div>
    </div>
  </div>
);

// --- 4. GOODFIRMS BADGE (Blue Seal) ---
const GoodFirmsBadge = () => (
  <div className="w-32 h-32 bg-white rounded-full border-4 border-blue-100 relative flex items-center justify-center shadow-md">
    {/* Outer Ring Dashes */}
    <div className="absolute inset-1 rounded-full border-2 border-dashed border-blue-200"></div>
    
    <div className="relative z-10 text-center flex flex-col items-center">
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-orange-500 mb-1">
        <path d="M5 2h14a1 1 0 0 1 1 1v4h-2V4H6v3H4V3a1 1 0 0 1 1-1zm14 17h-2v3h2v-3zm-4 0H9v3h6v-3zM7 19H5v3h2v-3zM20 9h-2v7h-2v-5h-2v5h-4v-5H8v5H6v-7H4v9h16V9z" />
      </svg>
      <span className="text-[8px] font-bold text-blue-500 uppercase tracking-wide">Top Digital</span>
      <span className="text-xs font-black text-blue-900 uppercase">Agency</span>
      <div className="flex gap-0.5 mt-1">
        {[1,2,3,4,5].map(i => <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="w-2 h-2 text-orange-400"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>)}
      </div>
    </div>
    
    {/* Ribbon Banner */}
    <div className="absolute -bottom-2 bg-blue-600 text-white text-[9px] font-bold px-3 py-0.5 rounded-full shadow-sm">
      GoodFirms
    </div>
  </div>
);

// --- MAIN COMPONENT ---

export const VerifiedBy = () => {
  return (
    <section className="py-24 bg-zinc-50 dark:bg-black transition-colors duration-300 border-t border-zinc-200 dark:border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        <h3 className="text-2xl md:text-3xl font-black uppercase tracking-widest mb-16 text-zinc-400 dark:text-zinc-600">
          Verified <span className="text-orange-500">By</span>
        </h3>

        {/* Flex container to center badges */}
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          
          <motion.div whileHover={{ scale: 1.1 }}>
            <GoogleBadge />
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }}>
            <MetaBadge />
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }}>
            <ClutchBadge />
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }}>
            <GoodFirmsBadge />
          </motion.div>

        </div>

      </div>
    </section>
  );
};
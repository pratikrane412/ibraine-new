"use client";
import React from "react";
import { motion } from "framer-motion";

// --- BRAND COLORS ---
const BRAND_BLUE = "#2B7ABC";
const BRAND_ORANGE = "#FF6B00";

// --- CLIENT DATA ---
const row1 = [
  { name: "11+ Centre", src: "/clients/11centre.png" },
  { name: "AFC Furniture", src: "/clients/afc.png" },
  { name: "Arti Genius", src: "/clients/Artigenius.png" },
  { name: "Best TV", src: "/clients/besttv.png" },
  { name: "Billabong High", src: "/clients/billabong.jpg" },
  { name: "Bluehost", src: "/clients/bluehost-logo.svg" },
  { name: "Brag Packer", src: "/clients/bragpacker.png" },
  { name: "Choupette", src: "/clients/Choupette.jpg" },
  { name: "Cloud Dhobi", src: "/clients/CloudDhobi.jpg" },
  { name: "DLOK", src: "/clients/Dlok.png" },
  { name: "Elevation", src: "/clients/ElevationInterior.png" },
  { name: "Finzard", src: "/clients/Finzard.png" },
  { name: "BLL", src: "/clients/Bottoms Love Logo.webp" },
];

const row2 = [
  { name: "Garware", src: "/clients/Garware.png" },
  { name: "GreatWhite", src: "/clients/GreatWhite.png" },
  { name: "Vrudhi Legal", src: "/clients/Hamza.png" },
  { name: "Headphone Zone", src: "/clients/HeadphoneZone.png" },
  { name: "House of Khichdi", src: "/clients/HouseOfKhichdi.jpeg" },
  { name: "HUL", src: "/clients/HUL.jpg" },
  { name: "Laumière", src: "/clients/Laumiere_Gourmet_Fruits_Logo_220x.avif" },
  { name: "Live Pages", src: "/clients/Livepages.png" },
  { name: "Lullabies", src: "/clients/Lullabies.png" },
  { name: "LuvEssentials", src: "/clients/luvessentials.jpg" },
  { name: "Magma HDI", src: "/clients/Magma.png" },
  { name: "MediTac", src: "/clients/Meditac.png" },
  { name: "EMC", src: "/clients/Emrik Cakes Logo.webp" },
];

const row3 = [
  { name: "Mee Time", src: "/clients/meetime.jpg" },
  { name: "CMS", src: "/clients/ObersityCare.png" },
  { name: "Papita", src: "/clients/PAPITA-AE.webp" },
  { name: "RX", src: "/clients/Portxray.jpg" },
  { name: "Rental Cars", src: "/clients/RentalCarsUAE.png" },
  { name: "Shop CJ", src: "/clients/SHOPCJ.png" },
  { name: "Joules", src: "/clients/shopjbr.jpeg" },
  { name: "Sunnex", src: "/clients/sunnex.jpg" },
  { name: "Thorny Affair", src: "/clients/ThornyAffairs.png" },
  { name: "Treat Resorts", src: "/clients/TreatResort.png" },
  { name: "TSP", src: "/clients/TruckSuspension.jpg" },
  { name: "Vastu", src: "/clients/VastuEnergetics.png" },
  { name: "Futurz4", src: "/clients/Futurz4x4 Logo.webp" },
];

const MarqueeRow = ({
  items,
  speed = 40,
  direction = "right",
}: {
  items: any[];
  speed?: number;
  direction?: "left" | "right";
}) => (
  <div className="flex overflow-hidden relative w-full select-none">
    <motion.div
      initial={{ x: direction === "left" ? "0%" : "-50%" }}
      animate={{ x: direction === "left" ? "-50%" : "0%" }}
      transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      className="flex gap-6 pr-6 shrink-0"
      style={{ width: "max-content" }}
    >
      {[...items, ...items, ...items, ...items].map((logo, i) => (
        <div
          key={i}
          className="w-52 h-32 bg-white border border-zinc-200 rounded-xl flex items-center justify-center p-3 shrink-0 shadow-sm hover:shadow-lg hover:border-orange-500/50 transition-all duration-300 group"
        >
          {/* 
             UPDATED IMAGE STYLING:
             - grayscale: Makes logos black & white
             - opacity-70: Slightly faded
             - group-hover:grayscale-0: Restores color on hover
             - group-hover:opacity-100: Restores full opacity on hover
             - transition-all: Smooths the effect
          */}
          <img
            src={logo.src}
            alt={logo.name}
            className="w-full h-full object-contain transition-all duration-300 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
            onError={(e) => {
              e.currentTarget.src =
                "https://placehold.co/200x100?text=" + logo.name;
            }}
          />
        </div>
      ))}
    </motion.div>
  </div>
);

export const TrustGrid = () => {
  return (
    <section className="py-24 bg-zinc-50 dark:bg-zinc-950 overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span style={{ color: BRAND_BLUE }}>Trusted by</span>{" "}
            <span style={{ color: BRAND_ORANGE }}>Global Clients</span>
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg">
            Empowering the world's most innovative companies.
          </p>
        </div>

        {/* MARQUEE CONTAINER */}
        <div className="flex flex-col gap-6 relative">
          {/* Side Fade Masks */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-zinc-50 dark:from-zinc-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-zinc-50 dark:from-zinc-950 to-transparent z-10 pointer-events-none" />

          {/* All Rows set to 'right' with adjusted speed */}
          <MarqueeRow items={row1} speed={70} direction="right" />
          <MarqueeRow items={row2} speed={70} direction="right" />
          <MarqueeRow items={row3} speed={70} direction="right" />
        </div>
      </div>
    </section>
  );
};
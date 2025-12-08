"use client";
import React from "react";
import { motion } from "framer-motion";

const brands = [
  // --- TECH & SAAS ---
  {
    name: "Google",
    src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "Microsoft",
    src: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
  },
  {
    name: "Amazon",
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    name: "Spotify",
    src: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg",
  },
  {
    name: "Netflix",
    src: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  },
  {
    name: "Airbnb",
    src: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg",
  },
  {
    name: "Slack",
    src: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg",
  },
  {
    name: "Shopify",
    src: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg",
  },
  {
    name: "Figma",
    src: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
  },

  // --- AUTOMOTIVE ---
  {
    name: "BMW",
    src: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg",
  },
  {
    name: "Mercedes",
    src: "https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg",
  },
  {
    name: "Toyota",
    src: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_carlogo.svg",
  },
  {
    name: "Tesla",
    src: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png",
  },

  // --- FINANCE & RETAIL ---
  {
    name: "Visa",
    src: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg",
  },
  {
    name: "Mastercard",
    src: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg",
  },
  {
    name: "PayPal",
    src: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg",
  },
  {
    name: "Sony",
    src: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg",
  },
  {
    name: "Coca Cola",
    src: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg",
  },
  {
    name: "Nike",
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
  },
  {
    name: "Adidas",
    src: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
  },
];

export const TrustGrid = () => {
  return (
    <section className="py-24 px-4 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4 transition-colors">
            Trusted by <span className="text-orange-500">Global Leaders</span>
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg transition-colors">
            Empowering the world's most innovative companies.
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center">
          {brands.map((brand, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              whileHover={{ y: -5 }}
              // CHANGED: Reduced height to h-24 and padding to p-6 to make logos smaller
              className="h-24 bg-white dark:bg-zinc-200 border border-zinc-200 dark:border-white/5 rounded-2xl flex items-center justify-center p-6 cursor-default transition-all group hover:border-orange-500/30 dark:hover:border-white/20 hover:shadow-lg dark:shadow-none"
            >
              <img
                src={brand.src}
                alt={brand.name}
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react"; // Added ChevronDown, ArrowRight
import { Button } from "@/components/ui/Button";

// Define the sub-menu items
const serviceLinks = [
  { name: "SEO Optimization", href: "#seo" },
  { name: "Performance Marketing", href: "#performance" },
  { name: "Social Media", href: "#social" },
  { name: "Web Development", href: "#web" },
  { name: "App Development", href: "#app-dev" },
  { name: "Design & Branding", href: "#branding" },
  { name: "UI & UX Design", href: "#ui-ux" },
  { name: "Google Analytics", href: "#analytics" },
  { name: "Paid Advertising", href: "#paid-ads" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // State for Desktop Hover
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  // State for Mobile Accordion
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-xl border-zinc-200 dark:border-white/10 py-4"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* LEFT: Logo Image */}
        <div className="flex items-center">
          <img
            src="/logo.webp"
            alt="iBraine Logo"
            className="h-12 w-auto object-contain"
          />
        </div>

        {/* RIGHT: Grouped Content */}
        <div className="flex items-center gap-8">
          {/* --- DESKTOP LINKS --- */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600 dark:text-zinc-400">
            {/* 1. Services Dropdown Link */}
            <div
              className="relative h-full py-2"
              onMouseEnter={() => setIsServicesHovered(true)}
              onMouseLeave={() => setIsServicesHovered(false)}
            >
              <button className="flex items-center gap-1 hover:text-orange-500 dark:hover:text-white transition-colors focus:outline-none">
                Services
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${
                    isServicesHovered ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* The Dropdown Card */}
              <AnimatePresence>
                {isServicesHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full -left-4 pt-4 w-64" // pt-4 creates a safe hover gap
                  >
                    <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-xl p-2 overflow-hidden">
                      <div className="flex flex-col">
                        {serviceLinks.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:text-orange-500 dark:hover:text-orange-500 rounded-lg transition-colors flex items-center justify-between group"
                          >
                            {subItem.name}
                            {/* Tiny arrow appears on hover */}
                            <ArrowRight
                              size={12}
                              className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                            />
                          </a>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 2. Other Standard Links */}
            {["Work", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-orange-500 dark:hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Actions: Theme Toggle + CTA */}
          <div className="hidden md:flex items-center gap-4">
            <div className="w-px h-6 bg-zinc-300 dark:bg-white/10 mx-2"></div>

            <Button
              variant="primary"
              className="!py-2.5 !px-6 text-sm h-10 shadow-lg shadow-orange-500/20"
            >
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button
              className="text-zinc-900 dark:text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE MENU DROPDOWN --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-white/10 overflow-hidden md:hidden shadow-2xl"
          >
            <div className="p-6 flex flex-col gap-4">
              {/* Mobile Services Accordion */}
              <div>
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="flex items-center justify-between w-full text-xl font-medium text-zinc-900 dark:text-white py-2"
                >
                  Services
                  <ChevronDown
                    size={20}
                    className={`transition-transform ${
                      isMobileServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isMobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-4 border-l border-zinc-200 dark:border-zinc-800 ml-1"
                    >
                      <div className="flex flex-col gap-3 py-2">
                        {serviceLinks.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            onClick={() => setIsOpen(false)} // Close menu on click
                            className="text-base text-zinc-500 dark:text-zinc-400 hover:text-orange-500"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Standard Mobile Links */}
              {["Work", "About", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-xl font-medium text-zinc-900 dark:text-white py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}

              <Button className="w-full justify-center mt-4">
                Get a Quote
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

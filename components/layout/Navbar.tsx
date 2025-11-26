"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      // CHANGE 1: Full width, no centering. 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-white/80 dark:bg-black/80 backdrop-blur-xl border-zinc-200 dark:border-white/10 py-4' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      {/* CHANGE 2: Max-width container to align content to edges */}
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* LEFT: Logo */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tighter text-zinc-900 dark:text-white transition-colors">
            <span className="text-orange-500">i</span>Braine
          </span>
        </div>

        {/* RIGHT: Everything else grouped here */}
        <div className="flex items-center gap-8">
          
          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600 dark:text-zinc-400">
            {['Services', 'Work', 'About', 'Contact'].map((item) => (
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
            <div className="w-px h-6 bg-zinc-300 dark:bg-white/10 mx-2"></div> {/* Divider */}
            <ThemeToggle />
            <Button variant="primary" className="!py-2.5 !px-6 text-sm h-10 shadow-lg shadow-orange-500/20">
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button className="text-zinc-900 dark:text-white" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-white/10 overflow-hidden md:hidden shadow-2xl"
          >
            <div className="p-6 flex flex-col gap-6">
               {['Services', 'Work', 'About', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-xl font-medium text-zinc-900 dark:text-white" onClick={() => setIsOpen(false)}>
                  {item}
                </a>
              ))}
              <Button className="w-full justify-center mt-4">Get a Quote</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
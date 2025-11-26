"use client";
import React from 'react';
import { Button } from '@/components/ui/Button';

export const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        <div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">
            Let's scale <br/> your brand.
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-md">
            Ready to stop guessing? Schedule a free 30-minute strategy session with our senior consultants.
          </p>
          
          <div className="flex flex-col gap-4 text-gray-300">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
              <span className="text-orange-500">✉</span> info@ibraine.com
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
              <span className="text-orange-500">📞</span> +91 9892 854 892
            </div>
          </div>
        </div>

        <form className="bg-zinc-900/50 p-8 md:p-12 rounded-3xl border border-white/10 flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-400">Name</label>
              <input type="text" className="bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-orange-500 focus:outline-none transition-colors" placeholder="John Doe" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-400">Company</label>
              <input type="text" className="bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-orange-500 focus:outline-none transition-colors" placeholder="Agency Inc" />
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-400">Email</label>
            <input type="email" className="bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-orange-500 focus:outline-none transition-colors" placeholder="john@example.com" />
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-400">Message</label>
            <textarea rows={4} className="bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-orange-500 focus:outline-none transition-colors" placeholder="Tell us about your goals..." />
          </div>

          <Button className="w-full justify-center mt-2">Send Message</Button>
        </form>

      </div>
    </section>
  );
};
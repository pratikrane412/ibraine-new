"use client";
import React from 'react';

export const Testimonials = () => {
  return (
    <section className="py-24 bg-zinc-900/20 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-3xl font-bold mb-16 text-white">Trusted by Founders</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-zinc-900 p-8 rounded-3xl border border-white/5">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-orange-500">★</span>
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                "iBraine completely transformed our lead gen pipeline. We went from 10 leads a month to over 150 in just 90 days. The ROI is undeniable."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-700" />
                <div>
                  <h4 className="font-bold text-white text-sm">Rahul Sharma</h4>
                  <p className="text-xs text-gray-500">CEO, TechFlow</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
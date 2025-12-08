"use client";
import React from "react";
import { Layers, Zap, BarChart, Settings } from "lucide-react";

export const DarkFeatures = () => {
  return (
    <section className="py-24 px-6 bg-brand-dark text-white rounded-[3rem] mx-4 md:mx-12 my-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Powerful Features to Drive Success
          </h2>
          <p className="text-emerald-100 max-w-2xl mx-auto">
            Our platform is packed with features designed to streamline your
            workflow and maximize productivity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Layers,
              title: "Lead Management",
              desc: "Organize and manage all your leads in one place.",
            },
            {
              icon: Zap,
              title: "Sales Automation",
              desc: "Automate repetitive tasks and set up custom workflows.",
            },
            {
              icon: BarChart,
              title: "Analytics & Reporting",
              desc: "Gain valuable insights into your sales performance.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 bg-brand-lime rounded-xl flex items-center justify-center text-brand-dark mb-6">
                <item.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-emerald-100 text-sm leading-relaxed mb-6">
                {item.desc}
              </p>
              <a
                href="#"
                className="text-brand-lime text-sm font-bold hover:underline"
              >
                Explore All Features &gt;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-bold mb-6 text-white">iBraine.</h2>
            <p className="text-gray-400 max-w-md leading-relaxed">
              We are a creative agency with a digital-first approach. We transform businesses into brands through data, design, and development.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-3 text-gray-500 text-sm">
              <li className="hover:text-orange-500 cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-orange-500 cursor-pointer transition-colors">Careers</li>
              <li className="hover:text-orange-500 cursor-pointer transition-colors">Press</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Connect</h4>
            <div className="flex gap-4">
              {[Instagram, Linkedin, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-500 hover:text-white text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 text-center text-gray-600 text-sm">
          © 2024 iBraine Digital Marketing. Made in Mumbai.
        </div>
      </div>
    </footer>
  );
};
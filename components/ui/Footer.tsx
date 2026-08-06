'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-50 border-t border-stone-200 pt-16 pb-12 relative z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid md:grid-cols-12 gap-10 pb-16 border-b border-stone-200">
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-stone-950 p-[1px]">
                  <div className="w-full h-full bg-stone-950 rounded-[11px] flex items-center justify-center">
                    <span className="font-display font-bold text-[#c5a059] text-sm">A</span>
                  </div>
                </div>
                <span className="font-display font-extrabold text-xl text-stone-950 tracking-tight uppercase">
                  Atela Studio
                </span>
              </div>
              <p className="mt-4 text-xs font-mono text-stone-600 max-w-sm font-light leading-relaxed">
                Boutique Web Engineering & Digital Architecture Studio. Crafting clean, bespoke web experiences for companies worldwide.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-4 text-xs text-stone-500">
              <span className="flex items-center gap-1.5 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Vercel Edge Active
              </span>
              <span>•</span>
              <span>Next.js Engine</span>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-stone-500 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-stone-700">
              <li>
                <a href="#work" className="hover:text-[#c5a059] transition-colors">
                  Featured Work
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#c5a059] transition-colors">
                  Agency Services
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#c5a059] transition-colors">
                  Studio Process
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#c5a059] transition-colors">
                  About Gonzalo
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#c5a059] transition-colors">
                  Start Project Brief
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-stone-500 mb-4">
              Live Client Websites
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://atelahomes.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white border border-stone-200 hover:border-[#c5a059] flex items-center justify-between text-xs text-stone-800 transition-all hover:scale-[1.01] shadow-xs"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="font-semibold">Atela Homes Platform</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-stone-400" />
                </a>
              </li>

              <li>
                <a
                  href="https://www.gnginteriorismo.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white border border-stone-200 hover:border-[#c5a059] flex items-center justify-between text-xs text-stone-800 transition-all hover:scale-[1.01] shadow-xs"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="font-semibold">G&G Interiorismo Site</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-stone-400" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-stone-500">
          <div>
            © {new Date().getFullYear()} Atela Studio. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Crafted with precision & Next.js</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

'use client';

import React from 'react';
import { ArrowUpRight, Github, Globe, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 border-t border-white/10 pt-16 pb-12 relative z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid md:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-sky-400 p-[1px]">
                  <div className="w-full h-full bg-zinc-950 rounded-[11px] flex items-center justify-center">
                    <span className="font-display font-bold text-white text-sm">A</span>
                  </div>
                </div>
                <span className="font-display font-extrabold text-xl text-white tracking-tight uppercase">
                  Atela Studio
                </span>
              </div>
              <p className="mt-4 text-xs font-mono text-zinc-400 max-w-sm font-light leading-relaxed">
                Boutique Web Engineering & Digital Architecture Studio. Crafting high-converting, haute web experiences for companies worldwide.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-4 text-xs text-zinc-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Vercel Edge Active
              </span>
              <span>•</span>
              <span>Next.js 14 Engine</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-zinc-300">
              <li>
                <a href="#work" className="hover:text-indigo-400 transition-colors">
                  Featured Work
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-indigo-400 transition-colors">
                  Agency Services
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-indigo-400 transition-colors">
                  Studio Process
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-indigo-400 transition-colors">
                  Start Project Brief
                </a>
              </li>
            </ul>
          </div>

          {/* Live Ecosystem */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-4">
              Live Client Websites
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://atelahomes.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-zinc-900 border border-white/10 hover:border-indigo-500/40 flex items-center justify-between text-xs text-zinc-200 transition-all hover:scale-[1.01]"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="font-semibold">Atela Homes Platform</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
                </a>
              </li>

              <li>
                <a
                  href="https://www.gnginteriorismo.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-zinc-900 border border-white/10 hover:border-indigo-500/40 flex items-center justify-between text-xs text-zinc-200 transition-all hover:scale-[1.01]"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="font-semibold">G&G Interiorismo Site</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400">
          <div>
            © {new Date().getFullYear()} Atela Studio. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Crafted with precision & React</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FOUNDER_IMAGE } from '@/data/founder';
import { ArrowDownRight, Sparkles, Layers, ShieldCheck, Zap, Globe, ArrowUpRight } from 'lucide-react';

interface HeroSectionProps {
  onOpenEstimator: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenEstimator }) => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 md:pt-44 md:pb-32 flex flex-col justify-center overflow-hidden bg-[#faf8f5]">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[500px] bg-[#c5a059]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-stone-200/40 rounded-full blur-[120px] pointer-events-none" />

      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 w-full">
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-stone-200/80 bg-white/80 backdrop-blur-md shadow-xs"
          >
            <Sparkles className="w-4 h-4 text-[#c5a059]" />
            <span className="text-xs font-mono tracking-widest text-stone-700 uppercase font-semibold">
              Boutique Web Engineering Studio
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-stone-200/80 bg-white shadow-xs"
          >
            <img
              src={FOUNDER_IMAGE}
              alt="Gonzalo Atela"
              className="w-5 h-5 rounded-full object-cover ring-1 ring-[#c5a059]"
            />
            <span className="text-xs font-mono text-stone-800">Gonzalo Atela • Founder</span>
          </motion.div>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-stone-900 tracking-tight leading-[1.05] max-w-5xl"
        >
          Digital architecture for <span className="underline decoration-[#c5a059]/40 underline-offset-8">extraordinary</span> brands.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="mt-8 text-lg sm:text-xl text-stone-600 max-w-2xl font-light leading-relaxed"
        >
          Atela Studio designs and engineers bespoke, high-performance websites for companies that refuse to look generic. From haute real estate to interior architecture & modern digital products.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#work"
            className="px-8 py-4 rounded-full bg-stone-900 text-white font-display font-semibold text-sm hover:bg-stone-800 transition-colors flex items-center gap-3 shadow-lg active:scale-[0.97] group"
          >
            <span>Explore Featured Work</span>
            <ArrowDownRight className="w-4 h-4 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform text-[#c5a059]" />
          </a>

          <button
            onClick={onOpenEstimator}
            className="px-8 py-4 rounded-full bg-white border border-stone-200 text-stone-900 font-display font-semibold text-sm hover:bg-stone-50 transition-all flex items-center gap-3 active:scale-[0.97] group shadow-xs"
          >
            <span>Request Agency Scope</span>
            <ArrowUpRight className="w-4 h-4 text-stone-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="mt-16 pt-8 border-t border-stone-200/80 flex flex-wrap items-center justify-between gap-6"
        >
          <div className="flex flex-col gap-1">
            <span className="text-xs font-mono uppercase tracking-widest text-stone-500">
              Live Client Ecosystem
            </span>
            <span className="text-sm text-stone-800 font-medium">
              Deployed & Active High-End Platforms
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://atelahomes.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-white border border-stone-200/80 shadow-xs hover:border-[#c5a059] text-xs font-medium text-stone-900 flex items-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Atela Homes</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-stone-400" />
            </a>

            <a
              href="https://www.gnginteriorismo.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-white border border-stone-200/80 shadow-xs hover:border-[#c5a059] text-xs font-medium text-stone-900 flex items-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>G&G Interiorismo</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-stone-400" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { icon: Zap, value: '99/100', label: 'Core Web Vitals', detail: 'Sub-second page speeds' },
            { icon: Layers, value: '100%', label: 'Bespoke Codebase', detail: 'Zero rigid templates' },
            { icon: ShieldCheck, value: 'Pixel Perfect', label: 'Precision Engineering', detail: 'Flawless design fidelity' },
            { icon: Globe, value: 'Global Scale', label: 'Vercel Infrastructure', detail: 'Ultra-fast edge delivery' },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white border border-stone-200/80 shadow-xs hover:border-[#c5a059]/60 transition-all duration-200"
            >
              <stat.icon className="w-5 h-5 text-[#c5a059] mb-3" />
              <div className="font-display font-extrabold text-2xl sm:text-3xl text-stone-900">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-stone-800 mt-1">{stat.label}</div>
              <div className="text-[11px] font-mono text-stone-500 mt-1">{stat.detail}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

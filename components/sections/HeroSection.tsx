'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HERO_BG_IMAGE } from '@/data/heroBg';
import { FOUNDER_IMAGE } from '@/data/founder';
import { ArrowDownRight, ArrowUpRight, Sparkles } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-24 pb-16">
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_BG_IMAGE}
          alt="Atela Studio Editorial Background"
          className="w-full h-full object-cover object-center filter brightness-[0.88] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#faf8f5] via-[#faf8f5]/40 to-black/30" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10 w-full">
        <div className="max-w-4xl pt-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/60 bg-white/70 backdrop-blur-md shadow-xs mb-8"
          >
            <img
              src={FOUNDER_IMAGE}
              alt="Gonzalo Atela"
              className="w-5 h-5 rounded-full object-cover ring-1 ring-[#c5a059]"
            />
            <span className="text-xs font-mono tracking-widest text-stone-900 uppercase font-semibold">
              Gonzalo Atela • Atela Studio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
            className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-stone-950 tracking-tight leading-[1.04]"
          >
            Diseño web exclusivo para marcas con carácter.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="mt-6 text-lg sm:text-2xl text-stone-800 max-w-2xl font-light leading-relaxed"
          >
            Creamos experiencias digitales únicas, rápidas y atractivas. Combinando diseño de vanguardia e inteligencia artificial para elevar tu presencia online.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="mt-10 flex flex-wrap items-center gap-5"
          >
            <a
              href="#work"
              className="px-8 py-4 rounded-full bg-stone-900 text-white font-display font-semibold text-sm hover:bg-stone-800 transition-all flex items-center gap-3 shadow-lg active:scale-[0.97] group"
            >
              <span>Ver Proyectos</span>
              <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform text-[#c5a059]" />
            </a>

            <a
              href="#contact"
              className="px-8 py-4 rounded-full bg-white/90 border border-stone-300 text-stone-900 font-display font-semibold text-sm hover:bg-white transition-all flex items-center gap-3 active:scale-[0.97] shadow-xs backdrop-blur-md"
            >
              <span>Hablar con Gonzalo</span>
              <ArrowUpRight className="w-4 h-4 text-[#c5a059]" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-20 pt-8 border-t border-stone-300/80 flex flex-wrap items-center justify-between gap-6"
        >
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-stone-600 block font-semibold">
              Proyectos Reales en Producción
            </span>
            <span className="text-sm text-stone-900 font-medium">
              Webs en vivo para arquitectura, inmobiliaria e interiorismo
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://atelahomes.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-white/90 border border-stone-300 text-xs font-semibold text-stone-900 flex items-center gap-2 hover:border-[#c5a059] transition-all shadow-xs"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Atela Homes</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-stone-400" />
            </a>

            <a
              href="https://www.gnginteriorismo.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-white/90 border border-stone-300 text-xs font-semibold text-stone-900 flex items-center gap-2 hover:border-[#c5a059] transition-all shadow-xs"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>G&G Interiorismo</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-stone-400" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

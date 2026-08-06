'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FOUNDER_IMAGE } from '@/data/founder';
import { ArrowUpRight, Mail, Linkedin } from 'lucide-react';

export const FounderSection: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-36 relative z-10 bg-[#f6f1e9] border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl overflow-hidden bg-stone-300 aspect-[3/4] shadow-md">
              <img
                src={FOUNDER_IMAGE}
                alt="Gonzalo Atela - Fundador de Atela Studio"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent opacity-60" />

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/90 backdrop-blur-md border border-stone-300/80 shadow-xs">
                <h4 className="font-display font-bold text-stone-950 text-base">Gonzalo Atela</h4>
                <p className="text-xs font-mono text-[#c5a059] font-semibold">Fundador & Creador Digital</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <span className="text-xs font-mono text-[#c5a059] uppercase tracking-widest block mb-3 font-semibold">
              Sobre Mí
            </span>

            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-stone-950 tracking-tight leading-tight">
              Creando proyectos web con pasión y tecnología avanzada.
            </h2>

            <p className="mt-6 text-stone-700 text-base sm:text-lg font-light leading-relaxed">
              "En Atela Studio me dedico a crear páginas web elegantes, intuitivas y cuidadas al milímetro. Combino un diseño visual exigente con la potencia de las herramientas más modernas de inteligencia artificial para convertir tus ideas en webs funcionales y atractivas."
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="https://www.linkedin.com/in/gonzalo-atela/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-full bg-stone-900 text-white font-display font-semibold text-xs flex items-center gap-2 hover:bg-stone-800 transition-colors shadow-md active:scale-95"
              >
                <Linkedin className="w-4 h-4 text-[#c5a059]" />
                <span>Perfil de LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-stone-400" />
              </a>

              <a
                href="mailto:g.atelanavarro@gmail.com"
                className="px-6 py-3.5 rounded-full bg-white border border-stone-300 text-stone-800 hover:text-stone-950 text-xs font-mono font-medium flex items-center gap-2 transition-all shadow-xs active:scale-95"
              >
                <Mail className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>g.atelanavarro@gmail.com</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

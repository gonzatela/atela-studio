'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FOUNDER_IMAGE } from '@/data/founder';
import { ArrowUpRight, Award, Code2, ShieldCheck, Mail } from 'lucide-react';

export const FounderSection: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-36 relative z-10 bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-stone-200 bg-white p-3 shadow-xl group">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-stone-100">
                <img
                  src={FOUNDER_IMAGE}
                  alt="Gonzalo Atela - Founder & Lead Digital Architect at Atela Studio"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent opacity-60" />

                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 border border-stone-200 shadow-md backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-display font-bold text-stone-950 text-base">Gonzalo Atela</h4>
                      <p className="text-xs font-mono text-[#c5a059] font-bold">Founder & Lead Architect</p>
                    </div>
                    <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#c5a059]/10 rounded-full blur-3xl pointer-events-none" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-stone-200 bg-white text-xs font-mono text-stone-700 mb-6 shadow-xs">
              <Award className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>Studio Founder & Leadership</span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-stone-950 tracking-tight leading-tight">
              Bespoke digital vision, engineered with precision.
            </h2>

            <p className="mt-6 text-stone-700 text-base sm:text-lg font-light leading-relaxed">
              "At Atela Studio, I partner directly with ambitious companies and boutique brands to craft clean, elegant digital experiences that leave a lasting impression. Every line of code, animation, and layout is built from scratch without generic templates."
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-xs">
                <div className="flex items-center gap-2 text-stone-950 font-display font-semibold text-sm mb-1">
                  <Code2 className="w-4 h-4 text-[#c5a059]" />
                  <span>Direct Engineering</span>
                </div>
                <p className="text-xs text-stone-600 font-light">
                  Direct contact with the lead architect on every single project phase.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-xs">
                <div className="flex items-center gap-2 text-stone-950 font-display font-semibold text-sm mb-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Uncompromising Speed</span>
                </div>
                <p className="text-xs text-stone-600 font-light">
                  Lighthouse 99+ Core Web Vitals performance guaranteed.
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="px-7 py-3.5 rounded-full bg-stone-950 text-white font-display font-semibold text-xs flex items-center gap-2 hover:bg-stone-850 transition-colors shadow-xl"
              >
                <span>Book Direct Consultation</span>
                <ArrowUpRight className="w-4 h-4 text-[#c5a059]" />
              </a>

              <a
                href="mailto:navarroatela@gmail.com"
                className="px-7 py-3.5 rounded-full bg-white border border-stone-200 text-stone-700 hover:text-stone-950 text-xs font-mono font-medium flex items-center gap-2 transition-all shadow-xs"
              >
                <Mail className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>navarroatela@gmail.com</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

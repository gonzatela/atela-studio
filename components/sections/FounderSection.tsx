'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FOUNDER_IMAGE } from '@/data/founder';
import { Sparkles, ArrowUpRight, Award, Code2, ShieldCheck, Mail } from 'lucide-react';

export const FounderSection: React.FC = () => {
  return (
    <section className="py-24 md:py-36 relative z-10 bg-zinc-950/60 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left - Portrait Visual Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-zinc-900/60 p-3 backdrop-blur-xl group shadow-2xl shadow-indigo-500/10">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-zinc-950">
                <img
                  src={FOUNDER_IMAGE}
                  alt="Gonzalo Atela - Founder & Lead Digital Architect at Atela Studio"
                  className="w-full h-full object-cover object-center grayscale contrast-105 group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80" />

                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-zinc-950/90 border border-white/10 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-display font-bold text-white text-base">Gonzalo Atela</h4>
                      <p className="text-xs font-mono text-indigo-400">Founder & Lead Architect</p>
                    </div>
                    <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>

            {/* Ambient Backlight Glow */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
          </motion.div>

          {/* Right - Founder Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-xs font-mono text-indigo-300 mb-6">
              <Award className="w-3.5 h-3.5 text-indigo-400" />
              <span>Studio Founder & Leadership</span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
              Bespoke digital vision, engineered with precision.
            </h2>

            <p className="mt-6 text-zinc-300 text-base sm:text-lg font-light leading-relaxed">
              "At Atela Studio, I partner directly with ambitious companies and boutique brands to craft digital experiences that leave a lasting impression. Every line of code, animation, and layout is built from scratch without generic templates."
            </p>

            {/* Core Values / Pillar Highlights */}
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-zinc-900/40 border border-white/10">
                <div className="flex items-center gap-2 text-indigo-400 font-display font-semibold text-sm mb-1">
                  <Code2 className="w-4 h-4" />
                  <span>Direct Engineering</span>
                </div>
                <p className="text-xs text-zinc-400 font-light">
                  Direct contact with the lead architect on every single project phase.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-900/40 border border-white/10">
                <div className="flex items-center gap-2 text-sky-400 font-display font-semibold text-sm mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Uncompromising Speed</span>
                </div>
                <p className="text-xs text-zinc-400 font-light">
                  Lighthouse 99+ Core Web Vitals performance guaranteed.
                </p>
              </div>
            </div>

            {/* Direct Action Link */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="px-7 py-3.5 rounded-full bg-white text-zinc-950 font-display font-semibold text-xs flex items-center gap-2 hover:bg-zinc-200 transition-colors shadow-xl shadow-white/10"
              >
                <span>Book Direct Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="mailto:navarroatela@gmail.com"
                className="px-7 py-3.5 rounded-full bg-zinc-900 border border-white/10 text-zinc-300 hover:text-white hover:border-indigo-500/40 text-xs font-mono font-medium flex items-center gap-2 transition-all"
              >
                <Mail className="w-3.5 h-3.5 text-indigo-400" />
                <span>navarroatela@gmail.com</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

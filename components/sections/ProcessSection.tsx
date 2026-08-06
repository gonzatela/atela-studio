'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Compass, PenTool, Terminal, Rocket } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Discovery & Visual Audit',
      icon: Compass,
      description: 'We clarify your brand vision, target market, functional needs, and visual benchmarks (e.g. editorial, dark luxury, minimal).',
      duration: 'Week 1',
    },
    {
      num: '02',
      title: 'UI/UX Architecture & Layout',
      icon: PenTool,
      description: 'We construct wireframes and high-fidelity interactive designs, selecting precise typography, color palettes, and motion curves.',
      duration: 'Week 2',
    },
    {
      num: '03',
      title: 'Bespoke Frontend Engineering',
      icon: Terminal,
      description: 'We develop your web application using Next.js 14, React, Framer Motion, and Tailwind CSS. Built for speed and 100/100 Lighthouse performance.',
      duration: 'Week 3-4',
    },
    {
      num: '04',
      title: 'Vercel Deployment & Handover',
      icon: Rocket,
      description: 'We launch your platform to Vercel global edge CDN, connect your custom domain, optimize SEO, and deliver full documentation.',
      duration: 'Week 4+',
    },
  ];

  return (
    <section id="process" className="py-24 md:py-36 relative z-10 bg-[#fdfdfd]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono text-[#c5a059] uppercase tracking-widest block mb-2 font-bold">
            Methodology & Flow
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-stone-950 tracking-tight">
            How Atela Studio delivers results.
          </h2>
          <p className="mt-4 text-stone-600 text-base font-light">
            A transparent, 4-phase agency workflow built to deliver your web project on time, with uncompromising aesthetic and technical quality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-white border border-stone-200 shadow-xs relative overflow-hidden group hover:border-[#c5a059] transition-colors"
            >
              <div className="text-4xl font-display font-black text-stone-200 group-hover:text-[#c5a059]/30 transition-colors mb-6">
                {step.num}
              </div>

              <div className="p-3 rounded-2xl bg-stone-100 text-[#c5a059] w-fit mb-4">
                <step.icon className="w-5 h-5" />
              </div>

              <h3 className="font-display font-bold text-lg text-stone-950 mb-2">{step.title}</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed mb-6">
                {step.description}
              </p>

              <span className="inline-block px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-[10px] font-mono text-stone-600">
                Est: {step.duration}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

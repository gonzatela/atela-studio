'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Gauge, Sparkles, ShoppingBag, ShieldCheck, ArrowUpRight } from 'lucide-react';

interface ServicesSectionProps {
  onOpenEstimator: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenEstimator }) => {
  const services = [
    {
      icon: Code2,
      title: 'Bespoke Web Engineering',
      tagline: 'Next.js 14 + React',
      description: 'Zero generic templates. We build custom pixel-perfect web applications tailored specifically for your brand’s prestige and goals.',
      features: ['Next.js App Router Architecture', 'Sub-second Page Load Times', 'Full Mobile Responsiveness', 'Clean Maintainable Codebase'],
    },
    {
      icon: Palette,
      title: 'Brand & Visual Architecture',
      tagline: 'Editorial Aesthetics',
      description: 'Elevate your business image with high-end typography, refined color systems, and modern visual storytelling inspired by art monographs.',
      features: ['Tailored Color Palettes', 'Typography Curation', 'UI/UX Design Systems', 'Visual Art Direction'],
    },
    {
      icon: Gauge,
      title: 'Performance & SEO Optimization',
      tagline: 'Lighthouse 99+',
      description: 'Engineered for search engine dominance and immediate conversion. We optimize Core Web Vitals to deliver ultra-fast user experiences.',
      features: ['Lighthouse 99+ Audits', 'Structured SEO Schema', 'Image & Asset Compression', 'Global Edge CDN Deployment'],
    },
    {
      icon: Sparkles,
      title: 'Interactive Motion & Micro-FX',
      tagline: 'Framer Motion & Micro-Interactions',
      description: 'Engage visitors with fluid scroll effects, hover spotlight previews, magnetic CTAs, and subtle liquid animations.',
      features: ['Smooth Parallax Scrolling', 'Custom Mouse Spotlight', 'Interactive Modals & Sliders', 'Fluid Layout Transitions'],
    },
    {
      icon: ShoppingBag,
      title: 'Luxury E-Commerce & Platforms',
      tagline: 'Custom Portals',
      description: 'High-converting online store experiences and client portals designed for boutique luxury products and premium services.',
      features: ['Custom Checkout Flow', 'CMS Integration', 'Secure Payment Gateways', 'Bespoke Product Showcases'],
    },
    {
      icon: ShieldCheck,
      title: 'Studio Maintenance & Retainers',
      tagline: 'Dedicated SLA Support',
      description: 'Keep your web platform secure, updated, and performing at maximum speed with our monthly studio care retainers.',
      features: ['Security Patches', 'Content Updates', 'Monthly Analytics Audit', 'Priority Technical Support'],
    },
  ];

  return (
    <section id="services" className="py-24 md:py-36 relative z-10 bg-zinc-950/80 border-t border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-xs font-mono text-indigo-300 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Agency Capabilities</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight">
            Services designed to set your company apart.
          </h2>
          <p className="mt-4 text-zinc-400 text-base sm:text-lg font-light">
            We don't build standard websites; we engineer prestigious digital assets that elevate client trust and drive business inquiries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-zinc-900/40 border border-white/10 hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3.5 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono text-zinc-400 px-3 py-1 rounded-full bg-zinc-950 border border-white/5">
                    {service.tagline}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-white group-hover:text-indigo-300 transition-colors">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-zinc-400 font-light leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-6 space-y-2 border-t border-white/5 pt-4">
                  {service.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-zinc-400">
                      <span className="w-1 h-1 rounded-full bg-indigo-400" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 flex items-center justify-between">
                <button
                  onClick={onOpenEstimator}
                  className="text-xs font-mono font-semibold text-indigo-400 group-hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <span>Estimate Service Scope</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

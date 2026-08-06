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
    <section id="services" className="py-24 md:py-36 relative z-10 bg-stone-50 border-t border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-stone-200 bg-white text-xs font-mono text-stone-700 mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Agency Capabilities</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-stone-950 tracking-tight leading-tight">
            Services designed to set your company apart.
          </h2>
          <p className="mt-4 text-stone-600 text-base sm:text-lg font-light">
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
              className="p-8 rounded-3xl bg-white border border-stone-200 hover:border-[#c5a059] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3.5 rounded-2xl bg-stone-100 border border-stone-200 text-[#c5a059] group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono text-stone-500 px-3 py-1 rounded-full bg-stone-100 border border-stone-200">
                    {service.tagline}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-stone-950 group-hover:text-[#c5a059] transition-colors">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-stone-600 font-light leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-6 space-y-2 border-t border-stone-100 pt-4">
                  {service.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-stone-600">
                      <span className="w-1 h-1 rounded-full bg-[#c5a059]" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 flex items-center justify-between">
                <button
                  onClick={onOpenEstimator}
                  className="text-xs font-mono font-semibold text-stone-900 group-hover:text-[#c5a059] flex items-center gap-1.5 transition-colors"
                >
                  <span>Estimate Service Scope</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#c5a059]" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

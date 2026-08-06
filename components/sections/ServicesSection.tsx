'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Sparkles, Smartphone, Search, Zap, ShieldCheck } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: Palette,
      title: 'Diseño Web Exclusivo y a Medida',
      description: 'Sin plantillas genéricas. Diseñamos la web exactamente como imaginas tu marca, con tipografías elegantes y maquetación limpia.',
    },
    {
      icon: Smartphone,
      title: 'Adaptabilidad Móvil y Carga Ultra Rápida',
      description: 'Tu página web se verá impecable y cargará al instante en móviles, tablets y ordenadores de escritorio.',
    },
    {
      icon: Search,
      title: 'Optimización SEO y Posicionamiento',
      description: 'Estructuramos tu web para que aparezca bien posicionada en los buscadores y sea fácil de encontrar por tus clientes.',
    },
    {
      icon: Sparkles,
      title: 'Animaciones E Interacciones Fluidas',
      description: 'Efectos de movimiento sutiles y elegantes al navegar que hacen que tu web se sienta viva y profesional.',
    },
    {
      icon: Zap,
      title: 'Inteligencia Artificial y Automatización',
      description: 'Aprovechamos la IA más avanzada para crear código limpio, prototipos ágiles y funcionalidades modernas.',
    },
    {
      icon: ShieldCheck,
      title: 'Mantenimiento y Soporte Continuo',
      description: 'Nos encargamos de mantener tu web actualizada, segura y funcionando sin interrupciones.',
    },
  ];

  return (
    <section id="services" className="py-24 md:py-36 relative z-10 bg-[#faf8f5] border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="max-w-3xl mb-20">
          <span className="text-xs font-mono text-[#c5a059] uppercase tracking-widest block mb-2 font-semibold">
            Lo Que Hacemos
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-stone-950 tracking-tight leading-tight">
            Servicios creados para destacar tu marca.
          </h2>
          <p className="mt-4 text-stone-600 text-base sm:text-lg font-light">
            Creamos páginas web personalizadas que generan confianza y transmiten la personalidad de tu negocio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-12">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="py-4 border-t border-stone-200/80 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-full bg-white border border-stone-200 text-[#c5a059] shadow-xs group-hover:scale-110 transition-transform">
                  <service.icon className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-stone-400 font-bold">0{idx + 1}</span>
              </div>

              <h3 className="font-display font-bold text-xl text-stone-950 group-hover:text-[#c5a059] transition-colors">
                {service.title}
              </h3>
              <p className="mt-3 text-sm text-stone-600 font-light leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

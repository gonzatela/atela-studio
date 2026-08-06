'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Toma de Contacto e Idea',
      description: 'Hablamos sobre tu negocio, el estilo visual que te gusta y el objetivo de tu web para empezar de inmediato.',
      duration: 'Paso 1',
    },
    {
      num: '02',
      title: 'Creación Ágil de la Web',
      description: 'Construimos la primera versión completa de tu web de forma rápida utilizando diseño de vanguardia e inteligencia artificial.',
      duration: 'Paso 2',
    },
    {
      num: '03',
      title: 'Etapas de Feedback y Cambios',
      description: 'Revisamos juntos la web. Me indicas exactamente qué ajustar o cambiar hasta que quede 100% a tu gusto.',
      duration: 'Paso 3',
    },
    {
      num: '04',
      title: 'Lanzamiento y Publicación',
      description: 'Publicamos tu web profesional en internet en tu dominio personalizado para que empiece a recibir visitas.',
      duration: 'Paso 4',
    },
  ];

  return (
    <section id="process" className="py-24 md:py-36 relative z-10 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono text-[#c5a059] uppercase tracking-widest block mb-2 font-semibold">
            Metodología Ágil
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-stone-950 tracking-tight">
            Un proceso rápido con revisiones a tu medida.
          </h2>
          <p className="mt-4 text-stone-600 text-base font-light">
            Tu web lista en tiempo récord con etapas claras de feedback donde tú decides los cambios.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 border-t border-stone-200/80 pt-12">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="space-y-4"
            >
              <span className="text-4xl font-display font-black text-stone-300 block">
                {step.num}
              </span>
              <h3 className="font-display font-bold text-xl text-stone-950">{step.title}</h3>
              <p className="text-sm text-stone-600 font-light leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

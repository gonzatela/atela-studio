'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Idea y Objetivos',
      description: 'Hablamos sobre tu negocio, tus gustos visuales y lo que necesitas transmitir en tu web.',
      duration: 'Paso 1',
    },
    {
      num: '02',
      title: 'Diseño y Maquetación',
      description: 'Creamos la estructura visual, seleccionando colores, fuentes y distribución perfecta para tu contenido.',
      duration: 'Paso 2',
    },
    {
      num: '03',
      title: 'Desarrollo e IA',
      description: 'Construimos tu web aplicando las últimas herramientas de diseño e inteligencia artificial para máxima rapidez y pulidez.',
      duration: 'Paso 3',
    },
    {
      num: '04',
      title: 'Lanzamiento',
      description: 'Publicamos tu página web en internet, conectamos tu dominio personalizado y te enseñamos a gestionarla.',
      duration: 'Paso 4',
    },
  ];

  return (
    <section id="process" className="py-24 md:py-36 relative z-10 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono text-[#c5a059] uppercase tracking-widest block mb-2 font-semibold">
            Cómo Trabajamos
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-stone-950 tracking-tight">
            Un proceso sencillo y transparente.
          </h2>
          <p className="mt-4 text-stone-600 text-base font-light">
            Cuatro etapas para tener tu página web lista y funcionando sin complicaciones.
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

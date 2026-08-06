'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '@/data/projects';
import { Project } from '@/types';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

export const ProjectGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = ['Todos', 'Real Estate', 'Interiorismo'];

  const filteredProjects = PROJECTS.filter((project) => {
    if (selectedCategory === 'Todos') return true;
    if (selectedCategory === 'Real Estate') return project.category === 'Real Estate';
    if (selectedCategory === 'Interiorismo') return project.category === 'Interiorismo';
    return true;
  });

  return (
    <section id="work" className="py-24 md:py-36 relative z-10 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono text-[#c5a059] uppercase tracking-widest block mb-2 font-semibold">
            Proyectos Reales
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-stone-950 tracking-tight">
            Nuestros Trabajos en Vivo
          </h2>
          <p className="mt-3 text-stone-600 text-base font-light">
            Páginas web profesionales diseñadas a medida y publicadas en internet.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 mb-16 border-b border-stone-200/80 pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all active:scale-95 ${
                selectedCategory === cat
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'bg-white text-stone-600 border border-stone-200/80 hover:text-stone-950'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid md:grid-cols-2 gap-12">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={(p) => setActiveProject(p)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};

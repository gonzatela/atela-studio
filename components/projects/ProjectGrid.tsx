'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '@/data/projects';
import { Project } from '@/types';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { Layers, Filter } from 'lucide-react';

export const ProjectGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = ['All', 'Real Estate', 'Interior Design', 'Branding', 'Fintech'];

  const filteredProjects = PROJECTS.filter((project) => {
    if (selectedCategory === 'All') return true;
    return project.category === selectedCategory;
  });

  return (
    <section id="work" className="py-24 md:py-36 relative z-10 bg-[#fdfdfd]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-stone-200 bg-stone-50 text-xs font-mono text-stone-700 mb-4">
              <Layers className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>Selected Agency Portfolio</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-stone-950 tracking-tight">
              Featured Client Work
            </h2>
          </div>

          <p className="text-stone-600 text-sm sm:text-base max-w-md font-light">
            Crafting tailored web solutions, interactive real estate portals, and monograph-style architecture portfolios with precision engineering.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-stone-200 pb-6">
          <div className="flex items-center gap-2 mr-4 text-xs font-mono text-stone-500 uppercase tracking-widest hidden sm:flex">
            <Filter className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Filter:</span>
          </div>

          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                selectedCategory === cat
                  ? 'bg-stone-950 text-white shadow-md'
                  : 'bg-stone-100 text-stone-600 border border-stone-200 hover:text-stone-950 hover:bg-stone-200/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid md:grid-cols-2 gap-8">
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

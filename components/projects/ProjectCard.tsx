'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      onClick={() => onSelect(project)}
      className="group cursor-pointer py-6 border-b border-stone-200/80 transition-colors"
    >
      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 bg-stone-200 shadow-xs">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-stone-950/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="absolute top-4 left-4 flex items-center gap-2">
          {project.isReal && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-mono text-stone-900 shadow-xs">
              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
              <span>Proyecto Real en Vivo</span>
            </span>
          )}
        </div>

        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <span className="p-3 rounded-full bg-stone-900 text-white flex items-center justify-center shadow-md">
            <ArrowUpRight className="w-4 h-4 text-[#c5a059]" />
          </span>
        </div>
      </div>

      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <span className="text-xs font-mono text-[#c5a059] uppercase tracking-widest font-semibold">
              {project.category}
            </span>
            <span className="text-xs font-mono text-stone-400">• {project.year}</span>
          </div>
          <h3 className="font-display font-bold text-2xl text-stone-900 group-hover:text-[#c5a059] transition-colors">
            {project.title}
          </h3>
          <p className="text-stone-600 text-sm font-light mt-1 max-w-lg">
            {project.description}
          </p>
        </div>

        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="p-2.5 rounded-full border border-stone-200 text-stone-700 hover:text-stone-950 hover:border-stone-400 transition-all active:scale-95"
        >
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
};

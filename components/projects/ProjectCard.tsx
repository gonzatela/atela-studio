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
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative rounded-3xl bg-white border border-stone-200 overflow-hidden hover:border-[#c5a059] shadow-xs hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
    >
      <div 
        onClick={() => onSelect(project)}
        className="relative aspect-[16/10] overflow-hidden cursor-pointer"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

        <div className="absolute top-4 left-4 z-10">
          {project.isReal ? (
            <span className="px-3 py-1 rounded-full bg-emerald-600/90 text-white backdrop-blur-md border border-emerald-400/40 text-[11px] font-mono font-medium flex items-center gap-1.5 shadow-md">
              <CheckCircle2 className="w-3 h-3 text-white" />
              <span>Real Deployed Work</span>
            </span>
          ) : (
            <span className="px-3 py-1 rounded-full bg-stone-900/90 text-stone-200 backdrop-blur-md text-[11px] font-mono font-medium">
              Agency Concept
            </span>
          )}
        </div>

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <span className="px-5 py-2.5 rounded-full bg-white text-stone-950 border border-stone-200 font-display text-xs font-semibold backdrop-blur-md flex items-center gap-2 shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <span>View Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#c5a059]" />
          </span>
        </div>
      </div>

      <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
        <div>
          <div className="flex items-center justify-between gap-4 mb-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#c5a059] font-bold">
              {project.category}
            </span>
            <span className="text-xs font-mono text-stone-400">{project.year}</span>
          </div>

          <h3 
            onClick={() => onSelect(project)}
            className="font-display font-bold text-2xl text-stone-950 group-hover:text-[#c5a059] transition-colors cursor-pointer"
          >
            {project.title}
          </h3>

          <p className="mt-3 text-sm text-stone-600 font-light line-clamp-2 leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="mt-6 pt-6 border-t border-stone-100 flex items-center justify-between gap-4">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded-md bg-stone-100 border border-stone-200 text-[11px] font-mono text-stone-700"
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            title="Visit live website"
            className="p-2.5 rounded-full bg-stone-100 hover:bg-stone-950 text-stone-700 hover:text-white transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

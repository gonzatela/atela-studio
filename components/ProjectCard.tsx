'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { Project } from '../data/projects';

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
      className="group relative rounded-3xl bg-zinc-900/40 border border-white/10 overflow-hidden hover:border-indigo-500/50 transition-all duration-500 flex flex-col justify-between"
    >
      {/* Top Image Preview Container */}
      <div 
        onClick={() => onSelect(project)}
        className="relative aspect-[16/10] overflow-hidden cursor-pointer"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

        {/* Real Deployed Project Badge */}
        <div className="absolute top-4 left-4 z-10">
          {project.isReal ? (
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-400/30 text-emerald-300 text-[11px] font-mono font-medium flex items-center gap-1.5 shadow-lg">
              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
              <span>Real Deployed Work</span>
            </span>
          ) : (
            <span className="px-3 py-1 rounded-full bg-indigo-500/20 backdrop-blur-md border border-indigo-400/30 text-indigo-200 text-[11px] font-mono font-medium">
              Agency Concept
            </span>
          )}
        </div>

        {/* Quick View Button on Hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <span className="px-5 py-2.5 rounded-full bg-zinc-950/90 border border-white/20 text-white font-display text-xs font-semibold backdrop-blur-md flex items-center gap-2 shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <span>View Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-indigo-400" />
          </span>
        </div>
      </div>

      {/* Card Information Content */}
      <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
        <div>
          <div className="flex items-center justify-between gap-4 mb-2">
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-400">
              {project.category}
            </span>
            <span className="text-xs font-mono text-zinc-500">{project.year}</span>
          </div>

          <h3 
            onClick={() => onSelect(project)}
            className="font-display font-bold text-2xl text-white group-hover:text-indigo-300 transition-colors cursor-pointer"
          >
            {project.title}
          </h3>

          <p className="mt-3 text-sm text-zinc-400 font-light line-clamp-2 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Tag pills and Action links */}
        <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between gap-4">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded-md bg-zinc-950 border border-white/5 text-[11px] font-mono text-zinc-400"
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
            className="p-2.5 rounded-full bg-zinc-800 hover:bg-indigo-600 text-zinc-300 hover:text-white transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, ArrowUpRight, Sparkles, Layers, ShieldCheck } from 'lucide-react';
import { Project } from '@/types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-xl"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-zinc-950 border border-white/15 rounded-3xl p-6 sm:p-10 z-10 shadow-2xl shadow-indigo-500/10 custom-scrollbar"
        >
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-6 right-6 p-3 rounded-full bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:border-white/30 transition-all"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-6">
            {project.isReal ? (
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Deployed Agency Client</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-mono font-medium">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Agency Concept Showcase</span>
              </span>
            )}
            <span className="text-xs font-mono text-zinc-500">• {project.year}</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            {project.title}
          </h2>
          <p className="text-sm font-mono text-indigo-400 mt-2">Client: {project.client}</p>

          <div className="relative my-8 rounded-2xl overflow-hidden border border-white/10 aspect-[16/9] group">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />

            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-300 bg-zinc-950/80 px-3 py-1.5 rounded-lg border border-white/10 backdrop-blur-md">
                {project.category} Architecture
              </span>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs flex items-center gap-2 shadow-lg shadow-indigo-600/30 transition-all hover:scale-105"
              >
                <span>Visit Live Platform</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {project.metrics && (
            <div className="grid grid-cols-3 gap-4 mb-8">
              {project.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-zinc-900/60 border border-white/10 text-center"
                >
                  <div className="font-display font-bold text-xl sm:text-2xl text-white">
                    {m.value}
                  </div>
                  <div className="text-[11px] font-mono text-zinc-400 mt-1">{m.label}</div>
                </div>
              ))}
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-8 my-8 text-sm">
            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-white/10">
              <h3 className="font-display font-bold text-white text-base mb-2 flex items-center gap-2">
                <Layers className="w-4 h-4 text-indigo-400" />
                The Client Challenge
              </h3>
              <p className="text-zinc-400 leading-relaxed font-light">{project.challenge}</p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-white/10">
              <h3 className="font-display font-bold text-white text-base mb-2 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-sky-400" />
                Our Studio Engineering
              </h3>
              <p className="text-zinc-400 leading-relaxed font-light">{project.solution}</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3">
                Key Studio Deliverables
              </h4>
              <div className="grid sm:grid-cols-2 gap-2">
                {project.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3">
                Technologies & Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg bg-zinc-900 border border-white/10 text-xs font-mono text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-white/10 flex items-center justify-between">
            <span className="text-xs font-mono text-zinc-400">
              Atela Studio Portfolio Case Study
            </span>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-white text-zinc-950 font-display font-semibold text-xs flex items-center gap-2 hover:bg-zinc-200 transition-colors"
            >
              <span>Explore Live Site ({project.title})</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

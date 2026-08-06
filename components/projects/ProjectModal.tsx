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
          className="fixed inset-0 bg-stone-950/60 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white border border-stone-200 rounded-3xl p-6 sm:p-10 z-10 shadow-2xl custom-scrollbar"
        >
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-6 right-6 p-3 rounded-full bg-stone-100 border border-stone-200 text-stone-600 hover:text-stone-950 transition-all"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-6">
            {project.isReal ? (
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Deployed Agency Client</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-100 border border-stone-200 text-stone-700 text-xs font-mono font-medium">
                <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>Agency Concept Showcase</span>
              </span>
            )}
            <span className="text-xs font-mono text-stone-400">• {project.year}</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-stone-950 tracking-tight">
            {project.title}
          </h2>
          <p className="text-sm font-mono text-[#c5a059] font-bold mt-2">Client: {project.client}</p>

          <div className="relative my-8 rounded-2xl overflow-hidden border border-stone-200 aspect-[16/9] group shadow-sm">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent opacity-60" />

            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
              <span className="text-xs font-mono text-stone-900 bg-white/90 px-3 py-1.5 rounded-lg border border-stone-200 backdrop-blur-md">
                {project.category} Architecture
              </span>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-stone-950 hover:bg-stone-850 text-white font-semibold text-xs flex items-center gap-2 shadow-lg transition-all hover:scale-105"
              >
                <span>Visit Live Platform</span>
                <ExternalLink className="w-4 h-4 text-[#c5a059]" />
              </a>
            </div>
          </div>

          {project.metrics && (
            <div className="grid grid-cols-3 gap-4 mb-8">
              {project.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-center"
                >
                  <div className="font-display font-bold text-xl sm:text-2xl text-stone-950">
                    {m.value}
                  </div>
                  <div className="text-[11px] font-mono text-stone-500 mt-1">{m.label}</div>
                </div>
              ))}
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-8 my-8 text-sm">
            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200">
              <h3 className="font-display font-bold text-stone-950 text-base mb-2 flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#c5a059]" />
                The Client Challenge
              </h3>
              <p className="text-stone-600 leading-relaxed font-light">{project.challenge}</p>
            </div>

            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200">
              <h3 className="font-display font-bold text-stone-950 text-base mb-2 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Our Studio Engineering
              </h3>
              <p className="text-stone-600 leading-relaxed font-light">{project.solution}</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-stone-500 mb-3">
                Key Studio Deliverables
              </h4>
              <div className="grid sm:grid-cols-2 gap-2">
                {project.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm text-stone-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-stone-500 mb-3">
                Technologies & Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg bg-stone-100 border border-stone-200 text-xs font-mono text-stone-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-stone-200 flex items-center justify-between">
            <span className="text-xs font-mono text-stone-500">
              Atela Studio Portfolio Case Study
            </span>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-stone-950 text-white font-display font-semibold text-xs flex items-center gap-2 hover:bg-stone-850 transition-colors"
            >
              <span>Explore Live Site ({project.title})</span>
              <ArrowUpRight className="w-4 h-4 text-[#c5a059]" />
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

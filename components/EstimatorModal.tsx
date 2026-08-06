'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Check, ArrowRight, Calculator, CheckCircle2 } from 'lucide-react';

interface EstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectEstimate: (details: string) => void;
}

export const EstimatorModal: React.FC<EstimatorModalProps> = ({
  isOpen,
  onClose,
  onSelectEstimate,
}) => {
  const [projectType, setProjectType] = useState<'brand' | 'agency' | 'portal' | 'ecommerce'>('agency');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(['anim', 'seo']);
  const [timeline, setTimeline] = useState<'standard' | 'rush'>('standard');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const projectTypes = [
    { id: 'brand', label: 'Bespoke Brand / Studio Web', basePrice: 1800, desc: 'Editorial 3-5 page showcase for architects, studios & consultants.' },
    { id: 'agency', label: 'Corporate Agency Platform', basePrice: 2800, desc: 'Complete high-performance company site with case studies & inquiry systems.' },
    { id: 'portal', label: 'Real Estate / Architecture Portal', basePrice: 3800, desc: 'Interactive search, luxury property showcases & lead workflows.' },
    { id: 'ecommerce', label: 'Boutique E-Commerce Platform', basePrice: 4500, desc: 'Custom shop experience, product showcases & payment checkout.' },
  ];

  const featureOptions = [
    { id: 'anim', label: 'Framer Motion & Micro-Interactions', price: 500 },
    { id: 'cms', label: 'Headless CMS (Sanity / Strapi / Payload)', price: 700 },
    { id: 'seo', label: 'Lighthouse 99+ & Advanced SEO Package', price: 400 },
    { id: 'lang', label: 'Multi-language (EN / ES / FR)', price: 600 },
    { id: '3d', label: 'Custom 3D Canvas / Spotlight Effects', price: 800 },
  ];

  const toggleFeature = (id: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const selectedTypeObj = projectTypes.find((t) => t.id === projectType) || projectTypes[1];
  const featuresCost = selectedFeatures.reduce((acc, featId) => {
    const feat = featureOptions.find((f) => f.id === featId);
    return acc + (feat ? feat.price : 0);
  }, 0);
  const timelineMultiplier = timeline === 'rush' ? 1.25 : 1.0;

  const calculatedPrice = Math.round((selectedTypeObj.basePrice + featuresCost) * timelineMultiplier);

  const handleApplyEstimate = () => {
    const summary = `Estimated Scope: ${selectedTypeObj.label} (~€${calculatedPrice}). Features: ${selectedFeatures.join(', ')}. Timeline: ${timeline}.`;
    onSelectEstimate(summary);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      // Scroll smoothly to contact section
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 1200);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-xl"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-zinc-950 border border-white/15 rounded-3xl p-6 sm:p-10 z-10 custom-scrollbar shadow-2xl shadow-indigo-500/10"
        >
          <button
            onClick={onClose}
            aria-label="Close estimator"
            className="absolute top-6 right-6 p-3 rounded-full bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>

          {submitted ? (
            <div className="py-16 text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-display font-bold text-2xl text-white">Scope Estimate Applied!</h3>
              <p className="text-zinc-400 text-sm mt-2">
                Transferring your choices to the inquiry form below...
              </p>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 mb-2">
                <Calculator className="w-4 h-4" />
                <span>Interactive Studio Calculator</span>
              </div>
              <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-white tracking-tight">
                Estimate Project Scope & Investment
              </h2>
              <p className="text-zinc-400 text-xs sm:text-sm mt-1 font-light">
                Tailor your project requirements for an instant budget and timeline estimation.
              </p>

              {/* Step 1: Project Type */}
              <div className="mt-8">
                <label className="text-xs font-mono uppercase tracking-widest text-zinc-400 block mb-3">
                  1. Select Web Experience Category
                </label>
                <div className="grid sm:grid-cols-2 gap-3">
                  {projectTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setProjectType(type.id as any)}
                      className={`p-4 rounded-2xl border text-left transition-all ${
                        projectType === type.id
                          ? 'bg-indigo-600/15 border-indigo-500 text-white shadow-lg'
                          : 'bg-zinc-900/40 border-white/10 text-zinc-400 hover:border-white/20 hover:text-white'
                      }`}
                    >
                      <div className="font-display font-bold text-sm text-white">{type.label}</div>
                      <div className="text-[11px] text-zinc-400 mt-1">{type.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Key Features */}
              <div className="mt-8">
                <label className="text-xs font-mono uppercase tracking-widest text-zinc-400 block mb-3">
                  2. Select Additional Modules & Specs
                </label>
                <div className="grid sm:grid-cols-2 gap-2">
                  {featureOptions.map((feat) => {
                    const isSelected = selectedFeatures.includes(feat.id);
                    return (
                      <button
                        key={feat.id}
                        onClick={() => toggleFeature(feat.id)}
                        className={`p-3 rounded-xl border text-xs font-medium flex items-center justify-between transition-all ${
                          isSelected
                            ? 'bg-indigo-500/20 border-indigo-500/60 text-white'
                            : 'bg-zinc-900/40 border-white/10 text-zinc-400 hover:text-zinc-200'
                        }`}
                      >
                        <span>{feat.label}</span>
                        <div
                          className={`w-5 h-5 rounded-md flex items-center justify-center border ${
                            isSelected
                              ? 'bg-indigo-600 border-indigo-400 text-white'
                              : 'border-white/20'
                          }`}
                        >
                          {isSelected && <Check className="w-3.5 h-3.5" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Timeline */}
              <div className="mt-8">
                <label className="text-xs font-mono uppercase tracking-widest text-zinc-400 block mb-3">
                  3. Project Delivery Speed
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setTimeline('standard')}
                    className={`p-3 rounded-xl border text-xs font-medium text-center transition-all ${
                      timeline === 'standard'
                        ? 'bg-indigo-600/20 border-indigo-500 text-white'
                        : 'bg-zinc-900/40 border-white/10 text-zinc-400'
                    }`}
                  >
                    Standard Studio Pace (3-4 Weeks)
                  </button>
                  <button
                    onClick={() => setTimeline('rush')}
                    className={`p-3 rounded-xl border text-xs font-medium text-center transition-all ${
                      timeline === 'rush'
                        ? 'bg-indigo-600/20 border-indigo-500 text-white'
                        : 'bg-zinc-900/40 border-white/10 text-zinc-400'
                    }`}
                  >
                    Priority Rush (1-2 Weeks)
                  </button>
                </div>
              </div>

              {/* Estimate Summary Footer */}
              <div className="mt-10 p-6 rounded-2xl bg-zinc-900/80 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block">
                    Estimated Studio Investment Range
                  </span>
                  <div className="font-display font-extrabold text-3xl text-white mt-1">
                    €{calculatedPrice.toLocaleString()}{' '}
                    <span className="text-xs font-mono font-normal text-zinc-400">EST. EUR</span>
                  </div>
                </div>

                <button
                  onClick={handleApplyEstimate}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-display font-semibold text-xs flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30 transition-all hover:scale-105"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Transfer Scope to Contact Form</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

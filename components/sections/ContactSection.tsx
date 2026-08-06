'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Mail, Globe, MessageSquare } from 'lucide-react';

interface ContactSectionProps {
  initialEstimate?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialEstimate }) => {
  const [selectedServices, setSelectedServices] = useState<string[]>(['Bespoke Web Design']);
  const [budgetTier, setBudgetTier] = useState<string>('€3k – €6k');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialEstimate) {
      setMessage((prev) => (prev ? `${prev}\n\n${initialEstimate}` : initialEstimate));
    }
  }, [initialEstimate]);

  const serviceList = [
    'Bespoke Web Engineering',
    'Haute Brand Identity',
    'Real Estate / Architecture Web',
    'Luxury E-Commerce',
    'Performance & SEO Audit',
  ];

  const budgetOptions = ['€1.5k – €3k', '€3k – €6k', '€6k – €10k+', 'To Be Defined'];

  const toggleService = (serv: string) => {
    setSelectedServices((prev) =>
      prev.includes(serv) ? prev.filter((s) => s !== serv) : [...prev, serv]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-36 relative z-10 bg-zinc-950/90 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-xs font-mono text-indigo-300 mb-6">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Start a Project Brief</span>
              </div>

              <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight leading-[1.05]">
                Let's build your brand’s next web asset.
              </h2>

              <p className="mt-6 text-zinc-400 text-base font-light leading-relaxed">
                Whether you need a bespoke luxury portfolio, an interactive real estate portal, or a high-converting agency site, Atela Studio is ready to craft it.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-zinc-900 border border-white/10 text-indigo-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest block">
                    Direct Email Inquiry
                  </span>
                  <a
                    href="mailto:navarroatela@gmail.com"
                    className="text-white font-display font-semibold hover:text-indigo-400 transition-colors"
                  >
                    navarroatela@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-zinc-900 border border-white/10 text-indigo-400">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest block">
                    Studio Base
                  </span>
                  <span className="text-white font-display font-semibold">
                    Madrid, Spain • Serving Global Clients
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-zinc-900/40 border border-white/15 backdrop-blur-xl relative">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-bold text-3xl text-white">Inquiry Received</h3>
                  <p className="text-zinc-400 text-sm mt-3 max-w-md mx-auto font-light">
                    Thank you, {name}! We will review your project brief and respond within 24 hours with an initial concept consultation.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 px-6 py-3 rounded-full bg-zinc-800 text-xs font-semibold text-white hover:bg-zinc-700 transition-colors"
                  >
                    Send Another Project Brief
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="text-xs font-mono uppercase tracking-widest text-zinc-400 block mb-3">
                      Required Services
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {serviceList.map((serv) => {
                        const isSelected = selectedServices.includes(serv);
                        return (
                          <button
                            type="button"
                            key={serv}
                            onClick={() => toggleService(serv)}
                            className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all ${
                              isSelected
                                ? 'bg-indigo-600 border-indigo-500 text-white shadow-md'
                                : 'bg-zinc-950 border-white/10 text-zinc-400 hover:text-white'
                            }`}
                          >
                            {serv}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono uppercase tracking-widest text-zinc-400 block mb-3">
                      Estimated Investment Budget
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {budgetOptions.map((b) => (
                        <button
                          type="button"
                          key={b}
                          onClick={() => setBudgetTier(b)}
                          className={`p-2.5 rounded-xl border text-xs font-medium text-center transition-all ${
                            budgetTier === b
                              ? 'bg-indigo-600/20 border-indigo-500 text-white'
                              : 'bg-zinc-950 border-white/10 text-zinc-400 hover:text-zinc-200'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono text-zinc-400 block mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Sofia Alarcón"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-white/10 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono text-zinc-400 block mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="sofia@brand.com"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-white/10 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-zinc-400 block mb-1">
                      Company / Existing Website URL
                    </label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. www.mycompany.com"
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-white/10 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-zinc-400 block mb-1">
                      Project Details & Brief
                    </label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about your brand vision, requirements, and target launch timeline..."
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-white/10 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-display font-semibold text-sm flex items-center justify-center gap-2 shadow-xl shadow-indigo-600/30 transition-all hover:scale-[1.01]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Project Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

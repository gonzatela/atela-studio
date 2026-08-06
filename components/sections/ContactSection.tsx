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
    <section id="contact" className="py-24 md:py-36 relative z-10 bg-[#faf8f5] border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-stone-200 bg-white text-xs font-mono text-stone-700 mb-6 shadow-xs">
                <MessageSquare className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>Start a Project Brief</span>
              </div>

              <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-stone-950 tracking-tight leading-[1.05]">
                Let's build your brand’s next web asset.
              </h2>

              <p className="mt-6 text-stone-600 text-base font-light leading-relaxed">
                Whether you need a bespoke luxury portfolio, an interactive real estate portal, or a high-converting agency site, Atela Studio is ready to craft it.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-stone-200 space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-white border border-stone-200 text-[#c5a059] shadow-xs">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-stone-500 uppercase tracking-widest block">
                    Direct Email Inquiry
                  </span>
                  <a
                    href="mailto:navarroatela@gmail.com"
                    className="text-stone-950 font-display font-semibold hover:text-[#c5a059] transition-colors"
                  >
                    navarroatela@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-white border border-stone-200 text-[#c5a059] shadow-xs">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-stone-500 uppercase tracking-widest block">
                    Studio Base
                  </span>
                  <span className="text-stone-950 font-display font-semibold">
                    Madrid, Spain • Serving Global Clients
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-stone-200 shadow-xl relative">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-bold text-3xl text-stone-950">Inquiry Received</h3>
                  <p className="text-stone-600 text-sm mt-3 max-w-md mx-auto font-light">
                    Thank you, {name}! We will review your project brief and respond within 24 hours with an initial concept consultation.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 px-6 py-3 rounded-full bg-stone-950 text-xs font-semibold text-white hover:bg-stone-850 transition-colors"
                  >
                    Send Another Project Brief
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="text-xs font-mono uppercase tracking-widest text-stone-500 block mb-3">
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
                                ? 'bg-stone-950 border-stone-950 text-white shadow-sm'
                                : 'bg-stone-50 border-stone-200 text-stone-600 hover:text-stone-950'
                            }`}
                          >
                            {serv}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono uppercase tracking-widest text-stone-500 block mb-3">
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
                              ? 'bg-stone-950 border-stone-950 text-white'
                              : 'bg-stone-50 border-stone-200 text-stone-600 hover:text-stone-950'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono text-stone-600 block mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Sofia Alarcón"
                        className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-950 text-sm focus:outline-none focus:border-stone-950 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono text-stone-600 block mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="sofia@brand.com"
                        className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-950 text-sm focus:outline-none focus:border-stone-950 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-stone-600 block mb-1">
                      Company / Existing Website URL
                    </label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. www.mycompany.com"
                      className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-950 text-sm focus:outline-none focus:border-stone-950 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-stone-600 block mb-1">
                      Project Details & Brief
                    </label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about your brand vision, requirements, and target launch timeline..."
                      className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-950 text-sm focus:outline-none focus:border-stone-950 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-stone-950 hover:bg-stone-850 text-white font-display font-semibold text-sm flex items-center justify-center gap-2 shadow-xl transition-all active:scale-[0.98]"
                  >
                    <Send className="w-4 h-4 text-[#c5a059]" />
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

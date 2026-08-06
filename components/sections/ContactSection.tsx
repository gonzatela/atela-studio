'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Mail, MapPin } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>(['Diseño Web']);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const serviceList = [
    'Diseño Web a Medida',
    'Identidad de Marca',
    'Web Inmobiliaria / Arquitectura',
    'Tienda Online',
  ];

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
    <section id="contact" className="py-24 md:py-36 relative z-10 bg-[#faf8f5] border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-[#c5a059] uppercase tracking-widest block mb-3 font-semibold">
                Contacto Directo
              </span>

              <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-stone-950 tracking-tight leading-[1.05]">
                Demos vida a tu nueva página web.
              </h2>

              <p className="mt-6 text-stone-600 text-base font-light leading-relaxed">
                Cuéntame qué idea tienes en mente y te responderé en menos de 24 horas con una propuesta personalizada.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-stone-200/80 space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-white border border-stone-200 text-[#c5a059] shadow-xs">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-stone-500 uppercase tracking-widest block">
                    Email de Contacto
                  </span>
                  <a
                    href="mailto:g.atelanavarro@gmail.com"
                    className="text-stone-950 font-display font-semibold hover:text-[#c5a059] transition-colors"
                  >
                    g.atelanavarro@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-white border border-stone-200 text-[#c5a059] shadow-xs">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-stone-500 uppercase tracking-widest block">
                    Ubicación
                  </span>
                  <span className="text-stone-950 font-display font-semibold">
                    Madrid, España
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-white border border-stone-200/80 shadow-md relative">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-bold text-3xl text-stone-950">¡Mensaje Enviado!</h3>
                  <p className="text-stone-600 text-sm mt-3 max-w-md mx-auto font-light">
                    Gracias {name}. He recibido tu solicitud y me pondré en contacto contigo muy pronto.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 px-6 py-3 rounded-full bg-stone-900 text-xs font-semibold text-white hover:bg-stone-800 transition-colors"
                  >
                    Enviar Otro Mensaje
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="text-xs font-mono uppercase tracking-widest text-stone-500 block mb-3 font-semibold">
                      ¿Qué necesitas para tu web?
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {serviceList.map((serv) => {
                        const isSelected = selectedServices.includes(serv);
                        return (
                          <button
                            type="button"
                            key={serv}
                            onClick={() => toggleService(serv)}
                            className={`px-4 py-2 rounded-full text-xs font-medium border transition-all ${
                              isSelected
                                ? 'bg-stone-900 border-stone-900 text-white shadow-xs'
                                : 'bg-stone-50 border-stone-200 text-stone-700 hover:text-stone-950'
                            }`}
                          >
                            {serv}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono text-stone-600 block mb-1">
                        Tu Nombre *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ej. Sofía Alarcón"
                        className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-950 text-sm focus:outline-none focus:border-stone-900 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono text-stone-600 block mb-1">
                        Tu Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="sofia@marca.com"
                        className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-950 text-sm focus:outline-none focus:border-stone-900 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-stone-600 block mb-1">
                      Web Actual o Empresa (Opcional)
                    </label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Ej. www.miempresa.com"
                      className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-950 text-sm focus:outline-none focus:border-stone-900 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-stone-600 block mb-1">
                      Cuéntame sobre tu proyecto
                    </label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Escribe aquí los detalles o ideas de lo que te gustaría conseguir..."
                      className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-950 text-sm focus:outline-none focus:border-stone-900 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-stone-900 hover:bg-stone-800 text-white font-display font-semibold text-sm flex items-center justify-center gap-2 shadow-lg transition-all active:scale-[0.98]"
                  >
                    <Send className="w-4 h-4 text-[#c5a059]" />
                    <span>Enviar Mensaje a Gonzalo</span>
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

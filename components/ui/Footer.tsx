'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#faf8f5] border-t border-stone-200/80 pt-16 pb-12 relative z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid md:grid-cols-12 gap-10 pb-16 border-b border-stone-200/80">
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <span className="font-display font-black text-2xl tracking-tighter text-stone-900 uppercase">
                ATELA STUDIO
              </span>
              <p className="mt-4 text-sm text-stone-600 max-w-sm font-light leading-relaxed">
                Diseño web profesional de forma rápida y a medida. Creamos páginas web elegantes y funcionales adaptadas a tu negocio.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-4 text-xs font-mono text-stone-500">
              <span className="flex items-center gap-1.5 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Gonzalo Atela
              </span>
              <span>•</span>
              <a href="mailto:g.atelanavarro@gmail.com" className="hover:text-stone-900 transition-colors">
                g.atelanavarro@gmail.com
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-stone-500 mb-4 font-semibold">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-sm text-stone-700 font-medium">
              <li>
                <a href="#work" className="hover:text-[#c5a059] transition-colors">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#c5a059] transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#c5a059] transition-colors">
                  Proceso
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#c5a059] transition-colors">
                  Sobre Mí
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#c5a059] transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-stone-500 mb-4 font-semibold">
              Proyectos Reales en Vivo
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://atelahomes.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 border-b border-stone-200/80 flex items-center justify-between text-xs text-stone-800 transition-colors hover:text-[#c5a059]"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="font-semibold text-sm">Atela Homes</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-stone-400" />
                </a>
              </li>

              <li>
                <a
                  href="https://www.gnginteriorismo.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 border-b border-stone-200/80 flex items-center justify-between text-xs text-stone-800 transition-colors hover:text-[#c5a059]"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="font-semibold text-sm">G&N Interiorismo</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-stone-400" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-stone-500">
          <div>
            © {new Date().getFullYear()} Atela Studio. Todos los derechos reservados.
          </div>
          <div>
            <span>Gonzalo Atela</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

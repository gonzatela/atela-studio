'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Proyectos', href: '#work' },
    { label: 'Servicios', href: '#services' },
    { label: 'Proceso', href: '#process' },
    { label: 'Sobre Mí', href: '#about' },
    { label: 'Contacto', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-[#faf8f5]/90 backdrop-blur-xl border-b border-stone-200/60 py-4 shadow-xs'
          : 'bg-transparent py-7'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
        <a href="#" className="group flex items-center gap-3">
          <Logo />
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-medium transition-colors relative py-1 group ${
                scrolled ? 'text-stone-800 hover:text-stone-950' : 'text-stone-900 hover:text-[#c5a059]'
              }`}
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#c5a059] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}

          <a
            href="#contact"
            className="px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-stone-900 hover:bg-stone-800 transition-all duration-200 shadow-sm active:scale-95 flex items-center gap-2"
          >
            <span>Iniciar Proyecto</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#c5a059]" />
          </a>
        </nav>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          className="md:hidden p-2.5 rounded-xl border border-stone-200 bg-white text-stone-900 active:scale-95 shadow-xs"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
            className="md:hidden bg-[#faf8f5] border-b border-stone-200 px-6 py-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-display font-medium text-stone-900 py-2 border-b border-stone-200/50 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-stone-400" />
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full mt-2 py-3.5 rounded-xl bg-stone-900 text-white text-center font-semibold text-sm shadow-md"
              >
                Hablar con Gonzalo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

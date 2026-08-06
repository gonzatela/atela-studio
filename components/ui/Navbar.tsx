'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sparkles, Clock } from 'lucide-react';

interface NavbarProps {
  onOpenEstimator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEstimator }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Europe/Madrid',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setCurrentTime(new Intl.DateTimeFormat('en-GB', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#faf8f5]/90 backdrop-blur-xl border-b border-stone-200/80 py-4 shadow-xs'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        <a href="#" className="group flex items-center gap-3 active:scale-95 transition-transform">
          <div className="w-9 h-9 rounded-xl bg-stone-900 p-[1px] shadow-xs group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-stone-950 rounded-[11px] flex items-center justify-center">
              <span className="font-display font-bold text-lg text-[#c5a059] tracking-tighter">A</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-lg text-stone-900 tracking-tight uppercase group-hover:text-[#c5a059] transition-colors">
              Atela Studio
            </span>
            <span className="text-[10px] tracking-widest text-stone-500 font-mono uppercase -mt-1">
              Web & Architecture
            </span>
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-6 px-4 py-1.5 rounded-full border border-stone-200/80 bg-white/80 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
            </span>
            <span className="text-xs font-mono text-stone-700">Available Q3/Q4</span>
          </div>
          <div className="h-3 w-[1px] bg-stone-300" />
          <div className="flex items-center gap-1.5 text-xs font-mono text-stone-500">
            <Clock className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>MADRID {currentTime || '22:48'} GMT+2</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                if (link.onClick) {
                  e.preventDefault();
                  link.onClick();
                }
              }}
              className="text-sm font-medium text-stone-700 hover:text-stone-950 transition-colors relative py-1 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#c5a059] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}

          <button
            onClick={onOpenEstimator}
            className="group relative px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white overflow-hidden bg-stone-900 hover:bg-stone-800 transition-all duration-200 shadow-sm active:scale-95 flex items-center gap-2"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Project Estimator</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-stone-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </nav>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          className="md:hidden p-2.5 rounded-xl border border-stone-200 bg-white text-stone-700 hover:text-stone-950 active:scale-95"
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
            className="md:hidden bg-[#faf8f5]/98 border-b border-stone-200 backdrop-blur-2xl px-6 py-6"
          >
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    if (link.onClick) {
                      e.preventDefault();
                      link.onClick();
                    }
                  }}
                  className="text-lg font-display font-medium text-stone-900 hover:text-stone-950 py-1 flex items-center justify-between border-b border-stone-200/50"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-stone-400" />
                </a>
              ))}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEstimator();
                }}
                className="w-full mt-2 py-3.5 rounded-xl bg-stone-900 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-md active:scale-95"
              >
                <Sparkles className="w-4 h-4 text-[#c5a059]" />
                <span>Launch Project Estimator</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

'use client';

import React from 'react';
import { CustomCursor, Navbar, Footer } from '@/components/ui';
import { HeroSection, ServicesSection, ProcessSection, FounderSection, ContactSection } from '@/components/sections';
import { ProjectGrid } from '@/components/projects';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf8f5] text-stone-900 selection:bg-[#c5a059]/25 relative">
      <CustomCursor />
      <Navbar />
      
      <HeroSection />
      <ProjectGrid />
      <ServicesSection />
      <ProcessSection />
      <FounderSection />
      
      <ContactSection />
      <Footer />
    </main>
  );
}

'use client';

import React, { useState } from 'react';
import { CustomCursor, Navbar, Footer, EstimatorModal } from '@/components/ui';
import { HeroSection, ServicesSection, ProcessSection, FounderSection, ContactSection } from '@/components/sections';
import { ProjectGrid } from '@/components/projects';

export default function Home() {
  const [isEstimatorOpen, setIsEstimatorOpen] = useState(false);
  const [estimateDetails, setEstimateDetails] = useState<string>('');

  const handleSelectEstimate = (details: string) => {
    setEstimateDetails(details);
  };

  return (
    <main className="min-h-screen bg-[#09090b] text-zinc-100 selection:bg-indigo-500/40 relative">
      <CustomCursor />
      <Navbar onOpenEstimator={() => setIsEstimatorOpen(true)} />
      
      <HeroSection onOpenEstimator={() => setIsEstimatorOpen(true)} />
      <ProjectGrid />
      <ServicesSection onOpenEstimator={() => setIsEstimatorOpen(true)} />
      <ProcessSection />
      <FounderSection />
      
      <ContactSection initialEstimate={estimateDetails} />
      <Footer />

      <EstimatorModal
        isOpen={isEstimatorOpen}
        onClose={() => setIsEstimatorOpen(false)}
        onSelectEstimate={handleSelectEstimate}
      />
    </main>
  );
}

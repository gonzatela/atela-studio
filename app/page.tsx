'use client';

import React, { useState } from 'react';
import { CustomCursor } from '@/components/CustomCursor';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { ProjectGrid } from '@/components/ProjectGrid';
import { ServicesSection } from '@/components/ServicesSection';
import { ProcessSection } from '@/components/ProcessSection';
import { EstimatorModal } from '@/components/EstimatorModal';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

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

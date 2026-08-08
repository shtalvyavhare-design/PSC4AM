/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ImageProvider } from './context/ImageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyTrustUs } from './components/WhyTrustUs';
import { PhilosophySection } from './components/PhilosophySection';
import { InstitutionalFramework } from './components/InstitutionalFramework';
import { Doctors } from './components/Doctors';
import { HowItWorks } from './components/HowItWorks';
import { CostComparison } from './components/CostComparison';
import { Pricing } from './components/Pricing';
import { CouplesOfferSection } from './components/CouplesOfferSection';
import { Warranty } from './components/Warranty';
import { GallerySection } from './components/GallerySection';
import { AssessmentSection } from './components/AssessmentSection';
import { FaqSection } from './components/FaqSection';
import { BookConsultationSection } from './components/BookConsultationSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <ImageProvider>
      <div className="min-h-screen bg-[#0b0c10] text-gray-100 flex flex-col font-sans selection:bg-[#d4af37] selection:text-black">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <WhyTrustUs />
          <PhilosophySection />
          <InstitutionalFramework />
          <Doctors />
          <HowItWorks />
          <CostComparison />
          <Pricing />
          <CouplesOfferSection />
          <Warranty />
          <GallerySection />
          <AssessmentSection />
          <FaqSection />
          <BookConsultationSection />
        </main>
        <Footer />
      </div>
    </ImageProvider>
  );
}

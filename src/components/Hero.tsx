import React from 'react';
import { ArrowRight, ShieldCheck, DollarSign, Plane, Building2, Lock } from 'lucide-react';
import { useImageContext } from '../context/ImageContext';

export const Hero: React.FC = () => {
  const { getImageUrl, setIsEligibilityOpen, setIsConsultationOpen } = useImageContext();
  const heroBgUrl = getImageUrl('hero_bg');

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-28 sm:pt-36 pb-12 overflow-hidden bg-black">
      {/* Background Image Overlay with Dark Gradient */}
      {heroBgUrl && (
        <div className="absolute inset-0 z-0 opacity-15 transition-opacity duration-500">
          <img
            src={heroBgUrl || undefined}
            alt="Dental Studio Background"
            className="w-full h-full object-cover object-center filter grayscale brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
        </div>
      )}

      {/* Decorative ambient radial light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#c5a059]/10 rounded-full blur-[140px] pointer-events-none z-0" />

      {/* Main Hero Center Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto">
        {/* Top Tag Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#c5a059]/40 bg-[#111111]/90 backdrop-blur-md mb-8 shadow-inner">
          <span className="w-2 h-2 rounded-full bg-[#c5a059] animate-pulse" />
          <span className="text-xs sm:text-sm font-medium tracking-wide text-[#f0d382]">
            Premium International Patient Coordinator
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-6">
          Restore Your Smile With <br />
          <span className="text-gold-gradient font-serif-luxury drop-shadow-md">
            World-Class Dental
          </span>{' '}
          <br />
          Implants in India
        </h1>

        {/* Subtitle */}
        <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-gray-300 font-normal leading-relaxed mb-10">
          Premium dental treatment, airport assistance, accommodation coordination, dedicated patient support and transparent pricing.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-16">
          <button
            onClick={() => setIsEligibilityOpen(true)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gold-gradient hover:bg-gold-gradient-hover text-black font-bold text-base px-8 py-3.5 rounded-full transition-all duration-200 shadow-xl shadow-[#c5a059]/20 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Check Eligibility</span>
            <ArrowRight className="w-5 h-5 text-black" />
          </button>

          <button
            onClick={() => setIsConsultationOpen(true)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 text-white border border-gray-600 hover:border-gray-300 font-semibold text-base px-8 py-3.5 rounded-full transition-all duration-200 cursor-pointer"
          >
            <span>Free Consultation</span>
          </button>
        </div>
      </div>

      {/* Bottom Trust Badges Bar */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 w-full pt-6 border-t border-[#1e222d]">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-xs sm:text-sm text-gray-300 font-medium">
          <div className="flex items-center gap-2 hover:text-[#d4af37] transition-colors">
            <DollarSign className="w-4 h-4 text-[#d4af37]" />
            <span>Transparent Pricing</span>
          </div>

          <div className="flex items-center gap-2 hover:text-[#d4af37] transition-colors">
            <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
            <span>No Hidden Costs</span>
          </div>

          <div className="flex items-center gap-2 hover:text-[#d4af37] transition-colors">
            <Plane className="w-4 h-4 text-[#d4af37]" />
            <span>International Patients</span>
          </div>

          <div className="flex items-center gap-2 hover:text-[#d4af37] transition-colors">
            <Building2 className="w-4 h-4 text-[#d4af37]" />
            <span>Institutional Care</span>
          </div>

          <div className="flex items-center gap-2 hover:text-[#d4af37] transition-colors">
            <Lock className="w-4 h-4 text-[#d4af37]" />
            <span>Secure Payments</span>
          </div>
        </div>
      </div>
    </section>
  );
};

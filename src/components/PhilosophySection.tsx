import React from 'react';
import { HeartHandshake, ShieldCheck, Award, Sparkles, Quote, Users, Heart, UserCheck } from 'lucide-react';

export const PhilosophySection: React.FC = () => {
  return (
    <section id="philosophy" className="py-20 sm:py-28 bg-[#0b0c10] text-gray-200 border-t border-[#1a1a1a] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c5a059]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1c1810] border border-[#c5a059]/40 text-[#c5a059] text-xs font-semibold tracking-wider uppercase mb-4">
            <Sparkles className="w-4 h-4 text-[#c5a059]" />
            <span>OUR GUIDING PRINCIPLES</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Our Story & Brand Philosophy
          </h2>
          <p className="mt-4 text-gray-400 text-sm sm:text-base font-light">
            Founded on personal resilience and dedicated to uncompromised, compassionate patient care.
          </p>
        </div>

        {/* Grid Layout: Founder's Message & Brand Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Card 1: Founder's Message (7 Cols) */}
          <div className="lg:col-span-7 bg-[#101010] border border-[#222222] hover:border-[#c5a059]/40 rounded-3xl p-6 sm:p-10 shadow-2xl transition-all duration-300 flex flex-col justify-between relative group">
            {/* Top decorative quote icon */}
            <div className="absolute top-6 right-6 sm:top-8 sm:right-8 text-[#c5a059]/15 group-hover:text-[#c5a059]/25 transition-colors">
              <Quote className="w-16 h-16 sm:w-20 sm:h-20" />
            </div>

            <div className="relative z-10 space-y-6">
              
              {/* Header Badge */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1c1810] border border-[#3d3119] flex items-center justify-center text-[#c5a059]">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#c5a059]">
                    FOUNDER'S MESSAGE
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                    Built From Personal Resilience
                  </h3>
                </div>
              </div>

              {/* Message Content */}
              <div className="space-y-4 text-gray-300 font-light text-base sm:text-lg leading-relaxed pt-2">
                <p className="first-letter:text-4xl first-letter:font-serif first-letter:font-bold first-letter:text-[#c5a059] first-letter:mr-1 first-letter:float-left">
                  My name is <strong className="text-white font-medium">Rutik</strong>, a survivor who fought back and recovered from three strokes resulting in disability, and I live with an aggressive neurological condition called PACNS.
                </p>
                <p className="text-gray-300">
                  Having navigated this intense medical journey myself, I intimately understand the vulnerabilities patients face, which is why I founded this venture to grant international patients seamless access to trusted, world-class healthcare in India.
                </p>
              </div>

            </div>

            {/* Founder Author Footer Block */}
            <div className="mt-8 pt-6 border-t border-[#1f1f1f] flex items-center gap-4 relative z-10">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#1c1810] border-2 border-[#c5a059] flex items-center justify-center text-[#c5a059] font-serif font-bold text-xl sm:text-2xl shadow-[0_0_15px_rgba(197,160,89,0.3)] shrink-0">
                R
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-white tracking-wide">
                  Rutik
                </h4>
                <p className="text-xs text-[#c5a059] font-medium tracking-wide">
                  Founder & Managing Director
                </p>
                <div className="mt-1 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#18150f] border border-[#332815] text-[10px] text-gray-300">
                  <ShieldCheck className="w-3 h-3 text-[#c5a059]" />
                  <span>PACNS & 3-Time Stroke Survivor</span>
                </div>
              </div>
            </div>

          </div>

          {/* Card 2: Brand Philosophy (5 Cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#12110c] to-[#0e0e0e] border border-[#2e2617] hover:border-[#c5a059]/60 rounded-3xl p-6 sm:p-10 shadow-2xl transition-all duration-300 flex flex-col justify-between relative">
            
            <div className="space-y-6 relative z-10">
              
              {/* Header Badge */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1c1810] border border-[#3d3119] flex items-center justify-center text-[#c5a059]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#c5a059]">
                    OUR BRAND PHILOSOPHY
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                    Exclusive Concierge Care
                  </h3>
                </div>
              </div>

              {/* Motto Callout Banner */}
              <div className="bg-[#1a160d] border-l-4 border-[#c5a059] rounded-r-xl p-4 my-2">
                <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-1">
                  Our Motto
                </p>
                <p className="font-serif text-lg sm:text-xl font-bold text-[#f3d078] italic">
                  “Personalized care and a happy smile.”
                </p>
              </div>

              {/* Body Copy */}
              <p className="text-gray-300 font-light text-sm sm:text-base leading-relaxed">
                Driven by our motto, we intentionally accept a limited number of patients each month to ensure uncompromised attention, meticulous coordination, and relationships built entirely on trust.
              </p>

              <p className="text-gray-300 font-light text-sm sm:text-base leading-relaxed">
                We reject mass-volume healthcare in favor of an exclusive concierge model, treating every individual like family because your restored health and smile are our greatest advertisements.
              </p>

            </div>

            {/* Feature Highlights Footer List */}
            <div className="mt-8 pt-6 border-t border-[#262015] grid grid-cols-2 gap-3 text-xs">
              <div className="flex items-center gap-2 bg-[#14120e] p-2.5 rounded-xl border border-[#282216]">
                <Users className="w-4 h-4 text-[#c5a059] shrink-0" />
                <span className="text-gray-200 font-medium">Limited Patients/Mo.</span>
              </div>
              <div className="flex items-center gap-2 bg-[#14120e] p-2.5 rounded-xl border border-[#282216]">
                <Heart className="w-4 h-4 text-[#c5a059] shrink-0" />
                <span className="text-gray-200 font-medium">Family-First Care</span>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Assurance Strip */}
        <div className="mt-12 text-center bg-[#101010] border border-[#222222] rounded-2xl py-4 px-6 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-300">
          <Sparkles className="w-4 h-4 text-[#c5a059] shrink-0" />
          <span>Every patient journey is personally overseen with extreme empathy and medical excellence.</span>
        </div>

      </div>
    </section>
  );
};

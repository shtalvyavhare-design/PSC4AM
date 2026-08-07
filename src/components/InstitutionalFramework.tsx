import React from 'react';
import { ShieldCheck, Microscope, Cpu, Award, Image as ImageIcon } from 'lucide-react';
import { useImageContext } from '../context/ImageContext';

export const InstitutionalFramework: React.FC = () => {
  const { getImageUrl, setIsCustomizerOpen } = useImageContext();
  const campusImageUrl = getImageUrl('institutional_building');

  const features = [
    {
      icon: ShieldCheck,
      title: 'Global Recognition',
      desc: 'Affiliated with one of the Top 5 Private Universities in India.'
    },
    {
      icon: Microscope,
      title: 'Professor-Led Care',
      desc: 'Treatment performed by experienced academic professors.'
    },
    {
      icon: Cpu,
      title: 'Digital Dentistry',
      desc: 'CBCT, digital workflows, and advanced 3D implant planning.'
    },
    {
      icon: Award,
      title: 'International Standards',
      desc: 'Sterilization and clinical protocols that exceed global benchmarks.'
    }
  ];

  return (
    <section id="institutional-framework" className="py-24 bg-black border-t border-[#1a1a1a] relative overflow-hidden">
      {/* Subtle background golden ambient light */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#c5a059]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Large Portrait Image Box with Floating Ranking Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[28px] overflow-hidden border border-[#222222] bg-[#141414] hover:border-[#c5a059] transition-all duration-300 hover:shadow-[0_0_30px_rgba(197,160,89,0.3)] shadow-2xl group h-[480px] sm:h-[540px]">
              <img
                src={campusImageUrl || undefined}
                alt="Institutional Campus & Atrium"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

              {/* Image Customizer Trigger Button */}
              <button
                onClick={() => setIsCustomizerOpen(true)}
                className="absolute top-4 right-4 bg-black/75 hover:bg-[#c5a059] hover:text-black text-gray-200 p-2.5 rounded-full border border-gray-700 transition-all cursor-pointer shadow-lg backdrop-blur-md"
                title="Replace Institutional Atrium Photo"
              >
                <ImageIcon className="w-4 h-4" />
              </button>
            </div>

            {/* Floating Top 100 Rankings Badge - Positioned overlapping bottom-right of image */}
            <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-6 sm:-right-6 bg-[#141414]/95 backdrop-blur-md border border-[#c5a059]/50 hover:border-[#c5a059] transition-all duration-300 p-5 rounded-2xl shadow-2xl max-w-xs sm:w-64 z-20 hover:shadow-[0_0_25px_rgba(197,160,89,0.3)]">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-[#1c1810] border border-[#c5a059]/30 text-[#f3d078] shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white font-serif-luxury leading-tight">
                    Top 100
                  </h4>
                  <p className="text-xs text-gray-400 mt-0.5 leading-snug font-light">
                    QS World University Rankings
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Headline & 2x2 Key Pillars Grid */}
          <div className="lg:col-span-7 space-y-8 pt-4 lg:pt-0">
            <div>
              <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-white leading-[1.15] mb-6">
                An Elite <span className="text-gold-gradient font-serif-luxury drop-shadow-md">Institutional</span> Framework
              </h2>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
                Unlike standalone commercial clinics, our treatments are performed within a recognized institutional framework. This ensures a multi-disciplinary approach, rigorous clinical standards, and academic-level oversight for every patient.
              </p>
            </div>

            {/* 2x2 Grid of Institutional Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#1f1f1f]">
              {features.map((feat, idx) => {
                const IconComponent = feat.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#141414] border border-[#222222] hover:border-[#c5a059] transition-all duration-300 hover:shadow-[0_0_25px_rgba(197,160,89,0.25)] hover:-translate-y-1 flex items-start gap-4 group"
                  >
                    <div className="p-2.5 rounded-xl bg-[#1c1810] border border-[#c5a059]/30 text-[#f3d078] group-hover:bg-gold-gradient group-hover:text-black transition-all duration-300 shrink-0 shadow-md">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-[#f3d078] transition-colors mb-1 font-serif-luxury">
                        {feat.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

import React from 'react';
import {
  Landmark,
  Globe,
  UserCheck,
  Receipt,
  BookOpen,
  GraduationCap,
  Clock,
  Hotel,
  Car,
  Video,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

export interface TrustPoint {
  icon: React.ElementType;
  title: string;
  desc: string;
}

export const WHY_TRUST_POINTS: TrustPoint[] = [
  {
    icon: Landmark,
    title: 'Institutional Framework',
    desc: 'Treatment within a recognised academic and clinical institution — not a standalone clinic.'
  },
  {
    icon: Globe,
    title: 'International Patient Support',
    desc: 'A dedicated team handling the unique needs of global patients from arrival to follow-up.'
  },
  {
    icon: UserCheck,
    title: 'Dedicated Coordinator',
    desc: 'One personal point of contact from your first inquiry to your flight home.'
  },
  {
    icon: Receipt,
    title: 'Transparent Pricing',
    desc: 'No hidden costs, unexpected add-ons, or surprise surgical fees. Ever.'
  },
  {
    icon: BookOpen,
    title: 'Evidence-Based Treatment',
    desc: 'Clinical protocols backed by global dental research and institutional peer review.'
  },
  {
    icon: GraduationCap,
    title: 'Experienced Professors',
    desc: 'Care led by academic leaders with decades of specialised implant experience.'
  },
  {
    icon: Clock,
    title: 'Long-Term Follow-Up',
    desc: "We don't forget you once you leave. Continuous remote teleconsultation care."
  },
  {
    icon: Hotel,
    title: 'Premium Accommodation',
    desc: 'Curated 4 and 4.5-star hotel partners for a restful, comfortable recovery.'
  },
  {
    icon: Car,
    title: 'Airport Pickup',
    desc: 'Chauffeur service directly from the terminal to your hotel — no stress on arrival.'
  },
  {
    icon: Video,
    title: 'Teleconsultation',
    desc: 'Speak directly with specialists before you ever book a flight.'
  },
  {
    icon: ShieldCheck,
    title: 'Clinical Protocols',
    desc: 'Strict adherence to international hygiene, sterility, and surgical standards.'
  },
  {
    icon: Sparkles,
    title: 'Luxury Patient Experience',
    desc: "Because medical travel shouldn't feel purely clinical — you deserve comfort."
  }
];

export const WhyTrustUs: React.FC = () => {
  return (
    <section id="why-trust-us" className="py-24 bg-black border-t border-[#1a1a1a] relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#c5a059]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#18150e] border border-[#c5a059]/40 mb-4 shadow-sm">
            <Sparkles className="w-4 h-4 text-[#c5a059]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#e5c07b]">
              Uncompromising Institutional Standards
            </span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-white mb-6">
            Why International Patients <br />
            <span className="text-gold-gradient font-serif-luxury drop-shadow-md">Choose Us</span>
          </h2>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-light">
            We bridge the gap between premium clinical care and seamless luxury travel, creating an unparalleled patient experience.
          </p>
        </div>

        {/* 12 Pillars Grid (4 columns x 3 rows on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {WHY_TRUST_POINTS.map((pt, idx) => {
            const IconComponent = pt.icon;
            return (
              <div
                key={idx}
                className="bg-[#141414] p-6 rounded-2xl border border-[#222222] hover:border-[#c5a059] transition-all duration-300 hover:-translate-y-1.5 group flex flex-col justify-between shadow-xl hover:shadow-[0_0_30px_rgba(197,160,89,0.3)]"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#1c1810] border border-[#c5a059]/30 flex items-center justify-center text-[#f3d078] mb-5 group-hover:bg-gold-gradient group-hover:text-black transition-all duration-300 shadow-md">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#f3d078] transition-colors font-serif-luxury">
                    {pt.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                    {pt.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};


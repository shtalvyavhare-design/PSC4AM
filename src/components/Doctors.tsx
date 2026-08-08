import React from 'react';
import { BookOpen, GraduationCap, Microscope } from 'lucide-react';
import { INITIAL_DOCTORS } from '../data/defaultData';
import { useImageContext } from '../context/ImageContext';

export const Doctors: React.FC = () => {
  const { getImageUrl } = useImageContext();

  return (
    <section id="doctors" className="py-24 bg-black border-t border-[#1a1a1a] relative overflow-hidden">
      {/* Background golden ambient glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#c5a059]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-white mb-4">
            Our <span className="text-gold-gradient font-serif-luxury">Clinical Experts</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
            Treatment led by recognized academic professors and pioneers in advanced implantology.
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#18140c] border border-[#c5a059]/40 shadow-sm">
            <GraduationCap className="w-4 h-4 text-[#c5a059]" />
            <span className="text-xs font-semibold tracking-wide text-[#e5c07b]">
              Department of Periodontology & Oral Implantology
            </span>
          </div>
        </div>

        {/* Doctors Grid: 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {INITIAL_DOCTORS.map((doc, idx) => {
            const slotKey = `doctor_${idx + 1}`;
            const photoUrl = getImageUrl(slotKey, doc.imageUrl);

            return (
              <div
                key={doc.id}
                className="bg-[#141414] rounded-2xl sm:rounded-3xl p-6 border border-[#222222] hover:border-[#c5a059] transition-all duration-300 hover:shadow-[0_0_30px_rgba(197,160,89,0.3)] hover:-translate-y-1.5 shadow-xl flex flex-col justify-between group relative"
              >
                {/* Top Profile Section */}
                <div className="flex flex-row items-start gap-4 sm:gap-5">
                  {/* Left Side: Small Doctor Image Box */}
                  <div className="w-28 h-28 sm:w-32 sm:h-32 shrink-0 relative rounded-2xl overflow-hidden bg-[#1a1a1a] border border-[#282828] group/img">
                    <img
                      src={photoUrl || doc.imageUrl || undefined}
                      alt={doc.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
                    />
                  </div>

                  {/* Right Side: Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-white leading-tight">
                      {doc.name}
                    </h3>
                    <p className="text-sm font-semibold text-[#c5a059] mt-0.5">
                      {doc.title}
                    </p>
                    <p className="text-xs text-gray-400 mt-1 leading-snug font-light">
                      {doc.qualification}
                    </p>

                    <div className="flex items-center gap-1.5 text-xs text-gray-300 mt-3 font-medium">
                      <BookOpen className="w-3.5 h-3.5 text-[#c5a059] shrink-0" />
                      <span>{doc.experienceYears} Experience</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Research Metrics Box */}
                <div className="bg-[#0a0a0a] border border-[#1f1f1f] rounded-xl p-3.5 mt-4">
                  <div className="flex items-center gap-1.5 text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-2">
                    <Microscope className="w-3 h-3 text-[#c5a059]" />
                    <span>RESEARCH</span>
                  </div>

                  <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
                    {doc.publications !== undefined && (
                      <div className="flex items-baseline gap-1">
                        <span className="text-base font-bold text-white">{doc.publications}</span>
                        <span className="text-xs text-gray-400 font-light">Publications</span>
                      </div>
                    )}

                    {doc.presentations !== undefined && (
                      <div className="flex items-baseline gap-1">
                        <span className="text-base font-bold text-white">{doc.presentations}</span>
                        <span className="text-xs text-gray-400 font-light">Presentations</span>
                      </div>
                    )}

                    {doc.guestLectures !== undefined && (
                      <div className="flex items-baseline gap-1">
                        <span className="text-base font-bold text-white">{doc.guestLectures}</span>
                        <span className="text-xs text-gray-400 font-light">Guest Lectures</span>
                      </div>
                    )}

                    {doc.hIndex !== undefined && (
                      <div className="flex items-baseline gap-1">
                        <span className="text-base font-bold text-white">{doc.hIndex}</span>
                        <span className="text-xs text-gray-400 font-light">H-index</span>
                      </div>
                    )}

                    {doc.citations !== undefined && (
                      <div className="flex items-baseline gap-1">
                        <span className="text-base font-bold text-white">{doc.citations}</span>
                        <span className="text-xs text-gray-400 font-light">Citations</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

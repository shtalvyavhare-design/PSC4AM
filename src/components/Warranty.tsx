import React from 'react';
import { ShieldCheck, CheckCircle2, Download, Info } from 'lucide-react';

export const Warranty: React.FC = () => {
  const points = [
    'Patient must attend all scheduled remote follow-up appointments.',
    'Maintain strict oral hygiene as prescribed by the clinical team.',
    'Follow all post-operative dietary and functional instructions.',
    'Guarantee applies specifically to implant osseointegration failure.',
    'Corrective treatment is fully covered at our affiliated institutional hospital.',
    'Travel expenses for any return visit are the patient\'s responsibility.'
  ];

  const coverageItems = [
    { label: 'Surgical Correction', status: '100% Covered', isHighlight: false },
    { label: 'Replacement Implants', status: '100% Covered', isHighlight: false },
    { label: 'Clinical Consultations', status: '100% Covered', isHighlight: false },
    { label: 'Travel', status: 'Patient Responsibility', isHighlight: true }
  ];

  const handleDownload = () => {
    // Generate a simple warranty PDF or download trigger / alert
    const content = `PERMANENT SMILE CARE - CLINICAL ASSURANCE & IMPLANT WARRANTY
=============================================================
Coverage:
- Surgical Correction: 100% Covered
- Replacement Implants: 100% Covered
- Clinical Consultations: 100% Covered
- Travel Expenses: Patient Responsibility

Conditions:
1. Patient must attend all scheduled remote follow-up appointments.
2. Maintain strict oral hygiene as prescribed by the clinical team.
3. Follow all post-operative dietary and functional instructions.
4. Guarantee applies specifically to implant osseointegration failure.
5. Corrective treatment is fully covered at our affiliated institutional hospital.
`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'PermanentSmileCare_Warranty_Policy.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="warranty" className="py-24 bg-black text-gray-300 border-t border-[#1a1a1a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Headline & Guidelines */}
          <div className="lg:col-span-7 flex flex-col">
            
            {/* Top Pill Badge */}
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#3b301a] bg-[#14120a] text-[#c5a059] text-xs font-semibold tracking-wide">
                <ShieldCheck className="w-4 h-4 text-[#c5a059]" />
                Clinical Assurance
              </span>
            </div>

            {/* Title */}
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Our Implant <span className="text-gold-gradient font-serif italic">Warranty</span>
            </h2>

            {/* Subtitle */}
            <p className="text-gray-300 text-base sm:text-lg mb-10 leading-relaxed font-light max-w-2xl">
              We stand behind our clinical work. If your implant fails to integrate within the guarantee period, we cover the full clinical cost of correction at our affiliated facility.
            </p>

            {/* Timeline / Vertical List */}
            <div className="relative pl-2 mb-10 space-y-6">
              {/* Vertical connector line */}
              <div className="absolute left-[17px] top-3 bottom-3 w-[1px] bg-[#2a2215]" />

              {points.map((point, index) => (
                <div key={index} className="relative flex items-start gap-4 z-10">
                  <div className="bg-[#0a0a0a] p-0.5 rounded-full shrink-0 mt-0.5">
                    <CheckCircle2 className="w-6 h-6 text-[#c5a059]" />
                  </div>
                  <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-normal pt-0.5">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            {/* Download Button */}
            <div>
              <a
                href="https://drive.google.com/file/d/1aaqakVwURBgHP5UWRWdOL_456OZfuZcQ/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 border border-[#c5a059] text-[#c5a059] hover:bg-[#c5a059] hover:text-black transition-all duration-200 font-bold px-7 py-3.5 rounded-full text-xs sm:text-sm tracking-wide cursor-pointer shadow-md"
              >
                <span>Download Warranty Policy</span>
                <Download className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column - Coverage Table Box */}
          <div className="lg:col-span-5">
            <div className="bg-[#12110d] border border-[#2d2516] rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl relative">
              
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-8">
                What Is Covered?
              </h3>

              {/* Rows */}
              <div className="divide-y divide-[#211b11] mb-8">
                {coverageItems.map((item, index) => (
                  <div key={index} className="py-4.5 flex justify-between items-center gap-4">
                    <span className="text-sm sm:text-base text-gray-300 font-medium">
                      {item.label}
                    </span>
                    <span className={`text-sm sm:text-base font-bold ${
                      item.isHighlight ? 'text-[#c5a059]' : 'text-white'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom Notice Box */}
              <div className="bg-[#1a160e] border border-[#332815] rounded-xl p-4 sm:p-5 flex items-start gap-3.5">
                <Info className="w-5 h-5 text-[#c5a059] shrink-0 mt-0.5" />
                <p className="text-xs text-gray-300 leading-relaxed font-light">
                  The guarantee applies only when the patient has followed the prescribed post-operative care protocol and attended all scheduled remote follow-up appointments.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { Check, ShieldCheck, AlertCircle, Info } from 'lucide-react';
import { useImageContext } from '../context/ImageContext';

export const Pricing: React.FC = () => {
  const { setIsEligibilityOpen } = useImageContext();

  return (
    <section id="pricing" className="py-24 bg-black text-gray-300 border-t border-[#1a1a1a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Investment in <span className="text-gold-gradient font-serif italic font-normal">Your Smile</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mb-4 max-w-2xl mx-auto font-light leading-relaxed">
            Institutional quality care, premium materials, and concierge service — packaged transparently.
          </p>
          <p className="text-[#c5a059] text-sm sm:text-base font-medium max-w-3xl mx-auto leading-relaxed">
            All packages include All-on-4 implant surgery performed by our academic professors within an institutional hospital.
          </p>
          <p className="text-gray-400 text-xs sm:text-sm font-light mt-3">
            *Current exchange rates will be applicable according to USD at the time of payment.
          </p>
        </div>

        {/* Notice Card: No Cost Increase for Additional Implants */}
        <div className="max-w-4xl mx-auto bg-[#12110c] border border-[#332815] rounded-2xl p-5 sm:p-6 mb-16 shadow-lg flex items-start gap-4">
          <div className="p-1.5 bg-[#211a0e] rounded-full text-[#c5a059] shrink-0 mt-0.5">
            <AlertCircle className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white mb-1">
              No Cost Increase for Additional Implants
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              If your clinical assessment determines that additional implants are required for optimal results,{' '}
              <strong className="text-white font-semibold">no extra cost will be passed to the patient</strong>. Your quoted package covers your full treatment.
            </p>
          </div>
        </div>

        {/* 3 Package Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-20 max-w-7xl mx-auto">
          
          {/* Card 1: Corticobasal Zirconia (Most Premium) */}
          <div className="bg-[#111111] border border-[#222222] rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative hover:border-[#333333] transition-all duration-300">
            <div>
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-2xl font-serif font-bold text-white">
                  Corticobasal Zirconia
                </h3>
                <span className="bg-[#1c1c1c] text-[#a0a0a0] border border-[#333333] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shrink-0 ml-2">
                  MOST PREMIUM
                </span>
              </div>
              <p className="text-xs text-gray-400 mb-6 leading-relaxed">
                Immediate loading protocol for severe bone loss cases.
              </p>

              {/* Price Panel */}
              <div className="bg-[#0a0a0a] border border-[#1f1f1f] rounded-xl p-5 mb-6 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-400">Single Arch</span>
                  <span className="text-2xl sm:text-3xl font-serif font-bold text-[#c5a059]">$35,000</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-[#1a1a1a]">
                  <span className="text-xs text-gray-400">Full Mouth</span>
                  <span className="text-2xl sm:text-3xl font-serif font-bold text-[#c5a059]">$60,000</span>
                </div>
              </div>

              {/* Checklist */}
              <ul className="space-y-3 mb-8 text-xs sm:text-sm text-gray-200">
                {[
                  'Corticobasal Implant Protocol',
                  'Premium Zirconia Bridge',
                  'Dedicated Coordinator',
                  'Airport Pickup & Chauffeur',
                  '4.5-Star Hotel Accommodation',
                  'Meals Included + Personalised Meal Planning',
                  '3-Day Treatment Protocol',
                  'Priority Support Line',
                  'Personalised Treatment Planning'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              {/* Warranty Pill */}
              <div className="mb-3">
                <span className="inline-flex items-center gap-1.5 bg-[#1a1711] border border-[#3d311c] text-[#c5a059] text-xs font-medium px-3 py-1.5 rounded-full">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>1.5-Year Implant Warranty</span>
                </span>
              </div>

              {/* Warranty Note Box */}
              <div className="bg-[#161616] border border-[#242424] rounded-xl p-3.5 mb-6 text-xs text-gray-400 leading-relaxed">
                <strong className="text-gray-300 font-semibold">Warranty note:</strong> If repair is required after returning home, treatment at our affiliated hospital is covered during the warranty period. Patient only bears travel expenses.
              </div>

              {/* CTA Button */}
              <button
                onClick={() => setIsEligibilityOpen(true)}
                className="w-full border border-[#c5a059] text-[#c5a059] hover:bg-gold-gradient hover:text-black transition-all duration-200 font-bold py-3.5 rounded-full text-xs sm:text-sm tracking-wide text-center cursor-pointer"
              >
                Check Eligibility
              </button>
            </div>
          </div>

          {/* Card 2: Signature Zirconia (Most Popular - Featured) */}
          <div className="bg-[#120f09] border-2 border-[#c5a059] rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative shadow-[0_0_40px_rgba(197,160,89,0.22)] lg:-translate-y-2 z-10">
            {/* Top Floating Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold-gradient text-black font-bold text-xs uppercase px-5 py-1.5 rounded-full shadow-lg tracking-wider whitespace-nowrap">
              MOST POPULAR
            </div>

            <div>
              <div className="mt-2 mb-2">
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                  Signature Zirconia
                </h3>
              </div>
              <p className="text-xs text-gray-300 mb-6 leading-relaxed">
                Premium standard protocol with aesthetic excellence.
              </p>

              {/* Price Panel */}
              <div className="bg-[#241e13] border border-[#4a3b22] rounded-xl p-5 mb-6 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-300">Single Arch</span>
                  <span className="text-xl sm:text-2xl font-serif font-bold text-white">$16,000 – $22,000</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-[#382f1d]">
                  <span className="text-xs text-gray-300">Full Mouth</span>
                  <span className="text-xl sm:text-2xl font-serif font-bold text-white">$28,000 – $38,000</span>
                </div>
              </div>

              {/* Checklist */}
              <ul className="space-y-3 mb-8 text-xs sm:text-sm text-gray-100">
                {[
                  'Nobel Biocare or Equivalent Premium Implant System',
                  'Premium Zirconia Bridge',
                  'Airport Pickup & Chauffeur',
                  '4-Star Hotel Accommodation',
                  'Meals Included + Personalised Meal Planning',
                  'Dedicated Coordinator',
                  'Bone Healing Support',
                  'Teleconsultation'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              {/* Warranty Pill */}
              <div className="mb-3">
                <span className="inline-flex items-center gap-1.5 bg-[#2a2113] border border-[#524125] text-[#d4af37] text-xs font-semibold px-3 py-1.5 rounded-full">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>1-Year Implant Warranty</span>
                </span>
              </div>

              {/* Warranty Note Box */}
              <div className="bg-[#201a11] border border-[#3d311c] rounded-xl p-3.5 mb-6 text-xs text-gray-300 leading-relaxed">
                <strong className="text-white font-semibold">Warranty note:</strong> If implant-related complications occur during the warranty period and the follow-up protocol has been followed, treatment at our affiliated hospital is covered. Patient is responsible only for travel expenses.
              </div>

              {/* CTA Button */}
              <button
                onClick={() => setIsEligibilityOpen(true)}
                className="w-full bg-gold-gradient hover:bg-gold-gradient-hover text-black font-bold py-3.5 rounded-full text-xs sm:text-sm tracking-wide text-center shadow-lg transition-all duration-200 cursor-pointer"
              >
                Check Eligibility
              </button>
            </div>
          </div>

          {/* Card 3: Essential Acrylic Hybrid (Budget Option) */}
          <div className="bg-[#111111] border border-[#222222] rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative hover:border-[#333333] transition-all duration-300">
            <div>
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-2xl font-serif font-bold text-white">
                  Essential Acrylic Hybrid
                </h3>
                <span className="bg-[#1c1c1c] text-[#a0a0a0] border border-[#333333] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shrink-0 ml-2">
                  BUDGET OPTION
                </span>
              </div>
              <p className="text-xs text-gray-400 mb-6 leading-relaxed">
                Reliable functionality — an accessible entry point to quality care.
              </p>

              {/* Price Panel */}
              <div className="bg-[#0a0a0a] border border-[#1f1f1f] rounded-xl p-5 mb-6 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-400">Single Arch</span>
                  <span className="text-xl sm:text-2xl font-serif font-bold text-white">$9,000 – $11,000</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-[#1a1a1a]">
                  <span className="text-xs text-gray-400">Full Mouth</span>
                  <span className="text-xl sm:text-2xl font-serif font-bold text-white">$14,000 – $20,000</span>
                </div>
              </div>

              {/* Checklist */}
              <ul className="space-y-3 mb-8 text-xs sm:text-sm text-gray-200">
                {[
                  'Korean Implant System',
                  'Fixed Acrylic Prosthesis',
                  'Bone Grafting Included in Package',
                  'Dedicated Coordinator',
                  'Airport Assistance',
                  'Comfort Recovery Stay',
                  'Meals Included + Meal Planning',
                  'Teleconsultations'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              {/* Warranty Pill */}
              <div className="mb-6">
                <span className="inline-flex items-center gap-1.5 bg-[#1a1a1a] border border-[#2a2a2a] text-gray-400 text-xs font-medium px-3 py-1.5 rounded-full">
                  <Info className="w-3.5 h-3.5" />
                  <span>No implant warranty</span>
                </span>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => setIsEligibilityOpen(true)}
                className="w-full border border-[#444444] text-white hover:border-[#c5a059] hover:text-[#c5a059] transition-all duration-200 font-bold py-3.5 rounded-full text-xs sm:text-sm tracking-wide text-center cursor-pointer"
              >
                Check Eligibility
              </button>
            </div>
          </div>

        </div>

        {/* Notice Box: No Hidden Surgical Costs */}
        <div className="max-w-4xl mx-auto bg-[#12110d] border border-[#3a2f1c] rounded-2xl p-8 sm:p-10 text-center mb-20 shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#c5a059] mb-4">
            No Hidden Surgical Costs
          </h3>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl mx-auto font-light">
            If bone grafting or additional bone augmentation is clinically required, it will be included within your personalised treatment package wherever applicable. No unexpected surgical add-on charges after treatment planning. Clinical eligibility applies.
          </p>
        </div>

        {/* Detailed Package Comparison Table */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-center text-white mb-10">
            Detailed Package Comparison
          </h3>

          <div className="bg-[#0f0f0f] border border-[#222222] rounded-2xl overflow-x-auto shadow-2xl">
            <table className="w-full text-left text-xs sm:text-sm text-gray-200 border-collapse min-w-[650px]">
              <thead>
                <tr className="border-b border-[#222222] bg-[#141414] text-xs font-bold uppercase tracking-wider">
                  <th className="py-4 px-6 text-gray-400">Feature</th>
                  <th className="py-4 px-6 text-[#c5a059]">Corticobasal Zirconia</th>
                  <th className="py-4 px-6 text-[#c5a059]">Signature Zirconia</th>
                  <th className="py-4 px-6 text-gray-300">Essential Acrylic</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1f1f1f] font-normal">
                <tr>
                  <td className="py-4 px-6 font-semibold text-gray-300">Implant System</td>
                  <td className="py-4 px-6 text-[#c5a059] font-medium">Corticobasal Protocol</td>
                  <td className="py-4 px-6 text-white font-medium">Nobel Biocare (Premium)</td>
                  <td className="py-4 px-6 text-gray-400">Korean Standard</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-gray-300">Prosthesis</td>
                  <td className="py-4 px-6 text-[#c5a059] font-medium">Premium Zirconia</td>
                  <td className="py-4 px-6 text-white font-medium">Premium Zirconia</td>
                  <td className="py-4 px-6 text-gray-400">Fixed Acrylic</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-gray-300">Best For</td>
                  <td className="py-4 px-6 text-[#c5a059] font-medium">Severe Bone Loss</td>
                  <td className="py-4 px-6 text-white font-medium">Standard Cases</td>
                  <td className="py-4 px-6 text-gray-400">Budget-Conscious</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-gray-300">Accommodation</td>
                  <td className="py-4 px-6 text-[#c5a059] font-medium">4.5-Star Hotel</td>
                  <td className="py-4 px-6 text-white font-medium">4-Star Hotel</td>
                  <td className="py-4 px-6 text-gray-400">Comfort Recovery Stay</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-gray-300">Meals</td>
                  <td className="py-4 px-6 text-[#c5a059] font-medium">Included + Meal Plan</td>
                  <td className="py-4 px-6 text-white font-medium">Included + Meal Plan</td>
                  <td className="py-4 px-6 text-gray-400">Included + Meal Plan</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-gray-300">Airport Pickup</td>
                  <td className="py-4 px-6 text-[#c5a059] font-medium">Chauffeur Service</td>
                  <td className="py-4 px-6 text-white font-medium">Chauffeur Service</td>
                  <td className="py-4 px-6 text-gray-400">Assistance</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-gray-300">Coordinator</td>
                  <td className="py-4 px-6 text-[#c5a059] font-medium">✓ Dedicated</td>
                  <td className="py-4 px-6 text-white font-medium">✓ Dedicated</td>
                  <td className="py-4 px-6 text-gray-400">✓ Dedicated</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-gray-300">Bone Grafting</td>
                  <td className="py-4 px-6 text-[#c5a059] font-medium">Not Required</td>
                  <td className="py-4 px-6 text-white font-medium">Included if needed</td>
                  <td className="py-4 px-6 text-gray-400">Included in Package</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-gray-300">Teleconsultation</td>
                  <td className="py-4 px-6 text-[#c5a059] font-medium">✓</td>
                  <td className="py-4 px-6 text-white font-medium">✓</td>
                  <td className="py-4 px-6 text-gray-400">✓</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-gray-300">Warranty</td>
                  <td className="py-4 px-6 text-[#c5a059] font-medium">1.5 Years*</td>
                  <td className="py-4 px-6 text-white font-medium">1 Year*</td>
                  <td className="py-4 px-6 text-gray-400">None</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-gray-300">Extra Implant Cost</td>
                  <td className="py-4 px-6 text-[#c5a059] font-medium">No charge</td>
                  <td className="py-4 px-6 text-white font-medium">No charge</td>
                  <td className="py-4 px-6 text-gray-400">No charge</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-center text-xs text-gray-400 font-light mt-4 italic">
            * All prices are quoted in USD. Current exchange rates will be applicable according to USD at the time of payment.
          </p>
        </div>

      </div>
    </section>
  );
};

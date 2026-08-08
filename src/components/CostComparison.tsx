import React from 'react';
import { CheckCircle2, TrendingDown } from 'lucide-react';
import { useImageContext } from '../context/ImageContext';
import implantCentreImg from '../../Implant Centre.png';
import drSharathImg from '../../dr-sharath.jpg';

export const CostComparison: React.FC = () => {
  const { getImageUrl } = useImageContext();

  const costData = [
    { country: 'USA', range: '$45,000–$85,000+', heightPercent: 92, isIndia: false },
    { country: 'Canada', range: '$40,000–$62,000', heightPercent: 70, isIndia: false },
    { country: 'UK', range: '$39,000–$62,000', heightPercent: 70, isIndia: false },
    { country: 'Australia', range: '$39,000–$59,000', heightPercent: 66, isIndia: false },
    { country: 'New Zealand', range: '$38,000–$56,000', heightPercent: 62, isIndia: false },
    {
      country: 'Permanent Smile Care',
      range: '$28,000–$38,000',
      heightPercent: 42,
      isIndia: true,
      badge: 'Up to 60% Less'
    }
  ];

  const showcaseImages = [
    {
      title: 'State-of-the-art implant suites',
      url: getImageUrl('clinic_op', implantCentreImg)
    },
    {
      title: 'Life-changing results',
      url: getImageUrl('gallery_1_after', implantCentreImg)
    },
    {
      title: 'Professor-led clinical team',
      url: getImageUrl('doctor_1', drSharathImg)
    }
  ];

  return (
    <section id="cost-comparison" className="py-24 bg-black text-gray-300 border-t border-[#1a1a1a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            World-Class Care at a <span className="text-gold-gradient font-serif italic">Fraction of the Cost</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Full arch zirconia implant pricing across your home country — <em className="italic font-normal text-white">without</em> bone grafting or sinus lifts.
          </p>
        </div>

        {/* Notice Card: Our packages include everything */}
        <div className="max-w-4xl mx-auto bg-[#12110c] border border-[#332815] rounded-2xl p-5 sm:p-6 mb-16 shadow-lg flex items-start gap-4">
          <div className="p-1 bg-[#211a0e] rounded-full text-[#c5a059] shrink-0 mt-0.5">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light">
            <strong className="text-[#c5a059] font-semibold">Our packages include everything —</strong> bone grafting, sinus lifts, extractions, temporary prosthetics, and final zirconia bridges are all bundled at no extra cost. Most Western quotes exclude these, adding $8,000–$25,000 more.
          </p>
        </div>

        {/* Main Section Content: Chart + Right Stacked Images */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Side: Vertical Bar Chart (7 cols) */}
          <div className="lg:col-span-7 bg-[#111111] border border-[#222222] rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
            
            {/* Chart Area */}
            <div className="h-[300px] sm:h-[340px] w-full flex items-end justify-between gap-2 sm:gap-4 pb-2 pt-10 border-b border-[#222222] relative">
              
              {/* Background faint guide lines */}
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-10 py-6">
                <div className="border-b border-gray-400 w-full" />
                <div className="border-b border-gray-400 w-full" />
                <div className="border-b border-gray-400 w-full" />
              </div>

              {costData.map((item, index) => (
                <div key={index} className="flex flex-col items-center flex-1 h-full justify-end relative group">
                  
                  {/* Badge above SmileIndia bar */}
                  {item.badge && (
                    <div className="mb-2 bg-[#2a2113] border border-[#c5a059] text-[#c5a059] text-[10px] sm:text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-lg whitespace-nowrap animate-bounce">
                      <TrendingDown className="w-3 h-3 text-[#c5a059]" />
                      <span>{item.badge}</span>
                    </div>
                  )}

                  {/* Bar */}
                  <div
                    style={{ height: `${item.heightPercent}%` }}
                    className={`w-full rounded-t-xl transition-all duration-500 ${
                      item.isIndia
                        ? 'bg-gradient-to-t from-[#8c6c2e] via-[#c5a059] to-[#f3cf83] shadow-[0_0_25px_rgba(197,160,89,0.35)]'
                        : 'bg-[#222222] group-hover:bg-[#2c2c2c]'
                    }`}
                  />
                </div>
              ))}
            </div>

            {/* Country Labels & Pricing under Bars */}
            <div className="flex justify-between items-start gap-2 sm:gap-4 pt-4 mb-6">
              {costData.map((item, index) => (
                <div key={index} className="flex-1 text-center">
                  <div className={`text-xs sm:text-sm font-bold ${item.isIndia ? 'text-[#c5a059]' : 'text-white'}`}>
                    {item.country}
                  </div>
                  <div className={`text-[10px] sm:text-xs mt-1 leading-tight ${item.isIndia ? 'text-[#c5a059] font-semibold' : 'text-gray-400'}`}>
                    {item.range}
                  </div>
                </div>
              ))}
            </div>

            {/* Footnote */}
            <p className="text-[11px] sm:text-xs text-gray-400 leading-relaxed font-light border-t border-[#1a1a1a] pt-4">
              Prices shown in USD equivalent for standard full arch zirconia (All-on-4/6) without bone grafts or sinus lifts. Permanent Smile Care packages include all surgical extras. Airfare and visa not included.
            </p>

          </div>

          {/* Right Side: 3 Stacked Image Cards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {showcaseImages.map((img, index) => (
              <div
                key={index}
                className="relative rounded-2xl overflow-hidden border border-[#222222] group h-[140px] sm:h-[155px] shadow-lg transition-transform duration-300 hover:scale-[1.01]"
              >
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
                  referrerPolicy="no-referrer"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                
                {/* Label */}
                <div className="absolute bottom-4 left-5 right-5">
                  <h3 className="text-white font-semibold text-sm sm:text-base tracking-wide drop-shadow-md">
                    {img.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

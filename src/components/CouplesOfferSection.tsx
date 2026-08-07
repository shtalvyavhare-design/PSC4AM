import React from 'react';
import { Users, Percent, Wallet, Hotel, CalendarCheck, Plane, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import { useImageContext } from '../context/ImageContext';

// Generated couple photo asset
import couplesBannerImg from '../assets/images/couples_package_banner_1786139421072.jpg';

export const CouplesOfferSection: React.FC = () => {
  const { setIsEligibilityOpen } = useImageContext();

  return (
    <section id="couples-offer" className="py-20 sm:py-28 bg-black text-gray-200 border-t border-[#1a1a1a] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#c5a059]/10 blur-[140px] rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid: Left Copy & Offer Box | Right Couple Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16 sm:mb-20">
          
          {/* Left Column (6 or 7 cols) */}
          <div className="lg:col-span-6 xl:col-span-7 space-y-6">
            
            {/* Exclusive Offer Tag Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#18150f] border border-[#332815] text-[#c5a059] text-xs font-semibold tracking-wider uppercase shadow-md">
              <Users className="w-4 h-4 text-[#c5a059]" />
              <span>EXCLUSIVE COUPLE'S DISCOUNT</span>
            </div>

            {/* Headline */}
            <div>
              <h2 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight">
                Couple’s Package
              </h2>
              <div className="mt-2 space-y-1">
                <p className="text-xl sm:text-2xl font-serif text-gold-gradient font-medium tracking-wide">
                  Travel Together. Heal Together.
                </p>
                <p className="text-lg sm:text-xl text-gray-300 font-light">
                  Save More. Smile More.
                </p>
              </div>
            </div>

            {/* Save Instantly Callout Card */}
            <div className="bg-[#120f09] border-2 border-[#c5a059]/50 rounded-2xl p-5 sm:p-6 shadow-[0_0_30px_rgba(197,160,89,0.15)] flex items-center gap-5 sm:gap-6 max-w-lg">
              {/* Gold % Seal Badge */}
              <div className="relative shrink-0">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gold-gradient p-0.5 shadow-[0_0_20px_rgba(197,160,89,0.35)]">
                  <div className="w-full h-full rounded-full bg-[#0d0c0a] flex items-center justify-center border border-[#d4af37]/40">
                    <Percent className="w-8 h-8 sm:w-10 sm:h-10 text-[#f3ce72]" />
                  </div>
                </div>
              </div>

              <div>
                <span className="text-xs font-semibold text-[#c5a059] uppercase tracking-widest block mb-1">
                  INSTANT SAVINGS
                </span>
                <span className="text-3xl sm:text-4xl font-serif font-extrabold text-gold-gradient tracking-tight block">
                  $1,000 OFF
                </span>
                <span className="text-xs sm:text-sm text-gray-300 font-light">
                  Applied directly to your combined package total
                </span>
              </div>
            </div>

            {/* Description Body */}
            <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed max-w-2xl">
              When you and your partner book your dental treatment packages together, we optimize our logistics and share the savings with you—giving you world-class dental care and a luxurious getaway at unbeatable value.
            </p>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                onClick={() => setIsEligibilityOpen(true)}
                className="inline-flex items-center gap-3 bg-gold-gradient hover:bg-gold-gradient-hover text-black font-bold px-8 py-4 rounded-full text-sm sm:text-base tracking-wide shadow-[0_0_25px_rgba(197,160,89,0.3)] transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Sparkles className="w-5 h-5 fill-black/20" />
                <span>Claim Couple’s $1,000 Savings</span>
              </button>
            </div>

          </div>

          {/* Right Column: Hero Image with Floating Savings Badge */}
          <div className="lg:col-span-6 xl:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#c5a059]/40 shadow-[0_0_40px_rgba(0,0,0,0.8)] group">
              <img
                src={couplesBannerImg}
                alt="Couple smiling in luxury dental lounge"
                referrerPolicy="no-referrer"
                className="w-full h-[360px] sm:h-[450px] lg:h-[500px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              {/* Subtle Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />

              {/* Logo Watermark inside image */}
              <div className="absolute top-6 left-6 bg-black/70 backdrop-blur-md border border-[#c5a059]/40 px-3.5 py-1.5 rounded-xl flex items-center gap-2 shadow-lg">
                <Heart className="w-4 h-4 text-[#c5a059] fill-[#c5a059]/30" />
                <span className="font-serif text-xs font-bold text-white tracking-wide">
                  PSC Permanent Smile Care
                </span>
              </div>

              {/* Floating $1,000 Combined Savings Badge */}
              <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 bg-[#120f09]/95 backdrop-blur-xl border-2 border-[#c5a059] rounded-2xl px-6 py-4 shadow-[0_10px_35px_rgba(0,0,0,0.9)] text-center transform group-hover:scale-105 transition-transform">
                <span className="block text-2xl sm:text-3xl font-serif font-extrabold text-gold-gradient tracking-tight">
                  $1,000
                </span>
                <span className="block text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#f0d382] mt-0.5">
                  COMBINED SAVINGS
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Section Divider & 4 Feature Pillars Box */}
        <div className="bg-[#111111] border border-[#222222] rounded-3xl p-6 sm:p-10 shadow-2xl relative">
          
          {/* Section Sub-header */}
          <div className="text-center relative mb-8 sm:mb-12">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-[#222222]" />
            </div>
            <div className="relative inline-block bg-[#111111] px-6">
              <span className="text-xs sm:text-sm font-bold text-[#c5a059] uppercase tracking-widest">
                WHY CHOOSE THE COUPLE’S PACKAGE?
              </span>
            </div>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            
            {/* Feature 1: $1,000 COMBINED SAVINGS */}
            <div className="bg-[#18150f] border border-[#332815] hover:border-[#c5a059] rounded-2xl p-5 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#241e13] border border-[#4a3b22] flex items-center justify-center text-[#f0d382] mb-4 group-hover:border-[#c5a059] transition-colors">
                  <Wallet className="w-6 h-6" />
                </div>
                <h4 className="text-xs font-bold text-[#f0d382] uppercase tracking-wider mb-2">
                  $1,000 COMBINED SAVINGS
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed font-light">
                  Enjoy a massive $1,000 discount applied directly to your combined package total.
                </p>
              </div>
            </div>

            {/* Feature 2: SHARED ACCOMMODATIONS */}
            <div className="bg-[#18150f] border border-[#332815] hover:border-[#c5a059] rounded-2xl p-5 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#241e13] border border-[#4a3b22] flex items-center justify-center text-[#f0d382] mb-4 group-hover:border-[#c5a059] transition-colors">
                  <Hotel className="w-6 h-6" />
                </div>
                <h4 className="text-xs font-bold text-[#f0d382] uppercase tracking-wider mb-2">
                  SHARED ACCOMMODATIONS
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed font-light">
                  Stay together in comfort while streamlining logistics and travel arrangements.
                </p>
              </div>
            </div>

            {/* Feature 3: OPTIMIZED CARE & EFFICIENCY */}
            <div className="bg-[#18150f] border border-[#332815] hover:border-[#c5a059] rounded-2xl p-5 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#241e13] border border-[#4a3b22] flex items-center justify-center text-[#f0d382] mb-4 group-hover:border-[#c5a059] transition-colors">
                  <CalendarCheck className="w-6 h-6" />
                </div>
                <h4 className="text-xs font-bold text-[#f0d382] uppercase tracking-wider mb-2">
                  OPTIMIZED CARE & EFFICIENCY
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed font-light">
                  Coordinated scheduling minimizes travel time and clinical overhead, passing savings straight to you.
                </p>
              </div>
            </div>

            {/* Feature 4: TRAVEL TOGETHER, HEAL TOGETHER */}
            <div className="bg-[#18150f] border border-[#332815] hover:border-[#c5a059] rounded-2xl p-5 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#241e13] border border-[#4a3b22] flex items-center justify-center text-[#f0d382] mb-4 group-hover:border-[#c5a059] transition-colors">
                  <Plane className="w-6 h-6" />
                </div>
                <h4 className="text-xs font-bold text-[#f0d382] uppercase tracking-wider mb-2">
                  TRAVEL & HEAL TOGETHER
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed font-light">
                  Turn necessary dental procedures into a seamless, stress-free wellness vacation with your partner.
                </p>
              </div>
            </div>

          </div>

          {/* Bottom Banner Bar */}
          <div className="mt-8 pt-6 border-t border-[#222222] flex items-center justify-center gap-3 text-center text-xs sm:text-sm text-gray-300 font-light">
            <ShieldCheck className="w-5 h-5 text-[#c5a059] shrink-0" />
            <span>Same world-class treatment. Same expert care. More savings when you book together.</span>
          </div>

        </div>

      </div>
    </section>
  );
};

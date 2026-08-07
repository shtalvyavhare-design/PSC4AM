import React, { useRef, useState, useEffect } from 'react';
import { Download, ShieldAlert, CheckCircle2, FileText, Calendar, Sparkles } from 'lucide-react';
import { useImageContext } from '../context/ImageContext';

// Custom SVG Line Art Icons for clean diagram representation
const SubmitIcon = () => (
  <svg className="w-12 h-12 text-[#1a1f2c]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="16" y="12" width="32" height="42" rx="4" stroke="#222" fill="#fff" />
    <path d="M24 12V8C24 6.89543 24.8954 6 26 6H38C39.1046 6 40 6.89543 40 8V12" stroke="#222" fill="#f8f9fa" />
    <line x1="22" y1="22" x2="38" y2="22" stroke="#666" strokeWidth="2" strokeLinecap="round" />
    <line x1="22" y1="28" x2="42" y2="28" stroke="#666" strokeWidth="2" strokeLinecap="round" />
    <line x1="22" y1="34" x2="34" y2="34" stroke="#666" strokeWidth="2" strokeLinecap="round" />
    <circle cx="44" cy="44" r="9" fill="#d4af37" stroke="#fff" strokeWidth="2" />
    <path d="M40 44L43 47L48 41" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const XRaysIcon = () => (
  <svg className="w-12 h-12 text-[#1a1f2c]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="10" y="10" width="44" height="32" rx="3" stroke="#222" fill="#222" />
    <path d="M20 48H44M32 42V48" stroke="#222" strokeWidth="3" />
    <path d="M26 22C26 18 38 18 38 22C38 26 34 28 32 32C30 28 26 26 26 22Z" fill="none" stroke="#fff" strokeWidth="2" />
    <circle cx="46" cy="38" r="8" fill="#d4af37" stroke="#fff" strokeWidth="2" />
    <path d="M46 42V34M43 37L46 34L49 37" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PlanIcon = () => (
  <svg className="w-12 h-12 text-[#1a1f2c]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="14" y="10" width="36" height="44" rx="4" stroke="#222" fill="#fff" />
    <path d="M22 22C22 18 32 18 32 22C32 26 28 28 27 32" stroke="#222" strokeWidth="2" fill="none" />
    <line x1="22" y1="38" x2="42" y2="38" stroke="#888" strokeWidth="2" />
    <line x1="22" y1="44" x2="36" y2="44" stroke="#888" strokeWidth="2" />
    <circle cx="44" cy="44" r="8" fill="#d4af37" stroke="#fff" strokeWidth="2" />
    <path d="M40 44L43 47L48 41" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const FixedCostIcon = () => (
  <svg className="w-12 h-12 text-[#1a1f2c]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="14" y="10" width="36" height="44" rx="4" stroke="#222" fill="#fff" />
    <circle cx="32" cy="22" r="7" fill="#fef3c7" stroke="#d4af37" strokeWidth="2" />
    <text x="32" y="26" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#b45309">$</text>
    <path d="M22 34L25 37L30 32" stroke="#222" strokeWidth="2" strokeLinecap="round" />
    <line x1="34" y1="35" x2="42" y2="35" stroke="#666" strokeWidth="2" />
    <path d="M22 42L25 45L30 40" stroke="#222" strokeWidth="2" strokeLinecap="round" />
    <line x1="34" y1="43" x2="42" y2="43" stroke="#666" strokeWidth="2" />
  </svg>
);

const TravelIcon = () => (
  <svg className="w-12 h-12 text-[#1a1f2c]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M10 26L28 20L38 10L42 12L36 22L48 26L52 22L56 24L52 32L40 36L28 50L24 48L28 36L14 34L10 26Z" fill="#222" stroke="#222" />
    <rect x="42" y="32" width="16" height="22" rx="2" fill="#fff" stroke="#222" strokeWidth="2" />
    <rect x="46" y="36" width="3" height="3" fill="#d4af37" />
    <rect x="51" y="36" width="3" height="3" fill="#d4af37" />
    <rect x="46" y="42" width="3" height="3" fill="#d4af37" />
    <rect x="51" y="42" width="3" height="3" fill="#d4af37" />
    <rect x="46" y="28" width="8" height="4" fill="#d4af37" />
    <text x="50" y="31" textAnchor="middle" fontSize="3" fontWeight="bold" fill="#000">HOTEL</text>
  </svg>
);

const ArrivalIcon = () => (
  <svg className="w-14 h-12 text-[#1a1f2c]" viewBox="0 0 72 64" fill="none" stroke="currentColor" strokeWidth="2">
    {/* Airport tower */}
    <path d="M12 50V28L8 24V16H20V24L16 28V50" stroke="#222" fill="#f8f9fa" />
    <path d="M6 16H22" stroke="#222" strokeWidth="2" />
    {/* Airplane overhead */}
    <path d="M22 14L32 8L36 9L32 16L40 18L44 22L34 23L22 14Z" fill="#222" />
    {/* VIP Car */}
    <path d="M30 48C30 44 34 40 42 40H58C64 40 68 44 68 48V52H30V48Z" fill="#222" />
    <circle cx="38" cy="52" r="4" fill="#fff" stroke="#222" strokeWidth="2" />
    <circle cx="60" cy="52" r="4" fill="#fff" stroke="#222" strokeWidth="2" />
    {/* VIP badge */}
    <rect x="48" y="32" width="18" height="8" rx="2" fill="#d4af37" />
    <text x="57" y="38" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#000">VIP</text>
  </svg>
);

const SurgeryIcon = () => (
  <svg className="w-12 h-12 text-[#1a1f2c]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
    {/* Implant Tooth */}
    <path d="M20 16C20 10 32 10 32 16C32 22 28 24 28 28H24C24 24 20 22 20 16Z" fill="#fff" stroke="#222" strokeWidth="2" />
    <rect x="23" y="28" width="6" height="4" fill="#222" />
    <line x1="22" y1="36" x2="30" y2="36" stroke="#222" strokeWidth="2" />
    <line x1="23" y1="40" x2="29" y2="40" stroke="#222" strokeWidth="2" />
    <line x1="24" y1="44" x2="28" y2="44" stroke="#222" strokeWidth="2" />
    <path d="M26 44L26 50" stroke="#222" strokeWidth="2" />
    {/* Plus Shield */}
    <path d="M42 24L52 28V38C52 44 42 50 42 50C42 50 32 44 32 38V28L42 24Z" fill="#fef3c7" stroke="#d4af37" strokeWidth="2" />
    <path d="M42 32V42M37 37H47" stroke="#b45309" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const FlyHomeIcon = () => (
  <svg className="w-12 h-12 text-[#1a1f2c]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
    {/* Globe */}
    <circle cx="32" cy="38" r="18" fill="#f8f9fa" stroke="#222" strokeWidth="2" />
    <path d="M14 38H50" stroke="#666" strokeDasharray="2 2" />
    <path d="M20 28C26 32 38 32 44 28" stroke="#666" strokeDasharray="2 2" />
    {/* Airplane flying upwards */}
    <path d="M12 22L32 12L40 14L32 24L48 26L52 22L56 24L50 34L36 32L22 42L18 40L24 30L12 22Z" fill="#222" />
  </svg>
);

const TeleFollowupIcon = ({ isTrip2 }: { isTrip2?: boolean }) => (
  <svg className="w-12 h-12 text-[#1a1f2c]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="12" y="14" width="40" height="28" rx="3" fill="#fff" stroke="#222" strokeWidth="2" />
    <path d="M8 46H56V48H8V46Z" fill="#222" />
    {/* Doctor avatar */}
    <circle cx="32" cy="24" r="5" fill="#222" />
    <path d="M24 36C24 31 40 31 40 36" fill="#222" />
    {/* Badge */}
    {isTrip2 ? (
      <g>
        <rect x="40" y="8" width="18" height="12" rx="3" fill="#d4af37" />
        <circle cx="45" cy="14" r="1.5" fill="#fff" />
        <circle cx="49" cy="14" r="1.5" fill="#fff" />
        <circle cx="53" cy="14" r="1.5" fill="#fff" />
      </g>
    ) : (
      <g>
        <rect x="42" y="10" width="14" height="14" rx="3" fill="#d4af37" />
        <path d="M49 13V21M45 17H53" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
      </g>
    )}
  </svg>
);

const FinalProstheticsIcon = () => (
  <svg className="w-12 h-12 text-[#1a1f2c]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 20C22 12 36 12 36 20C36 28 30 30 30 36H28C28 30 22 28 22 20Z" fill="#fff" stroke="#222" strokeWidth="2" />
    <line x1="24" y1="36" x2="34" y2="36" stroke="#222" strokeWidth="2" />
    <line x1="25" y1="40" x2="33" y2="40" stroke="#222" strokeWidth="2" />
    <line x1="26" y1="44" x2="32" y2="44" stroke="#222" strokeWidth="2" />
    <line x1="27" y1="48" x2="31" y2="48" stroke="#222" strokeWidth="2" />
    {/* Sparkles around */}
    <path d="M14 16L16 12L18 16L22 18L18 20L16 24L14 20L10 18L14 16Z" fill="#d4af37" stroke="none" />
    <path d="M42 12L43.5 9L45 12L48 13.5L45 15L43.5 18L42 15L39 13.5L42 12Z" fill="#d4af37" stroke="none" />
  </svg>
);

export const HowItWorks: React.FC = () => {
  const { setIsEligibilityOpen } = useImageContext();
  const [downloadMsg, setDownloadMsg] = useState<string | null>(null);

  const handleDownload = (type: string) => {
    setDownloadMsg(`Downloading ${type}...`);
    
    // Create a mock text file download to simulate actual guide delivery
    const content = `PermanentSmileCare — ${type}\n\nThank you for downloading our official guide.\nFor full clinical assessment and e-Visa coordination, please visit our website or contact our concierge team.`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${type.replace(/\s+/g, '_')}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setTimeout(() => {
      setDownloadMsg(null);
    }, 3000);
  };

  return (
    <section id="how-it-works" className="py-20 bg-black border-t border-[#1a1a1a] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#c5a059]/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-white mb-4">
            Your Complete <span className="text-gold-gradient font-serif-luxury">Patient Journey</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            We map out every day of your visit to ensure clinical excellence and absolute peace of mind.
          </p>
        </div>

        {/* Main Grid: Left Diagram (Charcoal Card) + Right Panel (Financial Transparency) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Visual Patient Journey Diagram */}
          <div className="lg:col-span-8 bg-[#141414] text-gray-200 rounded-3xl p-5 sm:p-8 shadow-2xl border border-[#222222] hover:border-[#c5a059] transition-all duration-300 hover:shadow-[0_0_30px_rgba(197,160,89,0.3)] overflow-hidden">
            
            {/* Top Steps Row (1 - 5) */}
            <div className="relative mb-10">
              <div className="hidden md:block absolute top-[28px] left-[8%] right-[8%] h-[2px] border-b-2 border-dotted border-[#c5a059]/50 z-0" />

              <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-6 relative z-10">
                {/* Step 1 */}
                <div className="flex flex-col items-center text-center group">
                  <div className="w-8 h-8 rounded-full bg-[#1a1a1a] border-2 border-[#c5a059] text-white font-bold text-xs flex items-center justify-center mb-3 shadow-sm z-10">
                    1
                  </div>
                  <div className="p-2 mb-2 transition-transform duration-300 group-hover:scale-105">
                    <SubmitIcon />
                  </div>
                  <h4 className="text-xs font-extrabold text-white uppercase tracking-tight mb-1">
                    Submit Consultation
                  </h4>
                  <p className="text-[11px] text-gray-400 font-light leading-tight max-w-[140px]">
                    Share your dental history, goals, and current condition via our secure form.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col items-center text-center group">
                  <div className="w-8 h-8 rounded-full bg-[#1a1a1a] border-2 border-[#c5a059] text-white font-bold text-xs flex items-center justify-center mb-3 shadow-sm z-10">
                    2
                  </div>
                  <div className="p-2 mb-2 transition-transform duration-300 group-hover:scale-105">
                    <XRaysIcon />
                  </div>
                  <h4 className="text-xs font-extrabold text-white uppercase tracking-tight mb-1">
                    Upload X-Rays
                  </h4>
                  <p className="text-[11px] text-gray-400 font-light leading-tight max-w-[140px]">
                    Provide your CBCT or OPG scans for a thorough clinical pre-assessment.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col items-center text-center group">
                  <div className="w-8 h-8 rounded-full bg-[#1a1a1a] border-2 border-[#c5a059] text-white font-bold text-xs flex items-center justify-center mb-3 shadow-sm z-10">
                    3
                  </div>
                  <div className="p-2 mb-2 transition-transform duration-300 group-hover:scale-105">
                    <PlanIcon />
                  </div>
                  <h4 className="text-xs font-extrabold text-white uppercase tracking-tight mb-1">
                    Get Treatment Plan by PSC
                  </h4>
                  <p className="text-[11px] text-gray-400 font-light leading-tight max-w-[140px]">
                    Receive a personalised treatment plan from PermanentSmileCare detailing your procedure, timeline, and package.
                  </p>
                </div>

                {/* Step 4 */}
                <div className="flex flex-col items-center text-center group">
                  <div className="w-8 h-8 rounded-full bg-[#1a1a1a] border-2 border-[#c5a059] text-white font-bold text-xs flex items-center justify-center mb-3 shadow-sm z-10">
                    4
                  </div>
                  <div className="p-2 mb-2 transition-transform duration-300 group-hover:scale-105">
                    <FixedCostIcon />
                  </div>
                  <h4 className="text-xs font-extrabold text-white uppercase tracking-tight mb-1">
                    Fixed-Cost Plan
                  </h4>
                  <p className="text-[11px] text-gray-400 font-light leading-tight max-w-[140px]">
                    Receive a transparent, itemised treatment plan and package — no hidden charges.
                  </p>
                </div>

                {/* Step 5 */}
                <div className="flex flex-col items-center text-center group">
                  <div className="w-8 h-8 rounded-full bg-[#1a1a1a] border-2 border-[#c5a059] text-white font-bold text-xs flex items-center justify-center mb-3 shadow-sm z-10">
                    5
                  </div>
                  <div className="p-2 mb-2 transition-transform duration-300 group-hover:scale-105">
                    <TravelIcon />
                  </div>
                  <h4 className="text-xs font-extrabold text-white uppercase tracking-tight mb-1">
                    Travel & Hotel Booking
                  </h4>
                  <p className="text-[11px] text-gray-400 font-light leading-tight max-w-[140px]">
                    Our concierge coordinates your flights, hotel, and all local logistics.
                  </p>
                </div>
              </div>
            </div>

            {/* Trip 1 Container Box */}
            <div className="relative border-2 border-[#c5a059]/60 rounded-2xl p-5 mb-6 bg-[#0a0a0a]">
              {/* Trip 1 Badge on top border */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold-gradient text-black font-extrabold text-xs px-4 py-0.5 rounded-md uppercase tracking-wider shadow-sm">
                Trip 1
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 items-start pt-3">
                {/* Step 6 */}
                <div className="flex flex-col items-center text-center group relative">
                  <div className="w-7 h-7 rounded-full bg-[#1a1a1a] border-2 border-[#c5a059] text-white font-bold text-xs flex items-center justify-center mb-2 shadow-sm">
                    6
                  </div>
                  <div className="mb-2 transition-transform duration-300 group-hover:scale-105">
                    <ArrivalIcon />
                  </div>
                  <h4 className="text-xs font-extrabold text-white uppercase tracking-tight mb-1">
                    Trip 1 — Arrival
                  </h4>
                  <p className="text-[11px] text-gray-400 font-light leading-tight">
                    VIP airport transfer to your hotel. Surgery begins within the first 1–2 days.
                  </p>
                </div>

                {/* Step 7 */}
                <div className="flex flex-col items-center text-center group relative">
                  <div className="w-7 h-7 rounded-full bg-[#1a1a1a] border-2 border-[#c5a059] text-white font-bold text-xs flex items-center justify-center mb-2 shadow-sm">
                    7
                  </div>
                  <div className="mb-2 transition-transform duration-300 group-hover:scale-105">
                    <SurgeryIcon />
                  </div>
                  <h4 className="text-xs font-extrabold text-white uppercase tracking-tight mb-1">
                    Surgery & Recovery
                  </h4>
                  <p className="text-[11px] text-gray-400 font-light leading-tight">
                    Implants placed. You stay ~10 days total: monitored for infection, healing, and any complications.
                  </p>
                </div>

                {/* Step 8 */}
                <div className="flex flex-col items-center text-center group relative">
                  <div className="w-7 h-7 rounded-full bg-[#1a1a1a] border-2 border-[#c5a059] text-white font-bold text-xs flex items-center justify-center mb-2 shadow-sm">
                    8
                  </div>
                  <div className="mb-2 transition-transform duration-300 group-hover:scale-105">
                    <FlyHomeIcon />
                  </div>
                  <h4 className="text-xs font-extrabold text-white uppercase tracking-tight mb-1">
                    Fly Home
                  </h4>
                  <p className="text-[11px] text-gray-400 font-light leading-tight">
                    Return with temporary prosthetics. Our team monitors your healing remotely via scheduled teleconsults.
                  </p>
                </div>

                {/* Step 8a */}
                <div className="flex flex-col items-center text-center group relative">
                  <div className="w-7 h-7 rounded-full bg-[#1a1a1a] border-2 border-[#c5a059] text-white font-bold text-xs flex items-center justify-center mb-2 shadow-sm">
                    8a
                  </div>
                  <div className="mb-2 transition-transform duration-300 group-hover:scale-105">
                    <TeleFollowupIcon />
                  </div>
                  <h4 className="text-xs font-extrabold text-white uppercase tracking-tight mb-1">
                    Tele Follow-up
                  </h4>
                  <p className="text-[11px] text-gray-400 font-light leading-tight">
                    Ongoing remote monitoring by our clinical team via scheduled teleconsults (1, 3, and 6 months).
                  </p>
                </div>
              </div>
            </div>

            {/* Trip 2 Container Box */}
            <div className="relative border-2 border-[#c5a059]/60 rounded-2xl p-5 mb-6 bg-[#0a0a0a]">
              {/* Trip 2 Badge on top border */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold-gradient text-black font-extrabold text-xs px-4 py-0.5 rounded-md uppercase tracking-wider shadow-sm">
                Trip 2
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-around gap-6 pt-3">
                {/* Step 9 */}
                <div className="flex flex-col items-center text-center group max-w-[200px]">
                  <div className="w-7 h-7 rounded-full bg-[#1a1a1a] border-2 border-[#c5a059] text-white font-bold text-xs flex items-center justify-center mb-2 shadow-sm">
                    9
                  </div>
                  <div className="mb-2 transition-transform duration-300 group-hover:scale-105">
                    <FinalProstheticsIcon />
                  </div>
                  <h4 className="text-xs font-extrabold text-white uppercase tracking-tight mb-1">
                    Trip 2 — Final Prosthetics
                  </h4>
                  <p className="text-[11px] text-gray-400 font-light leading-tight">
                    Return after 3–6 months of healing for your ~5-day final visit: permanent zirconia bridge fitted and delivered.
                  </p>
                </div>

                {/* Step 10 */}
                <div className="flex flex-col items-center text-center group max-w-[220px]">
                  <div className="w-7 h-7 rounded-full bg-[#1a1a1a] border-2 border-[#c5a059] text-white font-bold text-xs flex items-center justify-center mb-2 shadow-sm">
                    10
                  </div>
                  <div className="mb-2 transition-transform duration-300 group-hover:scale-105">
                    <TeleFollowupIcon isTrip2 />
                  </div>
                  <h4 className="text-xs font-extrabold text-white uppercase tracking-tight mb-1">
                    Tele Follow-up
                  </h4>
                  <p className="text-[11px] text-gray-400 font-light leading-tight">
                    Ongoing remote monitoring by our clinical team at 3 months and 6 months after final prosthetics.
                  </p>

                  {/* 3 Months and 6 Months calendar nodes */}
                  <div className="flex items-center gap-3 mt-3 pt-2 border-t border-[#222222]">
                    <div className="flex flex-col items-center">
                      <div className="w-7 h-7 rounded-full border border-[#333333] bg-[#1a1a1a] flex items-center justify-center text-[10px] font-bold text-gray-200">
                        3
                      </div>
                      <span className="text-[9px] font-semibold text-gray-400 mt-0.5">Months</span>
                    </div>
                    <span className="text-xs text-gray-600">••••</span>
                    <div className="flex flex-col items-center">
                      <div className="w-7 h-7 rounded-full border border-[#333333] bg-[#1a1a1a] flex items-center justify-center text-[10px] font-bold text-gray-200">
                        6
                      </div>
                      <span className="text-[9px] font-semibold text-gray-400 mt-0.5">Months</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Guarantee Banner */}
            <div className="pt-3 border-t border-[#222222] text-center flex items-center justify-center gap-2 text-xs font-semibold text-gray-300">
              <CheckCircle2 className="w-4 h-4 text-[#c5a059]" />
              <span>We are with you — before, during, and long after your smile is complete.</span>
            </div>

          </div>

          {/* Right Column: Financial Transparency Side Panel */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            
            {/* Top Info Box */}
            <div className="bg-[#141414] border border-[#222222] hover:border-[#c5a059] transition-all duration-300 hover:shadow-[0_0_30px_rgba(197,160,89,0.3)] rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-2xl">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-widest text-[#e5c07b] uppercase mb-6">
                <ShieldAlert className="w-4 h-4 text-[#c5a059]" />
                <span>FINANCIAL TRANSPARENCY</span>
              </div>

              {/* Title with Exclamation Circle */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white leading-tight">
                  No Hidden Surgical Costs
                </h3>
                <div className="w-10 h-10 rounded-full bg-[#1c1810] border border-[#c5a059]/40 flex items-center justify-center text-[#c5a059] shrink-0 font-bold text-lg">
                  !
                </div>
              </div>

              {/* Main Body Text */}
              <p className="text-gray-300 text-sm leading-relaxed mb-6 font-light">
                If bone grafting or additional bone augmentation is clinically required, it will be included within your personalized treatment package whenever applicable.
              </p>

              {/* Subtext */}
              <p className="text-xs text-gray-400 leading-relaxed border-t border-[#222222] pt-4 font-light">
                No unexpected surgical add-on charges after treatment planning. Clinical eligibility applies.
              </p>
            </div>

            {/* Notification alert if downloading */}
            {downloadMsg && (
              <div className="bg-[#18140c] border border-[#c5a059]/50 text-[#f3d078] text-xs font-semibold p-3 rounded-xl text-center animate-fade-in">
                {downloadMsg}
              </div>
            )}

            {/* Download Action Buttons */}
            <div className="space-y-3">
              <a
                href="https://drive.google.com/file/d/1F6CC9lW1SSYxIWItRk0II4mMu8vkULci/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#1a1a1a] hover:bg-[#222222] text-white border border-[#c5a059] hover:border-[#f3d078] hover:shadow-[0_0_20px_rgba(197,160,89,0.25)] font-bold py-3.5 px-6 rounded-2xl text-xs sm:text-sm transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 shadow-lg group"
              >
                <span>Download Journey PDF</span>
                <Download className="w-4 h-4 text-[#c5a059] group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href="https://drive.google.com/file/d/1F6CC9lW1SSYxIWItRk0II4mMu8vkULci/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#1a1a1a] hover:bg-[#222222] text-white border border-[#c5a059] hover:border-[#f3d078] hover:shadow-[0_0_20px_rgba(197,160,89,0.25)] font-bold py-3.5 px-6 rounded-2xl text-xs sm:text-sm transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 shadow-lg group"
              >
                <span>Download Patient Guide</span>
                <Download className="w-4 h-4 text-[#c5a059] group-hover:translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Schedule Consultation Link */}
            <div className="pt-2 text-center">
              <button
                onClick={() => setIsEligibilityOpen(true)}
                className="text-xs font-semibold text-[#f3d078] hover:text-white underline decoration-[#c5a059] underline-offset-4 cursor-pointer transition-colors"
              >
                Or check your clinical eligibility now →
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};



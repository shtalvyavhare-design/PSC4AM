import React, { useState } from 'react';
import { Lock, Check, FileText, CheckSquare, Square, ShieldCheck, X } from 'lucide-react';

export const AssessmentSection: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState('');
  const [selectedScope, setSelectedScope] = useState('');
  const [fullName, setFullName] = useState('');
  const [country, setCountry] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [details, setDetails] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!country.trim()) {
      setErrorMsg('Please enter your Country of Residence.');
      return;
    }
    if (!email.trim() && !whatsapp.trim()) {
      setErrorMsg('Please provide either an Email address or WhatsApp number so we can send your assessment report.');
      return;
    }
    if (!acceptedTerms) {
      setErrorMsg('Please accept the clinical assessment terms to proceed.');
      return;
    }

    setErrorMsg('');
    try {
      await fetch('/api/assessment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          treatmentPackage: selectedPackage || 'General Implants',
          treatmentScope: selectedScope || 'Full Mouth',
          fullName,
          countryOfResidence: country,
          email,
          whatsappNumber: whatsapp,
          dentalSituation: details,
          paymentStatus: 'pending_100_fee',
          paymentAmount: 100
        })
      });
    } catch (err) {
      console.error('Database sync error:', err);
    }

    setIsSubmitted(true);
  };

  return (
    <section id="assessment" className="py-24 bg-black text-gray-300 border-t border-[#1a1a1a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Assessment Form & Info */}
          <div className="lg:col-span-7 flex flex-col">
            
            {/* Pill Badge */}
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#382d18] bg-[#14120a] text-[#c5a059] text-xs font-semibold uppercase tracking-wider">
                <Lock className="w-3.5 h-3.5 text-[#c5a059]" />
                SECURE PROCESS
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Get Your Personalized <span className="text-gold-gradient font-serif italic">Clinical Assessment</span>
            </h2>

            {/* Subtitle */}
            <p className="text-gray-300 text-base sm:text-lg mb-8 leading-relaxed font-light max-w-2xl">
              Before you travel, our implant team will comprehensively review your scans to determine treatment feasibility, estimated timeline, and a precise package recommendation.
            </p>

            {/* Dark Box: ASSESSMENT INCLUDES */}
            <div className="bg-[#12110c] border border-[#2a2214] rounded-2xl p-6 sm:p-7 mb-8 shadow-xl">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#c5a059] mb-4">
                ASSESSMENT INCLUDES:
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm text-gray-200">
                {[
                  'Review by Professor',
                  'Treatment Feasibility',
                  'Estimated Timeline',
                  'Package Recommendation',
                  'Preliminary Planning',
                  'Virtual Consultation'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#c5a059] shrink-0" />
                    <span className="font-medium text-gray-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Form Fields */}
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Select Treatment Package */}
              <div>
                <div className="relative">
                  <select
                    value={selectedPackage}
                    onChange={(e) => setSelectedPackage(e.target.value)}
                    className="w-full bg-[#111111] border border-[#262626] focus:border-[#c5a059] text-gray-200 text-sm rounded-xl py-3.5 px-4 appearance-none outline-none transition-colors cursor-pointer"
                  >
                    <option value="">Select Treatment Package</option>
                    <option value="Corticobasal Zirconia">Corticobasal Zirconia (Most Premium - $35k / $60k)</option>
                    <option value="Signature Zirconia">Signature Zirconia (Most Popular - $16k–$22k / $28k–$38k)</option>
                    <option value="Essential Acrylic Hybrid">Essential Acrylic Hybrid (Budget Option - $9k–$11k / $14k–$20k)</option>
                    <option value="Undecided">Undecided / Need Doctor Recommendation</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#c5a059] text-xs">
                    ▼
                  </div>
                </div>
              </div>

              {/* Select Treatment Scope */}
              <div>
                <div className="relative">
                  <select
                    value={selectedScope}
                    onChange={(e) => setSelectedScope(e.target.value)}
                    className="w-full bg-[#111111] border border-[#262626] focus:border-[#c5a059] text-gray-200 text-sm rounded-xl py-3.5 px-4 appearance-none outline-none transition-colors cursor-pointer"
                  >
                    <option value="">Select Treatment Scope</option>
                    <option value="Single Arch">Single Arch (Upper or Lower)</option>
                    <option value="Full Mouth">Full Mouth (Both Arches)</option>
                    <option value="Not Sure">Not Sure / Requires Clinical Scan Review</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#c5a059] text-xs">
                    ▼
                  </div>
                </div>
              </div>

              {/* Full Name & Country Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name *"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-[#111111] border border-[#262626] focus:border-[#c5a059] text-gray-200 text-sm rounded-xl py-3.5 px-4 outline-none transition-colors placeholder:text-gray-500"
                  required
                />
                <input
                  type="text"
                  placeholder="Country of Residence *"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full bg-[#111111] border border-[#262626] focus:border-[#c5a059] text-gray-200 text-sm rounded-xl py-3.5 px-4 outline-none transition-colors placeholder:text-gray-500"
                  required
                />
              </div>

              {/* Email & WhatsApp Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#111111] border border-[#262626] focus:border-[#c5a059] text-gray-200 text-sm rounded-xl py-3.5 px-4 outline-none transition-colors placeholder:text-gray-500"
                />
                <input
                  type="text"
                  placeholder="WhatsApp Number (with country code)"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  className="w-full bg-[#111111] border border-[#262626] focus:border-[#c5a059] text-gray-200 text-sm rounded-xl py-3.5 px-4 outline-none transition-colors placeholder:text-gray-500"
                />
              </div>

              {/* Helper text */}
              <p className="text-[11px] text-gray-400 font-light">
                At least one of Email or WhatsApp is required so we can reach you with your report.
              </p>

              {/* Textarea */}
              <div>
                <textarea
                  rows={4}
                  placeholder="Tell us about your dental situation, existing dentures, or any questions…"
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className="w-full bg-[#111111] border border-[#262626] focus:border-[#c5a059] text-gray-200 text-sm rounded-xl p-4 outline-none transition-colors placeholder:text-gray-500 resize-none"
                />
              </div>

              {errorMsg && (
                <div className="p-3 bg-red-950/50 border border-red-800/80 rounded-xl text-red-300 text-xs font-medium">
                  {errorMsg}
                </div>
              )}

            </form>

          </div>

          {/* Right Column - Fee Card & Terms */}
          <div className="lg:col-span-5">
            <div className="bg-[#12110d] border-2 border-[#3a2e19] rounded-2xl p-6 sm:p-8 shadow-2xl relative flex flex-col justify-between">
              
              <div>
                {/* Header */}
                <div className="text-center mb-4">
                  <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold">
                    ASSESSMENT FEE
                  </span>
                  <div className="text-5xl sm:text-6xl font-serif font-bold text-[#c5a059] mt-2 mb-3">
                    $100
                  </div>
                </div>

                {/* Highlight Box */}
                <div className="bg-[#211a0f] border border-[#48371c] rounded-xl p-4 text-center mb-6">
                  <p className="text-xs sm:text-sm font-semibold text-[#c5a059] leading-relaxed">
                    Fully deducted from your final treatment package if you proceed.
                  </p>
                </div>

                {/* Info Box */}
                <div className="bg-[#171510] border border-[#2a2316] rounded-xl p-5 mb-6 text-xs text-gray-300 leading-relaxed">
                  <h4 className="font-bold text-white text-sm mb-2 text-center">
                    You pay us directly.
                  </h4>
                  <p className="text-center text-gray-300 font-light">
                    We take full responsibility for everything we have promised — treatment coordination, accommodation, transfers, meals, and clinical support. No third parties, no middlemen.
                  </p>
                </div>

                {/* Terms Checkbox */}
                <div className="mb-6 flex items-start gap-3 cursor-pointer select-none" onClick={() => setAcceptedTerms(!acceptedTerms)}>
                  <div className="mt-0.5 text-[#c5a059] shrink-0">
                    {acceptedTerms ? (
                      <CheckSquare className="w-5 h-5 fill-[#c5a059]/20" />
                    ) : (
                      <Square className="w-5 h-5 text-gray-500" />
                    )}
                  </div>
                  <p className="text-xs text-gray-300 leading-normal font-light">
                    I have read and accepted the clinical assessment terms and understand this is a non-refundable professional review fee.
                  </p>
                </div>
              </div>

              {/* Action Button & Link */}
              <div>
                {isSubmitted ? (
                  <div className="bg-[#182618] border border-[#2e592e] rounded-xl p-5 text-center space-y-2 mb-4">
                    <Check className="w-8 h-8 text-green-400 mx-auto" />
                    <h4 className="text-base font-bold text-white">Assessment Request Received!</h4>
                    <p className="text-xs text-gray-300 leading-relaxed font-light">
                      Thank you, <strong className="text-white">{fullName}</strong>. Our clinical team and academic professors will review your details and contact you shortly.
                    </p>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={(e) => {
                      const form = document.querySelector('form');
                      if (form) form.requestSubmit();
                    }}
                    className="w-full bg-gold-gradient hover:bg-gold-gradient-hover text-black font-bold py-4 rounded-full text-xs sm:text-sm tracking-wide text-center shadow-lg transition-all duration-200 cursor-pointer mb-4"
                  >
                    Proceed to Payment
                  </button>
                )}

                {/* Link to Terms */}
                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => setShowTermsModal(true)}
                    className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-[#c5a059] transition-colors underline underline-offset-4 cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>View Terms & Conditions</span>
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Terms & Conditions Modal */}
      {showTermsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#12110d] border border-[#3a2e19] rounded-2xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto relative shadow-2xl">
            <button
              onClick={() => setShowTermsModal(false)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white rounded-full bg-[#1f1a12] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck className="w-6 h-6 text-[#c5a059]" />
              <h3 className="text-xl font-serif font-bold text-white">
                Clinical Assessment Terms & Conditions
              </h3>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-gray-300 leading-relaxed">
              <p>
                <strong>1. Nature of Assessment:</strong> The $100 Assessment Fee provides a comprehensive remote evaluation of your clinical records (OPG / CBCT 3D scans) by our senior academic professors and implant specialists.
              </p>
              <p>
                <strong>2. Credit towards Treatment:</strong> The full $100 fee will be deducted directly from your final treatment invoice upon booking your treatment package with Permanent Smile Care.
              </p>
              <p>
                <strong>3. Non-Refundable Review Fee:</strong> Because this fee covers the dedicated professional clinical time and radiograph review by academic professors, it is non-refundable once the assessment is delivered.
              </p>
              <p>
                <strong>4. Direct Care & Responsibility:</strong> Permanent Smile Care directly handles all clinical protocols, airport chauffeurs, luxury accommodation, and personal coordinator services without third-party brokers.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <a
                href="https://drive.google.com/file/d/1QZIDGAhxC5iEuRK1o6v65kw0l45Ir6ii/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#c5a059] hover:underline flex items-center gap-1.5"
              >
                <FileText className="w-4 h-4" />
                <span>Open Full Official Document (Google Drive)</span>
              </a>
              <button
                onClick={() => setShowTermsModal(false)}
                className="bg-[#c5a059] hover:bg-[#d4af37] text-black font-bold px-6 py-2.5 rounded-full text-xs transition-colors cursor-pointer w-full sm:w-auto text-center"
              >
                Understood & Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

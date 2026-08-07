import React, { useState } from 'react';
import { X, CheckCircle2, Send, ShieldCheck, Sparkles, AlertCircle, Mail } from 'lucide-react';
import { useImageContext } from '../context/ImageContext';
import { EligibilityFormData } from '../types';
import { createEligibilityMailto, triggerMailto, CARE_EMAIL } from '../utils/email';

export const EligibilityModal: React.FC = () => {
  const { isEligibilityOpen, setIsEligibilityOpen } = useImageContext();
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState<EligibilityFormData>({
    missingTeethCount: 'Full Mouth (Both Jaws)',
    currentDentalCondition: 'Good bone density',
    hasBoneGraftingNeed: 'Unsure / Need Doctor Opinion',
    timeline: 'Within 1-2 Months',
    fullName: '',
    email: '',
    phone: '',
    country: 'United States',
    additionalNotes: ''
  });

  if (!isEligibilityOpen) return null;

  const getMailUrl = () => {
    return createEligibilityMailto(formData);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch('/api/assessment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          treatmentPackage: formData.currentDentalCondition || 'Eligibility Assessment',
          treatmentScope: formData.missingTeethCount,
          fullName: formData.fullName,
          countryOfResidence: formData.country,
          email: formData.email,
          whatsappNumber: formData.phone,
          dentalSituation: `Bone Grafting: ${formData.hasBoneGraftingNeed} | Timeline: ${formData.timeline} | Notes: ${formData.additionalNotes}`,
          paymentStatus: 'pending_100_fee',
          paymentAmount: 100
        })
      });
    } catch (err) {
      console.error('API submit error:', err);
    }
    const mailtoUrl = getMailUrl();
    triggerMailto(mailtoUrl);
    setIsSubmitted(true);
  };

  const resetModal = () => {
    setIsSubmitted(false);
    setStep(1);
    setIsEligibilityOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#0a0a0a] border border-[#222222] w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden relative text-[#e5e5e5]">
        {/* Header Bar */}
        <div className="p-6 bg-[#111111] border-b border-[#222222] flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold text-[#c5a059] uppercase tracking-wider block">
              Instant Assessment
            </span>
            <h3 className="text-xl font-bold text-[#e5e5e5] font-serif italic">
              Dental Implant Eligibility Checker
            </h3>
          </div>
          <button
            onClick={resetModal}
            className="p-2 text-[#888888] hover:text-white rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-[#c5a059]/20 text-[#c5a059] rounded-full flex items-center justify-center mx-auto border border-[#c5a059]/50">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-[#e5e5e5] font-serif italic">
                Eligibility Pre-Approved!
              </h4>
              <p className="text-sm text-[#888888] max-w-md mx-auto leading-relaxed">
                Thank you <strong className="text-[#c5a059]">{formData.fullName}</strong>. Based on your inputs, you are eligible for our immediate loading implant protocol.
              </p>
              <div className="bg-[#111111] p-4 rounded-xl border border-[#222222] text-xs text-left max-w-md mx-auto space-y-2">
                <p className="font-semibold text-[#c5a059]">Summary Sent to {CARE_EMAIL}:</p>
                <p>• Patient Name: {formData.fullName}</p>
                <p>• Treatment Scope: {formData.missingTeethCount}</p>
                <p>• Travel Timeline: {formData.timeline}</p>
                <p className="text-[#888888] pt-2 border-t border-[#222222]">
                  Your prewritten eligibility assessment email has been launched to <strong className="text-white">{CARE_EMAIL}</strong>. Our clinical coordinators will respond shortly.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href={getMailUrl()}
                  className="bg-[#c5a059] hover:bg-[#b38e47] text-black font-bold px-6 py-3 rounded-full text-xs transition-all cursor-pointer inline-flex items-center gap-1.5"
                >
                  <Mail className="w-4 h-4" />
                  <span>Open Email Client Again</span>
                </a>
                <button
                  onClick={resetModal}
                  className="bg-[#222222] hover:bg-[#333333] text-gray-300 font-semibold px-6 py-3 rounded-full text-xs transition-all cursor-pointer"
                >
                  Close & Return To Site
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Step 1: Dental Requirements */}
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-xs font-semibold text-[#888888] mb-2">
                      How many missing or severely damaged teeth need replacement?
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {['Single Arch (Upper/Lower)', 'Full Mouth (Both Jaws)', 'Cosmetic Veneers Only'].map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setFormData({ ...formData, missingTeethCount: opt })}
                          className={`p-3 rounded-xl border text-xs font-medium text-left transition-all cursor-pointer ${
                            formData.missingTeethCount === opt
                              ? 'bg-[#c5a059]/20 border-[#c5a059] text-[#c5a059]'
                              : 'bg-[#111111] border-[#222222] text-[#e5e5e5] hover:border-[#444444]'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#888888] mb-2">
                      Preferred Travel Timeline to India
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full bg-[#111111] border border-[#222222] rounded-xl p-3 text-xs text-[#e5e5e5] focus:border-[#c5a059] focus:outline-none"
                    >
                      <option value="Urgent (Next 2 Weeks)">Urgent (Next 2 Weeks)</option>
                      <option value="Within 1-2 Months">Within 1-2 Months</option>
                      <option value="3-6 Months">3-6 Months</option>
                      <option value="Just Researching Costs">Just Researching Costs</option>
                    </select>
                  </div>

                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-full bg-[#c5a059] hover:bg-[#b38e47] text-black font-bold py-3.5 rounded-full text-sm transition-all cursor-pointer"
                  >
                    Next: Contact Details →
                  </button>
                </div>
              )}

              {/* Step 2: Patient Contact Info */}
              {step === 2 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#888888] mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="John Smith"
                        className="w-full bg-[#111111] border border-[#222222] rounded-xl p-3 text-xs text-[#e5e5e5] focus:border-[#c5a059] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#888888] mb-1">
                        Country of Residence *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        placeholder="United Kingdom / USA / Australia"
                        className="w-full bg-[#111111] border border-[#222222] rounded-xl p-3 text-xs text-[#e5e5e5] focus:border-[#c5a059] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#888888] mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full bg-[#111111] border border-[#222222] rounded-xl p-3 text-xs text-[#e5e5e5] focus:border-[#c5a059] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#888888] mb-1">
                        WhatsApp / Phone (With Country Code) *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 555-0192 / +44 7700-9000"
                        className="w-full bg-[#111111] border border-[#222222] rounded-xl p-3 text-xs text-[#e5e5e5] focus:border-[#c5a059] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#888888] mb-1">
                      Notes or Existing Dental Medical History (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={formData.additionalNotes}
                      onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                      placeholder="e.g. Currently wearing removable denture, looking for fixed solution..."
                      className="w-full bg-[#111111] border border-[#222222] rounded-xl p-3 text-xs text-[#e5e5e5] focus:border-[#c5a059] focus:outline-none"
                    />
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="w-1/3 bg-[#111111] text-[#888888] hover:text-[#e5e5e5] border border-[#222222] font-semibold py-3 rounded-full text-xs cursor-pointer"
                    >
                      ← Back
                    </button>
                    <button
                      type="submit"
                      className="w-2/3 bg-[#c5a059] hover:bg-[#b38e47] text-black font-bold py-3 rounded-full text-xs transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit For Instant Pre-Approval</span>
                    </button>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

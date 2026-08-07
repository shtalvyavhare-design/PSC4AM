import React, { useState } from 'react';
import { CheckCircle2, MessageSquare, ShieldCheck, Mail } from 'lucide-react';
import { createConsultationMailto, triggerMailto, CARE_EMAIL } from '../utils/email';

export const BookConsultationSection: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [country, setCountry] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [treatmentInterest, setTreatmentInterest] = useState('');
  const [treatmentScope, setTreatmentScope] = useState('');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const getMailUrl = () => {
    return createConsultationMailto({
      name: fullName,
      email,
      phone,
      country,
      treatmentInterest,
      treatmentScope,
      message
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!country.trim()) {
      setErrorMsg('Please select your Country of Residence.');
      return;
    }
    if (!email.trim() && !phone.trim()) {
      setErrorMsg('Please enter at least an email address or WhatsApp phone number.');
      return;
    }
    if (!consent) {
      setErrorMsg('Please agree to the consent checkbox to submit your inquiry.');
      return;
    }

    setErrorMsg('');
    try {
      await fetch('/api/consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          countryOfResidence: country,
          email,
          phoneWhatsApp: phone,
          treatmentInterest,
          treatmentScope,
          messageDentalHistory: message,
          consent
        })
      });
    } catch (err) {
      console.error('Database sync error:', err);
    }

    const mailtoUrl = getMailUrl();
    triggerMailto(mailtoUrl);
    setIsSubmitted(true);
  };

  return (
    <section id="book-consultation" className="py-24 bg-black text-gray-300 border-t border-[#1a1a1a] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            Book Your <span className="text-gold-gradient font-serif italic">Free Consultation</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Take the first step toward your new smile. Speak with our concierge team to understand your options — no obligation.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-[#111111] border border-[#222222] rounded-3xl p-6 sm:p-10 shadow-2xl relative">
          {isSubmitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 bg-[#211a0e] border border-[#c5a059] rounded-full flex items-center justify-center mx-auto text-[#c5a059]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-white">
                Consultation Request Submitted!
              </h3>
              <p className="text-gray-300 text-sm max-w-md mx-auto font-light leading-relaxed">
                Thank you, <strong className="text-white">{fullName}</strong>. Your consultation inquiry has been prepared and sent via email to <strong className="text-[#c5a059]">{CARE_EMAIL}</strong>.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href={getMailUrl()}
                  className="bg-gold-gradient hover:bg-gold-gradient-hover text-black font-bold px-6 py-3 rounded-full text-xs transition-all cursor-pointer inline-flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Open Email Client Again</span>
                </a>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFullName('');
                    setEmail('');
                    setPhone('');
                    setMessage('');
                    setConsent(false);
                  }}
                  className="px-6 py-3 bg-[#222222] hover:bg-[#2e2e2e] text-white text-xs font-semibold rounded-full transition-colors cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-[#181818] border border-[#282828] focus:border-[#c5a059] text-gray-100 text-sm rounded-xl py-3.5 px-4 outline-none transition-colors placeholder:text-gray-600"
                    required
                  />
                </div>

                {/* Country of Residence */}
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-2">
                    Country of Residence <span className="text-[#c5a059]">*</span>
                  </label>
                  <div className="relative">
                    <select
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      required
                      className="w-full bg-[#181818] border border-[#282828] focus:border-[#c5a059] text-gray-100 text-sm rounded-xl py-3.5 px-4 appearance-none outline-none transition-colors cursor-pointer"
                    >
                      <option value="">Select Country</option>
                      <option value="USA">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="UK">United Kingdom</option>
                      <option value="Australia">Australia</option>
                      <option value="New Zealand">New Zealand</option>
                      <option value="UAE">United Arab Emirates</option>
                      <option value="Saudi Arabia">Saudi Arabia</option>
                      <option value="Germany">Germany</option>
                      <option value="Other">Other International</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 text-xs">
                      ▼
                    </div>
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#181818] border border-[#282828] focus:border-[#c5a059] text-gray-100 text-sm rounded-xl py-3.5 px-4 outline-none transition-colors placeholder:text-gray-600"
                  />
                </div>

                {/* Phone (WhatsApp) */}
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-2">
                    Phone (WhatsApp)
                  </label>
                  <input
                    type="text"
                    placeholder="+1 (555) 000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#181818] border border-[#282828] focus:border-[#c5a059] text-gray-100 text-sm rounded-xl py-3.5 px-4 outline-none transition-colors placeholder:text-gray-600"
                  />
                </div>

                {/* Treatment Interest */}
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-2">
                    Treatment Interest
                  </label>
                  <div className="relative">
                    <select
                      value={treatmentInterest}
                      onChange={(e) => setTreatmentInterest(e.target.value)}
                      className="w-full bg-[#181818] border border-[#282828] focus:border-[#c5a059] text-gray-100 text-sm rounded-xl py-3.5 px-4 appearance-none outline-none transition-colors cursor-pointer"
                    >
                      <option value="">Select Treatment</option>
                      <option value="Full Arch Zirconia Implants">Full Arch Zirconia Implants (All-on-4/6)</option>
                      <option value="Corticobasal Implants">Corticobasal Immediate Load Implants</option>
                      <option value="Single/Multiple Implants">Single / Multiple Implants</option>
                      <option value="Full Mouth Rehabilitation">Full Mouth Rehabilitation</option>
                      <option value="Cosmetic Dentistry">Cosmetic Dentistry / Veneers</option>
                      <option value="Other">Other / Not Sure</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 text-xs">
                      ▼
                    </div>
                  </div>
                </div>

                {/* Treatment Scope */}
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-2">
                    Treatment Scope
                  </label>
                  <div className="relative">
                    <select
                      value={treatmentScope}
                      onChange={(e) => setTreatmentScope(e.target.value)}
                      className="w-full bg-[#181818] border border-[#282828] focus:border-[#c5a059] text-gray-100 text-sm rounded-xl py-3.5 px-4 appearance-none outline-none transition-colors cursor-pointer"
                    >
                      <option value="">Single Arch or Full Mouth?</option>
                      <option value="Single Arch">Single Arch (Upper or Lower)</option>
                      <option value="Full Mouth">Full Mouth (Both Arches)</option>
                      <option value="Not Sure">Not Sure Yet</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 text-xs">
                      ▼
                    </div>
                  </div>
                </div>

              </div>

              {/* Message / Dental History */}
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-2">
                  Message / Dental History
                </label>
                <textarea
                  rows={4}
                  placeholder="Briefly describe your current dental situation, any X-rays you have, or questions you'd like answered..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-[#181818] border border-[#282828] focus:border-[#c5a059] text-gray-100 text-sm rounded-xl p-4 outline-none transition-colors placeholder:text-gray-600 resize-none"
                />
              </div>

              {/* Error Message */}
              {errorMsg && (
                <div className="p-3 bg-red-950/50 border border-red-800/80 rounded-xl text-red-300 text-xs font-medium">
                  {errorMsg}
                </div>
              )}

              {/* Consent Checkbox */}
              <div
                className="flex items-start gap-3 cursor-pointer select-none pt-2"
                onClick={() => setConsent(!consent)}
              >
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-1 w-4 h-4 accent-[#c5a059] bg-[#181818] border-[#282828] rounded cursor-pointer shrink-0"
                />
                <p className="text-xs text-gray-400 font-light leading-relaxed">
                  I consent to being contacted regarding my treatment inquiry via email and WhatsApp. I understand my data is stored securely and used solely for treatment coordination purposes.
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gold-gradient hover:bg-gold-gradient-hover text-black font-bold py-4 rounded-xl text-sm tracking-wide text-center shadow-xl transition-all duration-200 cursor-pointer mt-4"
              >
                Book Free Consultation
              </button>

            </form>
          )}
        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { X, Calendar, Clock, Video, CheckCircle2, Mail, Send } from 'lucide-react';
import { useImageContext } from '../context/ImageContext';
import { createConsultationMailto, triggerMailto, CARE_EMAIL } from '../utils/email';

export const ConsultationModal: React.FC = () => {
  const { isConsultationOpen, setIsConsultationOpen } = useImageContext();
  const [submitted, setSubmitted] = useState(false);

  const [date, setDate] = useState('2026-08-06');
  const [timeSlot, setTimeSlot] = useState('10:00 AM (EST)');
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  if (!isConsultationOpen) return null;

  const getMailUrl = () => {
    return createConsultationMailto({
      name,
      country,
      email,
      phone,
      date,
      timeSlot
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch('/api/consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: name,
          countryOfResidence: country,
          email,
          phoneWhatsApp: phone,
          treatmentInterest: '1-on-1 Video Consultation',
          treatmentScope: `${date} at ${timeSlot}`,
          consent: true
        })
      });
    } catch (err) {
      console.error('API submit error:', err);
    }
    const mailtoUrl = getMailUrl();
    triggerMailto(mailtoUrl);
    setSubmitted(true);
  };

  const closeModal = () => {
    setSubmitted(false);
    setIsConsultationOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#0a0a0a] border border-[#222222] w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden relative text-[#e5e5e5]">
        {/* Header */}
        <div className="p-6 bg-[#111111] border-b border-[#222222] flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold text-[#c5a059] uppercase tracking-wider block">
              1-on-1 Direct Video Evaluation
            </span>
            <h3 className="text-xl font-bold text-[#e5e5e5] font-serif italic">
              Schedule Free Consultation
            </h3>
          </div>
          <button
            onClick={closeModal}
            className="p-2 text-[#888888] hover:text-white rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 bg-[#c5a059]/20 text-[#c5a059] rounded-full flex items-center justify-center mx-auto border border-[#c5a059]/50">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-[#e5e5e5] font-serif italic">
                Consultation Request Prepared!
              </h4>
              <p className="text-xs text-[#888888] max-w-sm mx-auto leading-relaxed">
                Your consultation request for <strong className="text-[#c5a059]">{date} at {timeSlot}</strong> has been sent via email to <strong className="text-[#e5e5e5]">{CARE_EMAIL}</strong>.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href={getMailUrl()}
                  className="bg-[#c5a059] hover:bg-[#b38e47] text-black font-bold px-5 py-2.5 rounded-full text-xs transition-all cursor-pointer inline-flex items-center gap-1.5"
                >
                  <Mail className="w-4 h-4" />
                  <span>Open Email Client Again</span>
                </a>
                <button
                  onClick={closeModal}
                  className="bg-[#222222] hover:bg-[#333333] text-gray-300 font-semibold px-5 py-2.5 rounded-full text-xs transition-all cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#888888] mb-1">
                    Select Date
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-[#111111] border border-[#222222] rounded-xl p-2.5 text-xs text-[#e5e5e5] focus:border-[#c5a059] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#888888] mb-1">
                    Preferred Time Slot
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full bg-[#111111] border border-[#222222] rounded-xl p-2.5 text-xs text-[#e5e5e5] focus:border-[#c5a059] focus:outline-none"
                  >
                    <option value="09:00 AM (EST)">09:00 AM (EST) / 02:00 PM (GMT)</option>
                    <option value="11:30 AM (EST)">11:30 AM (EST) / 04:30 PM (GMT)</option>
                    <option value="03:00 PM (EST)">03:00 PM (EST) / 08:00 PM (GMT)</option>
                    <option value="07:00 PM (AEST)">07:00 PM (Sydney AEST)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#888888] mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#111111] border border-[#222222] rounded-xl p-2.5 text-xs text-[#e5e5e5] focus:border-[#c5a059] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#888888] mb-1">
                    Country of Residence *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Australia / USA"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full bg-[#111111] border border-[#222222] rounded-xl p-2.5 text-xs text-[#e5e5e5] focus:border-[#c5a059] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#888888] mb-1">
                    WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 555-0182"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#111111] border border-[#222222] rounded-xl p-2.5 text-xs text-[#e5e5e5] focus:border-[#c5a059] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#888888] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="sarah@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#111111] border border-[#222222] rounded-xl p-2.5 text-xs text-[#e5e5e5] focus:border-[#c5a059] focus:outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-2 bg-[#c5a059] hover:bg-[#b38e47] text-black font-bold py-3 rounded-full text-xs transition-all shadow-lg cursor-pointer"
              >
                Confirm Free Booking
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

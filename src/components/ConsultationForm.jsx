import React, { useState } from 'react';

export const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    countryOfResidence: '',
    email: '',
    phoneWhatsApp: '',
    treatmentInterest: 'All-on-4 Dental Implants',
    treatmentScope: 'Full Mouth',
    messageDentalHistory: '',
    consent: false
  });

  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus({
          type: 'success',
          message: 'Thank you! Your free consultation request has been submitted successfully.'
        });
        setFormData({
          fullName: '',
          countryOfResidence: '',
          email: '',
          phoneWhatsApp: '',
          treatmentInterest: 'All-on-4 Dental Implants',
          treatmentScope: 'Full Mouth',
          messageDentalHistory: '',
          consent: false
        });
      } else {
        setStatus({
          type: 'error',
          message: result.error || 'Failed to submit consultation request. Please try again.'
        });
      }
    } catch (err) {
      console.error('Fetch error:', err);
      setStatus({
        type: 'error',
        message: 'Network error. Please check your connection and backend API.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#121212] text-white p-6 sm:p-8 rounded-3xl border border-[#222222] shadow-2xl max-w-xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold font-serif text-[#c5a059]">Book Free Consultation</h2>
        <p className="text-sm text-gray-400 mt-1">
          Speak with our medical tourism team regarding treatments, travel arrangements, and scheduling.
        </p>
      </div>

      {status.message && (
        <div
          className={`p-4 mb-6 rounded-xl text-sm font-medium ${
            status.type === 'success'
              ? 'bg-emerald-950/60 border border-emerald-500/40 text-emerald-300'
              : 'bg-rose-950/60 border border-rose-500/40 text-rose-300'
          }`}
        >
          {status.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-gray-400 mb-1">
            Full Name <span className="text-[#c5a059]">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            placeholder="John Doe"
            className="w-full bg-[#1a1a1a] border border-[#333333] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c5a059] transition-colors"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-400 mb-1">
              Country of Residence <span className="text-[#c5a059]">*</span>
            </label>
            <input
              type="text"
              name="countryOfResidence"
              value={formData.countryOfResidence}
              onChange={handleChange}
              required
              placeholder="e.g. United States, Australia"
              className="w-full bg-[#1a1a1a] border border-[#333333] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c5a059] transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-400 mb-1">
              Email Address <span className="text-[#c5a059]">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="john@example.com"
              className="w-full bg-[#1a1a1a] border border-[#333333] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c5a059] transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-400 mb-1">
            Phone / WhatsApp Number <span className="text-[#c5a059]">*</span>
          </label>
          <input
            type="text"
            name="phoneWhatsApp"
            value={formData.phoneWhatsApp}
            onChange={handleChange}
            required
            placeholder="+1 (555) 000-0000"
            className="w-full bg-[#1a1a1a] border border-[#333333] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c5a059] transition-colors"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-400 mb-1">
              Treatment Interest
            </label>
            <select
              name="treatmentInterest"
              value={formData.treatmentInterest}
              onChange={handleChange}
              className="w-full bg-[#1a1a1a] border border-[#333333] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c5a059] transition-colors cursor-pointer"
            >
              <option value="All-on-4 Dental Implants">All-on-4 Dental Implants</option>
              <option value="Corticobasal Implants">Corticobasal Implants</option>
              <option value="Zirconia Full Mouth Restoration">Zirconia Full Mouth Restoration</option>
              <option value="Cosmetic Veneers & Smile Makeover">Cosmetic Veneers & Smile Makeover</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-400 mb-1">
              Treatment Scope
            </label>
            <select
              name="treatmentScope"
              value={formData.treatmentScope}
              onChange={handleChange}
              className="w-full bg-[#1a1a1a] border border-[#333333] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c5a059] transition-colors cursor-pointer"
            >
              <option value="Full Mouth">Full Mouth (Both Jaws)</option>
              <option value="Single Arch">Single Arch (Upper/Lower)</option>
              <option value="Multiple Implants">Multiple Implants</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-400 mb-1">
            Message / Dental History
          </label>
          <textarea
            name="messageDentalHistory"
            value={formData.messageDentalHistory}
            onChange={handleChange}
            rows={3}
            placeholder="Tell us about your dental history or questions..."
            className="w-full bg-[#1a1a1a] border border-[#333333] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c5a059] transition-colors resize-none"
          />
        </div>

        <div className="flex items-start gap-3 pt-2">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className="mt-1 accent-[#c5a059] w-4 h-4 rounded cursor-pointer"
          />
          <label htmlFor="consent" className="text-xs text-gray-400 cursor-pointer">
            I consent to receiving medical consultation details via email and WhatsApp.
          </label>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#c5a059] hover:bg-[#b08d47] text-black font-bold py-3.5 rounded-xl text-sm transition-all shadow-lg duration-200 cursor-pointer disabled:opacity-50"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Consultation Request'}
        </button>
      </form>
    </div>
  );
};

import React, { useState } from 'react';

export const AssessmentForm = () => {
  const [formData, setFormData] = useState({
    treatmentPackage: 'Signature Zirconia All-on-4',
    treatmentScope: 'Full Mouth (Both Jaws)',
    fullName: '',
    countryOfResidence: '',
    email: '',
    whatsappNumber: '',
    dentalSituation: 'Good bone density',
    paymentStatus: 'pending_100_fee',
    paymentAmount: 100
  });

  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/assessment', {
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
          message: 'Success! Your eligibility assessment request has been received. Our clinical professors will evaluate your case.'
        });
        setFormData({
          treatmentPackage: 'Signature Zirconia All-on-4',
          treatmentScope: 'Full Mouth (Both Jaws)',
          fullName: '',
          email: '',
          whatsappNumber: '',
          dentalSituation: 'Good bone density',
          paymentStatus: 'pending_100_fee',
          paymentAmount: 100
        });
      } else {
        setStatus({
          type: 'error',
          message: result.error || 'Failed to submit eligibility assessment. Please try again.'
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
        <div className="inline-block px-3 py-1 bg-[#c5a059]/10 border border-[#c5a059]/30 text-[#c5a059] text-xs font-semibold rounded-full mb-2">
          Clinical Review Fee: $100 (Credited Towards Treatment)
        </div>
        <h2 className="text-2xl font-bold font-serif text-[#c5a059]">Eligibility Assessment</h2>
        <p className="text-sm text-gray-400 mt-1">
          Submit your details for institutional case review by senior academic professors.
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-400 mb-1">
              Treatment Package
            </label>
            <select
              name="treatmentPackage"
              value={formData.treatmentPackage}
              onChange={handleChange}
              className="w-full bg-[#1a1a1a] border border-[#333333] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c5a059] transition-colors cursor-pointer"
            >
              <option value="Signature Zirconia All-on-4">Signature Zirconia All-on-4</option>
              <option value="Corticobasal Immediate Load">Corticobasal Immediate Load</option>
              <option value="Full Arch Reconstruction">Full Arch Reconstruction</option>
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
              <option value="Full Mouth (Both Jaws)">Full Mouth (Both Jaws)</option>
              <option value="Single Arch (Upper/Lower)">Single Arch (Upper/Lower)</option>
              <option value="Cosmetic Veneers Only">Cosmetic Veneers Only</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
              placeholder="Jane Smith"
              className="w-full bg-[#1a1a1a] border border-[#333333] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c5a059] transition-colors"
            />
          </div>

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
              placeholder="e.g. United Kingdom, USA"
              className="w-full bg-[#1a1a1a] border border-[#333333] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c5a059] transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
              placeholder="jane@example.com"
              className="w-full bg-[#1a1a1a] border border-[#333333] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c5a059] transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-400 mb-1">
              WhatsApp Number <span className="text-[#c5a059]">*</span>
            </label>
            <input
              type="text"
              name="whatsappNumber"
              value={formData.whatsappNumber}
              onChange={handleChange}
              required
              placeholder="+1 (555) 000-0000"
              className="w-full bg-[#1a1a1a] border border-[#333333] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c5a059] transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-400 mb-1">
            Current Dental Situation
          </label>
          <select
            name="dentalSituation"
            value={formData.dentalSituation}
            onChange={handleChange}
            className="w-full bg-[#1a1a1a] border border-[#333333] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c5a059] transition-colors cursor-pointer"
          >
            <option value="Good bone density">Good bone density / standard case</option>
            <option value="Severe bone loss">Severe bone loss / told implants not possible</option>
            <option value="Wearing dentures">Currently wearing removable dentures</option>
            <option value="Failing bridge/teeth">Failing teeth or loose bridge work</option>
          </select>
        </div>

        <div className="bg-[#1a1a1a] p-4 rounded-xl border border-[#333333] flex items-center justify-between">
          <span className="text-xs text-gray-300 font-medium">Assessment Fee Status:</span>
          <span className="text-xs font-bold text-[#c5a059] bg-[#c5a059]/10 px-3 py-1 rounded-full border border-[#c5a059]/30">
            $100.00 USD Credited
          </span>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#c5a059] hover:bg-[#b08d47] text-black font-bold py-3.5 rounded-xl text-sm transition-all shadow-lg duration-200 cursor-pointer disabled:opacity-50"
        >
          {isSubmitting ? 'Submitting Assessment...' : 'Submit Clinical Eligibility Assessment'}
        </button>
      </form>
    </div>
  );
};

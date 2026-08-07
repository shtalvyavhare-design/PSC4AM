export const CARE_EMAIL = 'care@permanentsmilecare.com';

export interface ConsultationMailParams {
  name?: string;
  email?: string;
  phone?: string;
  date?: string;
  timeSlot?: string;
  treatmentInterest?: string;
  treatmentScope?: string;
  message?: string;
  country?: string;
}

export interface EligibilityMailParams {
  fullName?: string;
  email?: string;
  phone?: string;
  country?: string;
  missingTeethCount?: string;
  timeline?: string;
  additionalNotes?: string;
}

export const createConsultationMailto = (params: ConsultationMailParams): string => {
  const name = params.name?.trim() || 'Patient';
  const subject = `Free Consultation Request - ${name}`;

  const body = `Dear Permanent Smile Care Team,

I would like to request a Free 1-on-1 Consultation for my dental implant evaluation.

Patient Details:
- Full Name: ${params.name || 'Not provided'}
- Email Address: ${params.email || 'Not provided'}
- Phone / WhatsApp: ${params.phone || 'Not provided'}
${params.country ? `- Country of Residence: ${params.country}\n` : ''}${params.date ? `- Preferred Date: ${params.date}\n` : ''}${params.timeSlot ? `- Preferred Time Slot: ${params.timeSlot}\n` : ''}${params.treatmentInterest ? `- Treatment Interest: ${params.treatmentInterest}\n` : ''}${params.treatmentScope ? `- Treatment Scope: ${params.treatmentScope}\n` : ''}${params.message ? `- Dental History / Message: ${params.message}\n` : ''}
Please review my consultation request and confirm the appointment details.

Thank you,
${name}`;

  return `mailto:${CARE_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

export const createEligibilityMailto = (params: EligibilityMailParams): string => {
  const name = params.fullName?.trim() || 'Patient';
  const subject = `Dental Implant Eligibility Check - ${name}`;

  const body = `Dear Permanent Smile Care Team,

I have completed the online Dental Implant Eligibility Check.

Assessment Details:
- Full Name: ${params.fullName || 'Not provided'}
- Country of Residence: ${params.country || 'Not provided'}
- Email Address: ${params.email || 'Not provided'}
- Phone / WhatsApp: ${params.phone || 'Not provided'}
- Missing / Damaged Teeth: ${params.missingTeethCount || 'Not specified'}
- Preferred Travel Timeline: ${params.timeline || 'Not specified'}
- Additional Notes / Dental History: ${params.additionalNotes || 'None'}

Please review my clinical eligibility and send the pre-approval assessment and scan instructions.

Thank you,
${name}`;

  return `mailto:${CARE_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

export const createGeneralInquiryMailto = (subjectText?: string): string => {
  const subject = subjectText || 'General Inquiry - Permanent Smile Care';
  const body = `Dear Permanent Smile Care Team,

I would like to inquire about dental implant treatment options, pricing packages, and international patient coordination in India.

Please connect with me with further information.

Thank you.`;

  return `mailto:${CARE_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

export const triggerMailto = (url: string) => {
  window.location.href = url;
};

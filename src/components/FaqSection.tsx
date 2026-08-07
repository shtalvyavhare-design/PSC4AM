import React, { useState } from 'react';
import { ChevronDown, Sparkles, HelpCircle } from 'lucide-react';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

const faqData: FaqItem[] = [
  {
    id: 'safety',
    question: 'Is it safe to travel to India for dental implants?',
    answer:
      'Yes. Our institutional treatment framework operates within a university-affiliated hospital that follows international clinical protocols equivalent to — and in many areas exceeding — Western standards. You will never be alone: from the moment you land to the moment you fly home, a dedicated coordinator is with you.'
  },
  {
    id: 'stay-trips',
    question: 'How long do I need to stay — and how many trips?',
    answer:
      'Treatment is structured across two trips. Your first trip is approximately 10 days: surgery is performed in the first 1–2 days, followed by close monitoring for infection management, early healing, and any complications before you are cleared to fly home. Your second trip, after 3–6 months of bone integration at home, is approximately 5 days: your permanent zirconia bridge is fitted, adjusted, and delivered. You return home with your final smile.'
  },
  {
    id: 'between-trips',
    question: 'What happens between Trip 1 and Trip 2?',
    answer:
      'You return home with a comfortable temporary prosthesis and a structured remote follow-up schedule. Our clinical team holds teleconsultations with you at 4 weeks, 8 weeks, and 3 months to monitor healing progress and clear you for your second trip. You can contact your coordinator via WhatsApp at any time.'
  },
  {
    id: 'painful',
    question: 'Will the procedure be painful?',
    answer:
      'We use advanced local anaesthesia, precise digital planning, and minimally invasive surgical protocols to reduce trauma. Most patients experience only mild discomfort manageable with standard pain relief during the first 2–3 days. Your coordinator will check on you daily during your recovery stay.'
  },
  {
    id: 'hidden-costs',
    question: 'Are there any hidden costs?',
    answer:
      'No. Financial transparency is a core principle. Your quoted package covers all clinical fees including surgery, temporary and final prosthetics, bone grafting if required, accommodation, meals, and airport transfers. If additional implants are clinically necessary, no extra cost is passed to you.'
  },
  {
    id: 'complications',
    question: 'What if there are complications after I return home?',
    answer:
      'Our teleconsultation team will assess you immediately by video. If reparative treatment is required within the guarantee period (1 year for Signature Zirconia, 1.5 years for Corticobasal), clinical costs at our affiliated hospital are fully covered. You are responsible only for your travel expenses for that return visit.'
  },
  {
    id: 'who-performs',
    question: 'Who performs the surgery?',
    answer:
      'Your surgery is performed by academic professors with 16 to 21 years of implantology experience, not visiting consultants or junior associates. We operate within an institutional framework where your case is reviewed by the entire clinical team before any procedure begins.'
  },
  {
    id: 'implant-systems',
    question: 'What implant systems do you use?',
    answer:
      'Our Corticobasal package uses specialist Swiss corticobasal systems designed for immediate loading in cases with severe bone loss. Our Signature Zirconia package uses Nobel Biocare or an equivalent top-tier Swiss/German system. The Essential package uses a proven Korean system. All systems are globally CE-marked and evidence-backed.'
  },
  {
    id: 'bone-grafting',
    question: 'Is bone grafting included?',
    answer:
      'Yes — bone grafting and sinus lifts are included within your package wherever clinically required. Unlike Western quotes that add $8,000–$25,000 for these procedures separately, we build them into your fixed package cost. No surgical add-on surprises.'
  },
  {
    id: 'food-recovery',
    question: 'What about food during my recovery stay?',
    answer:
      'A personalised soft-food meal plan is arranged for your hotel or recovery accommodation during Trip 1, meeting your post-operative dietary restrictions without sacrificing nutrition or flavour. This is included in all packages.'
  },
  {
    id: 'payments',
    question: 'How are payments handled?',
    answer:
      'All payments are processed securely through our institutional banking partners. We accept international wire transfers and major credit cards. A detailed breakdown and receipt are issued for every transaction. The $100 clinical assessment fee is fully credited toward your treatment.'
  },
  {
    id: 'refund-policy',
    question: 'What is your refund policy for the assessment fee?',
    answer:
      'The $100 clinical assessment fee is non-refundable as it covers professional time — but it is fully deducted from your final treatment package if you proceed. If you cancel before treatment for medical reasons, any additional deposits (excluding administrative costs) are handled per our standard cancellation terms.'
  }
];

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('safety');

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-black text-gray-300 border-t border-[#1a1a1a] relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c5a059]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#18150e] border border-[#c5a059]/40 mb-4 shadow-sm">
            <Sparkles className="w-4 h-4 text-[#c5a059]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#e5c07b]">
              Clear Answers & Guidance
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
            Frequently Asked <span className="text-gold-gradient font-serif italic">Questions</span>
          </h2>

          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Transparent answers to help you make a fully informed decision about your care.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {faqData.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`bg-[#141414] rounded-2xl border transition-all duration-300 overflow-hidden shadow-lg ${
                  isOpen
                    ? 'border-[#c5a059] shadow-[0_0_25px_rgba(197,160,89,0.2)] bg-[#181818]'
                    : 'border-[#222222] hover:border-[#c5a059]/60'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className={`text-base sm:text-lg font-semibold transition-colors leading-snug ${
                    isOpen ? 'text-[#e5c07b]' : 'text-white hover:text-[#e5c07b]'
                  }`}>
                    {faq.question}
                  </span>
                  
                  <div className={`p-2 rounded-xl border transition-all duration-300 shrink-0 ${
                    isOpen
                      ? 'bg-[#1c1810] border-[#c5a059]/40 text-[#f3d078] rotate-180'
                      : 'bg-[#1a1a1a] border-[#2b2b2b] text-gray-400 group-hover:text-white'
                  }`}>
                    <ChevronDown className="w-5 h-5 transition-transform duration-300" />
                  </div>
                </button>

                {/* Answer Content */}
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-gray-300 font-light leading-relaxed border-t border-[#222222]/60 animate-fadeIn">
                    <p className="pt-3 text-gray-300">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer Support Prompt */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-[#141414] border border-[#222222] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="p-3 rounded-xl bg-[#1c1810] border border-[#c5a059]/30 text-[#f3d078]">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Have a specific question not listed here?</h4>
              <p className="text-xs text-gray-400 font-light">Our clinical patient coordinators are ready to assist you via WhatsApp or Email.</p>
            </div>
          </div>
          <a
            href="#book-consultation"
            className="shrink-0 bg-gold-gradient hover:bg-gold-gradient-hover text-black font-bold text-xs px-5 py-3 rounded-full shadow-md transition-all hover:scale-105"
          >
            Ask Us Directly
          </a>
        </div>
      </div>
    </section>
  );
};

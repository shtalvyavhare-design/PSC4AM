import React from 'react';
import { Instagram, Facebook, Youtube, MessageCircle, Mail } from 'lucide-react';
import { useImageContext } from '../context/ImageContext';
import { createGeneralInquiryMailto } from '../utils/email';

export const Footer: React.FC = () => {
  const { setIsConsultationOpen, setIsEligibilityOpen } = useImageContext();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-gray-400 text-sm border-t border-[#1a1a1a] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-[#1f1f1f]">
          
          {/* Col 1: Brand & Bio & WhatsApp Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <a href="#" className="inline-block">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-gold-gradient tracking-tight">
                PermanentSmileCare
              </span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm font-light">
              Premium international patient coordination for institutional-quality dental implant treatment in India.
            </p>
            
            <div className="space-y-3 pt-1">
              <div>
                <a
                  href={createGeneralInquiryMailto('General Inquiry - Permanent Smile Care')}
                  className="text-[#c5a059] hover:text-[#d4af37] text-sm font-medium transition-colors inline-flex items-center gap-1.5"
                >
                  <Mail className="w-4 h-4" />
                  <span>care@permanentsmilecare.com</span>
                </a>
              </div>

              {/* WhatsApp Contact Button */}
              <div>
                <a
                  href="https://wa.me/919503481627"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#12281b] border border-[#25D366]/40 text-[#25D366] hover:bg-[#183524] hover:border-[#25D366] transition-all duration-300 font-semibold text-sm shadow-md group"
                >
                  <MessageCircle className="w-5 h-5 fill-[#25D366]/20 stroke-[2.2] group-hover:scale-110 transition-transform" />
                  <div className="flex flex-col items-start leading-tight">
                    <span className="text-[10px] uppercase font-bold text-emerald-400/80 tracking-wider">WhatsApp Support</span>
                    <span className="text-white font-mono text-sm tracking-wide">+91 9503481627</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Treatments (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest font-sans">
              TREATMENTS
            </h4>
            <ul className="space-y-3 text-gray-400 text-sm font-light">
              <li>
                <button onClick={() => scrollToSection('pricing')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Corticobasal Protocol
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('pricing')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Signature Zirconia
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('pricing')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Full Mouth Restoration
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('pricing')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Bone Grafting
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Patient Resources (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest font-sans">
              PATIENT RESOURCES
            </h4>
            <ul className="space-y-3 text-gray-400 text-sm font-light">
              <li>
                <a
                  href="https://drive.google.com/file/d/1F6CC9lW1SSYxIWItRk0II4mMu8vkULci/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors block"
                >
                  Journey PDF / Patient Guide
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1aaqakVwURBgHP5UWRWdOL_456OZfuZcQ/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors block"
                >
                  Guarantee & Warranty Policy
                </a>
              </li>
              <li>
                <button onClick={() => setIsEligibilityOpen(true)} className="hover:text-white transition-colors cursor-pointer text-left">
                  Eligibility Assessment
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('faq')} className="hover:text-white transition-colors cursor-pointer text-left">
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Legal & Connect (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest font-sans">
              LEGAL & CONNECT
            </h4>
            <ul className="space-y-3 text-gray-400 text-sm font-light">
              <li>
                <a
                  href="https://drive.google.com/file/d/1oMkbmpKQIU8EdLOjZIDoKMMugmD7oWy1/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors block"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1QZIDGAhxC5iEuRK1o6v65kw0l45Ir6ii/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors block"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1xPVALrro8FKyMPHK8oKnpujZu-1t_RuH/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors block"
                >
                  Refund Policy
                </a>
              </li>
            </ul>

            {/* Social Media Logos */}
            <div className="pt-3">
              <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider block mb-2.5">Follow Us</span>
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#141414] border border-[#282828] text-gray-300 hover:text-pink-500 hover:border-pink-500/50 hover:bg-pink-500/10 flex items-center justify-center transition-all cursor-pointer group"
                  title="Instagram"
                >
                  <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#141414] border border-[#282828] text-gray-300 hover:text-blue-500 hover:border-blue-500/50 hover:bg-blue-500/10 flex items-center justify-center transition-all cursor-pointer group"
                  title="Facebook"
                >
                  <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#141414] border border-[#282828] text-gray-300 hover:text-red-500 hover:border-red-500/50 hover:bg-red-500/10 flex items-center justify-center transition-all cursor-pointer group"
                  title="YouTube"
                >
                  <Youtube className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500 text-xs font-light">
          <p>© 2025 PermanentSmileCare. All rights reserved. Not an independent clinic.</p>
          <p className="text-gray-400">Institutional Treatment Framework</p>
        </div>

      </div>
    </footer>
  );
};


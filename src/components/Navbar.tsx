import React, { useState, useEffect } from 'react';
import { Sparkles, Phone, Image as ImageIcon, Menu, X, CheckCircle2 } from 'lucide-react';
import { useImageContext } from '../context/ImageContext';

export const Navbar: React.FC = () => {
  const {
    setIsCustomizerOpen,
    setIsConsultationOpen,
    setIsEligibilityOpen,
  } = useImageContext();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/95 backdrop-blur-md border-b border-[#1f1f1f] py-3 shadow-2xl'
          : 'bg-gradient-to-b from-black/90 via-black/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group focus:outline-none"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="flex items-center">
              <span className="font-serif-luxury text-2xl sm:text-3xl font-bold tracking-tight text-gold-gradient">
                PermanentSmileCare
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium text-gray-300">
            <button
              onClick={() => scrollToSection('why-trust-us')}
              className="hover:text-[#d4af37] transition-colors cursor-pointer"
            >
              Why Trust Us
            </button>
            <button
              onClick={() => scrollToSection('philosophy')}
              className="hover:text-[#d4af37] transition-colors cursor-pointer"
            >
              Our Philosophy
            </button>
            <button
              onClick={() => scrollToSection('doctors')}
              className="hover:text-[#d4af37] transition-colors cursor-pointer"
            >
              Doctors
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="hover:text-[#d4af37] transition-colors cursor-pointer"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="hover:text-[#d4af37] transition-colors cursor-pointer"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('couples-offer')}
              className="text-[#c5a059] hover:text-[#f3d078] font-semibold transition-colors cursor-pointer flex items-center gap-1"
            >
              <span>Couple's Offer</span>
              <span className="bg-[#1c1810] text-[#c5a059] border border-[#c5a059]/40 text-[9px] px-1.5 py-0.5 rounded-full font-bold">$1k OFF</span>
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="hover:text-[#d4af37] transition-colors cursor-pointer"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="hover:text-[#d4af37] transition-colors cursor-pointer"
            >
              FAQ
            </button>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Custom Image Provider Toggle */}
            <button
              onClick={() => setIsCustomizerOpen(true)}
              title="Upload your own custom images for Doctors, Cases & Banner"
              className="flex items-center gap-1.5 bg-[#141414] hover:bg-[#1a1a1a] text-gray-200 border border-[#c5a059]/40 hover:border-[#c5a059] hover:shadow-[0_0_15px_rgba(197,160,89,0.25)] px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer shadow-sm"
            >
              <ImageIcon className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>Image Editor</span>
            </button>

            {/* Free Consultation CTA Pill */}
            <button
              onClick={() => setIsConsultationOpen(true)}
              className="bg-gold-gradient hover:bg-gold-gradient-hover text-black font-bold px-5 py-2 rounded-full text-sm transition-all duration-200 shadow-lg shadow-[#c5a059]/20 hover:scale-105 cursor-pointer active:scale-95"
            >
              Free Consultation
            </button>
          </div>

          {/* Mobile Menu Toggle Button (Hamburger Sign & Image Editor) */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setIsCustomizerOpen(true)}
              className="p-2.5 text-[#c5a059] bg-[#141414] border border-[#222222] hover:border-[#c5a059] hover:shadow-[0_0_15px_rgba(197,160,89,0.25)] rounded-xl transition-all"
              title="Upload images"
            >
              <ImageIcon className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-[#c5a059] bg-[#141414] border border-[#222222] hover:border-[#c5a059] hover:shadow-[0_0_15px_rgba(197,160,89,0.3)] rounded-xl focus:outline-none transition-all"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#f3d078]" /> : <Menu className="w-6 h-6 text-[#f3d078]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#141414] border-b border-[#222222] px-5 pt-5 pb-6 space-y-5 shadow-[0_15px_30px_rgba(0,0,0,0.9)] animate-fadeIn">
          <div className="flex flex-col space-y-3 font-medium text-gray-300">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                scrollToSection('why-trust-us');
              }}
              className="text-left py-2 px-3 rounded-lg hover:bg-[#1a1a1a] hover:text-[#c5a059] transition-colors"
            >
              Why Trust Us
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                scrollToSection('philosophy');
              }}
              className="text-left py-2 px-3 rounded-lg hover:bg-[#1a1a1a] hover:text-[#c5a059] transition-colors"
            >
              Our Philosophy
            </button>
            <button
              onClick={() => scrollToSection('doctors')}
              className="text-left py-2 px-3 rounded-lg hover:bg-[#1a1a1a] hover:text-[#c5a059] transition-colors"
            >
              Doctors
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-left py-2 px-3 rounded-lg hover:bg-[#1a1a1a] hover:text-[#c5a059] transition-colors"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-left py-2 px-3 rounded-lg hover:bg-[#1a1a1a] hover:text-[#c5a059] transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('couples-offer')}
              className="text-left py-2 px-3 rounded-lg bg-[#1a1710] text-[#c5a059] font-bold border border-[#c5a059]/30 flex items-center justify-between"
            >
              <span>Couple’s Package Offer</span>
              <span className="bg-[#c5a059] text-black text-[10px] font-extrabold px-2 py-0.5 rounded-full">$1,000 OFF</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                scrollToSection('gallery');
              }}
              className="text-left py-2 px-3 rounded-lg hover:bg-[#1a1a1a] hover:text-[#c5a059] transition-colors"
            >
              Gallery
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                scrollToSection('faq');
              }}
              className="text-left py-2 px-3 rounded-lg hover:bg-[#1a1a1a] hover:text-[#c5a059] transition-colors"
            >
              FAQ
            </button>
          </div>

          <div className="pt-4 border-t border-[#222222] flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsEligibilityOpen(true);
              }}
              className="w-full bg-[#1c1c1c] hover:bg-[#252525] text-[#c5a059] border border-[#c5a059]/50 font-semibold py-3 rounded-xl text-sm text-center transition-all hover:shadow-[0_0_15px_rgba(197,160,89,0.2)]"
            >
              Check Eligibility →
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsConsultationOpen(true);
              }}
              className="w-full bg-gold-gradient hover:bg-gold-gradient-hover text-black font-bold py-3 rounded-xl text-sm text-center transition-all shadow-md"
            >
              Free Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

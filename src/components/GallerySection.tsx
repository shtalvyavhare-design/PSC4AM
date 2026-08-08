import React, { useState } from 'react';
import { ZoomIn, X, Building2 } from 'lucide-react';
import { useImageContext } from '../context/ImageContext';

import hospitalBuilding from '../../Hospital building.jpg';
import hospitalInterior from '../../hospital Interior.jpg';
import hospitalInterior2 from '../../hospital Interior2.jpg';
import hospitalSanitisation from '../../Hospital sanitisation.jpg';
import implantCentre from '../../Implant Centre.png';
import cbct from '../../CBCT.jpg';
import lab from '../../lab.png';
import qsCertificate from '../../QS Certificate.png';

interface GalleryItem {
  id: string;
  slotKey: string;
  title: string;
  category: 'Facility' | 'Technology' | 'Accreditation';
  defaultImageUrl: string;
  description: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'fac-1',
    slotKey: 'gallery_fac_1',
    title: 'Main Academic Hospital Campus',
    category: 'Facility',
    defaultImageUrl: hospitalBuilding,
    description: 'Multistory university-affiliated tertiary care hospital building housing our specialized dental departments.'
  },
  {
    id: 'fac-2',
    slotKey: 'gallery_fac_2',
    title: 'Institutional Grand Atrium & Lobby',
    category: 'Facility',
    defaultImageUrl: hospitalInterior,
    description: 'Spacious multi-level atrium welcoming international patients with dedicated reception and concierge desks.'
  },
  {
    id: 'fac-3',
    slotKey: 'gallery_fac_3',
    title: 'Central Atrium & Rotunda Architecture',
    category: 'Facility',
    defaultImageUrl: hospitalInterior2,
    description: 'Architectural rotunda design facilitating seamless patient movement across multi-specialty clinical departments.'
  },
  {
    id: 'fac-4',
    slotKey: 'gallery_fac_4',
    title: 'Hospital Clinical Corridor',
    category: 'Facility',
    defaultImageUrl: hospitalSanitisation,
    description: 'Ultra-clean, marble-floored clinical corridors connecting patient rooms, radiology, and surgical suites.'
  },
  {
    id: 'tech-1',
    slotKey: 'gallery_tech_1',
    title: 'Advanced Surgical Operatory Suite',
    category: 'Technology',
    defaultImageUrl: implantCentre,
    description: 'Ergonomic dental operatory suite equipped with digital monitors, surgical lighting, and sterilization controls.'
  },
  {
    id: 'tech-2',
    slotKey: 'gallery_tech_2',
    title: 'Digital 3D CBCT Radiography Suite',
    category: 'Technology',
    defaultImageUrl: cbct,
    description: 'State-of-the-art Gendex 3D CBCT scanner providing sub-millimeter jaw bone imaging for guided implant placement.'
  },
  {
    id: 'tech-3',
    slotKey: 'gallery_tech_3',
    title: 'Multi-Workstation Clinical Bay',
    category: 'Technology',
    defaultImageUrl: lab,
    description: 'High-capacity clinical workstations utilized for multidisciplinary case reviews and pre-surgical planning.'
  },
  {
    id: 'acc-1',
    slotKey: 'gallery_qs_diamond',
    title: 'QS I-GAUGE Rating — Diamond Category',
    category: 'Accreditation',
    defaultImageUrl: qsCertificate,
    description: 'Institutional excellence recognized with the prestigious QS I-GAUGE Diamond rating for clinical quality and academic infrastructure.'
  }
];

export const GallerySection: React.FC = () => {
  const { getImageUrl } = useImageContext();
  const [activeFilter, setActiveFilter] = useState<'All' | 'Facility' | 'Technology' | 'Accreditation'>('All');
  const [selectedItem, setSelectedItem] = useState<(GalleryItem & { currentUrl: string }) | null>(null);

  const itemsWithUrls = GALLERY_ITEMS.map((item) => ({
    ...item,
    currentUrl: getImageUrl(item.slotKey, item.defaultImageUrl),
  }));

  const filteredItems = activeFilter === 'All'
    ? itemsWithUrls
    : itemsWithUrls.filter((item) => item.category === activeFilter);

  const heroBgUrl = getImageUrl('gallery_fac_1', hospitalBuilding);

  return (
    <section id="gallery" className="py-20 bg-black text-white relative overflow-hidden border-t border-[#1a1a1a]">
      {/* Background Hero Subtle Image Overlay if set */}
      {heroBgUrl && (
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
          <img
            src={heroBgUrl}
            alt="Building Backdrop"
            className="w-full h-full object-cover blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#18150e] border border-[#c5a059]/40 mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#c5a059] animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#e5c07b]">
              Facility Gallery
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
            Inside Our <span className="text-gold-gradient font-serif italic">Institution</span>
          </h2>

          <p className="text-gray-300 text-base sm:text-lg font-light leading-relaxed">
            Explore photos of our clinical infrastructure, advanced surgical technology, and world-class hospital environment.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-start sm:justify-center gap-2.5 mb-10">
          {(['All', 'Facility', 'Technology', 'Accreditation'] as const).map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-[#c5a059] text-black shadow-[0_0_15px_rgba(197,160,89,0.4)] scale-105'
                    : 'bg-[#141414] text-gray-300 border border-[#262626] hover:border-[#c5a059]/60 hover:text-white'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Gallery Image Grid (4 Columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => {
            return (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="bg-[#141414] rounded-2xl border border-[#222222] hover:border-[#c5a059] transition-all duration-300 hover:shadow-[0_0_25px_rgba(197,160,89,0.3)] hover:-translate-y-1.5 overflow-hidden group cursor-pointer flex flex-col justify-between min-h-[280px]"
              >
                {/* Image Area */}
                <div className="relative aspect-[4/3] w-full bg-[#111111] overflow-hidden flex items-center justify-center">
                  <img
                    src={item.currentUrl}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Hover Overlay with Zoom/View prompt */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-3">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1c1810]/90 border border-[#c5a059] text-[#f3d078] text-xs font-bold shadow-lg">
                      <ZoomIn className="w-4 h-4 text-[#c5a059]" />
                      <span>View Full Image</span>
                    </div>
                  </div>
                </div>

                {/* Card Info Footer */}
                <div className="p-4 bg-[#141414] border-t border-[#1f1f1f] flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-200 group-hover:text-[#e5c07b] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <span className="text-[11px] text-[#c5a059] font-medium mt-1 uppercase tracking-wider block">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox / View Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
          <div className="bg-[#141414] border border-[#c5a059]/60 rounded-3xl max-w-3xl w-full overflow-hidden shadow-[0_0_50px_rgba(197,160,89,0.3)] relative flex flex-col">
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 border border-[#333333] text-gray-300 hover:text-white hover:border-[#c5a059] transition-all cursor-pointer"
              title="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Image Display */}
            <div className="relative aspect-[16/9] w-full bg-black flex items-center justify-center overflow-hidden">
              <img
                src={selectedItem.currentUrl}
                alt={selectedItem.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Modal Footer Description */}
            <div className="p-6 bg-[#181818] border-t border-[#222222]">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-lg font-serif font-bold text-white">
                  {selectedItem.title}
                </h3>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#c5a059] bg-[#1c1810] border border-[#c5a059]/30 px-2.5 py-0.5 rounded-full">
                  {selectedItem.category}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                {selectedItem.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

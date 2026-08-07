import React, { useState } from 'react';
import { X, Upload, Link as LinkIcon, RefreshCw, Check, Image as ImageIcon, Sparkles } from 'lucide-react';
import { useImageContext } from '../context/ImageContext';

export const ImageCustomizerModal: React.FC = () => {
  const {
    imageSlots,
    updateImageUrl,
    resetImage,
    resetAllImages,
    isCustomizerOpen,
    setIsCustomizerOpen,
  } = useImageContext();

  const [activeTab, setActiveTab] = useState<string>('All');
  const [urlInputs, setUrlInputs] = useState<Record<string, string>>({});
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  if (!isCustomizerOpen) return null;

  const categories = ['All', 'Hero', 'Doctors', 'Gallery', 'Clinic'];

  const filteredSlots = activeTab === 'All'
    ? imageSlots
    : imageSlots.filter((slot) => slot.category === activeTab);

  const handleFileUpload = (key: string, file: File) => {
    if (!file || !file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        updateImageUrl(key, e.target.result as string);
        showNotice(`Updated image for ${key}`);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleUrlSubmit = (key: string, e: React.FormEvent) => {
    e.preventDefault();
    const val = urlInputs[key];
    if (val && val.trim()) {
      updateImageUrl(key, val.trim());
      showNotice(`Updated image from URL`);
    }
  };

  const showNotice = (msg: string) => {
    setSuccessMsg(msg);
    setTimeout(() => setSuccessMsg(null), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#0a0a0a] border border-[#222222] w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col text-[#e5e5e5]">
        {/* Header */}
        <div className="p-6 bg-[#111111] border-b border-[#222222] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-[#c5a059]/10 text-[#c5a059] rounded-xl border border-[#c5a059]/30">
              <ImageIcon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#e5e5e5] font-serif italic">
                Website Image Manager & Customizer
              </h3>
              <p className="text-xs text-[#888888]">
                Provide or upload your own photos. Changes update live across the website instantly!
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                resetAllImages();
                showNotice('Reset all images to default');
              }}
              className="text-xs text-[#888888] hover:text-red-400 flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#333333] hover:border-red-500/50 transition-colors cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset All</span>
            </button>
            <button
              onClick={() => setIsCustomizerOpen(false)}
              className="p-2 text-[#888888] hover:text-white rounded-full hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="px-6 py-3 bg-[#0f0f0f] border-b border-[#222222] flex items-center gap-2 overflow-x-auto shrink-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
                activeTab === cat
                  ? 'bg-[#c5a059] text-black font-semibold shadow'
                  : 'text-[#888888] hover:text-white bg-[#1a1a1a] hover:bg-[#222222]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Success Banner Notice */}
        {successMsg && (
          <div className="bg-emerald-500/10 border-b border-emerald-500/30 px-6 py-2 text-xs text-emerald-400 font-medium flex items-center gap-2 shrink-0">
            <Check className="w-4 h-4" />
            <span>{successMsg}</span>
          </div>
        )}

        {/* Body Grid of Customizable Image Frames */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredSlots.map((slot) => (
              <div
                key={slot.key}
                className="bg-[#111111] p-5 rounded-xl border border-[#222222] space-y-4 shadow-md"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-[#e5e5e5]">{slot.title}</h4>
                  <span className="text-[10px] font-semibold text-[#c5a059] bg-[#c5a059]/10 px-2 py-0.5 rounded-md border border-[#c5a059]/20">
                    {slot.category}
                  </span>
                </div>

                {/* Live Preview Thumbnail Frame */}
                <div className="relative h-44 rounded-xl overflow-hidden bg-black border border-[#222222] group">
                  <img
                    src={slot.url || slot.defaultUrl || undefined}
                    alt={slot.title}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <button
                      onClick={() => resetImage(slot.key)}
                      className="bg-black/80 hover:bg-red-500 text-white text-xs px-3 py-1.5 rounded-lg border border-gray-600 transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <RefreshCw className="w-3 h-3" />
                      <span>Reset</span>
                    </button>
                  </div>
                </div>

                {/* Upload Controls */}
                <div className="space-y-3">
                  {/* Local File Selector */}
                  <label className="flex items-center justify-center gap-2 bg-[#161616] hover:bg-[#222222] text-[#888888] hover:text-[#e5e5e5] border border-dashed border-[#333333] p-2.5 rounded-xl text-xs font-semibold cursor-pointer transition-colors">
                    <Upload className="w-4 h-4 text-[#c5a059]" />
                    <span>Upload Image File From Computer</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        if (e.target.files?.[0]) {
                          handleFileUpload(slot.key, e.target.files[0]);
                        }
                      }}
                    />
                  </label>

                  {/* Image URL Input Form */}
                  <form
                    onSubmit={(e) => handleUrlSubmit(slot.key, e)}
                    className="flex gap-2"
                  >
                    <div className="relative flex-1">
                      <LinkIcon className="w-3.5 h-3.5 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="url"
                        placeholder="Paste image web URL..."
                        value={urlInputs[slot.key] || ''}
                        onChange={(e) =>
                          setUrlInputs({ ...urlInputs, [slot.key]: e.target.value })
                        }
                        className="w-full bg-[#161616] border border-[#222222] rounded-xl pl-9 pr-3 py-2 text-xs text-[#e5e5e5] focus:border-[#c5a059] focus:outline-none placeholder:text-[#666666]"
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-[#1f1f1f] hover:bg-[#c5a059] text-[#e5e5e5] hover:text-black font-semibold text-xs px-3 py-2 rounded-xl transition-colors cursor-pointer shrink-0 border border-[#333333]"
                    >
                      Apply
                    </button>
                  </form>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#111111] border-t border-[#222222] flex items-center justify-between text-xs text-[#888888] shrink-0">
          <span>Your uploaded images are saved automatically in your browser session.</span>
          <button
            onClick={() => setIsCustomizerOpen(false)}
            className="bg-[#c5a059] hover:bg-[#b38e47] text-black font-bold px-6 py-2 rounded-full text-xs transition-colors cursor-pointer"
          >
            Done Editing
          </button>
        </div>
      </div>
    </div>
  );
};

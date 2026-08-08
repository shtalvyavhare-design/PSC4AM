import React, { createContext, useContext, useState, useEffect } from 'react';
import { ImageSlot, CurrencyCode } from '../types';
import { INITIAL_IMAGE_SLOTS, CURRENCIES } from '../data/defaultData';

interface ImageContextType {
  imageSlots: ImageSlot[];
  getImageUrl: (key: string, fallback?: string) => string;
  updateImageUrl: (key: string, newUrl: string) => void;
  resetImage: (key: string) => void;
  resetAllImages: () => void;
  isCustomizerOpen: boolean;
  setIsCustomizerOpen: (open: boolean) => void;
  currency: CurrencyCode;
  setCurrency: (currency: CurrencyCode) => void;
  isEligibilityOpen: boolean;
  setIsEligibilityOpen: (open: boolean) => void;
  isConsultationOpen: boolean;
  setIsConsultationOpen: (open: boolean) => void;
}

const ImageContext = createContext<ImageContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'permanent_smile_care_images_v3';
const LOCAL_STORAGE_CURRENCY = 'permanent_smile_care_currency_v1';

export const ImageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [imageSlots, setImageSlots] = useState<ImageSlot[]>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Failed to load saved image slots', e);
    }
    return INITIAL_IMAGE_SLOTS;
  });

  const [currency, setCurrencyState] = useState<CurrencyCode>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_CURRENCY);
      if (saved && CURRENCIES[saved]) {
        return saved as CurrencyCode;
      }
    } catch (e) {
      console.error('Failed to load currency', e);
    }
    return 'USD';
  });

  const isCustomizerOpen = false;
  const setIsCustomizerOpen = (_open: boolean) => {};

  const setIsEligibilityOpen = (_open: boolean) => {
    const element = document.getElementById('assessment');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = 'assessment';
    }
  };

  const setIsConsultationOpen = (_open: boolean) => {
    const element = document.getElementById('book-consultation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = 'book-consultation';
    }
  };

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(imageSlots));
    } catch (e) {
      console.error('Failed to save image slots', e);
    }
  }, [imageSlots]);

  const setCurrency = (c: CurrencyCode) => {
    setCurrencyState(c);
    try {
      localStorage.setItem(LOCAL_STORAGE_CURRENCY, c);
    } catch (e) {
      console.error('Failed to save currency', e);
    }
  };

  const getImageUrl = (key: string, fallback?: string): string => {
    const slot = imageSlots.find((s) => s.key === key);
    if (slot && slot.url && slot.url.trim() !== '') {
      return slot.url;
    }
    return fallback ?? '';
  };

  const updateImageUrl = (key: string, newUrl: string) => {
    setImageSlots((prev) =>
      prev.map((slot) => (slot.key === key ? { ...slot, url: newUrl } : slot))
    );
  };

  const resetImage = (key: string) => {
    setImageSlots((prev) =>
      prev.map((slot) => (slot.key === key ? { ...slot, url: slot.defaultUrl } : slot))
    );
  };

  const resetAllImages = () => {
    setImageSlots(INITIAL_IMAGE_SLOTS);
  };

  return (
    <ImageContext.Provider
      value={{
        imageSlots,
        getImageUrl,
        updateImageUrl,
        resetImage,
        resetAllImages,
        isCustomizerOpen,
        setIsCustomizerOpen,
        currency,
        setCurrency,
        isEligibilityOpen: false,
        setIsEligibilityOpen,
        isConsultationOpen: false,
        setIsConsultationOpen,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};

export const useImageContext = () => {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error('useImageContext must be used within an ImageProvider');
  }
  return context;
};

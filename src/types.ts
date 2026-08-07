export type CurrencyCode = 'USD' | 'EUR' | 'GBP' | 'AUD' | 'CAD' | 'INR';

export interface CurrencyConfig {
  code: CurrencyCode;
  symbol: string;
  rateToUSD: number; // USD is base
  label: string;
}

export interface Doctor {
  id: string;
  name: string;
  title: string;
  qualification: string;
  experienceYears: number | string;
  implantsPlaced: number;
  specialties: string[];
  bio: string;
  imageUrl: string;
  rating: number;
  reviewsCount: number;
  publications?: number;
  citations?: number;
  hIndex?: number;
  presentations?: number;
  guestLectures?: number;
  roleTag?: string;
}

export interface TransformationCase {
  id: string;
  patientName: string;
  country: string;
  procedure: string;
  durationDays: number;
  beforeImageUrl: string;
  afterImageUrl: string;
  story: string;
  savingsPercent: number;
}

export interface PricingPackage {
  id: string;
  name: string;
  popular?: boolean;
  tagline: string;
  usPriceUSD: number;
  ukPriceGBP: number;
  ausPriceAUD: number;
  indiaPriceUSD: number;
  warranty: string;
  stayDays: string;
  inclusions: string[];
  brandNames: string[];
}

export interface ImageSlot {
  key: string;
  title: string;
  category: 'Hero' | 'Doctors' | 'Gallery' | 'Clinic' | 'Badges';
  url: string;
  defaultUrl: string;
}

export interface EligibilityFormData {
  missingTeethCount: string;
  currentDentalCondition: string;
  hasBoneGraftingNeed: string;
  timeline: string;
  fullName: string;
  email: string;
  phone: string;
  country: string;
  additionalNotes: string;
}

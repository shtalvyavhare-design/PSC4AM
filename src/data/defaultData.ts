import { CurrencyConfig, Doctor, TransformationCase, PricingPackage, ImageSlot } from '../types';
import drSharathImg from '../assets/images/dr-sharath.jpg';
import drAnitaImg from '../assets/images/anita-.jpg';
import drDnyaneshwariImg from '../assets/images/dr-dnyaneshwari.jpg';
import drSantoshImg from '../assets/images/dr-santosh.jpg';
import couplesBannerImg from '../assets/images/couples_package_banner_1786139421072.jpg';
import hospitalBuildingImg from '../assets/images/Hospital building.jpg';
import hospitalInteriorImg from '../assets/images/hospital Interior.jpg';
import hospitalInterior2Img from '../assets/images/hospital Interior2.jpg';
import hospitalSanitisationImg from '../assets/images/Hospital sanitisation.jpg';
import implantCentreImg from '../assets/images/Implant Centre.png';
import cbctImg from '../assets/images/CBCT.jpg';
import labImg from '../assets/images/lab.png';
import qsCertificateImg from '../assets/images/QS Certificate.png';


export const CURRENCIES: Record<string, CurrencyConfig> = {
  USD: { code: 'USD', symbol: '$', rateToUSD: 1, label: 'USD ($)' },
  EUR: { code: 'EUR', symbol: '€', rateToUSD: 0.92, label: 'EUR (€)' },
  GBP: { code: 'GBP', symbol: '£', rateToUSD: 0.78, label: 'GBP (£)' },
  AUD: { code: 'AUD', symbol: 'A$', rateToUSD: 1.52, label: 'AUD (A$)' },
  CAD: { code: 'CAD', symbol: 'C$', rateToUSD: 1.38, label: 'CAD (C$)' },
  INR: { code: 'INR', symbol: '₹', rateToUSD: 83.5, label: 'INR (₹)' },
};

export const INITIAL_IMAGE_SLOTS: ImageSlot[] = [
  {
    key: 'hero_bg',
    title: 'Hero Banner / Background',
    category: 'Hero',
    url: hospitalBuildingImg,
    defaultUrl: hospitalBuildingImg
  },
  {
    key: 'doctor_1',
    title: 'Dr. Sharath K S (Professor)',
    category: 'Doctors',
    url: drSharathImg,
    defaultUrl: drSharathImg
  },
  {
    key: 'doctor_2',
    title: 'Dr. Anita Kulloli (Professor)',
    category: 'Doctors',
    url: drAnitaImg,
    defaultUrl: drAnitaImg
  },
  {
    key: 'doctor_3',
    title: 'Dr. Dnyaneshwari (Associate Professor)',
    category: 'Doctors',
    url: drDnyaneshwariImg,
    defaultUrl: drDnyaneshwariImg
  },
  {
    key: 'doctor_4',
    title: 'Dr. Santosh (Associate Professor)',
    category: 'Doctors',
    url: drSantoshImg,
    defaultUrl: drSantoshImg
  },
  {
    key: 'gallery_fac_1',
    title: 'Gallery: Main Academic Hospital Campus',
    category: 'Gallery',
    url: hospitalBuildingImg,
    defaultUrl: hospitalBuildingImg
  },
  {
    key: 'gallery_fac_2',
    title: 'Gallery: Institutional Grand Atrium & Lobby',
    category: 'Gallery',
    url: hospitalInteriorImg,
    defaultUrl: hospitalInteriorImg
  },
  {
    key: 'gallery_fac_3',
    title: 'Gallery: Central Atrium & Rotunda',
    category: 'Gallery',
    url: hospitalInterior2Img,
    defaultUrl: hospitalInterior2Img
  },
  {
    key: 'gallery_fac_4',
    title: 'Gallery: Hospital Clinical Corridor',
    category: 'Gallery',
    url: hospitalSanitisationImg,
    defaultUrl: hospitalSanitisationImg
  },
  {
    key: 'gallery_tech_1',
    title: 'Gallery: Advanced Surgical Operatory Suite',
    category: 'Gallery',
    url: implantCentreImg,
    defaultUrl: implantCentreImg
  },
  {
    key: 'gallery_tech_2',
    title: 'Gallery: Digital 3D CBCT Radiography Suite',
    category: 'Gallery',
    url: cbctImg,
    defaultUrl: cbctImg
  },
  {
    key: 'gallery_tech_3',
    title: 'Gallery: Multi-Workstation Clinical Bay',
    category: 'Gallery',
    url: labImg,
    defaultUrl: labImg
  },
  {
    key: 'gallery_qs_diamond',
    title: 'Gallery: QS I-GAUGE Rating Badge',
    category: 'Gallery',
    url: qsCertificateImg,
    defaultUrl: qsCertificateImg
  },
  {
    key: 'gallery_1_before',
    title: 'Case 1 - Before Treatment',
    category: 'Gallery',
    url: hospitalInteriorImg,
    defaultUrl: hospitalInteriorImg
  },
  {
    key: 'gallery_1_after',
    title: 'Case 1 - After Transformation',
    category: 'Gallery',
    url: implantCentreImg,
    defaultUrl: implantCentreImg
  },
  {
    key: 'clinic_cbct',
    title: '3D CBCT Scanner Facility',
    category: 'Clinic',
    url: cbctImg,
    defaultUrl: cbctImg
  },
  {
    key: 'clinic_op',
    title: 'Sterile Operation Suite',
    category: 'Clinic',
    url: implantCentreImg,
    defaultUrl: implantCentreImg
  },
  {
    key: 'institutional_building',
    title: 'Institutional Campus & Atrium',
    category: 'Clinic',
    url: hospitalBuildingImg,
    defaultUrl: hospitalBuildingImg
  },
  {
    key: 'couples_banner',
    title: "Couple's Package Banner",
    category: 'Clinic',
    url: couplesBannerImg,
    defaultUrl: couplesBannerImg
  }
];

export const INITIAL_DOCTORS: Doctor[] = [
  {
    id: 'doc-1',
    name: 'Dr. Sharath',
    roleTag: 'Professor',
    title: 'Professor',
    qualification: 'B.D.S., M.D.S., DNB(MOHI), (Ph.D.)',
    experienceYears: '16 Years 11 Months',
    implantsPlaced: 8500,
    specialties: ['3D Computer-Guided Implantology', 'Periodontal Surgery', 'Full Mouth Rehab'],
    bio: 'Recognized academic professor and pioneer in keyhole implantology and complex jaw restoration with extensive research contributions.',
    imageUrl: drSharathImg,
    rating: 4.99,
    reviewsCount: 720,
    publications: 33,
    hIndex: 10,
    citations: 425
  },
  {
    id: 'doc-2',
    name: 'Dr. Anita',
    roleTag: 'Professor',
    title: 'Professor',
    qualification: 'M.D.S.',
    experienceYears: '21 Years',
    implantsPlaced: 11000,
    specialties: ['Swiss Zirconia Implants', 'Bone Regeneration', 'Laser Periodontics'],
    bio: 'Senior academic leader with 21+ years of surgical experience in international implantology protocols and soft tissue aesthetics.',
    imageUrl: drAnitaImg,
    rating: 4.97,
    reviewsCount: 650,
    publications: 27,
    hIndex: 9,
    citations: 300
  },
  {
    id: 'doc-3',
    name: 'Dr. Dnyaneshwari',
    roleTag: 'Associate Professor',
    title: 'Associate Professor',
    qualification: 'M.D.S.',
    experienceYears: '12 Years',
    implantsPlaced: 6200,
    specialties: ['Immediate Same-Day Implants', 'Sinus Lift Surgery', 'Prosthetic Rehabilitation'],
    bio: 'Expert specialist in minimally invasive immediate loading dental implants for international patients.',
    imageUrl: drDnyaneshwariImg,
    rating: 4.94,
    reviewsCount: 430,
    hIndex: 2,
    citations: 67
  },
  {
    id: 'doc-4',
    name: 'Dr. Santosh',
    roleTag: 'Associate Professor',
    title: 'Associate Professor',
    qualification: 'B.D.S., M.D.S.',
    experienceYears: '8 Years 10 Months',
    implantsPlaced: 5400,
    specialties: ['Digital CAD/CAM Dentistry', 'Bone Grafting', 'Advanced Implant Surgery'],
    bio: 'High-impact academic researcher with 40 publications and 800+ citations in international implant dentistry.',
    imageUrl: drSantoshImg,
    rating: 4.96,
    reviewsCount: 510,
    publications: 40,
    presentations: 2,
    guestLectures: 7,
    hIndex: 18,
    citations: 816
  }
];

export const INITIAL_TRANSFORMATIONS: TransformationCase[] = [
  {
    id: 'trans-1',
    patientName: 'David Miller',
    country: 'London, United Kingdom',
    procedure: 'Full Upper Arch All-on-4 Implants',
    durationDays: 5,
    beforeImageUrl: hospitalInteriorImg,
    afterImageUrl: implantCentreImg,
    story: 'Saved over £14,000 compared to UK private clinics. Traveled to India, got full teeth in 5 days, and enjoyed a luxury stay in Goa.',
    savingsPercent: 78
  },
  {
    id: 'trans-2',
    patientName: 'Sarah Jenkins',
    country: 'Sydney, Australia',
    procedure: 'Full Mouth Zirconia Implants (Upper & Lower)',
    durationDays: 7,
    beforeImageUrl: hospitalSanitisationImg,
    afterImageUrl: implantCentreImg,
    story: 'I was quoted $45,000 AUD back home. PermanentSmileCare did it for less than $11,000 AUD with lifetime implant warranty.',
    savingsPercent: 75
  },
  {
    id: 'trans-3',
    patientName: 'Robert Vance',
    country: 'Texas, United States',
    procedure: '3 Tooth Implants & Zirconia Bridge',
    durationDays: 3,
    beforeImageUrl: hospitalInterior2Img,
    afterImageUrl: labImg,
    story: 'Extremely professional team. Airport coordinator picked me up directly at Delhi T3. Implants felt 100% natural within hours.',
    savingsPercent: 82
  }
];

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: 'pkg-single',
    name: 'Single Tooth Swiss Implant',
    tagline: 'Ideal for replacing single missing or damaged tooth',
    usPriceUSD: 3800,
    ukPriceGBP: 2800,
    ausPriceAUD: 5200,
    indiaPriceUSD: 590,
    warranty: 'Lifetime Warranty',
    stayDays: '2 - 3 Days',
    inclusions: [
      'Swiss Nobel Biocare or Straumann Titanium Implant',
      'Monolithic Zirconia Crown',
      'Free 3D CBCT Scan & Digital Planning',
      'Free VIP Airport Pickup & Dropoff',
      'Post-Op Medications & Care Kit'
    ],
    brandNames: ['Nobel Biocare', 'Straumann', 'Osstem']
  },
  {
    id: 'pkg-allon4',
    name: 'All-on-4 Full Arch Fixed Teeth',
    popular: true,
    tagline: 'Complete full arch restoration in 3-5 days',
    usPriceUSD: 24000,
    ukPriceGBP: 18000,
    ausPriceAUD: 32000,
    indiaPriceUSD: 4200,
    warranty: '25-Year Structural Warranty',
    stayDays: '5 - 7 Days',
    inclusions: [
      '4 Premium Titanium Implants per Arch',
      'Computer-Guided Surgical Stent',
      'Immediate Fixed Permanent Bridge',
      'Complimentary 5-Star Hotel Accommodation (3 Nights)',
      'Dedicated English/German Personal Care Coordinator',
      'Free VIP Chauffeured Transfers'
    ],
    brandNames: ['NobelActive', 'Straumann BLX']
  },
  {
    id: 'pkg-allon6',
    name: 'All-on-6 Luxury Full Mouth',
    tagline: 'Maximum stability and biting force for full jaw',
    usPriceUSD: 32000,
    ukPriceGBP: 24000,
    ausPriceAUD: 42000,
    indiaPriceUSD: 5800,
    warranty: 'Lifetime Global Guarantee',
    stayDays: '7 - 9 Days',
    inclusions: [
      '6 Premium Implants for Maximum Anchor',
      'High-Grade Prettau Zirconia Fixed Teeth',
      'Sinus Lift & Bone Density Optimization (if required)',
      'Complimentary 5-Star Hotel Accommodation (5 Nights)',
      'Personal Butler & Concierge Support',
      'Free Post-Op Sightseeing Day Tour'
    ],
    brandNames: ['Straumann Roxolid', 'Zimmer Biomet']
  }
];

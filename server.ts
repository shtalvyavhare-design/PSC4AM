import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import path from 'path';
import { createServer as createViteServer } from 'vite';

dotenv.config();

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Atlas Connection Setup & Sanitization
const DEFAULT_MONGODB_URI = 'mongodb+srv://permanentsmilecare_db_user:wFfrelrr6FpSKhBI@cluster0.0dmo4eq.mongodb.net/permanentsmilecare?retryWrites=true&w=majority';

let envUri = process.env.MONGODB_URI ? process.env.MONGODB_URI.trim().replace(/^["']|["']$/g, '') : '';
if (!envUri || envUri === 'MONGODB_URI' || envUri === 'YOUR_MONGODB_URI' || (!envUri.includes('mongodb://') && !envUri.includes('mongodb+srv://') && !envUri.includes('.'))) {
  envUri = DEFAULT_MONGODB_URI;
}
let rawUri = envUri;

if (rawUri && !rawUri.startsWith('mongodb://') && !rawUri.startsWith('mongodb+srv://')) {
  rawUri = `mongodb+srv://${rawUri}`;
}

async function ensureDbConnection(): Promise<boolean> {
  const currentState = mongoose.connection.readyState as number;
  if (currentState === 1) {
    return true;
  }
  if (!rawUri) return false;
  
  if (currentState === 2) {
    for (let i = 0; i < 30; i++) {
      const stateNow = mongoose.connection.readyState as number;
      if (stateNow === 1) return true;
      if (stateNow === 0) break;
      await new Promise(r => setTimeout(r, 200));
    }
    const finalCheck = mongoose.connection.readyState as number;
    if (finalCheck === 1) return true;
  }

  try {
    console.log('Attempting mongoose.connect to:', rawUri.replace(/:[^:@]+@/, ':****@'));
    await mongoose.connect(rawUri);
    console.log('✅ Connected successfully to MongoDB Atlas');
    return (mongoose.connection.readyState as number) === 1;
  } catch (err: any) {
    console.error('⚠️ MongoDB Atlas Connection Error Details:', err);
    return false;
  }
}

// Initial connect call at server boot
ensureDbConnection();

mongoose.connection.on('connected', () => { console.log('✅ MongoDB connection active.'); });
mongoose.connection.on('disconnected', () => { console.warn('⚠️ MongoDB connection disconnected.'); });
mongoose.connection.on('error', (err) => { console.warn('⚠️ MongoDB connection error:', err.message); });

// In-Memory Fallback Stores
const inMemoryConsultations: any[] = [];
const inMemoryAssessments: any[] = [];

// 1. Consultation Mongoose Schema & Model
const consultationSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, trim: true },
    countryOfResidence: { type: String, default: '' },
    email: { type: String, trim: true, lowercase: true, default: '' },
    phoneWhatsApp: { type: String, trim: true, default: '' },
    treatmentInterest: { type: String, default: '' },
    treatmentScope: { type: String, default: '' },
    messageDentalHistory: { type: String, default: '' },
    consent: { type: Boolean, default: false }
  },
  { timestamps: true, collection: 'consultations' }
);

const Consultation = mongoose.model('Consultation', consultationSchema);

// 2. Assessment Mongoose Schema & Model
const assessmentSchema = new mongoose.Schema(
  {
    treatmentPackage: { type: String, default: '' },
    treatmentScope: { type: String, default: '' },
    fullName: { type: String, required: true, trim: true },
    countryOfResidence: { type: String, default: '' },
    email: { type: String, trim: true, lowercase: true, default: '' },
    whatsappNumber: { type: String, trim: true, default: '' },
    dentalSituation: { type: String, default: '' },
    paymentStatus: { type: String, default: 'pending_100_fee' },
    paymentAmount: { type: Number, default: 100 }
  },
  { timestamps: true, collection: 'assessments' }
);

const Assessment = mongoose.model('Assessment', assessmentSchema);

// --- API ROUTES ---

// Healthcheck
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({
    status: 'ok',
    database: (mongoose.connection.readyState as number) === 1 ? 'connected' : 'disconnected'
  });
});

// Endpoint 1: Free Consultation POST
app.post('/api/consultation', async (req: Request, res: Response) => {
  try {
    const {
      fullName,
      countryOfResidence,
      email,
      phoneWhatsApp,
      treatmentInterest,
      treatmentScope,
      messageDentalHistory,
      consent
    } = req.body;

    if (!fullName || !countryOfResidence || (!email && !phoneWhatsApp)) {
      return res.status(400).json({
        success: false,
        error: 'Full Name, Country of Residence, and at least one contact method (Email or Phone/WhatsApp) are required.'
      });
    }

    const consultationData = {
      fullName,
      countryOfResidence,
      email,
      phoneWhatsApp,
      treatmentInterest,
      treatmentScope,
      messageDentalHistory,
      consent: Boolean(consent),
      createdAt: new Date()
    };

    await ensureDbConnection();

    if ((mongoose.connection.readyState as number) === 1) {
      try {
        const newConsultation = new Consultation(consultationData);
        const savedRecord = await newConsultation.save();
        return res.status(201).json({
          success: true,
          storage: 'mongodb_atlas',
          message: 'Consultation request saved successfully in MongoDB Atlas.',
          data: savedRecord
        });
      } catch (dbErr: any) {
        console.warn('MongoDB save warning, falling back to local memory:', dbErr.message);
      }
    }

    // Fallback save
    inMemoryConsultations.push(consultationData);
    return res.status(201).json({
      success: true,
      storage: 'memory_fallback',
      message: 'Consultation request received and saved successfully.',
      data: consultationData,
      note: 'Atlas direct write active once IP whitelist 0.0.0.0/0 is verified.'
    });
  } catch (error: any) {
    console.error('Error saving consultation:', error);
    return res.status(500).json({
      success: false,
      error: 'Internal server error while saving consultation details.',
      details: error.message
    });
  }
});

// Endpoint 2: Eligibility Assessment POST
app.post('/api/assessment', async (req: Request, res: Response) => {
  try {
    const {
      treatmentPackage,
      treatmentScope,
      fullName,
      countryOfResidence,
      email,
      whatsappNumber,
      dentalSituation,
      paymentStatus,
      paymentAmount
    } = req.body;

    if (!fullName || !countryOfResidence || (!email && !whatsappNumber)) {
      return res.status(400).json({
        success: false,
        error: 'Full Name, Country of Residence, and at least one contact method (Email or WhatsApp) are required.'
      });
    }

    const assessmentData = {
      treatmentPackage,
      treatmentScope,
      fullName,
      countryOfResidence,
      email,
      whatsappNumber,
      dentalSituation,
      paymentStatus: paymentStatus || 'pending_100_fee',
      paymentAmount: paymentAmount || 100,
      createdAt: new Date()
    };

    await ensureDbConnection();

    if ((mongoose.connection.readyState as number) === 1) {
      try {
        const newAssessment = new Assessment(assessmentData);
        const savedRecord = await newAssessment.save();
        return res.status(201).json({
          success: true,
          storage: 'mongodb_atlas',
          message: 'Eligibility assessment request saved successfully in MongoDB Atlas.',
          data: savedRecord
        });
      } catch (dbErr: any) {
        console.warn('MongoDB save warning, falling back to local memory:', dbErr.message);
      }
    }

    // Fallback save
    inMemoryAssessments.push(assessmentData);
    return res.status(201).json({
      success: true,
      storage: 'memory_fallback',
      message: 'Eligibility assessment request received and saved successfully.',
      data: assessmentData,
      note: 'Atlas direct write active once IP whitelist 0.0.0.0/0 is verified.'
    });
  } catch (error: any) {
    console.error('Error saving assessment:', error);
    return res.status(500).json({
      success: false,
      error: 'Internal server error while saving assessment details.',
      details: error.message
    });
  }
});

// --- VITE MIDDLEWARE / STATIC FILE SERVING ---
async function startServer() {
  await ensureDbConnection();

  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 MERN Backend & Frontend running on http://localhost:${PORT}`);
  });
}

startServer();

const mongoose = require('mongoose');
const slugify = require('slugify');

const StartupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Startup name is required'],
    trim: true,
    maxlength: [100, 'Startup name cannot exceed 100 characters']
  },
  slug: {
    type: String,
    unique: true
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    maxlength: [1000, 'Description cannot exceed 1000 characters']
  },
  shortDescription: {
    type: String,
    maxlength: [200, 'Short description cannot exceed 200 characters']
  },
  logo: {
    type: String,
    default: null
  },
  website: String,
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: [
      'AI/ML', 'HealthTech', 'EdTech', 'FinTech', 'AgriTech', 
      'CleanTech', 'Sustainability', 'Logistics', 'SaaS', 'E-commerce'
    ]
  },
  stage: {
    type: String,
    enum: ['Idea', 'Prototype', 'MVP', 'Early Stage', 'Growth Stage'],
    default: 'Idea'
  },
  status: {
    type: String,
    enum: ['Applied', 'Under Review', 'Accepted', 'Incubating', 'Graduated', 'Rejected'],
    default: 'Applied'
  },
  foundedDate: Date,
  incorporationStatus: {
    type: String,
    enum: ['Not Incorporated', 'In Progress', 'Incorporated'],
    default: 'Not Incorporated'
  },
  incorporationDate: Date,
  registrationNumber: String,
  
  // Team Information
  founders: [{
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    phone: String,
    role: String,
    linkedin: String,
    bio: String,
    equity: Number
  }],
  
  teamSize: {
    type: Number,
    default: 1
  },
  
  // Business Information
  businessModel: String,
  targetMarket: String,
  competitorAnalysis: String,
  valueProposition: String,
  revenueModel: String,
  
  // Financial Information
  fundingStage: {
    type: String,
    enum: ['Pre-Seed', 'Seed', 'Series A', 'Series B', 'Later Stage', 'Not Seeking'],
    default: 'Pre-Seed'
  },
  fundingAmount: {
    requested: Number,
    raised: Number,
    currency: {
      type: String,
      default: 'INR'
    }
  },
  currentRevenue: Number,
  projectedRevenue: Number,
  
  // Technical Information
  technology: [String],
  intellectualProperty: [{
    type: String,
    number: String,
    status: String
  }],
  
  // Documents
  documents: [{
    name: String,
    type: String,
    url: String,
    uploadedAt: {
      type: Date,
      default: Date.now
    }
  }],
  
  // Mentorship
  mentors: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Mentor'
  }],
  
  // Metrics
  metrics: {
    users: Number,
    revenue: Number,
    growth: Number,
    funding: Number
  },
  
  // Tags
  tags: [String],
  
  // Social Media
  socialMedia: {
    linkedin: String,
    twitter: String,
    facebook: String,
    instagram: String
  },
  
  // Program Details
  applicationDate: {
    type: Date,
    default: Date.now
  },
  acceptanceDate: Date,
  graduationDate: Date,
  
  // Progress Tracking
  milestones: [{
    title: String,
    description: String,
    targetDate: Date,
    completedDate: Date,
    status: {
      type: String,
      enum: ['Pending', 'In Progress', 'Completed', 'Overdue'],
      default: 'Pending'
    }
  }],
  
  // Admin fields
  notes: String,
  rating: Number,
  isActive: {
    type: Boolean,
    default: true
  },
  
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Create startup slug from name
StartupSchema.pre('save', function(next) {
  if (this.isModified('name')) {
    this.slug = slugify(this.name, { lower: true });
  }
  this.updatedAt = Date.now();
  next();
});

// Populate mentors when querying
StartupSchema.pre(/^find/, function(next) {
  this.populate({
    path: 'mentors',
    select: 'name expertise organization'
  });
  next();
});

// Virtual for funding progress
StartupSchema.virtual('fundingProgress').get(function() {
  if (this.fundingAmount.requested && this.fundingAmount.raised) {
    return (this.fundingAmount.raised / this.fundingAmount.requested) * 100;
  }
  return 0;
});

// Virtual for application age
StartupSchema.virtual('applicationAge').get(function() {
  return Math.floor((Date.now() - this.applicationDate) / (1000 * 60 * 60 * 24));
});

StartupSchema.set('toJSON', { virtuals: true });
StartupSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('Startup', StartupSchema); 
// lib/upcomingData.ts

export interface UpcomingProject {
  id: string;
  name: string;
  location: string;
  type: string;
  launchDate: string;
  startingPrice: string;
  status: string;
  thumbnail: string;
  bannerVideoUrl?: string;
  overview: {
    totalArea: string;
    totalPlots: string;
    plotSizes: string;
    expectedPossession: string;
  };
  highlights: string[];
  advantages: { icon: string; text: string }[];
  amenities: { icon: string; name: string }[];
  gallery: string[];
  investmentBenefits: string[];
  pricing: { size: string; price: string }[];
  progress: { name: string; status: 'completed' | 'processing' | 'upcoming' }[];
  faqs: { question: string; answer: string }[];
}

export const upcomingProjectsData: UpcomingProject[] = [
  {
    id: "anandam-greens-phase2",
    name: "Anandam Greens - Phase II",
    location: "Asansol - Gourandi Road, Panchgachia",
    type: "Residential Plot Development",
    launchDate: "August 2026",
    startingPrice: "₹ 8.5 Lakhs",
    status: "Coming Soon",
    thumbnail: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&auto=format&fit=crop",
    overview: {
      totalArea: "25 Acres",
      totalPlots: "180 Smart Plots",
      plotSizes: "720, 1080, 1440 sq.ft.",
      expectedPossession: "December 2027"
    },
    highlights: [
      "Gated Community with 24/7 High Security",
      "30 ft Wide Blacktop Internal Roads",
      "Dedicated Children's Park & Green Zone",
      "Underground Water & Modern Drainage Line",
      "Integrated Street Lighting Infrastructure"
    ],
    advantages: [
      { icon: "📍", text: "Asansol Railway Station - 7.5 km" },
      { icon: "📍", text: "National Highway (NH19) - 4.0 km" },
      { icon: "📍", text: "Premium English Medium School - 1.5 km" },
      { icon: "📍", text: "Multi-Specialty Hospital - 3.2 km" },
      { icon: "📍", text: "Local Mega Market - 1.0 km" }
    ],
    amenities: [
      { icon: "🏞️", name: "Park" },
      { icon: "💡", name: "Street Lights" },
      { icon: "🚰", name: "Water Supply" },
      { icon: "🛡️", name: "Security" },
      { icon: "🏡", name: "Community Hall" },
      { icon: "🛣️", name: "Wide Roads" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&auto=format&fit=crop"
    ],
    investmentBenefits: [
      "Fast Developing Area with high value appreciation.",
      "High ROI Potential driven by upcoming government infrastructure.",
      "Future Infrastructure Growth around the residential belt.",
      "Good Connectivity with major town business hubs."
    ],
    pricing: [
      { size: "720 sq.ft", price: "₹ 8.50 Lakhs" },
      { size: "1080 sq.ft", price: "₹ 12.75 Lakhs" },
      { size: "1440 sq.ft", price: "₹ 16.90 Lakhs" }
    ],
    progress: [
      { name: "Land Acquisition", status: "completed" },
      { name: "Layout Approval", status: "completed" },
      { name: "Road Development", status: "processing" },
      { name: "Project Launch", status: "upcoming" }
    ],
    faqs: [
      { question: "What is the initial booking amount?", answer: "You can pre-book your smart residential plot with an initial token amount of ₹ 51,000 only." },
      { question: "Are bank loans available for upcoming projects?", answer: "Yes, we will provide 100% bank loan assistance from all leading certified banks post-launch." },
      { question: "When can I expect the registration process?", answer: "The registration process will begin right after the official launch and layout map clearance approvals." },
      { question: "What is the possession timeline?", answer: "Possession and development handover are planned to begin from December 2027 onwards." }
    ]
  },
  {
    id: "anandam-smart-city",
    name: "Anandam Smart City",
    location: "Near Kazi Nazrul Islam Airport, Andal",
    type: "Premium Township Plots",
    launchDate: "November 2026",
    startingPrice: "₹ 12.0 Lakhs",
    status: "Coming Soon",
    thumbnail: "https://images.unsplash.com/photo-1524813686514-a57563d77d61?w=600&auto=format&fit=crop",
    overview: {
      totalArea: "40 Acres Mega Project",
      totalPlots: "310 Premium Plots",
      plotSizes: "1080, 1440, 2160 sq.ft.",
      expectedPossession: "Mid 2028"
    },
    highlights: [
      "Ultra-Modern Smart Township Design",
      "40 ft Main Entrance & 30 ft Inner Roads",
      "Eco-Friendly Solar Powered Street Lights",
      "Massive Jogging Track & Commercial Hub",
      "Grand Entrance Plaza with Hi-Tech Security"
    ],
    advantages: [
      { icon: "📍", text: "Andal Airport (KNI) - 4.5 km" },
      { icon: "📍", text: "Raniganj Railway Station - 9.0 km" },
      { icon: "📍", text: "Mission Hospital Durgapur - 12.0 km" },
      { icon: "📍", text: "Delhi Public School - 5.0 km" },
      { icon: "📍", text: "Upcoming Metro Mall - 2.5 km" }
    ],
    amenities: [
      { icon: "🏞️", name: "Park" },
      { icon: "💡", name: "Street Lights" },
      { icon: "🚰", name: "Water Supply" },
      { icon: "🛡️", name: "Security" },
      { icon: "🏡", name: "Community Hall" },
      { icon: "🛣️", name: "Wide Roads" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=600&auto=format&fit=crop"
    ],
    investmentBenefits: [
      "Strategic airport-proximity location driving extreme real estate demand.",
      "High ROI potential driven by commercial expansions.",
      "Future Infrastructure Growth with planned superhighway link roads.",
      "Good Connectivity directly matching the industrial ecosystem belt."
    ],
    pricing: [
      { size: "1080 sq.ft", price: "₹ 12.00 Lakhs" },
      { size: "1440 sq.ft", price: "₹ 15.80 Lakhs" },
      { size: "2160 sq.ft", price: "₹ 23.50 Lakhs" }
    ],
    progress: [
      { name: "Land Acquisition", status: "completed" },
      { name: "Layout Approval", status: "processing" },
      { name: "Road Development", status: "upcoming" },
      { name: "Project Launch", status: "upcoming" }
    ],
    faqs: [
      { question: "What is the initial booking amount?", answer: "The priority booking token amount for Anandam Smart City plots is set at ₹ 1,00,000 only." },
      { question: "Is this property fully verified?", answer: "Yes, this project is fully cleared with legal title verifications before the layout map sign-offs." },
      { question: "Are loan facilities available from nationalized banks?", answer: "Yes, full loan allocation approvals will be operational via SBI, HDFC, and ICICI post the project launch." },
      { question: "What is the estimated possession timeline?", answer: "Development layout possession structures are projected to begin around June 2028." }
    ]
  },
  {
    id: "anandam-lake-view",
    name: "Anandam Lake View Residency",
    location: "Durgapur - Barjora Highway, Durgapur",
    type: "Luxury Residential Plots",
    launchDate: "January 2027",
    startingPrice: "₹ 15.5 Lakhs",
    status: "Coming Soon",
    thumbnail: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=600&auto=format&fit=crop",
    overview: {
      totalArea: "35 Acres",
      totalPlots: "250 Premium Lake View Plots",
      plotSizes: "1200, 1600, 2000 sq.ft.",
      expectedPossession: "March 2029"
    },
    highlights: [
      "Exclusive Lake View Premium Plots",
      "60 ft Wide Main Boulevard Road",
      "Club House with Swimming Pool",
      "Landscaped Gardens & Meditation Center",
      "24/7 CCTV Surveillance & Security",
      "Underground Electricity & Fiber Optic Cabling"
    ],
    advantages: [
      { icon: "📍", text: "Durgapur Railway Station - 6.8 km" },
      { icon: "📍", text: "Durgapur Airport (RDP) - 12.5 km" },
      { icon: "📍", text: "DPS Durgapur - 3.2 km" },
      { icon: "📍", text: "IQ City Hospital - 4.5 km" },
      { icon: "📍", text: "City Center Mall - 5.0 km" },
      { icon: "📍", text: "NH-19 (Bypass) - 2.5 km" }
    ],
    amenities: [
      { icon: "🏞️", name: "Park" },
      { icon: "💡", name: "Street Lights" },
      { icon: "🚰", name: "Water Supply" },
      { icon: "🛡️", name: "Security" },
      { icon: "🏡", name: "Community Hall" },
      { icon: "🛣️", name: "Wide Roads" },
      { icon: "🏊", name: "Swimming Pool" },
      { icon: "🏋️", name: "Gymnasium" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=600&auto=format&fit=crop"
    ],
    investmentBenefits: [
      "Prime lakeside location with premium pricing potential.",
      "Expected 40% appreciation post-launch due to high demand.",
      "Upcoming IT hub connectivity driving property value.",
      "Limited edition plots with lake view commanding premium rates."
    ],
    pricing: [
      { size: "1200 sq.ft", price: "₹ 15.50 Lakhs" },
      { size: "1600 sq.ft", price: "₹ 20.80 Lakhs" },
      { size: "2000 sq.ft", price: "₹ 28.90 Lakhs" }
    ],
    progress: [
      { name: "Land Acquisition", status: "completed" },
      { name: "Layout Approval", status: "completed" },
      { name: "Road Development", status: "processing" },
      { name: "Club House Construction", status: "upcoming" },
      { name: "Project Launch", status: "upcoming" }
    ],
    faqs: [
      { question: "What is the initial booking amount?", answer: "The priority booking token amount for Lake View plots is ₹ 75,000 only." },
      { question: "Are bank loans available?", answer: "Yes, we have tie-ups with HDFC, ICICI, Axis Bank for home loans." },
      { question: "What is the registration process?", answer: "Registration will start within 30 days of project launch." },
      { question: "When will possession be delivered?", answer: "Expected possession by March 2029 with phased development." }
    ]
  }
];
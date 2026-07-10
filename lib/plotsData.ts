// lib/plotsData.ts

export interface Plot {
  id: string;
  plotNumber: string;
  plotName: string;
  projectName: string;
  location: string;
  plotSize: string;
  dimensions: string;
  facing: string;
  plotType: string;
  price?: string;
  bookingAmount?: string;
  emiAvailable: boolean;
  registrationCost?: string;
  status: 'Available' | 'Booked' | 'Sold' | 'Ready to Move';
  thumbnail: string;
  images: string[];
  videoUrls?: { id: number; title: string; url: string }[]; // 7 videos
  description: string;
  roadWidth: string;
  loanAvailable: boolean;
  documentation: string;
  fullAddress: string;
  googleMapEmbedUrl: string;
  nearbyLandmarks: string[];
  amenities: { icon: string; name: string }[];
  legalInfo: {
    mutationAvailable: boolean;
    registryAvailable: boolean;
    clearTitleDeed: boolean;
    approvedLayoutPlan: boolean;
  };
  connectivity: {
    airport: string;
    railwayStation: string;
    school: string;
    hospital: string;
    market: string;
  };
  investmentHighlights: string[];
  masterPlanImage: string;
  plotMapImage: string;
  highlightedPositionImage: string;
  developmentProgress: string[];
  nearbyImages: string[];
}

// ==================== ANANDAM RESIDENCY PLOT ====================
// ==================== ANANDAM RESIDENCY PLOT ====================
export const anandamResidencyPlot: Plot = {
  id: "anandam-residency-plot",
  plotNumber: "AR-001",
  plotName: "Anandam Residency Premium Plot",
  projectName: "Anandam Residency Asansol",
  location: "Asansol, West Bengal",
  plotSize: "2200 sq.ft",
  dimensions: "55 ft × 40 ft",
  facing: "West Facing",
  plotType: "Land / Plot",
  price: "", // No price displayed
  bookingAmount: "",
  emiAvailable: true,
  registrationCost: "",
  status: "Ready to Move",
  thumbnail: "/ianding_img-3.png",
  images: [
    "/plot/Anandam Residency-img1.jpeg",
    "/plot/Anandam Residency-img2.jpeg",
    "/plot/Anandam Residency-img3.jpeg",
    "/plot/Anandam Residency-img4.jpeg",
    "/plot/Anandam Residency-img5.jpeg",
    "/plot/Anandam Residency-img6.jpeg",
    "/plot/Anandam Residency-img7.jpeg",
    "/plot/Anandam Residency-img8.jpeg",
    "/plot/Anandam Residency-img9.jpeg"
  ],
  // ==================== 7 VIDEOS IN LIB ====================
  videoUrls: [
    {
      id: 1,
      title: 'Project Overview - Cinematic Walkthrough',
      url: '/plot/video-1.mp4'
    },
    {
      id: 2,
      title: 'Construction Progress - Site Development',
      url: '/plot/video-2.mp4'
    },
    // ... বাকি ভিডিওগুলো আপনার ইচ্ছামত যোগ করুন
  ],
  description: "An excellent ready-to-move residential plot located in the heart of Asansol. This premium plot offers a spacious 2200 sq.ft area with west facing direction. The property comes with complete legal documentation including deed, mutation, khajna, RTI, NOC, and a comprehensive 13 years searching report. Perfect for building your dream home or as a long-term investment with high appreciation potential.",
  roadWidth: "20 ft",
  loanAvailable: true,
  documentation: "Deed, Mutation, Khajna, RTI, NOC, 13 Years Searching Report",
  fullAddress: "Anandam Residency, Asansol, West Bengal",
  
  // ==================== UPDATED GOOGLE MAP EMBED URL ====================
  googleMapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117438!2d86.9536241!3d23.7384527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f721f559e35e0f%3A0x358aac98155b264b!2sAnandam%20Residency%20official%2C%20Asansol!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  
  nearbyLandmarks: [
    "Jubli Petrol Pump - Near Location",
    "Asansol Railway Station - 3.0 km",
    "NH19 Highway - 2.5 km",
    "City Center - 1.5 km"
  ],
  amenities: [
    { icon: "🛣️", name: "Wide Roads" },
    { icon: "💡", name: "Street Lights" },
    { icon: "🚰", name: "Water Supply" },
    { icon: "🛡️", name: "Security" },
    { icon: "🏞️", name: "Park Area" },
    { icon: "🚰", name: "Drainage" },
    { icon: "🏪", name: "Super Market" },
    { icon: "🏫", name: "School Nearby" }
  ],
  legalInfo: {
    mutationAvailable: true,
    registryAvailable: true,
    clearTitleDeed: true,
    approvedLayoutPlan: true
  },
  connectivity: {
    airport: "Kazi Nazrul Islam Airport - 25 km",
    railwayStation: "Asansol Junction - 3.0 km",
    school: "Delhi Public School - 1.5 km",
    hospital: "Multi-Specialty Hospital - 2.0 km",
    market: "Local Market - 0.8 km"
  },
  investmentHighlights: [
    "Prime location in Asansol with excellent connectivity",
    "Ready to move plot with complete documentation",
    "Clear legal title with 13 years searching report",
    "High appreciation potential in developing area",
    "Easy access to all civic amenities"
  ],
  masterPlanImage: "https://images.unsplash.com/photo-1524813686514-a57563d77d61?w=800&auto=format",
  plotMapImage: "https://images.unsplash.com/photo-1524813686514-a57563d77d61?w=800&auto=format",
  highlightedPositionImage: "https://images.unsplash.com/photo-1524813686514-a57563d77d61?w=800&auto=format",
  developmentProgress: [
    "Land Acquisition - Completed",
    "Layout Approval - Completed",
    "Infrastructure - Completed",
    "Ready for Construction"
  ],
  nearbyImages: [
    "https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=600&auto=format",
    "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=600&auto=format"
  ]
};

// ==================== HELPER FUNCTIONS ====================

// Get all plots (only the new plot)
export const getAllPlots = () => {
  return [anandamResidencyPlot];
};

// Get plots by category (for compatibility)
export const getPlotsByCategory = (category: string) => {
  return getAllPlots();
};
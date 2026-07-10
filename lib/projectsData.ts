// lib/projectsData.ts

export interface Project {
  id: string;
  name: string;
  location: string;
  type: string;
  price: string;
  ratePerSqft: string;
  size: string;
  description: string;
  status: string;
  thumbnail: string;
  images: string[];
  videoUrls: { id: number; title: string; url: string }[];
  mapEmbedUrl: string;
  amenities: string[];
  highlights: string[];
  nearbyLandmarks: string[];
  fullAddress: string;
}

export const projects: Project[] = [
  {
    id: "officers-campus",
    name: "Officer's Campus",
    location: "Anandam Developers, Asansol",
    type: "Premium Residential Plots",
    price: "₹ 80,000/- per Katha",
    ratePerSqft: "₹ 1,500/- per Sq.ft",
    size: "720 sq.ft (1 Katha)",
    description: "A Place of Prestige, Peace & Purpose. Welcome to a better lifestyle. Officer's Campus offers premium residential plots with modern amenities, excellent connectivity, and a secure environment for you and your family.",
    status: "Coming Soon",
    thumbnail: "/projects/img-1.jpeg",
    images: [
      "/projects/img-2.jpeg",
      "/projects/img-3.jpeg",
      "/projects/img-4.jpeg",
      "/projects/img-5.jpeg",
      "/projects/img-6.jpeg",
      "/projects/img-7.jpeg",
      "/projects/img-8.jpeg",
      "/projects/img-9.jpeg",
    ],
    videoUrls: [
      {
        id: 1,
        title: "Officer's Campus - Premium Living Destination",
        url: "/projects/video-1.mp4"
      },
      {
        id: 2,
        title: "Anandam Developers - Project Walkthrough",
        url: "https://assets.mixkit.co/videos/preview/mixkit-architectural-model-of-a-modern-house-backyard-42352-large.mp4"
      }
    ],
    // ✅ আপডেটেড ম্যাপ এম্বেড URL
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117438!2d86.9536241!3d23.7384527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f721f559e35e0f%3A0x358aac98155b264b!2sAnandam%20Residency%20official%2C%20Asansol!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    amenities: [
      "Wide Roads",
      "Street Lights",
      "Water Supply",
      "24/7 Security",
      "Park Area",
      "Drainage System",
      "School Nearby",
      "Super Market",
      "Hospital Access",
      "Public Transport"
    ],
    highlights: [
      "Premium gated community",
      "Clear title deeds with complete documentation",
      "Bank loan facility available",
      "Strategic location with excellent connectivity",
      "Modern infrastructure and amenities",
      "Eco-friendly green environment",
      "24/7 security surveillance",
      "Wide internal roads",
      "Nearby educational institutions and hospitals",
      "High appreciation potential"
    ],
    nearbyLandmarks: [
      "Asansol Railway Station - 3.0 km",
      "NH19 Highway - 2.5 km",
      "Delhi Public School - 1.5 km",
      "Multi-Specialty Hospital - 2.0 km",
      "City Center Mall - 1.8 km",
      "Jubli Petrol Pump - 0.5 km"
    ],
    fullAddress: "Anandam Developers, Officer's Campus, Asansol, West Bengal"
  }
];

// Helper function to get all projects
export const getAllProjects = () => {
  return projects;
};

// Helper function to get project by ID
export const getProjectById = (id: string) => {
  return projects.find((p) => p.id === id);
};
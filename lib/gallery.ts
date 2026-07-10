// lib/gallery-data.ts

export interface GalleryItem {
  id: string;
  title: string;
  type: 'image' | 'video';
  src: string;
  thumbnail?: string;
}

// 60 Images + 20 Videos = 80 Total Items
export const galleryItems: GalleryItem[] = [
  // ==================== 20 PROJECT IMAGES ====================
  {
    id: "img-proj-1",
    title: "Anandam Greens - Grand Entrance Arch & Security Hub",
    type: "image",
    src: "/gallery/img-1.jpeg"
  },
  {
    id: "img-proj-2",
    title: "Anandam City - Eco-Friendly Modern Green Park Layout",
    type: "image",
    src: "/gallery/img-2.jpeg"
  },
  {
    id: "img-proj-3",
    title: "Anandam Prima - Premium Boundary Wall Infrastructure",
    type: "image",
    src: "/gallery/img-3.jpeg"
  },
  {
    id: "img-proj-4",
    title: "Anandam Greens - Smart Security Checkpoint & Gate",
    type: "image",
    src: "/gallery/img-4.jpeg"
  },
  {
    id: "img-proj-5",
    title: "Anandam City - Commercial Zone Strategic Blueprint",
    type: "image",
    src: "/gallery/img-5.jpeg"
  },
  {
    id: "img-proj-6",
    title: "Anandam Prima - Elite Smart 60 Feet Avenue Road",
    type: "image",
    src: "/gallery/img-6.jpeg"
  },
  {
    id: "img-proj-7",
    title: "Anandam Greens - Lush Botanical Enclave & Walking Track",
    type: "image",
    src: "/gallery/img-7.png"
  },
  {
    id: "img-proj-8",
    title: "Anandam City - Childrens Smart Play Area",
    type: "image",
    src: "/gallery/img-8.jpeg"
  },
  {
    id: "img-proj-9",
    title: "Anandam Prima - High-Yield Plot Master Layout",
    type: "image",
    src: "/gallery/img-9.jpeg"
  },
  {
    id: "img-proj-10",
    title: "Anandam Greens - Underground Utility & Power Grid",
    type: "image",
    src: "/gallery/img-10.jpeg"
  },
  {
    id: "img-proj-11",
    title: "Anandam City - Central Plaza & Community Center",
    type: "image",
    src: "/gallery/img-11.jpeg"
  },
  {
    id: "img-proj-12",
    title: "Anandam Prima - Modern Club House Exterior View",
    type: "image",
    src: "/gallery/img-12.jpeg"
  },
  {
    id: "img-proj-13",
    title: "Anandam Greens - Landscaped Garden & Meditation Zone",
    type: "image",
    src: "/gallery/img-13.jpeg"
  },
  {
    id: "img-proj-14",
    title: "Anandam City - Wide Internal Road Network System",
    type: "image",
    src: "/gallery/img-14.jpeg"
  },
  {
    id: "img-proj-15",
    title: "Anandam Prima - Street Lighting Infrastructure",
    type: "image",
    src: "/gallery/img-15.jpeg"
  },
  {
    id: "img-proj-16",
    title: "Anandam Greens - Water Treatment Plant Facility",
    type: "image",
    src: "/gallery/img-16.jpeg"
  },
  {
    id: "img-proj-17",
    title: "Anandam City - Security Control Room Setup",
    type: "image",
    src: "/gallery/img-17.jpeg"
  },
  {
    id: "img-proj-18",
    title: "Anandam Prima - Jogging Track & Fitness Zone",
    type: "image",
    src: "/gallery/img-18.jpeg"
  },
  {
    id: "img-proj-19",
    title: "Anandam Greens - Rainwater Harvesting System",
    type: "image",
    src: "/gallery/img-19.jpeg"
  },
  {
    id: "img-proj-20",
    title: "Anandam City - Waste Management Facility",
    type: "image",
    src: "/gallery/img-20.jpeg"
  },

  // ==================== 20 SITE IMAGES ====================
  {
    id: "img-site-1",
    title: "Site Development - Heavy Machinery Road Levelling Progress",
    type: "image",
    src: "/gallery/img-21.jpeg"
  },
  {
    id: "img-site-2",
    title: "Site Infrastructure - Advanced Concrete Drainage System",
    type: "image",
    src: "/gallery/img-22.jpeg"
  },
  {
    id: "img-site-3",
    title: "On-Site Progress - Smart LED Street Light Pole Installation",
    type: "image",
    src: "/gallery/img-23.jpeg"
  },
  {
    id: "img-site-4",
    title: "Site Security - 24/7 CCTV Monitoring Station Base",
    type: "image",
    src: "/gallery/img-24.jpeg"
  },
  {
    id: "img-site-5",
    title: "Water Management - Mega Overhead Water Tank Structure",
    type: "image",
    src: "/gallery/img-25.jpeg"
  },
  {
    id: "img-site-6",
    title: "Green Zone - Live Tree Plantation Drive Site View",
    type: "image",
    src: "/gallery/img-26.jpeg"
  },
  {
    id: "img-site-7",
    title: "Anandam City Site - Main Gate Pillars Concrete Casting",
    type: "image",
    src: "/gallery/img-27.jpeg"
  },
  {
    id: "img-site-8",
    title: "Anandam Prima Site - High-Voltage Electrification Grid",
    type: "image",
    src: "/gallery/img-28.jpeg"
  },
  {
    id: "img-site-9",
    title: "Plot Demarcation - Precise Stone Boundary Alignment",
    type: "image",
    src: "/gallery/img-29.jpeg"
  },
  {
    id: "img-site-10",
    title: "Visitor Lounge - Ready On-Site Customer Office",
    type: "image",
    src: "/gallery/img-30.jpeg"
  },
  {
    id: "img-site-11",
    title: "Site - Excavation Work for Foundation Area",
    type: "image",
    src: "/gallery/img-31.jpeg"
  },
  {
    id: "img-site-12",
    title: "Site - Material Storage & Management Zone",
    type: "image",
    src: "/gallery/img-32.jpeg"
  },
  {
    id: "img-site-13",
    title: "Site - Labor Quarters & Facility Setup Area",
    type: "image",
    src: "/gallery/img-33.jpeg"
  },
  {
    id: "img-site-14",
    title: "Site - Quality Control Inspection Process",
    type: "image",
    src: "/gallery/img-34.jpeg"
  },
  {
    id: "img-site-15",
    title: "Site - Heavy Equipment Operations Documentation",
    type: "image",
    src: "/gallery/img-35.jpeg"
  },
  {
    id: "img-site-16",
    title: "Site - Concrete Mixing Plant Setup View",
    type: "image",
    src: "/gallery/img-36.jpeg"
  },
  {
    id: "img-site-17",
    title: "Site - Rebar Placement & Binding Work Progress",
    type: "image",
    src: "/gallery/img-37.jpeg"
  },
  {
    id: "img-site-18",
    title: "Site - Formwork Installation Process Flow",
    type: "image",
    src: "/gallery/img-38.jpeg"
  },
  {
    id: "img-site-19",
    title: "Site - Soil Testing Laboratory Setup Area",
    type: "image",
    src: "/gallery/img-39.jpeg"
  },
  {
    id: "img-site-20",
    title: "Site - Survey & Measurement Activities Record",
    type: "image",
    src: "/gallery/img-40.jpeg"
  },

  // ==================== 20 DRONE IMAGES ====================
  {
    id: "img-drone-1",
    title: "Drone View - Complete 50+ Acres Township Grid Aerial Layout",
    type: "image",
    src: "/gallery/img-41.jpeg"
  },
  {
    id: "img-drone-2",
    title: "Drone Perspective - Tactical Proximity to National Highway",
    type: "image",
    src: "/gallery/img-42.jpeg"
  },
  {
    id: "img-drone-3",
    title: "Aerial Panorama - Surrounding Green Canopy Protection",
    type: "image",
    src: "/gallery/img-43.jpeg"
  },
  {
    id: "img-drone-4",
    title: "Drone Capture - Phase 1 Plot Allocation Ready Outer Ring",
    type: "image",
    src: "/gallery/img-44.jpeg"
  },
  {
    id: "img-drone-5",
    title: "Drone View - Mega Boundary Wall Securing Perimeter",
    type: "image",
    src: "/gallery/img-45.jpeg"
  },
  {
    id: "img-drone-6",
    title: "Aerial Shot - Central Smart Park & Lake Intersection",
    type: "image",
    src: "/gallery/img-46.jpeg"
  },
  {
    id: "img-drone-7",
    title: "Drone Perspective - Future Commercial Hub Plot Area",
    type: "image",
    src: "/gallery/img-47.jpeg"
  },
  {
    id: "img-drone-8",
    title: "Top-Down View - Completed Internal Paver Block Roads",
    type: "image",
    src: "/gallery/img-48.jpeg"
  },
  {
    id: "img-drone-9",
    title: "Drone Mapping - Precise Topographic Survey Grid",
    type: "image",
    src: "/gallery/img-49.jpeg"
  },
  {
    id: "img-drone-10",
    title: "Sunset Aerial View - Vibrant Premium Smart Township",
    type: "image",
    src: "/gallery/img-50.jpeg"
  },
  {
    id: "img-drone-11",
    title: "Drone - Full Master Plan Layout Visualization",
    type: "image",
    src: "/gallery/img-21.jpeg"
  },
  {
    id: "img-drone-12",
    title: "Drone - Sector Wise Plot Division Overview",
    type: "image",
    src: "/gallery/img-52.jpeg"
  },
  {
    id: "img-drone-13",
    title: "Drone - Green Belt & Open Space Distribution",
    type: "image",
    src: "/gallery/img-53.jpeg"
  },
  {
    id: "img-drone-14",
    title: "Drone - Road Network & Connectivity Mapping",
    type: "image",
    src: "/gallery/img-54.jpeg"
  },
  {
    id: "img-drone-15",
    title: "Drone - Utility Corridor & Service Lane Layout",
    type: "image",
    src: "/gallery/img-55.jpeg"
  },
  {
    id: "img-drone-16",
    title: "Drone - Storm Water Drainage System Planning",
    type: "image",
    src: "/gallery/img-56.jpeg"
  },
  {
    id: "img-drone-17",
    title: "Drone - Electrical Substation & Distribution Grid",
    type: "image",
    src: "/gallery/img-57.jpeg"
  },
  {
    id: "img-drone-18",
    title: "Drone - Water Supply Network Infrastructure",
    type: "image",
    src: "/gallery/img-58.jpeg"
  },
  {
    id: "img-drone-19",
    title: "Drone - Street Light Pole Positioning Layout",
    type: "image",
    src: "/gallery/img-59.jpeg"
  },
  // {
  //   id: "img-drone-20",
  //   title: "Drone - Overall Project Completion Status",
  //   type: "image",
  //   src: "/gallery/img-60.jpeg"
  // },

  // ==================== 20 VIDEOS ====================
  // {
  //   id: "vid-1",
  //   title: "Cinematic Project Walkthrough - Premium Phase 1 Virtual Tour",
  //   type: "video",
  //   src: "https://assets.mixkit.co/videos/preview/mixkit-architectural-model-of-a-modern-house-backyard-42352-large.mp4",
  //   thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop"
  // },
  // {
  //   id: "vid-2",
  //   title: "On-Site Construction Progress - Heavy Machinery Operation",
  //   type: "video",
  //   src: "https://assets.mixkit.co/videos/preview/mixkit-construction-site-with-excavator-and-builders-41617-large.mp4",
  //   thumbnail: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop"
  // },
  // {
  //   id: "vid-3",
  //   title: "4K Drone Aerial Survey - Complete Township Overview",
  //   type: "video",
  //   src: "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-metropolitan-city-with-skyscrapers-41710-large.mp4",
  //   thumbnail: "https://images.unsplash.com/photo-1508849789987-4e5333c12b78?w=800&h=600&fit=crop"
  // },
  // {
  //   id: "vid-4",
  //   title: "Premium Residential Plot Layout - Phase 2 Walkthrough",
  //   type: "video",
  //   src: "https://assets.mixkit.co/videos/preview/mixkit-architectural-model-of-a-modern-house-backyard-42352-large.mp4",
  //   thumbnail: "https://images.unsplash.com/photo-1600573472550-8087b3e24453?w=800&h=600&fit=crop"
  // },
  // {
  //   id: "vid-5",
  //   title: "Site Development - Road Construction & Paving Work",
  //   type: "video",
  //   src: "https://assets.mixkit.co/videos/preview/mixkit-construction-site-with-excavator-and-builders-41617-large.mp4",
  //   thumbnail: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop"
  // },
  // {
  //   id: "vid-6",
  //   title: "Drone Mapping - Sector Wise Plot Division",
  //   type: "video",
  //   src: "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-metropolitan-city-with-skyscrapers-41710-large.mp4",
  //   thumbnail: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop"
  // },
  // {
  //   id: "vid-7",
  //   title: "Modern Club House & Community Center Tour",
  //   type: "video",
  //   src: "https://assets.mixkit.co/videos/preview/mixkit-architectural-model-of-a-modern-house-backyard-42352-large.mp4",
  //   thumbnail: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop"
  // },
  // {
  //   id: "vid-8",
  //   title: "Security Infrastructure - CCTV & Gate Installation",
  //   type: "video",
  //   src: "https://assets.mixkit.co/videos/preview/mixkit-construction-site-with-excavator-and-builders-41617-large.mp4",
  //   thumbnail: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?w=800&h=600&fit=crop"
  // },
  // {
  //   id: "vid-9",
  //   title: "Aerial View - Green Belt & Open Space Distribution",
  //   type: "video",
  //   src: "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-metropolitan-city-with-skyscrapers-41710-large.mp4",
  //   thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop"
  // },
  // {
  //   id: "vid-10",
  //   title: "Landscaped Garden & Walking Track Preview",
  //   type: "video",
  //   src: "https://assets.mixkit.co/videos/preview/mixkit-architectural-model-of-a-modern-house-backyard-42352-large.mp4",
  //   thumbnail: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&h=600&fit=crop"
  // },
  // {
  //   id: "vid-11",
  //   title: "Underground Utility & Power Grid Installation",
  //   type: "video",
  //   src: "https://assets.mixkit.co/videos/preview/mixkit-construction-site-with-excavator-and-builders-41617-large.mp4",
  //   thumbnail: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&h=600&fit=crop"
  // },
  // {
  //   id: "vid-12",
  //   title: "Commercial Hub & Business District Drone View",
  //   type: "video",
  //   src: "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-metropolitan-city-with-skyscrapers-41710-large.mp4",
  //   thumbnail: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop"
  // },
  // {
  //   id: "vid-13",
  //   title: "Children's Smart Play Area & Recreation Zone",
  //   type: "video",
  //   src: "https://assets.mixkit.co/videos/preview/mixkit-architectural-model-of-a-modern-house-backyard-42352-large.mp4",
  //   thumbnail: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&h=600&fit=crop"
  // },
  // {
  //   id: "vid-14",
  //   title: "Street Lighting & Electrification Work Progress",
  //   type: "video",
  //   src: "https://assets.mixkit.co/videos/preview/mixkit-construction-site-with-excavator-and-builders-41617-large.mp4",
  //   thumbnail: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop"
  // },
  // {
  //   id: "vid-15",
  //   title: "Premium Township - Sunset Aerial Cinematic View",
  //   type: "video",
  //   src: "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-metropolitan-city-with-skyscrapers-41710-large.mp4",
  //   thumbnail: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=800&h=600&fit=crop"
  // },
  // {
  //   id: "vid-16",
  //   title: "Water Supply & Drainage System Infrastructure",
  //   type: "video",
  //   src: "https://assets.mixkit.co/videos/preview/mixkit-construction-site-with-excavator-and-builders-41617-large.mp4",
  //   thumbnail: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop"
  // },
  // {
  //   id: "vid-17",
  //   title: "Smart Township - Complete Master Plan Visualization",
  //   type: "video",
  //   src: "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-metropolitan-city-with-skyscrapers-41710-large.mp4",
  //   thumbnail: "https://images.unsplash.com/photo-1524813686514-a57563d77d61?w=800&h=600&fit=crop"
  // },
  // {
  //   id: "vid-18",
  //   title: "Jogging Track & Fitness Zone Development",
  //   type: "video",
  //   src: "https://assets.mixkit.co/videos/preview/mixkit-architectural-model-of-a-modern-house-backyard-42352-large.mp4",
  //   thumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
  // },
  // {
  //   id: "vid-19",
  //   title: "Boundary Wall & Security Perimeter Construction",
  //   type: "video",
  //   src: "https://assets.mixkit.co/videos/preview/mixkit-construction-site-with-excavator-and-builders-41617-large.mp4",
  //   thumbnail: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&h=600&fit=crop"
  // },
  // {
  //   id: "vid-20",
  //   title: "Road Network & Internal Paver Block Systems",
  //   type: "video",
  //   src: "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-metropolitan-city-with-skyscrapers-41710-large.mp4",
  //   thumbnail: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&h=600&fit=crop"
  // }
];

// Helper functions
export const getAllGalleryItems = () => galleryItems;
export const getImagesOnly = () => galleryItems.filter(item => item.type === 'image');
export const getVideosOnly = () => galleryItems.filter(item => item.type === 'video');
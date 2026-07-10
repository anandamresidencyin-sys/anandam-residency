'use client';

import { 
  Building2, Lightbulb, Droplets, Waves, Accessibility, 
  Shield, Trees, Radio, Users, Wind, Utensils, 
  Wifi, Dumbbell, Sparkles, Globe, Home, 
  Car, Bike, Coffee, Music, Sun, Moon, Star,
  Cloud, Heart, Smile, Award, Crown, Flower,
  Leaf, Mountain, Compass, Camera, PenTool
} from 'lucide-react';

interface Amenity {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  bgColor: string;
  gradient: string;
}

export function AmenitiesSection() {
  const amenities: Amenity[] = [
    {
      icon: <Building2 className="w-6 h-6" strokeWidth={1.8} />,
      title: 'Wide Roads',
      description: 'Spacious and well-designed roads for smooth traffic flow.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      gradient: 'from-blue-50 to-blue-100'
    },
    {
      icon: <Lightbulb className="w-6 h-6" strokeWidth={1.8} />,
      title: 'Street Lights',
      description: 'Bright street lighting for safety and security across the property.',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      gradient: 'from-yellow-50 to-yellow-100'
    },
    {
      icon: <Droplets className="w-6 h-6" strokeWidth={1.8} />,
      title: 'Water Supply',
      description: 'Pure, treated, and continuous water supply available 24/7.',
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-50',
      gradient: 'from-cyan-50 to-cyan-100'
    },
    {
      icon: <Waves className="w-6 h-6" strokeWidth={1.8} />,
      title: 'Drainage System',
      description: 'Modern, underground drainage system for proper water management.',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      gradient: 'from-indigo-50 to-indigo-100'
    },
    {
      icon: <Accessibility className="w-6 h-6" strokeWidth={1.8} />,
      title: "Children's Park",
      description: 'Safe play area for children with beautifully integrated recreational facilities.',
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
      gradient: 'from-pink-50 to-pink-100'
    },
    {
      icon: <Shield className="w-6 h-6" strokeWidth={1.8} />,
      title: '24/7 Security',
      description: '24/7 security layer with smart CCTV surveillance network.',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      gradient: 'from-red-50 to-red-100'
    },
    {
      icon: <Trees className="w-6 h-6" strokeWidth={1.8} />,
      title: 'Green Zone',
      description: 'Landscaped premium gardens and green pockets for a healthy living lifestyle.',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      gradient: 'from-emerald-50 to-emerald-100'
    },
    {
      icon: <Radio className="w-6 h-6" strokeWidth={1.8} />,
      title: 'Community Center',
      description: 'Elegant community clubhouse built for social gatherings and premium events.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      gradient: 'from-purple-50 to-purple-100'
    },
    {
      icon: <Users className="w-6 h-6" strokeWidth={1.8} />,
      title: 'Community Hall',
      description: 'Spacious hall for events, celebrations, and community gatherings.',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      gradient: 'from-orange-50 to-orange-100'
    },
    {
      icon: <Wind className="w-6 h-6" strokeWidth={1.8} />,
      title: 'Open Space',
      description: 'Breathable open spaces with landscaped gardens and walking paths.',
      color: 'text-teal-600',
      bgColor: 'bg-teal-50',
      gradient: 'from-teal-50 to-teal-100'
    },
    {
      icon: <Utensils className="w-6 h-6" strokeWidth={1.8} />,
      title: 'Restaurant & Cafe',
      description: 'Fine dining and casual cafe options within the community.',
      color: 'text-rose-600',
      bgColor: 'bg-rose-50',
      gradient: 'from-rose-50 to-rose-100'
    },
    {
      icon: <Dumbbell className="w-6 h-6" strokeWidth={1.8} />,
      title: 'Fitness Center',
      description: 'Modern gymnasium with state-of-the-art equipment and trainers.',
      color: 'text-amber-600',
      bgColor: 'bg-amber-50',
      gradient: 'from-amber-50 to-amber-100'
    },
    {
      icon: <Car className="w-6 h-6" strokeWidth={1.8} />,
      title: 'Ample Parking',
      description: 'Dedicated parking space for residents and visitors with security.',
      color: 'text-slate-600',
      bgColor: 'bg-slate-50',
      gradient: 'from-slate-50 to-slate-100'
    },
    {
      icon: <Bike className="w-6 h-6" strokeWidth={1.8} />,
      title: 'Cycling Tracks',
      description: 'Dedicated cycling and walking tracks for fitness enthusiasts.',
      color: 'text-lime-600',
      bgColor: 'bg-lime-50',
      gradient: 'from-lime-50 to-lime-100'
    },
    {
      icon: <Coffee className="w-6 h-6" strokeWidth={1.8} />,
      title: 'Coffee Shop',
      description: 'Cozy coffee shop for morning refreshments and socializing.',
      color: 'text-amber-700',
      bgColor: 'bg-amber-50/80',
      gradient: 'from-amber-50 to-amber-100'
    },
    {
      icon: <Music className="w-6 h-6" strokeWidth={1.8} />,
      title: 'Entertainment Zone',
      description: 'Dedicated entertainment area with music and recreational activities.',
      color: 'text-violet-600',
      bgColor: 'bg-violet-50',
      gradient: 'from-violet-50 to-violet-100'
    }
  ];

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-b from-white via-gray-50/30 to-white overflow-hidden">
      
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 sm:w-72 md:w-80 h-64 sm:h-72 md:h-80 bg-gradient-to-r from-[#79c223]/5 to-[#0B3A99]/5 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-20 left-10 w-64 sm:w-72 md:w-80 h-64 sm:h-72 md:h-80 bg-gradient-to-r from-[#0B3A99]/5 to-[#79c223]/5 rounded-full blur-[100px] animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header - Responsive */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#79c223]/10 to-[#0B3A99]/10 border border-[#79c223]/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4 shadow-sm">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-[#79c223]" />
            <span className="text-[#68a61e] font-extrabold text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.2em]">
              Premium Facilities
            </span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#0B3A99] tracking-tight leading-tight mb-3 sm:mb-4 px-2">
            World Class <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#79c223] to-emerald-500">Amenities</span>
          </h2>
          
          <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-[#79c223] to-emerald-500 mx-auto rounded-full mb-3 sm:mb-4" />
          
          <p className="text-gray-500 font-medium text-xs sm:text-sm md:text-base leading-relaxed px-4">
            Experience premium living with our comprehensive amenities and top-notch modern infrastructure designed for your perfect lifestyle.
          </p>
        </div>

        {/* Amenities Grid - Fully Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-gray-100/80 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 active:-translate-y-1 overflow-hidden`}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${amenity.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Icon Container with Color */}
              <div className={`relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 ${amenity.bgColor} rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 md:mb-5 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${amenity.color}`}>
                {amenity.icon}
              </div>

              {/* Title - Responsive */}
              <h3 className={`relative text-sm sm:text-base md:text-lg font-bold ${amenity.color} group-hover:text-[#0B3A99] transition-colors duration-300`}>
                {amenity.title}
              </h3>
              
              {/* Description - Responsive */}
              <p className="relative text-gray-500 text-[11px] sm:text-xs md:text-sm leading-relaxed mt-1.5 sm:mt-2 group-hover:text-gray-600 transition-colors duration-300">
                {amenity.description}
              </p>

              {/* Bottom Accent Line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 ${amenity.color} bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left`} />
              
              {/* Top Right Decorative Dot */}
              <div className={`absolute top-2 sm:top-3 right-2 sm:right-3 w-1.5 sm:w-2 h-1.5 sm:h-2 ${amenity.bgColor} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            </div>
          ))}
        </div>

        {/* Bottom CTA - Responsive */}
        <div className="text-center mt-10 sm:mt-12 md:mt-16">
          <div className="inline-block bg-gradient-to-r from-[#0B3A99] to-[#062466] rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-xl">
            <h3 className="text-white text-sm sm:text-base md:text-lg font-black mb-1 sm:mb-2">
              Ready to Experience Premium Living?
            </h3>
            <p className="text-blue-200 text-xs sm:text-sm mb-3 sm:mb-4">
              Schedule a site visit and explore our world-class amenities
            </p>
            <a
              href="/book-visit"
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#79c223] hover:bg-green-600 text-black font-black text-[10px] sm:text-xs uppercase tracking-wider rounded-lg sm:rounded-xl transition-all hover:scale-105 shadow-lg"
            >
              Book Site Visit
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
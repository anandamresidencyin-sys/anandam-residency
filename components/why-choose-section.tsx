'use client';

import { Shield, FileCheck, Percent, Zap, TreePine, Home, MapPin, Building2, CheckCircle, Sparkles } from 'lucide-react';
import Image from 'next/image';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  tag: string;
}

export function WhyChooseSection() {
  const features: Feature[] = [
    {
      icon: <Home className="w-6 h-6 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" />,
      title: 'Prime Locations',
      description: 'Strategically located near airports, railways, and commercial centers for seamless access.',
      tag: '01'
    },
    {
      icon: <FileCheck className="w-6 h-6 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" />,
      title: 'Clear Documents',
      description: '100% verified and legally secure title deeds with a completely transparent process.',
      tag: '02'
    },
    {
      icon: <Percent className="w-6 h-6 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" />,
      title: 'Bank Loan Facility',
      description: 'Easy financing options backed by major banks with up to 80% loan approval support.',
      tag: '03'
    },
    {
      icon: <Zap className="w-6 h-6 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" />,
      title: 'Wide Roads',
      description: 'Expansive planned internal roads and robust infrastructure for smooth layout navigation.',
      tag: '04'
    },
    {
      icon: <TreePine className="w-6 h-6 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" />,
      title: 'Green Environment',
      description: 'Eco-friendly green zones and beautifully landscaped pockets for healthy lifestyle living.',
      tag: '05'
    },
    {
      icon: <Shield className="w-6 h-6 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" />,
      title: '24/7 Security',
      description: 'Secure gated township layer with round-the-clock smart surveillance networks.',
      tag: '06'
    },
  ];

  // Background image for the section
  const bgImage = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80';

  return (
    <section className="relative py-24 overflow-hidden">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt="Why Choose Anandam Residency"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B3A99]/30 to-[#79c223]/30 mix-blend-overlay" />
        
        {/* Decorative Glow Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#79c223]/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#0B3A99]/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#79c223]/10 rounded-full blur-[100px] pointer-events-none" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-5 shadow-sm">
            <Sparkles size={14} className="text-[#79c223]" />
            <span className="text-white font-extrabold text-xs uppercase tracking-[0.25em]">
              Our Unmatched Strengths
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-6">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#79c223] to-emerald-400">Anandam Residency</span>?
          </h2>
          
          <div className="w-20 h-1 bg-gradient-to-r from-[#79c223] to-emerald-400 mx-auto rounded-full mb-6" />
          
          <p className="text-gray-300 font-medium text-base md:text-lg leading-relaxed px-4">
            We are committed to providing premium residential solutions with exceptional customer service, 
            uncompromised infrastructure quality, and absolute transparency.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden bg-white/10 backdrop-blur-md border border-white/10 hover:border-[#79c223] shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/20"
            >
              {/* Inner Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* Content */}
              <div className="relative p-6 md:p-8">
                {/* Tag Badge */}
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#79c223]/20 backdrop-blur-md border border-[#79c223]/30 text-[#79c223] font-black text-sm group-hover:scale-110 transition-transform">
                    {feature.tag}
                  </span>
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-[#79c223]/20 backdrop-blur-md border border-[#79c223]/30 flex items-center justify-center text-[#79c223] mb-5 group-hover:scale-110 group-hover:bg-[#79c223]/30 transition-all duration-500">
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-black text-white mb-3 group-hover:text-[#79c223] transition-colors">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
                  {feature.description}
                </p>

                {/* Bottom Accent Line */}
                <div className="mt-4 w-12 h-1 bg-[#79c223] rounded-full group-hover:w-full transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>

    
      </div>
    </section>
  );
}
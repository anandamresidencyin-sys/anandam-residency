'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import Image from 'next/image';

export function AchievementsSection() {
  // 10 unique achievements with valid image URLs (using Unsplash for reliable display)
  const baseAchievements = [
    // { id: 1, img: '/achievements/img-1.jpeg', title: 'Best Premium Township', year: '2024' },
    { id: 2, img: '/achievements/img-2.jpeg', title: 'Clear Title Deed Trust', year: '2023' },
    { id: 3, img: '/achievements/img-3.jpeg', title: 'Connectivity Excellence', year: '2025' },
    { id: 4, img: '/achievements/img-4.jpeg', title: 'RERA Approved Project', year: '2022' },
    { id: 5, img: '/achievements/img-5.jpeg', title: 'Customer Delight Award', year: '2024' },
    { id: 6, img: '/achievements/img-6.jpeg', title: 'Eco-Friendly Layout Build', year: '2023' },
    { id: 7, img: '/achievements/img-7.jpeg', title: 'Top Tier Plot Developer', year: '2025' },
    { id: 8, img: '/achievements/img-8.jpeg', title: 'Fastest ROI Appreciation', year: '2024' },
    { id: 9, img: '/achievements/img-9.jpeg', title: 'Elite Infrastructure Layout', year: '2023' },
    { id: 10, img: '/achievements/img-10.jpeg', title: 'Secured Investment Honour', year: '2022' },
  ];

  // Dynamically generating exactly 100 images for the track from the template items
  const totalTargetCount = 100;
  const hundredAchievements = Array.from({ length: totalTargetCount }, (_, index) => {
    const templateItem = baseAchievements[index % baseAchievements.length];
    return {
      ...templateItem,
      uniqueId: `achieve-${index}`,
      title: `${templateItem.title}${Math.floor(index / baseAchievements.length) >= 1 ? ` - Phase ${Math.floor(index / baseAchievements.length) + 1}` : ''}`,
    };
  });

  // Doubling the array to ensure an absolute gapless infinite loop track
  const duplicatedAchievements = [...hundredAchievements, ...hundredAchievements];

  return (
    <section className="relative py-28 bg-[#030914] overflow-hidden">
      
      {/* Premium Ambient Light Rays for Glossy Dark-Mode Effect */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#0B3A99]/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#79c223]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Prominent High-Contrast Box-Box Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#0B3A99]/20 to-[#79c223]/10 border border-white/10 backdrop-blur-md shadow-inner"
          >
            <Sparkles size={12} className="text-[#79c223] animate-pulse" />
            <span className="text-white font-mono font-bold text-[10px] tracking-[0.25em] uppercase">
              Corporate Milestones
            </span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Our Legacy of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#79c223] to-emerald-400">Achievements</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm font-medium max-w-xl mx-auto leading-relaxed">
            A concrete reflection of our transparent processing, clear asset documentation, and top-tier customer reliability.
          </p>
        </div>

      </div>

      {/* Infinite Horizontal Marquee Ticker Slider Track (Right to Left) */}
      <div className="relative flex w-full items-center bg-gradient-to-r from-transparent via-white/[0.01] to-transparent py-14 border-y border-white/[0.06] backdrop-blur-sm">
        
        {/* Soft Feathered Side Cover Blurs for Luxury Gradient Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-64 bg-gradient-to-r from-[#030914] via-[#030914]/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-64 bg-gradient-to-l from-[#030914] via-[#030914]/80 to-transparent z-10 pointer-events-none" />

        {/* Continuous Autoscroll Engine - Fast Movement */}
        <motion.div
          className="flex gap-10 whitespace-nowrap min-w-full"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            ease: 'linear',
            duration: 12,
            repeat: Infinity,
          }}
        >
          {duplicatedAchievements.map((item, idx) => (
            <div
              key={`${item.uniqueId}-${idx}`}
              className="relative flex-shrink-0 w-80 sm:w-[440px] h-72 sm:h-[380px] bg-slate-900/40 border border-white/[0.08] rounded-2xl overflow-hidden group shadow-[0_16px_50px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-white/20"
            >
              {/* Image Container - Using Next.js Image for better performance */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover opacity-70 group-hover:opacity-95 group-hover:scale-[1.02] transition-all duration-700"
                loading="lazy"
              />
              
              {/* Luxury Smooth Ambient Masking Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-95 group-hover:opacity-100 transition-opacity" />
              
              {/* Card Content: Title and Year */}
              <div className="absolute bottom-6 left-6 right-6 space-y-2 transform group-hover:translate-y-[-4px] transition-transform duration-300">
                <span className="text-[#79c223] font-mono text-[10px] font-bold tracking-wider uppercase block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Verified Honour
                </span>
                <p className="text-base sm:text-2xl font-black tracking-wide text-white whitespace-normal leading-snug drop-shadow-md">
                  {item.title}
                </p>
                <p className="text-xs sm:text-sm text-[#79c223] font-mono font-bold tracking-wider">
                  Received in: {item.year}
                </p>
              </div>

              {/* Glossy Top Glass Shine Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Maximize2, X, Download, ShieldCheck, MapPin, Trees, Key, ZoomIn } from 'lucide-react';
import Image from 'next/image';

export function MasterPlan() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const planFeatures = [
    {
      icon: <Trees className="text-[#6bb31e] group-hover/item:text-white transition-colors duration-300" size={22} />,
      title: '30% Open Green Space',
      desc: 'Lush themed gardens, jogging tracks, and pristine natural water bodies within the community.'
    },
    {
      icon: <MapPin className="text-[#6bb31e] group-hover/item:text-white transition-colors duration-300" size={22} />,
      title: 'Strategic Zoning Layout',
      desc: 'Perfect segregation of premium residential plots, parks, and lifestyle retail zones.'
    },
    {
      icon: <ShieldCheck className="text-[#6bb31e] group-hover/item:text-white transition-colors duration-300" size={22} />,
      title: 'Smart Gated Security',
      desc: '3-tier security network infrastructure with strictly monitored single entry-exit routing.'
    },
    // {
    //   icon: <Key className="text-[#6bb31e] group-hover/item:text-white transition-colors duration-300" size={22} />,
    //   title: 'RERA Approved Compliance',
    //   desc: 'Fully vetted infrastructural layout with wide concrete roads and modern systematic drainage.'
    // }
  ];

  // Floating Orbs Particles Configuration for Background Motion
  const floatingBalls = [
    { size: 'w-32 h-32', color: 'bg-emerald-400/20', x: [-40, 100, -40], y: [0, 180, 0], delay: 0 },
    { size: 'w-48 h-48', color: 'bg-blue-400/15', x: [200, -50, 200], y: [100, -60, 100], delay: 2 },
    { size: 'w-40 h-40', color: 'bg-[#79c223]/20', x: [50, 400, 50], y: [300, 50, 300], delay: 4 },
    { size: 'w-24 h-24', color: 'bg-indigo-400/15', x: [300, 100, 300], y: [-20, 250, -20], delay: 1 }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } }
  };

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      
      {/* Floating Orbs Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {floatingBalls.map((ball, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full blur-2xl ${ball.size} ${ball.color}`}
            animate={{
              x: ball.x,
              y: ball.y
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'linear',
              delay: ball.delay
            }}
          />
        ))}
      </div>
      
      {/* Structural Thin Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm"
          >
            <Sparkles size={12} className="text-[#6bb31e] animate-pulse" />
            <span className="text-gray-600 font-mono font-bold text-[9px] sm:text-[10px] tracking-[0.2em] uppercase">
              Architectural Layout
            </span>
          </motion.div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-gray-900 leading-tight px-4">
            Anandam Residency <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6bb31e] to-emerald-600">
              Master Plan Blueprint
            </span>
          </h2>
          
          <p className="text-gray-500 text-xs sm:text-sm font-medium max-w-xl mx-auto leading-relaxed px-4">
            Explore our state-of-the-art residential structural blueprint designed for elite sustainable plotting and superior lifestyle layouts.
          </p>
        </div>

        {/* Core Grid Platform */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Canvas Frame: Map Viewport */}
          <motion.div 
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 group relative"
          >
            <div className="relative bg-white border border-gray-200 rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="relative h-[280px] sm:h-[350px] md:h-[400px] lg:h-[450px] w-full rounded-xl sm:rounded-2xl overflow-hidden bg-gray-100">
                {/* Master Plan Image */}
                <img
                  src="/master-plan-img.png"
                  alt="Anandam Residency Master Plan"
                  className="w-full h-full object-contain object-center transition-transform duration-700 group-hover:scale-[1.02]"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1504297050568-910d24c426d3?w=1200&q=80';
                  }}
                />
                
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-100/30 via-transparent to-transparent pointer-events-none" />

                {/* View Full Button */}
                <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-20">
                  <button
                    onClick={() => setIsLightboxOpen(true)}
                    className="flex items-center gap-1.5 px-3 sm:px-4 py-2 sm:py-2.5 bg-gray-900 hover:bg-[#6bb31e] text-white font-mono text-[10px] sm:text-[11px] font-bold rounded-xl transition-all duration-300 shadow-md active:scale-95 group/btn"
                  >
                    <ZoomIn size={14} className="group-hover/btn:scale-110 transition-transform" />
                    <span>VIEW FULL PLAN</span>
                  </button>
                </div>
              </div>
              
              {/* Shine Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none rounded-2xl sm:rounded-3xl" />
            </div>
          </motion.div>

          {/* Right Column: Feature Cards */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6 sm:space-y-8"
          >
            <div className="space-y-2 sm:space-y-3">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black tracking-wide text-gray-900">
                Engineered for High ROI & Comfort
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-medium">
                Every sector of the Anandam layout is meticulously optimized for spatial advantage, smooth internal transit corridors, and green environmental integration.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="space-y-4 sm:space-y-5">
              {planFeatures.map((feature, idx) => (
                <motion.div 
                  key={idx} 
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  className="flex gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white border border-gray-200 shadow-sm hover:border-[#6bb31e] hover:shadow-lg transition-all duration-300 group/item"
                >
                  {/* Icon Container */}
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#79c223]/10 border border-[#79c223]/30 flex items-center justify-center group-hover/item:bg-[#6bb31e] transition-all duration-300">
                    {feature.icon}
                  </div>
                  
                  {/* Text Content */}
                  <div className="space-y-1">
                    <h4 className="text-sm sm:text-base font-extrabold text-gray-900 tracking-wide group-hover/item:text-[#6bb31e] transition-colors duration-200">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-xs sm:text-[13px] font-medium leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Download Brochure Button - FIXED: removed sm:size */}
            <motion.div variants={itemVariants} className="pt-2 sm:pt-4">
              <a 
                href="/DOWNLOAD ARCHITECTURAL.pdf" 
                download
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-[#79c223] to-emerald-500 hover:from-emerald-500 hover:to-[#79c223] text-white font-mono font-bold text-[10px] sm:text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 w-full sm:w-auto justify-center"
              >
                <Download size={15} />
                <span>DOWNLOAD ARCHITECTURAL PDF</span>
              </a>
            </motion.div>
          </motion.div>

        </div>

      </div>

      {/* Lightbox Modal for Full Screen View */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-4"
            onClick={() => setIsLightboxOpen(false)}
          >
            {/* Header */}
            <div className="absolute top-4 left-4 right-4 sm:top-6 sm:left-6 sm:right-6 flex items-center justify-between z-50">
              <div className="hidden sm:block">
                <h3 className="text-white text-sm sm:text-base font-black tracking-wide">Anandam Residency — Panoramic Layout Scheme</h3>
                <p className="text-gray-400 text-[10px] sm:text-[11px] font-mono uppercase tracking-widest mt-0.5">Master Plan Blueprint</p>
              </div>
              
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="p-2 sm:p-2.5 bg-white/10 hover:bg-white/20 text-white rounded-full border border-white/20 transition-all duration-200 active:scale-90"
              >
                <X size={18} />
              </button>
            </div>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 120 }}
              className="relative max-w-6xl w-full h-full max-h-[85vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src="/master-plan-img.png"
                alt="High Resolution Master Plan"
                className="max-w-full max-h-full object-contain rounded-xl shadow-2xl select-none"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1504297050568-910d24c426d3?w=1200&q=80';
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
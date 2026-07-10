'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Play, Film, Image as ImageIcon, X, ArrowRight, Grid3x3 } from 'lucide-react';
import Link from 'next/link';
import { getAllGalleryItems, getImagesOnly, getVideosOnly } from '@/lib/gallery';

export default function GalleryPage() {
  const [activeMedia, setActiveMedia] = useState<any>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [filterType, setFilterType] = useState<'all' | 'image' | 'video'>('all');

  const allItems = getAllGalleryItems();
  const imagesOnly = getImagesOnly();
  const videosOnly = getVideosOnly();

  const getDisplayItems = () => {
    if (filterType === 'image') return imagesOnly;
    if (filterType === 'video') return videosOnly;
    return allItems;
  };

  const displayItems = getDisplayItems();
  const totalItems = displayItems.length;

  return (
    <main className="bg-gradient-to-b from-white via-gray-50 to-white min-h-screen">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B3A99] via-[#062466] to-[#030914]">
          <div className="absolute top-0 left-0 w-full h-full opacity-30">
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#79c223]/20 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse delay-1000" />
          </div>
        </div>
        
        <div className="relative container mx-auto px-4 py-20 sm:py-24 md:py-28 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
          >
            <Film size={16} className="text-[#79c223]" />
            <span className="text-white text-xs font-black uppercase tracking-wider">Visual Journey</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white tracking-tight px-4"
          >
            Our Visual{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#79c223] to-green-400">
              Showcase
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto mt-4 font-medium px-4"
          >
            Explore our premium real estate portfolio through stunning visuals and cinematic experiences
          </motion.p>
        </div>
      </section>

      {/* ================= FILTER SECTION ================= */}
      <section className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-3 sm:gap-4">
            <button
              onClick={() => setFilterType('all')}
              className={`flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 ${
                filterType === 'all'
                  ? 'bg-[#0B3A99] text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Grid3x3 size={16} className="sm:w-4 sm:h-4" />
              All ({allItems.length})
            </button>
            <button
              onClick={() => setFilterType('image')}
              className={`flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 ${
                filterType === 'image'
                  ? 'bg-[#0B3A99] text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <ImageIcon size={16} className="sm:w-4 sm:h-4" />
              Photos ({imagesOnly.length})
            </button>
            <button
              onClick={() => setFilterType('video')}
              className={`flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 ${
                filterType === 'video'
                  ? 'bg-[#0B3A99] text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Film size={16} className="sm:w-4 sm:h-4" />
              Videos ({videosOnly.length})
            </button>
          </div>
        </div>
      </section>

      {/* ================= GALLERY GRID ================= */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          
          {/* Results Count */}
          <div className="mb-4 sm:mb-6">
            <p className="text-gray-500 text-xs sm:text-sm">
              Showing <span className="font-bold text-[#0B3A99]">{totalItems}</span> items
            </p>
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            <AnimatePresence mode="popLayout">
              {displayItems.map((item, index) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: Math.min(index * 0.01, 0.3) }}
                  whileHover={{ y: -6 }}
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => setActiveMedia(item)}
                  className="group relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer bg-gray-100 shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="absolute inset-0">
                    <img
                      src={item.type === 'video' ? item.thumbnail : item.src}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>

                  <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 ${
                    hoveredId === item.id ? 'opacity-100' : 'opacity-60'
                  }`} />

                  <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                    hoveredId === item.id ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                  }`}>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-xl">
                      {item.type === 'video' ? (
                        <Play size={18} className="sm:w-5 sm:h-5 fill-white ml-0.5" />
                      ) : (
                        <Eye size={18} className="sm:w-5 sm:h-5" />
                      )}
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-2.5 sm:p-3 md:p-4">
                    <div className="flex gap-1 sm:gap-1.5 mb-1 sm:mb-1.5">
                      <span className="px-1.5 sm:px-2 py-0.5 rounded text-[7px] sm:text-[8px] md:text-[9px] font-black uppercase tracking-wider text-white shadow-lg bg-[#79c223]">
                        {item.type === 'video' ? 'VIDEO' : 'PHOTO'}
                      </span>
                    </div>
                    <h3 className="text-[10px] sm:text-xs md:text-sm font-bold text-white line-clamp-2 leading-tight group-hover:text-[#79c223] transition-colors">
                      {item.title}
                    </h3>
                  </div>

                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* ================= LIGHTBOX MODAL ================= */}
      <AnimatePresence>
        {activeMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-3 sm:p-4 md:p-6"
            onClick={() => setActiveMedia(null)}
          >
            <button
              onClick={() => setActiveMedia(null)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all z-50"
            >
              <X size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </button>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl w-full bg-black rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl" 
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video w-full relative bg-black">
                {activeMedia.type === 'video' ? (
                  <video
                    src={activeMedia.src}
                    controls
                    autoPlay
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <img
                    src={activeMedia.src}
                    alt={activeMedia.title}
                    className="w-full h-full object-contain"
                  />
                )}
              </div>

              <div className="p-3 sm:p-4 md:p-6 bg-gradient-to-r from-gray-900 to-black">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-3">
                  <div className="space-y-1">
                    <div className="flex gap-1.5 sm:gap-2">
                      <span className="px-1.5 sm:px-2 py-0.5 rounded text-[8px] sm:text-[9px] md:text-[10px] font-black uppercase text-white bg-[#79c223]">
                        {activeMedia.type === 'video' ? 'VIDEO' : 'PHOTO'}
                      </span>
                    </div>
                    <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-white">
                      {activeMedia.title}
                    </h3>
                  </div>
                  <div className="text-[9px] sm:text-[10px] md:text-xs font-mono text-gray-400 bg-white/5 px-2 sm:px-3 py-1 rounded-lg">
                    ID: {activeMedia.id}
                  </div>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= CTA SECTION ================= */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-[#0B3A99] to-[#062466]">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-3 sm:space-y-4 md:space-y-6"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white tracking-tight px-4">
              Ready to Find Your Dream Plot?
            </h2>
            <p className="text-gray-300 text-xs sm:text-sm md:text-base max-w-xl mx-auto px-4">
              Explore our premium residential plots with clear titles, bank approval, and modern amenities.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-3 md:gap-4 pt-2 sm:pt-3 md:pt-4">
              <Link
                href="/plots"
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-[#79c223] hover:bg-green-600 text-white font-black text-[10px] sm:text-xs md:text-sm uppercase tracking-wider rounded-lg sm:rounded-xl transition-all shadow-lg hover:scale-105"
              >
                Explore Plots <ArrowRight size={14} className="sm:w-4 sm:h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-white/10 hover:bg-white/20 text-white font-black text-[10px] sm:text-xs md:text-sm uppercase tracking-wider rounded-lg sm:rounded-xl transition-all border border-white/20 hover:scale-105"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
'use client';

import { useState, useEffect } from 'react';
import { galleryItems } from '@/lib/gallery';
import Link from 'next/link';
import { Eye, X, ArrowRight, Sparkles, Image as ImageIcon, Film } from 'lucide-react';

export function GallerySection() {

  const featuredItems = galleryItems.slice(0, 5).map(item => ({
    id: item.id,
    image: item.type === 'video' ? item.thumbnail : item.src,
    title: item.title,
    category: item.type === 'video' ? 'VIDEO TOUR' : 'PHOTOGRAPHY',
    type: item.type,
    src: item.src
  }));
  
  // Lightbox State Management
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedType, setSelectedType] = useState<string>('');
  const [selectedSrc, setSelectedSrc] = useState<string>('');
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // এসকেপ কি চাপলে মডাল বন্ধ হওয়ার সুবিধা
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
        setIsVideoPlaying(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const openLightbox = (item: any) => {
    setSelectedImage(item.image);
    setSelectedTitle(item.title);
    setSelectedCategory(item.category);
    setSelectedType(item.type);
    setSelectedSrc(item.src);
    setIsVideoPlaying(false);
  };

  return (
    <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Background Aesthetic Soft Glow Shapes */}
      <div className="absolute top-1/4 -right-32 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-[#79c223]/5 rounded-full blur-[100px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 -left-32 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-[#0B3A99]/5 rounded-full blur-[100px] pointer-events-none animate-pulse delay-1000" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header - Responsive */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#79c223]/10 border border-[#79c223]/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-5 shadow-sm">
            <Sparkles size={12} className="text-[#79c223]" />
            <span className="text-[#68a61e] font-extrabold text-[10px] sm:text-xs uppercase tracking-[0.2em]">
              Visual Journey
            </span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#0B3A99] tracking-tight leading-tight mb-4 sm:mb-6">
            Project Gallery
          </h2>
          
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-[#79c223] mx-auto rounded-full mb-4 sm:mb-6" />
          
          <p className="text-gray-500 font-medium text-sm sm:text-base md:text-lg leading-relaxed px-4">
            Explore our stunning premium project photography, detailed site development architectures, and master plans.
          </p>
        </div>

        {/* Premium Grid Layout - Fully Responsive */}
        {featuredItems.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5 md:gap-6 lg:gap-8 auto-rows-[200px] sm:auto-rows-[220px] md:auto-rows-[240px] lg:auto-rows-[260px]">
            
            {/* Main Large Featured Image Box (First Item) */}
            <div 
              onClick={() => openLightbox(featuredItems[0])}
              className="sm:col-span-2 lg:col-span-7 lg:row-span-2 group relative rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden border border-gray-200/80 shadow-md hover:shadow-2xl bg-white cursor-pointer transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[#79c223] active:scale-[0.99]"
            >
              <img
                src={featuredItems[0].image}
                alt={featuredItems[0].title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />
              
              {/* Center Eye Icon Trigger */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 shadow-xl text-white">
                  <Eye size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#79c223]" />
                </div>
              </div>

              {/* Badge */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                <span className="inline-flex items-center gap-1 text-[9px] sm:text-[10px] font-black tracking-wider text-white bg-black/50 backdrop-blur-sm px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full">
                  {featuredItems[0].type === 'video' ? <Film size={10} /> : <ImageIcon size={10} />}
                  {featuredItems[0].category}
                </span>
              </div>

              {/* Typography Content Holder */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 lg:p-8 transform transition-transform duration-500 group-hover:translate-y-[-2px]">
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-black text-white tracking-tight leading-tight line-clamp-2">
                  {featuredItems[0].title}
                </h3>
              </div>
              
              {/* Edge Glow Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#79c223] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>

            {/* Secondary Grid Images (Remaining 4 Items) */}
            {featuredItems.slice(1, 5).map((item, index) => (
              <div
                key={item.id}
                onClick={() => openLightbox(item)}
                className={`group relative rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden border border-gray-200/80 shadow-md hover:shadow-2xl bg-white cursor-pointer transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[#79c223] active:scale-[0.99] ${
                  index === 0 ? 'sm:col-span-1 lg:col-span-5' : 
                  index === 1 ? 'sm:col-span-1 lg:col-span-5' : 
                  index === 2 ? 'sm:col-span-2 lg:col-span-5' : 
                  'sm:col-span-2 lg:col-span-7'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-75 group-hover:opacity-90 transition-opacity duration-500" />
                
                {/* Center Eye Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 shadow-xl text-white">
                    <Eye size={14} className="sm:w-4 sm:h-4 text-[#79c223]" />
                  </div>
                </div>

                {/* Badge */}
                <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
                  <span className="inline-flex items-center gap-1 text-[8px] sm:text-[9px] font-black tracking-wider text-white bg-black/50 backdrop-blur-sm px-1.5 sm:px-2 py-0.5 rounded-full">
                    {item.type === 'video' ? <Film size={8} /> : <ImageIcon size={8} />}
                    {item.category}
                  </span>
                </div>

                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-5">
                  <h3 className="text-[11px] sm:text-xs md:text-sm font-bold text-white tracking-tight line-clamp-2">
                    {item.title}
                  </h3>
                </div>

                {/* Edge Glow Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#79c223] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            ))}

          </div>
        )}

        {/* View Full Gallery CTA Button - Responsive */}
        <div className="text-center mt-10 sm:mt-12 md:mt-16">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 sm:gap-2.5 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-[#0B3A99] hover:bg-[#79c223] text-white font-extrabold text-[11px] sm:text-xs md:text-sm tracking-wider uppercase rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 group"
          >
            <span>View Full Gallery</span>
            <ArrowRight size={14} className="sm:w-4 sm:h-4 transform transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* --- PREMIUM LIGHTBOX MODAL - Fully Responsive --- */}
      {selectedImage && (
        <div 
          onClick={() => {
            setSelectedImage(null);
            setIsVideoPlaying(false);
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-md p-3 sm:p-4 transition-all duration-500"
        >
          {/* Close Button */}
          <button 
            onClick={() => {
              setSelectedImage(null);
              setIsVideoPlaying(false);
            }}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 z-[10000] p-2 sm:p-2.5 md:p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white border border-white/20 shadow-xl transition-all duration-300 hover:scale-110 active:scale-90"
          >
            <X size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>

          {/* Lightbox Main Container */}
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl sm:max-w-5xl w-full max-h-[80vh] sm:max-h-[85vh] bg-white rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl flex flex-col animate-zoomIn"
          >
            {/* Media Container - Image or Video */}
            <div className="w-full flex-grow overflow-hidden bg-black flex items-center justify-center min-h-[300px] sm:min-h-[400px]">
              {selectedType === 'video' && !isVideoPlaying ? (
                <div className="relative w-full h-full">
                  <img 
                    src={selectedImage} 
                    alt={selectedTitle} 
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => setIsVideoPlaying(true)}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-[#79c223] rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-black ml-0.5 sm:ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </button>
                </div>
              ) : selectedType === 'video' && isVideoPlaying ? (
                <video
                  src={selectedSrc}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                  onEnded={() => setIsVideoPlaying(false)}
                />
              ) : (
                <img 
                  src={selectedImage} 
                  alt={selectedTitle} 
                  className="max-w-full max-h-[70vh] object-contain pointer-events-none select-none"
                />
              )}
            </div>

            {/* Bottom Descriptive Footer */}
            <div className="bg-white p-4 sm:p-5 md:p-6 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
              <div>
                <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-black tracking-wider text-[#79c223] uppercase mb-1">
                  {selectedType === 'video' ? <Film size={10} className="sm:w-3 sm:h-3" /> : <ImageIcon size={10} className="sm:w-3 sm:h-3" />}
                  {selectedCategory}
                </span>
                <h4 className="text-sm sm:text-base md:text-lg font-black text-[#0B3A99] tracking-tight leading-tight line-clamp-2">
                  {selectedTitle}
                </h4>
              </div>
              <div className="flex-shrink-0">
                <span className="text-[9px] sm:text-[10px] font-bold text-gray-400 bg-gray-50 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg border border-gray-100">
                  Anandam Residency Portfolio
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-zoomIn {
          animation: zoomIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, DollarSign, Eye, ArrowRight, Home, CheckCircle } from 'lucide-react';
import { getAllPlots } from '@/lib/plotsData';

export default function PlotsListingPage() {
  const [plots, setPlots] = useState([]);

  useEffect(() => {
    setPlots(getAllPlots());
  }, []);

  const totalPlots = plots.length;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      
      {/* Banner Section */}
      <section className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/ianding_img-3.png" 
            alt="Plots Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div className="container mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-3 sm:mb-4"
            >
              Find Your Perfect Plot
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-sm sm:text-base md:text-lg text-white/90 max-w-2xl mx-auto px-4"
            >
              Discover premium residential plots with clear titles and bank approval
            </motion.p>
          </div>
        </div>
      </section>

      {/* Results Count */}
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <p className="text-gray-600 text-xs sm:text-sm">
          Showing <span className="font-bold text-[#0B3A99]">{totalPlots}</span> plot{totalPlots > 1 ? 's' : ''}
        </p>
      </div>

      {/* Plots Grid */}
      <section className="py-6 sm:py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          {totalPlots === 0 ? (
            <div className="text-center py-12 sm:py-16 md:py-20">
              <div className="text-6xl sm:text-7xl mb-4">🏠</div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">No Plots Found</h3>
              <p className="text-gray-500 text-sm sm:text-base">No plots available at the moment.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
              {plots.map((plot, index) => (
                <motion.div
                  key={plot.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  {/* Thumbnail */}
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <Image
                      src={plot.thumbnail}
                      alt={plot.plotName}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    
                    {/* Status Badge */}
                    <div className="absolute top-2 sm:top-3 right-2 sm:right-3">
                      <span className={`px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg text-[8px] sm:text-[10px] font-black uppercase tracking-wider shadow-lg ${
                        plot.status === 'Available' 
                          ? 'bg-green-500 text-white' 
                          : plot.status === 'Booked'
                          ? 'bg-amber-500 text-white'
                          : plot.status === 'Ready to Move'
                          ? 'bg-blue-500 text-white'
                          : 'bg-red-500 text-white'
                      }`}>
                        {plot.status}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-3 sm:p-4 md:p-5">
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-black text-gray-900 mb-1 line-clamp-1">
                      {plot.plotName}
                    </h3>
                    
                    <div className="flex items-center gap-1 text-gray-500 text-[10px] sm:text-xs mb-2 sm:mb-3">
                      <MapPin size={12} className="text-[#79c223] flex-shrink-0" />
                      <span className="line-clamp-1">{plot.projectName}</span>
                    </div>

                    {/* Specification Box */}
                    <div className="bg-gray-50 rounded-lg sm:rounded-xl p-2 sm:p-3 mb-3 sm:mb-4 space-y-1 sm:space-y-1.5">
                      <div className="flex justify-between text-[10px] sm:text-xs">
                        <span className="text-gray-500">Plot No:</span>
                        <span className="font-bold text-gray-800">{plot.plotNumber}</span>
                      </div>
                      <div className="flex justify-between text-[10px] sm:text-xs">
                        <span className="text-gray-500">Size:</span>
                        <span className="font-bold text-gray-800">{plot.plotSize}</span>
                      </div>
                      <div className="flex justify-between text-[10px] sm:text-xs">
                        <span className="text-gray-500">Facing:</span>
                        <span className="font-bold text-gray-800">{plot.facing}</span>
                      </div>
                      <div className="flex justify-between text-[10px] sm:text-xs">
                        <span className="text-gray-500">Road:</span>
                        <span className="font-bold text-gray-800">{plot.roadWidth}</span>
                      </div>
                    </div>

                    {/* Action Button */}
                    <Link
                      href={`/plots/${plot.id}`}
                      className="flex items-center justify-center gap-1.5 sm:gap-2 w-full px-3 sm:px-4 py-2 sm:py-3 bg-[#0B3A99] hover:bg-[#062466] text-white font-black text-[10px] sm:text-xs uppercase tracking-wider rounded-lg sm:rounded-xl transition-all group/btn"
                    >
                      <Eye size={14} />
                      View Details
                      <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
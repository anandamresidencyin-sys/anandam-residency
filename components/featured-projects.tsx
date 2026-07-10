'use client';

import { MapPin, Zap, ArrowUpRight, Layers, DollarSign, Activity, Sparkles, Calendar, Building2 } from 'lucide-react';
import Link from 'next/link';
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getAllProjects } from '@/lib/projectsData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.97 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } 
  }
};

export function FeaturedProjects() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Get all projects from projectsData (1 project: Officer's Campus)
  const displayProjects = useMemo(() => {
    const allProjects = getAllProjects();
    return allProjects.map((item) => ({
      id: item.id,
      name: item.name,
      location: item.location,
      description: item.type,
      images: [item.thumbnail],
      status: item.status || 'Coming Soon',
      priceRange: item.price,
      totalPlots: '1 Katha', // Custom value for this project
      launchDate: 'Coming Soon', // Custom value
      plotTypes: item.amenities.slice(0, 6),
      isUpcomingRoute: true 
    }));
  }, []);

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-b from-white via-gray-50/40 to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header Section - Fully Responsive */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 bg-[#79c223]/8 rounded-full blur-[100px] sm:blur-[130px] pointer-events-none animate-pulse" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 sm:w-72 sm:h-72 bg-[#0B3A99]/5 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none" />
          
          <motion.div 
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-[#0B3A99]/5 to-[#79c223]/5 border border-[#0B3A99]/10 text-[#0B3A99] text-[10px] sm:text-[11px] font-black uppercase tracking-[0.15em] sm:tracking-[0.18em] mb-4 sm:mb-5 backdrop-blur-md"
          >
            <Layers size={10} className="sm:w-3 sm:h-3 text-[#79c223]" /> 
            <span className="hidden xs:inline">Our Curated Portfolio</span>
            <span className="xs:hidden">Portfolio</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#0B3A99] tracking-tight mb-4 sm:mb-6 leading-tight lg:leading-[1.15] px-2"
          >
            Explore Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B3A99] via-[#0B3A99] to-[#79c223]">
              Masterpieces
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.65 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-600 font-medium max-w-2xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed px-4"
          >
            Handpicked premium residential properties designed with architectural excellence, ultra-modern facilities, and unmatched connectivity.
          </motion.p>
        </div>

        {/* Projects Grid - Shows All Projects from projectsData */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 lg:gap-10"
        >
          {displayProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="bg-white rounded-2xl sm:rounded-3xl lg:rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col group"
            >
              
              {/* Image Container */}
              <div className="relative h-48 xs:h-56 sm:h-60 md:h-64 lg:h-72 w-full overflow-hidden bg-gray-100">
                <img
                  src={project.images[0]}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* Status Badge */}
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-20">
                  <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl text-[9px] sm:text-[10px] font-black tracking-wider uppercase shadow-lg border backdrop-blur-md flex items-center gap-1.5 text-white bg-amber-500/90 border-amber-400/30">
                    <span className="w-1.5 h-1.5 rounded-full animate-pulse bg-amber-300" />
                    {project.status === 'Coming Soon' ? 'Upcoming' : project.status}
                  </span>
                </div>

                {/* Launch Date Badge */}
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-20">
                  <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg bg-black/60 backdrop-blur-sm text-white text-[8px] sm:text-[9px] font-bold flex items-center gap-1">
                    <Calendar size={10} className="text-[#79c223]" />
                    Launch: {project.launchDate}
                  </span>
                </div>

                {/* Hover Overlay with Amenities */}
                <AnimatePresence>
                  {hoveredId === project.id && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center p-4 z-10"
                    >
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                      >
                        <Sparkles size={14} className="text-[#79c223] mx-auto mb-2 animate-pulse" />
                        <p className="text-white/70 text-[9px] font-black uppercase tracking-wider mb-3">Key Amenities</p>
                      </motion.div>
                      
                      <div className="flex flex-wrap justify-center gap-1.5 max-w-full">
                        {project.plotTypes && project.plotTypes.slice(0, 4).map((type, i) => (
                          <motion.span 
                            key={i}
                            initial={{ scale: 0.85, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: i * 0.05 }}
                            className="px-2 sm:px-2.5 py-1 sm:py-1.5 bg-white/10 border border-white/20 text-white font-bold text-[9px] sm:text-[10px] rounded-lg"
                          >
                            {typeof type === 'string' ? type : type.name || type}
                          </motion.span>
                        ))}
                        {project.plotTypes.length > 4 && (
                          <span className="px-2 py-1 bg-[#79c223]/20 text-[#79c223] font-bold text-[9px] rounded-lg">
                            +{project.plotTypes.length - 4} more
                          </span>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Content Card Details */}
              <div className="p-4 sm:p-5 md:p-6 lg:p-8 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-black text-gray-900 tracking-tight group-hover:text-[#0B3A99] transition-colors line-clamp-1 mb-2">
                    {project.name}
                  </h3>

                  <div className="flex items-center gap-1.5 text-gray-500 text-[10px] sm:text-[11px] mb-3 sm:mb-4">
                    <MapPin size={12} className="text-[#79c223] flex-shrink-0" />
                    <p className="line-clamp-1">{project.location}</p>
                  </div>

                  <p className="text-gray-500 font-medium text-[11px] sm:text-xs leading-relaxed mb-4 sm:mb-6 line-clamp-2">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Specifications Grid */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6 py-3 sm:py-4 border-y border-gray-100">
                    <div>
                      <p className="text-gray-400 font-bold uppercase tracking-wider flex items-center gap-1 text-[9px] sm:text-[10px]">
                        <DollarSign size={11} className="text-[#79c223]" /> Valuation
                      </p>
                      <p className="font-black text-[#0B3A99] text-xs sm:text-sm md:text-base tracking-tight break-words">
                        {project.priceRange}
                      </p>
                    </div>
                    <div className="pl-3 sm:pl-4 border-l border-gray-100">
                      <p className="text-gray-400 font-bold uppercase tracking-wider flex items-center gap-1 text-[9px] sm:text-[10px]">
                        <Activity size={11} className="text-[#0B3A99]" /> Total Plots
                      </p>
                      <p className="font-black text-[#0B3A99] text-xs sm:text-sm md:text-base tracking-tight">
                        {project.totalPlots}
                      </p>
                    </div>
                  </div>

                  {/* Action Button */}
                  <Link
                    href={`/projects/${project.id}`}
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 sm:py-4 bg-gray-50 hover:bg-gradient-to-r hover:from-[#0B3A99] hover:to-[#093182] text-gray-800 hover:text-white font-black text-[10px] sm:text-xs uppercase tracking-wider rounded-xl transition-all duration-300 border border-gray-200 hover:border-transparent group/btn"
                  >
                    <Zap size={11} className="text-[#79c223] group-hover/btn:scale-110 group-hover/btn:rotate-12 transition-transform duration-300" />
                    Explore Details
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Action Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-12 sm:mt-16 md:mt-20"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-[#0B3A99] text-white font-black text-[10px] sm:text-xs uppercase tracking-widest rounded-xl hover:bg-[#062466] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            Explore Complete Collection
            <ArrowUpRight size={14} className="sm:w-4 sm:h-4" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
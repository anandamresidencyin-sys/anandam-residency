'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Eye, ArrowRight, Home, CheckCircle, Sparkles, DollarSign, Ruler } from 'lucide-react';
import { getAllProjects } from '@/lib/projectsData';

export default function ProjectsPage() {
  const [projects, setProjects] = useState(getAllProjects());

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      
      {/* Banner Section */}
      <section className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&auto=format" 
            alt="Projects Banner"
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
              Our Projects
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-sm sm:text-base md:text-lg text-white/90 max-w-2xl mx-auto px-4"
            >
              Discover premium residential projects with clear titles and modern amenities
            </motion.p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                {/* Thumbnail */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={project.thumbnail}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 bg-amber-500 text-white text-[10px] font-black uppercase tracking-wider rounded-lg shadow-lg">
                      {project.status}
                    </span>
                  </div>

                  {/* Price Badge */}
                  <div className="absolute bottom-3 left-3">
                    <span className="px-3 py-1.5 bg-black/60 backdrop-blur-sm text-white text-[10px] font-black rounded-lg flex items-center gap-1">
                      <DollarSign size={12} className="text-[#79c223]" />
                      {project.price}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-xl font-black text-gray-900 mb-1 line-clamp-1 group-hover:text-[#0B3A99] transition-colors">
                    {project.name}
                  </h3>
                  
                  <div className="flex items-center gap-1 text-gray-500 text-xs mb-3">
                    <MapPin size={12} className="text-[#79c223] flex-shrink-0" />
                    <span className="line-clamp-1">{project.location}</span>
                  </div>

                  {/* Specification Box */}
                  <div className="bg-gray-50 rounded-xl p-3 mb-4 space-y-1.5">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Rate:</span>
                      <span className="font-bold text-gray-800">{project.ratePerSqft}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Size:</span>
                      <span className="font-bold text-gray-800">{project.size}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Type:</span>
                      <span className="font-bold text-gray-800">{project.type}</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <Link
                    href={`/projects/${project.id}`}
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-[#0B3A99] hover:bg-[#062466] text-white font-black text-xs uppercase tracking-wider rounded-xl transition-all group/btn"
                  >
                    <Eye size={14} />
                    View Details
                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
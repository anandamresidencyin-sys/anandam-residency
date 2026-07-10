'use client';

import { 
  CheckCircle, Award, Users, Target, ShieldCheck, 
  Building2, Leaf, Milestone, ArrowRight, ArrowUpRight 
} from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';


const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-900 overflow-hidden select-none">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative py-28 sm:py-36 bg-gradient-to-br from-[#0B3A99] via-[#062466] to-[#030914] text-white flex items-center justify-center">
        {/* Subtle Decorative Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(121,194,35,0.15),transparent_45%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#79c223] text-xs font-black uppercase tracking-widest mb-6"
          >
            <Building2 size={12} /> Shaping Landscapes Since 2016
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-balance mb-6"
          >
            Crafting Legacies, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#79c223] to-green-400">Building Trust</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            Anandam Residency is not just a real estate developer; we are the architects of sustainable communities, unlocking spaces where generations thrive with absolute security and premium growth.
          </motion.p>
        </div>
      </section>

      {/* ================= COMPANY OVERVIEW & STATS ================= */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInUp}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 text-xs font-black text-[#0B3A99] uppercase tracking-wider">
                <Milestone size={14} className="text-[#79c223]" /> Our Golden Journey
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B3A99] tracking-tight">
                A Decade of Delivering Groundbreaking Commitments
              </h2>
              <p className="text-gray-600 font-medium text-sm sm:text-base leading-relaxed">
                Anandam Residency started with a definitive vision: to challenge the traditional obscurities of the real estate landscape by offering premium, transparent, and completely legal legal-abiding residential plots in prime developmental hubs. 
              </p>
              <p className="text-gray-600 font-medium text-sm sm:text-base leading-relaxed">
                Over the past 10+ years, we have mastered the art of land development, integrating strict regulatory compliance with state-of-the-art infrastructural setups. We believe that buying land is an emotional asset, and we guard your asset with the highest degree of structural integrity.
              </p>

              {/* Counter Stats Grid */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 border-t border-gray-100">
                <div className="space-y-1">
                  <p className="text-3xl sm:text-4xl font-black text-[#79c223]">500+</p>
                  <p className="text-xs sm:text-sm font-bold text-[#0B3A99] uppercase tracking-wider">Happy Families</p>
                </div>
                <div className="space-y-1 border-l border-gray-100 pl-4 sm:pl-6">
                  <p className="text-3xl sm:text-4xl font-black text-[#79c223]">50+</p>
                  <p className="text-xs sm:text-sm font-bold text-[#0B3A99] uppercase tracking-wider">Acres Developed</p>
                </div>
                <div className="space-y-1 border-l border-gray-100 pl-4 sm:pl-6">
                  <p className="text-3xl sm:text-4xl font-black text-[#79c223]">10+</p>
                  <p className="text-xs sm:text-sm font-bold text-[#0B3A99] uppercase tracking-wider">Years Active</p>
                </div>
              </div>
            </motion.div>

            {/* Premium Image Layout with Glossy Border */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group aspect-[6/5] w-full max-w-xl mx-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0B3A99] to-[#79c223] rounded-[2.5rem] blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
              <img
                src="/about us img.jpg"
                alt="Premium Property Design"
                className="rounded-[2.5rem] shadow-2xl border-4 border-white object-cover w-full h-full transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= NEW SECTION: FOUNDER'S VISION ================= */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50/60">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white rounded-[2.5rem] p-8 sm:p-14 border border-gray-100 shadow-[0_20px_50px_rgba(11,58,153,0.04)] grid grid-cols-1 md:grid-cols-3 gap-8 items-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#79c223]/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="md:col-span-1 text-center md:text-left space-y-3">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#0B3A99] to-[#062466] mx-auto md:mx-0 flex items-center justify-center text-white font-black text-2xl shadow-lg">
                AR
              </div>
              <div>
                <h4 className="text-lg font-black text-gray-900">Leadership Desk</h4>
                <p className="text-xs font-bold text-[#79c223] uppercase tracking-wider">Anandam Residency</p>
              </div>
            </div>

            <div className="md:col-span-2 border-t md:border-t-0 md:border-l border-gray-100 pt-6 md:pt-0 md:pl-8">
              <p className="text-gray-600 font-medium italic text-sm sm:text-base leading-relaxed">
                "Our strategy is elementary: We don't sell pieces of soil; we legalise and configure spaces where your future generations can establish their identity. True corporate responsibility in real estate lies in uncompromised land documentation and premier utility connection. That is our oath to every buyer."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= MISSION, VISION, VALUES ================= */}
      <section className="py-24 bg-gray-50/50 relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-black text-[#0B3A99] tracking-tight">
              Our Structural Pillars
            </h2>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Mission Card */}
            <motion.div variants={fadeInUp} className="bg-white rounded-3xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.01)] border border-gray-100 hover:border-[#79c223]/30 transition-all duration-300 group">
              <div className="w-12 h-12 bg-[#0B3A99]/5 group-hover:bg-[#0B3A99] text-[#0B3A99] group-hover:text-white rounded-2xl flex items-center justify-center transition-colors duration-300 mb-6">
                <Target size={22} />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-[#0B3A99] mb-4">Our Mission</h3>
              <p className="text-gray-500 font-medium text-xs sm:text-sm leading-relaxed">
                To hand over fully engineered residential infrastructure with strict absolute transparency, superb transit connectivity, and premium ecological factors, making strategic land investment practical for every budget level.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div variants={fadeInUp} className="bg-white rounded-3xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.01)] border border-gray-100 hover:border-[#79c223]/30 transition-all duration-300 group">
              <div className="w-12 h-12 bg-[#79c223]/10 group-hover:bg-[#79c223] text-[#79c223] group-hover:text-white rounded-2xl flex items-center justify-center transition-colors duration-300 mb-6">
                <Award size={22} />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-[#0B3A99] mb-4">Our Vision</h3>
              <p className="text-gray-500 font-medium text-xs sm:text-sm leading-relaxed">
                To position Anandam Residency as the baseline brand for high-yield real estate projects, scaling a diverse network of highly smart township projects across the entire region.
              </p>
            </motion.div>

            {/* Values Card */}
            <motion.div variants={fadeInUp} className="bg-white rounded-3xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.01)] border border-gray-100 hover:border-[#79c223]/30 transition-all duration-300 group">
              <div className="w-12 h-12 bg-[#0B3A99]/5 group-hover:bg-[#0B3A99] text-[#0B3A99] group-hover:text-white rounded-2xl flex items-center justify-center transition-colors duration-300 mb-6">
                <Leaf size={22} className="text-[#79c223] group-hover:text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-[#0B3A99] mb-4">Our Core Values</h3>
              <p className="text-gray-500 font-medium text-xs sm:text-sm leading-relaxed">
                Absolute statutory compliance, ethical representation of physical assets, high customer-centric design parameters, environmental integration, and zero-compromise post-sales assistance.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US (TRUST FACTORS) ================= */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 text-xs font-black text-[#79c223] uppercase tracking-wider mb-3">
              <ShieldCheck size={14} /> Security & Integrity
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#0B3A99] tracking-tight">
              Why Discerning Investors Choose Us
            </h2>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          >
            {[
              {
                title: 'Complete Absolute Transparency',
                description: 'Every cost component, including dynamic processing setups, is shared explicitly upfront. Zero surprises, zero hidden modules.',
              },
              {
                title: '100% Clear Legal Title Deeds',
                description: 'All properties come pre-verified by leading legal cells. Clear land mutation status and clean registration processes.',
              },
              {
                title: 'Highly Strategic Locations',
                description: 'Properties match key industrial nodes, expressways, airports, and expanding metro projects for fast capital growth.',
              },
              {
                title: 'High-End Smart Amenities',
                description: 'Gated configurations with smart 24/7 scanning setups, fully paved wide roads, smart drainage networks, and curated parks.',
              },
              {
                title: 'Direct Strategic Bank Affiliations',
                description: 'Strong associations with premier financial bodies ensures hassle-free, smooth legal checks and instant loan clearance.',
              },
              {
                title: 'Continuous Dedicated Support',
                description: 'From virtual property walkthroughs to physical paperwork allocation, a designated account executive monitors everything.',
              },
            ].map((reason, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="flex gap-5 p-6 rounded-2xl hover:bg-gray-50/80 transition-colors duration-300 group"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-[#79c223]/10 text-[#79c223] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <CheckCircle size={18} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-extrabold text-[#0B3A99] tracking-tight group-hover:text-[#79c223] transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-gray-500 font-medium text-xs sm:text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Solid Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#79c223] to-green-600" />
        
        {/* Micro Glow Effect */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 text-center relative z-10 max-w-4xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6"
          >
            Ready to Lock In Your High-Yield Legacy Plot?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-xl text-green-50/90 mb-10 max-w-2xl mx-auto font-medium"
          >
            Schedule an exclusive, guided site visit with our structural leads and inspect our premium land engineering maps.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/book-visit"
              className="inline-flex items-center gap-2 w-full sm:w-auto justify-center px-8 py-4 bg-[#0B3A99] hover:bg-[#062466] text-white font-black text-xs uppercase tracking-widest rounded-xl transition-all duration-300 shadow-xl hover:scale-[1.02]"
            >
              Book Strategic Site Visit <ArrowRight size={14} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 w-full sm:w-auto justify-center px-8 py-4 border-2 border-white text-white font-black text-xs uppercase tracking-widest rounded-xl hover:bg-white hover:text-green-600 transition-all duration-300 hover:scale-[1.02]"
            >
              Connect with Real Estate Expert <ArrowUpRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
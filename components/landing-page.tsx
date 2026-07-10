'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  ShieldCheck, 
  Coins, 
  TreePine, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  Star 
} from 'lucide-react';
import Image from 'next/image';

// অ্যানিমেশন ভেরিয়েন্টস
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export function LandingPage() {
  const [isLoading, setIsLoading] = useState(true);

  // ঠিক ৪ সেকেন্ড (৪০০০ মিলিমেকেন্ড) পর্যন্ত লোডিং স্ক্রিন দেখানোর মেকানিজম
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* ================= EXTRA PREMIUM 4-SECOND PRELOADER ================= */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
            className="fixed inset-0 bg-[#030914] z-[9999] flex flex-col items-center justify-center select-none"
          >
            {/* Background Glows within preloader */}
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#79c223]/10 rounded-full blur-[100px] pointer-events-none animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#0B3A99]/20 rounded-full blur-[100px] pointer-events-none animate-pulse" />

            <div className="relative flex flex-col items-center text-center px-4">
              {/* Premium Floating Ring Logo */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: [1, 1.05, 1], opacity: 1 }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-20 h-20 bg-gradient-to-tr from-[#0B3A99] to-[#79c223] rounded-3xl flex items-center justify-center shadow-[0_10px_40px_rgba(11,58,153,0.3)] mb-6 relative"
              >
                <span className="font-black text-white text-2xl tracking-tighter">AR</span>
                <div className="absolute inset-0 bg-white/10 rounded-3xl mix-blend-overlay animate-ping opacity-20" />
              </motion.div>

              {/* Brand Title Animation */}
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="font-black text-2xl sm:text-3xl text-white tracking-tight leading-none"
              >
                Anandam <span className="text-[#79c223]">Residency</span>
              </motion.h1>

              {/* Loading Status Subtitle [FIXED SYNTAX ERROR HERE] */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ delay: 0.6 }}
                className="text-gray-400 text-xs font-bold uppercase tracking-[0.3em] mt-3"
              >
                Crafting Luxury Spaces...
              </motion.p>

              {/* Ultra-Smooth "Chok Chok" Progress Bar */}
              <div className="w-48 h-[3px] bg-white/10 rounded-full mt-8 overflow-hidden relative border border-white/5">
                <motion.div
                  initial={{ left: "-100%" }}
                  animate={{ left: "100%" }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-[#79c223] to-transparent"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= MAIN WEBSITE LANDING CONTENT ================= */}
      <div className="w-full bg-white text-gray-900 overflow-hidden select-none">
        
        {/* ================= SECTION 1: TRUSTED BADGE & STATS ================= */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
            >
              {/* Left Texts */}
              <div className="lg:col-span-6 space-y-6">
                <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B3A99]/5 border border-[#0B3A99]/10 text-[#0B3A99] text-xs font-bold uppercase tracking-wider">
                  <Star size={14} className="fill-[#0B3A99]" /> RERA Approved & Trusted Project
                </motion.div>
                <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B3A99] tracking-tight leading-tight">
                  Crafting Premium Smart Spaces For Your Family
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-gray-600 font-medium leading-relaxed text-sm sm:text-base">
                  Anandam Residency brings you architectural excellence, vast green landscapes, and modern smart security infra to ensure your future investment turns into a high-return legacy.
                </motion.p>
              </div>

              {/* Right Side Grid - 4 core counters */}
              <div className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-6">
                {[
                  { number: '500+', label: 'Happy Families', color: 'from-blue-600 to-[#0B3A99]' },
                  { number: '100%', label: 'Clear Title Deeds', color: 'from-green-500 to-[#79c223]' },
                  { number: '5+', label: 'Years of Trust', color: 'from-blue-600 to-[#0B3A99]' },
                  { number: '24/7', label: 'Smart Surveillance', color: 'from-green-500 to-[#79c223]' }
                ].map((stat, idx) => (
                  <motion.div 
                    key={idx}
                    variants={fadeInUp}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-white p-6 rounded-3xl border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.04)] text-center group transition-all"
                  >
                    <h3 className={`text-3xl sm:text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                      {stat.number}
                    </h3>
                    <p className="text-xs sm:text-sm font-bold text-gray-500 mt-2 tracking-wide group-hover:text-gray-800 transition-colors">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ================= SECTION 2: LUXURY AMENITIES ================= */}
        <section className="py-24 bg-[#030914] text-white relative px-4 sm:px-6 lg:px-8 rounded-[3rem] mx-4 sm:mx-6 my-8 overflow-hidden">
          {/* Glows */}
          <div className="absolute top-0 right-1/4 w-[350px] h-[350px] bg-[#79c223]/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] bg-[#0B3A99]/20 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="text-[#79c223] text-xs font-black uppercase tracking-[0.2em] block">World-Class Facilities</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Modern Amenities for Modern Lifestyle</h2>
            </div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {[
                { icon: <TreePine size={26} />, title: 'Eco Friendly Park', desc: 'Beautifully landscaped gardens and children playgrounds.', border: 'hover:border-[#79c223]/40' },
                { icon: <ShieldCheck size={26} />, title: 'Gated Community', desc: 'Multi-tier smart digital and manual security checkpoints.', border: 'hover:border-blue-500/40' },
                { icon: <Building2 size={26} />, title: 'Modern Community Hall', desc: 'Spacious high-end clubhouses to celebrate your events.', border: 'hover:border-[#79c223]/40' },
                { icon: <Coins size={26} />, title: 'Easy Loan Support', desc: 'Fully certified and authorized for instant bank approvals.', border: 'hover:border-blue-500/40' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -8 }}
                  className={`bg-white/[0.02] backdrop-blur-md border border-white/5 rounded-3xl p-6 transition-all duration-300 ${item.border}`}
                >
                  <div className="w-12 h-12 bg-white/5 text-[#79c223] rounded-2xl flex items-center justify-center mb-4 shadow-inner">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 tracking-tight">{item.title}</h3>
                  <p className="text-gray-400 font-medium text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ================= SECTION 3: FEATURED PLOTS / GALLERY ================= */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-3">
              <span className="text-[#0B3A99] text-xs font-black uppercase tracking-[0.2em] block">Our Masterpiece Projects</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B3A99] tracking-tight">Explore Featured Properties</h2>
            </div>
            <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-100 hover:bg-[#0B3A99] hover:text-white text-gray-800 text-xs font-bold rounded-xl transition-all group cursor-pointer">
              View All Projects <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { name: 'Anandam Greens', location: 'Asansol, Phase 1', size: '1200 - 2500 sq.ft.', img: 'https://images.unsplash.com/photo-1524813686514-a57563d77965?w=600&fit=crop' },
              { name: 'Anandam Premium City', location: 'Near Main Highway', size: '1500 - 3000 sq.ft.', img: 'https://images.unsplash.com/photo-1592595896551-12b371d546d5?w=600&fit=crop' },
              { name: 'Anandam Prima Township', location: 'Asansol Elite Zone', size: '1800 - 4500 sq.ft.', img: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600&fit=crop' }
            ].map((plot, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                whileHover={{ y: -6 }}
                className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-[0_15px_40px_rgba(0,0,0,0.03)] flex flex-col group"
              >
                <div className="h-56 w-full bg-gray-200 relative overflow-hidden">
                  <Image 
                    src={plot.img} 
                    alt={plot.name} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    unoptimized
                  />
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur px-3 py-1.5 rounded-xl text-[11px] font-black tracking-wide text-[#0B3A99] shadow-sm">
                    Ready to Register
                  </div>
                </div>
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 tracking-tight group-hover:text-[#0B3A99] transition-colors">{plot.name}</h3>
                    <div className="flex items-center gap-1 text-gray-400 font-semibold text-xs mt-1.5">
                      <MapPin size={13} className="text-[#79c223]" /> {plot.location}
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-50 text-xs font-bold text-gray-500">
                    <span>Plot Sizes: <span className="text-gray-800">{plot.size}</span></span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ================= SECTION 4: BENEFITS / WHY US ================= */}
        <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <span className="text-[#79c223] text-xs font-black uppercase tracking-[0.2em] block">Smart Choice</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B3A99] tracking-tight">Why Choose Anandam Residency Plots?</h2>
              <p className="text-gray-600 font-medium text-sm sm:text-base leading-relaxed">
                We focus on building long-term legal safety and top-tier smart living standards. Here is what makes us stand apart from traditional developers:
              </p>
              <ul className="space-y-3.5 pt-2">
                {[
                  'Instant Registry & Possession without complex hidden conditions.',
                  'Wider internal black-top concrete roads (30ft to 40ft wide).',
                  'Pre-installed electricity grid lines and standard drainage solutions.',
                  'High-return ROI guaranteed due to upcoming nearby urban growth hubs.'
                ].map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3 font-semibold text-xs sm:text-sm text-gray-700">
                    <CheckCircle2 size={18} className="text-[#79c223] flex-shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-[350px] lg:h-[450px] w-full bg-gray-200 rounded-[2.5rem] relative overflow-hidden shadow-2xl"
            >
              <Image 
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&fit=crop" 
                alt="Premium Infrastructure" 
                fill 
                className="object-cover"
                unoptimized
              />
            </motion.div>
          </div>
        </section>

      </div>
    </>
  );
}
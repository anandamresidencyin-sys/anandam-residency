'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  FileText, 
  Key, 
  HelpCircle, 
  Mail, 
  Phone, 
  MapPin, 
  Layers,
  Globe,
  UserCheck,
  BellRing
} from 'lucide-react';

// আল্ট্রা-স্মুথ স্ক্রোল ফেড-ইন অ্যানিমেশন ভেরিয়েন্টস
const fadeInUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

const sectionIds = [
  { id: 'introduction', label: '1. Introduction', icon: FileText },
  { id: 'collection', label: '2. Data Collection', icon: Eye },
  { id: 'usage', label: '3. Use of Data', icon: Layers },
  { id: 'security', label: '4. Data Security', icon: Lock },
  { id: 'rights', label: '5. Your Rights', icon: UserCheck },
  { id: 'cookies', label: '6. Cookies Policy', icon: Globe },
  { id: 'changes', label: '7. Policy Changes', icon: BellRing },
  { id: 'contact', label: '8. Contact Us', icon: HelpCircle },
];

export default function PrivacyPage() {
  const [activeSection, setActiveSection] = useState('introduction');

  // স্ক্রোল পজিশন ট্র্যাক করে বামের মেনু আইটেম হাইলাইট করা
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;
      for (const section of sectionIds) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 120,
        behavior: 'smooth',
      });
    }
  };

  return (
    <main className="bg-white text-gray-800 min-h-screen font-sans overflow-hidden select-none">
      
      {/* ================= 1. PREMIUM HERO SECTION (ROYAL BLUE GRADIENT) ================= */}
      <section className="relative py-24 sm:py-32 bg-gradient-to-r from-[#0B3A99] via-[#093182] to-[#051C4A] text-white overflow-hidden">
        {/* গ্লসি ব্যাকগ্রাউন্ড ব্লার এলিমেন্ট */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#79c223]/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center space-y-5">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-[#79c223] text-[11px] font-black uppercase tracking-[0.2em] backdrop-blur-md shadow-sm"
          >
            <Shield size={12} className="text-[#79c223]" /> Compliance & Legal Center
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5.5xl font-black tracking-tight text-white leading-none"
          >
            Privacy <span className="text-[#79c223]">Policy</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.75 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-blue-100 font-medium max-w-xl mx-auto text-xs sm:text-sm tracking-wide leading-relaxed"
          >
            Your privacy is paramount to us. Learn how Anandam Residency handles, secures, and protects your personal datasets with transparency.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-block bg-black/10 border border-white/10 px-4 py-1.5 rounded-xl text-[11px] text-blue-200 font-bold"
          >
            Last Updated: <span className="text-white font-black">June 2026</span>
          </motion.div>
        </div>
      </section>

      {/* ================= 2. TWO COLUMN DATA MATRIX ================= */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-gray-50/50 via-white to-gray-50/30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start relative">
          
          {/* LEFT STICKY NAVIGATION INDEX (Desktop Only) */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-28 bg-white border border-gray-100 rounded-[2rem] p-6 shadow-[0_20px_50px_rgba(11,58,153,0.04)] space-y-6">
            <div className="space-y-1 pb-4 border-b border-gray-100">
              <h3 className="text-xs font-black uppercase tracking-wider text-[#0B3A99]">Document Index</h3>
              <p className="text-[11px] text-gray-400 font-bold">Quickly toggle through data terms</p>
            </div>
            <nav className="flex flex-col gap-1.5">
              {sectionIds.map((section) => {
                const Icon = section.icon;
                const isActive = activeSection === section.id;
                return (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`flex items-center gap-3.5 w-full px-4 py-3.5 rounded-xl font-black text-xs uppercase tracking-wider transition-all border text-left group cursor-pointer ${
                      isActive 
                        ? 'bg-gradient-to-r from-[#0B3A99] to-[#093182] border-transparent text-white shadow-md shadow-blue-900/20' 
                        : 'bg-transparent border-transparent text-gray-400 hover:text-[#0B3A99] hover:bg-gray-50'
                    }`}
                  >
                    <Icon size={14} className={`${isActive ? 'text-[#79c223]' : 'text-gray-400 group-hover:text-[#0B3A99]'}`} />
                    <span className="truncate">{section.label}</span>
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* RIGHT CONTENT WORKSPACE */}
          <div className="col-span-1 lg:col-span-8 space-y-16">
            
            {/* 1. Introduction */}
            <motion.div 
              id="introduction" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={fadeInUp}
              className="space-y-4 scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl font-black text-[#0B3A99] tracking-tight flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#79c223]" /> 1. Introduction
              </h2>
              <div className="bg-white border border-gray-100 p-6 sm:p-8 rounded-2xl shadow-sm text-gray-600 text-xs sm:text-sm font-medium leading-relaxed space-y-4">
                <p>
                  Welcome to <strong className="text-[#0B3A99] font-black">Anandam Residency</strong> (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). We operate premium real estate portfolios, and we are completely committed to maintaining robust privacy safeguards for all our esteemed clients.
                </p>
                <p>
                  This documentation outlines how our technical pipelines collect, organize, secure, and handle information parameters provided directly by you during digital site bookings or data submissions.
                </p>
              </div>
            </motion.div>

            {/* 2. Information Collection and Use */}
            <motion.div 
              id="collection" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={fadeInUp}
              className="space-y-4 scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl font-black text-[#0B3A99] tracking-tight flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#79c223]" /> 2. Information Collection & Use
              </h2>
              <div className="bg-white border border-gray-100 p-6 sm:p-8 rounded-2xl shadow-sm text-gray-600 text-xs sm:text-sm font-medium leading-relaxed space-y-6">
                <p>We log explicit metrics across our systems to optimize communication and property processing timelines:</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-gray-50/70 border border-gray-100 p-5 rounded-xl space-y-1.5">
                    <span className="font-black text-[#0B3A99] block text-xs uppercase tracking-wider">💼 Identity Records</span>
                    <p className="text-[11px] text-gray-500 font-semibold leading-normal">Includes legitimate full names, active telephone lines, digital mail credentials, and KYC verification records required for allocation plots.</p>
                  </div>
                  <div className="bg-gray-50/70 border border-gray-100 p-5 rounded-xl space-y-1.5">
                    <span className="font-black text-[#0B3A99] block text-xs uppercase tracking-wider">🌐 Digital Logs</span>
                    <p className="text-[11px] text-gray-500 font-semibold leading-normal">Includes gateway IP references, technical browser details, system cookie configurations, and navigational interaction history.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 3. Use of Data */}
            <motion.div 
              id="usage" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={fadeInUp}
              className="space-y-4 scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl font-black text-[#0B3A99] tracking-tight flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#79c223]" /> 3. Strategic Use of Data
              </h2>
              <div className="bg-white border border-gray-100 p-6 sm:p-8 rounded-2xl shadow-sm text-gray-600 text-xs sm:text-sm font-medium leading-relaxed space-y-4">
                <p>Anandam Residency applies collected analytics exclusively to power legal and logistical workflows:</p>
                <div className="space-y-2.5 pt-1">
                  {[
                    'To authenticate client profiles and coordinate physical structural site deployments.',
                    'To dispatch real-time construction milestone feeds and price alterations.',
                    'To diagnose backend server anomalies and upgrade UX portal performance.',
                    'To comply with national real estate legal standards and transaction bylaws.'
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-3 font-semibold text-gray-700">
                      <span className="text-[#0B3A99] font-black">✓</span>
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* 4. Security of Data */}
            <motion.div 
              id="security" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={fadeInUp}
              className="space-y-4 scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl font-black text-[#0B3A99] tracking-tight flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#79c223]" /> 4. Data Security Architecture
              </h2>
              <div className="bg-white border border-gray-100 p-6 sm:p-8 rounded-2xl shadow-sm text-gray-600 text-xs sm:text-sm font-medium leading-relaxed space-y-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 bg-blue-50 border-l border-b border-gray-100 rounded-bl-xl text-[#0B3A99]">
                  <Lock size={15} />
                </div>
                <p>
                  We implement robust industry standard defenses including <strong>SSL/TLS enterprise token encryption algorithms</strong> to secure private information data nodes.
                </p>
                <p className="text-amber-700 bg-amber-50/60 border border-amber-100 p-4 rounded-xl text-[11px] font-semibold leading-normal">
                  ⚠️ <em>Notice: While our engineers deploy secure commercial encryptions, no data transfer method over open web servers can claim absolute 100% invulnerability.</em>
                </p>
              </div>
            </motion.div>

            {/* 5. Your Legal Rights */}
            <motion.div 
              id="rights" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={fadeInUp}
              className="space-y-4 scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl font-black text-[#0B3A99] tracking-tight flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#79c223]" /> 5. Sovereign Client Rights
              </h2>
              <div className="bg-white border border-gray-100 p-6 sm:p-8 rounded-2xl shadow-sm text-gray-600 text-xs sm:text-sm font-medium leading-relaxed space-y-4">
                <p>You reserve full regulatory control regarding your saved customer profile:</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-4 bg-gray-50 border border-gray-100 rounded-xl text-center space-y-0.5">
                    <span className="block text-[#0B3A99] font-black text-xs uppercase tracking-wide">Data Access</span>
                    <p className="text-[10px] text-gray-400 font-bold leading-normal">Request complete logs of all archived information arrays.</p>
                  </div>
                  <div className="p-4 bg-gray-50 border border-gray-100 rounded-xl text-center space-y-0.5">
                    <span className="block text-[#0B3A99] font-black text-xs uppercase tracking-wide">Data Erasure</span>
                    <p className="text-[10px] text-gray-400 font-bold leading-normal">Instruct systems to flush temporary promotional logs entirely.</p>
                  </div>
                  <div className="p-4 bg-gray-50 border border-gray-100 rounded-xl text-center space-y-0.5">
                    <span className="block text-[#0B3A99] font-black text-xs uppercase tracking-wide">Rectification</span>
                    <p className="text-[10px] text-gray-400 font-bold leading-normal">Instantly modify faulty contact nodes or address credentials.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 6. Cookies Policy */}
            <motion.div 
              id="cookies" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={fadeInUp}
              className="space-y-4 scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl font-black text-[#0B3A99] tracking-tight flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#79c223]" /> 6. Cookies & Tracking Configurations
              </h2>
              <div className="bg-white border border-gray-100 p-6 sm:p-8 rounded-2xl shadow-sm text-gray-600 text-xs sm:text-sm font-medium leading-relaxed space-y-4">
                <p>
                  Cookies are deployed to evaluate session data and preserve preference records. You maintain the flexibility to alter browser options to dismiss incoming system tracking tags, though certain automated layout fields might lose fluidity.
                </p>
              </div>
            </motion.div>

            {/* 7. Changes to This Privacy Policy */}
            <motion.div 
              id="changes" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={fadeInUp}
              className="space-y-4 scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl font-black text-[#0B3A99] tracking-tight flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#79c223]" /> 7. Document Modifications
              </h2>
              <div className="bg-white border border-gray-100 p-6 sm:p-8 rounded-2xl shadow-sm text-gray-600 text-xs sm:text-sm font-medium leading-relaxed space-y-4">
                <p>
                  We retain full discretion to revise this Privacy Policy protocol at any phase. Modifications will take consequence instantly upon posting the freshly optimized layout on this explicit view page.
                </p>
              </div>
            </motion.div>

            {/* 8. Contact Us */}
            <motion.div 
              id="contact" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={fadeInUp}
              className="space-y-4 scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl font-black text-[#0B3A99] tracking-tight flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#79c223]" /> 8. Legal Compliance Desk
              </h2>
              <div className="bg-gradient-to-br from-blue-50/60 to-white border border-blue-100 p-6 sm:p-8 rounded-3xl shadow-[0_15px_40px_rgba(11,58,153,0.03)] space-y-6">
                <p className="text-xs sm:text-sm text-gray-600 font-semibold">
                  For formal data access verification requests or data processing audits, approach our compliance officers directly via:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <a href="mailto:privacy@anandam.com" className="bg-white p-4.5 rounded-2xl border border-gray-100 hover:border-[#0B3A99]/30 transition shadow-sm flex flex-col items-center text-center space-y-2 group">
                    <Mail size={16} className="text-[#0B3A99]" />
                    <span className="text-gray-400 font-bold block text-[10px] uppercase tracking-wide">Email Channel</span>
                    <span className="text-gray-800 font-extrabold tracking-tight block truncate w-full group-hover:text-[#0B3A99]">anandamresidency.in@gmail.com</span>
                  </a>
                  <a href="tel:+91 8777827497" className="bg-white p-4.5 rounded-2xl border border-gray-100 hover:border-[#0B3A99]/30 transition shadow-sm flex flex-col items-center text-center space-y-2 group">
                    <Phone size={16} className="text-[#0B3A99]" />
                    <span className="text-gray-400 font-bold block text-[10px] uppercase tracking-wide">Phone Line</span>
                    <span className="text-gray-800 font-extrabold tracking-tight block group-hover:text-[#0B3A99]">+91 8777827497</span>
                  </a>
                  <div className="bg-white p-4.5 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center space-y-2">
                    <MapPin size={16} className="text-[#0B3A99]" />
                    <span className="text-gray-400 font-bold block text-[10px] uppercase tracking-wide">Headquarters HQ</span>
                    <span className="text-gray-800 font-extrabold tracking-tight block line-clamp-1">Anandam Residency, Asansol - Gourandi Rd, Panchgachia, Asansol, West Bengal 713341</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </main>
  );
}
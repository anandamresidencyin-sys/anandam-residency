'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FileCheck, 
  Scale, 
  AlertTriangle, 
  Ban, 
  FileText, 
  HelpCircle, 
  Mail, 
  Phone, 
  MapPin, 
  Layers,
  Globe,
  Gavel,
  CheckCircle2
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
  { id: 'agreement', label: '1. Agreement to Terms', icon: FileCheck },
  { id: 'license', label: '2. Use License', icon: Scale },
  { id: 'disclaimer', label: '3. Disclaimer', icon: AlertTriangle },
  { id: 'limitations', label: '4. Limitations', icon: Ban },
  { id: 'accuracy', label: '5. Material Accuracy', icon: FileText },
  { id: 'links', label: '6. External Links', icon: Globe },
  { id: 'modifications', label: '7. Modifications', icon: Layers },
  { id: 'governing-law', label: '8. Governing Law', icon: Gavel },
  { id: 'contact', label: '9. Contact Info', icon: HelpCircle },
];

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState('agreement');

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
        {/* গ্লসি ব্যাকগ্রাউন্ড ব্লার ইফেক্ট */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#79c223]/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center space-y-5">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-[#79c223] text-[11px] font-black uppercase tracking-[0.2em] backdrop-blur-md shadow-sm"
          >
            <Gavel size={12} className="text-[#79c223]" /> Legal Framework & Policies
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5.5xl font-black tracking-tight text-white leading-none"
          >
            Terms & <span className="text-[#79c223]">Conditions</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.75 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-blue-100 font-medium max-w-xl mx-auto text-xs sm:text-sm tracking-wide leading-relaxed"
          >
            Please read these terms of service carefully before accessing our property documentation, portal tools, and legal processing systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-block bg-black/10 border border-white/10 px-4 py-1.5 rounded-xl text-[11px] text-blue-200 font-bold"
          >
            Effective Date: <span className="text-white font-black">June 2026</span>
          </motion.div>
        </div>
      </section>

      {/* ================= 2. TWO COLUMN TERMS MATRIX ================= */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-gray-50/50 via-white to-gray-50/30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start relative">
          
          {/* LEFT STICKY NAVIGATION INDEX (Desktop Only) */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-28 bg-white border border-gray-100 rounded-[2rem] p-6 shadow-[0_20px_50px_rgba(11,58,153,0.04)] space-y-6">
            <div className="space-y-1 pb-4 border-b border-gray-100">
              <h3 className="text-xs font-black uppercase tracking-wider text-[#0B3A99]">Legal Index</h3>
              <p className="text-[11px] text-gray-400 font-bold">Navigate user obligations</p>
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
            
            {/* 1. Agreement to Terms */}
            <motion.div 
              id="agreement" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={fadeInUp}
              className="space-y-4 scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl font-black text-[#0B3A99] tracking-tight flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#79c223]" /> 1. Agreement to Terms
              </h2>
              <div className="bg-white border border-gray-100 p-6 sm:p-8 rounded-2xl shadow-sm text-gray-600 text-xs sm:text-sm font-medium leading-relaxed space-y-4">
                <p>
                  By accessing and browsing this web interface or executing operational tools provided by <strong className="text-[#0B3A99] font-black">Anandam Residency</strong>, you unconditionally accept and contractually agree to be fully bound by the clauses contained in this master layout parameters framework.
                </p>
                <p>
                  If you hold any structural disagreement or do not wish to abide strictly by the outlined stipulations, you are explicitly directed to cease using our digital platforms and services immediately.
                </p>
              </div>
            </motion.div>

            {/* 2. Use License */}
            <motion.div 
              id="license" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={fadeInUp}
              className="space-y-4 scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl font-black text-[#0B3A99] tracking-tight flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#79c223]" /> 2. Transitory Use License
              </h2>
              <div className="bg-white border border-gray-100 p-6 sm:p-8 rounded-2xl shadow-sm text-gray-600 text-xs sm:text-sm font-medium leading-relaxed space-y-5">
                <p>
                  Permission is temporarily granted to download a singular copy of the architectural materials, brochures, or underlying site layouts on Anandam Residency&apos;s data network for personal, strictly non-commercial transient review only. This constitutes a formal grant of license, not an absolute transfer of legal title.
                </p>
                
                <div className="bg-gray-50/70 border border-gray-100 p-5 rounded-xl space-y-3">
                  <span className="font-black text-red-700 block text-xs uppercase tracking-wider">🚫 Strict License Prohibitions:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-[11px] font-bold text-gray-500">
                    <div className="flex items-center gap-2"><span className="text-red-500">✕</span> Modifying or duplicating proprietary text layout frameworks.</div>
                    <div className="flex items-center gap-2"><span className="text-red-500">✕</span> Utilizing real estate media data for independent commercial displays.</div>
                    <div className="flex items-center gap-2"><span className="text-red-500">✕</span> Attempting to reverse-engineer core platform software scripts.</div>
                    <div className="flex items-center gap-2"><span className="text-red-500">✕</span> Mirroring asset data payloads on secondary cloud servers.</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 3. Disclaimer */}
            <motion.div 
              id="disclaimer" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={fadeInUp}
              className="space-y-4 scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl font-black text-[#0B3A99] tracking-tight flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#79c223]" /> 3. Architectural Disclaimer
              </h2>
              <div className="bg-white border border-gray-100 p-6 sm:p-8 rounded-2xl shadow-sm text-gray-600 text-xs sm:text-sm font-medium leading-relaxed space-y-4">
                <p>
                  The informational materials on Anandam Residency&apos;s digital domains are furnished strictly on an <strong className="text-gray-900 font-extrabold">&quot;as is&quot;</strong> and <strong className="text-gray-900 font-extrabold">&quot;as available&quot;</strong> framework. 
                </p>
                <p>
                  Anandam Residency hereby provides notice of disclaimer and negates all alternative explicit guarantees, including without limitation, implied merchantability setups, fitness assurances for specific structural plot investments, or patent compliance.
                </p>
              </div>
            </motion.div>

            {/* 4. Limitations of Liability */}
            <motion.div 
              id="limitations" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={fadeInUp}
              className="space-y-4 scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl font-black text-[#0B3A99] tracking-tight flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#79c223]" /> 4. Limitations of Liability
              </h2>
              <div className="bg-white border border-gray-100 p-6 sm:p-8 rounded-2xl shadow-sm text-gray-600 text-xs sm:text-sm font-medium leading-relaxed space-y-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 bg-red-50 border-l border-b border-gray-100 rounded-bl-xl text-red-600">
                  <AlertTriangle size={15} />
                </div>
                <p>
                  In no structural execution event shall Anandam Residency, its secondary developers, or construction suppliers be held accountable for any collateral damages (including corporate profit drops, client data corruption, or temporary workflow suspension) arising out of the performance usage or inability to interface with our portal.
                </p>
              </div>
            </motion.div>

            {/* 5. Accuracy of Materials */}
            <motion.div 
              id="accuracy" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={fadeInUp}
              className="space-y-4 scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl font-black text-[#0B3A99] tracking-tight flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#79c223]" /> 5. Data & Material Accuracy
              </h2>
              <div className="bg-white border border-gray-100 p-6 sm:p-8 rounded-2xl shadow-sm text-gray-600 text-xs sm:text-sm font-medium leading-relaxed space-y-4">
                <p>
                  The text assets materializing across this architecture could potentially incorporate technical rendering lag, photographic differences, or minor typographical variations. 
                </p>
                <p>
                  We do not contractually warrant that the public parameters displayed are 100% current or error-free. Anandam Residency retains absolute clearance to modify structural maps or listing pricing charts at any timestamp without broadcast notice.
                </p>
              </div>
            </motion.div>

            {/* 6. External Links */}
            <motion.div 
              id="links" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={fadeInUp}
              className="space-y-4 scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl font-black text-[#0B3A99] tracking-tight flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#79c223]" /> 6. External Links & Portals
              </h2>
              <div className="bg-white border border-gray-100 p-6 sm:p-8 rounded-2xl shadow-sm text-gray-600 text-xs sm:text-sm font-medium leading-relaxed space-y-4">
                <p>
                  Our internal layout system does not systematically pre-screen secondary external anchors or redirect connections attached to this domain. The inclusion of external redirects does not imply legal endorsement by Anandam Residency. Accessing peripheral target gateways is strictly at the operator&apos;s discrete risk layer.
                </p>
              </div>
            </motion.div>

            {/* 7. Modifications of Terms */}
            <motion.div 
              id="modifications" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={fadeInUp}
              className="space-y-4 scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl font-black text-[#0B3A99] tracking-tight flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#79c223]" /> 7. Policy Manifest Modifications
              </h2>
              <div className="bg-white border border-gray-100 p-6 sm:p-8 rounded-2xl shadow-sm text-gray-600 text-xs sm:text-sm font-medium leading-relaxed space-y-4">
                <p>
                  Anandam Residency holds unconditional leverage to reshape these conditions of service at any interval. By continuing interaction routines across our digital endpoints, you dynamically consent to be bound by the most modern version of these protocols.
                </p>
              </div>
            </motion.div>

            {/* 8. Governing Law */}
            <motion.div 
              id="governing-law" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={fadeInUp}
              className="space-y-4 scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl font-black text-[#0B3A99] tracking-tight flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#79c223]" /> 8. Governing Jurisdiction Law
              </h2>
              <div className="bg-white border border-gray-100 p-6 sm:p-8 rounded-2xl shadow-sm text-gray-600 text-xs sm:text-sm font-medium leading-relaxed space-y-4">
                <p>
                  These contractual statements are structurally governed by and evaluated in rigorous alignment with the **Federal Laws of India**. Any litigation or legal resolution disputes emerging out of property allocations shall be channeled exclusively via the judicial court frameworks located in India.
                </p>
              </div>
            </motion.div>

            {/* 9. Contact Information */}
            <motion.div 
              id="contact" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={fadeInUp}
              className="space-y-4 scroll-mt-28"
            >
              <h2 className="text-xl sm:text-2xl font-black text-[#0B3A99] tracking-tight flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#79c223]" /> 9. Corporate Legal Desk
              </h2>
              <div className="bg-gradient-to-br from-blue-50/60 to-white border border-blue-100 p-6 sm:p-8 rounded-3xl shadow-[0_15px_40px_rgba(11,58,153,0.03)] space-y-6">
                <p className="text-xs sm:text-sm text-gray-600 font-semibold">
                  For official inquiries, title deed queries, or immediate clarifications regarding our transactional conditions, reach our legal council at:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <a href="mailto:legal@anandam.com" className="bg-white p-4.5 rounded-2xl border border-gray-100 hover:border-[#0B3A99]/30 transition shadow-sm flex flex-col items-center text-center space-y-2 group">
                    <Mail size={16} className="text-[#0B3A99]" />
                    <span className="text-gray-400 font-bold block text-[10px] uppercase tracking-wide">Legal Council</span>
                    <span className="text-gray-800 font-extrabold tracking-tight block truncate w-full group-hover:text-[#0B3A99]">anandamresidency.in@gmail.com</span>
                  </a>
                  <a href="tel:+91 8777827497" className="bg-white p-4.5 rounded-2xl border border-gray-100 hover:border-[#0B3A99]/30 transition shadow-sm flex flex-col items-center text-center space-y-2 group">
                    <Phone size={16} className="text-[#0B3A99]" />
                    <span className="text-gray-400 font-bold block text-[10px] uppercase tracking-wide">Helpline Terminal</span>
                    <span className="text-gray-800 font-extrabold tracking-tight block group-hover:text-[#0B3A99]">+91 8777827497</span>
                  </a>
                  <div className="bg-white p-4.5 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center space-y-2">
                    <MapPin size={16} className="text-[#0B3A99]" />
                    <span className="text-gray-400 font-bold block text-[10px] uppercase tracking-wide">Corporate Location</span>
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
'use client';

import { MapPin, FileCheck, Percent, Zap, Phone, MessageCircle, ArrowRight, Sparkles, CheckCircle2, ShieldCheck, HeartHandshake } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ServicesPage() {
  const services = [
    {
      icon: <MapPin size={28} />,
      title: 'Plot Selection & Consultation',
      badge: 'Strategic Matrix',
      description:
        'Our expert architectural engineering team helps you identify and secure high-appreciation plots aligning perfectly with your investment models and generational layout targets.',
      features: [
        'Personalized configuration audit',
        'VIP private site explorations',
        'Real-time market valuation index',
        'Micro-location analytics reporting'
      ],
      color: 'from-blue-600 to-indigo-600',
    },
    {
      icon: <FileCheck size={28} />,
      title: 'Legal Documentation & Title Care',
      badge: 'Zero Risk Guard',
      description:
        'Rigorous legal support offering clear title deeds verification, strict compliance oversight, and absolute administrative registration processing without corporate latency.',
      features: [
        '30-Year clear title deed history vetting',
        'Municipal zoning & boundary compliance verification',
        'Government standard document layouts',
        'Accelerated real-time deed registration support'
      ],
      color: 'from-[#79c223] to-emerald-600',
    },
    {
      icon: <Percent size={28} />,
      title: 'Financing & Custom Loan Desks',
      badge: 'Institutional Leverage',
      description:
        'Fluid financing networks powered by banking partners providing up to 80% direct plot asset leverage coupled with tailored, low-interest amortization plans.',
      features: [
        'Elite direct tier bank associations',
        'Optimized EMI allocation frameworks',
        'Collateral processing advice',
        'Customized deferred milestone matrices'
      ],
      color: 'from-amber-500 to-orange-600',
    },
    {
      icon: <Zap size={28} />,
      title: 'Infrastructure & Smart Development',
      badge: 'Engineering Core',
      description:
        'Complete spatial modernization featuring wide asphalt road arrays, smart electrical grids, secure multi-tier gated parameters, and integrated IoT pipelines.',
      features: [
        'Eco-conscious underground utility conduits',
        'Smart centralized solar light networks',
        'AI-monitored high-grade security arrays',
        'Dedicated botanical buffer areas'
      ],
      color: 'from-purple-600 to-pink-600',
    },
    {
      icon: <Phone size={28} />,
      title: '24/7 Priority Relationship Desks',
      badge: 'Dedicated Portal',
      description:
        'Around-the-clock priority response mechanics managed by senior property engineers to handle site layout coordination and emergency architectural updates instantly.',
      features: [
        'Immediate emergency line call-routing',
        'Direct digital ticket execution paths',
        'VIP concierge transport arrangement',
        'Cross-department document tracking'
      ],
      color: 'from-cyan-500 to-blue-600',
    },
    {
      icon: <MessageCircle size={28} />,
      title: 'Comprehensive Asset Aftercare',
      badge: 'Generational Continuity',
      description:
        'Post-purchase operational protection systems including structural plot maintenance, boundary care, community security deployment, and capital-growth advisory.',
      features: [
        'Automated perimeter weed & debris management',
        'Community guidelines governance desk',
        'Swift internal conflict resolution protocols',
        'Asset appreciation compounding tracking'
      ],
      color: 'from-teal-500 to-emerald-600',
    },
  ];

  return (
    <main className="bg-slate-50/50 min-h-screen text-slate-900 selection:bg-[#79c223] selection:text-white overflow-hidden">
      
      {/* ================= HERO PREMIUM SECTION ================= */}
      <section className="relative py-28 sm:py-36 bg-gradient-to-br from-[#0B3A99] via-[#062466] to-[#030914] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(121,194,35,0.15),transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(11,58,153,0.2),transparent_50%)]" />
        <div className="absolute -bottom-1 inset-x-0 h-24 bg-gradient-to-t from-slate-50/50 to-transparent" />
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#79c223] text-xs font-bold uppercase tracking-widest"
          >
            <Sparkles size={12} /> Institutional Real Estate Ecosystem
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-4xl sm:text-6xl font-black tracking-tight leading-none"
          >
            Architectural Services & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#79c223] to-emerald-400">Asset Care</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 max-w-2xl mx-auto font-medium text-sm sm:text-base leading-relaxed"
          >
            From legal title tracking arrays to autonomous smart site configurations—our enterprise desk provides end-to-end investment protection.
          </motion.p>
        </div>
      </section>

      {/* ================= GRID DEPLOYMENT MATRIX ================= */}
      <section className="py-20 relative z-20 -mt-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                key={index} 
                className="bg-white rounded-[2rem] p-6 sm:p-8 shadow-xl shadow-slate-100/70 border border-slate-200/50 hover:border-[#79c223]/30 transition-all group flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1 duration-300"
              >
                <div>
                  {/* Icon Node & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-white shadow-md shadow-slate-200 group-hover:scale-105 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <span className="px-2.5 py-1 bg-slate-50 text-slate-400 text-[10px] font-black uppercase tracking-widest rounded-md border border-slate-100">
                      {service.badge}
                    </span>
                  </div>

                  {/* Text Matrices */}
                  <h3 className="text-xl font-black text-[#0B3A99] mb-3 tracking-tight group-hover:text-[#79c223] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 font-medium text-xs sm:text-sm leading-relaxed mb-6 text-justify">
                    {service.description}
                  </p>
                </div>

                {/* Sub-Feature Cluster */}
                <div className="space-y-2 pt-4 border-t border-slate-50">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-slate-600 font-semibold text-xs">
                      <CheckCircle2 size={14} className="text-[#79c223] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INTERACTIVE TIMELINE PROCESS ================= */}
      <section className="py-24 bg-white relative border-y border-slate-100">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/30 to-white pointer-events-none" />
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          
          <div className="text-center max-w-xl mx-auto mb-20 space-y-2">
            <span className="text-[#79c223] text-xs font-black uppercase tracking-widest block">Workflow Execution</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B3A99] tracking-tight">
              Operational Sequence Blueprint
            </h2>
            <p className="text-slate-400 font-medium text-xs sm:text-sm">
              How our infrastructure layers convert capital variables into certified physical real-estate assets.
            </p>
          </div>

          <div className="max-w-5xl mx-auto relative">
            {/* Absolute Linear Bridge */}
            <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#0B3A99] via-[#79c223] to-slate-200 -translate-x-1/2 hidden md:block" />
            <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-slate-200 md:hidden" />

            <div className="space-y-12">
              {[
                {
                  step: '01',
                  icon: <Sparkles size={16} />,
                  title: 'Initial Alignment Consultation',
                  description: 'Our senior consultants evaluate your liquidity criteria, required layout boundaries, and strategic holding horizons to align specific plot portfolios.',
                },
                {
                  step: '02',
                  icon: <MapPin size={16} />,
                  title: 'On-Site Private VIP Inspections',
                  description: 'Physical coordination desks prepare custom transport vectors, allowing you to walk properties alongside structural development engineers.',
                },
                {
                  step: '03',
                  icon: <ShieldCheck size={16} />,
                  title: 'Asset Selection & Value Negotiation',
                  description: 'Lock your specific asset coordinate numbers within the central server registry and optimize payment terms under institutional guidance.',
                },
                {
                  step: '04',
                  icon: <FileCheck size={16} />,
                  title: 'Title Deed Validation & Registration',
                  description: 'Legal attorneys execute deep title tracing reports, secure government municipal approvals, and finalize physical property registry logs.',
                },
                {
                  step: '05',
                  icon: <HeartHandshake size={16} />,
                  title: 'Possession Transfer & Multi-Tier Support',
                  description: 'Take absolute ownership of physical keys, title papers, and access channels with 24/7 proactive boundary maintenance monitoring.',
                },
              ].map((process, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5 }}
                    key={index} 
                    className={`flex flex-col md:flex-row items-start gap-8 relative ${isEven ? 'md:flex-row-reverse' : ''}`}
                  >
                    
                    {/* Center Dot Node */}
                    <div className="absolute left-6 md:left-1/2 w-10 h-10 rounded-xl bg-white border-2 border-[#79c223] shadow-md flex items-center justify-center text-[#0B3A99] z-20 -translate-x-1/2 text-xs font-black">
                      {process.icon}
                    </div>

                    {/* Content Box */}
                    <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                      <div className="bg-slate-50/70 hover:bg-slate-50 border border-slate-100 p-6 sm:p-8 rounded-[2rem] transition-colors space-y-3 relative group">
                        <span className="absolute top-6 right-6 text-3xl font-black text-slate-200/70 group-hover:text-[#79c223]/20 transition-colors">
                          {process.step}
                        </span>
                        <h3 className="text-lg sm:text-xl font-black text-[#0B3A99] tracking-tight">{process.title}</h3>
                        <p className="text-slate-500 font-medium text-xs sm:text-sm leading-relaxed text-justify">{process.description}</p>
                      </div>
                    </div>

                    {/* Spacer block for clean grid logic */}
                    <div className="w-1/2 hidden md:block" />

                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ================= HIGH-CONVERSION CTA ================= */}
      <section className="py-20 bg-gradient-to-br from-[#79c223] to-emerald-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_40%)]" />
        <div className="container mx-auto px-4 text-center space-y-6 max-w-4xl relative z-10">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight">Ready to Configure Your Land Portfolio?</h2>
          <p className="text-sm sm:text-lg text-emerald-50 max-w-2xl mx-auto font-medium leading-relaxed">
            Connect with our corporate site management office directly to access unlisted inventory structures.
          </p>
          
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
              <Link
                href="/book-visit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0B3A99] text-white font-black text-xs uppercase tracking-widest rounded-xl hover:bg-[#062466] shadow-xl shadow-green-900/10 transition-colors"
              >
                Schedule Private Site Visit <ArrowRight size={14} />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
              <a
                href="tel:+918777827497"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-black text-xs uppercase tracking-widest rounded-xl hover:bg-white/10 transition-all"
              >
                Connect to Relationship Desk
              </a>
            </motion.div>
          </div>
        </div>
      </section>

    </main>
  );
} 
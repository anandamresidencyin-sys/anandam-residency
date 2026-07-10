'use client';

import { CheckCircle2, ArrowRight, ShieldCheck, Landmark, Sparkles, MapPin } from 'lucide-react';
import Link from 'next/link';

export function AboutSection() {
  const coreFeatures = [
    {
      icon: <MapPin className="text-[#79c223]" size={22} />,
      title: "Prime Locations",
      desc: "Strategically located in Asansol, West Bengal near major transport hubs, railways, and schools."
    },
    {
      icon: <ShieldCheck className="text-[#0B3A99]" size={22} />,
      title: "Clear Title Deed",
      desc: "100% legally verified and clear documentation with complete transparency guaranteed."
    },
    {
      icon: <Landmark className="text-[#79c223]" size={22} />,
      title: "Bank Loan Facility",
      desc: "Hassle-free financing options through our strategic partnerships with leading banks."
    },
    {
      icon: <Sparkles className="text-[#0B3A99]" size={22} />,
      title: "Modern Amenities",
      desc: "Gated safe communities featuring wide internal roads, drainage systems, and green parks."
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT COLUMN - Premium Creative Images */}
          <div className="lg:col-span-5 relative px-4 lg:px-0">
            {/* Main Image Container with elegant borders */}
            <div className="relative group rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.12)] border-4 border-white">
              <img
                src="/about us imag.jpeg"
                alt="Anandam Residency Project Area"
                className="w-full h-[450px] md:h-[520px] object-cover transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Overlapping Floating Badge/Card */}
            <div className="absolute -bottom-6 -right-2 md:right-6 bg-gradient-to-br from-[#0B3A99] to-[#082f7d] rounded-2xl p-5 md:p-6 text-white shadow-[0_15px_35px_rgba(11,58,153,0.3)] border border-white/20 transform duration-500 hover:scale-105">
              <div className="flex items-center gap-3">
                <p className="text-4xl md:text-5xl font-black tracking-tight text-[#79c223]">2018</p>
                <div className="w-[2px] h-10 bg-white/20" />
                <p className="text-xs md:text-sm font-semibold tracking-wide text-gray-200 uppercase leading-snug">
                  Delivering<br />Excellence
                </p>
              </div>
            </div>

            {/* Experience Floating Ring Dot */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#79c223]/10 rounded-full -z-10 animate-pulse" />
          </div>

          {/* RIGHT COLUMN - Well Formatted Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Sub-header text design */}
            <div className="inline-flex items-center gap-2 bg-[#79c223]/10 border border-[#79c223]/20 px-4 py-1.5 rounded-full self-start mb-4">
              <span className="w-2 h-2 rounded-full bg-[#79c223] animate-ping" />
              <span className="text-[#68a61e] font-extrabold text-xs uppercase tracking-widest">
                Discover Your Dream Plot
              </span>
            </div>

            {/* Heading text style */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
              Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B3A99] to-[#1554d1]">Anandam Residency</span>
            </h2>

            {/* Main intro paragraph */}
            <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed font-medium">
              Anandam Residency is a place where serenity meets convenience. Our residency offers a range of exceptional features and amenities that make it the perfect choice for a fulfilling and vibrant living experience. We prioritize quality and excellence, offering spacious plots and amenities that cater to the diverse needs of our residents.
            </p>

            {/* Premium Grid Features Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {coreFeatures.map((item, idx) => (
                <div 
                  key={idx} 
                  className="group bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:border-gray-200"
                >
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0B3A99] text-base mb-1 group-hover:text-[#79c223] transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Action button link styling */}
            <div className="self-start">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-7 py-4 bg-[#0B3A99] hover:bg-[#79c223] text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-blue-900/10 hover:shadow-green-600/10 group"
              >
                Know More About Us
                <ArrowRight size={18} className="transform group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
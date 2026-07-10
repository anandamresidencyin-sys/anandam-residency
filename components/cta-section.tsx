'use client';

import { Phone, MessageCircle, BookOpen, ArrowRight, HelpCircle } from 'lucide-react';
import Link from 'next/link';

export function CTASection() {
  return (
    <section className="relative py-24 bg-[#FAFBFD] overflow-hidden select-none touch-pan-y">
      {/* Background Sophisticated Soft Orbs */}
      <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] bg-[#79c223]/5 rounded-full blur-[130px] pointer-events-none animate-pulse duration-[8000ms]" />
      <div className="absolute bottom-1/3 -right-32 w-[500px] h-[500px] bg-[#0B3A99]/5 rounded-full blur-[130px] pointer-events-none animate-pulse duration-[10000ms]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          
          {/* LEFT COLUMN - Premium Brand Voice & Value Prop (5-Cols) */}
          <div className="lg:col-span-5 text-left">
            <div className="inline-flex items-center gap-2 bg-[#79c223]/10 border border-[#79c223]/20 px-4 py-2 rounded-full mb-5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#79c223] animate-ping" />
              <span className="text-[#68a61e] font-extrabold text-xs uppercase tracking-[0.25em]">
                Exclusive Opportunity
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B3A99] tracking-tight leading-[1.2] mb-6">
              Ready To Own <br />Your Dream Plot?
            </h2>
            
            <div className="w-20 h-1.5 bg-[#79c223] rounded-full mb-6" />
            
            <p className="text-gray-500 font-medium text-sm sm:text-base leading-relaxed mb-8 max-w-md">
              Join hundreds of happy families who have already secured their future asset in Anandam Residency. Take your step towards luxury and high returns today!
            </p>

            {/* Micro Support Box */}
            <div className="hidden lg:flex items-center gap-3.5 p-4 bg-white rounded-2xl border border-gray-100 shadow-[0_10px_25px_rgba(11,58,153,0.02)] max-w-sm">
              <div className="w-10 h-10 rounded-xl bg-[#0B3A99]/5 flex items-center justify-center text-[#0B3A99]">
                <HelpCircle size={18} />
              </div>
              <div>
                <h5 className="text-[#0B3A99] font-extrabold text-xs uppercase tracking-wider">Need Custom Plan?</h5>
                <p className="text-gray-400 text-xs font-medium mt-0.5">Our consultants are online right now.</p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Interactive Action Grid (7-Cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            
            {/* Action Card 1: Book Site Visit */}
            <Link
              href="/book-visit"
              className="group relative bg-white border border-gray-200/80 rounded-[2.5rem] p-6 sm:p-8 transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-[#79c223] hover:shadow-[0_20px_40px_rgba(11,58,153,0.04)] active:scale-[0.99] overflow-hidden flex flex-col justify-between min-h-[220px] sm:col-span-2"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FAFBFD] via-transparent to-[#79c223]/4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-5 relative z-10 mb-4">
                <div className="w-14 h-14 bg-[#0B3A99]/5 group-hover:bg-[#79c223]/15 text-[#0B3A99] group-hover:text-[#79c223] rounded-2xl flex items-center justify-center border border-[#0B3A99]/5 group-hover:border-[#79c223]/20 transition-all duration-500 transform group-hover:scale-105 group-hover:rotate-3 flex-shrink-0 shadow-sm">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-black text-[#0B3A99] group-hover:text-[#79c223] tracking-tight transition-colors duration-300">
                    Book Site Visit
                  </h3>
                  <p className="text-gray-400 font-medium text-xs sm:text-sm leading-relaxed mt-1">
                    Schedule a premium personalized visit to our real estate project layout.
                  </p>
                </div>
              </div>

              <div className="relative z-10 flex justify-end mt-auto">
                <span className="inline-flex items-center gap-1.5 text-xs font-black tracking-wider uppercase text-[#0B3A99] group-hover:text-[#79c223] transition-colors duration-300">
                  <span>Schedule Now</span>
                  <ArrowRight size={14} className="transform transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-[#79c223] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left" />
            </Link>

            {/* Action Card 2: Call Direct Sales */}
            <a
              href="tel:+91 8777827497"
              className="group relative bg-white border border-gray-200/80 rounded-[2.5rem] p-6 sm:p-8 transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-[#79c223] hover:shadow-[0_20px_40px_rgba(11,58,153,0.04)] active:scale-[0.99] overflow-hidden flex flex-col justify-between min-h-[220px]"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FAFBFD] via-transparent to-[#79c223]/4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10 mb-4">
                <div className="w-12 h-12 bg-[#0B3A99]/5 group-hover:bg-[#79c223]/15 text-[#0B3A99] group-hover:text-[#79c223] rounded-xl flex items-center justify-center border border-[#0B3A99]/5 group-hover:border-[#79c223]/20 transition-all duration-500 transform group-hover:scale-105 mb-5 shadow-sm">
                  <Phone size={20} className="group-hover:animate-bounce" />
                </div>
                <h3 className="text-base sm:text-lg font-black text-[#0B3A99] group-hover:text-[#79c223] tracking-tight transition-colors duration-300">
                  Call Direct Sales
                </h3>
                <p className="text-gray-400 font-medium text-xs leading-relaxed mt-1">
                  Speak directly with our property consultants.
                </p>
              </div>

              <div className="relative z-10 flex justify-end mt-auto">
                <span className="inline-flex items-center gap-1.5 text-xs font-black tracking-wider uppercase text-[#0B3A99] group-hover:text-[#79c223] transition-colors duration-300">
                  <span>Connect</span>
                  <ArrowRight size={14} className="transform transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-[#79c223] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left" />
            </a>

            {/* Action Card 3: WhatsApp Chat Helpdesk */}
            <a
              href="https://wa.me/+91 8777827497"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white border border-gray-200/80 rounded-[2.5rem] p-6 sm:p-8 transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-[#79c223] hover:shadow-[0_20px_40px_rgba(11,58,153,0.04)] active:scale-[0.99] overflow-hidden flex flex-col justify-between min-h-[220px]"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FAFBFD] via-transparent to-[#79c223]/4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10 mb-4">
                <div className="w-12 h-12 bg-[#0B3A99]/5 group-hover:bg-[#79c223]/15 text-[#0B3A99] group-hover:text-[#79c223] rounded-xl flex items-center justify-center border border-[#0B3A99]/5 group-hover:border-[#79c223]/20 transition-all duration-500 transform group-hover:scale-105 mb-5 shadow-sm">
                  <MessageCircle size={20} />
                </div>
                <h3 className="text-base sm:text-lg font-black text-[#0B3A99] group-hover:text-[#79c223] tracking-tight transition-colors duration-300">
                  WhatsApp Support
                </h3>
                <p className="text-gray-400 font-medium text-xs leading-relaxed mt-1">
                  Connect with our chat desk instantly.
                </p>
              </div>

              <div className="relative z-10 flex justify-end mt-auto">
                <span className="inline-flex items-center gap-1.5 text-xs font-black tracking-wider uppercase text-[#0B3A99] group-hover:text-[#79c223] transition-colors duration-300">
                  <span>Chat Live</span>
                  <ArrowRight size={14} className="transform transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-[#79c223] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left" />
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}
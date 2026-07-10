'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowUpRight, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  // Quick Links Configuration - Projects বাদ দেওয়া হয়েছে
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Plots', path: '/plots' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact Us', path: '/contact' }
  ];

  // Projects Links - শুধু প্রজেক্টের লিংক
  const projectsLinks = [
    { name: "Officer's Campus", path: '/projects/officers-campus' },
  ];
  

  // Plots Links - শুধু প্লটের লিংক
  const plotsLinks = [
    { name: 'Anandam Residency Premium Plot', path: '/plots/anandam-residency-plot' },
  ];

  return (
    <footer className="w-full bg-[#030914] p-4 sm:p-6 lg:p-8 select-none">
      {/* Outer Container */}
      <div className="relative w-full max-w-[90rem] mx-auto bg-[#051126] border border-blue-900/40 rounded-[2.5rem] pt-16 pb-12 sm:pb-8 px-6 sm:px-10 lg:px-16 overflow-hidden">
        
        {/* Deep Abstract Glows */}
        <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-[#79c223]/4 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-[#0B3A99]/10 rounded-full blur-[150px] pointer-events-none" />

        {/* 4-Column Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16 relative z-10">
          
          {/* Column 1: Logo Brand & Social Handles (4-Cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block group">
              <Image 
                src="/Anandam Residency Logo.jpeg" 
                alt="Anandam Residency Logo" 
                width={75} 
                height={75} 
                className="h-[75px] w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                priority
              />
            </Link>

            <p className="text-gray-400 font-medium text-sm canvas-text leading-relaxed max-w-sm">
              Providing cutting-edge infrastructure and premium smart residential plots to build your legacy with expertise.
            </p>

            {/* Social Rings */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: <Facebook size={16} />, url: 'https://www.facebook.com/share/15nsFG3KWa/', label: 'Facebook' },
                { icon: <Instagram size={16} />, url: 'https://www.instagram.com/anandamasansol?igsh=ZzllOXdvNHJ1amw4', label: 'Instagram' },
                { icon: <Youtube size={16} />, url: 'https://www.youtube.com/@anandamasansolofficial1519?si=RlhpxYekY5ng1S6k', label: 'YouTube' },
                { icon: <Linkedin size={16} />, url: 'https://www.linkedin.com/in/anandam-residency-10075a281/', label: 'LinkedIn' },
                { icon: <Twitter size={16} />, url: 'https://x.com/BipulMishr84262', label: 'Twitter' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#79c223] hover:border-[#79c223] transition-all duration-300 hover:-translate-y-1 active:scale-95 shadow-sm"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links (2-Cols) - Projects বাদ */}
          <div className="lg:col-span-2 space-y-5 lg:pl-4">
            <h4 className="text-white font-bold text-base tracking-tight">Quick Links</h4>
            <ul className="space-y-3 font-medium text-sm">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.path}
                    className="text-gray-400 hover:text-[#79c223] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Projects (3-Cols) */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="text-white font-bold text-base tracking-tight">Our Projects</h4>
            <ul className="space-y-3 font-medium text-sm">
              {projectsLinks.map((project, i) => (
                <li key={i}>
                  <Link
                    href={project.path}
                    className="text-gray-400 hover:text-[#79c223] transition-colors duration-200 hover:translate-x-1 inline-block transition-transform"
                  >
                    {project.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="text-white font-bold text-base tracking-tight">Contact Us</h4>
            <ul className="space-y-4 font-medium text-sm">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin size={16} className="text-[#79c223] mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">Anandam Residency, Asansol - Gourandi Rd, Panchgachia, Asansol, West Bengal 713341</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone size={16} className="text-[#79c223] flex-shrink-0" />
                <a href="tel:+918777827497" className="hover:text-[#79c223] transition-colors">
                  +91 87778 27497
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail size={16} className="text-[#79c223] flex-shrink-0" />
                <a href="mailto:AnandamResidency.in@gmail.com" className="hover:text-[#79c223] transition-colors break-all">
                  AnandamResidency.in@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Dynamic Background Watermark Text */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full max-w-7xl text-center pointer-events-none opacity-[0.02] select-none hidden md:block">
          <h2 className="text-[6.5rem] font-black tracking-[0.15em] text-white uppercase font-sans">
            ANANDAM
          </h2>
        </div>

        {/* Bottom Footer Area */}
        <div className="border-t border-white/5 pt-6 mt-6 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
          
          {/* MAVIXO Brand Credit - Left Side */}
          <div className="w-full md:w-auto text-center md:text-left">
            <a
              href="https://www.mavixoinfo.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#79c223]/30 text-xs font-bold text-gray-500 hover:text-white transition-all duration-300 shadow-inner group cursor-pointer"
            >
              <span>Made with</span>
              <Heart size={11} className="text-red-500 fill-red-500 animate-pulse" />
              <span>by</span>
              <span className="text-gray-300 group-hover:text-[#79c223] font-black tracking-wide transition-colors duration-300">
                MAVIXO
              </span>
              <ArrowUpRight size={12} className="text-gray-600 group-hover:text-[#79c223] transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </a>
          </div>

          {/* Copyright Message - Right Side */}
          <div className="w-full md:w-auto text-center md:text-right">
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-end gap-2 sm:gap-4 text-xs font-semibold text-gray-500">
              <span>&copy; {currentYear} Anandam Residency. All Rights Reserved.</span>
              <div className="flex items-center gap-3">
                <Link href="/privacy" className="hover:text-[#79c223] transition-colors">
                  Privacy Policy
                </Link>
                <span className="text-gray-700">•</span>
                <Link href="/terms" className="hover:text-[#79c223] transition-colors">
                  Terms
                </Link>
              </div>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}
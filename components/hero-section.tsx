'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  MapPin, 
  Calendar, 
  Eye, 
  User, 
  Ruler, 
  MessageSquare, 
  FileCheck, 
  Building2, 
  Milestone, 
  Leaf,
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube, 
  Video, 
  Mail,
  CheckCircle,
  Loader2
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function HeroSection() {
  // 4 premium real estate high-quality images for slider
  const bgImages = [
    '/ianding_img-3.png',
    '/ianding_img-1.png',
    '/ianding_img-2.png',
    '/ianding_img-4.png'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    plotSize: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Auto-play mechanism - image changes every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [bgImages.length]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    console.log('Hero enquiry submitted:', formData);

    try {
      const response = await fetch('/api/send-hero-enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log('Response:', data);

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          phone: '',
          location: '',
          plotSize: '',
          message: ''
        });
        
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Network error:', error);
      setErrorMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Left Sidebar - Social Media Links (Deep Blue Theme)
  const socialLinks = [
    { icon: <Facebook size={20} />, href: 'https://www.facebook.com/share/15nsFG3KWa/', label: 'Facebook' },
    { icon: <Twitter size={20} />, href: 'https://x.com/BipulMishr84262', label: 'Twitter / X' },
    { icon: <Instagram size={20} />, href: 'https://www.instagram.com/anandamasansol?igsh=ZzllOXdvNHJ1amw4', label: 'Instagram' },
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/anandam-residency-10075a281/', label: 'LinkedIn' },
    { icon: <Youtube size={20} />, href: 'https://www.youtube.com/@anandamasansolofficial1519?si=RlhpxYekY5ng1S6k', label: 'YouTube' },
  ];

  // Right Sidebar - Contact Action Links (Lime Green Theme)
  const contactLinks = [
    { icon: <Phone size={20} />, href: 'tel:+918777827497', label: 'Call Now' },
    { 
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.454L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 1.977 14.053.953 11.42.953c-5.44 0-9.866 4.372-9.87 9.802 0 1.714.453 3.39 1.313 4.872L1.734 21.1l5.704-1.494z" />
        </svg>
      ), 
      href: 'https://wa.me/918777827497', 
      label: 'WhatsApp' 
    },
    { icon: <Video size={20} />, href: '/book-visit', label: 'Virtual Tour / Video' },
    { icon: <Mail size={20} />, href: 'mailto:anandamresidencyofficial@gmail.com', label: 'Email Us' },
    { icon: <MapPin size={20} />, href: 'https://maps.google.com', label: 'Location' },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden pt-20 sm:pt-24 md:pt-28 pb-12 lg:pb-0 bg-black">
      
      {/* ================= ANIMATED BACKGROUND IMAGE SLIDER ================= */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${bgImages[currentImageIndex]})` }}
          />
        </AnimatePresence>
        
        {/* Gradient Overlay for better text readability - Responsive */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>

      {/* ================= DESKTOP STICKY SIDE BARS (Hidden on mobile) ================= */}
      
      {/* LEFT SIDEBAR - Social Pod (Deep Blue) */}
      <div className="hidden lg:flex fixed left-4 top-1/2 -translate-y-1/2 z-50 flex-col items-center bg-black/40 backdrop-blur-md p-2 rounded-full border border-white/10 shadow-2xl">
        <div className="flex flex-col gap-3">
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="w-11 h-11 bg-[#0B3A99] hover:bg-[#79c223] text-white flex items-center justify-center rounded-full transition-all duration-300 ease-out hover:scale-110 shadow-md group relative"
            >
              <div className="transition-transform duration-300 group-hover:rotate-[360deg]">
                {link.icon}
              </div>
              <span className="absolute left-14 bg-gray-900 text-white text-xs font-bold px-2.5 py-1.5 rounded-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-xl border border-gray-800">
                {link.label}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* RIGHT SIDEBAR - Contact Actions (Lime Green) */}
      <div className="hidden lg:flex fixed right-4 top-1/2 -translate-y-1/2 z-50 flex-col items-center bg-black/40 backdrop-blur-md p-2 rounded-full border border-white/10 shadow-2xl">
        <div className="flex flex-col gap-3">
          {contactLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="w-11 h-11 bg-[#79c223] hover:bg-[#0B3A99] text-white flex items-center justify-center rounded-full transition-all duration-300 ease-out hover:scale-110 shadow-md group relative"
            >
              <div className="transition-transform duration-300 group-hover:scale-110">
                {link.icon}
              </div>
              <span className="absolute right-14 bg-gray-900 text-white text-xs font-bold px-2.5 py-1.5 rounded-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-xl border border-gray-800">
                {link.label}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* ================= MAIN HERO CONTAINER - Fully Responsive ================= */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 flex-1 flex items-center z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center w-full">
          
          {/* Left Content Column - Responsive Text */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[#79c223] text-xs sm:text-sm lg:text-base font-black uppercase tracking-wider mb-2 sm:mb-3 drop-shadow-lg"
            >
              Welcome to Anandam Residency
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-3 sm:mb-4 drop-shadow-lg"
            >
              <span className="text-white block">Invest Today,</span>
              <span className="text-[#79c223] block">Build Tomorrow</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-200 text-sm sm:text-base md:text-lg max-w-xl mb-6 sm:mb-8 leading-relaxed font-medium drop-shadow-lg mx-auto lg:mx-0"
            >
              Anandam Residency is one of the fastest-growing residential township projects in Asansol, West Bengal. 
              Started in 2018, today it has become a trusted name for thousands of happy families and investors.
            </motion.p>

            {/* CTA Buttons - Responsive */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8 justify-center lg:justify-start"
            >
              <Link
                href="/book-visit"
                className="inline-flex items-center gap-2 px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 md:py-3.5 bg-[#79c223] hover:bg-[#68a61e] text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-lg hover:shadow-green-600/20"
              >
                <Calendar size={16} />
                Book Site Visit
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 md:py-3.5 bg-[#0B3A99] hover:bg-[#092f7d] text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-lg hover:shadow-blue-900/20"
              >
                <Eye size={16} />
                View Projects
              </Link>
            </motion.div>

            {/* Social Proof (Avatar Badge) - Responsive */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center gap-2 sm:gap-3 bg-black/50 backdrop-blur-md self-center lg:self-start px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl border border-white/20 shadow-xl"
            >
              <div className="flex -space-x-2">
                <img className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" alt="User" />
                <img className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" alt="User" />
                <img className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" alt="User" />
              </div>
              <div>
                <p className="text-white text-xs sm:text-sm font-bold">500+ Happy Families</p>
                <p className="text-gray-300 text-[9px] sm:text-[11px] font-semibold">Trusted customers</p>
              </div>
            </motion.div>
          </div>

          {/* Right Form Column - Fully Responsive */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 w-full max-w-md mx-auto lg:mr-0"
          >
            <div className="bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 shadow-2xl border border-white/40">
              <div className="text-center mb-4 sm:mb-6">
                <h2 className="text-lg sm:text-xl font-bold text-[#0B3A99]">Enquire Now</h2>
                <div className="w-10 h-0.5 sm:h-1 bg-[#79c223] mx-auto mt-1.5 rounded-full"></div>
              </div>

              {/* Error Message */}
              {errorMessage && (
                <div className="mb-4 p-2 bg-red-500/20 border border-red-500/30 rounded-lg text-red-200 text-[10px] font-medium text-center">
                  {errorMessage}
                </div>
              )}

              {isSubmitted ? (
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-6"
                >
                  <div className="w-12 h-12 bg-[#79c223]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="text-[#79c223]" size={28} />
                  </div>
                  <p className="text-green-600 font-bold text-sm">Thank You!</p>
                  <p className="text-gray-500 text-[11px] mt-1">Our expert will contact you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                  {/* Your Name */}
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                      <User size={16} />
                    </span>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-9 sm:pl-11 pr-3 sm:pr-4 py-2.5 sm:py-3 bg-white/80 border border-gray-200 rounded-xl focus:border-[#79c223] focus:ring-2 focus:ring-[#79c223]/20 outline-none transition text-xs sm:text-sm text-gray-800 font-medium"
                    />
                  </div>

                  {/* Mobile Number */}
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                      <Phone size={16} />
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="Mobile Number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-9 sm:pl-11 pr-3 sm:pr-4 py-2.5 sm:py-3 bg-white/80 border border-gray-200 rounded-xl focus:border-[#79c223] focus:ring-2 focus:ring-[#79c223]/20 outline-none transition text-xs sm:text-sm text-gray-800 font-medium"
                    />
                  </div>

                  {/* Preferred Location */}
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                      <MapPin size={16} />
                    </span>
                    <input
                      type="text"
                      name="location"
                      placeholder="Preferred Location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full pl-9 sm:pl-11 pr-3 sm:pr-4 py-2.5 sm:py-3 bg-white/80 border border-gray-200 rounded-xl focus:border-[#79c223] focus:ring-2 focus:ring-[#79c223]/20 outline-none transition text-xs sm:text-sm text-gray-800 font-medium"
                    />
                  </div>

                  {/* Plot Size Requirement */}
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                      <Ruler size={16} />
                    </span>
                    <input
                      type="text"
                      name="plotSize"
                      placeholder="Plot Size Requirement"
                      value={formData.plotSize}
                      onChange={handleChange}
                      className="w-full pl-9 sm:pl-11 pr-3 sm:pr-4 py-2.5 sm:py-3 bg-white/80 border border-gray-200 rounded-xl focus:border-[#79c223] focus:ring-2 focus:ring-[#79c223]/20 outline-none transition text-xs sm:text-sm text-gray-800 font-medium"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="relative">
                    <span className="absolute top-2.5 left-3 pointer-events-none text-gray-400">
                      <MessageSquare size={16} />
                    </span>
                    <textarea
                      name="message"
                      rows={2}
                      placeholder="Your Message (Optional)"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full pl-9 sm:pl-11 pr-3 sm:pr-4 py-2.5 sm:py-3 bg-white/80 border border-gray-200 rounded-xl focus:border-[#79c223] focus:ring-2 focus:ring-[#79c223]/20 outline-none transition text-xs sm:text-sm text-gray-800 resize-none font-medium"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-[#79c223] hover:bg-[#68a61e] text-white font-bold py-2.5 sm:py-3.5 rounded-xl transition-all shadow-md shadow-green-600/15 flex items-center justify-center gap-2 mt-4 sm:mt-6 text-xs sm:text-sm cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        Submit Enquiry
                        <span className="text-base sm:text-lg">→</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ================= BOTTOM FEATURE BAR - Responsive ================= */}
      <div className="w-full px-4 sm:px-6 lg:px-12 mt-8 sm:mt-12 lg:mt-16 relative z-10">
        <div className="bg-white/95 backdrop-blur-md rounded-t-2xl sm:rounded-t-3xl lg:rounded-2xl shadow-xl border-t lg:border border-white/40 max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-5 p-3 sm:p-4 md:p-6 gap-y-4 sm:gap-y-6 md:gap-y-0 items-center">
          
          {/* Prime Locations */}
          <div className="flex flex-col items-center text-center px-1 sm:px-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-50 rounded-lg sm:rounded-xl flex items-center justify-center mb-1 sm:mb-2 text-[#0B3A99]">
              <MapPin size={20} />
            </div>
            <span className="text-[10px] sm:text-xs md:text-sm font-bold text-gray-800 leading-tight">Prime<br />Locations</span>
          </div>

          {/* Clear Documents */}
          <div className="flex flex-col items-center text-center px-1 sm:px-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-50 rounded-lg sm:rounded-xl flex items-center justify-center mb-1 sm:mb-2 text-[#79c223]">
              <FileCheck size={20} />
            </div>
            <span className="text-[10px] sm:text-xs md:text-sm font-bold text-gray-800 leading-tight">Clear<br />Documents</span>
          </div>

          {/* Bank Loan Assistance */}
          <div className="flex flex-col items-center text-center px-1 sm:px-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-50 rounded-lg sm:rounded-xl flex items-center justify-center mb-1 sm:mb-2 text-[#0B3A99]">
              <Building2 size={20} />
            </div>
            <span className="text-[10px] sm:text-xs md:text-sm font-bold text-gray-800 leading-tight">Bank Loan<br />Assistance</span>
          </div>

          {/* Wide Roads */}
          <div className="flex flex-col items-center text-center px-1 sm:px-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-50 rounded-lg sm:rounded-xl flex items-center justify-center mb-1 sm:mb-2 text-[#79c223]">
              <Milestone size={20} />
            </div>
            <span className="text-[10px] sm:text-xs md:text-sm font-bold text-gray-800 leading-tight">Wide<br />Roads</span>
          </div>

          {/* Green Environment */}
          <div className="flex flex-col items-center text-center px-1 sm:px-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-50 rounded-lg sm:rounded-xl flex items-center justify-center mb-1 sm:mb-2 text-[#0B3A99]">
              <Leaf size={20} />
            </div>
            <span className="text-[10px] sm:text-xs md:text-sm font-bold text-gray-800 leading-tight">Green<br />Environment</span>
          </div>

        </div>
      </div>

      {/* ================= MOBILE VIEW BOTTOM FIXED NAVIGATION ================= */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur-lg border-t border-gray-100 z-50 px-3 py-2 shadow-lg flex justify-around items-center">
        {/* Call Option */}
        <a href="tel:+918777827497" className="flex flex-col items-center gap-1 text-gray-600 hover:text-[#0B3A99] active:scale-95 transition-all">
          <div className="w-9 h-9 bg-[#0B3A99]/10 text-[#0B3A99] rounded-full flex items-center justify-center">
            <Phone size={16} />
          </div>
          <span className="text-[9px] font-bold">Call</span>
        </a>

        {/* WhatsApp Option */}
        <a href="https://wa.me/918777827497" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 text-gray-600 hover:text-green-600 active:scale-95 transition-all">
          <div className="w-9 h-9 bg-green-50 text-green-600 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.454L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 1.977 14.053.953 11.42.953c-5.44 0-9.866 4.372-9.87 9.802 0 1.714.453 3.39 1.313 4.872L1.734 21.1l5.704-1.494z" />
            </svg>
          </div>
          <span className="text-[9px] font-bold">WhatsApp</span>
        </a>

        {/* Location Option */}
        <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 text-gray-600 hover:text-[#79c223] active:scale-95 transition-all">
          <div className="w-9 h-9 bg-[#79c223]/10 text-[#79c223] rounded-full flex items-center justify-center">
            <MapPin size={16} />
          </div>
          <span className="text-[9px] font-bold">Map</span>
        </a>

        {/* Video Tour */}
        <Link href="/book-visit" className="flex flex-col items-center gap-1 text-gray-600 hover:text-red-500 active:scale-95 transition-all">
          <div className="w-9 h-9 bg-red-50 text-red-500 rounded-full flex items-center justify-center">
            <Video size={16} />
          </div>
          <span className="text-[9px] font-bold">Tour</span>
        </Link>
      </div>
    </section>
  );
}
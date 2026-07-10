'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Phone, User, Home, Mail, ArrowRight, Loader2, CheckCircle } from 'lucide-react';

export function PromoPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    plotType: 'standard'
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Triggers popup 6 seconds after page load
    const timer = setTimeout(() => {
      // Check if user has already submitted or closed the popup in this session
      const hasSeenPopup = sessionStorage.getItem('promoPopupSeen');
      if (!hasSeenPopup) {
        setIsOpen(true);
      }
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const getPlotTypeName = (plotType: string) => {
    switch(plotType) {
      case 'standard': return 'Standard Plot (1200 sq.ft.)';
      case 'premium': return 'Premium Corner Plot (1500 sq.ft.)';
      case 'luxury': return 'Luxury Elite Plot (2000+ sq.ft.)';
      default: return plotType;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    console.log('Popup enquiry submitted:', formData);

    try {
      const response = await fetch('/api/send-popup-enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          plotTypeName: getPlotTypeName(formData.plotType)
        }),
      });

      const data = await response.json();
      console.log('Response:', data);

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          phone: '',
          email: '',
          plotType: 'standard'
        });
        sessionStorage.setItem('promoPopupSeen', 'true');
        
        // Close popup after 3 seconds on success
        setTimeout(() => {
          setIsOpen(false);
          setIsSubmitted(false);
        }, 3000);
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

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('promoPopupSeen', 'true');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
          
          {/* Glossy dark backdrop blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-slate-950/40 backdrop-blur-md"
          />

          {/* Premium 3D-like popup card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0,
              transition: { type: "spring", stiffness: 300, damping: 25 }
            }}
            exit={{ opacity: 0, scale: 0.9, y: 20, transition: { duration: 0.3 } }}
            className="relative bg-white w-full max-w-[560px] rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-[0_30px_70px_rgba(11,58,153,0.15)] z-10"
          >
            
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 z-20 w-8 h-8 rounded-full bg-white/80 backdrop-blur-md border border-gray-100 flex items-center justify-center text-gray-500 hover:text-red-500 hover:scale-110 active:scale-95 transition-all cursor-pointer"
            >
              <X size={16} />
            </button>

            {/* Top Royal Blue Glossy Banner */}
            <div className="relative py-8 px-6 bg-gradient-to-br from-[#0B3A99] via-[#093182] to-[#051C4A] text-white text-center space-y-2">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-[#79c223]/10 rounded-full blur-[40px] pointer-events-none" />
              
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-[#79c223] text-[10px] font-black uppercase tracking-wider">
                <Sparkles size={10} /> Limited Time Premium Plots
              </div>
              <h3 className="text-xl sm:text-2xl font-black tracking-tight">
                Book Your <span className="text-[#79c223]">Site Visit</span> Today
              </h3>
              <p className="text-blue-100/80 text-[11px] font-medium max-w-md mx-auto leading-relaxed">
                Unlock exclusive institutional bank loan benefits and customized layout plot pricing structures instantly.
              </p>
            </div>

            {/* Form Area */}
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4 bg-gradient-to-b from-white to-gray-50/50">
                
                {/* Error Message */}
                {errorMessage && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-xs font-medium text-center">
                    {errorMessage}
                  </div>
                )}

                {/* Name Input */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-black uppercase tracking-wider text-gray-400 block ml-1">Full Name *</label>
                  <div className="relative">
                    <User size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name" 
                      className="w-full bg-white border border-gray-200 focus:border-[#0B3A99] rounded-2xl py-3.5 pl-11 pr-4 text-xs font-semibold outline-none transition-all placeholder:text-gray-400 text-gray-800 shadow-sm"
                      required
                    />
                  </div>
                </div>

                {/* Phone Number Input */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-black uppercase tracking-wider text-gray-400 block ml-1">Phone Number *</label>
                  <div className="relative">
                    <Phone size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your mobile number" 
                      className="w-full bg-white border border-gray-200 focus:border-[#0B3A99] rounded-2xl py-3.5 pl-11 pr-4 text-xs font-semibold outline-none transition-all placeholder:text-gray-400 text-gray-800 shadow-sm"
                      required
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-black uppercase tracking-wider text-gray-400 block ml-1">Email Address *</label>
                  <div className="relative">
                    <Mail size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address" 
                      className="w-full bg-white border border-gray-200 focus:border-[#0B3A99] rounded-2xl py-3.5 pl-11 pr-4 text-xs font-semibold outline-none transition-all placeholder:text-gray-400 text-gray-800 shadow-sm"
                      required
                    />
                  </div>
                </div>

                {/* Preferred Plot Area */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-black uppercase tracking-wider text-gray-400 block ml-1">Preferred Plot Area *</label>
                  <div className="relative">
                    <Home size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <select 
                      name="plotType"
                      value={formData.plotType}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-200 focus:border-[#0B3A99] rounded-2xl py-3.5 pl-11 pr-4 text-xs font-semibold outline-none transition-all text-gray-700 shadow-sm appearance-none cursor-pointer"
                    >
                      <option value="standard">Standard Plot (1200 sq.ft.)</option>
                      <option value="premium">Premium Corner Plot (1500 sq.ft.)</option>
                      <option value="luxury">Luxury Elite Plot (2000+ sq.ft.)</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 text-[10px]">▼</div>
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  disabled={isLoading}
                  className="w-full mt-2 bg-gradient-to-r from-[#0B3A99] to-[#093182] hover:from-[#093182] hover:to-[#051C4A] text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-md shadow-blue-900/20 flex items-center justify-center gap-2 transition-all cursor-pointer group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      Submit Enquiry <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </motion.button>

                {/* Security Badge */}
                <p className="text-center text-[10px] text-gray-400 font-bold pt-1">
                  🔒 Your personal dataset is fully protected under our Privacy Policy.
                </p>

              </form>
            ) : (
              <div className="p-8 text-center bg-gradient-to-b from-white to-gray-50/50">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={32} className="text-green-500" />
                </div>
                <h4 className="text-xl font-black text-[#0B3A99] mb-2">Thank You!</h4>
                <p className="text-gray-500 text-sm mb-2">Your enquiry has been submitted successfully.</p>
                <p className="text-gray-400 text-xs">Our expert will contact you shortly.</p>
              </div>
            )}

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
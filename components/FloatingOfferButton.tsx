'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Loader2, CheckCircle, User, Phone, Mail, MapPin, MessageSquare } from 'lucide-react';

export function FloatingOfferButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    message: ''
  });

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

    try {
      const response = await fetch('/api/send-offer-enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          phone: '',
          email: '',
          address: '',
          message: ''
        });
        
        setTimeout(() => {
          setIsSubmitted(false);
          setIsModalOpen(false);
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

  return (
    <>
      {/* Simple Floating Offer Button - No Animation, Thin Design */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-20 sm:bottom-8 left-1/2 -translate-x-1/2 z-50 cursor-pointer"
      >
        <div className="bg-gradient-to-r from-[#79c223] to-emerald-500 hover:from-emerald-500 hover:to-[#79c223] text-white rounded-full shadow-lg transition-colors duration-300 px-5 py-2 sm:px-7 sm:py-2.5 border border-white/20">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-[10px] sm:text-xs font-semibold whitespace-nowrap">Secure Land @</span>
            <span className="text-sm sm:text-base font-black whitespace-nowrap">₹5,00,000/-</span>
            <span className="text-[8px] sm:text-[9px] font-medium text-white/70">*</span>
          </div>
        </div>
      </button>

      {/* Modal Form */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 120 }}
              className="relative max-w-md w-full bg-white rounded-2xl overflow-hidden shadow-2xl mx-4 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="relative bg-gradient-to-r from-[#0B3A99] to-[#062466] px-5 sm:px-6 py-4 sm:py-5 text-center sticky top-0 z-10">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 text-white/70 hover:text-white transition-colors"
                >
                  <X size={18} className="sm:w-5 sm:h-5" />
                </button>
                <h3 className="text-lg sm:text-xl font-black text-white">Secure Your Land</h3>
                <p className="text-blue-200 text-[10px] sm:text-xs mt-1">Limited Time Offer - Book at ₹5,00,000/- only</p>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-10 h-1 bg-[#79c223] rounded-full" />
              </div>

              {/* Form Body */}
              <div className="p-5 sm:p-6">
                {errorMessage && (
                  <div className="mb-4 p-2 bg-red-50 border border-red-200 rounded-lg text-red-600 text-[10px] sm:text-xs text-center">
                    {errorMessage}
                  </div>
                )}

                {isSubmitted ? (
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-6 sm:py-8"
                  >
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <CheckCircle size={28} className="sm:w-8 sm:h-8 text-green-500" />
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-gray-800">Thank You!</h4>
                    <p className="text-gray-500 text-xs sm:text-sm mt-2">Your request has been submitted successfully.</p>
                    <p className="text-gray-400 text-[10px] sm:text-xs mt-1">Our expert will contact you shortly.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                    {/* Name */}
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                        <User size={14} className="sm:w-4 sm:h-4" />
                      </span>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#79c223] focus:ring-2 focus:ring-[#79c223]/20 outline-none transition text-xs sm:text-sm"
                      />
                    </div>

                    {/* Phone */}
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                        <Phone size={14} className="sm:w-4 sm:h-4" />
                      </span>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="Mobile Number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#79c223] focus:ring-2 focus:ring-[#79c223]/20 outline-none transition text-xs sm:text-sm"
                      />
                    </div>

                    {/* Email */}
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                        <Mail size={14} className="sm:w-4 sm:h-4" />
                      </span>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#79c223] focus:ring-2 focus:ring-[#79c223]/20 outline-none transition text-xs sm:text-sm"
                      />
                    </div>

                    {/* Address */}
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                        <MapPin size={14} className="sm:w-4 sm:h-4" />
                      </span>
                      <input
                        type="text"
                        name="address"
                        placeholder="Address (Optional)"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#79c223] focus:ring-2 focus:ring-[#79c223]/20 outline-none transition text-xs sm:text-sm"
                      />
                    </div>

                    {/* Message */}
                    <div className="relative">
                      <span className="absolute top-2.5 left-3 pointer-events-none text-gray-400">
                        <MessageSquare size={14} className="sm:w-4 sm:h-4" />
                      </span>
                      <textarea
                        name="message"
                        rows={2}
                        placeholder="Message (Optional)"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#79c223] focus:ring-2 focus:ring-[#79c223]/20 outline-none transition text-xs sm:text-sm resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-[#79c223] to-emerald-500 hover:from-emerald-500 hover:to-[#79c223] text-white font-black py-3 sm:py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed text-xs sm:text-sm"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 size={14} className="animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          <Send size={14} />
                          Book Now at ₹5,00,000/-
                        </>
                      )}
                    </button>

                    <p className="text-[8px] sm:text-[10px] text-gray-400 text-center">
                      *Terms & Conditions Apply. Limited period offer.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
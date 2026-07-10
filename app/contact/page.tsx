'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  Send, 
  CheckCircle, 
  Sparkles,
  ArrowUpRight,
  Headphones,
  FileText,
  User,
  HelpCircle
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setErrorMessage('Network error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="bg-slate-50/60 min-h-screen text-slate-900 overflow-hidden selection:bg-[#79c223] selection:text-white">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative py-24 sm:py-32 bg-gradient-to-br from-[#0B3A99] via-[#062466] to-[#030914] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(121,194,35,0.12),transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(11,58,153,0.25),transparent_50%)]" />
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-slate-50/60 to-transparent" />
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#79c223] text-xs font-bold uppercase tracking-widest"
          >
            <Sparkles size={12} /> 24/7 Global Concierge Desk
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-4xl sm:text-6xl font-black tracking-tight leading-tight"
          >
            Connect With Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#79c223] to-green-400">Elite Team</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto font-medium"
          >
            Whether you're exploring site visits, asset acquisition blueprints, or premium financing options—our expert desk is ready to assist.
          </motion.p>
        </div>
      </section>

      {/* ================= MAIN CONTENT SECTION ================= */}
      <section className="py-12 sm:py-24 relative z-20 -mt-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* LEFT COLUMN: CONTACT CHANNELS */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-100/80 border border-slate-100 space-y-8">
                <div className="space-y-1">
                  <span className="text-[#79c223] text-xs font-black uppercase tracking-wider block">Corporate Office</span>
                  <h2 className="text-2xl font-black text-[#0B3A99] tracking-tight">Contact Information</h2>
                </div>

                <div className="space-y-6">
                  {/* Phone */}
                  <motion.div whileHover={{ x: 4 }} className="flex gap-4 group">
                    <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center text-[#79c223] group-hover:bg-[#79c223] group-hover:text-white transition-all duration-300 shrink-0 shadow-sm">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h3 className="font-black text-xs text-slate-400 uppercase tracking-wider mb-0.5">Hotline Support</h3>
                      <a href="tel:+918777827497" className="text-base font-extrabold text-[#0B3A99] hover:text-[#79c223] transition-colors block">
                        +91 8777827497
                      </a>
                    </div>
                  </motion.div>

                  {/* Email */}
                  <motion.div whileHover={{ x: 4 }} className="flex gap-4 group">
                    <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center text-[#79c223] group-hover:bg-[#79c223] group-hover:text-white transition-all duration-300 shrink-0 shadow-sm">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h3 className="font-black text-xs text-slate-400 uppercase tracking-wider mb-0.5">Official Correspondence</h3>
                      <a href="mailto:anandamresidencyofficial@gmail.com" className="text-base font-extrabold text-[#0B3A99] hover:text-[#79c223] transition-colors block">
                        anandamresidencyofficial@gmail.com
                      </a>
                    </div>
                  </motion.div>

                  {/* Address */}
                  <motion.div whileHover={{ x: 4 }} className="flex gap-4 group">
                    <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center text-[#79c223] group-hover:bg-[#79c223] group-hover:text-white transition-all duration-300 shrink-0 shadow-sm">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h3 className="font-black text-xs text-slate-400 uppercase tracking-wider mb-0.5">HQ Landmark</h3>
                      <p className="text-sm font-bold text-slate-600 leading-relaxed">
                        Anandam Residency, Asansol - Gourandi Rd, Panchgachia, Asansol, West Bengal 713341
                      </p>
                    </div>
                  </motion.div>

                  {/* Hours */}
                  <motion.div whileHover={{ x: 4 }} className="flex gap-4 group">
                    <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center text-[#79c223] group-hover:bg-[#79c223] group-hover:text-white transition-all duration-300 shrink-0 shadow-sm">
                      <Clock size={20} />
                    </div>
                    <div>
                      <h3 className="font-black text-xs text-slate-400 uppercase tracking-wider mb-0.5">Availability Structure</h3>
                      <p className="text-sm font-bold text-slate-600 leading-relaxed">
                        Mon - Sat: 9:00 AM - 6:00 PM <br />
                        <span className="text-emerald-600 font-extrabold">Sun: 10:00 AM - 4:00 PM (Site Visits Only)</span>
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Social Connect Layer */}
                <div className="pt-6 border-t border-slate-100">
                  <h4 className="text-xs font-black uppercase text-slate-400 tracking-wider mb-4">Digital Broadcast Channels</h4>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { icon: <Facebook size={18} />, href: 'https://www.facebook.com/share/15nsFG3KWa/', label: 'Facebook' },
                      { icon: <Twitter size={18} />, href: 'https://x.com/BipulMishr84262', label: 'Twitter' },
                      { icon: <Instagram size={18} />, href: 'https://www.instagram.com/anandamasansol?igsh=ZzllOXdvNHJ1amw4', label: 'Instagram' },
                      { icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/in/anandam-residency-10075a281/', label: 'LinkedIn' },
                      { icon: <Youtube size={18} />, href: 'https://www.youtube.com/@anandamasansolofficial1519?si=RlhpxYekY5ng1S6k', label: 'YouTube', isYoutube: true }
                    ].map((social, i) => (
                      <motion.a 
                        whileHover={{ y: -4, scale: 1.05 }}
                        key={i} 
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className={`w-11 h-11 bg-slate-50 border border-slate-200/70 text-[#0B3A99] rounded-xl flex items-center justify-center transition-all shadow-sm ${
                          social.isYoutube 
                            ? 'hover:bg-red-600 hover:text-white hover:border-red-600' 
                            : 'hover:bg-[#79c223] hover:text-white hover:border-[#79c223]'
                        }`}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: MESSAGING ENGINE */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-[2rem] p-6 sm:p-10 shadow-xl shadow-slate-100/80 border border-slate-100 relative">
                
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.div
                      key="contact-form-portal"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0, y: -15 }}
                    >
                      <div className="mb-8 space-y-2">
                        <h2 className="text-2xl sm:text-3xl font-black text-[#0B3A99] tracking-tight flex items-center gap-3">
                          <Headphones size={28} className="text-[#79c223]" />
                          Send us a Message
                        </h2>
                        <p className="text-slate-400 font-medium text-sm">Drop your parameters below, and a dedicated relationship engineer will connect with you.</p>
                      </div>

                      {/* Error Message */}
                      {errorMessage && (
                        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-xs font-medium">
                          {errorMessage}
                        </div>
                      )}

                      <form onSubmit={handleSubmit} className="space-y-6">
                        
                        {/* Name and Email Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="text-xs font-bold text-slate-700 block mb-1.5 flex items-center gap-1">
                              <User size={12} className="text-[#79c223]" /> Full Name *
                            </label>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="Your Name"
                              className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#79c223]/20 focus:border-[#79c223] outline-none text-sm font-semibold transition-all text-slate-800 placeholder:text-slate-400"
                              required
                            />
                          </div>

                          <div>
                            <label className="text-xs font-bold text-slate-700 block mb-1.5 flex items-center gap-1">
                              <Mail size={12} className="text-[#79c223]" /> Email Address *
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="name@domain.com"
                              className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#79c223]/20 focus:border-[#79c223] outline-none text-sm font-semibold transition-all text-slate-800 placeholder:text-slate-400"
                              required
                            />
                          </div>
                        </div>

                        {/* Phone and Subject Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="text-xs font-bold text-slate-700 block mb-1.5">Phone Number *</label>
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="Active contact number"
                              className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#79c223]/20 focus:border-[#79c223] outline-none text-sm font-semibold transition-all text-slate-800 placeholder:text-slate-400"
                              required
                            />
                          </div>

                          <div>
                            <label className="text-xs font-bold text-slate-700 block mb-1.5 flex items-center gap-1">
                              <HelpCircle size={12} className="text-[#79c223]" /> Strategic Context *
                            </label>
                            <div className="relative">
                              <select
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#79c223]/20 focus:border-[#79c223] outline-none text-sm font-semibold transition-all text-slate-800 appearance-none cursor-pointer"
                                required
                              >
                                <option value="">Select Category Matrix</option>
                                <option value="plot_inquiry">Plot Space Inquiry</option>
                                <option value="financing">Financing & Layout Query</option>
                                <option value="general">General Asset Inquiry</option>
                                <option value="site_visit">Schedule On-Site VIP Visit</option>
                              </select>
                              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500 text-xs">
                                ▼
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Message Layer */}
                        <div>
                          <label className="text-xs font-bold text-slate-700 block mb-1.5 flex items-center gap-1">
                            <FileText size={12} className="text-[#79c223]" /> Core Request *
                          </label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Detail your requirements, constraints or timeframes here..."
                            rows={5}
                            className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#79c223]/20 focus:border-[#79c223] outline-none text-sm font-semibold transition-all text-slate-800 resize-none placeholder:text-slate-400"
                            required
                          ></textarea>
                        </div>

                        {/* Submit Action */}
                        <motion.button
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                          type="submit"
                          disabled={isLoading}
                          className="w-full bg-[#79c223] hover:bg-green-600 text-white font-black text-xs uppercase tracking-widest py-4 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-xl shadow-green-500/15 group disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                          {isLoading ? (
                            <>
                              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              Transmit Message Engine
                              <Send size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </>
                          )}
                        </motion.button>

                      </form>
                    </motion.div>
                  ) : (
                    /* SUCCESS STATE INTERACTION */
                    <motion.div
                      key="contact-success-portal"
                      initial={{ opacity: 0, scale: 0.97 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-16 text-center space-y-6"
                    >
                      <div className="w-20 h-20 rounded-2xl bg-green-50 text-[#79c223] flex items-center justify-center mx-auto shadow-inner border border-green-100">
                        <CheckCircle size={40} className="animate-pulse" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-2xl font-black text-[#0B3A99] tracking-tight">Transmission Secured</h3>
                        <p className="text-slate-500 font-medium max-w-md mx-auto text-sm leading-relaxed">
                          Thank you for reaching out! Our team has received your message and will get back to you within 24 hours.
                        </p>
                      </div>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-all"
                      >
                        Send Another Broadcast
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= GEOLOCATION MAP SECTION ================= */}
      <section className="py-16 sm:py-24 bg-white relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mb-8 space-y-1">
            <span className="text-[#79c223] text-xs font-black uppercase tracking-wider block">Satellite Map Architecture</span>
            <h2 className="text-3xl font-black text-[#0B3A99] tracking-tight flex items-center gap-2">
              Locate Our Experience Center <ArrowUpRight size={22} className="text-slate-400" />
            </h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200/80 border-4 border-slate-50 h-[450px] relative group"
          >
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              src="https://maps.google.com/maps?q=Anandam%20Residency%20official%20Asansol&t=&z=15&ie=UTF8&iwloc=&output=embed"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[20%] contrast-[110%] group-hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
        </div>
      </section>

    </main>
  );
}
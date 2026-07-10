'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Calendar, 
  User, 
  Clock, 
  Building, 
  Users, 
  MessageSquare, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  ShieldCheck,
  Compass,
  HelpCircle,
  Send,
  Loader2
} from 'lucide-react';

export default function BookVisitPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    visitDate: '',
    preferredTime: '',
    project: '',
    guests: '',
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

    console.log('Submitting visit booking:', formData);

    try {
      const response = await fetch('/api/send-visit-booking', {
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
        
        // Reset form after success
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            phone: '',
            visitDate: '',
            preferredTime: '',
            project: '',
            guests: '',
            message: '',
          });
        }, 500);
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

  // Project name mapping
  const getProjectName = (projectValue: string) => {
    switch(projectValue) {
      case 'anandam-greens': return 'Anandam Greens (Premium Eco-Township)';
      case 'anandam-city': return 'Anandam City (Modern Urban Smart Hub)';
      case 'anandam-prima': return 'Anandam Prima (Elite Gated Plots)';
      default: return projectValue || 'Not specified';
    }
  };

  return (
    <main className="bg-slate-50/50 min-h-screen text-slate-900 overflow-hidden selection:bg-green-500 selection:text-white">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative py-24 sm:py-32 bg-gradient-to-br from-[#0B3A99] via-[#062466] to-[#030914] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(121,194,35,0.15),transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(11,58,153,0.3),transparent_50%)]" />
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-slate-50/50 to-transparent" />
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#79c223] text-xs font-black uppercase tracking-widest"
          >
            <Sparkles size={12} /> Personalized Site Inspection
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-4xl sm:text-6xl font-black tracking-tight leading-tight"
          >
            Experience Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#79c223] to-green-400">Future Plot</span> In Person
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto font-medium"
          >
            Schedule a premium guided site visit with our property experts. Explore layout infrastructures, amenities, and connectivity landmarks first-hand.
          </motion.p>
        </div>
      </section>

      {/* ================= MAIN CONTENT SECTION ================= */}
      <section className="py-12 sm:py-24 relative z-20 -mt-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* LEFT COLUMN: BENEFITS & CONTACT INFO */}
            <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-24">
              
              <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-100/70 border border-slate-100 space-y-8">
                <div className="space-y-2">
                  <span className="text-[#79c223] text-xs font-black uppercase tracking-wider block">Exclusive Perks</span>
                  <h2 className="text-2xl sm:text-3xl font-black text-[#0B3A99] tracking-tight">Why Visit Our Site?</h2>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      icon: Compass,
                      color: 'bg-blue-50 text-blue-600',
                      title: 'Visualize Ground Reality',
                      description: 'Get an authentic feel of plot boundaries, wide avenue roads, and planned green zones.',
                    },
                    {
                      icon: Users,
                      color: 'bg-green-50 text-[#79c223]',
                      title: 'Dedicated Land Consultant',
                      description: 'Get personalized investment assistance, documentation overview, and layout walkthroughs.',
                    },
                    {
                      icon: ShieldCheck,
                      color: 'bg-amber-50 text-amber-600',
                      title: 'Verify Project Legality',
                      description: 'Inspect clear titles, government approvals, and comprehensive physical milestones on-site.',
                    },
                  ].map((benefit, index) => {
                    const IconComponent = benefit.icon;
                    return (
                      <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        key={index} 
                        className="flex gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors duration-300 group"
                      >
                        <div className={`w-12 h-12 rounded-xl ${benefit.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                          <IconComponent size={22} />
                        </div>
                        <div className="space-y-1">
                          <h3 className="font-extrabold text-[#0B3A99] text-base group-hover:text-[#79c223] transition-colors">{benefit.title}</h3>
                          <p className="text-slate-500 text-sm font-medium leading-relaxed">{benefit.description}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* CONTACT INFO CARD */}
              <div className="bg-gradient-to-br from-[#0B3A99] to-[#062466] text-white rounded-3xl p-8 shadow-xl shadow-blue-900/10 relative overflow-hidden">
                <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
                
                <div className="flex items-center gap-2 text-white/60 mb-2">
                  <HelpCircle size={16} className="text-[#79c223]" />
                  <span className="text-xs font-bold uppercase tracking-wider">Need Immediate Support?</span>
                </div>
                <h3 className="text-xl font-black mb-6">Our Relations Desk Is Active</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                  <a href="tel:+918777827497" className="flex items-center gap-4 p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 transition group">
                    <div className="w-10 h-10 rounded-xl bg-[#79c223] flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] text-white/50 font-bold uppercase">Call Hotline</p>
                      <p className="text-sm font-extrabold tracking-wide">+91 8777827497</p>
                    </div>
                  </a>

                  <a href="mailto:anandamresidencyofficial@gmail.com" className="flex items-center gap-4 p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 transition group">
                    <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] text-white/50 font-bold uppercase">Official Mail</p>
                      <p className="text-sm font-extrabold tracking-wide">anandamresidencyofficial@gmail.com</p>
                    </div>
                  </a>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: BOOKING FORM */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-[2rem] p-6 sm:p-10 shadow-xl shadow-slate-100/70 border border-slate-100 relative">
                
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.div
                      key="booking-form"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0, y: -20 }}
                    >
                      <div className="mb-8 space-y-2">
                        <h2 className="text-2xl sm:text-3xl font-black text-[#0B3A99] tracking-tight">Schedule Tour</h2>
                        <p className="text-slate-400 font-medium text-sm">Fill up the micro-details to authorize your premium entry token pass.</p>
                      </div>

                      {/* Error Message */}
                      {errorMessage && (
                        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-xs font-medium">
                          {errorMessage}
                        </div>
                      )}

                      <form onSubmit={handleSubmit} className="space-y-8">
                        
                        {/* SECTION 1: PERSONAL DETAILS */}
                        <div className="space-y-4">
                          <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                            <User size={16} className="text-[#79c223]" />
                            <h3 className="text-xs font-black uppercase tracking-wider text-slate-400">Personal Credentials</h3>
                          </div>

                          <div className="space-y-4">
                            <div className="relative">
                              <label className="text-xs font-bold text-slate-700 block mb-1.5">Full Name *</label>
                              <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="e.g. John Doe"
                                className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#79c223]/20 focus:border-[#79c223] outline-none text-sm font-semibold transition-all text-slate-800 placeholder:text-slate-400"
                                required
                              />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div>
                                <label className="text-xs font-bold text-slate-700 block mb-1.5">Email Address *</label>
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
                              <div>
                                <label className="text-xs font-bold text-slate-700 block mb-1.5">Phone Number *</label>
                                <input
                                  type="tel"
                                  name="phone"
                                  value={formData.phone}
                                  onChange={handleChange}
                                  placeholder="+91 XXXXX XXXXX"
                                  className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#79c223]/20 focus:border-[#79c223] outline-none text-sm font-semibold transition-all text-slate-800 placeholder:text-slate-400"
                                  required
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* SECTION 2: TOUR METRICS */}
                        <div className="space-y-4">
                          <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                            <Building size={16} className="text-[#79c223]" />
                            <h3 className="text-xs font-black uppercase tracking-wider text-slate-400">Visit Parameters</h3>
                          </div>

                          <div className="space-y-4">
                            <div>
                              <label className="text-xs font-bold text-slate-700 block mb-1.5">Select Township Project *</label>
                              <div className="relative">
                                <select
                                  name="project"
                                  value={formData.project}
                                  onChange={handleChange}
                                  className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#79c223]/20 focus:border-[#79c223] outline-none text-sm font-semibold transition-all text-slate-800 appearance-none cursor-pointer"
                                  required
                                >
                                  <option value="" className="text-slate-400">Choose a Township</option>
                                  <option value="anandam-greens">Anandam Greens (Premium Eco-Township)</option>
                                  <option value="anandam-city">Anandam City (Modern Urban Smart Hub)</option>
                                  <option value="anandam-prima">Anandam Prima (Elite Gated Plots)</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                                  ▼
                                </div>
                              </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div>
                                <label className="text-xs font-bold text-slate-700 block mb-1.5">Preferred Date *</label>
                                <input
                                  type="date"
                                  name="visitDate"
                                  value={formData.visitDate}
                                  onChange={handleChange}
                                  className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#79c223]/20 focus:border-[#79c223] outline-none text-sm font-semibold transition-all text-slate-800 cursor-pointer"
                                  required
                                />
                              </div>
                              <div>
                                <label className="text-xs font-bold text-slate-700 block mb-1.5">Preferred Time Window *</label>
                                <div className="relative">
                                  <select
                                    name="preferredTime"
                                    value={formData.preferredTime}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#79c223]/20 focus:border-[#79c223] outline-none text-sm font-semibold transition-all text-slate-800 appearance-none cursor-pointer"
                                    required
                                  >
                                    <option value="">Select Slot</option>
                                    <option value="09:00-11:00">09:00 AM - 11:00 AM (Morning Run)</option>
                                    <option value="11:00-01:00">11:00 AM - 01:00 PM (Mid Day)</option>
                                    <option value="02:00-04:00">02:00 PM - 04:00 PM (Post Lunch)</option>
                                    <option value="04:00-06:00">04:00 PM - 06:00 PM (Sunset View)</option>
                                  </select>
                                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                                    ▼
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div>
                              <label className="text-xs font-bold text-slate-700 block mb-1.5">Total Number of Guests *</label>
                              <div className="relative">
                                <Users size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                                <input
                                  type="number"
                                  name="guests"
                                  value={formData.guests}
                                  onChange={handleChange}
                                  placeholder="Including yourself"
                                  min="1"
                                  className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#79c223]/20 focus:border-[#79c223] outline-none text-sm font-semibold transition-all text-slate-800"
                                  required
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* SECTION 3: ADDITIONAL REQUIREMENTS */}
                        <div className="space-y-4">
                          <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                            <MessageSquare size={16} className="text-[#79c223]" />
                            <h3 className="text-xs font-black uppercase tracking-wider text-slate-400">Special Requirements</h3>
                          </div>
                          <div>
                            <textarea
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              placeholder="Would you require picking up service or have any specific plot configuration choice? Drop it here..."
                              rows={3}
                              className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#79c223]/20 focus:border-[#79c223] outline-none text-sm font-semibold transition-all text-slate-800 resize-none placeholder:text-slate-400"
                            ></textarea>
                          </div>
                        </div>

                        {/* SUBMIT BUTTON */}
                        <motion.button
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                          type="submit"
                          disabled={isLoading}
                          className="w-full bg-[#79c223] hover:bg-green-600 text-white font-black text-xs uppercase tracking-widest py-4 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-xl shadow-green-500/20 group disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                          {isLoading ? (
                            <>
                              <Loader2 size={18} className="animate-spin" />
                              Processing...
                            </>
                          ) : (
                            <>
                              <Calendar size={14} />
                              Confirm Allocation Schedule
                              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </>
                          )}
                        </motion.button>

                      </form>
                    </motion.div>
                  ) : (
                    /* SUCCESS ANIMATION CONTAINER */
                    <motion.div
                      key="success-screen"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-12 text-center space-y-6"
                    >
                      <div className="w-20 h-20 rounded-full bg-green-50 text-[#79c223] flex items-center justify-center mx-auto shadow-inner">
                        <CheckCircle2 size={44} className="animate-bounce" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-2xl font-black text-[#0B3A99] tracking-tight">Visit Registered Successfully!</h3>
                        <p className="text-slate-500 font-medium max-w-md mx-auto text-sm leading-relaxed">
                          Thank you, <span className="text-slate-900 font-bold">{formData.name || 'Investor'}</span>. Our field engineering team will check slot availability for <span className="text-slate-900 font-bold">{formData.visitDate}</span> and call you within 30 minutes to activate your entry pass.
                        </p>
                        <p className="text-xs text-slate-400 mt-2">
                          A confirmation email has been sent to <strong>{formData.email}</strong>
                        </p>
                      </div>
                      <button
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({
                            name: '',
                            email: '',
                            phone: '',
                            visitDate: '',
                            preferredTime: '',
                            project: '',
                            guests: '',
                            message: '',
                          });
                        }}
                        className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-all"
                      >
                        Book Another Slot
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
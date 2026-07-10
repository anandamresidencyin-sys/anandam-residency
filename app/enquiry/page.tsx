'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageSquare, 
  User, 
  Mail, 
  Phone, 
  Layers, 
  Wallet, 
  FileText, 
  CheckCircle, 
  ArrowRight, 
  Clock, 
  Sparkles,
  ExternalLink,
  ShieldAlert,
  Loader2
} from 'lucide-react';

export default function EnquiryPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    plotType: '',
    budget: '',
    message: '',
    agreeTerms: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    console.log('Enquiry submitted:', formData);

    try {
      const response = await fetch('/api/send-enquiry', {
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
        
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            phone: '',
            plotType: '',
            budget: '',
            message: '',
            agreeTerms: false,
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

  // Helper function to get plot type name
  const getPlotTypeName = (plotType: string) => {
    switch(plotType) {
      case 'affordable': return 'Affordable Plots Portfolio';
      case 'valuable': return 'Affordable cum Valuable Standard';
      case 'premium': return 'Elite Premium Gated Plots';
      case 'commercial': return 'Commercial Strategic Hub Plots';
      default: return plotType || 'Not specified';
    }
  };

  // Helper function to get budget range
  const getBudgetRange = (budget: string) => {
    switch(budget) {
      case '25-50': return '₹25 - ₹50 Lakhs Allocation';
      case '50-75': return '₹50 - ₹75 Lakhs Allocation';
      case '75-1cr': return '₹75 Lakhs - ₹1 Crore Premium';
      case '1cr-above': return '₹1 Crore + Strategic Capital';
      default: return budget || 'Not specified';
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
            <Sparkles size={12} /> Instant Investment Advisory
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-4xl sm:text-6xl font-black tracking-tight leading-tight"
          >
            Let's Find Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#79c223] to-green-400">Perfect Plot</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto font-medium"
          >
            Have strategic investment goals or customization plans? Submit your criteria, and our structural specialists will map your ideal solution.
          </motion.p>
        </div>
      </section>

      {/* ================= MAIN CONTENT SECTION ================= */}
      <section className="py-12 sm:py-24 relative z-20 -mt-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* LEFT COLUMN: CONTACT CHANNELS */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
              
              <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-100/80 border border-slate-100 space-y-6">
                <div className="space-y-1">
                  <span className="text-[#79c223] text-xs font-black uppercase tracking-wider block">Direct Touchpoints</span>
                  <h2 className="text-2xl font-black text-[#0B3A99] tracking-tight">Connect In Realtime</h2>
                </div>

                <div className="space-y-4">
                  {/* Response Metric */}
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      <Clock size={18} />
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-slate-400 uppercase tracking-wide">Guaranteed Response</h4>
                      <p className="text-sm font-bold text-[#0B3A99]">Within 24 Hours Protocol</p>
                    </div>
                  </div>

                  {/* Call Support */}
                  <a href="tel:+918777827497" className="flex items-center justify-between p-4 rounded-2xl border border-slate-200/60 hover:border-[#79c223]/40 bg-white hover:bg-slate-50/50 transition-all group">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-green-50 text-[#79c223] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <Phone size={18} />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-400 uppercase">Voice Hotline</h4>
                        <p className="text-sm font-extrabold text-[#0B3A99] tracking-wide">+91 8777827497</p>
                      </div>
                    </div>
                    <ArrowRight size={16} className="text-slate-300 group-hover:text-[#79c223] group-hover:translate-x-1 transition-all" />
                  </a>

                  {/* WhatsApp Support */}
                  <a 
                    href="https://wa.me/918777827497"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-2xl border border-slate-200/60 hover:border-green-500/40 bg-white hover:bg-slate-50/50 transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <MessageSquare size={18} />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-400 uppercase">Instant WhatsApp Chat</h4>
                        <p className="text-sm font-extrabold text-[#0B3A99]">Ping Asset Advisor</p>
                      </div>
                    </div>
                    <ExternalLink size={14} className="text-slate-300 group-hover:text-emerald-500 transition-colors" />
                  </a>
                </div>
              </div>

              {/* VALUE PROPOSITION LIST */}
              <div className="bg-gradient-to-br from-[#0B3A99] to-[#062466] text-white rounded-3xl p-8 shadow-xl shadow-blue-900/10 space-y-4">
                <h3 className="font-black text-lg text-white tracking-tight">Our Advisory Privileges</h3>
                <ul className="space-y-3">
                  {[
                    'One-on-One Custom Blueprint Review',
                    'Strategic Financial Layout Optimization',
                    'Direct Zero-Brokerage Price Allocation',
                    'Flexible Installment Milestone Plans'
                  ].map((perk, i) => (
                    <motion.li 
                      initial={{ opacity: 0, x: -5 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      key={i} 
                      className="flex items-center gap-3 text-sm text-slate-300 font-medium"
                    >
                      <span className="w-5 h-5 rounded-full bg-white/10 text-[#79c223] flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                      {perk}
                    </motion.li>
                  ))}
                </ul>
              </div>

            </div>

            {/* RIGHT COLUMN: ENQUIRY DATA PORTAL */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-[2rem] p-6 sm:p-10 shadow-xl shadow-slate-100/80 border border-slate-100 relative">
                
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.div
                      key="enquiry-form-wrapper"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0, y: -15 }}
                    >
                      <div className="mb-8 space-y-2">
                        <h2 className="text-2xl sm:text-3xl font-black text-[#0B3A99] tracking-tight flex items-center gap-3">
                          <MessageSquare size={28} className="text-[#79c223]" />
                          Configure Request
                        </h2>
                        <p className="text-slate-400 font-medium text-sm">Please provide accurate verification points so our engineering desk can organize layouts.</p>
                      </div>

                      {/* Error Message */}
                      {errorMessage && (
                        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-xs font-medium">
                          {errorMessage}
                        </div>
                      )}

                      <form onSubmit={handleSubmit} className="space-y-8">
                        
                        {/* CATEGORY 1: OWNER IDENTITY */}
                        <div className="space-y-4">
                          <div className="flex items-center gap-2 pb-1.5 border-b border-slate-100">
                            <User size={15} className="text-[#79c223]" />
                            <h3 className="text-xs font-black uppercase tracking-wider text-slate-400">Owner Identity</h3>
                          </div>

                          <div className="space-y-4">
                            <div>
                              <label className="text-xs font-bold text-slate-700 block mb-1.5">Full Name *</label>
                              <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your complete signature name"
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
                                  placeholder="name@personaldomain.com"
                                  className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#79c223]/20 focus:border-[#79c223] outline-none text-sm font-semibold transition-all text-slate-800 placeholder:text-slate-400"
                                  required
                                />
                              </div>
                              <div>
                                <label className="text-xs font-bold text-slate-700 block mb-1.5">Contact Number *</label>
                                <input
                                  type="tel"
                                  name="phone"
                                  value={formData.phone}
                                  onChange={handleChange}
                                  placeholder="Active calling number"
                                  className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#79c223]/20 focus:border-[#79c223] outline-none text-sm font-semibold transition-all text-slate-800 placeholder:text-slate-400"
                                  required
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* CATEGORY 2: CONFIGURATION FRAMEWORK */}
                        <div className="space-y-4">
                          <div className="flex items-center gap-2 pb-1.5 border-b border-slate-100">
                            <Layers size={15} className="text-[#79c223]" />
                            <h3 className="text-xs font-black uppercase tracking-wider text-slate-400">Configuration Framework</h3>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label className="text-xs font-bold text-slate-700 block mb-1.5">Plot Blueprint Grade *</label>
                              <div className="relative">
                                <select
                                  name="plotType"
                                  value={formData.plotType}
                                  onChange={handleChange}
                                  className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#79c223]/20 focus:border-[#79c223] outline-none text-sm font-semibold transition-all text-slate-800 appearance-none cursor-pointer"
                                  required
                                >
                                  <option value="">Select Blueprint Portfolio</option>
                                  <option value="affordable">Affordable Plots Portfolio</option>
                                  <option value="valuable">Affordable cum Valuable Standard</option>
                                  <option value="premium">Elite Premium Gated Plots</option>
                                  <option value="commercial">Commercial Strategic Hub Plots</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                                  ▼
                                </div>
                              </div>
                            </div>

                            <div>
                              <label className="text-xs font-bold text-slate-700 block mb-1.5">Capital Budget Structure *</label>
                              <div className="relative">
                                <select
                                  name="budget"
                                  value={formData.budget}
                                  onChange={handleChange}
                                  className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#79c223]/20 focus:border-[#79c223] outline-none text-sm font-semibold transition-all text-slate-800 appearance-none cursor-pointer"
                                  required
                                >
                                  <option value="">Select Capital Matrix</option>
                                  <option value="25-50">₹25 - ₹50 Lakhs Allocation</option>
                                  <option value="50-75">₹50 - ₹75 Lakhs Allocation</option>
                                  <option value="75-1cr">₹75 Lakhs - ₹1 Crore Premium</option>
                                  <option value="1cr-above">₹1 Crore + Strategic Capital</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                                  ▼
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* CATEGORY 3: COMPREHENSIVE REQ */}
                        <div className="space-y-4">
                          <div className="flex items-center gap-2 pb-1.5 border-b border-slate-100">
                            <FileText size={15} className="text-[#79c223]" />
                            <h3 className="text-xs font-black uppercase tracking-wider text-slate-400">Additional Specifications</h3>
                          </div>
                          <div>
                            <textarea
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              placeholder="Describe your ideal direction preference (e.g. Vastu compliant, road facing corner plots, immediate registration timeline requests)..."
                              rows={4}
                              className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#79c223]/20 focus:border-[#79c223] outline-none text-sm font-semibold transition-all text-slate-800 resize-none placeholder:text-slate-400"
                            ></textarea>
                          </div>
                        </div>

                        {/* TERMS AGREEMENT CHECKBOX */}
                        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60">
                          <label className="flex items-start gap-3 cursor-pointer select-none">
                            <input
                              type="checkbox"
                              name="agreeTerms"
                              checked={formData.agreeTerms}
                              onChange={handleChange}
                              className="mt-0.5 w-4 h-4 rounded border-slate-300 text-[#79c223] focus:ring-[#79c223] transition-all cursor-pointer"
                              required
                            />
                            <span className="text-xs text-slate-500 font-medium leading-relaxed">
                              I authorize the processing of my credentials to fetch land-title verification status updates in accordance with the{' '}
                              <a href="/terms" className="text-[#79c223] hover:underline font-bold">Terms & Conditions</a> and{' '}
                              <a href="/privacy" className="text-[#79c223] hover:underline font-bold">Privacy Protocol</a>.
                            </span>
                          </label>
                        </div>

                        {/* SUBMIT */}
                        <motion.button
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                          type="submit"
                          disabled={isLoading}
                          className="w-full bg-[#79c223] hover:bg-green-600 text-white font-black text-xs uppercase tracking-widest py-4 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-xl shadow-green-500/15 group disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                          {isLoading ? (
                            <>
                              <Loader2 size={18} className="animate-spin" />
                              Processing...
                            </>
                          ) : (
                            <>
                              Dispatch Strategic Enquiry
                              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </>
                          )}
                        </motion.button>

                      </form>
                    </motion.div>
                  ) : (
                    /* ANIMATED SUCCESS SCREEN PORTAL */
                    <motion.div
                      key="enquiry-success-portal"
                      initial={{ opacity: 0, scale: 0.97 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-16 text-center space-y-6"
                    >
                      <div className="w-20 h-20 rounded-2xl bg-green-50 text-[#79c223] flex items-center justify-center mx-auto shadow-inner border border-green-100">
                        <CheckCircle size={40} className="animate-pulse" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-2xl font-black text-[#0B3A99] tracking-tight">Enquiry Profile Logged</h3>
                        <p className="text-slate-500 font-medium max-w-md mx-auto text-sm leading-relaxed">
                          Transmission complete. Your unique allocation ticket has been locked. An enterprise property supervisor will reach out directly to your registered number shortly.
                        </p>
                        <p className="text-xs text-slate-400 mt-2">
                          A confirmation email has been sent to <strong>{formData.email}</strong>
                        </p>
                      </div>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-all"
                      >
                        File Another Request
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
'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { getProjectById } from '@/lib/projectsData';
import { 
  MapPin, Calendar, DollarSign, CheckCircle, Clock, 
  Phone, MessageCircle, Download, Eye, ArrowLeft, 
  Home, Building2, Award, TrendingUp, Shield, X,
  FileText, Send, Navigation, Play, PlayCircle, 
  Grid3x3, Film, Image as ImageIcon, Ruler, Sparkles,
  Loader2, User
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectDetailsPage() {
  const params = useParams();
  const projectId = params?.id as string;
  const project = getProjectById(projectId);
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<{ url: string; title: string } | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'gallery' | 'video'>('overview');
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });

  if (!project) {
    return (
      <div className="w-full bg-[#030914] text-white min-h-screen flex flex-col items-center justify-center space-y-4 px-4">
        <h2 className="text-2xl font-bold">Project Not Found</h2>
        <Link href="/projects" className="bg-[#79c223] text-black px-6 py-3 rounded-xl text-sm font-bold">
          Back to Projects
        </Link>
      </div>
    );
  }

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    console.log('Project enquiry submitted:', { ...formData, projectName: project.name, projectId: project.id });

    try {
      const response = await fetch('/api/send-project-enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          projectName: project.name,
          projectId: project.id
        }),
      });

      const data = await response.json();
      console.log('Response:', data);

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', phone: '', email: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
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
    <div className="w-full bg-white min-h-screen font-sans">
      
      {/* Header Banner */}
      <section className="relative h-[350px] sm:h-[450px] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={project.thumbnail} alt={project.name} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        </div>

        <Link href="/projects" className="absolute top-4 left-4 sm:top-6 sm:left-8 z-30 bg-black/60 hover:bg-[#79c223] hover:text-black text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl border border-white/10 transition-all flex items-center gap-2 text-xs sm:text-sm font-bold shadow-xl backdrop-blur-sm">
          <ArrowLeft size={14} /> Back to Projects
        </Link>

        <div className="absolute bottom-0 left-0 right-0 z-10 pb-4 sm:pb-6 md:pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 mb-2 sm:mb-3">
              <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-amber-500 text-black text-[9px] sm:text-[11px] font-black uppercase tracking-wider rounded-lg shadow-lg">
                {project.type}
              </span>
              <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-blue-500 text-white text-[9px] sm:text-[11px] font-black uppercase tracking-wider rounded-lg shadow-lg">
                {project.status}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight mb-1 sm:mb-2 leading-tight">
              {project.name}
            </h1>
            <p className="text-gray-200 text-[11px] sm:text-xs md:text-sm font-medium flex items-center gap-1.5 sm:gap-2 flex-wrap">
              <MapPin size={12} className="text-[#79c223] flex-shrink-0" /> 
              <span className="break-words">{project.location}</span>
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        
        {/* Tab Navigation */}
        <div className="flex gap-2 mb-8 border-b border-gray-200 pb-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all whitespace-nowrap ${
              activeTab === 'overview' 
                ? 'bg-[#0B3A99] text-white' 
                : 'text-gray-500 hover:bg-gray-100'
            }`}
          >
            <Home size={16} />
            Overview
          </button>
          <button
            onClick={() => setActiveTab('gallery')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all whitespace-nowrap ${
              activeTab === 'gallery' 
                ? 'bg-[#0B3A99] text-white' 
                : 'text-gray-500 hover:bg-gray-100'
            }`}
          >
            <ImageIcon size={16} />
            Gallery ({project.images.length})
          </button>
          <button
            onClick={() => setActiveTab('video')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all whitespace-nowrap ${
              activeTab === 'video' 
                ? 'bg-[#0B3A99] text-white' 
                : 'text-gray-500 hover:bg-gray-100'
            }`}
          >
            <Film size={16} />
            Videos ({project.videoUrls.length})
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Side - 8 Columns */}
          <div className="lg:col-span-8">
            
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-8">
                
                {/* Description */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-lg font-black text-[#0B3A99] mb-3 flex items-center gap-2">
                    <FileText size={20} />
                    About This Project
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{project.description}</p>
                </div>

                {/* Key Details Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                    <div className="flex items-center gap-2 text-gray-400 mb-1">
                      <DollarSign size={14} />
                      <span className="text-xs font-bold uppercase">Price</span>
                    </div>
                    <p className="text-gray-900 font-bold text-sm">{project.price}</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                    <div className="flex items-center gap-2 text-gray-400 mb-1">
                      <Ruler size={14} />
                      <span className="text-xs font-bold uppercase">Rate</span>
                    </div>
                    <p className="text-gray-900 font-bold text-sm">{project.ratePerSqft}</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                    <div className="flex items-center gap-2 text-gray-400 mb-1">
                      <Grid3x3 size={14} />
                      <span className="text-xs font-bold uppercase">Size</span>
                    </div>
                    <p className="text-gray-900 font-bold text-sm">{project.size}</p>
                  </div>
                </div>

                {/* Highlights */}
                <div className="bg-white rounded-2xl p-6 border border-gray-200">
                  <h3 className="text-lg font-black text-[#0B3A99] mb-4 flex items-center gap-2">
                    <Award size={20} />
                    Project Highlights
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2 p-2 bg-gray-50 rounded-lg">
                        <CheckCircle size={14} className="text-[#79c223] mt-0.5 flex-shrink-0" />
                        <span className="text-xs text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Amenities */}
                <div className="bg-white rounded-2xl p-6 border border-gray-200">
                  <h3 className="text-lg font-black text-[#0B3A99] mb-4 flex items-center gap-2">
                    <Shield size={20} />
                    Amenities
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {project.amenities.map((amenity, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                        <CheckCircle size={12} className="text-[#79c223]" />
                        <span className="text-xs text-gray-700">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Nearby Landmarks */}
                <div className="bg-white rounded-2xl p-6 border border-gray-200">
                  <h3 className="text-lg font-black text-[#0B3A99] mb-4 flex items-center gap-2">
                    <Navigation size={20} />
                    Nearby Landmarks
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.nearbyLandmarks.map((landmark, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                        <MapPin size={14} className="text-[#79c223]" />
                        <span className="text-xs text-gray-700">{landmark}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Google Map */}
                <div className="bg-white rounded-2xl overflow-hidden border border-gray-200">
                  <iframe
                    src={project.mapEmbedUrl}
                    width="100%"
                    height="350"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full"
                    title="Location Map"
                  />
                </div>

              </div>
            )}

            {/* Gallery Tab - 10 Images */}
            {activeTab === 'gallery' && (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {project.images.map((img, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => setSelectedImage(img)}
                    className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group bg-gray-100"
                  >
                    <Image src={img} alt={`Gallery ${idx + 1}`} fill className="object-cover group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Eye size={24} className="text-white" />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Video Tab - 2 Videos */}
            {activeTab === 'video' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.videoUrls.map((video, idx) => (
                  <div 
                    key={video.id} 
                    onClick={() => {
                      setSelectedVideo({ url: video.url, title: video.title });
                      setIsVideoModalOpen(true);
                    }}
                    className="relative aspect-video rounded-xl overflow-hidden cursor-pointer group bg-gradient-to-br from-gray-800 to-gray-900 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-[#79c223]/20 flex items-center justify-center group-hover:bg-[#79c223]/40 transition-all duration-300 group-hover:scale-110">
                        <PlayCircle size={40} className="text-[#79c223] group-hover:text-white transition-colors" />
                      </div>
                      <span className="text-white text-[10px] font-bold mt-2 opacity-70 group-hover:opacity-100">
                        Click to Play
                      </span>
                    </div>
                    
                    <div className="absolute top-3 left-3">
                      <span className="bg-[#79c223]/90 text-white text-[9px] font-black px-2.5 py-1 rounded-lg">
                        Video {video.id}
                      </span>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                      <p className="text-white text-[10px] sm:text-xs font-bold line-clamp-2 leading-tight">
                        {video.title}
                      </p>
                    </div>

                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="text-center">
                        <PlayCircle size={40} className="text-white mx-auto mb-1" />
                        <span className="text-white text-[9px] font-bold block">Watch Video</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>

          {/* Right Side - Enquiry & CTA */}
          <div className="lg:col-span-4">
            <div className="sticky top-6 space-y-4">
              
              {/* Enquiry Form */}
              <div className="bg-gradient-to-br from-[#0B3A99] to-[#062466] rounded-2xl p-5 shadow-xl">
                <h3 className="text-lg font-black text-white mb-1">Enquire Now</h3>
                <p className="text-blue-200 text-xs mb-4">Get detailed information about <strong>{project.name}</strong></p>
                
                {errorMessage && (
                  <div className="mb-3 p-2 bg-red-500/20 border border-red-500/30 rounded-lg text-red-200 text-[10px]">
                    {errorMessage}
                  </div>
                )}

                {isSubmitted ? (
                  <div className="text-center py-6">
                    <CheckCircle size={32} className="text-[#79c223] mx-auto mb-2" />
                    <p className="text-white font-bold">Thank You!</p>
                    <p className="text-blue-200 text-xs mt-1">Your enquiry has been submitted. Our expert will contact you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-3">
                    <input 
                      type="text" 
                      required 
                      placeholder="Full Name" 
                      value={formData.name} 
                      onChange={(e) => setFormData({...formData, name: e.target.value})} 
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-3 py-2.5 text-white text-xs placeholder:text-blue-200 focus:outline-none focus:border-[#79c223]" 
                    />
                    <input 
                      type="tel" 
                      required 
                      placeholder="Mobile Number" 
                      value={formData.phone} 
                      onChange={(e) => setFormData({...formData, phone: e.target.value})} 
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-3 py-2.5 text-white text-xs placeholder:text-blue-200 focus:outline-none focus:border-[#79c223]" 
                    />
                    <input 
                      type="email" 
                      required 
                      placeholder="Email Address" 
                      value={formData.email} 
                      onChange={(e) => setFormData({...formData, email: e.target.value})} 
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-3 py-2.5 text-white text-xs placeholder:text-blue-200 focus:outline-none focus:border-[#79c223]" 
                    />
                    <button 
                      type="submit" 
                      disabled={isLoading}
                      className="w-full bg-[#79c223] text-black font-black py-2.5 rounded-xl text-xs uppercase tracking-wider hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                    >
                      {isLoading ? (
                        <><Loader2 size={14} className="animate-spin" /> Processing...</>
                      ) : (
                        <><Send size={14} /> Send Enquiry</>
                      )}
                    </button>
                  </form>
                )}
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-5 text-center">
                <h3 className="text-lg font-black text-white mb-1">Interested in this Project?</h3>
                <p className="text-gray-300 text-xs mb-4">Book a site visit or download brochure</p>
                
                <div className="space-y-2.5">
                  <button className="w-full bg-[#79c223] hover:bg-[#5f9e1c] text-black font-black py-2.5 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2">
                    <Calendar size={14} /> Schedule Site Visit
                  </button>
                  <button className="w-full bg-white/10 hover:bg-white/20 text-white font-black py-2.5 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 border border-white/20">
                    <Download size={14} /> Download Brochure
                  </button>
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <a href="tel:+918777827497" className="bg-[#25D366] hover:bg-[#20b859] text-white font-bold py-2 rounded-xl text-xs flex items-center justify-center gap-1 transition-all">
                      <Phone size={12} /> Call Now
                    </a>
                    <a href="https://wa.me/918777827497" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#20b859] text-white font-bold py-2 rounded-xl text-xs flex items-center justify-center gap-1 transition-all">
                      <MessageCircle size={12} /> WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Specification Box */}
              <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
                <h4 className="font-black text-gray-800 mb-3 text-sm">📋 Project Specification</h4>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between"><span className="text-gray-500">📍 Location:</span><span className="font-semibold text-right">{project.location}</span></div>
                  <div className="flex justify-between"><span className="text-gray-500">💰 Price:</span><span className="font-semibold text-[#79c223]">{project.price}</span></div>
                  <div className="flex justify-between"><span className="text-gray-500">📐 Rate:</span><span className="font-semibold">{project.ratePerSqft}</span></div>
                  <div className="flex justify-between"><span className="text-gray-500">📏 Size:</span><span className="font-semibold">{project.size}</span></div>
                  <div className="flex justify-between"><span className="text-gray-500">🏷️ Type:</span><span className="font-semibold">{project.type}</span></div>
                  <div className="flex justify-between"><span className="text-gray-500">🟢 Status:</span><span className="font-semibold text-amber-500">{project.status}</span></div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </main>

      {/* Image Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedImage(null)} className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-pointer">
            <div className="relative max-w-5xl w-full h-full">
              <button onClick={() => setSelectedImage(null)} className="absolute -top-10 right-0 text-white hover:text-[#79c223]"><X size={28} /></button>
              <Image src={selectedImage} alt="Gallery" fill className="object-contain" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Lightbox Modal */}
      <AnimatePresence>
        {isVideoModalOpen && selectedVideo && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            onClick={() => { 
              setIsVideoModalOpen(false); 
              setSelectedVideo(null); 
            }} 
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          >
            <div className="relative max-w-4xl w-full">
              <button 
                onClick={() => { 
                  setIsVideoModalOpen(false); 
                  setSelectedVideo(null); 
                }} 
                className="absolute -top-12 right-0 text-white hover:text-[#79c223] transition-colors z-10"
              >
                <X size={28} />
              </button>
              <div className="relative aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
                <video 
                  src={selectedVideo.url} 
                  controls 
                  autoPlay 
                  className="w-full h-full"
                />
              </div>
              <div className="mt-3 text-center">
                <p className="text-white text-sm font-bold">
                  {selectedVideo.title}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
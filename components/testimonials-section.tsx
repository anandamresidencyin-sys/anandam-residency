'use client';

import { testimonials } from '@/data/testimonials';
import { Star, ChevronLeft, ChevronRight, Quote, Play, Pause, User } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  
  // For responsive items per view
  const [itemsPerView, setItemsPerView] = useState(3);
  
  // Duplicate testimonials for seamless infinite scroll effect
  const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials];
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById('testimonials-section');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);
  
  // Auto-slide effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (autoSlide && !isHovering) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => {
          const maxIndex = testimonials.length;
          return (prev + 1) % maxIndex;
        });
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [autoSlide, isHovering, testimonials.length]);
  
  const nextSlide = useCallback(() => {
    setAutoSlide(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setAutoSlide(true), 5000);
  }, [testimonials.length]);
  
  const prevSlide = useCallback(() => {
    setAutoSlide(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setAutoSlide(true), 5000);
  }, [testimonials.length]);
  
  const goToSlide = (index: number) => {
    setAutoSlide(false);
    setCurrentIndex(index);
    setTimeout(() => setAutoSlide(true), 5000);
  };
  
  return (
    <section id="testimonials-section" className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow animation-delay-4000" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-12 lg:mb-16 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-50 to-blue-50 rounded-full px-5 py-2 mb-6 border border-green-100 shadow-sm">
            <Quote className="w-4 h-4 text-green-500" />
            <span className="text-sm font-semibold text-green-600 tracking-wide">Customer Feedback</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-900 to-green-600 bg-clip-text text-transparent">
              What Our Customers Say
            </span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-900 rounded-full mx-auto mb-6" />
          
          <p className="text-gray-600 max-w-2xl mx-auto">
            Read stories from our satisfied customers who have found their dream homes with us
          </p>
        </div>
        
        {/* Carousel Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg hover:shadow-xl rounded-full p-3 transition-all duration-300 hover:scale-110 -translate-x-4 lg:-translate-x-6 opacity-0 group-hover:opacity-100"
            style={{ opacity: isHovering ? 1 : 0 }}
          >
            <ChevronLeft className="w-5 h-5 text-blue-900" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg hover:shadow-xl rounded-full p-3 transition-all duration-300 hover:scale-110 translate-x-4 lg:translate-x-6 opacity-0 group-hover:opacity-100"
            style={{ opacity: isHovering ? 1 : 0 }}
          >
            <ChevronRight className="w-5 h-5 text-blue-900" />
          </button>
          
          {/* Auto-slide Toggle */}
          <button
            onClick={() => setAutoSlide(!autoSlide)}
            className="absolute top-0 right-0 z-20 bg-white/80 backdrop-blur-sm hover:bg-white rounded-full p-2 transition-all duration-300 shadow-md"
          >
            {autoSlide ? <Pause className="w-4 h-4 text-blue-900" /> : <Play className="w-4 h-4 text-blue-900" />}
          </button>
          
          {/* Carousel Track */}
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {extendedTestimonials.map((testimonial, idx) => (
                <div
                  key={`${testimonial.id}-${idx}`}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div
                    className={`bg-white rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-green-100 group transform hover:-translate-y-2 h-full flex flex-col ${
                      isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}
                    style={{ transitionDelay: `${(idx % 6) * 100}ms` }}
                  >
                    {/* Quote Icon */}
                    <div className="relative">
                      <div className="absolute -top-6 -left-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                        <Quote className="w-12 h-12 text-green-600" />
                      </div>
                    </div>
                    
                    {/* Stars */}
                    <div className="flex gap-1 mb-4 mt-2">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          className="fill-yellow-400 text-yellow-400 animate-pulse-star"
                          style={{ animationDelay: `${i * 0.1}s` }}
                        />
                      ))}
                    </div>
                    
                    {/* Testimonial Content - Fixed Height */}
                    <div className="flex-1">
                      <p className="text-gray-700 mb-6 leading-relaxed text-sm md:text-base italic line-clamp-4">
                        &quot;{testimonial.content}&quot;
                      </p>
                    </div>
                    
                    {/* Author Info - Fixed at bottom */}
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-100 mt-auto">
                      <div className="relative flex-shrink-0">
                        {testimonial.image ? (
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full object-cover ring-2 ring-green-100 group-hover:ring-green-400 transition-all duration-300"
                          />
                        ) : (
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-blue-900 flex items-center justify-center">
                            <User className="w-6 h-6 text-white" />
                          </div>
                        )}
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-blue-900 group-hover:text-green-600 transition-colors duration-300 truncate">
                          {testimonial.name}
                        </h4>
                        <p className="text-xs text-gray-500 truncate">{testimonial.role}</p>
                      </div>
                    </div>
                    
                    {/* Rating Badge */}
                    <div className="absolute top-4 right-4 bg-green-50 rounded-full px-2 py-1">
                      <span className="text-xs font-semibold text-green-600">{testimonial.rating}.0</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === idx
                    ? 'w-8 h-2 bg-gradient-to-r from-green-500 to-blue-900'
                    : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
        
      </div>
      
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.1); opacity: 0.4; }
        }
        @keyframes pulse-star {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        .animate-pulse-star {
          animation: pulse-star 2s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .group:hover .group-hover\\:opacity-100 {
          opacity: 1;
        }
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}
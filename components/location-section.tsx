'use client';

import { Clock, MapPin, Navigation, ExternalLink, ChevronRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

interface LocationDetail {
  title: string;
  distance: string;
  icon: string;
  lat: number;
  lng: number;
  address: string;
  description: string;
}

export function LocationSection() {
  const [selectedLocation, setSelectedLocation] = useState<LocationDetail | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mapKey, setMapKey] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const locations: LocationDetail[] = [
    {
      title: 'Nearest Airport',
      distance: '25 KM',
      icon: '✈️',
      lat: 23.6850,
      lng: 86.9740,
      address: 'Kazi Nazrul Islam Airport, Andal, Asansol',
      description: 'Well-connected to major cities with regular flights to Kolkata, Delhi, and Mumbai.'
    },
    {
      title: 'Railway Station',
      distance: '8.4 KM',
      icon: '🚂',
      lat: 23.6839,
      lng: 86.9760,
      address: 'Asansol Junction Railway Station',
      description: 'Major railway hub with connectivity to all major cities across India.'
    },
    {
      title: 'Hospital',
      distance: '5 KM',
      icon: '🏥',
      lat: 23.6900,
      lng: 86.9800,
      address: 'Asansol District Hospital & Multi-specialty Centers',
      description: 'Multi-specialty hospitals with 24/7 emergency services nearby.'
    },
    {
      title: 'School & College',
      distance: '2 KM',
      icon: '🎓',
      lat: 23.6950,
      lng: 86.9850,
      address: 'Top Rated Educational Institutions',
      description: 'Renowned schools and colleges within walking distance.'
    },
    {
      title: 'Market & Shopping',
      distance: '3 KM',
      icon: '🛍️',
      lat: 23.7000,
      lng: 86.9700,
      address: 'Sen Raleigh Market & City Center Mall',
      description: 'Shopping malls, local markets, and entertainment zones.'
    },
  ];

  // Main project location
  const projectLocation = {
    lat: 23.6870,
    lng: 86.9780,
    title: 'Anandam Residency',
    address: 'Asansol, West Bengal'
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Set default selected location
    if (!selectedLocation && locations.length > 0) {
      setSelectedLocation(locations[2]); // Default to Hospital
    }
  }, [locations]);

  const handleLocationClick = (location: LocationDetail) => {
    setSelectedLocation(location);
    setMapKey(prev => prev + 1); // Force map refresh
  };

  const openGoogleMaps = () => {
    if (selectedLocation) {
      const url = `https://www.google.com/maps/search/?api=1&query=${selectedLocation.lat},${selectedLocation.lng}`;
      window.open(url, '_blank');
    }
  };

  const openDirections = () => {
    if (selectedLocation) {
      const url = `https://www.google.com/maps/dir/?api=1&origin=${projectLocation.lat},${projectLocation.lng}&destination=${selectedLocation.lat},${selectedLocation.lng}`;
      window.open(url, '_blank');
    }
  };

  return (
    <section ref={sectionRef} className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow animation-delay-2000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-12 lg:mb-16 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-50 to-blue-50 rounded-full px-5 py-2 mb-6 border border-green-100 shadow-sm">
            <MapPin className="w-4 h-4 text-green-500 animate-bounce" />
            <span className="text-sm font-semibold text-green-600 tracking-wide">Prime Location</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-900 to-green-600 bg-clip-text text-transparent">
              Everything is Closer
            </span>
            <br />
            <span className="text-gray-800">Than You Think!</span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-900 rounded-full mx-auto mb-6" />
          
          <p className="text-gray-600 max-w-2xl mx-auto">
            Strategically located with excellent connectivity to all essential amenities and transportation hubs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left - Location Cards */}
          <div className={`transition-all duration-700 delay-200 transform ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div className="space-y-4">
              {locations.map((location, index) => (
                <button
                  key={index}
                  onClick={() => handleLocationClick(location)}
                  className={`w-full text-left group transition-all duration-500 transform hover:scale-[1.02] ${
                    selectedLocation?.title === location.title
                      ? 'scale-[1.02]'
                      : 'scale-100'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className={`relative overflow-hidden rounded-xl p-5 transition-all duration-300 ${
                    selectedLocation?.title === location.title
                      ? 'bg-gradient-to-r from-green-50 to-blue-50 border-l-4 border-green-500 shadow-lg'
                      : 'bg-white border border-gray-200 shadow-md hover:shadow-xl'
                  }`}>
                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="flex items-start gap-4 relative z-10">
                      <div className={`text-4xl transform transition-all duration-300 ${
                        selectedLocation?.title === location.title ? 'scale-110' : 'group-hover:scale-110'
                      }`}>
                        {location.icon}
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <h4 className={`font-bold text-lg transition-colors duration-300 ${
                            selectedLocation?.title === location.title ? 'text-green-600' : 'text-blue-900'
                          }`}>
                            {location.title}
                          </h4>
                          <p className="text-green-600 font-bold text-sm bg-green-50 px-3 py-1 rounded-full">
                            {location.distance}
                          </p>
                        </div>
                        <p className="text-gray-500 text-sm mt-1">{location.address}</p>
                        <div className={`flex items-center gap-2 mt-3 text-xs font-medium transition-all duration-300 ${
                          selectedLocation?.title === location.title ? 'text-green-600' : 'text-gray-400 group-hover:text-green-500'
                        }`}>
                          <span>View Details</span>
                          <ChevronRight size={14} className={`transition-transform duration-300 ${
                            selectedLocation?.title === location.title ? 'translate-x-1' : 'group-hover:translate-x-1'
                          }`} />
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right - Interactive Map Section */}
          <div className={`transition-all duration-700 delay-400 transform ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <div className="relative">
              {/* Map Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
                <div className="relative h-96 lg:h-[500px]">
                  {/* Google Maps Embed with dynamic location */}
                  <iframe
                    key={mapKey}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${selectedLocation?.lat},${selectedLocation?.lng}&zoom=14&maptype=roadmap`}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                    title={`Map showing ${selectedLocation?.title}`}
                  />
                  
                  {/* Fallback iframe without API key - using standard embed */}
                  <iframe
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    src={`https://www.google.com/maps?q=${selectedLocation?.lat},${selectedLocation?.lng}&z=14&output=embed`}
                    allowFullScreen
                    loading="lazy"
                    className="w-full h-full absolute top-0 left-0"
                    title={`Fallback Map - ${selectedLocation?.title}`}
                  />
                </div>

                {/* Info Card Overlay */}
                {selectedLocation && (
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-xl border border-gray-100 animate-slideUp">
                    <div className="flex items-start gap-3">
                      <div className="text-3xl">{selectedLocation.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <h4 className="font-bold text-blue-900">{selectedLocation.title}</h4>
                          <span className="text-green-600 font-semibold text-sm bg-green-50 px-2 py-1 rounded-full">
                            {selectedLocation.distance}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">{selectedLocation.address}</p>
                        <p className="text-xs text-gray-600 mt-2 line-clamp-2">{selectedLocation.description}</p>
                        
                        {/* Action Buttons */}
                        <div className="flex items-center gap-3 mt-3">
                          <button
                            onClick={openGoogleMaps}
                            className="flex items-center gap-1.5 px-3 py-1.5 bg-green-500 hover:bg-green-600 text-white text-xs font-medium rounded-lg transition-all duration-300 hover:scale-105"
                          >
                            <MapPin size={12} />
                            View on Map
                          </button>
                          <button
                            onClick={openDirections}
                            className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-900 hover:bg-blue-800 text-white text-xs font-medium rounded-lg transition-all duration-300 hover:scale-105"
                          >
                            <Navigation size={12} />
                            Get Directions
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Project Location Badge */}
              <div className="absolute -top-3 -right-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 animate-pulse-slow">
                <Clock size={16} />
                <span className="text-sm font-semibold">Anandam Residency</span>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl border border-green-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <Navigation className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-blue-900">Perfect Connectivity</p>
                  <p className="text-xs text-gray-600">Well-connected to NH-19 & Grand Trunk Road</p>
                </div>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${projectLocation.lat},${projectLocation.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto flex items-center gap-1 text-green-600 hover:text-green-700 text-sm font-medium"
                >
                  Get Route
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.02); }
        }
        .animate-slideUp {
          animation: slideUp 0.5s ease-out forwards;
        }
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}
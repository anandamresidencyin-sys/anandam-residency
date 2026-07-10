'use client';

import { useState, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export function PageLoader() {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  
  // Track current page pathname and search parameters for route changes
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Reset and trigger loader whenever the user changes pages or search parameters
  useEffect(() => {
    // Show loader and reset progress states
    setIsVisible(true);
    setProgress(0);

    // Progress bar counter animation interval (2 seconds total - 20ms per step for 100%)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 20); // 20ms * 100 = 2000ms (2 seconds)

    // Automatically hide loader after exactly 2 seconds (2000ms)
    const timeout = setTimeout(() => {
      setIsVisible(false);
      setIsFirstLoad(false);
    }, 2000);

    // Cleanup function
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [pathname, searchParams]); // Triggers on every page change

  // Always show loader on first load and page changes
  // The component will be visible initially and on every route change

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            y: -100,
            transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
          }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#030914]"
        >
          {/* Glossy ambient background blur lighting effects */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#79c223]/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#0B3A99]/20 rounded-full blur-[140px] pointer-events-none" />

          <div className="relative flex flex-col items-center space-y-8 z-10">
            
            {/* Logo container with glossy spinning outer rings */}
            <div className="relative w-28 h-28 flex items-center justify-center">
              {/* Outer spinning premium gradient ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-t-[#79c223] border-r-[#0B3A99] border-b-white/5 border-l-white/5"
              />
              
              {/* Inner pulsing glassmorphism badge */}
              <motion.div
                animate={{ scale: [0.95, 1.05, 0.95] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="absolute inset-2 rounded-full border border-[#79c223]/30 bg-gradient-to-br from-blue-950/40 to-slate-900/60 backdrop-blur-md flex items-center justify-center shadow-2xl"
              >
                {/* Real brand logo image element */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/Anandam Residency Logo.jpeg" 
                  alt="Anandam Residency Logo" 
                  className="w-16 h-16 rounded-full object-cover shadow-inner"
                />
              </motion.div>
            </div>

            {/* Corporate brand typography and subheaders */}
            <div className="text-center space-y-2">
              <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="text-white text-lg font-black tracking-[0.2em] uppercase"
              >
                Anandam <span className="text-[#79c223]">Residency</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="text-blue-200 text-[10px] font-bold uppercase tracking-widest"
              >
                Premium Residential Plots
              </motion.p>
            </div>

            {/* Glossy load status bar and numerical counter - Faster */}
            <div className="w-48 space-y-2">
              <div className="w-full h-[3px] bg-white/10 rounded-full overflow-hidden relative border border-white/5">
                <motion.div 
                  className="h-full bg-gradient-to-r from-[#0B3A99] to-[#79c223]"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex justify-center">
                <span className="text-white font-mono font-black text-xs tracking-wider opacity-80">
                  {progress}%
                </span>
              </div>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
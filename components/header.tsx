'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, FileText, Home, Info, Grid, Image as ImageIcon, BookOpen, Mail, Building, Layers } from 'lucide-react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <div className="relative w-16 h-16 md:w-20 md:h-20">
                <Image
                  src="/Anandam Residency Logo.jpeg"
                  alt="Anandam Residency Logo"
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              <Link href="/" className="text-sm font-semibold text-gray-700 hover:text-green-600 transition-colors duration-200">
                Home
              </Link>
              <Link href="/about" className="text-sm font-semibold text-gray-700 hover:text-green-600 transition-colors duration-200">
                About Us
              </Link>
              <Link href="/services" className="text-sm font-semibold text-gray-700 hover:text-green-600 transition-colors duration-200">
                Services
              </Link>

              {/* Projects - সরাসরি লিংক (Services এর পরে) */}
              <Link href="/projects" className="text-sm font-semibold text-gray-700 hover:text-green-600 transition-colors duration-200">
                Projects
              </Link>

              {/* Plots - সরাসরি লিংক */}
              <Link href="/plots" className="text-sm font-semibold text-gray-700 hover:text-green-600 transition-colors duration-200">
                Plots
              </Link>

              <Link href="/blog" className="text-sm font-semibold text-gray-700 hover:text-green-600 transition-colors duration-200">
                Blog
              </Link>
              <Link href="/gallery" className="text-sm font-semibold text-gray-700 hover:text-green-600 transition-colors duration-200">
                Gallery
              </Link>
              <Link href="/contact" className="text-sm font-semibold text-gray-700 hover:text-green-600 transition-colors duration-200">
                Contact Us
              </Link>
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+918777827497"
                className="flex items-center gap-2 px-4 py-2.5 bg-gray-100 text-gray-800 rounded-xl hover:bg-gray-200 transition-all duration-200 text-sm font-bold"
              >
                <Phone size={16} className="text-green-600" />
                <span>+91 8777827497</span>
              </a>
              <Link
                href="/book-visit"
                className="flex items-center gap-2 px-4 py-2.5 bg-green-600 text-white rounded-xl hover:bg-green-700 hover:shadow-lg hover:shadow-green-600/20 transition-all duration-200 text-sm font-bold"
              >
                <Calendar size={16} />
                <span>Book Site Visit</span>
              </Link>
              <Link
                href="/enquiry"
                className="flex items-center gap-2 px-4 py-2.5 bg-blue-900 text-white rounded-xl hover:bg-blue-950 hover:shadow-lg hover:shadow-blue-900/20 transition-all duration-200 text-sm font-bold"
              >
                <FileText size={16} />
                <span>Enquiry Form</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2.5 hover:bg-gray-100 rounded-xl transition-colors border border-gray-200 text-gray-700"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${
          isOpen ? 'visible' : 'invisible'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsOpen(false)}
        />
        
        {/* Sidebar Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Sidebar Header with Logo */}
            <div className="flex items-center justify-between p-5 border-b border-gray-100">
              <Link href="/" onClick={() => setIsOpen(false)}>
                <div className="relative w-12 h-12">
                  <Image
                    src="/Anandam Residency Logo.jpeg"
                    alt="Anandam Residency Logo"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
              >
                <X size={22} className="text-gray-600" />
              </button>
            </div>

            {/* Sidebar Navigation */}
            <div className="flex-1 overflow-y-auto p-4">
              <div className="flex flex-col gap-2">
                <Link
                  href="/"
                  className="flex items-center gap-3 px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 rounded-xl transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <Home size={18} className="text-green-500" />
                  Home
                </Link>
                <Link
                  href="/about"
                  className="flex items-center gap-3 px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 rounded-xl transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <Info size={18} className="text-green-500" />
                  About Us
                </Link>
                <Link
                  href="/services"
                  className="flex items-center gap-3 px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 rounded-xl transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <Grid size={18} className="text-green-500" />
                  Services
                </Link>

                {/* Projects - Mobile এ সরাসরি লিংক (Services এর পরে) */}
                <Link
                  href="/projects"
                  className="flex items-center gap-3 px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 rounded-xl transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <Layers size={18} className="text-green-500" />
                  Projects
                </Link>

                {/* Plots - Mobile এ সরাসরি লিংক */}
                <Link
                  href="/plots"
                  className="flex items-center gap-3 px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 rounded-xl transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <Building size={18} className="text-green-500" />
                  Plots
                </Link>

                <Link
                  href="/blog"
                  className="flex items-center gap-3 px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 rounded-xl transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <BookOpen size={18} className="text-green-500" />
                  Blog
                </Link>
                <Link
                  href="/gallery"
                  className="flex items-center gap-3 px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 rounded-xl transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <ImageIcon size={18} className="text-green-500" />
                  Gallery
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center gap-3 px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 rounded-xl transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <Mail size={18} className="text-green-500" />
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Sidebar Footer CTA */}
            <div className="p-5 border-t border-gray-100 space-y-3">
              <Link
                href="/book-visit"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-green-600 text-white font-bold rounded-xl text-sm shadow-md hover:shadow-lg transition-all"
                onClick={() => setIsOpen(false)}
              >
                <Calendar size={16} />
                Book Site Visit
              </Link>
              <Link
                href="/enquiry"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-blue-900 text-white font-bold rounded-xl text-sm shadow-md hover:shadow-lg transition-all"
                onClick={() => setIsOpen(false)}
              >
                <FileText size={16} />
                Enquiry Form
              </Link>
              <a
                href="tel:+918777827497"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gray-100 text-gray-800 font-bold rounded-xl text-sm hover:bg-gray-200 transition-all"
              >
                <Phone size={16} className="text-green-600" />
                Call: +91 8777827497
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
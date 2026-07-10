// app/blog/page.tsx
'use client';

import { useState, useMemo } from 'react';
import { blogPosts } from '@/data/blogs';
import { Calendar, User, Clock, Search, Filter, Layers, ArrowRight, Sparkles, BookOpen, TrendingUp, Heart, Mail } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const categories = useMemo(() => {
    return ['All', ...Array.from(new Set(blogPosts.map((post) => post.category)))];
  }, []);

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const getCategoryCount = (category: string) => {
    if (category === 'All') return blogPosts.length;
    return blogPosts.filter(p => p.category === category).length;
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
      setEmail('');
    }
  };

  return (
    <main className="bg-gradient-to-b from-white via-gray-50 to-white min-h-screen">
      
      {/* ================= HERO BANNER ================= */}
      <section className="relative py-20 sm:py-24 md:py-28 lg:py-32 bg-gradient-to-br from-[#0B3A99] via-[#062466] to-[#030914] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(121,194,35,0.15),transparent_50%)]" />
        <div className="absolute -bottom-1 inset-x-0 h-16 bg-gradient-to-t from-gray-50 to-transparent" />
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-5"
          >
            <Sparkles size={14} className="text-[#79c223]" />
            <span className="text-xs font-black uppercase tracking-wider">Anandam Knowledge Base</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight px-4"
          >
            Insights &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#79c223] to-emerald-400">
              Asset Intelligence
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mt-4 font-medium px-4"
          >
            Deconstruct market mechanics, layout validation blueprints, and elite investment matrices vetted by industry engineers.
          </motion.p>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mt-8"
          >
            <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-white font-bold">{blogPosts.length}</span>
              <span className="text-gray-300 text-xs ml-1">Articles</span>
            </div>
            <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-[#79c223] font-bold">4+</span>
              <span className="text-gray-300 text-xs ml-1">Categories</span>
            </div>
            <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-[#79c223] font-bold">50k+</span>
              <span className="text-gray-300 text-xs ml-1">Readers</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* LEFT SIDEBAR - FILTERS */}
            <div className="lg:col-span-3 order-2 lg:order-1">
              <div className="sticky top-24 space-y-5">
                
                {/* Search Box */}
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                  <h3 className="text-sm font-black text-[#0B3A99] mb-3 flex items-center gap-2">
                    <Search size={16} className="text-[#79c223]" />
                    Search Articles
                  </h3>
                  <div className="relative">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search by title, content..."
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#79c223]/20 focus:border-[#79c223] outline-none text-sm transition-all"
                    />
                    <Search size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  </div>
                </div>

                {/* Categories */}
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                  <h3 className="text-sm font-black text-[#0B3A99] mb-3 flex items-center gap-2">
                    <Filter size={16} className="text-[#79c223]" />
                    Categories
                  </h3>
                  <div className="space-y-2">
                    {categories.map((cat) => {
                      const isActive = selectedCategory === cat;
                      const count = getCategoryCount(cat);
                      return (
                        <button
                          key={cat}
                          onClick={() => setSelectedCategory(cat)}
                          className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                            isActive
                              ? 'bg-[#0B3A99] text-white shadow-md'
                              : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                          }`}
                        >
                          <span>{cat}</span>
                          <span className={`text-xs px-2 py-0.5 rounded-full ${
                            isActive ? 'bg-[#79c223] text-white' : 'bg-gray-200 text-gray-500'
                          }`}>
                            {count}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Popular Tags */}
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                  <h3 className="text-sm font-black text-[#0B3A99] mb-3 flex items-center gap-2">
                    <TrendingUp size={16} className="text-[#79c223]" />
                    Popular Topics
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['Investment', 'Plot Buying', 'Legal Guide', 'Tax Benefits', 'Smart City', 'Infrastructure'].map((tag) => (
                      <button
                        key={tag}
                        onClick={() => {
                          setSearchQuery(tag);
                          setSelectedCategory('All');
                        }}
                        className="px-3 py-1.5 bg-gray-50 hover:bg-[#79c223]/10 text-gray-600 hover:text-[#79c223] text-xs font-medium rounded-full transition-colors"
                      >
                        #{tag}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Newsletter - FIXED: Responsive button */}
                <div className="bg-gradient-to-br from-[#0B3A99] to-[#062466] rounded-2xl p-5 text-white">
                  <Mail size={24} className="text-[#79c223] mb-2" />
                  <h3 className="text-base font-black mb-1">Weekly Newsletter</h3>
                  <p className="text-xs text-blue-200 mb-3">Get the latest insights delivered to your inbox</p>
                  
                  {isSubscribed ? (
                    <div className="text-center py-3">
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 rounded-lg">
                        <span className="text-green-400 text-sm">✓</span>
                        <span className="text-xs">Subscribed!</span>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-2">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email"
                        required
                        className="w-full px-3 py-2.5 rounded-lg text-gray-900 text-xs bg-white/90 focus:outline-none focus:ring-2 focus:ring-[#79c223]"
                      />
                      <button
                        type="submit"
                        className="w-full px-3 py-2.5 bg-[#79c223] text-black font-bold text-xs rounded-lg hover:bg-green-600 transition-colors"
                      >
                        Subscribe
                      </button>
                    </form>
                  )}
                </div>

              </div>
            </div>

            {/* RIGHT SIDEBAR - BLOG CARDS */}
            <div className="lg:col-span-9 order-1 lg:order-2">
              
              {/* Results Count */}
              <div className="mb-6 flex justify-between items-center flex-wrap gap-2">
                <p className="text-gray-500 text-sm">
                  Showing <span className="font-bold text-[#0B3A99]">{filteredPosts.length}</span> of <span className="font-bold">{blogPosts.length}</span> articles
                </p>
                {selectedCategory !== 'All' && (
                  <button
                    onClick={() => setSelectedCategory('All')}
                    className="text-xs text-[#79c223] hover:text-green-600 font-semibold"
                  >
                    Clear Filter ✕
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <AnimatePresence mode="popLayout">
                  {filteredPosts.length > 0 ? (
                    filteredPosts.map((post, index) => (
                      <motion.article
                        layout
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
                        key={post.id}
                        className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1"
                      >
                        {/* Image */}
                        <Link href={`/blog/${post.id}`} className="block relative h-48 overflow-hidden">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                          <span className="absolute top-3 left-3 px-2.5 py-1 bg-[#79c223] text-white text-[10px] font-black rounded-lg uppercase tracking-wider">
                            {post.category}
                          </span>
                        </Link>

                        {/* Content */}
                        <div className="p-5">
                          <div className="flex items-center gap-3 text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                            <span className="flex items-center gap-1">
                              <Calendar size={10} />
                              {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock size={10} />
                              {post.readTime} min read
                            </span>
                          </div>
                          
                          <Link href={`/blog/${post.id}`}>
                            <h3 className="text-lg font-black text-[#0B3A99] mb-2 line-clamp-2 group-hover:text-[#79c223] transition-colors">
                              {post.title}
                            </h3>
                          </Link>
                          
                          <p className="text-gray-500 text-sm mb-3 line-clamp-2">
                            {post.excerpt}
                          </p>
                          
                          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                            <div className="flex items-center gap-2">
                              <img
                                src={`https://ui-avatars.com/api/?name=${post.author.split(' ')[0]}&background=0B3A99&color=fff&rounded=true&bold=true&size=24`}
                                alt={post.author}
                                className="w-6 h-6 rounded-full"
                              />
                              <span className="text-[11px] font-medium text-gray-500">{post.author.split(' ')[0]}</span>
                            </div>
                            <Link
                              href={`/blog/${post.id}`}
                              className="inline-flex items-center gap-1 text-xs font-bold text-[#0B3A99] group-hover:text-[#79c223] transition-colors"
                            >
                              Read More <ArrowRight size={12} />
                            </Link>
                          </div>
                        </div>
                      </motion.article>
                    ))
                  ) : (
                    <motion.div 
                      initial={{ opacity: 0 }} 
                      animate={{ opacity: 1 }} 
                      className="col-span-full py-20 text-center bg-white rounded-3xl border border-dashed border-gray-200"
                    >
                      <BookOpen className="mx-auto text-gray-300 mb-3" size={48} />
                      <p className="text-gray-400 font-medium">No articles found matching your criteria.</p>
                      <button
                        onClick={() => {
                          setSearchQuery('');
                          setSelectedCategory('All');
                        }}
                        className="mt-4 px-4 py-2 bg-[#0B3A99] text-white rounded-xl text-sm font-bold"
                      >
                        Reset Filters
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-16 bg-gradient-to-r from-[#79c223] to-green-600">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Ready to Start Your Property Journey?
            </h2>
            <p className="text-green-50 text-sm sm:text-base max-w-xl mx-auto">
              Explore our premium residential plots with clear titles, bank approval, and modern amenities.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 pt-4">
              <Link
                href="/plots"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#79c223] font-black text-sm rounded-xl hover:shadow-lg transition-all hover:scale-105"
              >
                Explore Plots <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0B3A99] text-white font-black text-sm rounded-xl hover:bg-[#062466] transition-all hover:scale-105"
              >
                Contact Expert
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
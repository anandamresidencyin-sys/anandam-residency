// app/blog/[id]/page.tsx
import { blogPosts } from '@/data/blogs';
import { Calendar, User, Clock, ArrowLeft, Share2, PhoneCall, ChevronRight, Bookmark, Heart, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface BlogPostPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id === id);
  const currentIndex = blogPosts.findIndex((p) => p.id === id);
  
  // Get previous and next posts
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  if (!post) {
    notFound();
  }

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts.filter((p) => p.id !== id && p.category === post.category).slice(0, 3);
  // If not enough same category, add some from other categories
  const finalRelated = relatedPosts.length >= 3 ? relatedPosts : [...relatedPosts, ...blogPosts.filter(p => p.id !== id && p.category !== post.category).slice(0, 3 - relatedPosts.length)];

  return (
    <main className="bg-gray-50 min-h-screen">
      
      {/* ================= BREADCRUMB ================= */}
      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl py-4">
          <div className="flex items-center gap-2 text-xs font-medium text-gray-400">
            <Link href="/" className="hover:text-[#0B3A99] transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/blog" className="hover:text-[#0B3A99] transition-colors">Blog</Link>
            <ChevronRight size={12} />
            <span className="text-[#0B3A99] font-semibold line-clamp-1">{post.title}</span>
          </div>
        </div>
      </div>

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[40vh] sm:h-[50vh] md:h-[55vh] lg:h-[60vh] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 pb-10 sm:pb-12 md:pb-16">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="max-w-4xl">
              <span className="inline-block px-3 py-1 bg-[#79c223] text-white text-xs font-black uppercase tracking-wider rounded-lg mb-4">
                {post.category}
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-gray-300">
                <span className="flex items-center gap-1.5">
                  <User size={14} className="text-[#79c223]" />
                  {post.author}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} className="text-[#79c223]" />
                  {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={14} className="text-[#79c223]" />
                  {post.readTime} min read
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTENT SECTION ================= */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left Sidebar - Share */}
            <div className="lg:col-span-2">
              <div className="sticky top-24 flex lg:flex-col gap-3 justify-center lg:justify-start">
                <button className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-500 hover:bg-[#79c223] hover:text-white transition-all">
                  <Share2 size={16} />
                </button>
                <button className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-500 hover:bg-[#1877f2] hover:text-white transition-all">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.99h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.99C18.343 21.128 22 16.991 22 12z"/></svg>
                </button>
                <button className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-500 hover:bg-[#1DA1F2] hover:text-white transition-all">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.382-11.795c0-.213-.005-.425-.015-.636A10.012 10.012 0 0024 4.555z"/></svg>
                </button>
                <button className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-500 hover:bg-[#0077b5] hover:text-white transition-all">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.98 0 1.771-.773 1.771-1.729V1.729C24 .774 23.203 0 22.225 0z"/></svg>
                </button>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-7">
              <article className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm border border-gray-100">
                <div className="prose prose-slate max-w-none">
                  {post.content.split('\n\n').map((paragraph, index) => {
                    // Check for numbered list
                    if (paragraph.match(/^\d\./)) {
                      return (
                        <ol key={index} className="space-y-2 my-4 pl-5">
                          {paragraph.split('\n').map((item, i) => (
                            item.trim() && (
                              <li key={i} className="text-gray-600 text-sm sm:text-base leading-relaxed">
                                {item.replace(/^\d\.\s*/, '')}
                              </li>
                            )
                          ))}
                        </ol>
                      );
                    }
                    
                    // Check for bullet list
                    if (paragraph.startsWith('✓') || paragraph.startsWith('✗')) {
                      const isCheck = paragraph.startsWith('✓');
                      return (
                        <ul key={index} className="space-y-2 my-4">
                          {paragraph.split('\n').map((item, i) => (
                            item.trim() && (
                              <li key={i} className="flex items-start gap-2 text-gray-600 text-sm sm:text-base">
                                <span className={`text-sm ${item.startsWith('✓') ? 'text-green-500' : 'text-red-500'}`}>
                                  {item.startsWith('✓') ? '✓' : '✗'}
                                </span>
                                <span>{item.substring(1).trim()}</span>
                              </li>
                            )
                          ))}
                        </ul>
                      );
                    }
                    
                    // Check for headings (short lines with colon)
                    if (paragraph.length < 80 && paragraph.includes(':')) {
                      return (
                        <h2 key={index} className="text-xl sm:text-2xl font-black text-[#0B3A99] mt-6 mb-3">
                          {paragraph}
                        </h2>
                      );
                    }
                    
                    // Check for subheadings (short lines without colon)
                    if (paragraph.length < 50 && !paragraph.includes('.') && !paragraph.includes('?') && !paragraph.includes('!')) {
                      return (
                        <h3 key={index} className="text-lg sm:text-xl font-bold text-[#0B3A99] mt-5 mb-2">
                          {paragraph}
                        </h3>
                      );
                    }
                    
                    // Regular paragraph
                    return (
                      <p key={index} className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                        {paragraph}
                      </p>
                    );
                  })}
                </div>

                {/* Gallery Section */}
                {post.galleryImages && post.galleryImages.length > 0 && (
                  <div className="mt-8 pt-4">
                    <h3 className="text-sm font-black uppercase tracking-wider text-[#0B3A99] mb-3">Project Gallery</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {post.galleryImages.map((img, i) => (
                        <div key={i} className="rounded-xl overflow-hidden h-48 bg-gray-100">
                          <img src={img} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Author Bio */}
                <div className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-4">
                  <img
                    src={`https://ui-avatars.com/api/?name=${post.author.split(' ')[0]}&background=79c223&color=fff&rounded=true&bold=true&size=60`}
                    alt={post.author}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-bold text-[#0B3A99]">{post.author}</p>
                    <p className="text-xs text-gray-500">Real Estate Investment Expert</p>
                  </div>
                </div>
              </article>

              {/* Navigation between posts */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {prevPost && (
                  <Link href={`/blog/${prevPost.id}`} className="group p-4 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-all">
                    <span className="text-xs text-gray-400">← Previous Article</span>
                    <p className="text-sm font-bold text-gray-800 group-hover:text-[#79c223] line-clamp-1">{prevPost.title}</p>
                  </Link>
                )}
                {nextPost && (
                  <Link href={`/blog/${nextPost.id}`} className="group p-4 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-all text-right sm:text-left">
                    <span className="text-xs text-gray-400">Next Article →</span>
                    <p className="text-sm font-bold text-gray-800 group-hover:text-[#79c223] line-clamp-1">{nextPost.title}</p>
                  </Link>
                )}
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-3">
              <div className="sticky top-24 space-y-5">
                
                {/* Call to Action */}
                <div className="bg-gradient-to-br from-[#0B3A99] to-[#062466] text-white rounded-2xl p-6 text-center">
                  <h3 className="text-xl font-black mb-2">Get Expert Advice</h3>
                  <p className="text-xs text-blue-200 mb-4">Book a free consultation with our property experts</p>
                  <a
                    href="tel:+918777827497"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 bg-[#79c223] text-black font-bold text-sm rounded-xl hover:bg-green-600 transition-colors"
                  >
                    <PhoneCall size={14} /> Call Now
                  </a>
                </div>

                {/* Related Posts */}
                <div className="bg-white rounded-2xl p-5 border border-gray-100">
                  <h3 className="text-sm font-black text-[#0B3A99] mb-3 flex items-center gap-2">
                    <Bookmark size={14} className="text-[#79c223]" />
                    Related Articles
                  </h3>
                  <div className="space-y-3">
                    {finalRelated.map((related) => (
                      <Link key={related.id} href={`/blog/${related.id}`} className="group flex gap-3 items-start">
                        <img src={related.image} alt={related.title} className="w-16 h-16 rounded-xl object-cover" />
                        <div>
                          <p className="text-xs text-[#79c223] font-bold">{related.category}</p>
                          <p className="text-sm font-bold text-gray-800 group-hover:text-[#79c223] line-clamp-2">{related.title}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Newsletter */}
                <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 text-center">
                  <MessageCircle size={24} className="text-[#79c223] mx-auto mb-2" />
                  <h3 className="text-sm font-black text-gray-800 mb-1">Weekly Digest</h3>
                  <p className="text-xs text-gray-500 mb-3">Get the latest articles directly in your inbox</p>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      placeholder="Your email"
                      className="flex-1 px-3 py-2 rounded-lg text-xs border border-gray-200 focus:outline-none focus:border-[#79c223]"
                    />
                    <button className="px-3 py-2 bg-[#79c223] text-black font-bold text-xs rounded-lg hover:bg-green-600 transition-colors">
                      Subscribe
                    </button>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
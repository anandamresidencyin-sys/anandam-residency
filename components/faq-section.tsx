'use client';

import { useState } from 'react';
import { HelpCircle, ChevronRight, PhoneCall, ArrowRight, Layers, FileText, ShieldCheck } from 'lucide-react';

// Structured data - 3 categories with 5 questions each
const faqCategories = [
  {
    id: 'investment',
    title: 'Plot & Investment',
    subtitle: 'Value & growth updates',
    icon: <Layers size={20} />,
    questions: [
      { id: 'inv-1', q: 'What is the minimum plot size available?', a: 'The minimum plot size starts from 1200 sq.ft. up to 4000 sq.ft. depending on your requirements and preference.' },
      { id: 'inv-2', q: 'Is there any installment or EMI facility?', a: 'Yes, we offer highly flexible customized payment plans spanning up to 36 months with zero hidden costs.' },
      { id: 'inv-3', q: 'What are the future growth prospects here?', a: 'Located near major upcoming economic zones, property values here are projected to appreciate by 25-30% in the next few years.' },
      { id: 'inv-4', q: 'Can I book a virtual site visit?', a: 'Absolutely! Contact our sales team and we will arrange a live, high-definition interactive virtual tour for you.' },
      { id: 'inv-5', q: 'Are there any hidden maintenance charges?', a: 'No, all charges regarding layout development and standard maintenance are completely transparent and stated in the agreement.' }
    ]
  },
  {
    id: 'documentation',
    title: 'Documentation & Legal',
    subtitle: 'Verification & approvals',
    icon: <FileText size={20} />,
    questions: [
      { id: 'doc-1', q: 'Is the land fully freehold and RERA registered?', a: 'Yes, the complete property is 100% freehold, crystal clear, and registered under strict regulatory approvals.' },
      { id: 'doc-2', q: 'How long does the registration process take?', a: 'Once the full payment or loan is processed, the registration process takes approximately 15 to 30 working days.' },
      { id: 'doc-3', q: 'Can I apply for a bank loan for this plot?', a: 'Yes, our project is fully verified and pre-approved by major nationalized and private banks for easy loan processing.' },
      { id: 'doc-4', q: 'What legal documents will I receive upon booking?', a: 'You will receive an official booking receipt, allotment letter, and a copy of the pre-verified sale agreement.' },
      { id: 'doc-5', q: 'Who handles the legal mutation process?', a: 'Our dedicated legal and customer support team will guide and handle the entire mutation process on your behalf.' }
    ]
  },
  {
    id: 'amenities',
    title: 'Amenities & Security',
    subtitle: 'Facilities & infrastructure',
    icon: <ShieldCheck size={20} />,
    questions: [
      { id: 'ame-1', q: 'What premium amenities are included?', a: 'The project features a luxury clubhouse, 24/7 smart surveillance, wide blacktop roads, landscaped parks, and underground utilities.' },
      { id: 'ame-2', q: 'Is there a secured boundary wall for the project?', a: 'Yes, the entire township is secured with a premium gated boundary wall and 3-tier smart security setups.' },
      { id: 'ame-3', q: 'How is the water and electricity supply managed?', a: 'We provide 24/7 uninterrupted deep-bore water connections and dedicated high-capacity electricity sub-stations.' },
      { id: 'ame-4', q: 'Is there a dedicated kids play area or park?', a: 'Yes, multiple designated zones are beautifully curated for childrens parks, jogging tracks, and elderly seating zones.' },
      { id: 'ame-5', q: 'When will the amenities be fully operational?', a: 'Basic infrastructure like roads and electricity are ready. Premium amenities like the clubhouse will be operational by next phase.' }
    ]
  }
];

export function FAQSection() {
  // First category is active by default
  const [activeTab, setActiveTab] = useState(faqCategories[0].id);
  // First question of the active category is open by default
  const [expandedFaq, setExpandedFaq] = useState<string | null>(faqCategories[0].questions[0].id);

  // Get current active category data
  const currentCategory = faqCategories.find(cat => cat.id === activeTab) || faqCategories[0];

  const handleTabChange = (id: string) => {
    setActiveTab(id);
    // Automatically open the first question of the newly selected category
    setExpandedFaq(faqCategories.find(cat => cat.id === id)?.questions[0].id || null);
  };

  return (
    <section className="relative py-24 bg-[#FAFBFD] overflow-hidden select-none touch-pan-y">
      {/* Background Decorative Neo-Glow Elements */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#79c223]/4 rounded-full blur-[120px] pointer-events-none animate-pulse duration-[8000ms]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#0B3A99]/4 rounded-full blur-[120px] pointer-events-none animate-pulse duration-[10000ms]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#79c223]/10 border border-[#79c223]/20 px-4 py-2 rounded-full mb-5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#79c223] animate-ping" />
            <span className="text-[#68a61e] font-extrabold text-xs uppercase tracking-[0.25em]">
              Knowledge Hub
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B3A99] tracking-tight mb-5">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1.5 bg-[#79c223] mx-auto rounded-full" />
        </div>

        {/* --- MAIN 2-COLUMN DASHBOARD LAYOUT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT SIDE - Heading / Category Selector Boxes (4-Cols) */}
          <div className="lg:col-span-4 flex lg:flex-col gap-4 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 scrollbar-none sticky top-24">
            {faqCategories.map((category) => {
              const isSelected = activeTab === category.id;
              return (
                <div
                  key={category.id}
                  onClick={() => handleTabChange(category.id)}
                  className={`group relative flex items-center gap-4 p-5 rounded-2xl border transition-all duration-500 cursor-pointer flex-shrink-0 lg:flex-shrink w-[280px] sm:w-[320px] lg:w-full overflow-hidden ${
                    isSelected 
                      ? 'bg-white border-[#79c223] shadow-[0_15px_35px_rgba(11,58,153,0.04)]' 
                      : 'bg-white border-gray-200/70 hover:border-[#79c223] hover:shadow-[0_15px_35px_rgba(11,58,153,0.02)]'
                  }`}
                >
                  {/* Inner Soft Active Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-tr from-[#FAFBFD] via-transparent to-[#79c223]/4 transition-opacity duration-500 pointer-events-none ${
                    isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`} />

                  {/* Icon Box */}
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center border transition-all duration-500 ${
                    isSelected 
                      ? 'bg-[#79c223]/15 border-[#79c223]/30 text-[#79c223] scale-105' 
                      : 'bg-gray-50 border-gray-100 text-[#0B3A99] group-hover:bg-[#79c223]/10 group-hover:text-[#79c223]'
                  }`}>
                    {category.icon}
                  </div>

                  {/* Heading Title Wrapper */}
                  <div className="flex-grow">
                    <h4 className={`font-black text-sm sm:text-base tracking-tight transition-colors duration-300 ${
                      isSelected ? 'text-[#79c223]' : 'text-[#0B3A99] group-hover:text-[#79c223]'
                    }`}>
                      {category.title}
                    </h4>
                    <p className="text-gray-400 text-[11px] sm:text-xs font-bold uppercase tracking-wider mt-0.5">
                      {category.subtitle}
                    </p>
                  </div>

                  {/* Right Micro Chevron Arrow Indicator */}
                  <ChevronRight size={16} className={`hidden lg:block transition-all duration-500 ${
                    isSelected ? 'text-[#79c223] translate-x-1 scale-110' : 'text-gray-300 group-hover:text-[#79c223] group-hover:translate-x-1'
                  }`} />

                  {/* Left Bottom Glowing Accent Bar */}
                  <div className={`absolute bottom-0 left-0 right-0 h-[3px] bg-[#79c223] transition-transform duration-500 ease-out origin-left ${
                    isSelected ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
                </div>
              );
            })}
          </div>

          {/* RIGHT SIDE - 5 Dynamic FAQ Accordions (8-Cols) */}
          <div className="lg:col-span-8 space-y-4">
            {currentCategory.questions.map((faq) => {
              const isOpen = expandedFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`group rounded-2xl border bg-white transition-all duration-500 overflow-hidden ${
                    isOpen 
                      ? 'border-[#79c223] shadow-[0_15px_30px_rgba(11,58,153,0.03)]' 
                      : 'border-gray-200/80 hover:border-[#79c223] active:border-[#79c223]'
                  }`}
                >
                  {/* Card Main Click Trigger Accordion */}
                  <button
                    onClick={() => setExpandedFaq(isOpen ? null : faq.id)}
                    className="w-full px-6 sm:px-8 py-5 flex items-center justify-between gap-4 text-left relative cursor-pointer"
                  >
                    <div className="flex items-center gap-4 relative z-10">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center border transition-all duration-500 flex-shrink-0 ${
                        isOpen 
                          ? 'bg-[#79c223]/15 border-[#79c223]/30 text-[#79c223]' 
                          : 'bg-gray-50 border-gray-100 text-[#0B3A99] group-hover:bg-[#79c223]/10 group-hover:text-[#79c223]'
                      }`}>
                        <HelpCircle size={16} />
                      </div>
                      <h3 className={`font-extrabold text-sm sm:text-base tracking-tight transition-colors duration-300 ${
                        isOpen ? 'text-[#79c223]' : 'text-[#0B3A99] group-hover:text-[#79c223]'
                      }`}>
                        {faq.q}
                      </h3>
                    </div>

                    {/* Smooth Multi-state Circular Line Indicator */}
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                      isOpen ? 'bg-[#79c223] text-white rotate-180' : 'bg-gray-50 text-gray-400 group-hover:bg-gray-100 group-hover:text-[#0B3A99]'
                    }`}>
                      <div className="relative w-2.5 h-2.5 flex items-center justify-center">
                        <span className="absolute w-2.5 h-0.5 bg-current rounded-full" />
                        <span className={`absolute w-2.5 h-0.5 bg-current rounded-full transition-transform duration-500 ${
                          isOpen ? 'rotate-0 scale-0' : 'rotate-90'
                        }`} />
                      </div>
                    </div>
                  </button>

                  {/* Fluid Height Expansion Box via CSS Grid Technique */}
                  <div className={`grid transition-all duration-500 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}>
                    <div className="overflow-hidden">
                      <div className="px-6 sm:px-8 pb-5 pt-1 border-t border-gray-100 bg-[#FAFBFD]/40">
                        <p className="text-gray-500 font-medium text-xs sm:text-sm leading-relaxed pl-13">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* --- BOTTOM GLOSSY EXTRA CTA BADGE --- */}
        <div className="relative rounded-[2rem] bg-gradient-to-tr from-[#062463] to-[#0B3A99] p-8 text-white text-center mt-16 overflow-hidden shadow-xl group max-w-4xl mx-auto">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#79c223]/15 rounded-full blur-[60px] pointer-events-none" />
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <h3 className="text-xl font-black tracking-tight mb-1">Didn&apos;t find your answer?</h3>
              <p className="text-blue-200 font-medium text-xs sm:text-sm opacity-90">Get in touch with our team for personalized premium assistance.</p>
            </div>
            <a
              href="tel:+918777827497"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-white hover:bg-[#79c223] text-[#0B3A99] hover:text-white font-black text-xs tracking-wider uppercase rounded-xl shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 group/btn"
            >
              <PhoneCall size={14} className="animate-pulse" />
              <span>Call Us Now</span>
              <ArrowRight size={14} className="transform transition-transform duration-300 group-hover/btn:translate-x-1" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
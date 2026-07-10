'use client';

export function WhatsAppButton() {
  // আপনার নতুন হোয়াটসঅ্যাপ নাম্বার এবং ডিফল্ট মেসেজ
  const whatsappNumber = '+918777827497';
  const message = 'Hello! I am interested in Anandam Residency plots. Can you provide more information?';
  
  // স্পেশাল ক্যারেক্টার রিমুভ করে পারফেক্ট URL জেনারেট করা
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      // sm:bottom-6 (ডেস্কটপে নিচে থাকবে) এবং bottom-20 (মোবাইলে বটম বারের ওপরে থাকবে)
      className="fixed bottom-20 sm:bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full flex items-center justify-center shadow-[0_4px_15px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-110 md:animate-bounce cursor-pointer group"
      title="Chat with us on WhatsApp"
    >
      {/* অরিজিনাল হোয়াটসঅ্যাপ হাই-কোয়ালিটি SVG লোগো */}
      <svg 
        className="w-7 h-7 fill-current transition-transform duration-300 group-hover:scale-105" 
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.454L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 1.977 14.053.953 11.42.953c-5.44 0-9.866 4.372-9.87 9.802 0 1.714.453 3.39 1.313 4.872L1.734 21.1l5.704-1.494zM8.408 6.643c-.15-.333-.308-.34-.45-.346-.116-.005-.25-.005-.383-.005-.133 0-.35.05-.533.25-.183.2-.7.683-.7 1.666 0 .983.717 1.933.817 2.066.1.133 1.416 2.163 3.433 3.033.48.207.854.33 1.146.423.483.154.924.132 1.272.08.388-.058 1.196-.49 1.362-.962.166-.473.166-.88.117-.962-.05-.083-.183-.133-.383-.233-.2-.1-1.196-.59-1.379-.657-.183-.067-.316-.1-.45.1-.133.2-.517.656-.633.79-.117.135-.234.15-.434.05-.2-.1-.84-.31-1.601-.987-.592-.527-.992-1.178-1.109-1.378-.116-.2-.012-.308.088-.407.09-.09.2-.233.3-.35.1-.117.133-.2.2-.333.067-.133.034-.25-.017-.35-.05-.1-.45-1.083-.616-1.484z" />
      </svg>
    </a>
  );
}
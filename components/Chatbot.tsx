'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Trash2, HelpCircle } from 'lucide-react';
import Image from 'next/image';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  time: string;
}

// রেডিমেড প্রশ্ন ও উত্তরের ডাটাবেস (FAQs)
const suggestedQuestions = [
  {
    id: 'q1',
    question: 'Where is Anandam Residency located?',
    answer: 'Anandam Residency is located in one of the most prime and fastest-growing zones in Asansol, West Bengal, with excellent main road connectivity!'
  },
  {
    id: 'q2',
    question: 'Are bank loans available?',
    answer: 'Yes, absolutely! We provide 100% bank loan assistance with major verified banks for hassle-free purchasing.'
  },
  {
    id: 'q3',
    question: 'What are the plot sizes?',
    answer: 'We have various smart plot sizes tailored to your needs. Please share your required dimensions in the enquiry form or call us directly!'
  },
  {
    id: 'q4',
    question: 'Is it a clear title property?',
    answer: 'Yes, all our projects come with 100% clear legal titles, fully verified documents, and solid infrastructure development.'
  }
];

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      text: 'Hello! Welcome to Anandam Residency. Click on any question below or type your query to know more!',
      sender: 'bot',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  const chatEndRef = useRef<HTMLDivElement>(null);

  // ফিক্সড অটো-স্ক্রোল: শুধুমাত্র নতুন মেসেজ আসলে চ্যাটবক্সের ভেতরেই স্ক্রোল হবে, মেইন ওয়েবসাইট স্ক্রোল হবে না
  useEffect(() => {
    if (isOpen && messages.length > 1) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [messages.length, isOpen]);

  // ম্যানুয়াল মেসেজ সেন্ড করার ফাংশন
  const handleSendMessage = (e: React.FormEvent, customText?: string) => {
    if (e) e.preventDefault();
    const textToSend = customText || inputMessage;
    if (!textToSend.trim()) return;

    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    const userMessage: Message = {
      id: Date.now().toString(),
      text: textToSend,
      sender: 'user',
      time: currentTime,
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!customText) setInputMessage('');

    // বটের অটোমেটিক রিপ্লাই
    setTimeout(() => {
      const matchedFAQ = suggestedQuestions.find(q => q.question === textToSend);
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: matchedFAQ 
          ? matchedFAQ.answer 
          : 'Thank you for reaching out! Our team will contact you shortly with full details. You can also directly call or WhatsApp us for instant booking.',
        sender: 'bot',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 800);
  };

  // রেডিমেড প্রশ্নে ক্লিক করলে যা হবে
  const handleQuestionClick = (question: string) => {
    handleSendMessage(null as any, question);
  };

  // সব চ্যাট ক্লিয়ার করার ফাংশন (কোনো কনফার্মেশন মেসেজ ছাড়াই সরাসরি ক্লিয়ার হবে)
  const handleClearChat = () => {
    setMessages([
      {
        id: 'welcome',
        text: 'Chat cleared. Click on any question below or type your query!',
        sender: 'bot',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  return (
    <>
      {/* ================= CHATBOT TOGGLE BUTTON WITH FLOATING "HI" BADGE ================= */}
      <div className="fixed bottom-20 sm:bottom-6 left-6 z-50 flex flex-col items-center">
        
        {/* মাথার ওপরে অনবরত কাঁপতে/ভাসতে থাকা "HI! 👋" টেক্সট ক্লাউড */}
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                y: [0, -8, 0], 
                scale: 1 
              }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ 
                y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
                duration: 0.4 
              }}
              className="absolute -top-12 bg-gradient-to-r from-[#0B3A99] to-[#092f7d] text-white text-[11px] font-extrabold px-3 py-1.5 rounded-2xl shadow-md border border-white/10 whitespace-nowrap before:content-[''] before:absolute before:bottom-[-5px] before:left-1/2 before:-translate-x-1/2 before:w-2 before:h-2 before:bg-[#092f7d] before:rotate-45"
            >
              Hi! Chat with us 👋
            </motion.div>
          )}
        </AnimatePresence>

        {/* মেইন বাটন */}
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-[#0B3A99] hover:bg-[#092f7d] text-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(11,58,153,0.4)] cursor-pointer relative overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={26} />
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="w-full h-full flex items-center justify-center relative"
              >
                <Image 
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=150&auto=format&fit=crop" 
                  alt="Bot"
                  fill
                  className="object-cover p-1.5 rounded-full scale-110"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors rounded-full" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* ================= CHAT WINDOW BOX ================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-36 sm:bottom-24 left-4 sm:left-6 z-50 w-[calc(100vw-2rem)] sm:w-[380px] h-[520px] bg-white rounded-3xl shadow-[0_15px_50px_-15px_rgba(0,0,0,0.3)] border border-gray-100 flex flex-col overflow-hidden"
          >
            {/* CHAT HEADER */}
            <div className="bg-[#0B3A99] p-4 text-white flex items-center justify-between shadow-md relative">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-900 to-indigo-950 flex items-center justify-center overflow-hidden border-2 border-white/20 relative shadow-inner">
                  <Image 
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=150&auto=format&fit=crop" 
                    alt="Anandam Bot"
                    fill
                    className="object-cover scale-105"
                    unoptimized
                  />
                </div>

                <div>
                  <h3 className="font-bold text-sm tracking-wide">Anandam Virtual Assistant</h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#79c223] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#79c223]"></span>
                    </span>
                    <span className="text-[11px] text-gray-200 font-medium">Online</span>
                  </div>
                </div>
              </div>

              {/* HEADER ACTION BUTTONS */}
              <div className="flex items-center gap-1">
                <button
                  onClick={handleClearChat}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-200 hover:text-red-400 cursor-pointer"
                  title="Delete Chat History"
                >
                  <Trash2 size={18} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* CHAT BODY: MESSAGES & SUGGESTED QUESTIONS */}
            <div className="flex-1 overflow-y-auto p-4 bg-gray-50/60 space-y-4 scrollbar-none flex flex-col justify-between">
              
              {/* Messages Mapping */}
              <div className="space-y-3 flex-1">
                <AnimatePresence initial={false}>
                  {messages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                      className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                    >
                      <div
                        className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-xs font-medium shadow-sm leading-relaxed ${
                          msg.sender === 'user'
                            ? 'bg-[#0B3A99] text-white rounded-tr-none'
                            : 'bg-white text-gray-800 border border-gray-100 rounded-tl-none'
                        }`}
                      >
                        {msg.text}
                      </div>
                      <span className="text-[9px] text-gray-400 mt-1 px-1 font-semibold">
                        {msg.time}
                      </span>
                    </motion.div>
                  ))}
                </AnimatePresence>
                <div ref={chatEndRef} />
              </div>

              {/* ================= SUGGESTED QUESTIONS BLOCK (FAQs) ================= */}
              <div className="pt-4 border-t border-gray-200/60 mt-auto">
                <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-2 flex items-center gap-1">
                  <HelpCircle size={12} className="text-[#0B3A99]" /> Suggested Questions:
                </p>
                <div className="flex flex-col gap-1.5 max-h-[120px] overflow-y-auto pr-1">
                  {suggestedQuestions.map((q) => (
                    <button
                      key={q.id}
                      onClick={() => handleQuestionClick(q.question)}
                      className="w-full text-left bg-white hover:bg-blue-50/50 border border-gray-200 hover:border-[#0B3A99]/30 text-gray-700 hover:text-[#0B3A99] px-3 py-2 rounded-xl text-xs font-medium transition-all duration-200 active:scale-[0.99] shadow-sm truncate cursor-pointer"
                    >
                      💡 {q.question}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* CHAT INPUT FIELD */}
            <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-gray-100 flex items-center gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message here..."
                className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs outline-none focus:border-[#0B3A99] focus:bg-white transition text-gray-800 font-medium"
              />
              <button
                type="submit"
                disabled={!inputMessage.trim()}
                className="p-2.5 bg-[#0B3A99] hover:bg-[#092f7d] text-white rounded-xl transition disabled:opacity-50 disabled:hover:bg-[#0B3A99] cursor-pointer"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
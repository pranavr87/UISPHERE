import React, { useState } from 'react';
import { faqCategories, faqData } from '../data/faqData';
import { HelpCircle, ChevronDown, Search, Mail } from 'lucide-react';

export default function FaqSection() {
  const [openId, setOpenId] = useState('faq-1');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFaqs = faqData.filter((faq) => {
    const matchCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchSearch = searchQuery.trim() === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <section id="faqs" className="relative py-24 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>NEED CLARITY?</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-black font-syne text-white tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
            Everything you need to know about registration, team sizes, eligibility, and certificates.
          </p>
        </div>

        {/* Filter Pills & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 font-mono text-xs">
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-none">
            {faqCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full transition-all border ${
                  selectedCategory === cat
                    ? 'bg-emerald-500 text-slate-950 font-bold border-emerald-400 shadow-sm'
                    : 'bg-slate-900 text-slate-400 border-white/10 hover:border-white/20 hover:text-white'
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter FAQs..."
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-900/90 text-white rounded-xl border border-white/10 focus:outline-none focus:border-emerald-500 font-mono"
            />
          </div>
        </div>

        {/* Accordion */}
        <div className="space-y-3 font-sans">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl transition-all border ${
                  isOpen
                    ? 'glass-card border-emerald-500/40 shadow-xl'
                    : 'bg-slate-900/60 border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4"
                >
                  <span className="text-base sm:text-lg font-bold text-white tracking-tight">
                    {faq.question}
                  </span>
                  
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${
                      isOpen
                        ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400 rotate-180'
                        : 'bg-slate-800 border-white/10 text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm text-slate-300 leading-relaxed pt-1 border-t border-white/5">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Callout */}
        <div className="mt-12 p-6 rounded-2xl glass-card border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left font-sans">
            <h4 className="text-sm font-bold text-white">Have a specific inquiry not listed?</h4>
            <p className="text-xs text-slate-400">Our student lead team is on-standby to assist developers.</p>
          </div>
          <a
            href="mailto:gdg@iter.ac.in"
            className="px-4 py-2 text-xs font-mono font-bold text-emerald-400 hover:text-slate-950 bg-emerald-950/40 hover:bg-emerald-400 border border-emerald-500/30 rounded-xl transition-all flex items-center gap-2"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>gdg@iter.ac.in</span>
          </a>
        </div>

      </div>
    </section>
  );
}

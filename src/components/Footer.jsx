import React from 'react';
import { Globe, Share2, Mail, ExternalLink, Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#020306] border-t border-white/10 pt-16 pb-12 font-sans text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-xl bg-slate-900 border border-emerald-500/30 flex items-center justify-center p-1">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path d="M30 25 L10 50 L30 75" stroke="#10B981" strokeWidth="12" fill="none" strokeLinecap="round"/>
                  <path d="M70 25 L90 50 L70 75" stroke="#8B5CF6" strokeWidth="12" fill="none" strokeLinecap="round"/>
                  <line x1="38" y1="75" x2="62" y2="25" stroke="#06B6D4" strokeWidth="10" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <span className="font-syne font-bold text-lg text-white">Tekno Krraft 2026</span>
                <p className="text-[10px] font-mono text-slate-400">GDG @ SOA, ITER Chapter</p>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-6 max-w-sm">
              The premier 3-day technical fest empowering students, developers, and tech enthusiasts with cutting edge Cloud, Gen AI, Mobile, and Open Source learning.
            </p>
          </div>

          {/* Quick Nav */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">
              QUICK NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs font-mono text-slate-400">
              <li><a href="#about" className="hover:text-emerald-400 transition-colors">About Fest</a></li>
              <li><a href="#schedule" className="hover:text-emerald-400 transition-colors">Event Schedule</a></li>
              <li><a href="#tracks" className="hover:text-emerald-400 transition-colors">Tracks & Workshops</a></li>
              <li><a href="#hacksprint" className="hover:text-emerald-400 transition-colors">Hack Sprint</a></li>
              <li><a href="#sponsors" className="hover:text-emerald-400 transition-colors">Sponsors</a></li>
              <li><a href="#faqs" className="hover:text-emerald-400 transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Community */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">
              COMMUNITY & RULES
            </h4>
            <ul className="space-y-2 text-xs font-mono text-slate-400">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Code of Conduct</a></li>
              <li><a href="https://developers.google.com/community/gdg" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors flex items-center gap-1"><span>GDG Guidelines</span><ExternalLink className="w-3 h-3" /></a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Terms & Privacy</a></li>
              <li><a href="#hacksprint" className="hover:text-emerald-400 transition-colors">Hackathon Rules</a></li>
            </ul>
          </div>

          {/* Venue & Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">
              HOST VENUE & CONTACT
            </h4>
            <div className="text-xs text-slate-400 space-y-1 mb-4 font-mono leading-relaxed">
              <p className="font-bold text-white">Siksha 'O' Anusandhan</p>
              <p>ITER Campus, Khandagiri Square</p>
              <p>Bhubaneswar, Odisha 751030</p>
            </div>
            <a
              href="mailto:gdg@iter.ac.in"
              className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 hover:underline"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>gdg@iter.ac.in</span>
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400 text-center md:text-left">
            <p className="flex items-center justify-center md:justify-start gap-1">
              <span>© 2026 Tekno Krraft - GDG ITER Chapter. Built for builders with</span>
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
            </p>
            <p className="text-[10px] text-slate-600 mt-1">
              Google Developer Group is an independent group; activities and opinions expressed here are in no way linked to Google, the corporation.
            </p>
          </div>

          {/* Netlify Badge */}
          <a
            href="https://www.netlify.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-emerald-500/30 text-[11px] font-mono text-slate-300 hover:text-white transition-all shadow-md"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Powered by <strong className="text-white font-bold">Netlify</strong></span>
          </a>
        </div>

      </div>
    </footer>
  );
}

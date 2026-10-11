import React, { useState } from 'react';
import { Sparkles, Terminal, Volume2, VolumeX, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar({ onOpenRegister, onOpenTicketModal, soundEnabled, onToggleSound }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Tracks', href: '#tracks' },
    { name: 'Hack Sprint', href: '#hacksprint' },
    { name: 'Sponsors', href: '#sponsors' },
    { name: 'FAQs', href: '#faqs' },
  ];

  return (
    <div className="fixed top-3 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pointer-events-none">
      <header className="pointer-events-auto max-w-5xl w-full glass-pill rounded-full px-4 sm:px-6 py-2.5 flex items-center justify-between shadow-2xl transition-all">
        
        {/* Brand Logo - One Single Crisp Line */}
        <a href="#" className="flex items-center gap-2.5 group shrink-0">
          <div className="w-8 h-8 rounded-full bg-slate-900 border border-emerald-500/30 flex items-center justify-center p-1 shadow-inner group-hover:scale-105 transition-transform">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path d="M30 25 L10 50 L30 75" stroke="#10B981" strokeWidth="12" fill="none" strokeLinecap="round"/>
              <path d="M70 25 L90 50 L70 75" stroke="#8B5CF6" strokeWidth="12" fill="none" strokeLinecap="round"/>
              <line x1="38" y1="75" x2="62" y2="25" stroke="#06B6D4" strokeWidth="10" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="font-syne font-black text-white text-base tracking-tight">TeknoKrraft</span>
            <span className="font-mono text-[11px] font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/30">
              '26
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-1 text-xs font-mono">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1.5 text-slate-300 hover:text-white hover:bg-white/5 rounded-full transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-2">
          {/* Audio FX Toggle */}
          <button
            onClick={onToggleSound}
            className="p-1.5 rounded-full bg-slate-900/80 border border-white/10 hover:border-emerald-500/40 text-slate-400 hover:text-emerald-400 transition-colors"
            title={soundEnabled ? "Mute Sci-Fi Audio FX" : "Enable Sci-Fi Audio FX"}
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4 text-emerald-400" />
            ) : (
              <VolumeX className="w-4 h-4 text-slate-500" />
            )}
          </button>

          {/* VIP Pass Generator */}
          <button
            onClick={onOpenTicketModal}
            className="hidden sm:flex items-center gap-1 px-3 py-1.5 text-xs font-mono font-bold text-slate-300 hover:text-white bg-slate-900/80 border border-white/15 rounded-full hover:border-purple-400/50 transition-all"
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Pass</span>
          </button>

          {/* Glowing Register Button */}
          <button
            onClick={onOpenRegister}
            className="px-4 sm:px-5 py-1.5 sm:py-2 text-xs font-mono font-bold text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 rounded-full shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all transform hover:-translate-y-0.5 flex items-center gap-1.5"
          >
            <span>Register [Free]</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-1.5 rounded-full bg-slate-900 border border-white/10 text-slate-300"
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

      </header>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="pointer-events-auto fixed top-16 inset-x-4 max-w-sm mx-auto glass-card rounded-2xl p-4 shadow-2xl flex flex-col gap-2 font-mono text-xs">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="px-3 py-2 rounded-xl text-slate-200 hover:bg-white/5 hover:text-emerald-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => { setMobileOpen(false); onOpenTicketModal(); }}
              className="w-full py-2 rounded-xl bg-slate-900 text-slate-200 border border-white/10"
            >
              Custom VIP Pass 🎟️
            </button>
            <button
              onClick={() => { setMobileOpen(false); onOpenRegister(); }}
              className="w-full py-2 rounded-xl bg-emerald-500 text-slate-950 font-bold"
            >
              Register Now ✨
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

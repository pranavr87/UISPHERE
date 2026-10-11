import React, { useState } from 'react';
import { X, Sparkles, Download, Share2, Check, QrCode, Terminal, User } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function TicketGeneratorModal({ isOpen, onClose }) {
  const [name, setName] = useState('Alex Morgan');
  const [github, setGithub] = useState('alexmorgan');
  const [role, setRole] = useState('Fullstack Developer');
  const [theme, setTheme] = useState('blue');
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleDownload = () => {
    triggerConfetti();
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  const getThemeClasses = () => {
    switch (theme) {
      case 'red':
        return {
          border: 'border-red-500/50',
          accent: 'text-red-400',
          gradient: 'from-red-600/20 via-slate-900 to-black',
          pill: 'bg-red-950/60 text-red-300 border-red-500/30'
        };
      case 'green':
        return {
          border: 'border-emerald-500/50',
          accent: 'text-emerald-400',
          gradient: 'from-emerald-600/20 via-slate-900 to-black',
          pill: 'bg-emerald-950/60 text-emerald-300 border-emerald-500/30'
        };
      case 'yellow':
        return {
          border: 'border-amber-500/50',
          accent: 'text-amber-400',
          gradient: 'from-amber-600/20 via-slate-900 to-black',
          pill: 'bg-amber-950/60 text-amber-300 border-amber-500/30'
        };
      default:
        return {
          border: 'border-blue-500/50',
          accent: 'text-blue-400',
          gradient: 'from-blue-600/20 via-slate-900 to-black',
          pill: 'bg-blue-950/60 text-blue-300 border-blue-500/30'
        };
    }
  };

  const currentTheme = getThemeClasses();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-slate-950 border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-blue-900/30 max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-500/30 text-blue-400 text-xs font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Digital Pass</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white font-display">
            Claim Your Tekno Krraft VIP Ticket
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Personalize your holographic developer badge for social media and fast-track on-campus check-in.
          </p>
        </div>

        {/* Input Customizers */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
          <div>
            <label className="block text-[11px] font-mono uppercase text-slate-400 mb-1">Your Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 text-xs bg-slate-900 text-white rounded-xl border border-white/10 focus:border-blue-500 focus:outline-none"
              placeholder="e.g. John Doe"
            />
          </div>

          <div>
            <label className="block text-[11px] font-mono uppercase text-slate-400 mb-1">GitHub / Handle</label>
            <input
              type="text"
              value={github}
              onChange={(e) => setGithub(e.target.value)}
              className="w-full px-3 py-2 text-xs bg-slate-900 text-white rounded-xl border border-white/10 focus:border-blue-500 focus:outline-none"
              placeholder="username"
            />
          </div>

          <div>
            <label className="block text-[11px] font-mono uppercase text-slate-400 mb-1">Badge Accent</label>
            <div className="flex items-center gap-2 pt-1">
              {['blue', 'red', 'yellow', 'green'].map((c) => (
                <button
                  key={c}
                  onClick={() => setTheme(c)}
                  className={`w-7 h-7 rounded-full border-2 transition-transform ${
                    theme === c ? 'scale-110 border-white' : 'border-transparent opacity-70 hover:opacity-100'
                  } ${
                    c === 'blue' ? 'bg-blue-500' : c === 'red' ? 'bg-red-500' : c === 'yellow' ? 'bg-yellow-400' : 'bg-emerald-500'
                  }`}
                  aria-label={`Select ${c} theme`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* THE HOLOGRAPHIC TICKET PREVIEW */}
        <div className="p-1 rounded-3xl bg-gradient-to-r from-blue-500/30 via-yellow-500/20 to-red-500/30 mb-6">
          <div className={`relative p-6 sm:p-7 rounded-[22px] bg-gradient-to-b ${currentTheme.gradient} border ${currentTheme.border} shadow-2xl overflow-hidden`}>
            
            {/* Watermark Logo */}
            <div className="absolute right-4 -bottom-6 w-48 h-48 opacity-10 pointer-events-none">
              <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
                <path d="M30 25 L10 50 L30 75 Z"/>
                <path d="M70 25 L90 50 L70 75 Z"/>
              </svg>
            </div>

            {/* Ticket Top Row */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-slate-900 border border-white/20 flex items-center justify-center p-1">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path d="M30 25 L10 50 L30 75" stroke="#4285F4" strokeWidth="14" fill="none" strokeLinecap="round"/>
                    <path d="M70 25 L90 50 L70 75" stroke="#EA4335" strokeWidth="14" fill="none" strokeLinecap="round"/>
                    <line x1="38" y1="75" x2="62" y2="25" stroke="#34A853" strokeWidth="12" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white tracking-tight">Tekno Krraft 2026</h4>
                  <p className="text-[10px] text-slate-400">GDG @ SOA, ITER Chapter</p>
                </div>
              </div>

              <div className="text-right">
                <span className={`inline-block px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider border ${currentTheme.pill}`}>
                  VIP PASS • #TK26-0842
                </span>
                <p className="text-[10px] text-slate-400 mt-0.5">OCTOBER 16-18, 2026</p>
              </div>
            </div>

            {/* Ticket Middle Info */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-2xl font-black text-white tracking-tight">
                  {name || 'Attendee Name'}
                </h3>
                <div className="flex items-center gap-2 mt-1 text-xs">
                  <span className={`font-mono font-medium ${currentTheme.accent}`}>
                    @{github || 'handle'}
                  </span>
                  <span className="text-slate-600">•</span>
                  <span className="text-slate-300">{role}</span>
                </div>
              </div>

              {/* Fake QR code */}
              <div className="p-2 rounded-xl bg-white text-slate-950 flex flex-col items-center justify-center shadow-lg">
                <div className="w-14 h-14 bg-slate-950 p-1 rounded flex items-center justify-center text-white">
                  <QrColorSvg color={theme} />
                </div>
                <span className="text-[8px] font-mono font-bold mt-1 tracking-tight text-slate-800">
                  SCAN TO VERIFY
                </span>
              </div>
            </div>

            {/* Ticket Footer / Barcode */}
            <div className="pt-3 border-t border-dashed border-white/10 flex items-center justify-between text-[11px] text-slate-400 font-mono">
              <span>VENUE: AUDITORIUM 101, ITER CAMPUS</span>
              <span className="tracking-widest">||||| | |||| || |||</span>
            </div>

          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-400">
            Show this pass at Entry Gate 1 for fast-track swag kit collection.
          </p>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={handleDownload}
              className="w-full sm:w-auto px-5 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2"
            >
              {downloaded ? (
                <>
                  <Check className="w-4 h-4 text-emerald-300" />
                  <span>Pass Saved!</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Download Pass</span>
                </>
              )}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

function QrColorSvg({ color }) {
  return (
    <svg viewBox="0 0 24 24" className="w-full h-full fill-white">
      <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm10-2h8v8h-8V2zm2 2v4h4V4h-4zM2 14h8v8H2v-8zm2 2v4h4v-4H4zm14 0h4v4h-4v-4zm-4 0h2v2h-2v-2zm2 2h2v2h-2v-2zm2-2h2v2h-2v-2zm-4 4h4v2h-4v-2z" />
    </svg>
  );
}

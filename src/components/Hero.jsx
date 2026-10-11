import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Calendar, ArrowUpRight, ArrowDown, ShieldCheck, Trophy, Users, Terminal, Code2, Edit2, Check, Download } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Hero({ onOpenRegister, onOpenTicketModal }) {
  const targetDate = new Date('2026-10-16T09:00:00+05:30').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 4,
    hours: 13,
    minutes: 57,
    seconds: 40
  });

  const [passName, setPassName] = useState('PRANAV RAJ');
  const [isEditingName, setIsEditingName] = useState(false);
  const [badgeTier, setBadgeTier] = useState('VIP HACKER');

  // 3D Card Tilt State
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, glareX: 50, glareY: 50 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;
    setTilt({
      x: rotateX,
      y: rotateY,
      glareX: (x / rect.width) * 100,
      glareY: (y / rect.height) * 100
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0, glareX: 50, glareY: 50 });
  };

  const handleQuickDownloadPass = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const diff = targetDate - now;
      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    };
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const padZero = (n) => String(n).padStart(2, '0');

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      
      {/* Top Protocol Telemetry Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-400 pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="text-white font-semibold">MISSION STATUS: OPERATIONAL</span>
            <span className="text-slate-600">|</span>
            <span>GDG @ SOA ITER CHAPTER</span>
          </div>
          <div className="flex items-center gap-4 text-emerald-400">
            <span>OCTOBER 16–18, 2026</span>
            <span className="text-slate-600">|</span>
            <span className="text-cyan-400">100% FREE ADMISSION</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Split Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          
          {/* Left Column: Bold Editorial Typography */}
          <div className="lg:col-span-7 text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span>ANNUAL FLAGSHIP DEVELOPER SUMMIT</span>
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black font-syne tracking-tight text-white leading-none mb-6">
              THE NEXT<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                FRONTIER.
              </span>
            </h1>

            <p className="text-base sm:text-xl text-slate-300 font-sans max-w-xl leading-relaxed mb-8">
              Welcome to <strong className="text-white">Tekno Krraft 2026</strong>. 3 days of deep-dive multimodal AI, cloud-native scale, Web3 systems, and the marquee 24-hour hack sprint at Siksha 'O' Anusandhan.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <button
                onClick={onOpenRegister}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 text-slate-950 font-mono font-bold text-sm shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all flex items-center gap-2 transform hover:-translate-y-0.5"
              >
                <span>CLAIM FREE ALL-ACCESS PASS</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href="#schedule"
                className="px-7 py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800/90 border border-white/15 text-slate-200 font-mono font-bold text-sm transition-all flex items-center gap-2"
              >
                <span>EXPLORE AGENDA</span>
                <ArrowDown className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            {/* Social proof attendees */}
            <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
              <div className="flex -space-x-2">
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" className="w-7 h-7 rounded-full border-2 border-slate-900 object-cover" alt="User" />
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" className="w-7 h-7 rounded-full border-2 border-slate-900 object-cover" alt="User" />
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80" className="w-7 h-7 rounded-full border-2 border-slate-900 object-cover" alt="User" />
                <div className="w-7 h-7 rounded-full bg-emerald-950 border-2 border-slate-900 flex items-center justify-center text-[10px] text-emerald-400 font-bold">
                  +1.5k
                </div>
              </div>
              <span>Builders & hackathon finalists already registered</span>
            </div>

          </div>

          {/* Right Column: Interactive 3D Tilt Holographic VIP Pass HUD */}
          <div className="lg:col-span-5 perspective-1000">
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transformStyle: 'preserve-3d',
                transition: tilt.x === 0 ? 'transform 0.5s ease-out' : 'none'
              }}
              className="glass-card p-7 rounded-3xl border border-white/20 relative overflow-hidden shadow-2xl cursor-pointer group"
            >
              {/* Dynamic Holographic Specular Glare */}
              <div
                className="absolute inset-0 pointer-events-none rounded-3xl opacity-30 group-hover:opacity-70 transition-opacity"
                style={{
                  background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(16, 185, 129, 0.45) 0%, rgba(139, 92, 246, 0.2) 35%, transparent 70%)`
                }}
              />

              <div className="laser-line mb-6"></div>

              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center p-1">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <path d="M30 25 L10 50 L30 75" stroke="#10B981" strokeWidth="14" fill="none" strokeLinecap="round"/>
                      <path d="M70 25 L90 50 L70 75" stroke="#8B5CF6" strokeWidth="14" fill="none" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-syne font-bold text-white text-sm">TEKNO KRAFT 2026</h4>
                    <p className="text-[10px] font-mono text-slate-400">GDG ITER • VIP PROTOCOL</p>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30">
                  ALL-ACCESS
                </span>
              </div>

              {/* Editable Name & Badge Details */}
              <div className="space-y-4 mb-6 font-mono relative z-10">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-slate-400 uppercase">ATTENDEE IDENTIFIER</span>
                    <button
                      onClick={(e) => { e.stopPropagation(); setIsEditingName(!isEditingName); }}
                      className="text-[10px] text-emerald-400 hover:text-white flex items-center gap-1"
                    >
                      {isEditingName ? <Check className="w-3 h-3 text-emerald-400" /> : <Edit2 className="w-3 h-3" />}
                      <span>{isEditingName ? "DONE" : "EDIT NAME"}</span>
                    </button>
                  </div>

                  {isEditingName ? (
                    <input
                      type="text"
                      autoFocus
                      value={passName}
                      onChange={(e) => setPassName(e.target.value.toUpperCase())}
                      onBlur={() => setIsEditingName(false)}
                      className="mt-1 w-full px-3 py-1.5 text-lg font-black font-syne bg-slate-900 text-emerald-300 rounded-lg border border-emerald-500/50 focus:outline-none"
                    />
                  ) : (
                    <div className="text-2xl sm:text-3xl font-black font-syne text-white tracking-tight mt-0.5">
                      {passName || "ATTENDEE NAME"}
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div>
                    <span className="text-[10px] text-slate-500 block">TIER:</span>
                    <span className="text-emerald-400 font-semibold font-mono">{badgeTier}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block">PASS ID:</span>
                    <span className="text-yellow-400 font-semibold font-mono">#TK26-0842</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block">VENUE:</span>
                    <span className="text-cyan-400 font-semibold">AUDI 101</span>
                  </div>
                </div>
              </div>

              {/* Barcode Strip */}
              <div className="p-3 rounded-2xl bg-slate-950/80 border border-white/10 flex items-center justify-between font-mono relative z-10">
                <div className="text-[9px] text-slate-400">
                  <p>ENCRYPTED CHIP VERIFIED</p>
                  <p className="text-white font-bold tracking-widest mt-0.5">||||| | ||| |||| || |||</p>
                </div>
                <button
                  onClick={(e) => { e.stopPropagation(); handleQuickDownloadPass(); }}
                  className="px-3.5 py-1.5 rounded-lg bg-emerald-600/30 hover:bg-emerald-600 border border-emerald-500/40 text-[11px] font-bold text-emerald-300 hover:text-white transition-all flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>SAVE PASS</span>
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* Minimalist Cyber Countdown HUD */}
        <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 relative overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 font-mono">
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-bold uppercase tracking-wider text-white">MISSION LAUNCH PROTOCOL</span>
            </div>
            <span className="text-xs text-emerald-400">TARGET: OCTOBER 16, 2026 • 09:00 IST</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto font-mono">
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-emerald-500/30 text-center">
              <div className="text-3xl sm:text-5xl font-black text-emerald-400 font-syne tracking-tight">
                {padZero(timeLeft.days)}
              </div>
              <div className="text-[11px] uppercase text-slate-400 font-bold tracking-wider mt-1">Days Remaining</div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-violet-500/30 text-center">
              <div className="text-3xl sm:text-5xl font-black text-violet-400 font-syne tracking-tight">
                {padZero(timeLeft.hours)}
              </div>
              <div className="text-[11px] uppercase text-slate-400 font-bold tracking-wider mt-1">Hours</div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-yellow-500/30 text-center">
              <div className="text-3xl sm:text-5xl font-black text-yellow-400 font-syne tracking-tight">
                {padZero(timeLeft.minutes)}
              </div>
              <div className="text-[11px] uppercase text-slate-400 font-bold tracking-wider mt-1">Minutes</div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-cyan-500/30 text-center">
              <div className="text-3xl sm:text-5xl font-black text-cyan-400 font-syne tracking-tight">
                {padZero(timeLeft.seconds)}
              </div>
              <div className="text-[11px] uppercase text-slate-400 font-bold tracking-wider mt-1">Seconds</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

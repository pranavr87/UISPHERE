import React from 'react';
import { Flame, Trophy, CheckCircle2, ArrowRight } from 'lucide-react';

export default function HackathonSpotlight({ onOpenRegister }) {
  const prizes = [
    { rank: '1ST // CHAMPION', amount: '₹75,000', label: 'Grand Champion', border: 'border-amber-400/40', text: 'text-amber-400', bg: 'from-amber-950/40 to-slate-900', badge: '1ST' },
    { rank: '2ND // RUNNER UP', amount: '₹45,000', label: '1st Runner Up', border: 'border-slate-400/30', text: 'text-slate-300', bg: 'from-slate-900 to-slate-950', badge: '2ND' },
    { rank: '3RD // RUNNER UP', amount: '₹30,000', label: '2nd Runner Up', border: 'border-orange-500/30', text: 'text-orange-400', bg: 'from-orange-950/30 to-slate-900', badge: '3RD' },
  ];

  return (
    <section id="hacksprint" className="relative py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-card p-8 sm:p-12 lg:p-16 rounded-3xl border border-rose-500/30 relative overflow-hidden">
          
          <div className="laser-line mb-8"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Info */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-950/60 border border-rose-500/40 text-rose-400 text-xs font-mono font-bold uppercase mb-5">
                <Flame className="w-3.5 h-3.5 text-rose-500" />
                <span>24-HOUR HACK SPRINT // NON-STOP</span>
              </div>

              <h2 className="text-4xl sm:text-6xl font-black font-sans text-white tracking-tight leading-tight mb-4">
                CODE. SHIP. DISRUPT.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-yellow-400 to-emerald-400">
                  ₹1,50,000+ CASH POOL
                </span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed mb-8 max-w-xl">
                Odisha's premier collegiate hack sprint. Form your squad of 2–4 engineers, pick a real industry challenge statement from Google Cloud or GitHub, and build non-stop for 24 hours.
              </p>

              <div className="grid grid-cols-2 gap-3 text-xs font-mono text-slate-300 mb-8">
                <div className="p-3 rounded-xl bg-slate-900/80 border border-white/5 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>24/7 Red Bull & Meals</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/80 border border-white/5 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Direct Mentorship from GDEs</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/80 border border-white/5 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>1 Gbps Fiber Wi-Fi</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/80 border border-white/5 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Fast-Track VC Pitches</span>
                </div>
              </div>

              <button
                onClick={onOpenRegister}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-rose-600 via-rose-500 to-orange-500 hover:from-rose-500 hover:to-orange-400 text-white font-mono font-bold text-sm shadow-xl shadow-rose-600/30 transition-all flex items-center gap-2"
              >
                <span>REGISTER SQUAD FOR SPRINT</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right Prizes */}
            <div className="lg:col-span-5 space-y-4">
              {prizes.map((p, idx) => (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl bg-gradient-to-r ${p.bg} border ${p.border} flex items-center justify-between shadow-lg`}
                >
                  <div>
                    <span className={`text-xs font-mono font-bold uppercase ${p.text}`}>
                      {p.rank}
                    </span>
                    <div className="text-3xl font-black font-sans text-white mt-0.5">
                      {p.amount}
                    </div>
                    <p className="text-[11px] text-slate-400 font-mono mt-1">Cash Award + Google Cloud Credits + Swag Bag</p>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-slate-800 border border-white/10 flex items-center justify-center font-bold font-sans text-lg text-white">
                    {p.badge}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

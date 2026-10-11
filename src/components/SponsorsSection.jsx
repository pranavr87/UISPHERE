import React from 'react';
import { ExternalLink, Building2, Sparkles, ArrowRight } from 'lucide-react';
import { sponsorsData } from '../data/sponsorsData';

export default function SponsorsSection({ onOpenSponsorModal }) {
  const { title, platinumAndGold } = sponsorsData;

  return (
    <section id="sponsors" className="relative py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold mb-4">
            <Building2 className="w-3.5 h-3.5" />
            <span>POWERED BY GIANTS</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black font-sans text-white tracking-tight mb-4">
            Industry Partners
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
            Proudly supported by global leaders accelerating open innovation, developer education, and cloud infrastructure.
          </p>
        </div>

        {/* Title Sponsor - Google Cloud */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="glass-card p-8 sm:p-10 rounded-3xl border border-emerald-500/40 text-center shadow-2xl">
            <span className="px-3 py-1 rounded-full bg-emerald-950/60 text-emerald-400 border border-emerald-500/30 text-[10px] font-mono font-bold uppercase">
              ⚡ TITLE SPONSOR
            </span>
            <a
              href={title.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 text-4xl sm:text-6xl font-black font-sans text-white hover:text-emerald-400 transition-colors mt-3 mb-2"
            >
              <span>{title.name}</span>
              <ExternalLink className="w-6 h-6 text-emerald-400" />
            </a>
            <p className="text-sm text-slate-300 max-w-lg mx-auto mb-6 font-sans">
              {title.description}
            </p>
            <div className="inline-block px-4 py-2 rounded-xl bg-emerald-900/20 border border-emerald-500/20 text-xs font-mono text-emerald-300">
              ⚡ {title.perks}
            </div>
          </div>
        </div>

        {/* Platinum & Gold Partners */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {platinumAndGold.map((sp) => (
            <a
              key={sp.id}
              href={sp.link}
              target="_blank"
              rel="noreferrer"
              className="glass-card p-6 rounded-2xl border border-white/10 text-center flex flex-col justify-between"
            >
              <div>
                <h4 className="text-xl font-bold font-sans text-white mb-1">{sp.name}</h4>
                <span className={`inline-block px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider mb-3 border ${sp.tierColor}`}>
                  {sp.tier}
                </span>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  {sp.description}
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-white/5 text-[11px] font-mono text-emerald-400">
                Explore Ecosystem →
              </div>
            </a>
          ))}
        </div>

        {/* Become a Sponsor CTA */}
        <div className="max-w-2xl mx-auto glass-card p-8 rounded-3xl border border-white/10 text-center">
          <h3 className="text-2xl font-bold font-sans text-white mb-2">Want to Sponsor Tekno Krraft 2026?</h3>
          <p className="text-xs sm:text-sm text-slate-300 mb-6 font-sans">
            Connect your brand with 1,500+ top engineering talent and student builders at ITER Campus.
          </p>
          <button
            onClick={onOpenSponsorModal}
            className="px-8 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-mono font-bold text-xs shadow-lg shadow-emerald-500/30 transition-all flex items-center justify-center gap-2 mx-auto"
          >
            <span>BECOME A SPONSOR &gt;</span>
          </button>
        </div>

      </div>
    </section>
  );
}

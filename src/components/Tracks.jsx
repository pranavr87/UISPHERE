import React from 'react';
import { tracksData } from '../data/tracksData';
import { Brain, Cloud, Globe, Smartphone, Cpu, ArrowUpRight, Layers, Sparkles } from 'lucide-react';

export default function Tracks({ onOpenRegister }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Brain':
        return <Brain className="w-6 h-6 text-emerald-400" />;
      case 'Cloud':
        return <Cloud className="w-6 h-6 text-cyan-400" />;
      case 'Globe':
        return <Globe className="w-6 h-6 text-yellow-400" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-emerald-400" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-violet-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-slate-400" />;
    }
  };

  return (
    <section id="tracks" className="relative py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>LEARNING VERTICALS</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black font-syne text-white tracking-tight mb-4">
            Tracks & Workshops
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
            Hands-on technical immersion designed by industry architects.
          </p>
        </div>

        {/* Tracks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tracksData.map((track) => (
            <div
              key={track.id}
              className="glass-card p-7 rounded-3xl border border-white/10 hover:border-emerald-500/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                    {getIcon(track.icon)}
                  </div>
                  <span className="text-[11px] font-mono font-bold text-emerald-400 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30">
                    {track.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-syne text-white mb-2 group-hover:text-emerald-300 transition-colors">
                  {track.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-6">
                  {track.description}
                </p>

                <div className="space-y-1.5 mb-6 font-mono text-xs">
                  <p className="text-[10px] uppercase text-slate-500 font-semibold">Hands-On Topics:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {track.topics.map((topic, i) => (
                      <span
                        key={i}
                        className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-900/80 text-slate-300 border border-white/5"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <button
                onClick={onOpenRegister}
                className="w-full py-2.5 text-xs font-mono font-bold text-slate-300 hover:text-slate-950 bg-slate-900 hover:bg-emerald-400 rounded-xl border border-white/10 hover:border-transparent transition-all flex items-center justify-center gap-1.5"
              >
                <span>Register Track</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          ))}

          {/* 6th Card: All-Access Pass */}
          <div className="glass-card p-7 rounded-3xl border border-emerald-500/40 flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono font-bold text-emerald-400 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40">
                  UNIFIED TICKET
                </span>
              </div>

              <h3 className="text-xl font-bold font-syne text-white mb-2">
                All-Access Pass
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed mb-6">
                Your single free registration gives you unrestricted entry across all 5 technical tracks, hands-on lab environments, and mentor circles.
              </p>

              <ul className="text-xs font-mono text-slate-300 space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>Google Cloud credits ($500 value)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  <span>Direct 1:1 GDE project reviews</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400"></span>
                  <span>Official GDG Verified Certificate</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onOpenRegister}
              className="w-full py-3 text-xs font-mono font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <span>CLAIM FREE PASS ⚡</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

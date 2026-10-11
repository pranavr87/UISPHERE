import React from 'react';
import { speakersData } from '../data/tracksData';
import { Users, Linkedin, Twitter, Sparkles } from 'lucide-react';

export default function SpeakersGrid() {
  return (
    <section id="speakers" className="relative py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold mb-4">
            <Users className="w-3.5 h-3.5" />
            <span>VISIONARIES & MENTORS</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black font-sans text-white tracking-tight mb-4">
            Featured Keynotes & Leads
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
            Direct mentorship from Google Developer Experts, AI researchers, and cloud architects.
          </p>
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {speakersData.map((speaker) => (
            <div
              key={speaker.id}
              className="glass-card p-6 rounded-3xl border border-white/10 hover:border-emerald-500/40 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Speaker Avatar */}
                <div className="relative mb-5 overflow-hidden rounded-2xl aspect-square bg-slate-800">
                  <img
                    src={speaker.avatar}
                    alt={speaker.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-slate-950/80 text-emerald-300 border border-emerald-500/30 backdrop-blur-md">
                      {speaker.badge}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-emerald-500 text-slate-950">
                      {speaker.day}
                    </span>
                  </div>
                </div>

                {/* Speaker Details */}
                <h3 className="text-lg font-bold font-sans text-white group-hover:text-emerald-300 transition-colors">
                  {speaker.name}
                </h3>
                <p className="text-xs text-emerald-400 font-mono font-medium mb-1">{speaker.role}</p>
                <p className="text-xs text-slate-400 mb-4">{speaker.org}</p>

                {/* Session Topic */}
                <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5 mb-4 font-mono text-xs">
                  <p className="text-[10px] uppercase text-slate-500 font-semibold mb-1">Session Topic:</p>
                  <p className="text-slate-200 line-clamp-2 italic font-sans text-xs">
                    "{speaker.topic}"
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                <a
                  href={speaker.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-slate-800/80 hover:bg-emerald-600/30 text-slate-400 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
                <a
                  href={speaker.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-slate-800/80 hover:bg-cyan-600/30 text-slate-400 hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-3.5 h-3.5" />
                </a>
                <span className="text-[11px] font-mono text-slate-400 ml-auto flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-yellow-400" />
                  GDG Lead
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

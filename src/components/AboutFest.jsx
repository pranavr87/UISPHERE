import React from 'react';
import { Terminal, Cloud, Cpu, Lightbulb, Users2, ArrowUpRight } from 'lucide-react';

export default function AboutFest({ onOpenRegister }) {
  const pillars = [
    {
      title: "01 // CODE",
      icon: <Terminal className="w-6 h-6 text-emerald-400" />,
      border: "border-emerald-500/30 hover:border-emerald-500/60",
      description: "Hands-on engineering, clean architecture, algorithmic problem solving, and modern reactive frameworks."
    },
    {
      title: "02 // CLOUD",
      icon: <Cloud className="w-6 h-6 text-cyan-400" />,
      border: "border-cyan-500/30 hover:border-cyan-500/60",
      description: "Deep dive into Google Cloud Platform, scalable microservices, serverless deployments, and Kubernetes."
    },
    {
      title: "03 // AI",
      icon: <Cpu className="w-6 h-6 text-violet-400" />,
      border: "border-violet-500/30 hover:border-violet-500/60",
      description: "Frontier foundation models, Gemini 1.5, autonomous agent systems, multimodal intelligence, and vector RAG."
    },
    {
      title: "04 // SPRINT",
      icon: <Lightbulb className="w-6 h-6 text-yellow-400" />,
      border: "border-yellow-500/30 hover:border-yellow-500/60",
      description: "Turning bold ideas into functional prototypes in the high-stakes 24-hour hack sprint with real industry challenges."
    }
  ];

  return (
    <section id="about" className="relative py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold mb-4">
            <Users2 className="w-3.5 h-3.5" />
            <span>COMMUNITY-DRIVEN ECOSYSTEM</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black font-sans text-white tracking-tight mb-4">
            About Tekno Krraft 2026
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
            The flagship annual technical fest by <strong className="text-white">GDG ITER Chapter</strong> uniting 1,500+ builders, creators, and researchers under one roof.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((p, idx) => (
            <div
              key={idx}
              className={`glass-card p-6 rounded-3xl border ${p.border} transition-all`}
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center mb-5">
                {p.icon}
              </div>
              <h3 className="text-lg font-bold font-sans text-white mb-2">{p.title}</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                {p.description}
              </p>
            </div>
          ))}
        </div>

        {/* Callout */}
        <div className="glass-card p-8 sm:p-10 rounded-3xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold font-sans text-white mb-1">
              Ready to code, compete & ship?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl font-sans">
              Free entry, verified Google certificates, swag packages, cloud credits, and direct access to top tech recruiters.
            </p>
          </div>

          <button
            onClick={onOpenRegister}
            className="px-8 py-3.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-mono font-bold text-xs shadow-lg shadow-emerald-500/20 transition-all flex items-center gap-1.5 shrink-0"
          >
            <span>JOIN 1,500+ BUILDERS</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}

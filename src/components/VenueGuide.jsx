import React from 'react';
import { MapPin, Plane, Train, Bus, Mail, Wifi, ExternalLink, ShieldCheck } from 'lucide-react';

export default function VenueGuide() {
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=ITER+Campus+Siksha+O+Anusandhan+Bhubaneswar";

  return (
    <section id="venue" className="relative py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>CAMPUS & LOGISTICS</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black font-sans text-white tracking-tight mb-4">
            Host Venue & Travel Guide
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
            Join us live at the premier ITER Campus in Bhubaneswar, Odisha.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Location Card */}
          <div className="lg:col-span-7 glass-card p-8 rounded-3xl border border-white/10 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold">• HOST INSTITUTION •</span>

              <h3 className="text-2xl sm:text-3xl font-black font-sans text-white mt-1 mb-2">
                Siksha 'O' Anusandhan (SOA)
              </h3>
              <p className="text-xs sm:text-sm font-mono text-emerald-400 mb-4">
                ITER Campus • Khandagiri Square, Bhubaneswar, Odisha 751030
              </p>

              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed mb-8">
                The Institute of Technical Education and Research (ITER) features world-class auditorium halls, advanced robotics labs, 1 Gbps fiber connectivity, and dedicated 24-hour hackathon arenas.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 font-mono text-xs">
                <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/5">
                  <Wifi className="w-5 h-5 text-cyan-400 mb-2" />
                  <h4 className="font-bold text-white mb-0.5">1 Gbps Fiber</h4>
                  <p className="text-[11px] text-slate-400 font-sans">Seamless connectivity across all labs</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/5">
                  <MapPin className="w-5 h-5 text-rose-400 mb-2" />
                  <h4 className="font-bold text-white mb-0.5">Audi 101</h4>
                  <p className="text-[11px] text-slate-400 font-sans">1,200 seat keynote hall with 4K projection</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/5">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 mb-2" />
                  <h4 className="font-bold text-white mb-0.5">24/7 Security</h4>
                  <p className="text-[11px] text-slate-400 font-sans">On-campus hostel & meal zones</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all flex items-center gap-2"
              >
                <span>OPEN IN GOOGLE MAPS</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href="mailto:gdg@iter.ac.in"
                className="text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>gdg@iter.ac.in</span>
              </a>
            </div>
          </div>

          {/* Transit Hubs */}
          <div className="lg:col-span-5 space-y-3 font-sans">
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/10 font-mono text-xs">
              <span className="text-emerald-400 font-bold block mb-0.5">TRANSIT ACCESS</span>
              <p className="text-slate-400 text-[11px]">Quick transit from major transport terminals:</p>
            </div>

            <div className="p-5 rounded-2xl glass-card border border-white/10 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-center shrink-0">
                <Plane className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h5 className="text-sm font-bold text-white font-sans">Biju Patnaik Airport (BBI)</h5>
                <p className="text-xs text-slate-400 font-mono mt-0.5">~ 7 km • Approx 15 mins via Cab / Auto</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl glass-card border border-white/10 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-center shrink-0">
                <Train className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h5 className="text-sm font-bold text-white font-sans">Bhubaneswar Railway Station (BBS)</h5>
                <p className="text-xs text-slate-400 font-mono mt-0.5">~ 8.5 km • Approx 20 mins via Mo Bus</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl glass-card border border-white/10 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-950/40 border border-amber-500/30 flex items-center justify-center shrink-0">
                <Bus className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <h5 className="text-sm font-bold text-white font-sans">Baramunda Inter-State Bus Stand</h5>
                <p className="text-xs text-slate-400 font-mono mt-0.5">~ 2 km • Approx 5 mins via local transit</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

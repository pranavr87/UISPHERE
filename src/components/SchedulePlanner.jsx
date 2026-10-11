import React, { useState, useMemo } from 'react';
import { scheduleDays, filterCategories, scheduleEvents } from '../data/scheduleData';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Search, 
  ChevronRight,
  Sparkles,
  X,
  ExternalLink,
  Laptop,
  CheckCircle2,
  Users
} from 'lucide-react';

export default function SchedulePlanner({ onOpenRegister }) {
  const [activeDay, setActiveDay] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSession, setSelectedSession] = useState(null);

  const filteredEvents = useMemo(() => {
    return scheduleEvents.filter((ev) => {
      const matchDay = ev.day === activeDay;
      const matchCategory = selectedCategory === 'All' || ev.category.toLowerCase() === selectedCategory.toLowerCase();
      const matchSearch = searchQuery.trim() === '' || 
        ev.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ev.speaker.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ev.description.toLowerCase().includes(searchQuery.toLowerCase());

      return matchDay && matchCategory && matchSearch;
    });
  }, [activeDay, selectedCategory, searchQuery]);

  const getGoogleCalendarUrl = (session) => {
    const text = encodeURIComponent(`Tekno Krraft 2026: ${session.title}`);
    const details = encodeURIComponent(`${session.description}\nSpeaker: ${session.speaker}\nVenue: ${session.location}`);
    const location = encodeURIComponent(`${session.location}, ITER SOA Campus, Bhubaneswar`);
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&details=${details}&location=${location}`;
  };

  const getCategoryClass = (cat) => {
    switch (cat) {
      case 'Keynote':
        return 'text-rose-400 bg-rose-950/40 border-rose-500/30';
      case 'Workshop':
        return 'text-cyan-400 bg-cyan-950/40 border-cyan-500/30';
      case 'Hackathon':
        return 'text-purple-400 bg-purple-950/40 border-purple-500/30';
      case 'Competition':
        return 'text-emerald-400 bg-emerald-950/40 border-emerald-500/30';
      default:
        return 'text-amber-400 bg-amber-950/40 border-amber-500/30';
    }
  };

  return (
    <section id="schedule" className="relative py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold mb-4">
            <Calendar className="w-3.5 h-3.5" />
            <span>3-DAY MISSION ROADMAP</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-black font-sans text-white tracking-tight mb-4">
            Plan Your Fest Journey
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
            Keynotes, hands-on masterclasses, competitive coding, and 24-hour hack sprint sessions. Click any session for deep details.
          </p>
        </div>

        {/* Day Selector Pills */}
        <div className="flex justify-center mb-10">
          <div className="p-1.5 rounded-2xl bg-slate-900/90 border border-white/10 flex flex-wrap sm:flex-nowrap gap-2 font-mono">
            {scheduleDays.map((day) => {
              const isActive = activeDay === day.id;
              return (
                <button
                  key={day.id}
                  onClick={() => setActiveDay(day.id)}
                  className={`px-6 py-3 rounded-xl text-left transition-all ${
                    isActive
                      ? 'bg-emerald-500 text-slate-950 font-black shadow-lg shadow-emerald-500/20'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <div className="text-xs font-bold uppercase">{day.title} // ROADMAP</div>
                  <div className={`text-[11px] truncate mt-0.5 ${isActive ? 'text-slate-900 font-bold' : 'text-slate-500'}`}>
                    {day.subtitle}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Search & Category Pills */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-8 font-mono text-xs">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {filterCategories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full transition-all shrink-0 border ${
                    isActive
                      ? 'bg-cyan-500 text-slate-950 font-bold border-cyan-400 shadow-sm'
                      : 'bg-slate-900/80 text-slate-400 border-white/10 hover:text-white hover:border-white/20'
                  }`}
                >
                  {cat.toUpperCase()}
                </button>
              );
            })}
          </div>

          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by keyword..."
              className="w-full pl-10 pr-4 py-2 bg-slate-900/90 text-white rounded-xl border border-white/10 focus:outline-none focus:border-emerald-500 font-mono text-xs"
            />
          </div>
        </div>

        {/* Session Cards */}
        <div className="space-y-4">
          {filteredEvents.map((session) => (
            <div
              key={session.id}
              onClick={() => setSelectedSession(session)}
              className="glass-card p-6 sm:p-7 rounded-2xl border border-white/10 hover:border-emerald-500/40 transition-all shadow-xl cursor-pointer group"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-2">
                  <span className={`px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase border ${getCategoryClass(session.category)}`}>
                    {session.category}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono text-slate-300 bg-slate-800">
                    {session.level}
                  </span>
                  {session.popular && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold text-yellow-300 bg-yellow-950/40 border border-yellow-500/30">
                      ★ POPULAR
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-yellow-400 bg-yellow-950/20 px-3 py-1 rounded-lg border border-yellow-500/20">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{session.time}</span>
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-bold font-sans text-white group-hover:text-emerald-300 transition-colors mb-2">
                {session.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed mb-6">
                {session.description}
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <img
                    src={session.speakerAvatar}
                    alt={session.speaker}
                    className="w-10 h-10 rounded-full object-cover border border-white/20"
                  />
                  <div>
                    <div className="text-sm font-bold text-white font-sans">{session.speaker}</div>
                    <p className="text-xs text-slate-400">{session.speakerRole}</p>
                    <div className="flex items-center gap-1 text-[11px] font-mono text-rose-400 mt-0.5">
                      <MapPin className="w-3 h-3" />
                      <span>{session.location}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto justify-end font-mono">
                  <a
                    href={getGoogleCalendarUrl(session)}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="px-3.5 py-2 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors"
                  >
                    📅 Add to Cal
                  </a>
                  <button
                    onClick={(e) => { e.stopPropagation(); onOpenRegister(); }}
                    className="px-4 py-2 text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl shadow-md transition-all flex items-center gap-1"
                  >
                    <span>Register Track</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Session Deep-Dive Modal */}
      {selectedSession && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-xl glass-card rounded-3xl p-6 sm:p-8 border border-emerald-500/40 shadow-2xl">
            <button
              onClick={() => setSelectedSession(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span className={`px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase border ${getCategoryClass(selectedSession.category)}`}>
                {selectedSession.category}
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono text-slate-300 bg-slate-800">
                {selectedSession.level}
              </span>
              <span className="text-xs font-mono text-yellow-400 ml-auto">
                🕒 {selectedSession.time}
              </span>
            </div>

            <h3 className="text-2xl font-black font-sans text-white mb-3">
              {selectedSession.title}
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed mb-6">
              {selectedSession.description}
            </p>

            {/* Speaker block */}
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 flex items-center gap-4 mb-6">
              <img
                src={selectedSession.speakerAvatar}
                alt={selectedSession.speaker}
                className="w-14 h-14 rounded-full object-cover border border-emerald-500/40"
              />
              <div>
                <h4 className="text-base font-bold font-sans text-white">{selectedSession.speaker}</h4>
                <p className="text-xs text-emerald-400">{selectedSession.speakerRole}</p>
                <p className="text-[11px] font-mono text-slate-400 mt-1">📍 {selectedSession.location}</p>
              </div>
            </div>

            {/* Hardware & Lab Requirements */}
            <div className="space-y-2 mb-6 font-mono text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <Laptop className="w-4 h-4 text-cyan-400" />
                <span>Bring laptop with Node 20+, Docker & Git pre-installed</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Free 1 Gbps Wi-Fi, power outlets & cloud lab credits included</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={getGoogleCalendarUrl(selectedSession)}
                target="_blank"
                rel="noreferrer"
                className="w-1/2 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-mono text-xs font-bold text-center"
              >
                📅 Add to Calendar
              </a>
              <button
                onClick={() => { setSelectedSession(null); onOpenRegister(); }}
                className="w-1/2 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-mono text-xs font-bold"
              >
                Register Track [Free] ⚡
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}

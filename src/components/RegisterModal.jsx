import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, UserCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function RegisterModal({ isOpen, onClose, onOpenTicketModal }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    college: 'ITER, Siksha \'O\' Anusandhan',
    track: '24-Hour Hack Sprint (₹1.5L Pool)',
    teamSize: 'Team of 4',
    level: 'Intermediate'
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.5 }
      });
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-slate-950 border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-blue-900/30 max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <>
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-2">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>100% Free • Limited Spots</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-display">
                Register for Tekno Krraft 2026
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                October 16 - 18, 2026 • ITER SOA Campus, Bhubaneswar
              </p>
            </div>

            {/* Registration Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Priyanshu Mohanty"
                  className="w-full px-4 py-2.5 text-xs sm:text-sm bg-slate-900 text-white rounded-xl border border-white/10 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Email Address <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@example.com"
                  className="w-full px-4 py-2.5 text-xs sm:text-sm bg-slate-900 text-white rounded-xl border border-white/10 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  College / Organization <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.college}
                  onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                  className="w-full px-4 py-2.5 text-xs sm:text-sm bg-slate-900 text-white rounded-xl border border-white/10 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Primary Interest</label>
                  <select
                    value={formData.track}
                    onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                    className="w-full px-3 py-2.5 text-xs bg-slate-900 text-white rounded-xl border border-white/10 focus:border-blue-500 focus:outline-none"
                  >
                    <option>24-Hour Hack Sprint (₹1.5L Pool)</option>
                    <option>Generative AI & LLMs</option>
                    <option>Cloud Native & Kubernetes</option>
                    <option>Modern Web & Edge</option>
                    <option>All Tracks & Keynotes</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Team Size</label>
                  <select
                    value={formData.teamSize}
                    onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                    className="w-full px-3 py-2.5 text-xs bg-slate-900 text-white rounded-xl border border-white/10 focus:border-blue-500 focus:outline-none"
                  >
                    <option>Solo Hacker</option>
                    <option>Team of 2</option>
                    <option>Team of 3</option>
                    <option>Team of 4</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 text-sm font-bold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-xl shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span>Confirming Pass...</span>
                  ) : (
                    <>
                      <span>Complete Free Registration</span>
                      <Sparkles className="w-4 h-4 text-yellow-300" />
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-center text-slate-500">
                By registering, you agree to the GDG Community Code of Conduct. No spam, ever.
              </p>
            </form>
          </>
        ) : (
          /* Confirmation State */
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-5 shadow-lg shadow-emerald-500/20">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-black text-white font-display mb-2">
              Registration Confirmed! 🎉
            </h3>
            <p className="text-sm text-slate-300 max-w-sm mx-auto mb-6">
              Welcome aboard, <strong className="text-white">{formData.fullName}</strong>! We've reserved your pass for Tekno Krraft 2026.
            </p>

            <div className="p-4 rounded-2xl bg-slate-900 border border-white/10 mb-6 text-left">
              <div className="flex justify-between text-xs py-1 text-slate-400">
                <span>Confirmation ID:</span>
                <span className="font-mono text-emerald-400 font-bold">#TK26-9182</span>
              </div>
              <div className="flex justify-between text-xs py-1 text-slate-400">
                <span>Selected Track:</span>
                <span className="text-white font-medium">{formData.track}</span>
              </div>
              <div className="flex justify-between text-xs py-1 text-slate-400">
                <span>Venue:</span>
                <span className="text-white font-medium">Auditorium 101, ITER SOA</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  onClose();
                  onOpenTicketModal();
                }}
                className="w-full py-3 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <span>Customize Digital VIP Pass</span>
                <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              </button>

              <button
                onClick={handleReset}
                className="w-full py-3 text-xs font-semibold text-slate-400 hover:text-white bg-slate-900 rounded-xl transition-all"
              >
                Done
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

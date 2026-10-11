import React, { useState } from 'react';
import { X, Building2, Send, CheckCircle2, Download, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function SponsorModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [tier, setTier] = useState('Platinum Partner');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.5 }
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-slate-950 border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-green-900/30 max-h-[92vh] overflow-y-auto">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-2">
                <Building2 className="w-3.5 h-3.5" />
                <span>Partner with GDG ITER</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-display">
                Become a Sponsor
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Direct access to 1,500+ developers, brand visibility, and hackathon judging rights.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Company / Organization Name</label>
                <input
                  type="text"
                  required
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="e.g. Acme Cloud Systems"
                  className="w-full px-4 py-2.5 text-xs sm:text-sm bg-slate-900 text-white rounded-xl border border-white/10 focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Work Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="partnerships@company.com"
                  className="w-full px-4 py-2.5 text-xs sm:text-sm bg-slate-900 text-white rounded-xl border border-white/10 focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Target Sponsorship Tier</label>
                <select
                  value={tier}
                  onChange={(e) => setTier(e.target.value)}
                  className="w-full px-3 py-2.5 text-xs bg-slate-900 text-white rounded-xl border border-white/10 focus:border-emerald-500 focus:outline-none"
                >
                  <option>Title Sponsor (Exclusive)</option>
                  <option>Platinum Partner</option>
                  <option>Gold Partner</option>
                  <option>Community / Swag Partner</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-500 hover:to-green-400 rounded-xl shadow-lg shadow-emerald-600/30 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Request Sponsorship Deck</span>
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black text-white font-display mb-2">
              Inquiry Received!
            </h3>
            <p className="text-sm text-slate-300 mb-6">
              Thank you, <strong className="text-white">{company}</strong>. Our partnership lead will send the complete Tekno Krraft 2026 prospectus to <span className="text-emerald-400">{email}</span> within 24 hours.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 rounded-xl"
            >
              Close
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

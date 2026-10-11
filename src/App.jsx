import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TerminalWidget from './components/TerminalWidget';
import AboutFest from './components/AboutFest';
import SchedulePlanner from './components/SchedulePlanner';
import Tracks from './components/Tracks';
import HackathonSpotlight from './components/HackathonSpotlight';
import SpeakersGrid from './components/SpeakersGrid';
import SponsorsSection from './components/SponsorsSection';
import FaqSection from './components/FaqSection';
import VenueGuide from './components/VenueGuide';
import Footer from './components/Footer';

import RegisterModal from './components/RegisterModal';
import TicketGeneratorModal from './components/TicketGeneratorModal';
import SponsorModal from './components/SponsorModal';

export default function App() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isTicketModalOpen, setIsTicketModalOpen] = useState(false);
  const [isSponsorModalOpen, setIsSponsorModalOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Web Audio Synth for Sci-Fi Feedback
  const playSound = (freq = 750, type = 'sine', duration = 0.06) => {
    if (!soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.06, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch (e) {}
  };

  useEffect(() => {
    const handleGlobalClick = (e) => {
      if (e.target.closest('button') || e.target.closest('a')) {
        playSound(850, 'sine', 0.05);
      }
    };
    window.addEventListener('click', handleGlobalClick);
    return () => window.removeEventListener('click', handleGlobalClick);
  }, [soundEnabled]);

  return (
    <div className="min-h-screen cyber-bg text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-slate-950 overflow-x-hidden">
      {/* Background Cyber Grid */}
      <div className="fixed inset-0 cyber-grid pointer-events-none opacity-40 z-0"></div>

      {/* Floating Modern Pill Navbar */}
      <Navbar
        onOpenRegister={() => setIsRegisterOpen(true)}
        onOpenTicketModal={() => setIsTicketModalOpen(true)}
        soundEnabled={soundEnabled}
        onToggleSound={() => setSoundEnabled(!soundEnabled)}
      />

      {/* Main Content Sections */}
      <main className="flex-grow relative z-10">
        {/* Next-Gen Hero */}
        <Hero
          onOpenRegister={() => setIsRegisterOpen(true)}
          onOpenTicketModal={() => setIsTicketModalOpen(true)}
        />

        {/* Embedded Interactive Hacker CLI Terminal */}
        <TerminalWidget
          onOpenRegister={() => setIsRegisterOpen(true)}
          onOpenTicketModal={() => setIsTicketModalOpen(true)}
        />

        {/* About Fest Pillars */}
        <AboutFest
          onOpenRegister={() => setIsRegisterOpen(true)}
        />

        {/* Interactive Schedule Roadmap */}
        <SchedulePlanner
          onOpenRegister={() => setIsRegisterOpen(true)}
        />

        {/* Technical Tracks */}
        <Tracks
          onOpenRegister={() => setIsRegisterOpen(true)}
        />

        {/* 24-Hour Hack Sprint Battlefield */}
        <HackathonSpotlight
          onOpenRegister={() => setIsRegisterOpen(true)}
        />

        {/* Speakers Grid */}
        <SpeakersGrid />

        {/* Sponsors Showcase */}
        <SponsorsSection
          onOpenSponsorModal={() => setIsSponsorModalOpen(true)}
        />

        {/* FAQ Accordion */}
        <FaqSection />

        {/* Venue Guide */}
        <VenueGuide />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        onOpenTicketModal={() => setIsTicketModalOpen(true)}
      />

      <TicketGeneratorModal
        isOpen={isTicketModalOpen}
        onClose={() => setIsTicketModalOpen(false)}
      />

      <SponsorModal
        isOpen={isSponsorModalOpen}
        onClose={() => setIsSponsorModalOpen(false)}
      />
    </div>
  );
}

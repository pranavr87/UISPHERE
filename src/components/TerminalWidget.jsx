import React, { useState, useRef, useEffect } from 'react';
import confetti from 'canvas-confetti';

export default function TerminalWidget({ onOpenRegister, onOpenTicketModal }) {
  const [logs, setLogs] = useState([
    { type: 'system', text: '=== WELCOME TO TEKNO KRAFFT 2026 CLI ===' },
    { type: 'info', text: 'Interactive terminal initialized. Type a command or click options.' },
    { type: 'help', text: 'Available commands: schedule, hack, pass, venue, secret, clear' }
  ]);
  const [inputVal, setInputVal] = useState('');
  const logEndRef = useRef(null);

  useEffect(() => {
    logEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = inputVal.trim().toLowerCase();
      setInputVal('');
      if (!cmd) return;

      const newLogs = [...logs, { type: 'user', text: `> ${cmd}` }];

      switch (cmd) {
        case 'help':
          newLogs.push({ type: 'help', text: 'Commands: schedule, hack, pass, venue, secret, clear' });
          break;
        case 'schedule':
          newLogs.push({ type: 'success', text: 'Redirecting to 3-day schedule roadmap...' });
          window.location.hash = '#schedule';
          break;
        case 'hack':
          newLogs.push({ type: 'alert', text: '24-Hour Hack Sprint: ₹1,50,000+ Prize Pool. Oct 17 10:30 AM.' });
          window.location.hash = '#hacksprint';
          break;
        case 'pass':
          onOpenTicketModal();
          newLogs.push({ type: 'success', text: 'Opening holographic digital VIP badge customizer...' });
          break;
        case 'register':
          onOpenRegister();
          newLogs.push({ type: 'success', text: 'Opening registration form...' });
          break;
        case 'venue':
          newLogs.push({ type: 'info', text: 'ITER Campus, Siksha \'O\' Anusandhan, Khandagiri, Bhubaneswar 751030' });
          break;
        case 'clear':
          setLogs([]);
          return;
        case 'secret':
          confetti({ particleCount: 150, spread: 80 });
          newLogs.push({ type: 'gold', text: '🎉 EASTER EGG UNLOCKED! You are an official GDG Hacker 2026!' });
          break;
        default:
          newLogs.push({ type: 'error', text: `Command not found: '${cmd}'. Type 'help' for available commands.` });
      }

      setLogs(newLogs);
    }
  };

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
      <div className="rounded-3xl bg-slate-950 border border-white/15 shadow-2xl overflow-hidden font-mono text-xs">
        {/* Terminal Header Bar */}
        <div className="px-4 py-3 bg-slate-900 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
            <span className="text-slate-400 text-[11px] ml-2">gdg-shell // tekno-krraft-v2.6</span>
          </div>
          <span className="text-[10px] text-slate-500">Try typing 'secret' or 'hack'</span>
        </div>

        {/* Logs */}
        <div className="p-5 space-y-1.5 h-60 overflow-y-auto">
          {logs.map((log, idx) => (
            <div key={idx} className={
              log.type === 'system' ? 'text-emerald-400 font-bold' :
              log.type === 'user' ? 'text-slate-400 font-bold' :
              log.type === 'help' ? 'text-cyan-400' :
              log.type === 'alert' ? 'text-rose-400' :
              log.type === 'gold' ? 'text-yellow-300 font-bold' :
              log.type === 'error' ? 'text-red-400' : 'text-slate-300'
            }>
              {log.text}
            </div>
          ))}
          <div ref={logEndRef} />
        </div>

        {/* Command Line Input */}
        <div className="p-3 bg-slate-900/80 border-t border-white/10 flex items-center gap-2">
          <span className="text-emerald-400 font-bold">&gt;</span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleCommand}
            placeholder="Type 'schedule', 'hack', or 'secret'..."
            className="w-full bg-transparent text-white focus:outline-none font-mono text-xs"
          />
        </div>
      </div>
    </section>
  );
}

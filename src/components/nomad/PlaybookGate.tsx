'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Compass, ArrowRight, Lock } from 'lucide-react';

interface PlaybookGateProps {
  onUnlock: (name: string, email: string) => void;
}

export default function PlaybookGate({ onUnlock }: PlaybookGateProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name.trim()) { setError('Please enter your name.'); return; }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) { setError('Please enter a valid email address.'); return; }

    onUnlock(name.trim(), email.trim());
  };

  return (
    <div className="min-h-screen bg-[#2E261E] flex items-center justify-center px-4 pt-16">
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute right-0 top-1/4 w-[40%] h-[50%] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute left-0 bottom-1/4 w-[30%] h-[40%] rounded-full bg-secondary/8 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-md"
      >
        {/* Card */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          {/* Icon */}
          <div className="flex items-center justify-center w-14 h-14 bg-primary/15 border border-primary/20 rounded-2xl mb-6 mx-auto">
            <Compass className="w-7 h-7 text-primary" />
          </div>

          {/* Heading */}
          <div className="text-center mb-8">
            <p className="text-xs font-mono text-primary uppercase tracking-widest mb-2">
              UDream Nomad Playbook
            </p>
            <h1 className="font-display text-[#EBE6D9] text-3xl font-bold leading-tight mb-3">
              6 Phases to <em className="text-primary not-italic">Freedom</em>
            </h1>
            <p className="text-[#EBE6D9]/55 text-sm leading-relaxed">
              Enter your details to unlock the full playbook — 96 tasks, interactive tools, and everything you need to become a digital nomad.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-mono text-white/40 uppercase tracking-widest mb-1.5">
                Your Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Alex Johnson"
                autoFocus
                className="w-full px-4 py-3 bg-white/7 border border-white/10 rounded-xl text-[#EBE6D9] placeholder-white/25 text-sm outline-none focus:border-primary transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-white/40 uppercase tracking-widest mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-3 bg-white/7 border border-white/10 rounded-xl text-[#EBE6D9] placeholder-white/25 text-sm outline-none focus:border-primary transition-colors"
              />
            </div>

            {error && (
              <p className="text-xs text-red-400">{error}</p>
            )}

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 bg-primary text-white font-semibold text-sm rounded-xl hover:bg-primary/90 transition-colors mt-2"
            >
              Unlock the Playbook
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Privacy note */}
          <p className="flex items-center justify-center gap-1.5 mt-5 text-[10px] text-white/25">
            <Lock className="w-3 h-3" />
            We respect your privacy. No spam, ever.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

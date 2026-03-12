'use client';

import { motion } from 'framer-motion';
import { Compass, Briefcase, ClipboardList, Backpack, PlaneLanding, Rocket, type LucideIcon } from 'lucide-react';
import type { Phase } from './types';

const ICON_MAP: Record<string, LucideIcon> = {
  Compass, Briefcase, ClipboardList, Backpack, PlaneLanding, Rocket,
};

interface NomadHeroProps {
  phases: Phase[];
  checkedCount: number;
  totalTasks: number;
  packingTotal: number;
  activePhase: string;
  onSwitchPhase: (id: string) => void;
}

export default function NomadHero({
  phases,
  checkedCount,
  totalTasks,
  packingTotal,
  activePhase,
  onSwitchPhase,
}: NomadHeroProps) {
  const progressPct = totalTasks > 0 ? (checkedCount / totalTasks) * 100 : 0;

  return (
    <section className="bg-[#2E261E] pt-20 pb-12 px-4 relative overflow-hidden border-b-2 border-primary">
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[40%] h-[80%] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute left-0 bottom-0 w-[30%] h-[60%] rounded-full bg-secondary/8 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-center">
          {/* Left: text */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-primary" />
              <span className="text-primary text-xs font-mono uppercase tracking-widest">
                UDream Nomad Playbook
              </span>
            </div>

            <h1 className="font-display text-[#EBE6D9] text-4xl sm:text-5xl font-bold leading-tight mb-4">
              6 Phases to{' '}
              <em className="text-primary not-italic">Freedom</em>
            </h1>

            <p className="text-[#EBE6D9]/60 text-base leading-relaxed max-w-lg mb-6">
              The complete system for becoming a digital nomad — from mindset and income to landing in your first destination and scaling long-term.
            </p>

            {/* Phase pills */}
            <div className="flex flex-wrap gap-2">
              {phases.map((phase) => {
                const Icon = ICON_MAP[phase.iconName] ?? Compass;
                return (
                  <button
                    key={phase.id}
                    onClick={() => onSwitchPhase(phase.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs transition-all duration-200 font-medium
                      ${activePhase === phase.id
                        ? 'border-primary text-primary bg-primary/10'
                        : 'border-white/10 text-white/50 hover:border-primary/50 hover:text-primary/70'
                      }`}
                  >
                    <Icon className="w-3 h-3" />
                    {phase.tabLabel}
                  </button>
                );
              })}
            </div>

            {/* Overall progress bar */}
            <div className="mt-6 max-w-sm">
              <div className="flex justify-between text-xs font-mono mb-1.5">
                <span className="text-white/40 uppercase tracking-wider">Overall Progress</span>
                <span className="text-[#EBE6D9]/70">
                  <span className="text-secondary font-bold">{checkedCount}</span> / {totalTasks} tasks
                </span>
              </div>
              <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPct}%` }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                />
              </div>
            </div>
          </div>

          {/* Right: stats box */}
          <div className="bg-white/5 border border-white/8 rounded-2xl p-6 grid grid-cols-2 gap-5 min-w-[200px]">
            {[
              { value: '6', label: 'Phases' },
              { value: totalTasks.toString(), label: 'Tasks' },
              { value: packingTotal.toString(), label: 'Pack Items' },
              { value: '12', label: 'Tools' },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-display text-[#E8B558] text-3xl font-bold leading-none">{s.value}</p>
                <p className="text-white/40 text-xs mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

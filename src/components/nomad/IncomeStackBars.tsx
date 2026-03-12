'use client';

import { motion } from 'framer-motion';
import { Briefcase, PenLine, Package, TrendingUp, type LucideIcon } from 'lucide-react';
import type { IncomeStream } from './types';

const ICON_MAP: Record<string, LucideIcon> = {
  Briefcase, PenLine, Package, TrendingUp,
};

interface IncomeStackBarsProps {
  streams: IncomeStream[];
}

export default function IncomeStackBars({ streams }: IncomeStackBarsProps) {
  const total = streams.reduce((s, st) => s + st.amount, 0);
  const maxAmount = Math.max(...streams.map((s) => s.maxAmount));

  return (
    <div className="bg-card rounded-2xl border border-border p-5">
      <div className="flex items-center gap-2 pb-3 mb-4 border-b border-border">
        <TrendingUp className="w-4 h-4 text-primary" />
        <h3 className="font-display text-base font-bold">Income Stack Builder</h3>
        <span className="ml-auto text-xs font-mono font-bold text-primary">
          ${total.toLocaleString()}/mo
        </span>
      </div>
      <p className="text-xs text-muted-foreground mb-5">
        The most resilient nomads have 2–3 income streams. Build toward a diversified stack.
      </p>

      <div className="space-y-4">
        {streams.map((stream, i) => {
          const Icon = ICON_MAP[stream.iconName] ?? Briefcase;
          const pct = (stream.amount / maxAmount) * 100;

          return (
            <div
              key={stream.id}
              className={`p-4 rounded-xl border transition-all ${stream.active ? 'bg-background border-border' : 'bg-muted/30 border-dashed border-border opacity-50'}`}
            >
              <div className="flex items-center gap-3 mb-3">
                <Icon className="w-4 h-4 text-primary shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold leading-none truncate">{stream.name}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{stream.type}</p>
                </div>
                <span className="text-sm font-mono font-bold text-amber-600">
                  ${stream.amount.toLocaleString()}/mo
                </span>
              </div>

              {/* Bar */}
              <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-amber-500 to-primary"
                  initial={{ width: 0 }}
                  animate={{ width: `${pct}%` }}
                  transition={{ duration: 0.7, delay: i * 0.1, ease: 'easeOut' }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

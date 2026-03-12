'use client';

import {
  Map, MessageSquare, MapPin, Users, Briefcase, Home, CheckCircle2, ExternalLink, type LucideIcon,
} from 'lucide-react';
import type { NetworkPlatform } from './types';

const ICON_MAP: Record<string, LucideIcon> = {
  Map, MessageSquare, MapPin, Users, Briefcase, Home,
};

interface NetworkCardsProps {
  platforms: NetworkPlatform[];
  connected: Set<string>;
  onToggle: (id: string) => void;
}

export default function NetworkCards({ platforms, connected, onToggle }: NetworkCardsProps) {
  return (
    <div className="bg-card rounded-2xl border border-border p-5">
      <div className="flex items-center gap-2 pb-3 mb-4 border-b border-border">
        <ExternalLink className="w-4 h-4 text-primary" />
        <h3 className="font-display text-base font-bold">Platforms & Networks</h3>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {platforms.map((platform) => {
          const Icon = ICON_MAP[platform.iconName] ?? Map;
          const isConnected = connected.has(platform.id);

          return (
            <button
              key={platform.id}
              onClick={() => onToggle(platform.id)}
              className={`flex flex-col items-center gap-2 p-4 rounded-xl border text-center transition-all duration-200 hover:shadow-sm
                ${isConnected
                  ? 'bg-green-50 border-green-200 text-green-700'
                  : 'bg-background border-border hover:border-primary/30 text-foreground'
                }`}
            >
              <Icon className={`w-5 h-5 ${isConnected ? 'text-green-600' : 'text-primary'}`} />
              <div>
                <p className="text-xs font-semibold leading-none">{platform.name}</p>
                <p className="text-[10px] text-muted-foreground mt-1 leading-snug">{platform.description}</p>
              </div>
              <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold
                ${isConnected ? 'bg-green-100 text-green-700' : 'bg-muted text-muted-foreground'}`}
              >
                {isConnected ? (
                  <><CheckCircle2 className="w-3 h-3" /> Connected</>
                ) : 'Connect'}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

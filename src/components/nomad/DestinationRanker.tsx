'use client';

import { Heart, Wifi, MapPin, DollarSign, Star } from 'lucide-react';
import type { Destination } from './types';

interface DestinationRankerProps {
  destinations: Destination[];
  favorites: Set<string>;
  onToggleFav: (id: string) => void;
}

const INTERNET_BADGE: Record<string, string> = {
  Excellent: 'bg-green-100 text-green-700',
  Fast: 'bg-blue-100 text-blue-700',
  Moderate: 'bg-amber-100 text-amber-700',
};

export default function DestinationRanker({ destinations, favorites, onToggleFav }: DestinationRankerProps) {
  return (
    <div className="bg-card rounded-2xl border border-border p-5">
      <div className="flex items-center gap-2 pb-3 mb-4 border-b border-border">
        <Star className="w-4 h-4 text-primary" />
        <h3 className="font-display text-base font-bold">Destination Ranker</h3>
        <span className="ml-auto text-xs text-muted-foreground">
          Click <Heart className="w-3 h-3 inline" /> to shortlist
        </span>
      </div>

      <div className="space-y-2">
        {destinations.map((dest) => {
          const isFav = favorites.has(dest.id);
          return (
            <div
              key={dest.id}
              className="flex items-center gap-3 bg-background rounded-xl px-4 py-3 border border-border hover:border-primary/30 transition-colors"
            >
              {/* Rank */}
              <span className="text-xs font-mono text-muted-foreground min-w-[1.5rem]">
                #{dest.rank}
              </span>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold leading-none">{dest.city}</p>
                <div className="flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3 h-3 text-muted-foreground" />
                  <p className="text-xs text-muted-foreground">{dest.region}</p>
                </div>
              </div>

              {/* Cost */}
              <div className="hidden sm:flex items-center gap-1 text-xs text-amber-600 font-mono font-bold">
                <DollarSign className="w-3 h-3" />
                {dest.monthlyCost.replace('$', '').replace('/mo', '')}
                <span className="text-muted-foreground font-normal">/mo</span>
              </div>

              {/* Internet */}
              <span className={`hidden md:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${INTERNET_BADGE[dest.internet]}`}>
                <Wifi className="w-3 h-3" />
                {dest.internet}
              </span>

              {/* Score */}
              <span className="bg-muted px-2 py-0.5 rounded text-xs font-mono text-primary font-bold">
                {dest.score}
              </span>

              {/* Favorite */}
              <button
                onClick={() => onToggleFav(dest.id)}
                className={`transition-all duration-200 hover:scale-110 ${isFav ? 'text-rose-500' : 'text-muted-foreground/30 hover:text-rose-400'}`}
                aria-label={isFav ? 'Remove from favorites' : 'Add to favorites'}
              >
                <Heart className={`w-4 h-4 ${isFav ? 'fill-current' : ''}`} />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

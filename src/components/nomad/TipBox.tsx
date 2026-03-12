import { Lightbulb, Trophy, Scale, Info, type LucideIcon } from 'lucide-react';
import type { TipData } from './types';

const ICON_MAP: Record<string, LucideIcon> = {
  Lightbulb, Trophy, Scale, Info,
  Rocket: Info, Backpack: Info,
};

const VARIANT_STYLES = {
  default: 'border-primary/20 border-l-primary bg-primary/5',
  blue: 'border-sky-200 border-l-sky-500 bg-sky-50',
  gold: 'border-amber-200 border-l-amber-500 bg-amber-50',
};

const ICON_STYLES = {
  default: 'text-primary',
  blue: 'text-sky-600',
  gold: 'text-amber-600',
};

interface TipBoxProps {
  tip: TipData;
}

export default function TipBox({ tip }: TipBoxProps) {
  const variant = tip.variant ?? 'default';
  const Icon = ICON_MAP[tip.icon] ?? Lightbulb;

  return (
    <div className={`flex gap-3 items-start px-4 py-4 rounded-r-xl border border-l-4 my-6 ${VARIANT_STYLES[variant]}`}>
      <Icon className={`w-5 h-5 mt-0.5 shrink-0 ${ICON_STYLES[variant]}`} />
      <p
        className="text-sm leading-relaxed text-foreground"
        dangerouslySetInnerHTML={{ __html: tip.content }}
      />
    </div>
  );
}

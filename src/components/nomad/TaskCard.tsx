'use client';

import { CheckCircle2, Zap, Scale, DollarSign, Target, Brain, Users, BookOpen, TrendingUp, Globe, LayoutGrid, Heart, PenLine, Circle } from 'lucide-react';
import type { Task, TaskTag } from './types';

const TAG_CONFIG: Record<TaskTag, { icon: React.ReactNode; label: string; className: string }> = {
  priority: { icon: <Zap className="w-3 h-3" />, label: 'High Priority', className: 'bg-primary/10 text-primary' },
  legal: { icon: <Scale className="w-3 h-3" />, label: 'Legal', className: 'bg-sky-100 text-sky-700' },
  finance: { icon: <DollarSign className="w-3 h-3" />, label: 'Income', className: 'bg-amber-100 text-amber-700' },
  action: { icon: <Target className="w-3 h-3" />, label: 'Action Item', className: 'bg-violet-100 text-violet-700' },
  mindset: { icon: <Brain className="w-3 h-3" />, label: 'Mindset', className: 'bg-muted text-muted-foreground' },
  social: { icon: <Users className="w-3 h-3" />, label: 'Social', className: 'bg-muted text-muted-foreground' },
  research: { icon: <BookOpen className="w-3 h-3" />, label: 'Research', className: 'bg-muted text-muted-foreground' },
  growth: { icon: <TrendingUp className="w-3 h-3" />, label: 'Growth', className: 'bg-muted text-muted-foreground' },
  community: { icon: <Globe className="w-3 h-3" />, label: 'Community', className: 'bg-muted text-muted-foreground' },
  planning: { icon: <LayoutGrid className="w-3 h-3" />, label: 'Planning', className: 'bg-muted text-muted-foreground' },
  wellbeing: { icon: <Heart className="w-3 h-3" />, label: 'Wellbeing', className: 'bg-rose-100 text-rose-600' },
  reflection: { icon: <Circle className="w-3 h-3" />, label: 'Reflection', className: 'bg-muted text-muted-foreground' },
  content: { icon: <PenLine className="w-3 h-3" />, label: 'Content', className: 'bg-muted text-muted-foreground' },
  default: { icon: null, label: '', className: 'bg-muted text-muted-foreground' },
};

interface TaskCardProps {
  task: Task;
  checked: boolean;
  onToggle: (id: string) => void;
}

export default function TaskCard({ task, checked, onToggle }: TaskCardProps) {
  const tagCfg = task.tag ? TAG_CONFIG[task.tag] : null;
  const tagLabel = task.tagLabel ?? tagCfg?.label;

  return (
    <div
      onClick={() => onToggle(task.id)}
      className={`flex gap-3 items-start p-4 rounded-xl border cursor-pointer transition-all duration-200 select-none
        ${checked
          ? 'bg-green-50 border-green-200/70'
          : 'bg-card border-border hover:border-primary/30 hover:shadow-sm'
        }`}
    >
      {/* Checkbox */}
      <div className={`mt-0.5 w-6 h-6 min-w-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 shrink-0
        ${checked ? 'bg-green-500 border-green-500' : 'border-border bg-background'}`}
      >
        {checked && <CheckCircle2 className="w-4 h-4 text-white fill-white" />}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <p className={`text-sm font-medium leading-snug mb-1 transition-colors ${checked ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
          {task.text}
        </p>
        {task.detail && (
          <p className={`text-xs leading-relaxed transition-colors ${checked ? 'text-muted-foreground/60' : 'text-muted-foreground'}`}>
            {task.detail}
          </p>
        )}
        {tagLabel && tagCfg && (
          <span className={`inline-flex items-center gap-1 mt-2 px-2 py-0.5 rounded-full text-xs font-medium ${tagCfg.className}`}>
            {tagCfg.icon}
            {tagLabel}
          </span>
        )}
      </div>
    </div>
  );
}

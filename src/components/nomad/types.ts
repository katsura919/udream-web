export type TaskTag = 'priority' | 'legal' | 'finance' | 'action' | 'mindset' | 'social' | 'research' | 'growth' | 'community' | 'planning' | 'wellbeing' | 'reflection' | 'content' | 'default';

export interface Task {
  id: string;
  text: string;
  detail?: string;
  tag?: TaskTag;
  tagLabel?: string;
}

export interface PhaseSection {
  id: string;
  title: string;
  icon: string; // lucide icon name
  tasks: Task[];
}

export interface TipData {
  variant?: 'default' | 'blue' | 'gold';
  icon: string; // lucide icon name
  content: string; // HTML string with <strong> allowed
}

export interface Phase {
  id: string;
  index: number;
  iconName: string; // lucide icon name
  tabLabel: string;
  title: string;
  titleEmphasis?: string; // italic word in title
  taskCount: number;
  itemLabel?: string; // e.g. "items" for packing list
  timing: string;
  description: string;
  sections: PhaseSection[];
  tip?: TipData;
  tool?: 'destination-ranker' | 'runway-calculator' | 'packing-list' | 'expense-tracker' | 'income-stack' | 'network-cards';
}

export interface Destination {
  id: string;
  rank: number;
  city: string;
  region: string;
  country: string;
  monthlyCost: string;
  internet: 'Fast' | 'Excellent' | 'Moderate';
  visaDays: string;
  score: number;
}

export interface PackingCategory {
  id: string;
  title: string;
  iconName: string;
  items: { id: string; label: string }[];
}

export interface ExpenseEntry {
  id: string;
  description: string;
  amount: number;
  category: string;
}

export interface IncomeStream {
  id: string;
  name: string;
  type: string;
  iconName: string;
  amount: number;
  maxAmount: number;
  active: boolean;
}

export interface NetworkPlatform {
  id: string;
  name: string;
  description: string;
  iconName: string;
}

export interface InspirationQuote {
  text: string;
  author: string;
}

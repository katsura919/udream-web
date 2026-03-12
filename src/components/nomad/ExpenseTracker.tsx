'use client';

import { useState } from 'react';
import { Plus, Trash2, Receipt } from 'lucide-react';
import type { ExpenseEntry } from './types';

const CATEGORIES = [
  { value: 'housing', label: 'Housing', color: 'bg-blue-400' },
  { value: 'food', label: 'Food', color: 'bg-orange-400' },
  { value: 'transport', label: 'Transport', color: 'bg-yellow-400' },
  { value: 'work', label: 'Work', color: 'bg-purple-400' },
  { value: 'health', label: 'Health', color: 'bg-green-400' },
  { value: 'fun', label: 'Fun', color: 'bg-pink-400' },
  { value: 'other', label: 'Other', color: 'bg-gray-400' },
];

interface ExpenseTrackerProps {
  expenses: ExpenseEntry[];
  onAdd: (entry: Omit<ExpenseEntry, 'id'>) => void;
  onDelete: (id: string) => void;
}

export default function ExpenseTracker({ expenses, onAdd, onDelete }: ExpenseTrackerProps) {
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('housing');
  const [amount, setAmount] = useState('');

  const handleAdd = () => {
    if (!description.trim() || !amount || Number(amount) <= 0) return;
    onAdd({ description: description.trim(), category, amount: Number(amount) });
    setDescription('');
    setAmount('');
  };

  const total = expenses.reduce((s, e) => s + e.amount, 0);
  const dailyAvg = expenses.length > 0 ? total / 30 : 0;
  const projected = dailyAvg * 30;

  const getCatColor = (val: string) => CATEGORIES.find((c) => c.value === val)?.color ?? 'bg-gray-400';

  return (
    <div className="bg-card rounded-2xl border border-border p-5">
      <div className="flex items-center gap-2 pb-3 mb-4 border-b border-border">
        <Receipt className="w-4 h-4 text-primary" />
        <h3 className="font-display text-base font-bold">Expense Tracker</h3>
      </div>
      <p className="text-xs text-muted-foreground mb-4">
        Track your first month&apos;s actual spending. Reality-check your pre-departure budget.
      </p>

      {/* Add form */}
      <div className="grid grid-cols-[1fr_auto_auto_auto] gap-2 mb-4 items-end">
        <div>
          <label className="block text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">Item</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
            placeholder="e.g. Co-working day pass"
            className="w-full px-3 py-2 text-sm border border-border rounded-lg bg-background focus:outline-none focus:border-primary transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-3 py-2 text-sm border border-border rounded-lg bg-background focus:outline-none focus:border-primary transition-colors"
          >
            {CATEGORIES.map((c) => (
              <option key={c.value} value={c.value}>{c.label}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">Amount ($)</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
            placeholder="0"
            className="w-24 px-3 py-2 text-sm border border-border rounded-lg bg-background focus:outline-none focus:border-primary transition-colors"
          />
        </div>
        <button
          onClick={handleAdd}
          className="flex items-center gap-1.5 px-4 py-2 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary/90 transition-colors whitespace-nowrap"
        >
          <Plus className="w-4 h-4" />
          Add
        </button>
      </div>

      {/* Expense list */}
      {expenses.length === 0 ? (
        <p className="text-center text-sm text-muted-foreground py-6">
          No expenses logged yet. Add your first one above.
        </p>
      ) : (
        <div className="space-y-1.5 mb-4">
          {expenses.map((exp) => (
            <div key={exp.id} className="flex items-center gap-3 px-3 py-2.5 bg-background rounded-lg border border-border">
              <div className={`w-2 h-2 rounded-full shrink-0 ${getCatColor(exp.category)}`} />
              <span className="flex-1 text-sm truncate">{exp.description}</span>
              <span className="text-sm font-mono font-bold text-primary">${exp.amount.toLocaleString()}</span>
              <button
                onClick={() => onDelete(exp.id)}
                className="text-muted-foreground hover:text-destructive transition-colors"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Summary */}
      {expenses.length > 0 && (
        <div className="grid grid-cols-3 gap-3 bg-muted/40 rounded-xl p-4">
          <div className="text-center">
            <p className="font-display text-xl font-bold">${total.toLocaleString()}</p>
            <p className="text-xs text-muted-foreground mt-0.5">Total Spent</p>
          </div>
          <div className="text-center">
            <p className="font-display text-xl font-bold">${dailyAvg.toFixed(0)}</p>
            <p className="text-xs text-muted-foreground mt-0.5">Daily Average</p>
          </div>
          <div className="text-center">
            <p className="font-display text-xl font-bold">${projected.toLocaleString()}</p>
            <p className="text-xs text-muted-foreground mt-0.5">Projected Monthly</p>
          </div>
        </div>
      )}
    </div>
  );
}

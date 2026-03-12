'use client';

import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import NomadHero from './NomadHero';
import PhaseTabBar from './PhaseTabBar';
import PhasePanel from './PhasePanel';
import PhaseSidebar from './PhaseSidebar';
import {
  PHASES,
  DESTINATIONS,
  PACKING_CATEGORIES,
  INCOME_STREAMS,
  NETWORK_PLATFORMS,
  INSPIRATION_QUOTES,
  TOTAL_TASK_COUNT,
  TOTAL_PACKING_COUNT,
} from './data';
import type { ExpenseEntry } from './types';
import PlaybookGate from './PlaybookGate';

export default function NomadPlaybook() {
  const [unlocked, setUnlocked] = useState(false);
  const [activePhase, setActivePhase] = useState('mindset');
  const [checkedTasks, setCheckedTasks] = useState<Set<string>>(new Set());
  const [packedItems, setPackedItems] = useState<Set<string>>(new Set());
  const [favoritedDests, setFavoritedDests] = useState<Set<string>>(new Set());
  const [expenses, setExpenses] = useState<ExpenseEntry[]>([]);
  const [connectedPlatforms, setConnectedPlatforms] = useState<Set<string>>(new Set());

  // Load persisted state
  useEffect(() => {
    try {
      const savedUser = localStorage.getItem('nomad-playbook-user');
      if (savedUser) setUnlocked(true);
      const savedTasks = localStorage.getItem('nomad-playbook-tasks');
      if (savedTasks) setCheckedTasks(new Set(JSON.parse(savedTasks)));
      const savedPacked = localStorage.getItem('nomad-playbook-packed');
      if (savedPacked) setPackedItems(new Set(JSON.parse(savedPacked)));
    } catch {
      // ignore
    }
  }, []);

  // Persist tasks
  useEffect(() => {
    if (!unlocked) return;
    localStorage.setItem('nomad-playbook-tasks', JSON.stringify([...checkedTasks]));
  }, [checkedTasks, unlocked]);

  // Persist packing
  useEffect(() => {
    if (!unlocked) return;
    localStorage.setItem('nomad-playbook-packed', JSON.stringify([...packedItems]));
  }, [packedItems, unlocked]);

  const handleUnlock = useCallback((name: string, email: string) => {
    localStorage.setItem('nomad-playbook-user', JSON.stringify({ name, email }));
    setUnlocked(true);
  }, []);

  const toggleTask = useCallback((id: string) => {
    setCheckedTasks((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const togglePacked = useCallback((id: string) => {
    setPackedItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const toggleFav = useCallback((id: string) => {
    setFavoritedDests((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const togglePlatform = useCallback((id: string) => {
    setConnectedPlatforms((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const addExpense = useCallback((entry: Omit<ExpenseEntry, 'id'>) => {
    setExpenses((prev) => [...prev, { ...entry, id: crypto.randomUUID() }]);
  }, []);

  const deleteExpense = useCallback((id: string) => {
    setExpenses((prev) => prev.filter((e) => e.id !== id));
  }, []);

  const handleSwitchPhase = (id: string) => {
    setActivePhase(id);
    // Scroll to content area
    setTimeout(() => {
      document.getElementById('phase-content')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  };

  const currentPhase = PHASES.find((p) => p.id === activePhase) ?? PHASES[0];

  if (!unlocked) {
    return <PlaybookGate onUnlock={handleUnlock} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <NomadHero
        phases={PHASES}
        checkedCount={checkedTasks.size}
        totalTasks={TOTAL_TASK_COUNT}
        packingTotal={TOTAL_PACKING_COUNT}
        activePhase={activePhase}
        onSwitchPhase={handleSwitchPhase}
      />

      <PhaseTabBar
        phases={PHASES}
        activePhase={activePhase}
        onSwitch={handleSwitchPhase}
        checkedTasks={checkedTasks}
      />

      <div id="phase-content" className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main content */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <PhasePanel
                key={activePhase}
                phase={currentPhase}
                checkedTasks={checkedTasks}
                onToggleTask={toggleTask}
                packedItems={packedItems}
                onTogglePacked={togglePacked}
                favoritedDests={favoritedDests}
                onToggleFav={toggleFav}
                expenses={expenses}
                onAddExpense={addExpense}
                onDeleteExpense={deleteExpense}
                connectedPlatforms={connectedPlatforms}
                onTogglePlatform={togglePlatform}
                destinations={DESTINATIONS}
                packingCategories={PACKING_CATEGORIES}
                incomeStreams={INCOME_STREAMS}
                networkPlatforms={NETWORK_PLATFORMS}
              />
            </AnimatePresence>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <PhaseSidebar
              phases={PHASES}
              activePhase={activePhase}
              onSwitchPhase={handleSwitchPhase}
              checkedTasks={checkedTasks}
              packedItems={packedItems}
              favoritedDests={favoritedDests}
              connectedPlatforms={connectedPlatforms}
              quotes={INSPIRATION_QUOTES}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

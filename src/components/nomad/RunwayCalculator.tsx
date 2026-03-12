'use client';

import { useState } from 'react';
import { Calculator } from 'lucide-react';

export default function RunwayCalculator() {
  const [savings, setSavings] = useState(5000);
  const [expenses, setExpenses] = useState(1500);
  const [income, setIncome] = useState(4000);
  const [target, setTarget] = useState(3000);

  const monthlySurplus = income - expenses;
  const incomeGap = Math.max(target - income, 0);
  const netBurn = expenses - income;
  const runway = netBurn > 0 ? savings / netBurn : 99;
  const runwayDisplay = runway >= 99 ? '99+' : runway.toFixed(1);

  const runwayColor =
    runway >= 6 ? 'text-green-400' :
    runway >= 3 ? 'text-amber-400' :
    'text-red-400';

  return (
    <div className="bg-[#2E261E] rounded-2xl p-6 text-[#EBE6D9]">
      <div className="flex items-center gap-2 mb-5">
        <Calculator className="w-4 h-4 text-[#E8B558]" />
        <h3 className="font-display text-base font-bold text-[#E8B558]">
          Runway Calculator
        </h3>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-5">
        {[
          { label: 'MONTHLY SAVINGS ($)', value: savings, onChange: setSavings },
          { label: 'MONTHLY EXPENSES AT DESTINATION ($)', value: expenses, onChange: setExpenses },
          { label: 'CURRENT MONTHLY INCOME ($)', value: income, onChange: setIncome },
          { label: 'TARGET FREELANCE INCOME ($)', value: target, onChange: setTarget },
        ].map(({ label, value, onChange }) => (
          <div key={label}>
            <label className="block text-[10px] font-mono text-white/40 uppercase tracking-widest mb-1.5">
              {label}
            </label>
            <input
              type="number"
              value={value}
              onChange={(e) => onChange(Number(e.target.value) || 0)}
              className="w-full bg-white/7 border border-white/10 rounded-lg px-3 py-2 text-sm text-[#EBE6D9] outline-none focus:border-[#E8B558] transition-colors"
            />
          </div>
        ))}
      </div>

      <div className="border-t border-white/10 pt-4 grid grid-cols-3 gap-4 text-center">
        <div>
          <p className={`font-display text-2xl font-bold ${runwayColor}`}>{runwayDisplay}</p>
          <p className="text-xs text-white/40 mt-1">Months of runway</p>
        </div>
        <div>
          <p className={`font-display text-2xl font-bold ${monthlySurplus >= 0 ? 'text-green-400' : 'text-red-400'}`}>
            {monthlySurplus >= 0 ? '+' : ''}{monthlySurplus >= 0
              ? `$${monthlySurplus.toLocaleString()}`
              : `-$${Math.abs(monthlySurplus).toLocaleString()}`}
          </p>
          <p className="text-xs text-white/40 mt-1">Monthly surplus</p>
        </div>
        <div>
          <p className={`font-display text-2xl font-bold ${incomeGap > 0 ? 'text-red-400' : 'text-green-400'}`}>
            {incomeGap > 0 ? `$${incomeGap.toLocaleString()}` : 'On track'}
          </p>
          <p className="text-xs text-white/40 mt-1">Income gap</p>
        </div>
      </div>
    </div>
  );
}

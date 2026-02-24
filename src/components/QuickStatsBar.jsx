// src/components/QuickStatsBar.jsx
import React from 'react';

const QuickStatsBar = () => {
  return (
    <div className="bg-slate-900/30 border-y border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div className="group cursor-default">
          <h4 className="text-4xl font-black text-white group-hover:text-blue-500 transition-colors">50+</h4>
          <p className="text-slate-500 text-sm font-medium uppercase tracking-widest mt-1">Franchises</p>
        </div>
        <div className="group cursor-default">
          <h4 className="text-4xl font-black text-white group-hover:text-emerald-500 transition-colors">10k+</h4>
          <p className="text-slate-500 text-sm font-medium uppercase tracking-widest mt-1">Students</p>
        </div>
        <div className="group cursor-default">
          <h4 className="text-4xl font-black text-white group-hover:text-orange-500 transition-colors">15 Days</h4>
          <p className="text-slate-500 text-sm font-medium uppercase tracking-widest mt-1">Setup Time</p>
        </div>
        <div className="group cursor-default">
          <h4 className="text-4xl font-black text-white group-hover:text-purple-500 transition-colors">98%</h4>
          <p className="text-slate-500 text-sm font-medium uppercase tracking-widest mt-1">Retention</p>
        </div>
      </div>
    </div>
  );
};

export default QuickStatsBar;
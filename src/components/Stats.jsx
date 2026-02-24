// src/components/Stats.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, Target, Award } from 'lucide-react';

const Stats = () => {
  const stats = [
    { icon: <MapPin className="text-blue-500" />, value: "50+", label: "Cities Covered", description: "Rapidly expanding across India" },
    { icon: <Users className="text-emerald-500" />, value: "10,000+", label: "Students Impacted", description: "Transforming young minds daily" },
    { icon: <Target className="text-orange-500" />, value: "15 Days", label: "Fastest Setup", description: "Quickest launch in the industry" },
    { icon: <Award className="text-purple-500" />, value: "98%", label: "Retention Rate", description: "Franchisee satisfaction & success" },
  ];

  return (
    <section className="py-20 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-32 bg-blue-600/10 blur-[120px] -z-10" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-3xl bg-slate-900/40 border border-white/5 backdrop-blur-sm hover:border-blue-500/30 transition-colors group"
            >
              <div className="mb-4 p-3 bg-slate-800/50 w-fit rounded-2xl group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <motion.h3 className="text-4xl font-extrabold text-white mb-1 tracking-tight" initial={{ scale: 0.5 }} whileInView={{ scale: 1 }} transition={{ type: "spring", stiffness: 100 }}>
                {stat.value}
              </motion.h3>
              <div className="text-blue-400 font-bold text-sm uppercase tracking-wider mb-2">{stat.label}</div>
              <p className="text-slate-500 text-sm leading-relaxed">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
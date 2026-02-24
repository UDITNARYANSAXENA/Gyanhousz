// src/components/SupportProvided.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Globe, Palette, Cpu, TrendingUp, Award } from 'lucide-react';

const SupportProvided = () => {
  const supports = [
    {
      title: "Comprehensive Training",
      desc: "2-week intensive program covering curriculum, teaching methodology, business operations, technology, staff recruitment. Ongoing skill development.",
      icon: <Users className="text-blue-500" />
    },
    {
      title: "Marketing Support",
      desc: "Pre-launch campaigns, social media content, local advertising, parent engagement, community events.",
      icon: <Globe className="text-emerald-500" />
    },
    {
      title: "Curriculum Development",
      desc: "Age-appropriate updates, teaching materials, assessments, parent templates, activity resources.",
      icon: <Palette className="text-orange-500" />
    },
    {
      title: "Technology Platform",
      desc: "Student management, parent app, billing software, tracking tools, analytics dashboard.",
      icon: <Cpu className="text-purple-500" />
    },
    {
      title: "Business Development",
      desc: "Monthly reviews, optimization strategies, revenue programs, expansion planning, best practices network.",
      icon: <TrendingUp className="text-yellow-500" />
    },
    {
      title: "Operational Support",
      desc: "Dedicated manager, 24/7 helpdesk, site visits, audits, quality assurance, crisis management.",
      icon: <Award className="text-indigo-500" />
    }
  ];

  return (
    <section id="support" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-white mb-16 text-center leading-tight"
        >
          Comprehensive <span className="text-blue-500">Support System</span> for Your Success
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {supports.map((support, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all"
            >
              <div className="mb-4 p-3 bg-slate-800/50 w-fit rounded-2xl">
                {support.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{support.title}</h3>
              <p className="text-slate-400">{support.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center text-slate-400">
          <p>
            96% Training Satisfaction | {'<2 hr'} Response Time | 85% Franchisee Referrals | 98% Retention Rate
          </p>
        </div>
      </div>
    </section>
  );
};

export default SupportProvided;
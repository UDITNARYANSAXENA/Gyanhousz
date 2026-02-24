// src/components/SuccessStories.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const SuccessStories = () => {
  const stories = [
    {
      name: "Rajesh Kumar",
      location: "Mumbai, Since 2022",
      revenue: "₹21 Lakhs/Month",
      students: "180+",
      testimonial: "GYANHOUZ transformed my entrepreneurial journey. The multi-revenue model and comprehensive support made achieving profitability faster than expected.",
      achievements: ["Break-even in 16 months", "95% Parent Satisfaction", "Expanded to second location"]
    },
    {
      name: "Priya Sharma",
      location: "Bangalore, Since 2021",
      revenue: "₹24 Lakhs/Month",
      students: "220+",
      testimonial: "As a former educator, I wanted to create real impact. GYANHOUZ's integrated approach resonated with my vision. Today, I'm not just running a business—I'm leading an education revolution in my city.",
      achievements: ["First to hit ₹25L monthly", "Won Regional Excellence Award", "Mentoring 3 new franchisees"]
    },
    {
      name: "Amit Patel",
      location: "Ahmedabad, Since 2023",
      revenue: "₹15 Lakhs/Month",
      students: "130+",
      testimonial: "Starting a GYANHOUZ franchise was the best decision of my life. The training, marketing support, and proven systems made the launch smooth.",
      achievements: ["Fastest growing", "Strong partnerships", "Featured in media"]
    }
  ];

  return (
    <section id="success-stories" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-white mb-16 text-center leading-tight"
        >
          Real Success Stories from Our <span className="text-blue-500">Franchise Partners</span>
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-2xl font-bold mr-4">
                  {story.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-white font-bold">{story.name}</h3>
                  <p className="text-slate-400 text-sm">{story.location}</p>
                </div>
              </div>
              <p className="text-slate-300 mb-6 italic">"{story.testimonial}"</p>
              <div className="space-y-2">
                <p className="text-emerald-400 font-bold">{story.revenue} | {story.students} Students</p>
                {story.achievements.map((ach, i) => (
                  <div key={i} className="flex items-center text-slate-400 text-sm">
                    <Star className="w-4 h-4 text-yellow-400 mr-2" /> {ach}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
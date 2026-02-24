import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Microscope, Cpu, Briefcase, Palette, Globe, Star } from 'lucide-react';

const revenueStreams = [
  {
    title: "Preschool Programs",
    earning: "₹40-50 Lakhs/Year",
    age: "1.5 - 6 Years",
    desc: "Core revenue from early childhood education using unique practical methodologies.",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&q=80&w=600",
    icon: <Users className="w-5 h-5" />,
    color: "from-pink-500 to-rose-500"
  },
  {
    title: "Science Labs",
    earning: "₹18-36 Lakhs/Year",
    age: "7 - 14 Years",
    desc: "Project-based learning replacing theoretical study with hands-on experimentation.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=600",
    icon: <Microscope className="w-5 h-5" />,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Career Labs",
    earning: "₹10-12 Lakhs/Year",
    age: "10 - 16 Years",
    desc: "Career discovery and personality development guidance for senior students.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600",
    icon: <Briefcase className="w-5 h-5" />,
    color: "from-emerald-500 to-teal-500"
  },
  {
    title: "Electronics & Robotics",
    earning: "₹12-15 Lakhs/Year",
    age: "8 - 15 Years",
    desc: "STEM education focused on future-ready skills like coding and AI hardware.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600",
    icon: <Cpu className="w-5 h-5" />,
    color: "from-violet-500 to-purple-500"
  },
  {
    title: "Skill Development",
    earning: "₹12-24 Lakhs/Year",
    age: "10 - 15 Years",
    desc: "Comprehensive courses for holistic child development and creative arts.",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=600",
    icon: <Palette className="w-5 h-5" />,
    color: "from-orange-500 to-amber-500"
  },
  {
    title: "Business Collaborations",
    earning: "₹12-36 Lakhs/Year",
    age: "B2B / Schools",
    desc: "B2B partnerships with other schools to deliver Gyanhouz specialized programs.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600",
    icon: <Globe className="w-5 h-5" />,
    color: "from-indigo-500 to-blue-600"
  },
  {
    title: "Community Events",
    earning: "₹6-12 Lakhs/Year",
    age: "All Ages",
    desc: "Revenue from workshops, national competitions, and local educational events.",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=600",
    icon: <Star className="w-5 h-5" />,
    color: "from-yellow-500 to-orange-400"
  }
];

const RevenueCards = () => {
  return (
    <section id="revenue" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
            >
              7+ Income Sources, <br />
              <span className="text-blue-500">One Ecosystem.</span>
            </motion.h2>
            <p className="text-slate-400 text-lg">
              Unlike traditional single-revenue models, Gyanhouz provides year-round profitability through diversified streams.
            </p>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl">
            <div className="flex items-center gap-3 text-white font-bold">
              <TrendingUp className="text-emerald-500" />
              <span>Potential: ₹1.2 Cr / Year</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {revenueStreams.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-[2.5rem] bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r ${item.color} shadow-lg`}>
                    {item.icon} {item.age}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                <div className="flex items-center gap-2 mb-4 text-emerald-400 font-mono text-sm font-bold">
                  <TrendingUp size={16} />
                  {item.earning}
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {item.desc}
                </p>
                <button className="w-full py-3 rounded-xl bg-slate-800 text-white text-sm font-bold group-hover:bg-blue-600 transition-colors duration-300">
                  Explore Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RevenueCards;
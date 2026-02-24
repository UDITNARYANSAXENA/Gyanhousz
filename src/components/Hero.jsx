// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, PlayCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-40 pb-20 bg-slate-950 overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full" />
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <span className="bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest border border-blue-500/20">
            India's First Integrated Learning Franchise
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mt-8 mb-6 leading-[1.1]">
            Transform Education, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Build Wealth.</span>
          </h1>
          <p className="text-slate-400 text-lg mb-10 max-w-lg leading-relaxed">
            Join India's only integrated 2-16 age learning ecosystem with 7+ revenue streams, fastest 15-day setup, and proven ROI in 12-18 months. Impact 10,000+ students while tapping into a ₹1.5 Lakh Cr market.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold flex items-center group transition-all">
              Start Your Journey <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold flex items-center border border-slate-800 hover:bg-slate-800 transition-all">
              <PlayCircle className="mr-2" /> Watch Success Stories
            </button>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} className="relative">
          <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full" />
          <img
            src="https://img.rocket.new/generatedImages/rocket_gen_img_169e6338a-1763296707579.png"
            alt="Education Ecosystem"
            className="relative rounded-3xl border border-white/10 shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
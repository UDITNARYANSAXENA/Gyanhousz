import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, PhoneCall } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-blue-600 to-indigo-900 p-12 md:p-20 shadow-2xl shadow-blue-500/20"
        >
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                Be the Hero of Your <span className="text-blue-200">City's Future.</span>
              </h2>
              <p className="text-blue-100 text-lg mb-10 leading-relaxed max-w-md">
                Join 50+ successful entrepreneurs. Setup your GYANHOUZ franchise in just 15 days and start generating multiple revenue streams.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <button className="flex items-center justify-center bg-white text-blue-700 px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-xl hover:scale-105 transition-all group">
                  Apply for Franchise <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="flex flex-col justify-center">
                  <div className="flex items-center text-blue-100 font-medium">
                    <PhoneCall size={18} className="mr-2" /> +91 92720 99011
                  </div>
                  <div className="flex items-center text-blue-200 text-sm">
                    <Mail size={16} className="mr-2" /> info@gyanhouz.com
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block relative">
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl"
              >
                <div className="space-y-6">
                  {[
                    "Proven ROI in 12-18 Months",
                    "Full Marketing & Training Support",
                    "No Experience Required"
                  ].map((text, i) => (
                    <div key={i} className="flex items-center text-white font-semibold">
                      <div className="w-8 h-8 rounded-full bg-emerald-400/20 text-emerald-400 flex items-center justify-center mr-4">✓</div>
                      {text}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
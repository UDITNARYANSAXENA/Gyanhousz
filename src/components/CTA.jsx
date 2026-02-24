// src/components/CTA.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PhoneCall, Mail, MapPin } from 'lucide-react';

const CTA = () => {
  const phone = "+919272099011";
  const franchiseEmail = "franchise@gyanhouz.com";

  return (
    <section className="py-20 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-blue-600 to-indigo-900 p-12 md:p-20 shadow-2xl shadow-blue-500/20"
        >
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                Be the Hero of Your <span className="text-blue-200">City's Future.</span>
              </h2>
              <p className="text-blue-100 text-lg mb-10 leading-relaxed max-w-md">
                Join 50+ successful entrepreneurs in India's ₹1.5 Lakh Cr education market. Setup your GYANHOUZ franchise in just 15 days and generate ₹1-1.2 Cr yearly with 7+ revenue streams.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 mb-8">
                <button className="flex items-center justify-center bg-white text-blue-700 px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-xl hover:scale-105 transition-all group">
                  Apply for Franchise <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href={`tel:${phone}`}
                  className="flex items-center justify-center bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-600 transition-all group"
                >
                  <PhoneCall className="mr-2" size={20} /> Call Now
                </a>
              </div>

              <div className="space-y-3 text-blue-100">
                <div className="flex items-center">
                  <PhoneCall size={18} className="mr-3" />
                  <a href={`tel:${phone}`} className="hover:underline">+91 92720 99011</a>
                </div>
                <div className="flex items-center">
                  <Mail size={18} className="mr-3" />
                  <a href={`mailto:${franchiseEmail}?subject=Franchise%20Enquiry`} className="hover:underline">
                    franchise@gyanhouz.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail size={18} className="mr-3" />
                  <a href="mailto:info@gyanhouz.com" className="hover:underline">info@gyanhouz.com</a>
                </div>
                <div className="flex items-start text-sm">
                  <MapPin size={18} className="mr-3 mt-1" />
                  Behind Choudhari Park Petrol Pump,<br />Behind Premji Mithai Wala, Wakad, Pune
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
                    "No Experience Required",
                    "98% Retention Rate"
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
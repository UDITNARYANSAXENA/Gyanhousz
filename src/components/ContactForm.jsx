// src/components/ContactForm.jsx
import React from 'react';

const ContactForm = () => {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-gradient-to-br from-blue-600 to-indigo-900 rounded-[3rem] p-12 md:p-16 relative overflow-hidden">
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Build Your Legacy?</h2>
              <p className="text-blue-100 mb-8">
                Schedule a free consultation with our franchise experts today. Get started with our 15-day setup and tap into ₹1-1.2 Cr potential.
              </p>
              <div className="space-y-4">
                <div className="flex items-center text-white font-medium">
                  <div className="w-6 h-6 bg-white/20 rounded-full mr-3 flex items-center justify-center text-xs">✓</div>
                  Fastest Setup (15 Days)
                </div>
                <div className="flex items-center text-white font-medium">
                  <div className="w-6 h-6 bg-white/20 rounded-full mr-3 flex items-center justify-center text-xs">✓</div>
                  End-to-End Marketing Support
                </div>
                <div className="flex items-center text-white font-medium">
                  <div className="w-6 h-6 bg-white/20 rounded-full mr-3 flex items-center justify-center text-xs">✓</div>
                  Proven ROI in 12-18 Months
                </div>
              </div>
            </div>
            <form className="bg-white p-8 rounded-3xl shadow-2xl space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-5 py-3 rounded-xl bg-slate-100 border-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-5 py-3 rounded-xl bg-slate-100 border-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-5 py-3 rounded-xl bg-slate-100 border-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <button className="w-full bg-slate-950 text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition-all">
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
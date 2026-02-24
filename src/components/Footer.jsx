import React from 'react';
import { Twitter, Linkedin, Facebook, Instagram, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand Info */}
          <div className="col-span-1 lg:col-span-1">
            <div className="text-2xl font-black text-white mb-6">
              GYAN<span className="text-blue-500">HOUZ</span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-8">
              India's first integrated learning ecosystem transforming education for kids aged 2–16.
            </p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Facebook, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Our Programs</h4>
            <ul className="space-y-4 text-slate-400">
              {['Preschool', 'Science Labs', 'Career Labs', 'Robotics', 'Skill Hub'].map((item) => (
                <li key={item}><a href="#" className="hover:text-blue-400 transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Business Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Franchise</h4>
            <ul className="space-y-4 text-slate-400">
              {['Success Stories', 'Investment Plan', 'Setup Process', 'Support System', 'FAQs'].map((item) => (
                <li key={item}><a href="#" className="hover:text-blue-400 transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-6">Join the Movement</h4>
            <p className="text-slate-400 text-sm mb-6">Stay updated with the latest in education innovation.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-slate-900 border border-slate-800 rounded-xl py-4 px-5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-blue-600 text-white px-4 rounded-lg hover:bg-blue-500 transition-colors">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm text-center">
            © 2026 GYANHOUZ Learning Hub. Developed for the Future.
          </p>
          <div className="flex gap-8 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
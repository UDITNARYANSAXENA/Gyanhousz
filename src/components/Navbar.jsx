import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 top-0 bg-slate-950/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-2xl font-black text-white tracking-tighter">
          GYAN<span className="text-blue-500">HOUZ</span>
        </motion.div>
        
        <div className="hidden md:flex space-x-10 text-sm font-medium text-slate-300">
          {['Programs', 'Revenue', 'Success Stories', 'Support'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-blue-400 transition-colors">{item}</a>
          ))}
        </div>

        <button className="hidden md:block bg-blue-600 hover:bg-blue-500 text-white px-7 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg shadow-blue-500/25">
          Apply Now
        </button>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
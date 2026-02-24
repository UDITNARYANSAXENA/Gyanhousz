import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ChevronRight, PlayCircle, TrendingUp, Users, MapPin, Target, Award,
  ArrowRight, Mail, PhoneCall, Menu, X, Twitter, Linkedin, Facebook, Instagram,
  Send, Globe, Palette, Briefcase, Cpu, Microscope, Star, MessageCircle
} from 'lucide-react';

// Navbar
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
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-blue-400 transition-colors">
              {item}
            </a>
          ))}
        </div>

        <a
          href="https://gyanhouz.com/contact-and-admissions"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block bg-blue-600 hover:bg-blue-500 text-white px-7 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg shadow-blue-500/25 text-center"
        >
          Apply Now
        </a>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
};

// Hero
const Hero = () => {
  return (
    <section className="relative pt-40 pb-20 bg-slate-950 overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full" />
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
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

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative"
        >
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

// Stats
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
              <motion.h3
                className="text-4xl font-extrabold text-white mb-1 tracking-tight"
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                {stat.value}
              </motion.h3>
              <div className="text-blue-400 font-bold text-sm uppercase tracking-wider mb-2">
                {stat.label}
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// RevenueCards (kept as-is, only minor formatting)
const RevenueCards = () => {
  const revenueStreams = [
    { title: "Preschool Programs", earning: "₹40-50 Lakhs/Year", age: "1.5 - 6 Years", desc: "Core revenue from early childhood education using unique practical methodologies. Monthly: ₹3-4 Lakhs; Growth: Very High.", image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&q=80&w=600", icon: <Users className="w-5 h-5" />, color: "from-pink-500 to-rose-500" },
    { title: "Science Lab", earning: "₹18-36 Lakhs/Year", age: "7 - 14 Years", desc: "Project-based learning replacing theoretical study with hands-on experimentation. Monthly: ₹1.5-3 Lakhs; Growth: Very High.", image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=600", icon: <Microscope className="w-5 h-5" />, color: "from-blue-500 to-cyan-500" },
    { title: "Science Lab Programs", earning: "₹12-24 Lakhs/Year", age: "7 - 14 Years", desc: "Hands-on practical science programs for enhanced learning. Monthly: ₹1-2 Lakhs; Growth: High.", image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=600", icon: <Microscope className="w-5 h-5" />, color: "from-blue-500 to-cyan-500" },
    { title: "Career Labs", earning: "₹10-12 Lakhs/Year", age: "10 - 16 Years", desc: "Career discovery and personality development guidance for senior students. Monthly: ₹1 Lakh; Growth: Very High.", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600", icon: <Briefcase className="w-5 h-5" />, color: "from-emerald-500 to-teal-500" },
    { title: "Electronics & Robotics", earning: "₹12-15 Lakhs/Year", age: "8 - 15 Years", desc: "STEM education focused on future-ready skills like coding and AI hardware. Monthly: ₹1-1.5 Lakhs; Growth: Very High.", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600", icon: <Cpu className="w-5 h-5" />, color: "from-violet-500 to-purple-500" },
    { title: "Skills Development", earning: "₹12-24 Lakhs/Year", age: "10 - 15 Years", desc: "Comprehensive courses for holistic child development and creative arts. Monthly: ₹1-2 Lakhs; Growth: Medium.", image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=600", icon: <Palette className="w-5 h-5" />, color: "from-orange-500 to-amber-500" },
    { title: "Business Collaborations", earning: "₹12-36 Lakhs/Year", age: "B2B / Schools", desc: "B2B partnerships with other schools to deliver Gyanhouz specialized programs. Monthly: ₹1-3 Lakhs; Growth: High.", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600", icon: <Globe className="w-5 h-5" />, color: "from-indigo-500 to-blue-600" },
    { title: "Community Events", earning: "₹6-12 Lakhs/Year", age: "All Ages", desc: "Revenue from workshops, national competitions, and local educational events. Monthly: ₹50K-1 Lakh; Growth: Medium.", image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=600", icon: <Star className="w-5 h-5" />, color: "from-yellow-500 to-orange-400" },
  ];

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
              Diversified revenue streams for year-round profitability. Total potential: ₹1-1.2 Crore/Year. Average monthly: ₹18.5 Lakhs with 175+ students.
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

              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                <div className="flex items-center gap-2 mb-4 text-emerald-400 font-mono text-sm font-bold">
                  <TrendingUp size={16} />
                  {item.earning}
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{item.desc}</p>
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

// SuccessStories (kept as-is)
const SuccessStories = () => {
  const stories = [
    {
      name: "Rajesh Kumar", location: "Mumbai, Since 2022", revenue: "₹21 Lakhs/Month", students: "180+",
      testimonial: "GYANHOUZ transformed my entrepreneurial journey. The multi-revenue model and comprehensive support made achieving profitability faster than expected.",
      achievements: ["Break-even in 16 months", "95% Parent Satisfaction", "Expanded to second location"]
    },
    {
      name: "Priya Sharma", location: "Bangalore, Since 2021", revenue: "₹24 Lakhs/Month", students: "220+",
      testimonial: "As a former educator, I wanted to create real impact. GYANHOUZ's integrated approach resonated with my vision. Today, I'm not just running a business—I'm leading an education revolution in my city.",
      achievements: ["First to hit ₹25L monthly", "Won Regional Excellence Award", "Mentoring 3 new franchisees"]
    },
    {
      name: "Amit Patel", location: "Ahmedabad, Since 2023", revenue: "₹15 Lakhs/Month", students: "130+",
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

// SupportProvided (fixed the <2 hr parsing issue)
const SupportProvided = () => {
  const supports = [
    { title: "Comprehensive Training", desc: "2-week intensive program covering curriculum, teaching methodology, business operations, technology, staff recruitment. Ongoing skill development.", icon: <Users className="text-blue-500" /> },
    { title: "Marketing Support", desc: "Pre-launch campaigns, social media content, local advertising, parent engagement, community events.", icon: <Globe className="text-emerald-500" /> },
    { title: "Curriculum Development", desc: "Age-appropriate updates, teaching materials, assessments, parent templates, activity resources.", icon: <Palette className="text-orange-500" /> },
    { title: "Technology Platform", desc: "Student management, parent app, billing software, tracking tools, analytics dashboard.", icon: <Cpu className="text-purple-500" /> },
    { title: "Business Development", desc: "Monthly reviews, optimization strategies, revenue programs, expansion planning, best practices network.", icon: <TrendingUp className="text-yellow-500" /> },
    { title: "Operational Support", desc: "Dedicated manager, 24/7 helpdesk, site visits, audits, quality assurance, crisis management.", icon: <Award className="text-indigo-500" /> },
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
              <div className="mb-4 p-3 bg-slate-800/50 w-fit rounded-2xl">{support.icon}</div>
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

// ContactForm
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
              <input type="text" placeholder="Full Name" className="w-full px-5 py-3 rounded-xl bg-slate-100 border-none focus:ring-2 focus:ring-blue-500 transition-all" />
              <input type="email" placeholder="Email Address" className="w-full px-5 py-3 rounded-xl bg-slate-100 border-none focus:ring-2 focus:ring-blue-500 transition-all" />
              <input type="tel" placeholder="Phone Number" className="w-full px-5 py-3 rounded-xl bg-slate-100 border-none focus:ring-2 focus:ring-blue-500 transition-all" />
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

// Enhanced CTA
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
                  <PhoneCall className="mr-2" size={20} /> Call Now: +91 92720 99011
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
                    {franchiseEmail}
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

// Enhanced Footer
const Footer = () => {
  const phone = "+919272099011";
  const franchiseEmail = "franchise@gyanhouz.com";

  return (
    <footer className="bg-slate-950 pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <div className="text-2xl font-black text-white mb-6">
              GYAN<span className="text-blue-500">HOUZ</span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6">
              India's first integrated learning ecosystem transforming education for kids aged 1.5–16.
            </p>
            <div className="space-y-3 text-slate-300 text-sm mb-6">
              <div className="flex items-center">
                <PhoneCall size={16} className="mr-2" />
                <a href={`tel:${phone}`} className="hover:text-blue-400">+91 92720 99011</a>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-2" />
                <a href={`mailto:${franchiseEmail}`} className="hover:text-blue-400">{franchiseEmail}</a>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-2" />
                <a href="mailto:info@gyanhouz.com" className="hover:text-blue-400">info@gyanhouz.com</a>
              </div>
              <div className="flex items-start">
                <MapPin size={16} className="mr-2 mt-1" />
                Behind Choudhari Park Petrol Pump,<br />Behind Premji Mithai Wala, Wakad, Pune
              </div>
            </div>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Facebook, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Our Programs</h4>
            <ul className="space-y-4 text-slate-400">
              {['Preschool', 'Science Labs', 'Career Labs', 'Robotics', 'Skill Hub'].map((item) => (
                <li key={item}><a href="#" className="hover:text-blue-400 transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Franchise</h4>
            <ul className="space-y-4 text-slate-400">
              {['Success Stories', 'Investment Plan', 'Setup Process', 'Support System', 'FAQs'].map((item) => (
                <li key={item}><a href="#" className="hover:text-blue-400 transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

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

// Floating contact buttons
const FloatingContacts = () => {
  const phone = "+919272099011";

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      <a
        href={`tel:${phone}`}
        className="bg-green-600 hover:bg-green-500 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110"
        aria-label="Call Now"
      >
        <PhoneCall size={28} />
      </a>

      <a
        href={`mailto:franchise@gyanhouz.com?subject=Franchise%20Enquiry`}
        className="bg-blue-600 hover:bg-blue-500 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110"
        aria-label="Email Franchise Team"
      >
        <Mail size={28} />
      </a>
    </div>
  );
};

// Main App
function App() {
  return (
    <main className="bg-slate-950 min-h-screen selection:bg-blue-500/30 font-sans relative">
      <Navbar />
      <Hero />
      <Stats />

      <div className="bg-slate-900/30 border-y border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="group cursor-default">
            <h4 className="text-4xl font-black text-white group-hover:text-blue-500 transition-colors">50+</h4>
            <p className="text-slate-500 text-sm font-medium uppercase tracking-widest mt-1">Franchises</p>
          </div>
          <div className="group cursor-default">
            <h4 className="text-4xl font-black text-white group-hover:text-emerald-500 transition-colors">10k+</h4>
            <p className="text-slate-500 text-sm font-medium uppercase tracking-widest mt-1">Students</p>
          </div>
          <div className="group cursor-default">
            <h4 className="text-4xl font-black text-white group-hover:text-orange-500 transition-colors">15 Days</h4>
            <p className="text-slate-500 text-sm font-medium uppercase tracking-widest mt-1">Setup Time</p>
          </div>
          <div className="group cursor-default">
            <h4 className="text-4xl font-black text-white group-hover:text-purple-500 transition-colors">98%</h4>
            <p className="text-slate-500 text-sm font-medium uppercase tracking-widest mt-1">Retention</p>
          </div>
        </div>
      </div>

      <RevenueCards />
      <SuccessStories />
      <SupportProvided />
      <ContactForm />
      <CTA />
      <Footer />

      <FloatingContacts />
    </main>
  );
}

export default App;
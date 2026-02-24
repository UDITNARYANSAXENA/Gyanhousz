// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import QuickStatsBar from './components/QuickStatsBar';
import RevenueCards from './components/RevenueCards';
import SuccessStories from './components/SuccessStories';
import SupportProvided from './components/SupportProvided';
import ContactForm from './components/ContactForm';
import CTA from './components/CTA';
import Footer from './components/Footer';
import FloatingContacts from './components/FloatingContacts';

function App() {
  return (
    <main className="bg-slate-950 min-h-screen selection:bg-blue-500/30 font-sans relative">
      <Navbar />
      <Hero />
      <Stats />
      <QuickStatsBar />
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
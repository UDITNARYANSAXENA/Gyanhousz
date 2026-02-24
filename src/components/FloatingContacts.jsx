// src/components/FloatingContacts.jsx
import React from 'react';
import { PhoneCall, Mail } from 'lucide-react';

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

export default FloatingContacts;
// src/pages/FAQ.js

import React from 'react';
import PageHeader from '../components/ui/PageHeader';

const faqs = [
  { q: 'Where is Sneha Deepa Hospital located?', a: '123 Health St, Sneha Deepa City.' },
  { q: 'What services do you offer?', a: 'Cardiology, Neurology, Pediatrics, and more.' },
  { q: 'Do I need an appointment?', a: 'Walk-ins are welcome, but appointments are preferred.' },
  { q: 'What are your visiting hours?', a: 'Visitors are welcome from 9 AM to 7 PM daily.' },
  { q: 'Do you accept insurance?', a: 'Yes, we accept most major insurance providers.' },
  { q: 'How can I book an appointment?', a: 'You can book appointments via phone, online portal, or in person.' },
  { q: 'Is emergency care available?', a: 'Yes, our emergency department is open 24/7.' },
  { q: 'How can I get my medical records?', a: 'You can request medical records through our patient portal or by visiting our medical records department.' },
];

const FAQ = () => (
  <section className="bg-white py-8">
    <PageHeader
      title="Frequently Asked Questions"
      description="Find answers to common questions about our services, policies, and procedures."
    />

    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-blue-50 p-6 rounded shadow hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-blue-800">{faq.q}</h3>
            <p className="text-gray-700 mt-2">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FAQ;

import React from 'react';

const FAQ = () => (
  <div className="p-6 max-w-7xl mx-auto">
    <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
    <dl className="space-y-4">
      <div>
        <dt className="font-semibold">What are your visiting hours?</dt>
        <dd className="ml-4">Visitors are welcome from 9 AM to 7 PM daily.</dd>
      </div>
      <div>
        <dt className="font-semibold">How can I book an appointment?</dt>
        <dd className="ml-4">You can book appointments via phone, online portal, or in person.</dd>
      </div>
      <div>
        <dt className="font-semibold">Do you accept insurance?</dt>
        <dd className="ml-4">Yes, we accept most major insurance providers.</dd>
      </div>
    </dl>
  </div>
);

export default FAQ;

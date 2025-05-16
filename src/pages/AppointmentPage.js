// src/pages/AppointmentPage.js

import React from 'react';
import AppointmentForm from '../components/AppointmentForm';
import PageHeader from '../components/ui/PageHeader';

const AppointmentPage = () => {
  return (
    <div className="bg-gray-50" style={{ overflowAnchor: 'none' }}>
      <PageHeader
        title="Book Your Appointment"
        description="Schedule an appointment with our experienced doctors at Sneha Deepa Hospital. We provide quality healthcare services with a personal touch."
      />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <AppointmentForm />
      </div>
    </div>
  );
};

export default AppointmentPage;

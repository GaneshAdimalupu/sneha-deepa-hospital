// src/pages/DoctorsPage.js

import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PageHeader from '../components/ui/PageHeader';

// Import the existing doctor data from your components/Doctors.js file
// This is your existing doctors array
const doctors = [
  {
    id: 1,
    name: 'Dr. Anil Kumar',
    specialty: 'Cardiologist',
    photo: '/images/doctors/doctor1.jpeg',
    bio: 'Experienced heart specialist committed to compassionate cardiac care.',
    education: 'MD in Cardiology, All India Institute of Medical Sciences',
    experience: '15+ years of experience in cardiac care',
    languages: ['English', 'Hindi', 'Malayalam'],
    email: 'anil.kumar@snehadeepahospital.com',
    phone: '+1 (555) 123-4567',
  },
  {
    id: 2,
    name: 'Dr. Priya Sharma',
    specialty: 'Neurologist',
    photo: '/images/doctors/doctor2.jpeg',
    bio: 'Expert in neurological disorders with a focus on patient-centered treatment.',
    education: 'MD in Neurology, Christian Medical College',
    experience: '12+ years of experience in neurology',
    languages: ['English', 'Hindi', 'Tamil'],
    email: 'priya.sharma@snehadeepahospital.com',
    phone: '+1 (555) 123-4568',
  },
  {
    id: 3,
    name: 'Dr. Rajesh Menon',
    specialty: 'Pediatrician',
    photo: '/images/doctors/doctor3.jpeg',
    bio: "Dedicated pediatrician passionate about children's health and wellness.",
    education: 'MD in Pediatrics, Kerala University of Health Sciences',
    experience: '10+ years of experience in pediatric care',
    languages: ['English', 'Malayalam', 'Tamil'],
    email: 'rajesh.menon@snehadeepahospital.com',
    phone: '+1 (555) 123-4569',
  },
  {
    id: 4,
    name: 'Dr. Meera Nair',
    specialty: 'Orthopedic Surgeon',
    photo: '/images/doctors/doctor4.jpeg',
    bio: 'Specialist in musculoskeletal conditions with advanced surgical expertise.',
    education: 'MS in Orthopedics, Jawaharlal Institute of Postgraduate Medical Education & Research',
    experience: '14+ years of experience in orthopedic surgery',
    languages: ['English', 'Malayalam', 'Hindi'],
    email: 'meera.nair@snehadeepahospital.com',
    phone: '+1 (555) 123-4570',
  },
];

const DoctorsPage = () => {
  const [filter, setFilter] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  // Filter doctors by specialty
  const filteredDoctors = filter
    ? doctors.filter(doctor => doctor.specialty.toLowerCase().includes(filter.toLowerCase()))
    : doctors;

  const specialties = [...new Set(doctors.map(doctor => doctor.specialty))];

  // Open doctor details
  const openDoctorDetails = (doctor) => {
    setSelectedDoctor(doctor);
  };

  // Close doctor details
  const closeDoctorDetails = () => {
    setSelectedDoctor(null);
  };

  return (
    <div className="bg-gray-50">
      <PageHeader
        title="Our Doctors"
        description="Meet our team of experienced and compassionate medical professionals dedicated to providing the highest quality of care for our patients."
      />

      {/* Specialty Filter */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center mb-10 gap-2">
          <button
            onClick={() => setFilter('')}
            className={`px-4 py-2 rounded-md transition ${filter === ''
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            All Specialties
          </button>

          {specialties.map((specialty, index) => (
            <button
              key={index}
              onClick={() => setFilter(specialty)}
              className={`px-4 py-2 rounded-md transition ${filter === specialty
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              {specialty}
            </button>
          ))}
        </div>

        {/* Doctors Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredDoctors.map((doctor) => (
            <div key={doctor.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={doctor.photo}
                  alt={doctor.name}
                  className="w-full h-64 object-cover object-center"
                />
              </div>

              <div className="p-6">
                <h2 className="text-xl font-semibold text-blue-700">{doctor.name}</h2>
                <p className="text-blue-600 font-medium mb-2">{doctor.specialty}</p>
                <p className="text-gray-600 mb-4">{doctor.bio}</p>

                <div className="space-y-2 text-gray-600 mb-4">
                  <p><span className="font-medium">Education:</span> {doctor.education}</p>
                  <p><span className="font-medium">Experience:</span> {doctor.experience}</p>
                  <p><span className="font-medium">Languages:</span> {doctor.languages.join(', ')}</p>
                </div>

                <div className="flex items-center space-x-4 text-gray-600 mb-4">
                  <div className="flex items-center">
                    <FaPhone className="mr-2 text-blue-600" />
                    <span>{doctor.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <FaEnvelope className="mr-2 text-blue-600" />
                    <span>{doctor.email}</span>
                  </div>
                </div>

                <div className="flex space-x-2 pt-4 border-t border-gray-100">
                  <button
                    onClick={() => openDoctorDetails(doctor)}
                    className="flex-1 bg-gray-200 text-gray-700 py-2 rounded hover:bg-gray-300 transition"
                  >
                    View Profile
                  </button>
                  <Link
                    to="/appointment"
                    className="flex items-center justify-center gap-2 flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                  >
                    <FaCalendarAlt /> Book Appointment
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredDoctors.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-600">No doctors found with the selected specialty.</p>
            <button
              onClick={() => setFilter('')}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Show All Doctors
            </button>
          </div>
        )}
      </div>

      {/* Doctor Details Modal */}
      {selectedDoctor && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={closeDoctorDetails}
        >
          <div
            className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the modal
          >
            <div className="flex md:flex-row flex-col">
              <div className="md:w-1/3">
                <img
                  src={selectedDoctor.photo}
                  alt={selectedDoctor.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="md:w-2/3 p-6">
                <h2 className="text-2xl font-bold text-blue-700">{selectedDoctor.name}</h2>
                <p className="text-blue-600 font-medium mb-4">{selectedDoctor.specialty}</p>

                <div className="space-y-4 mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">About</h3>
                    <p className="text-gray-600">{selectedDoctor.bio}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Education</h3>
                    <p className="text-gray-600">{selectedDoctor.education}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Experience</h3>
                    <p className="text-gray-600">{selectedDoctor.experience}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Languages</h3>
                    <p className="text-gray-600">{selectedDoctor.languages.join(', ')}</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 text-gray-600 mb-6">
                  <div className="flex items-center">
                    <FaPhone className="mr-2 text-blue-600" />
                    <span>{selectedDoctor.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <FaEnvelope className="mr-2 text-blue-600" />
                    <span>{selectedDoctor.email}</span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={closeDoctorDetails}
                    className="flex-1 bg-gray-200 text-gray-700 py-2 px-4 rounded hover:bg-gray-300 transition"
                  >
                    Close
                  </button>
                  <Link
                    to="/appointment"
                    className="flex items-center justify-center gap-2 flex-1 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
                  >
                    <FaCalendarAlt /> Book Appointment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorsPage;

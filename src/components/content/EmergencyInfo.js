import React from 'react';
import { FaAmbulance, FaPhone, FaMapMarkerAlt, FaExclamationTriangle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const EmergencyInfo = () => {
  return (
    <section className="bg-red-600 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center mb-8">
          <FaExclamationTriangle className="text-yellow-300 text-3xl mr-3" />
          <h2 className="text-3xl font-bold">Emergency Services</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Emergency Contact */}
          <div className="bg-red-700 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-red-500 rounded-full mr-4">
                <FaPhone className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-semibold">24/7 Emergency Hotline</h3>
            </div>
            <p className="mb-4">Our emergency services are available 24 hours a day, 7 days a week. Call immediately for urgent medical assistance.</p>
            <a
              href="tel:+15559110000"
              className="bg-white text-red-600 font-bold py-3 px-4 rounded inline-flex items-center hover:bg-gray-100 transition"
            >
              <FaPhone className="mr-2" />
              +1 (555) 911-0000
            </a>
          </div>

          {/* Ambulance Services */}
          <div className="bg-red-700 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-red-500 rounded-full mr-4">
                <FaAmbulance className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-semibold">Ambulance Services</h3>
            </div>
            <p className="mb-4">Our fleet of advanced life support ambulances is ready to respond quickly to emergencies and provide critical care during transport.</p>
            <a
              href="tel:+15559110000"
              className="bg-white text-red-600 font-bold py-3 px-4 rounded inline-flex items-center hover:bg-gray-100 transition"
            >
              <FaAmbulance className="mr-2" />
              Request Ambulance
            </a>
          </div>

          {/* Emergency Department */}
          <div className="bg-red-700 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-red-500 rounded-full mr-4">
                <FaMapMarkerAlt className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-semibold">Emergency Department</h3>
            </div>
            <p className="mb-4">Our emergency department is equipped with the latest technology and staffed by experienced emergency medicine specialists.</p>
            <Link
              to="/contact"
              className="bg-white text-red-600 font-bold py-3 px-4 rounded inline-flex items-center hover:bg-gray-100 transition"
            >
              <FaMapMarkerAlt className="mr-2" />
              Get Directions
            </Link>
          </div>
        </div>

        <div className="mt-10 bg-red-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">When to Seek Emergency Care</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="h-2 w-2 bg-yellow-300 rounded-full mr-2"></span>
                Chest pain or difficulty breathing
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-yellow-300 rounded-full mr-2"></span>
                Severe abdominal pain
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-yellow-300 rounded-full mr-2"></span>
                Sudden loss of consciousness
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-yellow-300 rounded-full mr-2"></span>
                Severe burns or injuries
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="h-2 w-2 bg-yellow-300 rounded-full mr-2"></span>
                Sudden severe headache
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-yellow-300 rounded-full mr-2"></span>
                Poisoning or overdose
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-yellow-300 rounded-full mr-2"></span>
                Uncontrollable bleeding
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-yellow-300 rounded-full mr-2"></span>
                Stroke symptoms (face drooping, arm weakness, speech difficulty)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyInfo;

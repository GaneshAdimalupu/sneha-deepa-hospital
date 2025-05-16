import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaArrowRight } from 'react-icons/fa';

const NotFound = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h1 className="text-8xl font-bold text-blue-700 mb-6">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
        <p className="text-gray-600 text-lg mb-8">
          The page you are looking for might have been removed, had its name changed,
          or is temporarily unavailable.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/"
            className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
          >
            <FaHome /> Back to Home
          </Link>
          <Link
            to="/contact"
            className="flex items-center justify-center gap-2 bg-gray-200 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-300 transition"
          >
            Contact Us <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;

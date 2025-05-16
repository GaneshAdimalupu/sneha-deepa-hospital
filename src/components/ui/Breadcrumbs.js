// src/components/ui/Breadcrumbs.js

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaChevronRight } from 'react-icons/fa';

const Breadcrumbs = () => {
  const location = useLocation();

  // Skip rendering breadcrumbs on the homepage
  if (location.pathname === '/') {
    return null;
  }

  // Create breadcrumb segments
  const pathSegments = location.pathname.split('/').filter(segment => segment);

  // Map paths to display names
  const getDisplayName = (path) => {
    const displayMap = {
      'gallery': 'Gallery',
      'faq': 'FAQ',
      'appointment': 'Book Appointment',
      'doctors': 'Our Doctors',
      // Add more mappings as needed
    };

    return displayMap[path] || path.charAt(0).toUpperCase() + path.slice(1);
  };

  return (
    <div className="bg-gray-100 py-3 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex text-sm">
          <Link to="/" className="text-blue-600 hover:text-blue-800 flex items-center">
            <FaHome className="mr-1" />
            <span>Home</span>
          </Link>

          {pathSegments.map((segment, index) => {
            // Build the accumulated path
            const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
            const isLast = index === pathSegments.length - 1;

            return (
              <React.Fragment key={path}>
                <span className="mx-2 text-gray-500">
                  <FaChevronRight size={10} />
                </span>
                {isLast ? (
                  <span className="text-gray-700 font-medium">{getDisplayName(segment)}</span>
                ) : (
                  <Link to={path} className="text-blue-600 hover:text-blue-800">
                    {getDisplayName(segment)}
                  </Link>
                )}
              </React.Fragment>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumbs;

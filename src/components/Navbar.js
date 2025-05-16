import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaPhoneAlt, FaCalendarAlt, FaBars, FaTimes } from 'react-icons/fa';
import SearchOverlay from './content/SearchOverlay';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-blue-800 text-white py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center">
              <FaPhoneAlt className="mr-2 text-blue-300" size={14} />
              <span>Emergency: +1 (555) 911-0000</span>
            </div>
            <div className="hidden lg:flex items-center">
              <FaCalendarAlt className="mr-2 text-blue-300" size={14} />
              <span>Mon-Fri: 8:00-20:00, Sat: 8:00-17:00</span>
            </div>
          </div>
          <div className="flex items-center space-x-4 text-sm">
            <Link to="/patient-portal" className="hover:text-blue-200 transition">Patient Portal</Link>
            <Link to="/careers" className="hover:text-blue-200 transition">Careers</Link>
            <Link to="/pay-bill" className="hover:text-blue-200 transition">Pay Bill</Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className={`bg-white shadow-md sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Logo and Title - Enhanced Version */}
          <div className="flex items-center space-x-3">
            <Link to="/" className="flex items-center space-x-3">
              <div className="relative">
                <img
                  src="/images/MTC.png"
                  alt="Sneha Deepa Hospital Logo"
                  className={`object-contain transition-all duration-300 ${isScrolled ? 'h-10 w-10' : 'h-12 w-12'}`}
                />
                {/* Subtle pulsing effect around the logo */}
                <div className="absolute -inset-1 bg-blue-100 rounded-full opacity-0 animate-pulse"></div>
              </div>
              <div className="flex flex-col">
                <span className={`font-bold text-blue-700 transition-all duration-300 ${isScrolled ? 'text-lg sm:text-xl' : 'text-xl sm:text-2xl'}`}>
                  Sneha Deepa
                </span>
                <span className={`font-medium text-blue-500 transition-all duration-300 ${isScrolled ? 'text-xs sm:text-sm' : 'text-sm sm:text-base'}`}>
                  Hospital
                </span>
                {/* Tagline that hides when scrolled */}
                <span className={`text-gray-500 font-light transition-all duration-300 ${isScrolled ? 'hidden' : 'text-xs'}`}>
                  Compassionate Care, Always
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-1 lg:space-x-6 text-gray-700 font-medium">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md transition ${isActive('/') && !isActive('/gallery') && !isActive('/faq') && !isActive('/doctors') && !isActive('/appointment') ? 'text-blue-700 font-semibold' : 'hover:text-blue-600'}`}
            >
              Home
            </Link>
            <a href="/#about" className="px-3 py-2 rounded-md hover:text-blue-600 transition">
              About
            </a>
            <a href="/#departments" className="px-3 py-2 rounded-md hover:text-blue-600 transition">
              Departments
            </a>
            <Link
              to="/doctors"
              className={`px-3 py-2 rounded-md transition ${isActive('/doctors') ? 'text-blue-700 font-semibold' : 'hover:text-blue-600'}`}
            >
              Doctors
            </Link>
            <Link
              to="/gallery"
              className={`px-3 py-2 rounded-md transition ${isActive('/gallery') ? 'text-blue-700 font-semibold' : 'hover:text-blue-600'}`}
            >
              Gallery
            </Link>
            <Link
              to="/faq"
              className={`px-3 py-2 rounded-md transition ${isActive('/faq') ? 'text-blue-700 font-semibold' : 'hover:text-blue-600'}`}
            >
              FAQ
            </Link>
            <a href="/#contact" className="px-3 py-2 rounded-md hover:text-blue-600 transition">
              Contact
            </a>
            <Link
              to="/appointment"
              className={`px-3 py-2 rounded-md transition ${isActive('/appointment') ? 'text-blue-700 font-semibold' : 'hover:text-blue-600'}`}
            >
              Appointment
            </Link>
          </nav>

          {/* Desktop Search and Appointment Button */}
          <div className="hidden md:flex items-center space-x-2">
            {/* Replace the old search button with the SearchOverlay component */}
            <SearchOverlay />
            <Link
              to="/appointment"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition font-medium"
            >
              Appointment
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            {/* Replace the old search button with the SearchOverlay component */}
            <SearchOverlay />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-700 focus:outline-none"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="px-4 py-2 bg-gray-50 border-t border-gray-200">
            <ul className="flex flex-col space-y-1">
              <li>
                <Link
                  to="/"
                  className={`block py-2 px-3 rounded ${isActive('/') && !isActive('/gallery') && !isActive('/faq') && !isActive('/doctors') && !isActive('/appointment') ? 'bg-blue-50 text-blue-700 font-semibold' : 'hover:bg-blue-50'}`}
                >
                  Home
                </Link>
              </li>
              <li>
                <a href="/#about" className="block py-2 px-3 rounded hover:bg-blue-50">
                  About
                </a>
              </li>
              <li>
                <a href="/#departments" className="block py-2 px-3 rounded hover:bg-blue-50">
                  Departments
                </a>
              </li>
              <li>
                <Link
                  to="/doctors"
                  className={`block py-2 px-3 rounded ${isActive('/doctors') ? 'bg-blue-50 text-blue-700 font-semibold' : 'hover:bg-blue-50'}`}
                >
                  Doctors
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className={`block py-2 px-3 rounded ${isActive('/gallery') ? 'bg-blue-50 text-blue-700 font-semibold' : 'hover:bg-blue-50'}`}
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className={`block py-2 px-3 rounded ${isActive('/faq') ? 'bg-blue-50 text-blue-700 font-semibold' : 'hover:bg-blue-50'}`}
                >
                  FAQ
                </Link>
              </li>
              <li>
                <a href="/#contact" className="block py-2 px-3 rounded hover:bg-blue-50">
                  Contact
                </a>
              </li>
              <li>
                <Link
                  to="/appointment"
                  className={`block py-2 px-3 rounded font-semibold text-white bg-blue-600 hover:bg-blue-700 transition`}
                >
                  Appointment
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;

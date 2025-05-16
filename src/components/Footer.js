import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-white">
      {/* Newsletter Signup in Footer */}
      <div className="bg-blue-800 py-8">
        <div className="max-w-7xl mx-auto px-4 md:flex items-center justify-between">
          <div className="mb-4 md:mb-0 md:w-1/2">
            <h3 className="text-xl font-semibold mb-2">Subscribe to Our Newsletter</h3>
            <p className="text-gray-300">Stay updated with our latest health tips and hospital news</p>
          </div>
          <form className="flex flex-col sm:flex-row gap-2 md:w-1/2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md text-gray-800 flex-grow"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 transition px-6 py-2 rounded-md font-medium"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-8">
        {/* Column 1: About */}
        <div>
          <div className="flex items-center mb-4">
            <img src="/images/MTC.png" alt="Sneha Deepa Hospital Logo" className="h-10 mr-3" />
            <span className="text-xl font-semibold">Sneha Deepa Hospital</span>
          </div>
          <p className="text-gray-300 mb-4">
            Dedicated to providing compassionate care and excellence in healthcare services since 1995.
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="https://facebook.com" className="text-gray-300 hover:text-white transition" aria-label="Facebook">
              <FaFacebook size={20} />
            </a>
            <a href="https://twitter.com" className="text-gray-300 hover:text-white transition" aria-label="Twitter">
              <FaTwitter size={20} />
            </a>
            <a href="https://instagram.com" className="text-gray-300 hover:text-white transition" aria-label="Instagram">
              <FaInstagram size={20} />
            </a>
            <a href="https://linkedin.com" className="text-gray-300 hover:text-white transition" aria-label="LinkedIn">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-blue-700 pb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="text-gray-300 hover:text-white transition">Home</Link></li>
            <li><Link to="/#about" className="text-gray-300 hover:text-white transition">About Us</Link></li>
            <li><Link to="/#departments" className="text-gray-300 hover:text-white transition">Departments</Link></li>
            <li><Link to="/#doctors" className="text-gray-300 hover:text-white transition">Our Doctors</Link></li>
            <li><Link to="/gallery" className="text-gray-300 hover:text-white transition">Gallery</Link></li>
            <li><Link to="/faq" className="text-gray-300 hover:text-white transition">FAQ</Link></li>
            <li><Link to="/#contact" className="text-gray-300 hover:text-white transition">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-blue-700 pb-2">Our Services</h3>
          <ul className="space-y-2">
            <li><a href="/#departments" className="text-gray-300 hover:text-white transition">Cardiology</a></li>
            <li><a href="/#departments" className="text-gray-300 hover:text-white transition">Neurology</a></li>
            <li><a href="/#departments" className="text-gray-300 hover:text-white transition">Pediatrics</a></li>
            <li><a href="/#departments" className="text-gray-300 hover:text-white transition">Orthopedics</a></li>
            <li><a href="/#departments" className="text-gray-300 hover:text-white transition">Ophthalmology</a></li>
            <li><a href="/#departments" className="text-gray-300 hover:text-white transition">Emergency Care</a></li>
            <li><a href="/#departments" className="text-gray-300 hover:text-white transition">Laboratory Services</a></li>
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-blue-700 pb-2">Contact Us</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <FaMapMarkerAlt className="text-blue-400 mr-3 mt-1 flex-shrink-0" />
              <span>123 Health St, Sneha Deepa City, State 12345</span>
            </li>
            <li className="flex items-center">
              <FaPhoneAlt className="text-blue-400 mr-3 flex-shrink-0" />
              <span>Emergency: +1 (555) 911-0000</span>
            </li>
            <li className="flex items-center">
              <FaPhoneAlt className="text-blue-400 mr-3 flex-shrink-0" />
              <span>Appointments: +1 (555) 123-4567</span>
            </li>
            <li className="flex items-center">
              <FaEnvelope className="text-blue-400 mr-3 flex-shrink-0" />
              <span>info@snehadeepahospital.com</span>
            </li>
          </ul>

          {/* Hours */}
          <div className="mt-4">
            <h4 className="font-medium mb-2">Hours of Operation:</h4>
            <p className="text-gray-300">Monday - Friday: 8:00 AM - 8:00 PM</p>
            <p className="text-gray-300">Saturday: 8:00 AM - 5:00 PM</p>
            <p className="text-gray-300">Sunday: 10:00 AM - 4:00 PM</p>
            <p className="text-blue-400 font-medium mt-1">Emergency: 24/7</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-blue-950 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
          <div className="mb-2 sm:mb-0">
            © {currentYear} Sneha Deepa Hospital. All rights reserved.
          </div>
          <div className="flex space-x-4">
            {/* Fixed href attributes to have actual URLs */}
            <Link to="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white transition">Terms of Service</Link>
            <Link to="/sitemap" className="hover:text-white transition">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

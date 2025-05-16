import React, { useState, useEffect, useRef } from 'react';
import { FaSearch, FaTimes, FaUserMd, FaClinicMedical, FaQuestion, FaCalendarAlt } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';

const SearchOverlay = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const searchInputRef = useRef(null);
  const navigate = useNavigate();

  // Mock search data - in a real app, this would come from an API
  const searchData = {
    doctors: [
      { id: 1, name: 'Dr. Anil Kumar', specialty: 'Cardiologist', path: '/doctors' },
      { id: 2, name: 'Dr. Priya Sharma', specialty: 'Neurologist', path: '/doctors' },
      { id: 3, name: 'Dr. Rajesh Menon', specialty: 'Pediatrician', path: '/doctors' },
      { id: 4, name: 'Dr. Meera Nair', specialty: 'Orthopedic Surgeon', path: '/doctors' },
    ],
    departments: [
      { id: 1, name: 'Cardiology', path: '/#departments' },
      { id: 2, name: 'Neurology', path: '/#departments' },
      { id: 3, name: 'Pediatrics', path: '/#departments' },
      { id: 4, name: 'Orthopedics', path: '/#departments' },
      { id: 5, name: 'Ophthalmology', path: '/#departments' },
    ],
    faqs: [
      { id: 1, question: 'What are your visiting hours?', path: '/faq' },
      { id: 2, question: 'How can I book an appointment?', path: '/faq' },
      { id: 3, question: 'Do you accept insurance?', path: '/faq' },
    ],
    services: [
      { id: 1, name: 'Emergency Care', path: '/#departments' },
      { id: 2, name: 'Laboratory Services', path: '/#departments' },
      { id: 3, name: 'Health Checkup Packages', path: '/#departments' },
    ]
  };

  // Toggle search overlay
  const toggleSearch = () => {
    setIsOpen(!isOpen);
    setSearchQuery('');
    setSearchResults([]);
  };

  // Close search overlay when clicking outside
  const handleOutsideClick = (e) => {
    if (isOpen && e.target.classList.contains('overlay-bg')) {
      toggleSearch();
    }
  };

  // Handle key press events
  const handleKeyDown = (e) => {
    // Close on escape key
    if (e.key === 'Escape') {
      toggleSearch();
    }
  };

  // Focus input when overlay opens
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  // Handle search input change
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.length < 2) {
      setSearchResults([]);
      return;
    }

    // Simple search implementation
    const results = [];

    // Search doctors
    const filteredDoctors = searchData.doctors.filter(
      doctor => doctor.name.toLowerCase().includes(query.toLowerCase()) ||
                doctor.specialty.toLowerCase().includes(query.toLowerCase())
    );

    if (filteredDoctors.length > 0) {
      results.push({
        category: 'Doctors',
        icon: FaUserMd,
        items: filteredDoctors
      });
    }

    // Search departments
    const filteredDepartments = searchData.departments.filter(
      dept => dept.name.toLowerCase().includes(query.toLowerCase())
    );

    if (filteredDepartments.length > 0) {
      results.push({
        category: 'Departments',
        icon: FaClinicMedical,
        items: filteredDepartments
      });
    }

    // Search FAQs
    const filteredFaqs = searchData.faqs.filter(
      faq => faq.question.toLowerCase().includes(query.toLowerCase())
    );

    if (filteredFaqs.length > 0) {
      results.push({
        category: 'FAQs',
        icon: FaQuestion,
        items: filteredFaqs.map(faq => ({
          id: faq.id,
          name: faq.question,
          path: faq.path
        }))
      });
    }

    // Search services
    const filteredServices = searchData.services.filter(
      service => service.name.toLowerCase().includes(query.toLowerCase())
    );

    if (filteredServices.length > 0) {
      results.push({
        category: 'Services',
        icon: FaCalendarAlt,
        items: filteredServices
      });
    }

    setSearchResults(results);
  };

  // Handle search result click
  const handleResultClick = (path) => {
    toggleSearch();
    navigate(path);
  };

  return (
    <>
      {/* Search button */}
      <button
        onClick={toggleSearch}
        className="p-2 text-gray-600 hover:text-blue-600 transition"
        aria-label="Search"
      >
        <FaSearch size={18} />
      </button>

      {/* Search overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20 overlay-bg"
          onClick={handleOutsideClick}
          onKeyDown={handleKeyDown}
        >
          <div className="bg-white w-full max-w-3xl mx-4 rounded-lg shadow-xl overflow-hidden">
            {/* Search header */}
            <div className="p-4 border-b flex items-center">
              <FaSearch className="text-gray-400 mr-3" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search for doctors, departments, services..."
                className="flex-grow outline-none text-lg"
                autoComplete="off"
              />
              <button onClick={toggleSearch} className="text-gray-400 hover:text-gray-600 transition">
                <FaTimes size={20} />
              </button>
            </div>

            {/* Search results */}
            <div className="max-h-[70vh] overflow-y-auto">
              {searchQuery.length < 2 ? (
                <div className="p-8 text-center text-gray-500">
                  <p>Start typing to search for doctors, departments, or services</p>
                </div>
              ) : searchResults.length === 0 ? (
                <div className="p-8 text-center text-gray-500">
                  <p>No results found for "{searchQuery}"</p>
                  <p className="mt-2 text-sm">Try using different keywords or check for typos</p>
                </div>
              ) : (
                <div className="p-4">
                  {searchResults.map((resultGroup, groupIndex) => (
                    <div key={groupIndex} className="mb-6">
                      <h3 className="text-gray-500 text-sm font-medium mb-2 flex items-center">
                        <resultGroup.icon className="mr-2" />
                        {resultGroup.category}
                      </h3>
                      <ul className="space-y-1">
                        {resultGroup.items.map((item) => (
                          <li key={item.id}>
                            <button
                              onClick={() => handleResultClick(item.path)}
                              className="w-full text-left px-3 py-2 rounded hover:bg-blue-50 flex items-center text-gray-800"
                            >
                              <span className="font-medium">{item.name}</span>
                              {item.specialty && (
                                <span className="ml-2 text-sm text-gray-500">({item.specialty})</span>
                              )}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  <div className="mt-4 pt-4 border-t text-center">
                    <Link
                      to={`/search?q=${encodeURIComponent(searchQuery)}`}
                      onClick={toggleSearch}
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      View all results for "{searchQuery}"
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Quick links */}
            {searchQuery.length < 2 && (
              <div className="p-4 border-t">
                <h3 className="text-gray-500 text-sm font-medium mb-2">Quick Links</h3>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => handleResultClick('/appointment')}
                    className="px-3 py-1 rounded bg-gray-100 text-gray-700 hover:bg-gray-200 text-sm"
                  >
                    Book Appointment
                  </button>
                  <button
                    onClick={() => handleResultClick('/doctors')}
                    className="px-3 py-1 rounded bg-gray-100 text-gray-700 hover:bg-gray-200 text-sm"
                  >
                    Find a Doctor
                  </button>
                  <button
                    onClick={() => handleResultClick('/#departments')}
                    className="px-3 py-1 rounded bg-gray-100 text-gray-700 hover:bg-gray-200 text-sm"
                  >
                    Departments
                  </button>
                  <button
                    onClick={() => handleResultClick('/faq')}
                    className="px-3 py-1 rounded bg-gray-100 text-gray-700 hover:bg-gray-200 text-sm"
                  >
                    FAQ
                  </button>
                  <button
                    onClick={() => handleResultClick('/#contact')}
                    className="px-3 py-1 rounded bg-gray-100 text-gray-700 hover:bg-gray-200 text-sm"
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default SearchOverlay;

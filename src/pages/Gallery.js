// src/pages/Gallery.js

import React, { useState } from 'react';
import PageHeader from '../components/ui/PageHeader';

const galleryItems = [
  { src: '/images/gallery/anniversary.jpeg', title: 'Anniversary Celebration', description: 'Celebrating years of service to the community.' },
  { src: '/images/gallery/awareness-program.jpeg', title: 'Awareness Program', description: 'Health awareness and education for the public.' },
  { src: '/images/gallery/blood-donation.jpeg', title: 'Blood Donation Camp', description: 'Volunteers donating blood for those in need.' },
  { src: '/images/gallery/doctor-patient.jpeg', title: 'Patient Interaction', description: 'Doctors consulting with patients.' },
  { src: '/images/gallery/doctors-meeting.jpeg', title: 'Doctors Meeting', description: 'Regular discussion of cases and medical strategies.' },
  { src: '/images/gallery/health-camp.jpeg', title: 'Health Camp', description: 'Free medical checkup camp for the community.' },
  { src: '/images/gallery/hospital-exterior.jpeg', title: 'Hospital Exterior', description: 'View of the hospital building.' },
  { src: '/images/gallery/lab.jpeg', title: 'Laboratory', description: 'Advanced diagnostic lab facilities.' },
  { src: '/images/gallery/mri.jpeg', title: 'MRI Scan Facility', description: 'State-of-the-art MRI scanning equipment.' },
  { src: '/images/gallery/nurses.jpeg', title: 'Nursing Staff', description: 'Our dedicated team of nurses.' },
  { src: '/images/gallery/operation-theatre.jpeg', title: 'Operation Theatre', description: 'Modern and sterile surgical environment.' },
  { src: '/images/gallery/reception.jpeg', title: 'Reception Area', description: 'Welcoming patients with a smile.' },
  { src: '/images/gallery/staff-training.jpeg', title: 'Staff Training', description: 'Regular training and workshops for staff.' },
  { src: '/images/gallery/waiting-area.jpeg', title: 'Waiting Area', description: 'Comfortable waiting space for patients and families.' },
  { src: '/images/gallery/ward.jpeg', title: 'Patient Ward', description: 'Clean and organized ward facilities.' },
  { src: '/images/gallery/xray.jpeg', title: 'X-Ray Room', description: 'Digital X-ray diagnostics.' }
];

// Photo categories for filtering
const categories = [
  'All',
  'Facilities',
  'Staff',
  'Events',
  'Equipment'
];

// Map images to categories
const getCategoryForImage = (image) => {
  if (image.title.includes('Meeting') || image.title.includes('Training') || image.title.includes('Celebration') ||
      image.title.includes('Camp') || image.title.includes('Program')) {
    return 'Events';
  } else if (image.title.includes('Nurse') || image.title.includes('Doctor') || image.title.includes('Staff')) {
    return 'Staff';
  } else if (image.title.includes('MRI') || image.title.includes('X-Ray') || image.title.includes('Lab')) {
    return 'Equipment';
  } else {
    return 'Facilities';
  }
};

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  // Filter images by category
  const filteredImages = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => getCategoryForImage(item) === activeCategory);

  // Open image in lightbox
  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  // Close lightbox
  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section className="bg-white">
      <PageHeader
        title="Gallery"
        description="A glimpse into the activities, infrastructure, and care at Sneha Deepa Hospital."
      />

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center mb-8 gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-md transition ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredImages.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => openLightbox(item)}
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Show message if no images in category */}
        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No images found in the selected category.</p>
            <button
              onClick={() => setActiveCategory('All')}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Show All Images
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div
            className="max-w-4xl max-h-[90vh] bg-white rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[70vh] object-contain"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{selectedImage.title}</h3>
              <p className="text-gray-600 mt-1">{selectedImage.description}</p>
              <button
                onClick={closeLightbox}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;

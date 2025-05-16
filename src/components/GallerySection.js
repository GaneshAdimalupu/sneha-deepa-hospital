import React from 'react';

const Gallery = () => (
  <div className="p-6 max-w-7xl mx-auto">
    <h1 className="text-3xl font-bold mb-4">Gallery</h1>
    <p>Explore photos from our hospital:</p>
    {/* You can add images here */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
      <img src="/images/hospital-building.jpg" alt="Hospital Building" className="rounded shadow" />
      <img src="/images/operation-theatre.jpeg" alt="Operation Theatre" className="rounded shadow" />
      <img src="/images/nurses.jpeg" alt="Nurses" className="rounded shadow" />
      <img src="/images/hospital-hero.jpeg" alt="Hospital Exterior" className="rounded shadow" />
    </div>
  </div>
);

export default Gallery;

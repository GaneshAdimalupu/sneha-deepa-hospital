// src/components/content/HealthNews.js - Fixed version

import React, { useState } from 'react';
import { FaCalendarAlt, FaExternalLinkAlt } from 'react-icons/fa';

const HealthNews = () => {
  // In a real app, you would fetch this from an API
  // Using useState without setNews since this is static data for now
  // If you need to update news later, you can use setNews
  const [news] = useState([
    {
      id: 1,
      title: 'New Cardiology Wing Opening Soon',
      date: '2023-05-15',
      summary: 'Sneha Deepa Hospital is proud to announce the opening of our new state-of-the-art cardiology wing next month.',
      imageUrl: '/images/news/cardiology-wing.jpeg',
      link: '#'
    },
    {
      id: 2,
      title: 'Free Health Camp This Weekend',
      date: '2023-05-10',
      summary: 'Join us for a free community health camp this weekend. Services include basic health check-ups, blood pressure monitoring, and diabetes screening.',
      imageUrl: '/images/news/health-camp.jpeg',
      link: '#'
    },
    {
      id: 3,
      title: 'New COVID-19 Vaccination Drive',
      date: '2023-05-05',
      summary: 'Sneha Deepa Hospital is organizing a vaccination drive for COVID-19 booster shots. Register online to secure your spot.',
      imageUrl: '/images/news/vaccination.jpeg',
      link: '#'
    }
  ]);

  // Format date for display
  const formatDate = (dateStr) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateStr).toLocaleDateString(undefined, options);
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-blue-700 text-center mb-12">Latest Health News</h2>

        <div className="grid gap-8 md:grid-cols-3">
          {news.map((item) => (
            <div key={item.id} className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              {item.imageUrl && (
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}

              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <FaCalendarAlt className="mr-2" />
                  <span>{formatDate(item.date)}</span>
                </div>

                <h3 className="text-xl font-semibold text-blue-700 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.summary}</p>

                <a
                  href={item.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Read More
                  <FaExternalLinkAlt className="ml-1 h-3 w-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="/news" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
            View All News
          </a>
        </div>
      </div>
    </section>
  );
};

export default HealthNews;

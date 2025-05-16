import React from 'react';

const About = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-blue-700 text-center mb-12">About Us</h2>

        {/* History */}
        <div className="flex flex-col md:flex-row items-center mb-12 gap-8">
          <img
            src="/images/about/history-1.jpeg"
            alt="Hospital History"
            className="md:w-1/2 rounded-lg shadow-lg object-cover max-h-80"
          />
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">Our History</h3>
            <p className="text-gray-700 leading-relaxed">
              Sneha Deepa Hospital was founded with the mission to provide compassionate and
              comprehensive healthcare to our community. Over the years, we have grown into a
              leading healthcare institution known for quality and trust.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              To deliver patient-centered healthcare with excellence, innovation, and empathy,
              ensuring the wellbeing of every individual we serve.
            </p>

            <h3 className="text-2xl font-semibold text-blue-700 mb-4">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To be a trusted healthcare leader recognized for outstanding care, cutting-edge
              technology, and a commitment to community health.
            </p>
          </div>
          <img
            src="/images/about/mission-vision.jpeg"
            alt="Mission and Vision"
            className="md:w-1/2 rounded-lg shadow-lg object-cover max-h-80"
          />
        </div>
      </div>
    </section>
  );
};

export default About;

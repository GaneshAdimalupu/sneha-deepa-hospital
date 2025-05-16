import React from 'react';

const Hero = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-20 flex flex-col md:flex-row items-center">
        {/* Left content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-extrabold text-blue-700 mb-6">
            Compassionate Care, Trusted Professionals
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            At Sneha Deepa Hospital, your health is our top priority. Experience world-class medical services with a personal touch.
          </p>
          <div>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow hover:bg-blue-700 transition mr-4">
              Make an Appointment
            </button>
            <button className="bg-gray-200 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-300 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right content */}
        <div className="md:w-1/2 mt-10 md:mt-0">
          <img
            src="/images/hospital-hero.jpeg"
            alt="Hospital Hero"
            className="w-full rounded-lg shadow-lg object-cover max-h-[400px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

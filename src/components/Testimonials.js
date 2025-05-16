import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Anita Joseph',
    photo: '/images/testimonials/person1.jpeg',
    quote: 'The care I received at Sneha Deepa Hospital was exceptional. The doctors and staff were very compassionate.',
  },
  {
    id: 2,
    name: 'Michael Thomas',
    photo: '/images/testimonials/person2.jpeg',
    quote: 'Professional and caring team. I highly recommend this hospital for anyone seeking quality healthcare.',
  },
  {
    id: 3,
    name: 'Rekha Menon',
    photo: '/images/testimonials/person3.jpeg',
    quote: 'The facilities are top-notch and the environment is so welcoming. Truly grateful for the excellent service.',
  },
  {
    id: 4,
    name: 'John Mathew',
    photo: '/images/testimonials/person4.jpeg',
    quote: 'I felt very comfortable and confident in the care provided. The doctors took time to explain everything clearly.',
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-extrabold text-blue-700 mb-12">What Our Patients Say</h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {testimonials.map(({ id, name, photo, quote }) => (
            <div
              key={id}
              className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition cursor-default"
            >
              <img
                src={photo}
                alt={name}
                className="mx-auto mb-4 h-24 w-24 rounded-full object-cover"
              />
              <p className="text-gray-700 italic mb-4">“{quote}”</p>
              <h3 className="text-blue-700 font-semibold">{name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import React from 'react';

const doctors = [
  {
    id: 1,
    name: 'Dr. Anil Kumar',
    specialty: 'Cardiologist',
    photo: '/images/doctors/doctor1.jpeg',
    bio: 'Experienced heart specialist committed to compassionate cardiac care.',
  },
  {
    id: 2,
    name: 'Dr. Priya Sharma',
    specialty: 'Neurologist',
    photo: '/images/doctors/doctor2.jpeg',
    bio: 'Expert in neurological disorders with a focus on patient-centered treatment.',
  },
  {
    id: 3,
    name: 'Dr. Rajesh Menon',
    specialty: 'Pediatrician',
    photo: '/images/doctors/doctor3.jpeg',
    bio: 'Dedicated pediatrician passionate about children’s health and wellness.',
  },
  {
    id: 4,
    name: 'Dr. Meera Nair',
    specialty: 'Orthopedic Surgeon',
    photo: '/images/doctors/doctor4.jpeg',
    bio: 'Specialist in musculoskeletal conditions with advanced surgical expertise.',
  },
];

const Doctors = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-extrabold text-blue-700 mb-8">Our Doctors</h2>
        <p className="max-w-2xl mx-auto text-gray-700 mb-12">
          Meet our highly qualified and compassionate medical professionals.
        </p>

        <div className="grid gap-8 md:grid-cols-4 sm:grid-cols-2">
          {doctors.map(({ id, name, specialty, photo, bio }) => (
            <div
              key={id}
              className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition cursor-pointer"
            >
              <img
                src={photo}
                alt={name}
                className="mx-auto mb-4 h-40 w-40 rounded-full object-cover shadow-sm"
              />
              <h3 className="text-xl font-semibold text-blue-700">{name}</h3>
              <p className="text-blue-600 font-medium mb-2">{specialty}</p>
              <p className="text-gray-600 text-sm">{bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;

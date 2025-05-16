import { FaHeartbeat, FaBrain, FaBaby } from 'react-icons/fa';

const departments = [
  {
    id: 1,
    name: 'Cardiology',
    Icon: FaHeartbeat,
    description: 'Expert cardiac care with advanced diagnostics and treatments.',
  },
  {
    id: 2,
    name: 'Neurology',
    Icon: FaBrain,
    description: 'Comprehensive neurological services including stroke care.',
  },
  {
    id: 3,
    name: 'Pediatrics',
    Icon: FaBaby,
    description: 'Dedicated pediatric care focusing on children’s health.',
  },
];

const Departments = () => (
  <section className="bg-gray-50 py-16">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <h2 className="text-3xl font-extrabold text-blue-700 mb-8">Our Departments</h2>
      <p className="max-w-2xl mx-auto text-gray-700 mb-12">
        We offer specialized care across multiple disciplines with expert doctors and advanced facilities.
      </p>

      <div className="grid gap-8 md:grid-cols-3">
        {departments.map(({ id, name, Icon, description }) => (
          <div
            key={id}
            className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition cursor-pointer"
          >
            <Icon className="mx-auto mb-4 h-16 w-16 text-blue-700" aria-label={`${name} icon`} />
            <h3 className="text-xl font-semibold text-blue-700 mb-2">{name}</h3>
            <p className="text-gray-600 text-sm">{description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Departments;

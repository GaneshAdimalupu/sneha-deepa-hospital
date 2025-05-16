import React, { useState } from 'react';
import { FaCalendarAlt, FaClock, FaUserMd, FaNotesMedical, FaPhone, FaEnvelope, FaUser } from 'react-icons/fa';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    department: '',
    doctor: '',
    message: '',
  });

  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  // Department options
  const departments = [
    { value: '', label: 'Select Department' },
    { value: 'cardiology', label: 'Cardiology' },
    { value: 'neurology', label: 'Neurology' },
    { value: 'pediatrics', label: 'Pediatrics' },
    { value: 'orthopedics', label: 'Orthopedics' },
    { value: 'ophthalmology', label: 'Ophthalmology' },
    { value: 'dermatology', label: 'Dermatology' },
    { value: 'general', label: 'General Medicine' },
  ];

  // Doctor options by department
  const doctorsByDepartment = {
    cardiology: [
      { value: 'dr-anil-kumar', label: 'Dr. Anil Kumar' },
    ],
    neurology: [
      { value: 'dr-priya-sharma', label: 'Dr. Priya Sharma' },
    ],
    pediatrics: [
      { value: 'dr-rajesh-menon', label: 'Dr. Rajesh Menon' },
    ],
    orthopedics: [
      { value: 'dr-meera-nair', label: 'Dr. Meera Nair' },
    ],
    ophthalmology: [
      { value: 'dr-john-doe', label: 'Dr. John Doe' },
    ],
    dermatology: [
      { value: 'dr-sara-smith', label: 'Dr. Sara Smith' },
    ],
    general: [
      { value: 'dr-james-wilson', label: 'Dr. James Wilson' },
    ],
  };

  // Generate time slots
  const generateTimeSlots = () => {
    const slots = [];
    // Morning slots (9 AM to 12 PM)
    for (let hour = 9; hour <= 11; hour++) {
      slots.push(`${hour}:00 AM`);
      slots.push(`${hour}:30 AM`);
    }
    slots.push('12:00 PM');
    slots.push('12:30 PM');

    // Afternoon slots (1 PM to 5 PM)
    for (let hour = 1; hour <= 4; hour++) {
      slots.push(`${hour}:00 PM`);
      slots.push(`${hour}:30 PM`);
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Reset doctor when department changes
    if (name === 'department') {
      setFormData(prev => ({ ...prev, doctor: '' }));
    }
  };

  // Move to next step
  const nextStep = () => {
    setStep(step + 1);
  };

  // Move to previous step
  const prevStep = () => {
    setStep(step - 1);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate API call with setTimeout
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setSubmitting(false);
      setSuccess(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setSuccess(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          department: '',
          doctor: '',
          message: '',
        });
        setStep(1);
      }, 3000);
    }, 1500);
  };

  // Get available doctors based on selected department
  const getAvailableDoctors = () => {
    if (!formData.department) return [];
    return doctorsByDepartment[formData.department] || [];
  };

  // Calculate minimum date (today)
  const getMinDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // Custom input with label and icon
  const FormInput = ({ icon: Icon, label, type, name, value, onChange, required, placeholder }) => (
    <div className="mb-4">
      <label htmlFor={name} className="block text-gray-700 font-medium mb-2">{label}</label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
          <Icon />
        </div>
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          className="w-full pl-10 py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>
    </div>
  );

  // Custom select with label and icon
  const FormSelect = ({ icon: Icon, label, name, value, onChange, required, options }) => (
    <div className="mb-4">
      <label htmlFor={name} className="block text-gray-700 font-medium mb-2">{label}</label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
          <Icon />
        </div>
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className="w-full pl-10 py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 appearance-none bg-white"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );

  // Form steps
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <h3 className="text-xl font-semibold text-blue-700 mb-6">Personal Information</h3>
            <FormInput
              icon={FaUser}
              label="Full Name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
            />
            <FormInput
              icon={FaEnvelope}
              label="Email Address"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email address"
            />
            <FormInput
              icon={FaPhone}
              label="Phone Number"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Enter your phone number"
            />
            <div className="flex justify-end mt-6">
              <button
                type="button"
                onClick={nextStep}
                disabled={!formData.name || !formData.email || !formData.phone}
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          </>
        );

      case 2:
        return (
          <>
            <h3 className="text-xl font-semibold text-blue-700 mb-6">Appointment Details</h3>
            <FormSelect
              icon={FaNotesMedical}
              label="Department"
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
              options={departments}
            />
            <FormSelect
              icon={FaUserMd}
              label="Doctor"
              name="doctor"
              value={formData.doctor}
              onChange={handleChange}
              required
              options={[
                { value: '', label: 'Select Doctor' },
                ...getAvailableDoctors()
              ]}
            />
            <FormInput
              icon={FaCalendarAlt}
              label="Preferred Date"
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              min={getMinDate()}
            />
            <FormSelect
              icon={FaClock}
              label="Preferred Time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              options={[
                { value: '', label: 'Select Time' },
                ...timeSlots.map(time => ({ value: time, label: time }))
              ]}
            />
            <div className="flex justify-between mt-6">
              <button
                type="button"
                onClick={prevStep}
                className="bg-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-400 transition"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={nextStep}
                disabled={!formData.department || !formData.doctor || !formData.date || !formData.time}
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          </>
        );

      case 3:
        return (
          <>
            <h3 className="text-xl font-semibold text-blue-700 mb-6">Additional Information</h3>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Reason for Visit / Symptoms
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Please describe your symptoms or reason for appointment"
                className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              ></textarea>
            </div>

            <div className="mt-6 bg-blue-50 p-4 rounded-md">
              <h4 className="font-semibold text-blue-700 mb-2">Appointment Summary</h4>
              <ul className="space-y-2 text-gray-700">
                <li><span className="font-medium">Name:</span> {formData.name}</li>
                <li><span className="font-medium">Email:</span> {formData.email}</li>
                <li><span className="font-medium">Phone:</span> {formData.phone}</li>
                <li><span className="font-medium">Department:</span> {departments.find(d => d.value === formData.department)?.label}</li>
                <li><span className="font-medium">Doctor:</span> {getAvailableDoctors().find(d => d.value === formData.doctor)?.label}</li>
                <li><span className="font-medium">Date:</span> {formData.date}</li>
                <li><span className="font-medium">Time:</span> {formData.time}</li>
              </ul>
            </div>

            <div className="flex justify-between mt-6">
              <button
                type="button"
                onClick={prevStep}
                className="bg-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-400 transition"
              >
                Previous
              </button>
              <button
                type="submit"
                disabled={submitting}
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
              >
                {submitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  'Confirm Appointment'
                )}
              </button>
            </div>
          </>
        );

      default:
        return null;
    }
  };

  // Success message
  const renderSuccessMessage = () => (
    <div className="text-center py-8">
      <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100">
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        </svg>
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mb-2">Appointment Scheduled!</h3>
      <p className="text-gray-600 mb-6">
        Your appointment has been successfully scheduled. We'll send you a confirmation email shortly.
      </p>
      <button
        onClick={() => setSuccess(false)}
        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
      >
        Make Another Appointment
      </button>
    </div>
  );

  return (
    <section className="bg-white py-16">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-blue-700 text-center mb-4">Book an Appointment</h2>
        <p className="text-gray-600 text-center mb-12">Schedule your visit with our specialists</p>

        {success ? (
          renderSuccessMessage()
        ) : (
          <div className="bg-white p-6 rounded-lg shadow-md">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between">
                <div className={`text-sm ${step >= 1 ? 'text-blue-600 font-medium' : 'text-gray-500'}`}>Personal Info</div>
                <div className={`text-sm ${step >= 2 ? 'text-blue-600 font-medium' : 'text-gray-500'}`}>Appointment Details</div>
                <div className={`text-sm ${step >= 3 ? 'text-blue-600 font-medium' : 'text-gray-500'}`}>Confirmation</div>
              </div>
              <div className="mt-2 h-2 flex rounded-full overflow-hidden">
                <div className="bg-blue-600 w-1/3 transition-all duration-300"></div>
                <div className={`${step >= 2 ? 'bg-blue-600' : 'bg-gray-200'} w-1/3 transition-all duration-300`}></div>
                <div className={`${step >= 3 ? 'bg-blue-600' : 'bg-gray-200'} w-1/3 transition-all duration-300`}></div>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              {renderStep()}
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default AppointmentForm;

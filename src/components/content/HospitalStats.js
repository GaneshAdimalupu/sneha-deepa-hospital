// src/components/content/HospitalStats.js - Fixed version

import React, { useState, useEffect, useRef } from 'react';
import { FaUserMd, FaProcedures, FaSmile, FaAward } from 'react-icons/fa';

const StatCounter = ({ value, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value.substring(0, 3));

    // If zero, return
    if (start === end) return;

    // Find duration per increment
    let totalMilliseconds = duration;
    let incrementTime = totalMilliseconds / end;

    // Timer
    let timer = setInterval(() => {
      start += 1;
      setCount(String(start) + value.substring(3));

      if (start === end) clearInterval(timer);
    }, incrementTime);

    // Cleanup
    return () => {
      clearInterval(timer);
    };
  }, [value, duration]);

  return <span>{count}</span>;
};

const HospitalStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    // Store the current ref value in a variable for the cleanup function
    const currentRef = statsRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const stats = [
    {
      icon: FaUserMd,
      value: '50+ Specialists',
      label: 'Expert Doctors',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: FaProcedures,
      value: '10,000+ Patients',
      label: 'Treated Annually',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: FaSmile,
      value: '98% Satisfaction',
      label: 'Patient Rating',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100'
    },
    {
      icon: FaAward,
      value: '25+ Years',
      label: 'of Excellence',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    }
  ];

  return (
    <section ref={statsRef} className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-blue-700 text-center mb-12">Our Hospital in Numbers</h2>

        <div className="grid gap-8 md:grid-cols-4 sm:grid-cols-2">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`mx-auto ${stat.bgColor} rounded-full w-20 h-20 flex items-center justify-center mb-4`}>
                <stat.icon className={`h-10 w-10 ${stat.color}`} />
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {isVisible ? (
                  <StatCounter value={stat.value} duration={2000} />
                ) : (
                  '0'
                )}
              </h3>

              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HospitalStats;

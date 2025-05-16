import React from 'react';
import Hero from '../components/Hero';
import Departments from '../components/Departments';
import Doctors from '../components/Doctors';
import About from '../components/About';
import Contact from '../components/Contact';
import Testimonials from '../components/Testimonials';
import HospitalStats from '../components/content/HospitalStats';
import HealthNews from '../components/content/HealthNews';
import EmergencyInfo from '../components/content/EmergencyInfo';

const Home = () => (
  <main className="bg-gray-100 scroll-smooth">
    {/* Home Section */}
    <section id="home">
      <Hero />
    </section>

    {/* Hospital Stats Section */}
    <section>
      <HospitalStats />
    </section>

    {/* Departments Section */}
    <section id="departments">
      <Departments />
    </section>

    {/* Doctors Section */}
    <section id="doctors">
      <Doctors />
    </section>

    {/* News Section */}
    <section>
      <HealthNews />
    </section>

    {/* About Section */}
    <section id="about">
      <About />
    </section>

    {/* Testimonials */}
    <section>
      <Testimonials />
    </section>

    {/* Contact Section */}
    <section id="contact">
      <Contact />
    </section>

    <section>
      <EmergencyInfo />
    </section>
  </main>
);

export default Home;

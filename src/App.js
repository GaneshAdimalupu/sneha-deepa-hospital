
import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTop from './components/ui/BackToTop';
import ScrollProgress from './components/ui/ScrollProgress';
import Breadcrumbs from './components/ui/Breadcrumbs';
import Home from './pages/Home';

// Lazy load non-critical pages for better performance
const Gallery = lazy(() => import('./pages/Gallery'));
const FAQ = lazy(() => import('./pages/FAQ'));
const AppointmentPage = lazy(() => import('./pages/AppointmentPage'));
const DoctorsPage = lazy(() => import('./pages/DoctorsPage'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Loading spinner component with improved styling
const LoadingSpinner = () => (
  <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50">
    <div className="relative">
      <div className="w-20 h-20 border-blue-600 border-4 rounded-full"></div>
      <div className="w-20 h-20 border-blue-200 border-t-4 animate-spin rounded-full absolute left-0 top-0"></div>
    </div>
    <p className="mt-4 text-blue-600 font-medium">Loading...</p>
  </div>
);

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollProgress />
      <Navbar />
      <Breadcrumbs />

      <main className="flex-grow bg-gray-50">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/appointment" element={<AppointmentPage />} />
            <Route path="/doctors" element={<DoctorsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>

      <BackToTop />
      <Footer />
    </div>
  );
};

export default App;

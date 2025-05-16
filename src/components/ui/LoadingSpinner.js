// src/components/ui/LoadingSpinner.js

import React from 'react';

const LoadingSpinner = () => (
  <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50">
    <div className="relative">
      <div className="w-20 h-20 border-blue-600 border-4 rounded-full"></div>
      <div className="w-20 h-20 border-blue-200 border-t-4 animate-spin rounded-full absolute left-0 top-0"></div>
    </div>
    <p className="mt-4 text-blue-600 font-medium">Loading...</p>
  </div>
);

export default LoadingSpinner;

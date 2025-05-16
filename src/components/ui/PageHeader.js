// src/components/ui/PageHeader.js

import React from 'react';

const PageHeader = ({ title, description }) => {
  return (
    <div className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">{title}</h1>
        {description && (
          <p className="text-gray-600 max-w-3xl mx-auto">{description}</p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;

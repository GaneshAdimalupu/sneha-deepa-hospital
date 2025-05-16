import React, { useState } from 'react';
import { FaMapMarkerAlt, FaDirections, FaCar, FaBus, FaWalking } from 'react-icons/fa';

const MapAndDirections = () => {
  const [activeTab, setActiveTab] = useState('map');
  const [selectedTransport, setSelectedTransport] = useState('car');

  // This would typically be replaced with an actual Google Maps or Leaflet embed
  // The placeholder map is just for demonstration purposes
  const renderMap = () => (
    <div className="bg-gray-200 rounded-lg overflow-hidden h-80 relative">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <FaMapMarkerAlt className="text-red-500 text-4xl mx-auto mb-2" />
          <p className="font-medium">Sneha Deepa Hospital</p>
          <p className="text-gray-600 text-sm">123 Health St, Sneha Deepa City</p>
          <p className="mt-4 text-sm text-gray-500">
            [A real map would be embedded here using Google Maps or Leaflet]
          </p>
        </div>
      </div>
    </div>
  );

  // Mock directions - in a real implementation, this would be dynamic
  const transportOptions = {
    car: {
      icon: FaCar,
      directions: [
        "Head east on Central Ave toward Main St for 1.2 mi",
        "Turn right onto Health St and continue for 0.5 mi",
        "Sneha Deepa Hospital will be on your right",
        "Parking is available in the hospital garage"
      ],
      time: "15-20 min",
      distance: "1.7 mi"
    },
    bus: {
      icon: FaBus,
      directions: [
        "Take Bus #42 from Central Station",
        "Get off at Health St / Medical Center stop",
        "Walk east on Health St for 0.2 mi",
        "Sneha Deepa Hospital will be on your right"
      ],
      time: "25-30 min",
      distance: "2.0 mi"
    },
    walking: {
      icon: FaWalking,
      directions: [
        "Head east on Central Ave toward Main St for 1.2 mi",
        "Turn right onto Health St and continue for 0.5 mi",
        "Sneha Deepa Hospital will be on your right"
      ],
      time: "35-40 min",
      distance: "1.7 mi"
    }
  };

  const renderDirections = () => {
    const transport = transportOptions[selectedTransport];
    const TransportIcon = transport.icon;

    return (
      <div className="bg-white rounded-lg overflow-hidden h-80">
        <div className="bg-gray-100 p-4 border-b">
          <div className="flex space-x-4">
            {Object.keys(transportOptions).map(key => {
              const TransportType = transportOptions[key].icon;
              return (
                <button
                  key={key}
                  onClick={() => setSelectedTransport(key)}
                  className={`p-2 rounded-full ${selectedTransport === key ? 'bg-blue-100 text-blue-600' : 'text-gray-500 hover:bg-gray-200'}`}
                  aria-label={`Get directions by ${key}`}
                >
                  <TransportType size={20} />
                </button>
              );
            })}
          </div>
        </div>

        <div className="p-4">
          <div className="flex items-center mb-4">
            <TransportIcon className="text-blue-600 mr-2" size={20} />
            <div>
              <span className="font-medium">{transport.time}</span>
              <span className="text-gray-500 text-sm ml-2">({transport.distance})</span>
            </div>
          </div>

          <ol className="space-y-4">
            {transport.directions.map((step, index) => (
              <li key={index} className="flex">
                <div className="mr-4 flex flex-col items-center">
                  <div className="bg-blue-100 text-blue-600 w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium">
                    {index + 1}
                  </div>
                  {index < transport.directions.length - 1 && (
                    <div className="h-full w-0.5 bg-blue-100 my-1"></div>
                  )}
                </div>
                <div className="pt-1">{step}</div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="flex border-b">
        <button
          onClick={() => setActiveTab('map')}
          className={`flex-1 py-3 px-4 text-center font-medium ${activeTab === 'map'
            ? 'text-blue-600 border-b-2 border-blue-600'
            : 'text-gray-500 hover:text-gray-700'}`}
        >
          <FaMapMarkerAlt className="inline-block mr-2" />
          Map
        </button>
        <button
          onClick={() => setActiveTab('directions')}
          className={`flex-1 py-3 px-4 text-center font-medium ${activeTab === 'directions'
            ? 'text-blue-600 border-b-2 border-blue-600'
            : 'text-gray-500 hover:text-gray-700'}`}
        >
          <FaDirections className="inline-block mr-2" />
          Directions
        </button>
      </div>

      <div className="p-4">
        {activeTab === 'map' ? renderMap() : renderDirections()}

        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-2">Sneha Deepa Hospital</h3>
          <p className="text-gray-600">123 Health St, Sneha Deepa City, State 12345</p>
          <p className="text-gray-600 mt-1">Phone: +1 (555) 123-4567</p>
          <div className="mt-4">
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapAndDirections;

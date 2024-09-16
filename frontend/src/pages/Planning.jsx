import React, { useState, useEffect, useRef } from 'react';
import { Input, DatePicker, Button, Select } from 'antd';
const { RangePicker } = DatePicker;
const { Option } = Select;
import { FaMapMarkerAlt, FaCalendarAlt, FaUsers } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Planning = () => {
  const [location, setLocation] = useState('');
  const [numTravelers, setNumTravelers] = useState(1);
  const autocompleteRef = useRef(null);

  useEffect(() => {
    if (window.google && window.google.maps) {
      const autocomplete = new window.google.maps.places.Autocomplete(autocompleteRef.current, {
        types: ['(cities)'],
      });
      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        setLocation(place.formatted_address);
      });
    }
  }, []);

  const handleSubmit = () => {
    // Add your trip planning logic here
    console.log('Planning trip:', { location, numTravelers });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />

      <main className=" pt-40 flex-grow py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Plan Your Dream Trip</h1>

          <div className="bg-white shadow-xl rounded-lg p-8">
            <div className="mb-8">
              <label className="block text-lg font-semibold text-gray-700 mb-2 flex items-center">
                <FaMapMarkerAlt className="mr-2 text-indigo-600" />
                Where do you want to go?
              </label>
              <Input
                ref={autocompleteRef}
                placeholder="Enter a destination"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full border-gray-300 rounded-md text-lg py-2"
              />
            </div>

            <div className="mb-8">
              <label className="block text-lg font-semibold text-gray-700 mb-2 flex items-center">
                <FaCalendarAlt className="mr-2 text-indigo-600" />
                When are you planning to travel?
              </label>
              <RangePicker 
                className="w-full border-gray-300 rounded-md text-lg" 
                format="YYYY-MM-DD"
              />
            </div>

            <div className="mb-8">
              <label className="block text-lg font-semibold text-gray-700 mb-2 flex items-center">
                <FaUsers className="mr-2 text-indigo-600" />
                How many travelers?
              </label>
              <Select
                value={numTravelers}
                onChange={setNumTravelers}
                className="w-full text-lg"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                  <Option key={num} value={num}>{num} {num === 1 ? 'Traveler' : 'Travelers'}</Option>
                ))}
              </Select>
            </div>

            <div className="flex justify-center mt-10">
            <Link to="/start-planning/bookPlan">
              <Button 
                type="primary" 
                size="large" 
                onClick={handleSubmit}
                className="px-12 py-3 text-lg h-auto bg-indigo-600 hover:bg-indigo-700 border-none rounded-md transition duration-300"
              >
                BOOK PLAN
              </Button>
              </Link>
            </div>
          </div>

          <div className="mt-12 text-center text-gray-600">
            <p>Need help planning your trip? <a href="/contact" className="text-indigo-600 hover:underline">Contact our travel experts</a></p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Planning;
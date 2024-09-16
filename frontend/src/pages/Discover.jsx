import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaCalendarAlt, FaUser, FaArrowRight, FaSearch, FaGlobe, FaUmbrellaBeach, FaMountain, FaCity } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';

const destinations = {
  'norway-hidden-gems': {
    id: 'norway-hidden-gems',
    title: "Discover Norway's Hidden Gems",
    image: "https://wallpapers.com/images/hd/beautiful-travel-2560-x-1703-wallpaper-gxkaxl0zmx9lpup4.jpg",
    description: "Explore the breathtaking Lofoten Mountains and charming houses in Norway.",
    category: "Nature",
    author: "Emma Traveller",
    date: "June 15, 2023",
  },
  'austria-mountains': {
    id: 'austria-mountains',
    title: "Through the Mountains of Austria",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS2u5610Ff4654oXW4Iu-JBBDOcu9c_4kdE3JmH9a2WgkeY4BqMtHg56wzQ0S3Yj7TNY8&usqp=CAU",
    description: "Embark on a journey through the stunning Austrian Alps.",
    category: "Adventure",
    author: "Alpine Explorer",
    date: "July 2, 2023",
  },
  'tokyo-culture': {
    id: 'tokyo-culture',
    title: "Tokyo: A Cultural Odyssey",
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    description: "Immerse yourself in the vibrant culture of Tokyo.",
    category: "Culture",
    author: "Sakura Tanaka",
    date: "August 10, 2023",
  },
  'bali-beaches': {
    id: 'bali-beaches',
    title: "Bali's Tropical Paradise",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    description: "Relax on pristine beaches and explore lush landscapes in Bali.",
    category: "Beach",
    author: "Island Hopper",
    date: "September 5, 2023",
  },
  'new-york-city': {
    id: 'new-york-city',
    title: "The Big Apple Adventure",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Experience the energy and diversity of New York City.",
    category: "Urban",
    author: "City Explorer",
    date: "October 20, 2023",
  },
};

const categories = [
  { name: "All", icon: FaGlobe },
  { name: "Beach", icon: FaUmbrellaBeach },
  { name: "Nature", icon: FaMountain },
  { name: "Urban", icon: FaCity },
  { name: "Culture", icon: FaGlobe },
  { name: "Adventure", icon: FaMountain },
];

const DiscoverPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredDestinations = Object.values(destinations).filter(destination => 
    (destination.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     destination.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (selectedCategory === "All" || destination.category === selectedCategory)
  );

  return (
<div>
<Header/>

    <div className="bg-gray-100 min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Discover Amazing Destinations</h1>
        
        {/* Search and Filter Section */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <div className="relative w-full md:w-1/2 mb-4 md:mb-0">
              <input
                type="text"
                placeholder="Search destinations..."
                className="w-full p-3 pl-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <div className="flex space-x-2 overflow-x-auto pb-2 w-full md:w-auto">
              {categories.map((category) => (
                <button
                  key={category.name}
                  className={`px-4 py-2 rounded-full flex items-center ${
                    selectedCategory === category.name
                      ? "bg-blue-500 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => setSelectedCategory(category.name)}
                >
                  <category.icon className="mr-2" />
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Destination */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Featured Destination</h2>
          <div className="relative h-96 rounded-lg overflow-hidden">
            <img src={destinations['norway-hidden-gems'].image} alt="Featured Destination" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
              <div className="p-6 text-white">
                <h3 className="text-3xl font-bold mb-2">{destinations['norway-hidden-gems'].title}</h3>
                <p className="text-lg mb-4">{destinations['norway-hidden-gems'].description}</p>
                <Link to={`/discover/norway-hidden-gems`} className="inline-block bg-white text-blue-600 py-2 px-6 rounded-full hover:bg-blue-100 transition-colors">
                  Explore Now
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Destinations Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Explore Destinations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((destination) => (
              <Link key={destination.id} to={`/discover/${destination.id}`} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
                <div className="relative h-64">
                  <img src={destination.image} alt={destination.title} className="w-full h-full object-cover" />
                  <div className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 m-2 rounded-full text-sm">
                    {destination.category}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{destination.title}</h3>
                  <p className="text-gray-600 mb-4">{destination.description}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span className="flex items-center"><FaUser className="mr-1" /> {destination.author}</span>
                    <span className="flex items-center"><FaCalendarAlt className="mr-1" /> {destination.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Travel Tips Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Travel Tips</h2>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-2 text-blue-600 flex-shrink-0" />
                <span>Research your destination thoroughly before traveling</span>
              </li>
              <li className="flex items-start">
                <FaCalendarAlt className="mt-1 mr-2 text-blue-600 flex-shrink-0" />
                <span>Book accommodations and activities in advance for better deals</span>
              </li>
              <li className="flex items-start">
                <FaGlobe className="mt-1 mr-2 text-blue-600 flex-shrink-0" />
                <span>Learn a few basic phrases in the local language</span>
              </li>
              <li className="flex items-start">
                <FaUmbrellaBeach className="mt-1 mr-2 text-blue-600 flex-shrink-0" />
                <span>Pack appropriate clothing for your destination's climate</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-blue-600 rounded-lg shadow-lg p-6 text-white">
          <h2 className="text-2xl font-semibold mb-4">Stay Updated</h2>
          <p className="mb-4">Subscribe to our newsletter for the latest travel tips and exclusive offers!</p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow p-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button type="submit" className="bg-white text-blue-600 py-3 px-6 rounded-full hover:bg-blue-100 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>


<Footer/>
    </div>
  );
};

export default DiscoverPage;
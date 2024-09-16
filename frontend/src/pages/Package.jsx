import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { FaCalendar, FaUsers, FaPlane, FaBed, FaUtensils, FaMapMarkedAlt } from 'react-icons/fa'
import Header from '../components/Header'
import Footer from '../components/Footer'

const packages = {
  charming: {
    name: "CHARMING",
    price: 2500,
    duration: "7 days",
    groupSize: "10-15",
    description: "Experience the charm of quaint towns and hidden gems in this delightful week-long adventure.",
    highlights: [
      "Explore picturesque villages",
      "Taste local cuisines",
      "Enjoy scenic countryside drives",
      "Visit historical landmarks"
    ],
    inclusions: [
      "Accommodation in boutique hotels",
      "Daily breakfast and selected meals",
      "Guided tours and activities",
      "Transportation between destinations"
    ]
  },
  premier: {
    name: "PREMIER",
    price: 3500,
    duration: "10 days",
    groupSize: "8-12",
    description: "Indulge in a premium travel experience with a perfect blend of luxury and adventure.",
    highlights: [
      "Stay in 4-star accommodations",
      "Private guided tours",
      "Exclusive wine tasting sessions",
      "Scenic boat cruises"
    ],
    inclusions: [
      "4-star hotel accommodations",
      "All meals included",
      "Premium guided experiences",
      "Airport transfers and luxury transportation"
    ]
  },
  // Add more package details as needed
}
const Package = () => {
  const { packageId } = useParams()
  const packageDetails = packages[packageId] || packages.charming // Default to charming if not found
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">

    <Header/>
    <main className="flex-grow pt-16">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{packageDetails.name} Package</h1>
        
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="h-64 bg-cover bg-center" style={{backgroundImage: "url('https://wallpapers.com/images/hd/beautiful-travel-2560-x-1703-wallpaper-gxkaxl0zmx9lpup4.jpg')"}}></div>
          
          <div className="p-6">
            <div className="flex flex-wrap justify-between items-center mb-6">
              <h2 className="text-3xl font-semibold text-gray-800">From ${packageDetails.price} per person</h2>
              <div className="flex items-center text-gray-600">
                <FaCalendar className="mr-2" />
                <span>{packageDetails.duration}</span>
                <FaUsers className="ml-4 mr-2" />
                <span>{packageDetails.groupSize} people</span>
              </div>
            </div>
            
            <p className="text-gray-600 mb-6">{packageDetails.description}</p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Highlights</h3>
                <ul className="list-disc list-inside text-gray-600">
                  {packageDetails.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Inclusions</h3>
                <ul className="list-disc list-inside text-gray-600">
                  {packageDetails.inclusions.map((inclusion, index) => (
                    <li key={index}>{inclusion}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center text-gray-600">
                <FaPlane className="mr-2 text-indigo-600" />
                <span>Flight included</span>
              </div>
              <div className="flex items-center text-gray-600">
                <FaBed className="mr-2 text-indigo-600" />
                <span>Comfortable stays</span>
              </div>
              <div className="flex items-center text-gray-600">
                <FaUtensils className="mr-2 text-indigo-600" />
                <span>Meals provided</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <Link to="/itinerary" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                <FaMapMarkedAlt className="mr-2" />
                View detailed itinerary
              </Link>
              <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors">
                Book Now
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <Link to="/" className="text-indigo-600 hover:text-indigo-800">
            ← Back to all packages
          </Link>
        </div>
      </div>
    </main>
<Footer/>

  </div>
  )
}

export default Package

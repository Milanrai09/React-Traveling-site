import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { FaMapMarkerAlt, FaCalendar, FaPlane, FaHotel, FaUtensils, FaInfoCircle } from 'react-icons/fa'
import Header from '../components/Header'
import Footer from '../components/Footer'


const regions = {
  europe: {
    name: "EUROPE",
    description: "Discover the rich history, diverse cultures, and stunning landscapes of Europe.",
    popularDestinations: [
      { name: "Paris, France", image: "https://i.pinimg.com/736x/14/3b/36/143b367d82c51337979c0bea82c9edc9.jpg" },
      { name: "Rome, Italy", image: "https://i.pinimg.com/736x/14/3b/36/143b367d82c51337979c0bea82c9edc9.jpg" },
      { name: "Barcelona, Spain", image: "https://i.pinimg.com/736x/14/3b/36/143b367d82c51337979c0bea82c9edc9.jpg" },
      { name: "Amsterdam, Netherlands", image: "https://i.pinimg.com/736x/14/3b/36/143b367d82c51337979c0bea82c9edc9.jpg" }
    ],
    suggestedItinerary: [
      "Day 1-3: Explore the romantic streets of Paris",
      "Day 4-6: Discover ancient history in Rome",
      "Day 7-9: Experience the vibrant culture of Barcelona",
      "Day 10-12: Enjoy the charming canals of Amsterdam"
    ]
  },
  eastAsia: {
    name: "EAST ASIA",
    description: "Immerse yourself in the fascinating blend of ancient traditions and modern innovations in East Asia.",
    popularDestinations: [
      { name: "Tokyo, Japan", image: "https://i.pinimg.com/736x/72/1b/41/721b413247a6049a6b2203b282e32704.jpg" },
      { name: "Seoul, South Korea", image: "https://i.pinimg.com/736x/72/1b/41/721b413247a6049a6b2203b282e32704.jpg" },
      { name: "Beijing, China", image: "https://i.pinimg.com/736x/72/1b/41/721b413247a6049a6b2203b282e32704.jpg" },
      { name: "Taipei, Taiwan", image: "https://i.pinimg.com/736x/72/1b/41/721b413247a6049a6b2203b282e32704.jpg" }
    ],
    suggestedItinerary: [
      "Day 1-3: Experience the bustling metropolis of Tokyo",
      "Day 4-6: Explore the dynamic city of Seoul",
      "Day 7-9: Walk the Great Wall and discover Beijing",
      "Day 10-12: Indulge in the night markets of Taipei"
    ]
  },
  southEastAsia: {
    name: "SOUTH EAST ASIA",
    description: "Experience the perfect blend of tropical paradises, ancient temples, and vibrant cities in South East Asia.",
    popularDestinations: [
      { name: "Bangkok, Thailand", image: "https://i.pinimg.com/originals/f3/69/9f/f3699f3024e4933913f6d8f635de7068.jpg" },
      { name: "Bali, Indonesia", image: "https://i.pinimg.com/originals/f3/69/9f/f3699f3024e4933913f6d8f635de7068.jpg" },
      { name: "Hanoi, Vietnam", image: "https://i.pinimg.com/originals/f3/69/9f/f3699f3024e4933913f6d8f635de7068.jpg" },
      { name: "Singapore", image: "https://i.pinimg.com/originals/f3/69/9f/f3699f3024e4933913f6d8f635de7068.jpg" }
    ],
    suggestedItinerary: [
      "Day 1-3: Explore the bustling streets and temples of Bangkok",
      "Day 4-6: Relax on the beautiful beaches of Bali",
      "Day 7-9: Discover the rich history and culture of Hanoi",
      "Day 10-12: Experience the modern marvels of Singapore"
    ]
  },
  southAmerica: {
    name: "SOUTH AMERICA",
    description: "Embark on an adventure through diverse landscapes, from the Amazon rainforest to the Andes mountains.",
    popularDestinations: [
      { name: "Rio de Janeiro, Brazil", image: "https://i.pinimg.com/originals/09/e4/ca/09e4caf4c84f3ac58c4f9c3944a528b3.gif" },
      { name: "Machu Picchu, Peru", image: "https://i.pinimg.com/originals/09/e4/ca/09e4caf4c84f3ac58c4f9c3944a528b3.gif" },
      { name: "Buenos Aires, Argentina", image: "https://i.pinimg.com/originals/09/e4/ca/09e4caf4c84f3ac58c4f9c3944a528b3.gif" },
      { name: "Galapagos Islands, Ecuador", image: "https://i.pinimg.com/originals/09/e4/ca/09e4caf4c84f3ac58c4f9c3944a528b3.gif" }
    ],
    suggestedItinerary: [
      "Day 1-3: Soak up the sun and culture in Rio de Janeiro",
      "Day 4-6: Hike to the ancient Incan city of Machu Picchu",
      "Day 7-9: Experience the passion of Buenos Aires",
      "Day 10-12: Discover unique wildlife in the Galapagos Islands"
    ]
  }
}

const Byregion = () => {
  const { regionId } = useParams()
  const regionDetails = regions[regionId] || regions.europe
  return (


    <div>
      <Header/>
    <div className="min-h-screen flex flex-col bg-gray-100">
      
      <main className="flex-grow pt-16">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{regionDetails.name}</h1>
          
          <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
            <div className="p-6">
              <p className="text-gray-600 mb-6">{regionDetails.description}</p>
              
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Popular Destinations</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {regionDetails.popularDestinations.map((destination, index) => (
                  <div key={index} className="relative overflow-hidden rounded-lg shadow-md">
                    <img src={destination.image} alt={destination.name} className="w-full h-48 object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
                      <h3 className="text-lg font-semibold">{destination.name}</h3>
                    </div>
                  </div>
                ))}
              </div>
              
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Suggested Itinerary</h2>
              <ul className="list-disc list-inside text-gray-600 mb-6">
                {regionDetails.suggestedItinerary.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center text-gray-600">
                  <FaPlane className="mr-2 text-indigo-600" />
                  <span>International flights available</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <FaHotel className="mr-2 text-indigo-600" />
                  <span>Wide range of accommodations</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <FaUtensils className="mr-2 text-indigo-600" />
                  <span>Local cuisine experiences</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <Link to="/custom-trip" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                  <FaInfoCircle className="mr-2" />
                  Plan a custom trip
                </Link>
                <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors">
                  Explore Packages
                </button>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link to="/" className="text-indigo-600 hover:text-indigo-800">
              ← Back to all regions
            </Link>
          </div>
        </div>
      </main>

    </div>
<Footer/>
    </div>
  )
}

export default Byregion

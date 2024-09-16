import React, { useState } from 'react'
import { FaMapMarkedAlt, FaCalendarAlt, FaUsers, FaGlobeAmericas } from 'react-icons/fa'
import Footer from './Footer'
import Header from './Header'

const popularTours = [
  { id: 1, name: "Paris City Tour", duration: "1 Day", price: "$99", image: "https://public.blob.vercel-storage.com/paris-eiffel-tower-YOVOtR4zp6pBXoJWsSHZkpr1lU6wQb.jpg" },
  { id: 2, name: "Tokyo Cultural Experience", duration: "3 Days", price: "$299", image: "https://public.blob.vercel-storage.com/tokyo-street-pBwQOsnzO5HGXV3xNkjWfMI7W3SvU4.jpg" },
  { id: 3, name: "New York City Explorer", duration: "2 Days", price: "$199", image: "https://public.blob.vercel-storage.com/new-york-city-KKSvbUxQlbTVOKFz8hJTtNMQbffME7.jpg" },
]

export default function GuidedTours() {
  const [selectedDestination, setSelectedDestination] = useState("")
  const [tourDate, setTourDate] = useState("")
  const [groupSize, setGroupSize] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Tour booked:", { selectedDestination, tourDate, groupSize })
  }

  return (

<div>

    <Header/>

    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Guided Tours</h1>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Book Your Tour</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="destination" className="block mb-1">Destination</label>
              <select
                id="destination"
                value={selectedDestination}
                onChange={(e) => setSelectedDestination(e.target.value)}
                className="w-full p-2 border rounded"
              >
                <option value="">Select a destination</option>
                <option value="paris">Paris</option>
                <option value="tokyo">Tokyo</option>
                <option value="new-york">New York</option>
              </select>
            </div>
            <div>
              <label htmlFor="date" className="block mb-1">Tour Date</label>
              <input
                type="date"
                id="date"
                value={tourDate}
                onChange={(e) => setTourDate(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label htmlFor="group-size" className="block mb-1">Group Size</label>
              <select
                id="group-size"
                value={groupSize}
                onChange={(e) => setGroupSize(e.target.value)}
                className="w-full p-2 border rounded"
              >
                <option value="">Select group size</option>
                <option value="1-2">1-2 people</option>
                <option value="3-5">3-5 people</option>
                <option value="6+">6+ people</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
            >
              Book Tour
            </button>
          </form>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Our Tours?</h2>
          <ul className="space-y-4">
            <li className="flex items-center">
              <FaMapMarkedAlt className="text-blue-600 mr-2" />
              <span>Expert local guides</span>
            </li>
            <li className="flex items-center">
              <FaCalendarAlt className="text-blue-600 mr-2" />
              <span>Flexible scheduling</span>
            </li>
            <li className="flex items-center">
              <FaUsers className="text-blue-600 mr-2" />
              <span>Small group sizes</span>
            </li>
            <li className="flex items-center">
              <FaGlobeAmericas className="text-blue-600 mr-2" />
              <span>Diverse range of destinations</span>
            </li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Popular Tours</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {popularTours.map((tour) => (
          <div key={tour.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={tour.image} alt={tour.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{tour.name}</h3>
              <p className="text-gray-600 mb-2">{tour.duration}</p>
              <div className="flex justify-between items-center">
                <span className="font-bold text-lg">{tour.price}</span>
                <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>


    <Footer/>

</div>
  )
}
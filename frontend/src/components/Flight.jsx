import React, { useState } from 'react'
import { FaPlane, FaCalendarAlt, FaUser, FaExchangeAlt } from 'react-icons/fa'
import Footer from './Footer'
import Header from './Header'

const featuredFlights = [
  { id: 1, from: "New York", to: "London", price: "$499", airline: "SkyHigh Airways" },
  { id: 2, from: "Los Angeles", to: "Tokyo", price: "$799", airline: "Pacific Flyers" },
  { id: 3, from: "Chicago", to: "Paris", price: "$599", airline: "EuroWings" },
]

export default function FlightBooking() {
  const [tripType, setTripType] = useState("round-trip")
  const [origin, setOrigin] = useState("")
  const [destination, setDestination] = useState("")
  const [departDate, setDepartDate] = useState("")
  const [returnDate, setReturnDate] = useState("")
  const [passengers, setPassengers] = useState("1")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Flight search:", { tripType, origin, destination, departDate, returnDate, passengers })
  }

  return (

<div>

<Header/>

    <div className="container mx-auto px-4 py-8 pt-40">
      <h1 className="text-4xl font-bold text-center mb-8">Flight Booking</h1>
      
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-2">Search for Flights</h2>
        <p className="text-gray-600 mb-4">Find the best deals on flights to your destination</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                value="round-trip"
                checked={tripType === "round-trip"}
                onChange={(e) => setTripType(e.target.value)}
                className="mr-2"
              />
              Round Trip
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="one-way"
                checked={tripType === "one-way"}
                onChange={(e) => setTripType(e.target.value)}
                className="mr-2"
              />
              One Way
            </label>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="origin" className="block mb-1">From</label>
              <select
                id="origin"
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
                className="w-full p-2 border rounded"
              >
                <option value="">Select origin</option>
                <option value="new-york">New York</option>
                <option value="los-angeles">Los Angeles</option>
                <option value="chicago">Chicago</option>
              </select>
            </div>
            <div>
              <label htmlFor="destination" className="block mb-1">To</label>
              <select
                id="destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full p-2 border rounded"
              >
                <option value="">Select destination</option>
                <option value="london">London</option>
                <option value="tokyo">Tokyo</option>
                <option value="paris">Paris</option>
              </select>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="depart-date" className="block mb-1">Depart Date</label>
              <input
                type="date"
                id="depart-date"
                value={departDate}
                onChange={(e) => setDepartDate(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
            {tripType === "round-trip" && (
              <div>
                <label htmlFor="return-date" className="block mb-1">Return Date</label>
                <input
                  type="date"
                  id="return-date"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  className="w-full p-2 border rounded"
                />
              </div>
            )}
          </div>
          
          <div>
            <label htmlFor="passengers" className="block mb-1">Passengers</label>
            <select
              id="passengers"
              value={passengers}
              onChange={(e) => setPassengers(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="1">1 passenger</option>
              <option value="2">2 passengers</option>
              <option value="3">3 passengers</option>
              <option value="4+">4+ passengers</option>
            </select>
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
          >
            Search Flights
          </button>
        </form>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Featured Flights</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {featuredFlights.map((flight) => (
          <div key={flight.id} className="bg-white shadow-md rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold">{flight.from}</span>
              <FaExchangeAlt className="text-blue-600" />
              <span className="font-semibold">{flight.to}</span>
            </div>
            <p className="text-gray-600 mb-4">{flight.airline}</p>
            <div className="flex items-center justify-center mb-4">
              <FaPlane className="text-4xl text-blue-600" />
            </div>
            <div className="flex justify-between items-center">
              <span className="font-bold text-lg">{flight.price}</span>
              <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>

    <Footer/>

</div>
  )
}
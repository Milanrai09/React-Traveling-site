import React from 'react';
import { HiOutlineGlobeAlt, HiOutlineLightBulb, HiOutlineHeart } from 'react-icons/hi';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from "react-router-dom";

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-gray-800 p-6 rounded-lg">
    <div className="text-indigo-400 w-12 h-12 mb-4 mx-auto">
      <Icon className="w-full h-full" />
    </div>
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const About = () => {
  return (
    <div>
    
    <Header className=''/>
        
    
    <div className="bg-gray-900 min-h-screen py-12 px-4 sm:px-6 lg:px-8 pt-40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            About Our Travel Service
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-400">
            Discover the world with ease. We're here to make your travel dreams a reality.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard 
              icon={HiOutlineGlobeAlt}
              title="Explore the World"
              description="Access a vast network of destinations and experiences tailored to your interests."
            />
            <FeatureCard 
              icon={HiOutlineLightBulb}
              title="Expert Planning"
              description="Our team of travel experts will help you create the perfect itinerary for your dream vacation."
            />
            <FeatureCard 
              icon={HiOutlineHeart}
              title="Personalized Experience"
              description="Every trip is unique. We cater to your preferences to ensure an unforgettable journey."
            />
          </div>
        </div>

        <div className="mt-16 bg-gray-800 rounded-lg p-8">
          <h2 className="text-3xl font-extrabold text-white">Our Mission</h2>
          <p className="mt-4 text-lg text-gray-400">
            At [Your Travel Company], we believe that travel has the power to transform lives. Our mission is to make meaningful travel experiences accessible to everyone. We strive to connect cultures, inspire adventure, and create lasting memories for our clients.
          </p>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-extrabold text-white">Ready to Start Your Journey?</h2>
          <div className="mt-8">
          <Link to="/start-planning" className="bg-indigo-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-indigo-700">
                Start Planning Now
          </Link>
          </div>
        </div>
      </div>
    </div>


    <Footer/>



    </div>  );
};

export default About;
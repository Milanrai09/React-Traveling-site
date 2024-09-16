import { useState } from 'react';
import { Collapse } from 'antd';
import MostVisitedPlace from './mostVisited';
import { Button, Flex } from 'antd';
import { Link } from 'react-router-dom';
import Reviews from './Reviews';
import Share from './Share';
import { FaPlane, FaHotel, FaUmbrellaBeach, FaMapMarkedAlt, FaQuestionCircle, FaSuitcase, FaShieldAlt } from 'react-icons/fa';
import { MdExplore } from 'react-icons/md';

const items = [
  {
    key: '1',
    label: 'What are the best travel destinations?',
    icon: <FaMapMarkedAlt />,
    children: (
      <p>
        Some of the best travel destinations include Paris, Tokyo, Bali, New York City, and Santorini. Each offers unique experiences, from historic landmarks to stunning beaches.
      </p>
    ),
  },
  {
    key: '2',
    label: 'What documents do I need for international travel?',
    icon: <FaSuitcase />,
    children: (
      <p>
        You will typically need a valid passport, visa (depending on the destination), travel insurance, and potentially vaccination records. Always check entry requirements for your destination country.
      </p>
    ),
  },
  {
    key: '3',
    label: 'How can I find affordable flights?',
    icon: <FaPlane />,
    children: (
      <p>
        To find affordable flights, book in advance, use flight comparison tools, consider traveling during off-peak seasons, and subscribe to airfare deal alerts.
      </p>
    ),
  },
  {
    key: '4',
    label: 'What should I pack for a trip?',
    icon: <FaSuitcase />,
    children: (
      <p>
        The items you should pack depend on your destination and the length of your stay. Essentials include clothing, toiletries, electronics (chargers, adapters), travel documents, and a first-aid kit.
      </p>
    ),
  },
  {
    key: '5',
    label: 'Is travel insurance necessary?',
    icon: <FaShieldAlt />,
    children: (
      <p>
        Travel insurance is highly recommended as it covers unexpected events such as trip cancellations, medical emergencies, and lost luggage. It's a safety net for your trip.
      </p>
    ),
  },
];

const blogdata = [
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS2u5610Ff4654oXW4Iu-JBBDOcu9c_4kdE3JmH9a2WgkeY4BqMtHg56wzQ0S3Yj7TNY8&usqp=CAU',
    title: 'Through the mountains',
    tagline: 'All THINGS AUSTRIA',
  },
  {
    image: 'https://media.cnn.com/api/v1/images/stellar/prod/190905140302-02-europe-beautiful-places.jpg?q=w_1160,c_fill/f_webp',
    title: 'Sailing Cruser Attractions And Landmarks Guide',
    tagline: 'All THINGS Norway',
  },
  {
    image: 'https://media.cnn.com/api/v1/images/stellar/prod/190905140804-12-europe-beautiful-places.jpg?q=w_1160,c_fill/f_webp',
    title: 'With its undulating sand dunes',
    tagline: 'All THINGS SOUTH AMERICA',
  },
];

const Main = () => {
  return (
    <main className="bg-gray-100 flex-grow">
      <section className="relative h-screen flex flex-col justify-center items-center text-white">
        <div className="absolute inset-0 bg-[url('https://hips.hearstapps.com/hmg-prod/images/the-dolomites-itlay-veranda-most-beautiful-places-in-europe-66a1720c719dd.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z- text-center space-y-6 px-4">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">FIND THE PERFECT PLACE TO GO</h1>
          <p className="text-lg md:text-2xl max-w-2xl mx-auto">Receive personalized recommendations for activities, hotels and more.</p>
          <Link to="/start-planning" className="inline-block mt-6">
            <Button type="primary" className="text-xl px-8 py-4 h-auto flex items-center gap-2">
              <MdExplore className="text-2xl" /> START PLANNING
            </Button>
          </Link>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon:<FaPlane className="text-4xl text-blue-500" />, title: "Flight Booking", route:"/flight-bookings" },
              { icon: <FaHotel className="text-4xl text-green-500" />, title: "Hotel Reservations" , route:"/start-planning/bookPlan" },
              { icon: <FaUmbrellaBeach className="text-4xl text-yellow-500" />, title: "Vacation Packages", route:"/how-it-works" },
              { icon: <FaMapMarkedAlt className="text-4xl text-red-500" />, title: "Guided Tours", route:"/tour-guide" },
            ].map((service, index) => (
              <Link to={service.route} key={index} > 
              <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md transition-transform hover:scale-105">

                {service.icon}
                <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
              </div>

              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-600 py-20">
        <div className="container mx-auto w-4/5">
          <h2 className="text-3xl font-bold text-center text-white mb-10">Most Liked Destinations</h2>
          <MostVisitedPlace />
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto w-11/12 lg:w-10/12 bg-white shadow-2xl rounded-lg p-8">
          <h4 className="text-xl text-center text-gray-600 mb-2">MOST ASKED QUESTIONS</h4>
          <h2 className="text-3xl font-bold text-center mb-8">FREQUENTLY ASKED QUESTIONS</h2>
          <Collapse 
            items={items.map(item => ({
              ...item,
              label: (
                <div className="flex items-center gap-3">
                  {item.icon}
                  <span>{item.label}</span>
                </div>
              ),
            }))} 
            defaultActiveKey={['']} 
          />
        </div>
      </section>

      <section className="bg-blue-600 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center text-white mb-12">
            <h5 className="text-lg mb-2">OUR LATEST BLOG POSTS</h5>
            <h2 className="text-3xl font-bold">FROM THE RESOURCE CENTER</h2>
          </div>

          <Link to='/discover'>
          <div className="relative h-64 mx-4 md:mx-9 mb-12 rounded-lg overflow-hidden group">
            <div className="absolute inset-0 bg-[url('https://wallpapers.com/images/hd/beautiful-travel-2560-x-1703-wallpaper-gxkaxl0zmx9lpup4.jpg')] bg-cover bg-center transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-500 group-hover:bg-opacity-30" />
            <div className="absolute inset-0 flex flex-col justify-between p-6">
              <div className="bg-blue-500 text-white text-sm w-24 rounded-full py-1 px-3 text-center">FEATURED</div>
              <div>
                <h3 className="text-white text-2xl font-bold mb-2">Discover Norway's Hidden Gems</h3>
                <p className="text-white text-lg">Explore the breathtaking Lofoten Mountains and charming houses</p>
              </div>
            </div>
          </div>
          </Link>
          
          <div className="grid md:grid-cols-3 gap-8">
            {blogdata.map((data, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
                <Link to='/discover'>
                <div className="relative h-48">
                  <img src={data.image} alt={data.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 opacity-0 hover:opacity-100 flex items-center justify-center">
                    <Button type="primary" className="bg-blue-500">Vist</Button>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold">{data.title}</h3>
                  <h5 className="text-gray-600">{data.tagline}</h5>
                </div>

                </Link>

              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-800 py-16">
        <Reviews />
      </section>

      <section className="bg-blue-500 py-16">
        <div className="container mx-auto px-4">
          <Share />
        </div>
      </section>

      <section className="bg-gray-900 text-white py-24">
        <div className="container mx-auto text-center space-y-8 px-4">
          <h2 className="text-4xl font-bold">THE VALUE OF EXPERIENCE</h2>
          <p className="text-xl max-w-2xl mx-auto">Relax... You're with us! We make your travel simple, memorable, and extraordinary.</p>
          <Link to="/start-planning" className="inline-block">
            <Button type="primary" className="text-xl px-8 py-4 h-auto flex items-center gap-2">
              <MdExplore className="text-2xl" /> START PLANNING
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Main;
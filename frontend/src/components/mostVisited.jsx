import React from 'react';
import { Carousel } from 'antd';

const popularPlaces = [
  {
    location: 'Bali, Indonesia',
    image: 'https://wallpapers.com/images/featured/bali-qhidusvhukn25lb1.jpg',
    description: 'Bali is known for its beautiful beaches, vibrant culture, and lush rice terraces. A perfect destination for relaxation, adventure, and spiritual discovery, Bali offers a unique blend of natural beauty and rich traditions.',
  },
  {
    location: 'Machu Picchu, Peru',
    image: 'https://content.r9cdn.net/rimg/simg/2048/45618.jpg?width=1366&height=768&xhint=1020&yhint=831&crop=true',
    description: 'Machu Picchu is one of the most iconic archaeological sites in the world. Nestled high in the Andes Mountains, this ancient Incan city offers breathtaking views and a deep sense of history and mystery for travelers.',
  },
  {
    location: 'Venice, Italy',
    image: 'https://wallpapercave.com/wp/wp3965011.jpg',
    description: 'Venice is a charming city built on canals, offering travelers romantic gondola rides, historic architecture, and picturesque views. A must-visit destination for art lovers, history enthusiasts, and those seeking a one-of-a-kind travel experience.',
  },
  {
    location: 'Grand Canyon, USA',
    image: 'https://c4.wallpaperflare.com/wallpaper/424/956/842/aerial-photography-of-brown-cliff-and-river-under-blue-cloudy-sky-wallpaper-preview.jpg',
    description: 'The Grand Canyon is a natural wonder, offering breathtaking views, hiking opportunities, and outdoor adventures. Its immense size and stunning rock formations make it a favorite destination for nature lovers and adventurers alike.',
  },
  {
    location: 'Sydney, Australia',
    image: 'https://images.unsplash.com/photo-1493375366763-3ed5e0e6d8ec?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXVzdHJhbGlhfGVufDB8fDB8fHww',
    description: 'Sydney is known for its iconic Opera House, beautiful harbor, and vibrant city life. Travelers can explore beaches, enjoy world-class dining, and experience the rich cultural scene in this dynamic Australian city.',
  },
  {
    location: 'Santorini, Greece',
    image: 'https://travelwandergrow.com/wp-content/uploads/2018/01/AdobeStock_264773707-scaled.jpeg',
    description: 'Santorini is famous for its whitewashed buildings, blue domes, and stunning sunsets. Travelers flock to this beautiful island for its breathtaking views, luxury resorts, and a perfect mix of relaxation and adventure.',
  },
];

const MostVisitedPlace = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Most Popular Destinations</h2>
      <Carousel
        arrows
   
        dots={false}
        infinite
        autoplay
        className="relative"
      >
        {popularPlaces.map((place, index) => (
          <div key={index} className="px-2">
            <div className="relative h-[70vh] rounded-lg overflow-hidden shadow-lg">
              <img
                src={place.image}
                alt={place.location}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{place.location}</h3>
                <p className="text-sm mb-4 line-clamp-3">{place.description}</p>
                <button className="bg-white text-black py-2 px-4 rounded-full hover:bg-opacity-80 transition duration-300 self-start">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MostVisitedPlace;
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Blog = () => {
  const blogs = [
    {
      title: 'Exploring the World',
      description: 'Discover new places and adventures in every corner of the globe.',
      image: 'https://via.placeholder.com/400x200',
      link: '/article/1'
    },
    {
      title: 'Healthy Eating Tips',
      description: 'Learn how to stay healthy with easy-to-follow tips and recipes.',
      image: 'https://via.placeholder.com/400x200',
      link: '/article/2'
    },
    {
      title: 'Fitness for Everyone',
      description: 'Get started with fitness, no matter your skill level.',
      image: 'https://via.placeholder.com/400x200',
      link: '/article/3'
    },
    {
      title: 'Mental Wellness',
      description: 'Discover strategies to improve your mental health and wellbeing.',
      image: 'https://via.placeholder.com/400x200',
      link: '/article/4'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />

      <main className="flex-grow pt-40 bg-gray-100 py-10">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-10">Latest Articles</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {blogs.map((blog, index) => (
              <article key={index} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex flex-col gap-3">
                  <h3 className="text-xl font-semibold text-gray-800">{blog.title}</h3>
                  <p className="text-gray-600">{blog.description}</p>
                  <Link 
                    to='/blog/readmore' 
                    className="mt-auto text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    Read More
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;

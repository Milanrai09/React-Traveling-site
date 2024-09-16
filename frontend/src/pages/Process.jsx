import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

const Process = () => {
  return (
    <div>
      <Header />
      <div>
        <div className='bg-sky-200 py-9'>
          <section className="mb-8 text-center pt-20">
            <h1 className="text-4xl font-bold text-gray-800">Welcome to MyWebsite</h1>
            <p className="text-gray-600 mt-4">
              This is where we share all the amazing content you need.
            </p>
          </section>

          <h1 className='text-center mb-9'>PACKAGES</h1>
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 px-9 text-white">
            <Link to='/how-it-works/package'>
              <div className="bg-white shadow-md rounded-lg p-6 bg-[url('https://wallpapers.com/images/hd/beautiful-travel-2560-x-1703-wallpaper-gxkaxl0zmx9lpup4.jpg')] bg-cover bg-center h-[200px]">
                <h2 className="text-2xl font-semibold mb-4">CHARMING</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan tortor.
                </p>
                <h3>FROM $2500 PER PERSON</h3>
              </div>
            </Link>

            <Link to='/how-it-works/package'>
              <div className="bg-white shadow-md rounded-lg p-6 bg-[url('https://wallpapers.com/images/hd/beautiful-travel-2560-x-1703-wallpaper-gxkaxl0zmx9lpup4.jpg')] bg-cover bg-center h-[200px]">
                <h2 className="text-2xl font-semibold mb-4">PREMIER</h2>
                <p>
                  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                </p>
                <h3>FROM $3500 PER PERSON</h3>
              </div>
            </Link>

            <Link to='/how-it-works/package'>
              <div className="bg-white shadow-md rounded-lg p-6 bg-[url('https://wallpapers.com/images/hd/beautiful-travel-2560-x-1703-wallpaper-gxkaxl0zmx9lpup4.jpg')] bg-cover bg-center h-[200px]">
                <h2 className="text-2xl font-semibold mb-4">DELUXE</h2>
                <p>
                  Donec vehicula cursus vestibulum. Praesent auctor malesuada justo, sit amet cursus nulla.
                </p>
                <h3>FROM $4500 PER PERSON</h3>
              </div>
            </Link>

            <Link to='/how-it-works/package'>
              <div className="bg-white shadow-md rounded-lg p-6 bg-[url('https://wallpapers.com/images/hd/beautiful-travel-2560-x-1703-wallpaper-gxkaxl0zmx9lpup4.jpg')] bg-cover bg-center h-[200px]">
                <h2 className="text-2xl font-semibold mb-4">ULTRA DELUXE</h2>
                <p>
                  Donec vehicula cursus vestibulum. Praesent auctor malesuada justo, sit amet cursus nulla.
                </p>
                <h3>FROM $5500 PER PERSON</h3>
              </div>
            </Link>

            <Link to='/how-it-works/package'>
              <div className="bg-white shadow-md rounded-lg p-6 bg-[url('https://wallpapers.com/images/hd/beautiful-travel-2560-x-1703-wallpaper-gxkaxl0zmx9lpup4.jpg')] bg-cover bg-center h-[200px]">
                <h2 className="text-2xl font-semibold mb-4">PRESIDENTIAL</h2>
                <p>
                  Donec vehicula cursus vestibulum. Praesent auctor malesuada justo, sit amet cursus nulla.
                </p>
                <h3>FROM $7500 PER PERSON</h3>
              </div>
            </Link>

            <Link to='/how-it-works/package'>
              <div className="bg-white shadow-md rounded-lg p-6 bg-[url('https://wallpapers.com/images/hd/beautiful-travel-2560-x-1703-wallpaper-gxkaxl0zmx9lpup4.jpg')] bg-cover bg-center h-[200px]">
                <h2 className="text-2xl font-semibold mb-4">CUSTOM</h2>
                <p>
                  Donec vehicula cursus vestibulum. Praesent auctor malesuada justo, sit amet cursus nulla.
                </p>
                <h3>FROM $10000 PER PERSON</h3>
              </div>
            </Link>
          </section>
        </div>

        <div className='bg-sky-400 py-9'>
          <h1 className='text-center py-9'>SELECT BY REGION</h1>
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 px-9 text-gray-700">

            <div className="bg-white shadow-md rounded-lg p-6 bg-[url('https://i.pinimg.com/736x/14/3b/36/143b367d82c51337979c0bea82c9edc9.jpg')] bg-cover bg-center h-[200px] flex justify-center items-center">
            <Link to='/how-it-works/byregion'>
              <h2 className="text-2xl font-semibold mb-4">EUROPE</h2>
            </Link>
            </div>

            <Link to='/how-it-works/byregion'>
            <div className="bg-white shadow-md rounded-lg p-6 bg-[url('https://i.pinimg.com/736x/72/1b/41/721b413247a6049a6b2203b282e32704.jpg')] bg-cover bg-center h-[200px] flex justify-center items-center">
              <h2 className="text-2xl font-semibold mb-4">EAST ASIA</h2>
            </div>
            </Link>


            <Link to='/how-it-works/byregion'>
            <div className="bg-white shadow-md rounded-lg p-6 bg-[url('https://i.pinimg.com/originals/f3/69/9f/f3699f3024e4933913f6d8f635de7068.jpg')] bg-cover bg-center h-[200px] flex justify-center items-center">
              <h2 className="text-2xl font-semibold mb-4">SOUTH EAST ASIA</h2>
            </div>
            </Link>

            <Link to='/how-it-works/byregion'>
            <div className="bg-white shadow-md rounded-lg p-6 bg-[url('https://i.pinimg.com/originals/09/e4/ca/09e4caf4c84f3ac58c4f9c3944a528b3.gif')] bg-cover bg-center h-[200px] flex justify-center items-center">
              <h2 className="text-2xl font-semibold mb-4">SOUTH AMERICA</h2>
            </div>
            </Link>

          </section>
        </div>

        <div className='bg-sky-300'>
          <div className='p-9'>
            <h1 className='text-4xl text-white' >From The Blog</h1>
            <Link to="/start-planning">
              <div>
                <img className='my-3' src="https://www.bargeladycruises.com/wp-content/uploads/2018/10/say-cheers-feature-blog.jpg" alt="" />
                <div className='text-2xl text-white'>
                  <h1>How to Say Cheers like the French</h1>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className='bg-sky-900'>
          <div className='flex flex-col lg:flex-row'>
            <img src="https://media.istockphoto.com/id/1413873774/photo/business-team-portrait.jpg?s=612x612&w=0&k=20&c=OHUc90dYEltDCewDAcq1YZy3HSAGT0jB9suKME7Pg1w=" alt="" className='min-h-20' />
            <div className='p-9 text-center'>
              <div className='mb-20'>
                <h1 className='text-2xl mb-4'>About the Team</h1>
                As leaders with longevity in the barging industry since 1985, our greatest pleasure is using our unparalleled expertise, educated insights. Our top team collectively boasts over nine decades of experience in the worlds of travel planning, luxury hospitality, and culinary tourism. We look forward to helping you Go Beyond the present!
              </div>
              <Link to="/start-planning" className="hover:text-gray-300"><Button type="primary" className='text-2xl p-9'>MEET THE TEAM</Button></Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Process;

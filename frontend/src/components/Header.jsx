import { useState } from 'react';
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Button } from 'antd';
import Menu from './Menu';
import { CiMenuFries } from "react-icons/ci";

const Header = () => {
  const [size, setSize] = useState('medium');
  const [menu, setMenu] = useState(false)

  return (
    <header className="  bg-blue-600 text-white shadow-md md:text-sm fixed  w-screen z-10  ">
      <div className="  flex justify-between items-center py-4 px-10 gap-3">
        
        {/* Left: Logo */}
        <Link to="/" className="hover:text-gray-300"> <div className=""><img className='h-9' src="https://media.istockphoto.com/id/1461138981/vector/airplane-with-emblem-vintage-logo-vector-cloud-and-sun-template-illustration-design-travel.jpg?s=612x612&w=0&k=20&c=H9cAWfj6JFvVZ8aOrkWLxsgLV03IqMyOffxnwGTFd_8=" alt="" /></div></Link>

       

        {/* Center: Navigation Menu */}
        <nav className="hidden lg:flex space-x-8 ">
        <Link to="/how-it-works" className="hover:text-gray-300">HOW IT WORKS</Link>
        <Link to="/start-planning" className="hover:text-gray-300">START PLANNING</Link>
        <Link to="/blog" className="hover:text-gray-300">BLOG</Link>
        <Link to="/about" className="hover:text-gray-300">ABOUT</Link>
        <Link to="/contact" className="hover:text-gray-300">CONTACT</Link>
        </nav>


        <div className="hidden lg:flex gap-2">

        <Link to="/login" className="hover:text-gray-300">  
            <Button type="primary" size={size}>
                Login
            </Button></Link>


        <Link to="/sign-up" className="hover:text-gray-300">
            <Button type="primary" size={size}>
                Signup
              </Button>
        </Link>

        </div>

        {/* Mobile Menu Icon (Visible only on small screens) */}
        <div className='lg:hidden z-99'>
          {menu?<Menu/>:''}
          
        </div>

 


        <div onClick={() => setMenu(!menu)} className='z-50 lg:hidden text-xl' >
            {menu ? <IoClose /> : <CiMenuFries />}
          </div>

      </div>
    </header>
  );
};

export default Header;

import { useState } from 'react';
import { Link } from "react-router-dom";
import { Button } from 'antd';

const Menu = () => {
    const [size, setSize] = useState('medium');

  return (
    <div className=''>        

        <nav className="flex  flex-col absolute gap-y-9 bg-gray-800 w-96 h-screen top-0 right-0 p-20 items-center ">
            <Link to="/how-it-works" className="hover:text-gray-300">HOW IT WORKS</Link>
            <Link to="/start-planning" className="hover:text-gray-300">START PLANNING</Link>
            <Link to="/blog" className="hover:text-gray-300">BLOG</Link>
            <Link to="/about" className="hover:text-gray-300">ABOUT</Link>
            <Link to="/contact" className="hover:text-gray-300">CONTACT</Link>
            <Link to="/login" className="hover:text-gray-300">  
            <Button type="primary" size={size}>
                Login
            </Button></Link>
            <Link to="/sign-up" className="hover:text-gray-300">
            <Button type="primary" size={size}>
                Signup
              </Button>
            </Link>
        </nav>






    </div>
  )
}

export default Menu

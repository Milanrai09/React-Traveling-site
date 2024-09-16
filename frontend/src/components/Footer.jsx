import React from 'react';
import { FaFacebookF, FaGoogle, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const FooterSection = ({ title, children }) => (
  <div className="mb-8 md:mb-0">
    <h3 className="text-lg font-semibold mb-4">{title}</h3>
    {children}
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FooterSection title="GET IN TOUCH">
            <p>Peredrift</p>
            <p>65 West 54th Street,</p>
            <p>New York, NY 10019</p>
            <div className="mt-4">
              <h4 className="font-semibold">Support Phone</h4>
              <p>212.246.5055</p>
            </div>
            <div className="mt-4">
              <h4 className="font-semibold">Email: meilanrai19@gmail.com</h4>
              <p>Response time usually 4 hours</p>
            </div>
          </FooterSection>

          <FooterSection title="ABOUT US">
            <ul className="space-y-2">
              {['How it Works', 'Start Planning', 'About Us', 'Blog', 'Reviews', 'Trip Inspiration', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-indigo-400 transition duration-300">{item}</a>
                </li>
              ))}
            </ul>
          </FooterSection>

          <FooterSection title="FROM THE BLOG">
            <ul className="space-y-2">
              {['Travelling Guide', 'Planning Your Trip', 'Product Guides', 'Guest Posts', 'Destinations', 'Tours', 'Webinars'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-indigo-400 transition duration-300">{item}</a>
                </li>
              ))}
            </ul>
          </FooterSection>

          <FooterSection title="GET SOCIAL">
            <p className="mb-4">Keep up to date with all the latest and breaking social media news. There are a lot of exciting things happening this year.</p>
            <div className="flex space-x-4">
              {[FaFacebookF, FaGoogle, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, index) => (
                <a key={index} href="#" className="hover:text-indigo-400 transition duration-300">
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </FooterSection>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <img src="/logo.png" alt="Logo" className="h-8" /> {/* Replace with your actual logo */}
          </div>
          <div className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Peredrift. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
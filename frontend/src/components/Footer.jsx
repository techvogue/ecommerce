import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white mt-40 text-sm text-gray-600 px-4 sm:px-[4vw] ms:px-[6vw] lg:px-[8vw]">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10">
        {/* Company Description */}
        <div>
          <img 
            src={assets.logo} 
            alt="Great Stack Logo" 
            className="mb-5 w-32" 
          />
          <p className="w-full md:w-2/3">
          At Urbanstich, we are redefining modern urban wear with a focus on style, comfort, and quality. Every piece we create is thoughtfully designed to complement your lifestyle, empowering you to express yourself with confidence.
          </p>
        </div>

        {/* Links Section */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/about" className="hover:underline">About us</Link></li>
            <li><p>Delivery</p> </li>
            <li><p>Privacy Policy</p> </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1">
            <li>+1-000-000-0000</li>
            <li>UrbanStich@gmail.com</li>
            <li>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:underline"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center text-gray-500">
          &copy; 2025 UrbanStich - All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  
  return (
    <div className="w-full h-[93vh] md:h-[91vh] flex items-center justify-center bg-gray-100 relative overflow-hidden">
      {/* Green Background Circle (Properly Positioned & Bigger) */}
      <div className="absolute top-[40%] left-[55%] -translate-x-1/2 -translate-y-1/2 bg-green-200 rounded-full w-[480px] h-[480px] md:w-[550px] md:h-[550px]"></div>



      {/* Main Content Box (Now Full Width for Proper Centering) */}
      <div className="  relative w-full h-full  px-8  flex flex-col sm:flex-row items-center justify-between ">

        {/* Text Section */}
        <div className=" mt-20 sm:mt-0  sm:w-2/5 text-center md:text-left md:ml-28 z-5 ">
          {/* Discount Badge */}
          <div className="bg-black  text-white px-4 py-2 flex items-center justify-center rounded w-36 h-12 text-sm sm:text-md mx-auto md:ml-4 ">
            <span className="text-xl sm:text-xxl">20%</span>
            <span className="text-base sm:text-lg ml-1">OFF</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-7xl sm:text-9xl font-medium text-gray-800 mt-2 sm:mt-2 lg:mt-3 leading-tight">
            Spring
          </h1>

          {/* Subheading */}
          <h2 className="text-4xl sm:text-5xl font-medium text-gray-600 mt-3 pl-3">
            Season Festival
          </h2>

          {/* Tagline */}
          <p className="text-yellow-500  text-lg sm:text-xl mt-5 md:mt-3 font-medium tracking-wide pl-3">
            CATALOGUE 2025
          </p>
        </div>


        {/* Image Section */}
        <div className=" sm:w-3/5 h-full flex justify-center items-end sm:mt-20 sm:p-1">
          <img
            src={assets.hero_img}
            alt="Fashion Model"
            className="w-fulldrop-shadow-lg"
          />
        </div>

      </div>

      {/* Limited Offer Text */}
      {/* Limited Offer Section */}
      <div className="absolute top-[15%] right-[3%] text-end p-4  bg-opacity-80 shado  hidden md:block">
        <p className="Rubik text-3xl sm:text-4xl font-semibold leading-tight tracking-wide">
          Limited
        </p>
        <p className="Rubik text-3xl sm:text-4xl font-medium leading-tight tracking-wide">
          Time
        </p>
        <p className="Rubik text-3xl sm:text-4xl font-medium leading-tight tracking-wide">
          Offer
        </p>
        <p className="text-sm sm:text-md font-normal pt-2 uppercase tracking-wider">
          GET THE OFFER
        </p>
      </div>



      {/* 🔥 Continuous Marquee Section */}
      <div className="absolute bottom-0 w-full overflow-hidden bg-black text-white text-xl p-5">
        <div className="marquee">
          <div className="track font-bold flex space-x-8 animate-marquee">
            <span>Calvin Klein</span>
            <span>Versace</span>
            <span className="font-bold">Prada</span>
            <span>Zara</span>
            <span>Gucci</span>
            {/* Duplicated for smooth animation */}
            <span>Calvin Klein</span>
            <span>Versace</span>
            <span className="font-bold">Prada</span>
            <span>Zara</span>
            <span>Gucci</span>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Hero;

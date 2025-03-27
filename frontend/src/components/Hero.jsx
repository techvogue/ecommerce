import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="relative min-h-[88vh] flex flex-col bg-white text-black overflow-hidden ">

      {/* Centered Top Heading */}
      <div className="z-10 w-full text-center pt-12 px-4">
        <h1 className="text-6xl md:text-7xl font-bold leading-tight">
          DISCOVER CLOTHES
          <br />
          UNIQUE STYLE
        </h1>
      </div>

      {/* Paragraph + Button at Bottom Right */}
      <div className="absolute bottom-24 mr-10 px-8 md:right-2 max-w-xs text-justify  z-10 text-xl ">
        <p className="text-lg  mb-4">
          Explore a curated collection of clothing designed to complement your
          personal style and elevate your everyday look.
        </p>
        <button className="inline-block px-6 py-2 right-0 bg-black text-white rounded-full">Shop Now</button>
       
          
        
      </div>

      {/* Stats Section - Bottom Left */}
      <div className="absolute bottom-24 left-0 md:left-2 text-left z-10 text-xl pl-12">
        <p className="text-3xl font-bold">200+</p>
        <p>International Brands</p>
        
        <p className="text-2xl font-bold mt-4">2K+</p>
        <p>High-Quality Products</p>
       
        <p className="text-2xl font-bold mt-4">30K+</p>
        <p>Happy Customers</p>
      </div>

      {/* Hero Image - Centered Bottom */}
      <div className="absolute inset-0 z-0 flex items-end justify-center">
        <img
          alt="Fashionable person wearing stylish clothes"
          className="w-full h-full object-contain"
          src={assets.hero_img}
        />
      </div>

      {/* Brand Names at Bottom */}
      <div className="absolute bottom-0 w-full flex justify-center space-x-32 p-4 bg-black text-white z-10 text-xl">

        <span>Calvin Klein</span>
        <span>Versace</span>
        <span className="font-bold">Prada</span>
        <span>Zara</span>
        <span>Gucci</span>
      </div>
    </div>
  );
};

export default Hero;

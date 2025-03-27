import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewLetterBox from '../components/NewLetterBox';

function About() {
  return (

    < div className='px-4 sm:px-[4vw] ms:px-[6vw] lg:px-[8vw]'>
      <hr />
      <header className="text-center mt-10 text-3xl mb-12">
        <Title text1={'ABOUT'} text2={'UrbanStich'} />
        <p className="text-xl sm:text-xl font-light text-gray-600 ">
          Where modern fashion meets timeless elegance.
        </p>
      </header>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className="w-full md:max-w-[450px]" src={assets.about_img} alt="Modern fashion with elegance" />
        <div className="flex sm:text-lg flex-col justify-center gap-4 md:w-2/4 text-gray-600">
          <p>
            At <strong className="font-semibold text-gray-700">Urbanstich</strong>, we believe fashion is an expression of individuality and confidence. We combine modern trends with timeless elegance to create pieces that are both bold and sophisticated.
          </p>
          <p>
            From casual outings to special events, our curated collections offer a perfect balance of contemporary style and classic charm, designed for those who want to stand out while embracing grace.
          </p >
          <div className='pt-4'>
            <div className='p-0 text-xl m-0'>
            <Title text1={'OUR'} text2={'MISSION'} />
          
          </div>

            <p className='pt-0 mt-0'>
              At <strong className="font-semibold text-gray-900">Urbanstich</strong>, our mission is simple: to deliver high-quality, versatile pieces that inspire confidence, embrace the dynamic energy of urban life, and celebrate timeless elegance in every detail.
            </p>
          </div>

        </div>

       
      </div>
    
    </div>
  );
}

export default About;

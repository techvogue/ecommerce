import React from 'react';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import NewLetterBox from '../components/NewLetterBox';

function Contact() {
  return (
<>

    <hr />
    <div className="contact-us-page px-6 sm:px-20 pt-16 text-gray-800">
      {/* Header Section */}

      <header className="text-center mb-12">
       
        <div className='text-3xl'>
          <Title text1={'CONTACT'} text2={'US'}/>
        </div>
        
      </header>

      {/* Main Contact Section */}
      <section className="flex flex-col md:flex-row items-center gap-16">
        {/* Image Section */}
        <div className="flex-1">
          <img
            src={assets.contact_img} // Replace with your image URL
            alt="Contact us"
            className="w-full max-w-md mx-auto rounded-sm shadow-lg"
          />
        </div>

        {/* Contact Info Section */}
        <div className="flex-1 text-gray-600">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Address</h2>
          <p>
            Urbanstich<br />
            42, Fashion Street, MG Road<br />
            Bangalore, Karnataka 560001<br />
            India
          </p>

          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Contact Email</h2>
            <p>
              <a
                href="mailto:help@urbanstich.com"
                className="text-gray-600 hover:text-gray-800"
              >
                help@urbanstich.com
              </a>
            </p>
          </div>

          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Contact Number</h2>
            <p>
              <a
                href="tel:+919876543210"
                className="text-gray-600 hover:text-gray-800"
              >
                +91 12345 43210
              </a>
            </p>
          </div>
        </div>
      </section>

     <div className='mt-28 mb-0'>
     <NewLetterBox/>
     </div>
     
    </div>
    </>
  );
}

export default Contact;

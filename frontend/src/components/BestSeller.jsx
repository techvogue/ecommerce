import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  // console.log(products);
  const [BestSeller, setBestSeller] = useState([]);
   
   
  useEffect(() => {
    const bestProduct = products.filter((item) => (item.bestseller));
    setBestSeller(bestProduct.slice(0, 5)); 
  }, [products]);

  return (
    <div>
      <div className='my-10 px-4 sm:px-[4vw] ms:px-[6vw] lg:px-[8vw]'>
        <div className='text-center text-3xl py-8'>
          <Title text1={'BEST'} text2={'SELLERS'} />
          <p className='w-3/4 m-auto text-xs sm:text-sm ms:text-base text-gray-600'>
            Timeless Excellence: Explore Our Bestsellers, Curated for the Discerning Fashion Lover.
          </p>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
          {BestSeller.map((item, index) => (
            <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSeller;

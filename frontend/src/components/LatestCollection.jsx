
import React, {useState, useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

// const {products}=useContext(ShopContext);
const LatestCollection = () => {
    const {products}=useContext(ShopContext);
   const [latesProducts,setLatestProducts]=useState([]);
   useEffect(()=>{
            setLatestProducts(products.slice(0,10));
   },[products])
  return (
    <div className='my-10 px-4 sm:px-[4vw] ms:px-[6vw] lg:px-[8vw]'>
       <div className='text-center py-8 text-3xl'>
       <Title text1={'LATEST'} text2={'COLLECTION'}/>
       <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Where Elegance Meets Innovation: Discover the Essence of Style in Our Latest Collection.</p>
       </div>
   {/* Rendering product */}
     <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
            latesProducts.map((item,index)=>(
                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
            ))
        }
     </div>
    </div>
  )
}

export default LatestCollection 
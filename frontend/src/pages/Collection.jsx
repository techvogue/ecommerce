import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets'; // Make sure you import the correct assets
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

function Collection() {
  const { products,search,showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category,setCategory]=useState([]);
  const [subCategory,setSubCategory]=useState([]);
  const [sortType,setSortType]=useState('relevent');


  // important to understand below logic
  const toggleCategory=(e)=>{
    if (category.includes(e.target.value)) {
      setCategory(prev=>prev.filter(item=>item!==e.target.value))
    }
    else{
      setCategory(prev=>[...prev,e.target.value])
    }
  }
  const toggleSubCategory=(e)=>{
    if (category.includes(e.target.value)) {
      setSubCategory(prev=>prev.filter(item=>item!==e.target.value))
    }
    else{
      setSubCategory(prev=>[...prev,e.target.value])
    }
  }

  const applyFilter=()=>
  {
    let productCopy=products.slice();
    if (showSearch && search) {
      productCopy=productCopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase())) 
    }
    if (category.length>0) {
      productCopy=productCopy.filter(item=>category.includes(item.category))
    }
    if (subCategory.length>0) {
      productCopy=productCopy.filter(item=>subCategory.includes(item.subCategory))
    }
    setFilterProducts(productCopy);
  }
 const sortProduct=()=>{
  let filterProductsCopy=filterProducts.slice();
  switch (sortType) {
 
    case 'low-high':
       setFilterProducts(filterProductsCopy.sort((a,b)=>(a.price-b.price)));
      break;
    case 'high-low':
      setFilterProducts(filterProductsCopy.sort((a,b)=>(b.price-a.price)));
      break;
  
    default:
      applyFilter();
      break;
  }
 }
useEffect(()=>{
 applyFilter();
},[category,subCategory,search,showSearch,products])

useEffect(()=>{
 sortProduct();
 },[sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t px-4 sm:px-[4vw] ms:px-[6vw] lg:px-[8vw]">
      {/* Filter Options */}
      <div className="min-w-60">
        <p onClick={() => setShowFilter(!showFilter)} className="my-2 text-xl flex items-center cursor-pointer gap-2">
          FILTERS
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="Filter icon" />
        </p>
        <div className={`border sm:block border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'}`}>
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input onChange={toggleCategory} className="w-3" type="checkbox" value={'Men'} /> Men
            </p>
            <p className="flex gap-2">
              <input onChange={toggleCategory} className="w-3" type="checkbox" value={'Women'} /> Women
            </p>
            <p className="flex gap-2">
              <input onChange={toggleCategory} className="w-3" type="checkbox" value={'Kids'} /> Kids
            </p>
          </div>
        </div>

        {/* SubCategories Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 sm:block ${showFilter ? '' : 'hidden'}`}>
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input onChange={toggleSubCategory}  className="w-3" type="checkbox" value={'Topwear'} /> Topwear
            </p>
            <p className="flex gap-2">
              <input onChange={toggleSubCategory}  className="w-3" type="checkbox" value={'Bottomwear'} /> Bottomwear
            </p>
            <p className="flex gap-2">
              <input onChange={toggleSubCategory} className="w-3" type="checkbox" value={'Winterwear'} /> Winterwear
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={'All'} text2={'COLLECTIONS'} />
          <select onChange={(e)=>setSortType(e.target.value)} className="border-2 border-gray-300 text-sm px-2">
            <option value="relavent">Sort by: Relavent</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Grid for Products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts && filterProducts.length > 0 ? (
            filterProducts.map((item, index) => (
              <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image}/>
            ))
          ) : (
            <p>No products available.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Collection;

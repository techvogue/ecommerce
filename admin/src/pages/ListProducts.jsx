import axios from "axios";
import React, { useEffect, useState } from "react";
import { backendUrl, currency } from "../App";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ListProducts = ({ token }) => {
  const [listProduct, setListProduct] = useState([]);

  const fetchListProducts = async () => {
    try {
      const res = await axios.get(backendUrl + "/api/product/list");
      console.log(res.data);

      if (res.data.success) {
        setListProduct(res.data.products);
      } else {
        toast.error("Invalid product list received");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchListProducts();
  }, []);

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(
        backendUrl + '/api/product/remove',
        { id },
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success(response.data.message); // Corrected from res to response
        await fetchListProducts(); // Refresh the product list
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <>
      <p className='mb-2 font-semibold text-lg'>All Products List</p>

      <div className="flex flex-col gap-2 mr-5">
        {/* Header Row (hidden on mobile) */}
        <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border border-gray-400 bg-gray-100 text-sm font-semibold'>
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className='text-center'>Action</b>
        </div>

        {Array.isArray(listProduct) &&
          listProduct.map((product) => (
            <div
              key={product._id}
              className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border border-gray-200 text-sm'
            >
              <img className='w-12' src={product.image?.[0]} alt={product.name} />
              <p>{product.name}</p>
              <p>{product.category}</p>
              <p>{currency}{product.price}</p>
              <p onClick={() => removeProduct(product._id)} className='text-right md:text-center cursor-pointer text-lg'>X</p>
            </div>
          ))}
      </div>

      <ToastContainer />
    </>
  );
};

export default ListProducts;
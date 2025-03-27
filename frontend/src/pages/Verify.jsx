import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

import { backendUrl } from "../../../admin/src/App";

const Verify = () => {
  const { navigate, token, setCartItems, serverURL } = useContext(ShopContext);
  const [searchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");

  const verifyPayment = async () => {
    try {
      if (!token) {
        return null;
      }

      const res = await axios.post(
        backendUrl + "/api/order/verifyStripe",
        { success, orderId },
        { headers: { token } }
      );

      if (res.data.success) {
        setCartItems({});
        navigate('/orders')
      }
      else{
        navigate('/cart')
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    verifyPayment();
  }, [token]);


  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <div className='verify w-12 h-12 rounded-full border-2 border-gray-700'>
        <div className=' h-2 w-2 rounded-full border-none bg-red-700'></div>
      </div>
    </div>
  );
};

export default Verify;

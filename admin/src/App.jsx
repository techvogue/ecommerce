import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddProduct from "./pages/AddProduct";
import ListProducts from "./pages/ListProducts";
import OrdersProduct from "./pages/OrdersProduct";
import Sidebar from "./components/Sidebar";
import Login from "./components/Login";
import { ToastContainer,  } from 'react-toastify';
export const backendUrl=import.meta.env.VITE_BACKEND_URL;



export const currency ='₹';
const App = () => {
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);
  return (
    <div className='min-h-screen w-full bg-gray-50'>
      <ToastContainer/>
      {token ===""?<Login setToken={setToken} />: (
        <>
          
          <Navbar setToken={setToken} />
          <hr />
          <div className='flex w-full  gap-10 '>
            <Sidebar />
            <div className='py-5 w-full'>
              <Routes>
              
                <Route
                  path='/add-product'
                  element={<AddProduct token={token} />}
                />
                <Route path='/list-products' element={<ListProducts token={token} />} />
                <Route
                  path='/orders'
                  element={<OrdersProduct token={token} />}
                />
              </Routes>
            </div>
          </div>
        </>
      ) }
    </div>
  );
};

export default App;

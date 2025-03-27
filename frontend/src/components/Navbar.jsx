import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";
import { NavLink,Link } from "react-router-dom";
function Navbar() {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

const logout=()=>{
  navigate('/login')
  localStorage.removeItem('token')
  setToken('')
  setCartItems({})
  toast.success("log out successful")
 
}

  return (
    <div className="flex items-center justify-between py-3   font-medium px-4 sm:px-[4vw] ms:px-[6vw] lg:px-[8vw] bg-gray-200 ">
      <Link to="/">
        <img src={assets.logo} className="w-36" alt="" />
      </Link>
      <ul className="hidden sm:flex gap-5 text-md text-gray-700">
        <NavLink to="/" className={"flex flex-col items-center gap-1"}>
          <p>Home</p>
          <hr className="w-3/5 border-none h-[2px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink
          to="/collection"
          className={"flex flex-col items-center gap-1"}
        >
          <p>Collection</p>
          <hr className="w-3/5 border-none h-[2px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className={"flex flex-col items-center gap-1"}>
          <p>About</p>
          <hr className="w-3/5 border-none h-[2px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className={"flex flex-col items-center gap-1"}>
          <p>Contact</p>
          <hr className="w-3/5 border-none h-[2px] bg-gray-700 hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-6">
        <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className="w-5 cursor-pointer" alt="" />
        <div className="group relative">
         
          <img
          onClick={()=>token?null:navigate('login')}
            src={assets.profile_icon}
            className="w-5 cursor-pointer"
            alt=""
          />
                
        { token&& <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4 z-20 ">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My profile</p>
              <p onClick={() => navigate('/Orders')}className="cursor-pointer hover:text-black">Orders</p>
              <p onClick={logout} className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>}
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt=""
        />
      </div>
      {/* sidebar menu for small screeen */}
      <div
        className={`absolute z-30 top-0 bottom-0 right-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex item-center gap-4 p-3 cursor-pointer"
          >
            <img
              className="h-4 rotate-180 mt-1"
              src={assets.dropdown_icon}
              alt=""
            />
            <p className="text-center vert">Back</p>
          </div>
          <div className="flex flex-col gap-5 text-2xl font-medium ">
            <NavLink
              onClick={() => setVisible(false)}
              to="/"
              className={"flex flex-col items-center gap-1 p-2"}
            >
              Home
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              to="/collection"
              className={"flex flex-col items-center gap-1 p-2"}
            >
              Collection
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              to="/about"
              className={"flex flex-col items-center gap-1 p-2"}
            >
              About
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              to="contact"
              className={"flex flex-col items-center gap-1 p-2"}
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

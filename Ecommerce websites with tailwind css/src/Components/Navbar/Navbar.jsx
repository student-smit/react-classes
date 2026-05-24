// import React from 'react'
// import logo from "../../assets/images/logo.jpg"
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";


const Navbar = () => {
  return (
    <div className="shadow-md bg-white
    duration-200 relative z-40" >
        {/* upper navbar  */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between
        items-center">
            <div className="w-24 ml-5" >
                <a className="font-bold text-2xl
                sm:text-3xl flex gap-2"  href="#">
               < img src="src/assets/images/logo.png" alt="logo" className="w-10 uppercase" />
               shopsy
                </a>
            </div>
         {/* search bar and order button  */}

         <div>
          <div className="relative group hidden sm:block">
            <input type="text" placeholder="search" className="w-[100px] 
             sm:w-[200px] group-hover:w-[300px] transition-all duration-300
              rounded-full border border-gray-300 px-2 py-1 focus:outline-none
               focus:border-1 focus:border-orange-400 " />
               <IoMdSearch className="text-gray-500
               group-hover:text-primary absolute
               top-0.5 translate-y-1/2 right-3" />
          </div>
         </div>

          {/* ordered button  */}
          <button onClick={() => alert("Ordering not available yet")}
            className="bg-gradient-to-r from-primary
            to-secondary transition-all duration-200
            text-white py-1 px-4 rounded-full flex items-center">
            <span className="group-hover:block hidden
            transition-all duration-200">
              Order
            </span>
            <FaCartShopping 
            className="text-xl text-white drop shadow-sm
            cursor-pointer" />
          </button>

        </div>
      </div>

      {/* lower navbar  */}
      <div></div>

    </div>
  )
}

export default Navbar

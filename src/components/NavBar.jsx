import React from 'react'
import { Link } from "react-router-dom"
import { FiSearch } from "react-icons/fi";
import { RiUserSmileLine } from "react-icons/ri";
import { AiOutlineLogout } from "react-icons/ai";

const NavBar = () => {
  return (
    <div className="absolute border-2 border-red-600  bg-gradient-to-b from-black flex justify-between || h-8 w-full || md:h-16">
        <div className="logo border-2 border-red-600 flex items-center">
            <img className="w-20  || md:ml-20 md:w-44" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />

        </div>
        <div className="tools flex justify-evenly  items-center border-2 border-red-600 || w-36  || md:w-60 md:mr-24">
         
        <FiSearch className="text-white || text-1xl || md:text-4xl" />
        <RiUserSmileLine className="text-white || text-1xl || md:text-4xl" />
        <AiOutlineLogout className="text-white || text-1xl || md:text-4xl"/>

        </div>
      </div>
  )
}

export default NavBar
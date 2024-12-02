import React from 'react'
import { Link } from "react-router-dom"
import { FiSearch } from "react-icons/fi";
import { RiUserSmileLine } from "react-icons/ri";
import { AiOutlineLogout } from "react-icons/ai";
import {useSelector, useDispatch} from "react-redux"
const NavBar = () => {
  const {user : currentUser, isLoading : userLoading, error : userError} = useSelector((state)=> state.userData)
  const userObj = JSON.parse(currentUser)
  return (
    <div className="absolute bg-gradient-to-b from-black via-black flex justify-between z-10 || h-8 w-full || md:h-24 ">
        <div className="logo  flex items-center">
            <img className="w-20  || md:ml-20 md:w-44" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />

        </div>
        <div className="tools flex justify-around  items-center  || w-48  || md:w-80 md:mr-24">
         
        
          <div className="text-white || text-1xl || md:text-3xl " >Hi, {userObj.name || userObj.displayName} </div>
          <FiSearch className="text-white || text-1xl || md:text-4xl " />
          <AiOutlineLogout className="text-white || text-1xl || md:text-4xl "/>

        </div>
      </div>
  )
}

export default NavBar
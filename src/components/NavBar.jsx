import React, {useState} from 'react'
import { useNavigate } from "react-router-dom"
import { FiSearch } from "react-icons/fi";
import { RiUserSmileLine } from "react-icons/ri";
import { AiOutlineLogout } from "react-icons/ai";
import {useSelector, useDispatch} from "react-redux"
import SearchModal from './SearchModal';
import { deleteCookie } from '../utils/cookie';

const NavBar = () => {
  const {user : currentUser, isLoading : userLoading, error : userError} = useSelector((state)=> state.userData)
  const userObj = JSON.parse(currentUser)
  const navigate = useNavigate()
  const [modal, setModal] = useState(false)

  const logout = () => {
    // delete the AT cookie and navigate to the signin page
    deleteCookie("at")
    window.location.reload()
     
  }
  return (
    <div className="fixed bg-gradient-to-b from-black via-black flex justify-between z-20 || h-8 w-full || md:h-24 ">
        <div className="logo  flex items-center">
            <img className="w-20  || md:ml-20 md:w-44" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />

        </div>
        <div className="tools flex justify-around  items-center  || w-48  || md:w-80 md:mr-24">
         
          <FiSearch className="text-white || text-1xl || md:text-4xl " onClick={()=> setModal(prev => !prev)}/>
          <div className="text-white || text-1xl || md:text-3xl " >Hi, {userObj.name || userObj.displayName} </div>
          <AiOutlineLogout className="text-white || text-1xl || md:text-4xl " onClick={logout}/>
          {modal && <SearchModal modal={modal} setModal={setModal}/>}
        </div>
      </div>
  )
}

export default NavBar
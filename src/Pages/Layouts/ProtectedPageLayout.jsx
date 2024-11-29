
import { Outlet, useNavigate } from 'react-router-dom'
import {getCookie, setCookie} from "../../utils/cookie"
import { useSelector, useDispatch } from 'react-redux'
import {validateToken} from "../../utils/slice/UserDataSlice"
import {useEffect} from "react"
const ProtectedPageLayout = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user : currentUser, isLoading, error} = useSelector((state)=> state.userData) 
  console.log("________PROTECTED PAGE RENDERING________")
  // encapsulating under useEffect because we have navigate   
  useEffect(()=>{
      console.log("🔴 checking user or at present or not")
    // if no current user is set, then
    if (!currentUser){
      // check if the AT is present in the cookie or not
      console.log("No Current User!!")
      const AT = getCookie('at') || ""
      if(!AT){
        console.log(" NOO AT")
        // if not, redirect to login page
        return navigate('/signin')
      }
      console.log(" AT PRESENT")
      // now validate the AT
      dispatch(validateToken(AT))

  }
    }, [])
    



  // console.log(currentUser ,error, isLoading)
  if(!isLoading && !error && currentUser){
    console.log(" User present", JSON.parse(currentUser))

    return (
      <div>
        <Outlet />
      </div>
    )
}
else{
  return(
    <h1>Loading...</h1>
  )
}

}

export default ProtectedPageLayout
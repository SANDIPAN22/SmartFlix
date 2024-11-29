
import {useGetNowPlayingMoviesQuery} from "../utils/slice/movieApiSlice"
import {useSelector, useDispatch} from "react-redux"
import NavBar from "../components/NavBar"
// import { useDispatch } from "react-redux"
const HomePage = () => {
  const {user : currentUser, isLoading : userLoading, error : userError} = useSelector((state)=> state.userData)
  const {data : movies, error, isLoading, refetch} = useGetNowPlayingMoviesQuery()
 console.log(currentUser)

  return (
    <>
      <NavBar/>
    </>
  )
}

export default HomePage
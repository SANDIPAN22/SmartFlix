import { useEffect } from "react"
import Loader from "./Loader"


const InfinitePosters = ({data, isFetching, setPage}) => {

  const handleScroll = () => {
    const totalHeight =  document.documentElement.scrollHeight
    const scrolledHeight =  document.documentElement.scrollTop
    const current = window.innerHeight

    if(scrolledHeight + current + 4  >= totalHeight) {
      
      setPage(prev => prev+ 1)
  }
}

  useEffect(()=>{
    window.addEventListener("scroll", handleScroll)
  }, [])


  return (
    <div className="flex gap-4 flex-wrap p-4 justify-evenly scrollbar scrollbar-thumb-red-600 scrollbar-track-black">
        {/* Add Poster Cards Here */}
        {data && data.map(poster =>{
          return (
            <div >
            <img className='max-w-[50px] md:max-w-[100px] lg:max-w-[150px]  xl:max-w-[200px]' src={`https://image.tmdb.org/t/p/w300${poster.poster_path}`} alt='movie poster' />
          
            </div>
          )
        } )}
        {isFetching && <Loader/>}
    </div>
  )
}

export default InfinitePosters
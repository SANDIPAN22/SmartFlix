import { IoMdPlay } from "react-icons/io";
import { FcLike } from "react-icons/fc";
const HeroMovieInfo = ({movieInfo}) => {

  const shortOverview = movieInfo?.overview.length > 200 ? `${movieInfo.overview.substring(0, 200)} ... See More` : movieInfo.overview

  return (

    <div className="Info Box text-white absolute z-10  mt-16 || md:ml-14 md:mt-32 || lg:w-2/5 lg:mt-60 lg:ml-20 pointer-events-none" >
      <div className="text-2xl p-2 font-bold || md:text-6xl  " >{movieInfo.title}</div>
      <div className="hidden || xl:block lg:text-2xl lg:p-2">{shortOverview || "It's great movie." }</div>
      <div className="flex gap-2 ml-2">
        <button type="button"className="mt-2 py-2 px-3 flex gap-1  bg-opacity-80 justify-evenly items-center bg-white text-black font-bold  lg:py-4  lg:px-10 lg:text-xl  rounded-lg hover:bg-opacity-100"> <IoMdPlay /> Play</button>
        <span className="mt-2 py-2 px-3 flex gap-1  bg-opacity-80 justify-evenly items-center bg-white text-black font-bold  lg:py-4  lg:px-10 lg:text-xl  rounded-lg hover:bg-opacity-100"><FcLike />{movieInfo.vote_average.toFixed(1)}</span>
      </div>
    </div>

  )
}

export default HeroMovieInfo
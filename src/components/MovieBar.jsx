import React from 'react'
import MovieCard from "./MovieCard"
import { FaExternalLinkAlt } from "react-icons/fa";
import {  useNavigate } from 'react-router-dom';

const MovieBar = ({data, topic}) => {
  const navigate = useNavigate()
  const pageRedirect = () => {
    if(topic === "Now Playing"){
      return navigate("/now_playing")
    }
    if(topic === "Top Rated"){
      return navigate("/top_rated")
    }
    if(topic === "Top Popular"){
      return navigate("/top_popular")
    }
    if(topic === "Upcoming Movies"){
      return navigate("/upcoming")
    }
  }
  return (
    
    <div className="Movie Bar ml-5 md:ml-10 ">
      <div className=' flex gap-4 items-center font-bold text-white mb-10 text-xl || md:text-3xl || lg:text-4xl' onClick={pageRedirect}>{topic} <FaExternalLinkAlt className='text-white text-xl'/></div>
      <div className='flex overflow-x-auto gap-2 mb-10  scrollbar scrollbar-thumb-red-600 scrollbar-track-black'>
        {data.map(elem=>{
          return (
            <MovieCard key={elem?.id} poster_id={elem?.poster_path}/>
          )
        })}
      </div>
    </div>
  )
}

export default MovieBar
import React from 'react'
import MovieCard from "./MovieCard"
const MovieBar = ({data, topic}) => {
  console.log("BBAARR", data)
  return (
    
    <div className="Movie Bar ml-5 md:ml-10 ">
      <div className='font-bold text-white mb-10 text-xl || md:text-3xl || lg:text-4xl'>{topic}</div>
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
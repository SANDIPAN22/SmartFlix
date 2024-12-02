import React from 'react'

const MovieCard = ({poster_id}) => {
  return (
    <div >
        <img className='min-w-[50px] md:min-w-[100px] lg:min-w-[150px]  xl:min-w-[200px]' src={`https://image.tmdb.org/t/p/w500${poster_id}`} alt='movie poster' />
      
    </div>
  )
}

export default MovieCard
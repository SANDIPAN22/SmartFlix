import React, { useEffect, useState } from 'react'
import {  useGetPopularMoviesQuery } from "../utils/slice/movieApiSlice"
import InfinitePosters from '../components/InfinitePosters'

const TopPopular = () => {
    const [page, setPage] = useState(1)
    const [totalData, setTotalData] = useState([])
    const {data, isFetching} = useGetPopularMoviesQuery(page)
    
    useEffect(() => {
      if (data) {
        setTotalData([...totalData,...data.results])
      }
 
    }, [data])

  return (
    <div className='bg-black  p-2'>
    <div className='text-red-600 font-bold text-3xl md:text-5xl my-2'>
        Top Popular Movie Posters
    </div>
    <InfinitePosters data={totalData} setPage={setPage} isFetching={isFetching}/>
    </div>
  )
}

export default TopPopular
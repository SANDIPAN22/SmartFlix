
import {useGetNowPlayingMoviesQuery, useGetMovieTrailerQuery} from "../utils/slice/movieApiSlice"
import { useEffect } from "react"

const HeroMovieTrailer = ({movieId}) => {

  const {data : videos, isLoading : trailerLoading, error : trailerError} = useGetMovieTrailerQuery(movieId )
  let trailerKey = null
  if(videos){
    console.log("videos======>", videos)
    const allVideos = videos.results
    const trailerVideos = allVideos.filter(v => v.type === "Trailer")
    trailerKey = trailerVideos.length ? trailerVideos[0]?.key : allVideos[0]?.key
    console.log(allVideos, trailerVideos, trailerKey)

  }
    

  if(trailerKey) {
    return (
      <>
      <div className="hero-movie-trailer md:relative md:w-full md:aspect-video md:top-[-74px]" >
       
        <iframe 
          title="Trailer"
          className="w-full aspect-video overflow-hidden"
          src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&enablejsapi=1&controls=0&showinfo=0&loop=1&rel=0&cc_load_policy=0&iv_load_policy=0`} 
          allow="autoplay" 
          
        ></iframe>
      </div>
      </>
    )
  }
}

export default HeroMovieTrailer
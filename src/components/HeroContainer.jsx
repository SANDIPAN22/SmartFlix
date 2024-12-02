import HeroMovieTrailer from "./HeroMovieTrailer"
import HeroMovieInfo from "./HeroMovieInfo"
import {useGetNowPlayingMoviesQuery} from "../utils/slice/movieApiSlice"


const HeroContainer = () => {
  const {data : movies, error, isLoading, refetch} = useGetNowPlayingMoviesQuery()
  let finalMovie = null
  if(movies){
    console.log("MOVIE INFO ======> ", movies)
    const allMovies = movies?.results
    const movieIndex = Math.floor(Math.random() * (allMovies.length))
    const heroMovie = allMovies[movieIndex]
    finalMovie = heroMovie
  }
  return (
    <>
    {movies ? 
    (

    <div className="overflow-hidden">

      <HeroMovieInfo movieInfo={finalMovie} />
      <HeroMovieTrailer movieId={finalMovie.id}/>

    </div>) 
    
    : <h1>LOADING.....</h1>}
    </>
  )
}

export default HeroContainer
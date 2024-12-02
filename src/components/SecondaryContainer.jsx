import {   
    useGetNowPlayingMoviesQuery,
    useGetUpComingMoviesQuery,
    useGetTopRatedMoviesQuery,
    useGetPopularMoviesQuery, } from "../utils/slice/movieApiSlice"
import MovieBar from "./MovieBar"



const SecondaryContainer = () => {
    const {data : nowPlayingMoviesData} = useGetNowPlayingMoviesQuery()
    const {data : upcomingMoviesData} = useGetUpComingMoviesQuery()
    const {data : topRatedMoviesData} = useGetTopRatedMoviesQuery()
    const {data : popularMoviesData} = useGetPopularMoviesQuery()
  return (
    <div className="relative bg-black md:top-[-120px]">
        {nowPlayingMoviesData && <MovieBar data={nowPlayingMoviesData.results} topic="Now Playing"/>}
        {popularMoviesData && <MovieBar data={popularMoviesData.results} topic="Top Popular"/>}
        {topRatedMoviesData && <MovieBar data={topRatedMoviesData.results} topic="Top Rated"/>}
        {upcomingMoviesData && <MovieBar data={upcomingMoviesData.results} topic="Upcoming Movies"/>}
    </div>
  )
}

export default SecondaryContainer
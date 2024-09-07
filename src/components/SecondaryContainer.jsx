import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryContainer = () => {

  const movies = useSelector((store) => store.movies?.nowPlayingMovies)

  const popularMovies = useSelector((store) => store.movies?.popularMovies)

  const upcomingMovies = useSelector((store) => store.movies?.upcomingMovies)

  // console.log("Movies = ", movies)
  // console.log("Popular Movies = ", popularMovies)
  // console.log("Upcoming Movies = ", upcomingMovies)


  if(movies == null ||  popularMovies == null || upcomingMovies == null)
    return;

  // if(popularMovies == null)
  //   return;

  // if(upcomingMovies == null)
  //   return;

  console.log("Movies = ", movies[0])
  
  return (
    <div className='bg-black -mt-36 relative z-40'>

      <MovieList title={"Now Playing"} movies={movies}/>

      <MovieList title={"Popular"} movies={popularMovies}/>

      <MovieList title={"Upcoming"} movies={upcomingMovies}/>
      
    </div>
  )
}

export default SecondaryContainer
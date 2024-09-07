import React from 'react'
import { useSelector } from 'react-redux'
import loadingImg from '../images/loadingImg'
import MovieCard from './MovieCard'
import MovieList from './MovieList'

const MovieSuggestionsGpt = () => {

  const {movieNames , gptMovies} = useSelector(store => store.gpt)

  if(!movieNames)
    return null;
  if(!gptMovies)
    return null;

  console.log("Movie Names = ", movieNames)
  console.log("Gpt movies = ", gptMovies)

  return (

    <div className='relative bg-black bg-opacity-50'>
      {/* <MovieList title={"Related Search"} movies={gptMovies}/> */}

      {
        movieNames.map((movieName, index)=>(
          
          <MovieList title={movieName} movies={gptMovies[index]}/>

        ))
      }

    </div>

  )
}

export default MovieSuggestionsGpt
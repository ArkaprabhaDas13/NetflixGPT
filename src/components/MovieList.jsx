import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {

  // console.log("Movies in MovieList = ", movies[0])

  return (
    <div className='flex flex-col p-6'>
      
      <h1 className='font-bold text-3xl my-5 text-white'>{title}</h1>
        <div className='flex flex-col overflow-x-auto '>
          
          <div className='flex w-[3000px] border-none overflow-x-auto border m-2'>

            {
              movies.map((movie)=>{
                return(
                  <MovieCard key={movie.id} posterPath={movie.poster_path} title={movie.original_title}/>
                )
              })
            }

          </div>
        </div>
      
    </div>
  )
}

export default MovieList




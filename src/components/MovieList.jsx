import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {

  // if(!movies)
  //   {
  //     return null;
  //   }

  console.log("Movies in MovieList = ", movies)

  return (
    <div className='flex flex-col p-6'>
      
      <h1 className='font-bold text-3xl my-5 text-white'>{title}</h1>
        <div className='flex flex-col overflow-x-auto '>
          
          <div className='flex w-[3000px] h-60 border-none overflow-x-auto border m-2'>

            {
              movies.map((movie)=>{

                // console.log(movie.poster_path)

                return(
                  <MovieCard id={movie.id} key={movie.id} posterPath={movie.poster_path} title={movie.original_title}/>
                )
              })
            }

          </div>
        </div>
      
    </div>
  )
}

export default MovieList




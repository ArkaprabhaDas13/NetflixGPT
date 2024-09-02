import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({posterPath, title}) => {
  return (
    <div className='mx-3'>

      <img className='w-30' src={IMG_CDN + posterPath + ".jpg"} alt="movie img" />

      {/* <h1 className='flex text-ellipsis text-white py-3 font-thin tracking-wider'>{title}</h1> */}

    </div>
  )
}

export default MovieCard
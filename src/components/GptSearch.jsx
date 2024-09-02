import React from 'react'
import SearchBarGpt from './SearchBarGpt'
import MovieSuggestionsGpt from './MovieSuggestionsGpt'
import { bgImage } from '../utils/constants'

const GptSearch = () => {
  return (
    <div className='flex '>
      
      <div className='absolute w-screen h-screen'>
      <img src={bgImage} alt="" />      
      </div>

      <SearchBarGpt/>

      <MovieSuggestionsGpt/>
      
    </div>
  )
}

export default GptSearch
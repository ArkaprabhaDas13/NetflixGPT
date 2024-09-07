import React from 'react'
import SearchBarGpt from './SearchBarGpt'
import { bgImage } from '../utils/constants'
import MovieSuggestionsGpt from './MovieSuggestionsGpt'

const GptSearch = () => {
  return (
    <div className='-z-10'>
      
      <div className='fixed w-screen h-screen'>
        <img src={bgImage} alt=""/>      
      </div>

      <SearchBarGpt/>

      {/* <MovieSuggestionsGpt></MovieSuggestionsGpt> */}
      
    </div>
  )
}

export default GptSearch
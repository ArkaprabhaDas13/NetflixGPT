import React from 'react'
import Header from './Header'
import useNowPlayingHook from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'

const Browse = () => {

  useNowPlayingHook();          //  custom HOOK

  return (
    <>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>

    {/* 

        Main Container
          - Video BG
          - Video Title
        Secondary Container
          - MovieList * n
          - Cards * n

    */}

    </>
    
  )
}

export default Browse




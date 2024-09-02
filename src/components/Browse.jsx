import React from 'react'
import Header from './Header'
import useNowPlayingHook from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopular from '../hooks/usePopular'
import useUpcoming from '../hooks/useUpcoming'
import GptSearch from './GptSearch'
import { useSelector } from 'react-redux'

const Browse = () => {
  
  const gptToggle = useSelector((store)=>store.gpt?.showGptSearch)
  console.log("GPT Logic -> ", gptToggle)

  useNowPlayingHook();          //  custom HOOK
  usePopular();
  useUpcoming();



  return (
    <>
      <div className=''>
        <Header/>

        {
        gptToggle ? <GptSearch/> : <div><MainContainer/><SecondaryContainer/></div>
        }

        
      </div>

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




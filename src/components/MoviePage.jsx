import React, {useEffect} from 'react'
import {useSelector} from 'react-redux'


const MoviePage = () => {
  
  const movieKey = useSelector((store)=>store.movies.nowWatchingKey)

  const fetchData = async()=>{
    
    // console.log("Movie Now watching Data = ", promiseArray[0].key)
    // console.log("https://www.youtube.com/watch?v="+movieKey+"?&autoplay=1&mute=1")
  }

  return (
    <div className='bg-black h-screen'>
        
        <div className='w-screen h-screen'>

          <iframe className='w-screen aspect-video' src={"https://www.youtube.com/embed/"+movieKey+"?&autoplay=1&mute=1&controls=0"}   title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>

        </div>

    </div>
  )
}

export default MoviePage

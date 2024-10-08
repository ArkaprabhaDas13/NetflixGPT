import React, {useEffect, useState  } from 'react'
import useMovieTrailer from '../hooks/useMovieTrailer'
import { useSelector } from 'react-redux'

const VideoBackground = ({movieId}) => {

    // console.log("Video ID in VideoBG = ", movieId)

    const trailerVideo = useSelector(store => store.movies?.trailerVideo)      // fetching movie form Redux store   

    console.log("TRAILER VIDEO : ", trailerVideo)

    useMovieTrailer(movieId);       // adding all the fetched movies to Redux store

  return (
    <div className=''>
        
        <iframe className='w-screen aspect-video' src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?&autoplay=1&mute=1"}   title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>
        
    </div>
  )
}

export default VideoBackground
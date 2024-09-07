import React from 'react'
import { IMG_CDN } from '../utils/constants'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {addNowWatching, addNowWatchingKey} from '../utils/movieSlice'
import {API_OPTIONS} from '../utils/constants.js'


const MovieCard = ({id, posterPath, title}) => {

  const dispatch = useDispatch()

  console.log("ID = ", id)

  const navigate = useNavigate();
  
  const handleClick = async(id)=>{
    dispatch(addNowWatching(id))
    const data = await fetch("https://api.themoviedb.org/3/movie/"+id+"/videos?language=en-US", API_OPTIONS)
    const json = await data.json();
    const promiseArray = json.results
    const movieKey = promiseArray[0].key
    dispatch(addNowWatchingKey(movieKey))
    navigate('/moviePage')
  }


  return (
    <div className='mx-3 relative'>

      <img className='w-30 h-60' src={IMG_CDN + posterPath + ".jpg"} alt="movie img" />

      <button className='bg-black text-2xl text-white h-full font-bold p-2 text-transparent opacity-0 inset-x-0 absolute bottom-0  hover:text-white hover:opacity-80 transition duration-600' onClick={()=>handleClick(id)}>Watch Now</button>

    </div>
  )
}

export default MovieCard




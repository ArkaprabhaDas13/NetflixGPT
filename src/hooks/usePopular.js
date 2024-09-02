import React, { useDebugValue, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_OPTIONS } from '../utils/constants'
import { addPopularMovies } from '../utils/movieSlice'


const usePopular = () => {

    const dispatch = useDispatch();

    const getPopluarMovies = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS)
        const json = await data.json();
        
        console.log("Popular Movies = ", json.results)

        dispatch(addPopularMovies(json.results))
    }

    useEffect(()=>{
        getPopluarMovies();
    }, [])

}

export default usePopular
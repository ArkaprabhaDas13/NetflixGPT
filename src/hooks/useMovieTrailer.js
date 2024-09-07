import React, {useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addTrailerVideo } from '../utils/movieSlice';

const useMovieTrailer = (videoId) => {

    console.log("MovieID = ", videoId)

    const dispatch = useDispatch();
    const trailer = useSelector((store)=>store.movies.trailerVideo)

    const getMovieVideo = async ()=>{

        const data = await fetch("https://api.themoviedb.org/3/movie/704239/videos?language=en-US", API_OPTIONS)

        console.log(data)

        const json = await data.json();
        
        const filterData = json.results.filter((video)=>video.type === "Trailer")
        const trailer = filterData.length ? filterData[0] : json.results[0]
        dispatch(addTrailerVideo(trailer))

    }

    useEffect(()=>{
        
        getMovieVideo();
        
    }, [])
    
}

export default useMovieTrailer
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = ()=>{

    const dispatch = useDispatch();

    const getNowPlayingMovies = async ()=>{
        console.log("API called")
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
      const json = await data.json();
      
      console.log("data = ", data);
      console.log("JSON = ", json.results);
  
      dispatch(addNowPlayingMovies(json.results))
    }
    
    useEffect(()=>{
      getNowPlayingMovies();
    }, [])
}

export default useNowPlayingMovies
import React from 'react'
import { bgImage } from '../utils/constants'
import { lang } from '../utils/languageConstants'
import { useSelector } from 'react-redux'
import { useRef } from 'react'
import genAI from '../utils/genai'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addMovies } from '../utils/gptSlice'
import MovieSuggestionsGpt from './MovieSuggestionsGpt'


const SearchBarGpt = () => {

  const dispatch = useDispatch()
  const language = useSelector(store => store.config.language)
  const gptSearch = useRef('')
  
  const handleGptSearchClick = async ()=>{
    
    const gptQuery = "Act as a movie recommedation system and show recommendation for the query" + gptSearch.current.value + ". Only provide the name of 15 movies, comma seperated like the example result given ahead. Example List: Movie1, Movie2, Movie3 etc.";
    // console.log(gptQuery)
    
    // GEMINI API for getting the desired results according to QUERY
    
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(gptQuery)
    
    const gptResults = result.response.candidates[0].content.parts[0].text.split(', ')
    console.log("GPT Results = ", gptResults)
    
    // search for each movie
    const promiseArray = gptResults.map((movie)=>searchMovies(movie))
    console.log(promiseArray)
    
    // Promise.all executes all the promises in the Promise array and then 
    const tmdbResults = await Promise.all(promiseArray)
    
    dispatch(addMovies({movieResults: tmdbResults, movieNames: gptResults}))

    console.log(tmdbResults)
  }
  
  
  // find MOVIES in TMDB
  
  const searchMovies = async(movie)=>{
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS)
    const json = await data.json();
    console.log("fetched data = ", json)
    
    return json.results;
  }

  return (
    <div className='h-screen w-screen content-center absolute'>        
        
        <div>
          <form action="" className='mx-auto mt-10 w-1/2' onSubmit={(e)=>e.preventDefault()}>                
          
          {/* When we click the Button, the form gets SUBMITTED by nature and the page is refreshed. But e.preventDefault prevents the page from reloading  */}

            <input ref={gptSearch} className='h-16 text-3xl text-gray-600 border border-gray-400 px-6 w-10/12' type="text" placeholder={lang[language].searchPlaceholder}/>
            <button className='bg-red-500 pt-1 h-16 text-white text-2xl w-2/12' onClick={handleGptSearchClick}>{lang[language].search}</button>

          </form>
        </div>


        <MovieSuggestionsGpt/>
        
    </div>
  )
}

export default SearchBarGpt

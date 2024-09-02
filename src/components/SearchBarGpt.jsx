import React from 'react'
import { bgImage } from '../utils/constants'
import { lang } from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const SearchBarGpt = () => {

  const language = useSelector(store => store.config.language)

  console.log("Language in Search BAR = ", language)

  return (
    <div className='h-1/2 w-screen content-center absolute bg-gradient-to-b from-black'>        
        
        <form action="" className='mx-auto mt-[10%] w-1/2'>
                <input className='h-16 text-3xl text-gray-600 border border-gray-400 px-6 w-10/12' type="text" placeholder={lang[language].searchPlaceholder}/>
                <button className='bg-red-500 pt-1 h-16 text-white text-2xl w-2/12'>{lang[language].search}</button>
        </form>
        
    </div>
  )
}

export default SearchBarGpt
import React, {useState, useEffect} from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import profilePhoto from '../utils/man.png'
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { LOGO } from '../utils/constants'
import {toggleGptLogic} from '../utils/gptSlice'
import { SUPPORTED_LANGUAGES } from '../utils/constants'
import { languageFunc } from '../utils/configSlice'

const Header = () => {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const gptState = useSelector(store => store.gpt.showGptSearch)
  const user = useSelector(store => store.user)
  const language = useSelector(store => store.config.language)

  console.log("GPT Search state = ", gptState)
  console.log("User = ", user);
  console.log("Language = ", language)


  const handleLanguageClick = (event)=>{

    dispatch(languageFunc(event.target.value))      // setting the language in the Store
    console.log("Handle Lang Click : ", event.target.value)
  }
  
  const handleSignOut = ()=>{  
    // SIGN OUT

    signOut(auth).then(() => {
      //sign in successful
    }).catch((error) => {
      navigate('/error')
    });
  }

  const handleGptToggle = ()=>{

    dispatch(toggleGptLogic())
    console.log(gptState)
  }

  // We are using this API given to us by Firebase where we do not have to repeatedly write a dispatch function for Signin / Signup / Removing User

  useEffect(()=>{

    const unsubscribe = onAuthStateChanged(auth, (user)=>{
      if(user)
      {
        const {uid, email, displayName, photoUrl} = user;
        dispatch(addUser({uid:uid, email:email, displayName:displayName, photoUrl:photoUrl}))      
        navigate("/browse")
      }  
      else
      {
        dispatch(removeUser())
        navigate('/')
      }
    })

    // clean up function 
    // unsubscribe when component unmounts... the Header component can rerender many times but we dont need this api to run multiple times
    
    return ()=>{
       unsubscribe()
    }

  }, [])

  return (
    <div className='fixed w-screen h-36 bg-gradient-to-b from-black to-transparent p-4 z-10 flex justify-between'>
        <div className=''>
            <img src={LOGO} alt="Logo" className='w-48 fixed p-2 m-2'/>
        </div>
        
        {user && (<div className='flex h-10 my-auto pr-5'>
            
            {gptState && (<select name="" id="" className='bg-gray-600 text-white px-3 rounded-lg' onChange={handleLanguageClick}>
              {/* <option value="english">English</option>
              <option value="hindi">Hindi</option>
              <option value="bengali">Bengali</option> */}

                {SUPPORTED_LANGUAGES.map((language)=>{
                  return(
                    <option key={language.identifier} value={language.identifier}>{language.name}</option>
                  )
                })}
              
            </select>)}


            <button className='bg-red-800 text-white my-auto h-10 w-32 mx-3 rounded-xl' onClick={handleGptToggle}> GPT Search</button>
            <button className='bg-red-500 text-white my-auto h-10 w-24 rounded-xl' onClick={handleSignOut}>Sign Out</button>
          </div>
        )} 
    </div>
  )
}

export default Header
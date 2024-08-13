import React from 'react'
import {useState, useRef} from 'react'
import Header from './Header'
import {checkValidData} from '../utils/validate'

const Login = () => {

  const [isSignIn, setIsSignIn] = useState(true);
  const [error, setError] = useState(null);

  const name = useRef(null)
  const email = useRef(null);
  const password = useRef(null);
  
  const toggleSignInForm = ()=>{
    setIsSignIn(!isSignIn)
  }
  
  const handleButtonClick = ()=>{

    !isSignIn && console.log("Name = ", name.current.value);

    console.log("Email = ",email.current.value);
    console.log("Password = ",password.current.value);

    const message = isSignIn?checkValidData(email.current.value, password.current.value) : checkValidData(email.current.value, password.current.value, name.current.value)
    console.log("Message = ", message)
    setError(message);
  }

  return (
    <div className='flex h-screen'>
      <Header/>
      
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_medium.jpg" alt="" />
      </div>

      <form onSubmit={(e)=>e.preventDefault()} className='relative flex flex-col p-12 bg-black bg-opacity-70 w-3/12 m-auto justify-center border border-gray-700 rounded-xl' action="">
        
        <h1 className='text-white text-4xl mx-auto p-10 font-bold mb-4'>{isSignIn?"Sign In":"Sign Up"}</h1>
        
        {!isSignIn && <input type="text" ref={name} placeholder='Name' className='p-2 my-2 h-10 w-72 mx-auto text-gray-400 bg-gray-700'/>}
        
        <input type="text" ref={email} placeholder='Email Address' className='p-2 my-2 h-10 w-72 mx-auto text-gray-400 bg-gray-700'/>
        
        <input type="password" ref={password} placeholder="Password" className='p-2 my-2 h-10 w-72 mx-auto text-gray-400 bg-gray-700'/>
        
        {!isSignIn && <input type="password" placeholder='Confirm Password' className='p-2 my-2 h-10 w-72 mx-auto text-gray-400 bg-gray-700'/>}

        <p className='text-red-500 font-bold'>{error}</p>
        
        <button className='p-4 my-8 mx-auto w-72 bg-red-500 text-white rounded-sm' onClick={handleButtonClick}>{isSignIn?"Sign In":"Sign Up"}</button>
        
        <p className='mx-auto text-gray-300 cursor-pointer' onClick={toggleSignInForm}>New to Netflix? SIGN UP now!</p>
      </form>
    </div>
  )
}

export default Login
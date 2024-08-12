import React from 'react'
import {useState} from 'react'
import Header from './Header'

const Login = () => {

  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignInForm = ()=>{
    setIsSignIn(!isSignIn)
  }

  return (
    <div className='flex h-screen'>
      <Header/>
      
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_medium.jpg" alt="" />
      </div>

      <form className='relative flex flex-col p-12 bg-black bg-opacity-65 w-3/12 m-auto justify-center border border-gray-700 rounded-xl' action="">
        <h1 className='text-white text-3xl mx-auto p-10 font-bold mb-4'>{isSignIn?"Sign In":"Sign Up"}</h1>
        {!isSignIn && <input type="text" placeholder='Name' className='p-2 my-2 h-10 w-72 mx-auto bg-gray-700'/>}
        <input type="text" placeholder='Email Address' className='p-2 my-2 h-10 w-72 mx-auto bg-gray-700'/>
        <input type="password" placeholder="Password" className='p-2 my-2 h-10 w-72 mx-auto bg-gray-700'/>
        {!isSignIn && <input type="text" placeholder='Confirm Password' className='p-2 my-2 h-10 w-72 mx-auto bg-gray-700'/>}
        <button className='p-4 my-8 mx-auto w-72 bg-red-500 text-white rounded-sm'>Sign In</button>
        <p className='mx-auto text-gray-300 cursor-pointer' onClick={toggleSignInForm}>New to Netflix? SIGN UP now!</p>
      </form>
    </div>
  )
}

export default Login
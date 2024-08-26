import React from 'react'
import {useState, useRef} from 'react'
import Header from './Header'
import {checkValidData} from '../utils/validate'
import {createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth";
import {auth} from '../utils/firebase'
import { updateProfile } from 'firebase/auth';
import {useDispatch} from 'react-redux'
import { addUser } from '../utils/userSlice';

const Login = () => {

  const dispatch = useDispatch();

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

    const message = checkValidData(email.current.value, password.current.value)
    console.log("Message = ", message)
    setError(message);

    if(message)
      return;
    // null -> no error. So we create a new user when the message is NULL

    if(!isSignIn)                                                                                                         // Sign Up
    {
      // Sign Up
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;               // USER created !!!!
        console.log(user)

        updateProfile(user, {
          displayName : name.current.value, photoURL : "https://cdn-share-sprites.flaticon.com/pack/0/164/164357-stationery-and-office-icon-set_3x2.jpg"
        }).then(() => {

          //Updating the store
          const {uid, email, displayName, photoUrl} = auth.currentUser;
          dispatch(addUser({uid:uid, email:email, displayName:displayName, photoUrl:photoUrl}))      
      
          console.log("Profile Updated !")
          // .../
        }).catch((error) => {
          // An error occurred
          console.log("An error occured while Updating Profile!")
          // ...
        });
        
        // ...
            
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
        setError(errorMessage)
        // ... Error
      });
    }
    else{                                                                                                                // Sign In
      // Sign In
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        // ...

        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage)
      });
    }
  }

  return (
    <div className='flex h-screen'>
      <Header/>
      
      <div className='absolute '>
        <img className='w-[100vw] h-[100vh] lg:w-[100]' src="https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_medium.jpg" alt="" />
      </div>

      <form onSubmit={(e)=>e.preventDefault()} className='relative flex flex-col p-12 bg-black bg-opacity-70  m-auto justify-center border border-gray-700 rounded-xl w-[90%] lg:w-[40%] md:w-[40%] sm:w-[40%]' action="">
        
        <h1 className='text-white text-4xl mx-auto p-10 font-bold mb-4'>{isSignIn?"Sign In":"Sign Up"}</h1>
        
        {!isSignIn && <input type="text" ref={name} placeholder='Name' className='p-2 my-2 h-10 w-72 mx-auto text-gray-400 bg-gray-700 sm:w-60 md:w-72'/>}
        
        <input type="text" ref={email} placeholder='Email Address' className='p-2 my-2 h-10 w-72 mx-auto text-gray-400 bg-gray-700 sm:w-60 md:w-72'/>
        
        <input type="password" ref={password} placeholder="Password" className='p-2 my-2 h-10 w-72 mx-auto text-gray-400 bg-gray-700 sm:w-60 md:w-72'/>
        
        {!isSignIn && <input type="password" placeholder='Confirm Password' className='p-2 my-2 h-10 w-72 mx-auto text-gray-400 bg-gray-700 sm:w-60 md:w-72'/>}

        <p className='text-red-500 font-bold'>{error}</p>
        
        <button className='p-4 my-8 mx-auto w-72 bg-red-500 text-white rounded-sm' onClick={handleButtonClick}>{isSignIn?"Sign In":"Sign Up"}</button>
        
        <p className='mx-auto text-gray-300 cursor-pointer' onClick={toggleSignInForm}>New to Netflix? SIGN UP now!</p>
      </form>
    </div>
  )
}

export default Login
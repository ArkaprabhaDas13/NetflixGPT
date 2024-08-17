import React, { useEffect } from 'react'
import Browse from './Browse'
import Login from './Login'
import {RouterProvider, createBrowserRouter, useNavigate} from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { enablePersistentCacheIndexAutoCreation } from 'firebase/firestore'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'


const Body = () => {

  const dispatch = useDispatch();

    const appRouter = createBrowserRouter([
        {
            path:'/',
            element: <Login />,
        },
        {
            path:'/browse',
            element:<Browse/>
        }
    ])

    // We are using this API given to us by Firebase where we do not have to repeatedly write a dispatch function for Signin / Signup / Removing User

    useEffect(()=>{

      onAuthStateChanged(auth, (user)=>{
        if(user)
        {
          const {uid, email, displayName, photoUrl} = user;
          dispatch(addUser({uid:uid, email:email, displayName:displayName, photoUrl:photoUrl}))      
        }  
        else
        {
          dispatch(removeUser())
        }
      })

    }, [])


  //// RETURN Statement ////
 
  return (
    <RouterProvider router={appRouter}/>
  )
}

export default Body
import React, { useEffect } from 'react'
import Browse from './Browse'
import Login from './Login'
import MoviePage from './MoviePage'
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
        },
        {
          path:'/moviePage',
          element: <MoviePage/>
        }
    ])

    




  //// RETURN Statement ////
 
  return (
    <RouterProvider router={appRouter}/>
  )
}

export default Body
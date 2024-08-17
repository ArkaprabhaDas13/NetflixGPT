import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import profilePhoto from '../utils/man.png'

const Header = () => {
  
  const navigate = useNavigate();

  const user = useSelector(store => store.user)
  console.log("User = ", user);
  
  
  const handleSignOut = ()=>{  
                                                      // SIGN OUT
    signOut(auth).then(() => {
      navigate('/')
    }).catch((error) => {
      navigate('/error')
    });

  }


  return (
    <div className='absolute w-screen h-36 bg-gradient-to-b from-black to-transparent p-4 z-10 flex justify-between'>
        <div className=''>
            <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Logo" className='w-48 fixed p-2 m-2'/>
        </div>
        
        {user && (<div className='flex h-10 my-auto'>
            <img className='w-12 h-12' src={user?.imgURL} alt="" />
            <button className='bg-red-500 text-white my-auto h-10 w-24 rounded-xl' onClick={handleSignOut}>Sign Out</button>
          </div>
        )} 
    </div>
  )
}

export default Header
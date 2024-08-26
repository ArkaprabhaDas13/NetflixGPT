import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-36 px-20 absolute bg-gradient-to-r pt-[20%] from-black w-screen aspect-video'>
        <h1 className='font-bold text-6xl text-white py-6'>{title}</h1>
        <p className='w-1/3 py-2 text-gray-400'>{overview}</p>
        <div className='pt-10'>
            <button className='px-4 py-2 font-bold bg-white border border-black hover:opacity-80' > ▶️ Play </button>
            <button className='px-4 py-2 font-bold text-white mx-6 bg-opacity-85 bg-gray-400 border border-black'>More info</button>
        </div>
    </div>
  )
}

export default VideoTitle
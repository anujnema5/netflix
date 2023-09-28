import { IconExclamationCircle } from '@tabler/icons-react'
import { IconPlayerPlayFilled } from '@tabler/icons-react'
import React from 'react'

function VideoTitle({title, overview}) {
  return (
    <div className='lg:px-36 lg:py-20 lg:mt-48 absolute z-40'>

      <div className="flex flex-col prose prose-p:-mt-5 text-white">
      <h1 className='text-5xl text-white font-semibold'>{title}</h1>
      <p className='lg:w-full text-lg'>{overview}</p>
      </div>

      <div className="flex gap-3 mt-6">
        <button className='bg-gray-100 flex items-center gap-2 px-7 font-semibold text-lg rounded-md hover:bg-gray-400 transition-all duration-200 ease-in-out'>
        <IconPlayerPlayFilled className=''/>
          Play
          </button>
        <button className='bg-gray-400 flex items-center gap-2 px-4 py-2 font-semibold text-lg rounded-md hover:bg-gray-500 transition-all duration-200 ease-in-out'><IconExclamationCircle/> More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
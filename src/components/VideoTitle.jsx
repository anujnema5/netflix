import { IconPlayerPlayFilled } from '@tabler/icons-react'
import React from 'react'

function VideoTitle({title, overview}) {
  return (
    <div className='lg:px-36 lg:py-20 border-2 absolute'>

      <div className="flex flex-col prose prose-p:-mt-5 text-white">
      <h1 className='text-5xl text-white font-semibold'>{title}</h1>
      <p className='lg:w-10/12 text-lg'>{overview}</p>
      </div>

      <div className="flex gap-3 mt-6">
        <button className='bg-gray-100 flex items-center gap-2 px-7 font-semibold text-lg rounded-md'>
        <IconPlayerPlayFilled className=''/>
          Play
          </button>
        <button className='bg-gray-500/30 px-7 py-2 font-semibold text-lg rounded-md'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
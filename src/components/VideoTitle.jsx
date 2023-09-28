import React from 'react'

function VideoTitle({title, overview}) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{overview}</p>

      <div className="">
        <button>Play</button>
        <button>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
import React from 'react'
import { useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer';

function VideoBackground({ movieId }) {
  const trailerVideo = useSelector((store)=>store.movies?.trailerVideo);
  useMovieTrailer(movieId); 

  return (
    <div className=''>
      <iframe 
      className='w-full aspect-video' 
      src={`https://www.youtube.com/embed/${trailerVideo?.key}?&autoplay=1&mute=1/`}
      title="YouTube video player"
      allowFullScreen
      frameBorder={0}
      allow="autoplay; encrypted-media"
      >
      </iframe>
    </div>
  )

}

export default VideoBackground
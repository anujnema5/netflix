import React from 'react'
import Movielist from './Movielist'
import { useSelector } from 'react-redux'

function SecondaryContainer() {

  const movies = useSelector(store=> store?.movies);

  return (
   movies.nowPlayingMovies && movies.popularMovies && (
    <div className="bgb-black">
    <div className='relative bottom-0'>
      <Movielist title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <Movielist title={"Popular Movies"} movies={movies.popularMovies} />
      <Movielist title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <Movielist title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <Movielist title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <Movielist title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <Movielist title={"Now Playing"} movies={movies.nowPlayingMovies} />
    </div>
    </div>
    )
  )
}

export default SecondaryContainer
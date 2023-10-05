import React from 'react'
import { useSelector } from 'react-redux'
import Movielist from './Movielist';

function GptMovieSuggestions() {
  const {movieResults, moviesNames} = useSelector((store)=> store.gpt)
  if(!moviesNames) return null;
  
  return (
    <div className='p-4 m-4 bg-black opacity-90 text-white'>
      {moviesNames?.map((movieName, index)=> (
        <Movielist key={movieName} title={movieName} movies={movieResults[index]}/>
      ))}
    </div>
  )
}

export default GptMovieSuggestions
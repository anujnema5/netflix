import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestion'

function GptSearchPage() {
  return (
    <div className='bg-login min-h-screen bg-fixed'>
        <GptSearchBar/>
        <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearchPage
import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import { useSelector } from 'react-redux'
import GptSearch from './GptSearchPage'
import GptSearchPage from './GptSearchPage'

function Browse() {
  const showGptSearch = useSelector(store => store.gpt.showGptSearch)

  useNowPlayingMovies()
  usePopularMovies();

  return (
    <div className=''>
      <Header />
      {showGptSearch ?
        (
          <GptSearchPage />
        )
        : (
          <>
            <MainContainer />
            <SecondaryContainer />
          </>
        )
      }
    </div>
  )
}

export default Browse
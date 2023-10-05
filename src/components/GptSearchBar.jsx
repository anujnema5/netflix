import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../utils/openai';
import { query } from '../utils/query';
import { API_OPTION } from '../utils/constant';
import { addGptMoviesResult } from '../utils/gptSlice';
import { useGptSearch } from '../hooks/gptSearch'; 

function GptSearchBar() {
  const langKey = useSelector((Store) => Store.config.lang)
  const searchText = useRef(null);
  const { gptSearch } = useGptSearch();

  const handleGptSearch = async () => {
    const query = searchText.current.value;
        await gptSearch(query);
  }

  return (
    <div className="pt-[10%] flex justify-center">
      <form action="" onSubmit={(e) => e.preventDefault()} className='w-2/5 grid grid-cols-12 bg-black gap-4 rounded-lg justify-center items-center px-3 py-3'>
        <input type="text"
          ref={searchText}
          placeholder={lang[langKey].gptSearchPlaceHolder}
          className='text-gray-800 col-span-9 py-2 outline-none rounded-md px-3' />
        <button type='submit' onClick={handleGptSearch} className='bg-red-700 px-6 py-2 rounded-md col-span-3 text-white'>{lang[langKey].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar

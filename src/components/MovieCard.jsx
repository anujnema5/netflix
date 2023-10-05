import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'

function MovieCard({posterpath}) {
    if(!posterpath) return null
    return (
        <div className='w-44 h-full'>
            <img src={IMG_CDN_URL + posterpath} className='w-full h-full' alt="movie-cart" 
            />
        </div>
    )
}

export default MovieCard
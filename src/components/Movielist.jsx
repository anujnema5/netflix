import React from 'react'
import MovieCard from './MovieCard'

function Movielist({ title, movies }) {
    return (
        <div className='px-5 '>
            <h1 className='text-2xl text-white font-medium pt-5 pb-4 px-1'>{title}</h1>
            <div className="flex overflow-x-scroll">
                <div className="flex gap-3 h-60">
                    {movies.map((movie) => (
                        <MovieCard key={movie.id} posterpath={movie.poster_path} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Movielist
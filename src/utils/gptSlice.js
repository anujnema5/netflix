import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch: false,
        movieResults: null,
        moviesNames: null
    },
    reducers: {
        toggleGptSearchView : (state)=> {
            state.showGptSearch = !state.showGptSearch
        },

        addGptMoviesResult: (state,action)=> {
            const {movieNames, movieResults} = action.payload
            
            state.moviesNames = movieNames
            state.movieResults = movieResults
        }
    }
})

export const {toggleGptSearchView, addGptMoviesResult} = gptSlice.actions
export default gptSlice.reducer
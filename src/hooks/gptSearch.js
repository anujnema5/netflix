import { useDispatch } from "react-redux";
import openai from "../utils/openai";
import { query } from "../utils/query";
import { searchMovieTMDB } from "../utils/searchMovies";
import { addGptMoviesResult } from "../utils/gptSlice";

export const useGptSearch = () => {
    const dispatch = useDispatch();

    const gptSearch = async (searchQuery) => {
        const gptQuery = query(searchQuery);

        try {
            const gptResults = await openai.chat.completions.create({
                messages: [{ role: 'user', content: gptQuery }],
                model: 'gpt-3.5-turbo',
            });

            const gptMovies = gptResults.choices?.[0].message?.content.split(",");

            // NOW FETCH EACH MOVIE, SEARCH IN THE TMDB API 
            const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie))
            const tmdbResults = await Promise.all(promiseArray)

            console.log(tmdbResults);

            dispatch(addGptMoviesResult({ movieNames: gptMovies, movieResults: tmdbResults }))
        } catch (error) {
            // Handle errors here
        }
    };

    return { gptSearch };
};

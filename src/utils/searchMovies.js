import { API_OPTION } from "./constant";

export const searchMovieTMDB = async (movieName)=> {
    const url = `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`
    const data = await fetch(url, API_OPTION)

    const json = await data.json();
    return json.results;
  }
export const query = (searchText) => {
    const SearchQuery = `Act as a movie recommendation system and suggest some movies for the query : ${searchText} 
    only give me name of 7 movies, commna seperated like the exmaple result given ahead. Example Result : Gadar, Sholay, Don, Golmaal, 3idiots
    `
    return SearchQuery
}
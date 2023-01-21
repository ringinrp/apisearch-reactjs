import axios from 'axios';

// const apiKey = process.env.REACT_APP_APIKEY
// const baseUrl = process.env.REACT_APP_BASEURL

export const getMovieList = async () => {
    const movie = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?page=1&api_key=1b8656ac10f2fd3553ff00bcccc040c8`);
    return movie.data.results
}

export const searchMovie = async (q) =>{
    const search = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${q}&page=1&api_key=1b8656ac10f2fd3553ff00bcccc040c8`);
    return search.data
}



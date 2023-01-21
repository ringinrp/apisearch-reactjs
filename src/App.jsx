import './App.css'
import {getMovieList,searchMovie} from './api'
import { useState, useEffect } from 'react';

const App = () => {
  const [popularMovies, setPopularMovies] = useState([])

  useEffect(()=>{
   getMovieList().then((result) => {
    setPopularMovies(result)
   })
  }, [])

  const PopularMovieList = () => {
    return popularMovies.map((movie, i)=>{
      return (
              <div className="Movie-wrapper" key={i}>
                <div className="Movie-title">{movie.title}</div>
                <img className="Movie-image" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                <div className="Movie-date">{movie.release_date}</div>
                <div className="Movie-rate">{movie.vote_average}</div>
              </div>
      )
    })
  }

  const search = async(q) => {
    if (q.length > 3){
    const query = await searchMovie(q)
    setPopularMovies(query.results)
    // console.log({query : query})
    }
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>MOVIE-MANIA</h1>
          <input placeholder='cari film kesayangan ..' className='Movie-search' onChange={({target})=>search(target.value)}/>
        <div className="Movie-container">
         <PopularMovieList />
        </div>
      </header>
    </div>
  );
}

export default App;

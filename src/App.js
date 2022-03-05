import React, { useState, useEffect } from 'react';
import SearchIcon from './search.svg';
import './App.css';
import MovieCard from './MovieCard';

const API_URL = 'https://www.omdbapi.com?apikey=57fa5073';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    searchMovies('spiderman');
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    // console.log(data.Search);
    setMovies(data.Search);
  };

  return (
    <div className='app'>
      <h1>MovieLand</h1>

      <div className='search'>
        <input type="text" placeholder='search for movies' value={searchTerm} onChange={(event) => { setSearchTerm(event.target.value) }} />
        <img src={SearchIcon} alt="search icon" onClick={() => searchMovies(searchTerm)} />
      </div>

      {
        movies?.length > 0 ? (
          <div className='container'>
            {
              movies.map(movie => {
                return <MovieCard movie={movie} />
              })
            }
          </div>
        ) : (
          <div className='empty'>
            <h2>No Movies Found</h2>
          </div>
        )
      }

    </div>
  );
};

export default App;

// omdb api key: 57fa5073
// props: Year, Poster, Type, Title

// https://www.omdbapi.com/?apikey=b6003d8a&s=batman

// https://www.omdbapi.com/?apikey=b6003d8a&s=batman
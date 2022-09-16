import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([])
  const fetchMoviesHandler = async () => {
    const response = await fetch("https://swapi.dev/api/films");
    const moviesList = await response.json()
    console.log(moviesList.results);
    setMovies(moviesList.results)
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
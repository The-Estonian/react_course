import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [connectionError, setConnectionError] = useState(null);

  const fetchMoviesHandler = async () => {
    setIsLoading(true);
    setConnectionError(null);
    try {
      const response = await fetch('https://swapi.dev/api/films');
      
      if (!response.ok) {
        throw new Error('Did not get any data from that address!');
      }
      const moviesList = await response.json();
      setMovies(moviesList.results);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false)
      console.log(error.message);
      setConnectionError(error.message);
    }
  };
  // const fetchMoviesHandler = () => {
  //   fetch('https://swapi.dev/api/films')
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then(data => {
  //       const dataTransformation = data.results.map(dataPoint => {
  //         return {
  //           episode_id: dataPoint.episode_id,
  //           title: dataPoint.title,
  //           director: dataPoint.director,
  //           release_date: dataPoint.release_date,
  //           opening_crawl: dataPoint.opening_crawl
  //         }
  //       })
  //       setMovies(dataTransformation)
  //     });
  // };

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length < 1 && !connectionError && <p>Fetch to get movies!</p>}
        {isLoading && <p>Loading...</p>}
        {connectionError && <p>{connectionError}</p>}
      </section>
    </React.Fragment>
  );
}

export default App;

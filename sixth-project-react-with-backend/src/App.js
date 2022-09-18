import React, { useState, useEffect, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [connectionError, setConnectionError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setConnectionError(null);
    try {
      const response = await fetch(
        'https://testing-react-96b3e-default-rtdb.europe-west1.firebasedatabase.app/movies.json'
      );

      if (!response.ok) {
        throw new Error('Did not get any data from that address!');
      }
      const moviesList = await response.json();
      console.log(moviesList);
      const loadedMovies = [];
      for (const key in moviesList) {
        loadedMovies.push({
          id: key,
          title: moviesList[key].title,
          releaseDate: moviesList[key].release_date,
          openingText: moviesList[key].openingText,
        });
      }
      setMovies(loadedMovies);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error.message);
      setConnectionError(error.message);
    }
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, []);

  const addMovieHandler = async (movie) => {
    const response = await fetch(
      'https://testing-react-96b3e-default-rtdb.europe-west1.firebasedatabase.app/movies.json',
      {
        method: 'POST',
        body: JSON.stringify(movie),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await response.json();
    console.log(data);
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

  let content = <p>Found no movies!</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (isLoading) {
    content = <p>Loading the database...</p>;
  }

  if (connectionError) {
    content = <p>{connectionError}</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <section>
          <button onClick={fetchMoviesHandler}>Fetch Movies</button>
        </section>
        {content}
        {/* {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length < 1 && !connectionError && (
          <p>Fetch to get movies!</p>
        )}
        {isLoading && <p>Loading...</p>}
        {connectionError && <p>{connectionError}</p>} */}
      </section>
    </React.Fragment>
  );
}

export default App;

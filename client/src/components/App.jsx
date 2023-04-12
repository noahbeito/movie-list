import React from 'react';
import movies from '../movieData.js';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';

const { useState } = React;

const App = (props) => {
  const [movieList, setMovieList] = useState(movies);

  return (
    <div>
      <h1>Movie List</h1>
      <Search />
      <MovieList movies={movieList} />
    </div>
  );
};

export default App;
import React from 'react';
import movies from '../movieData.js';
import MovieList from './MovieList.jsx';

const App = (props) => (
  <div>
    <h1>Movie List</h1>
    <MovieList movies={movies} />
  </div>

);

export default App;
import React from 'react';
import Movie from './Movie.jsx';


const MovieList = ( {movies, handleWatched} ) => (
  // map over movies data and create
  <div className="movies-container">
    {movies.map(movie => <Movie movie={movie} handleWatched={handleWatched} key={movie.title}/>)}
  </div>
);

export default MovieList;
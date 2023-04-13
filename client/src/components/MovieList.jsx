import React from 'react';
import Movie from './Movie.jsx';


const MovieList = ( {movies, handleWatched, handleTitleClick} ) => (
  // map over movies data and create
  <div className="movies-container">
    {movies.map(movie => <Movie movie={movie} handleWatched={handleWatched} handleTitleClick={handleTitleClick} key={movie.title}/>)}
  </div>
);

export default MovieList;
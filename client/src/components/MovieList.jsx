import React from 'react';
import Movie from './Movie.jsx';


const MovieList = ( {movies, handleWatched} ) => (
  // map over movies data and create
  movies.map(movie => <Movie movie={movie} handleWatched={handleWatched} key={movie.title}/>)
);

export default MovieList;
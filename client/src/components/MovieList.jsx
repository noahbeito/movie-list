import React from 'react';
import Movie from './Movie.jsx';


const MovieList = ( {movies} ) => (
  // map over movies data and create
  movies.map(movie => <Movie movie={movie} key={movie.title}/>)
);

export default MovieList;
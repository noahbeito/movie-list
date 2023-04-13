import React from 'react';

const Movie = ( {movie, handleWatched} ) => (
    <div>
      <h5>{movie.title}</h5>
      <button onClick={() => {handleWatched(movie)}}>{movie.watched}</button>
    </div>
);


export default Movie;
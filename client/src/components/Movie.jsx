import React from 'react';

const Movie = ( {movie, handleWatched} ) => (
    <div className="movie">
      <h5 className="title">{movie.title}</h5>
      <button className={movie.watched === 'Watched' ? 'watched' : 'toWatch'} onClick={() => {handleWatched(movie)}}>{movie.watched}</button>
    </div>
);


export default Movie;
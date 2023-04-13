import React from 'react';

const Movie = ( {movie, handleWatched} ) => (
    <div className="movie">
      <h5 className="title" onClick={() => {handleTitleClick(movie)}}>{movie.title}</h5>
      <button className={movie.watched === 'Watched' ? 'watched' : 'toWatch'} onClick={() => {handleWatched(movie)}}>{movie.watched}</button>
      {/*
      { if (movie.expand) {
        <div className="movie-details">
        { make title clickable. the click handler in app could toggle an expand property in movie
          if expand is true, create a new div here with the extra movie info
          movie.map((key) => (<div>{key + ': ' + movie[key]}</div>))
          }
        </div>
       }
      }
    */}
    </div>
);


export default Movie;
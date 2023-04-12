import React from 'react';
import movies from '../movieData.js';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';

const { useState } = React;

const App = (props) => {
  const [movieList, setMovieList] = useState(movies);
  const [userInput, setUserInput] = useState('');
  // create a handle change function to be passed down to Search as a prop.
  const handleChange = function(value) {
    // if user deletes all text from input field, render default movie list
    if (value.length === 0) {
      setMovieList(movies);
    }
    // update userInput state based off event.target.value
    setUserInput(value);
  };

  const handleClick = function() {
    // compare user input state to movies data

    // create empty newMoviesList array
    const newMoviesList = [];
    // iterate movies
    movies.forEach(function(movie) {
      // change title to lowercase to work around case sensitivity of includes method
      var title = movie.title.toLowerCase();
      // if input matches part of a movie title
      if (title.includes(userInput)) {
        //  push to new movies list
        newMoviesList.push(movie);
      }
    });

    if (newMoviesList.length === 0) {
      setMovieList([{title: 'No movie by that name found...'}])
      return;
    }
    // setMovieList(newmovieslist)
    setMovieList(newMoviesList);

  };

  // useEffect();

  return (
    <div>
      <h1>Movie List</h1>
      <Search handleChange={handleChange} handleClick={handleClick} />
      <MovieList movies={movieList} />
    </div>
  );
};

export default App;
import React from 'react';
import movies from '../movieData.js';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import AddMovie from './AddMovie.jsx';

const { useState } = React;

const App = (props) => {
  const [movieList, setMovieList] = useState(movies);
  const [userSearchInput, setUserSearchInput] = useState('');
  const [userAddInput, setUserAddInput] = useState('');

  // create a handle change function to be passed down to Search as a prop.
  const handleSearchChange = function(value) {
    // if user deletes all text from input field, render default movie list
    if (value.length === 0) {
      setMovieList(movies);
    }
    setUserSearchInput(value);
  };

  const handleSearchClick = function() {
    const newMoviesList = [];
    movies.forEach(function(movie) {
      var title = movie.title.toLowerCase();
      if (title.includes(userSearchInput)) {
        newMoviesList.push(movie);
      }
    });

    if (newMoviesList.length === 0) {
      setMovieList([{title: 'No movie by that name found...'}])
      return;
    }
    setMovieList(newMoviesList);
  };

  // add handle add movie change
  const handleAddChange = function(value) {
    setUserAddInput(value);
  };
  // add handle add movie click
  const handleAddClick = function() {
    if (userAddInput.length > 0) {
      const newMovieObj = {
        title: userAddInput,
      }
      movies.unshift(newMovieObj);
      setMovieList(movies);
      setUserAddInput(''); // not sure why this doesnt reset input field to blank
    }
  };


  return (
    <div>
      <h1>Movie List</h1>
      <AddMovie handleAddChange={handleAddChange} handleAddClick={handleAddClick} />
      <Search handleSearchChange={handleSearchChange} handleSearchClick={handleSearchClick} />
      <MovieList movies={movieList} />
    </div>
  );
};

export default App;


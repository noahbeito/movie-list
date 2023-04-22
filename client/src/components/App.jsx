import React from 'react';
import movies from '../movieData.js';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import AddMovie from './AddMovie.jsx';
import WatchedFilter from './WatchedFilter.jsx';
const axios = require('axios');

const { useState, useEffect } = React;


const App = (props) => {
  const [movieList, setMovieList] = useState(movies);
  const [userSearchInput, setUserSearchInput] = useState('');
  const [userAddInput, setUserAddInput] = useState('');


  //*******************************************************************//
  // send an asynch read all GET request to the server
  // upon response, setMovieList with movie data
  //*******************************************************************//

  useEffect(() => {
    axios.get('/api/movies')
      .then((response) => {
        console.log("RESPONSE:", response.data);
        if (Array.isArray(response.data)) {
          setMovieList(response.data) /// need to make sure this is array of movie objects. Where is best to manipulate response data into obj. models maybe
        } else {
          setMovieList([]);
        }
      })
      .catch((error) => {
        // handle error
      })
  }, []);

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


  //*******************************************************************//
  // in handle add click below:
  // send an asynch post request to the server
  // so that it will eventually add a new movie to the
  // movie list table in the db
  //*******************************************************************//
  // add handle add movie click
  const handleAddClick = function() {
    if (userAddInput.length > 0) {
      // const newMovieObj = {
      //   title: userAddInput,
      //   watched: 'To Watch',
      //   expand: false,
      //   year: '1999',
      //   runtime: '105 min',
      //   metascore: '55',
      //   imdbRating: '7.4',
      // }
      // movies.push(newMovieObj);
      // setMovieList(movies);
      // setUserAddInput(''); // not sure why this doesnt reset input field to blank when add button is clicked
      // /// maybe move the old code above in here

      axios.post('/api/movies', {
        title: userAddInput,
        watched: 'To Watch',
        release_year: '',
        runtime: '',
        metascore: '',
        imbdRating: '',
      })
      .then(() => {
        axios.get('/api/movies').then((response) => {
          setMovieList(response.data);
        })
      })
      .catch(() => {
        // handle error
      })
    }
  };

  // click handler for toggling watched
  const handleWatched = function(movie) {
    if (movie.watched === 'To Watch') {
      movie.watched = 'Watched';
    } else if (movie.watched === 'Watched') {
      movie.watched = 'To Watch';
    }

    const newMovies = movies.slice();
    setMovieList(newMovies);
  };

  // click handler for watched list and to watch list buttons
  const handleWatchedButtons = function(button) {
    // if event target value is 'Watched'
    console.log(button);
    if (button === 'Watched') {
      // create new watchedList array
      const watchedList = [];
      // iterate movies data
      movies.forEach(function(movie) {
        // if movie is watched
        if (movie.watched === 'Watched') {
          // push to watched list array
          watchedList.push(movie);
        }
      })
      // set movies list state to new watched list array
      setMovieList(watchedList);
    }

    // if event target value is 'To Watch'
    if (button === 'To Watch') {
      // create new toWatchList array
      const toWatchList = [];
      // iterate movies data
      movies.forEach(function(movie) {
        // if movie is 'to watch'
        if (movie.watched === 'To Watch') {
          // push to towatchlist array
          toWatchList.push(movie);
        }
      })
      // set movie list state to new to watch array
      setMovieList(toWatchList);
    }

    // for an all button
    if (button === 'All') {
      const allMovies = movies.slice();
      setMovieList(allMovies);
    }
  };

  // click handler for a title click
  const handleTitleClick = function(movie) {
    // change the expand property to true
    movie.expand = true;
    const updatedMovies = movies.slice();
    setMovieList(updatedMovies);
  };

  return (
    <div className="container">
      <h1>Movie List</h1>
      <AddMovie handleAddChange={handleAddChange} handleAddClick={handleAddClick} />
      <Search handleSearchChange={handleSearchChange} handleSearchClick={handleSearchClick} />
      <WatchedFilter handleWatchedButtons={handleWatchedButtons}/>
      <MovieList movies={movieList} handleWatched={handleWatched} handleTitleClick={handleTitleClick}/>
    </div>
  );
};

export default App;


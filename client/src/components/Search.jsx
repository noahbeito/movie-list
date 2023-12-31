import React from 'react';

// recieve handle change as a prop

// set up an onChange for input, store this input somewhere

// set up a handle click in go button that calls a
// handle click function that changes state of movie list

const Search = ( {handleSearchChange, handleSearchClick} ) => (
  <div>
    <input type="text" onChange={(event) => (handleSearchChange(event.target.value.toLowerCase()))}></input>
    <button onClick={() => (handleSearchClick())}>Go!</button>
  </div>
);

export default Search;
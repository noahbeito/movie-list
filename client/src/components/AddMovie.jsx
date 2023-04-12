import React from 'react';

const AddMovie = ( {handleAddChange, handleAddClick} ) => (
  <div>
    <input type="text" onChange={(event) => (handleAddChange(event.target.value))}></input>
    <button onClick={() => (handleAddClick())}>Add</button>
  </div>
);

export default AddMovie;
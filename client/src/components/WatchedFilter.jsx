import React from 'react';

const WatchedFilter = ( {handleWatchedButtons} ) => (
  <div className="buttons-container">
    <button value="All" onClick={(event) => {handleWatchedButtons(event.target.value)}}>All</button>
    <button value="Watched" onClick={(event) => {handleWatchedButtons(event.target.value)}}>Watched</button>
    <button value="To Watch" onClick={(event) => {handleWatchedButtons(event.target.value)}}>To Watch</button>
  </div>
);

export default WatchedFilter;
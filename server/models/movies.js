// import as necessary  - the db
const db = require('../db/index');


const models = {
  getAll: function() {
    // query the database using db.query ----- PROMISE instead of callback?
      // use mysql SELECT to select the needed data

      const querySQL = 'SELECT title, watched FROM movies;';
      return db.promise().query(querySQL);

  },

  post: function(movie) {
    // query the db using db.query ------ PROMISE?
      // use mysql INSERT statement to insert the data
        // make sure to select the right columns for each data property
    console.log('MODELS POST:', movie.title, movie.watched);
    const querySQL = 'INSERT INTO movies (title, watched) VALUES (?, ?);';
    return db.promise().query(querySQL, [movie.title, movie.watched]);
  }
}


// export

module.exports.models = models;


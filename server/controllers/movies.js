// import as necessary - models
const { models } = require('../models/movies');
const express = require('express');

// console.log('MODELS', models);
const controllers = {

  get: function(req, res) {
    models.getAll()
      .then((movies) => {
        console.log('MOVIES[0]------', movies[0]);
        res.send(movies[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  },


  post: function(req, res) {
    // call the post/create method from models
    models.post(req.body)
    .then(() => {
      // if success, return success status code
      models.getAll()
        .then((response) => {
          res.send(response[0]);
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }
};


// export

module.exports.controllers = controllers;
// make imports as necessary
const { controllers } = require('./controllers/movies');
const router = require('express').Router();


// define routes for get and post requests
router.get('/movies', controllers.get);

router.post('/movies', controllers.post);

// export routes

module.exports = router;
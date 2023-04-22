const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;

const morgan = require('morgan');
const cors = require('cors');

app.set('port', 3000);


app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

const router = require('./routes.js');

app.use('/api', router);


app.use(express.static('client/dist'));

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})

module.exports.app = app;
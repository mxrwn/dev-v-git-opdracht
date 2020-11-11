const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(helmet())
  .use(cors())
  .use(morgan('dev'))

app.get('/', (req, res, next) => {
  res.json({
    message: '✔',
  });
});

app.post('/', (req, res, next) => {
  res.json({
    message: 'POST REQUEST MADE 🥖',
  });
});

app.listen(4000, () => {
  console.log('Server started on port 4000 ✔');
});
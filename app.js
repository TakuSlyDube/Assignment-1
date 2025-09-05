const express = require('express');
const app = express();
const rateLimit = require('express-rate-limit');
require('dotenv').config();
const fixtureRouter = require('./routes/fixtureRouter');

app.use(express.json());

app.use('/api', fixtureRouter);

const PORT = process.env.PORT || 3000;


app.use((error, req, res, next) => {
  console.error(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message, data });
});

let limiter = rateLimit({
  max:1000,
  windowMS: 60 * 60 * 1000,
  message: " too many request from this IP. Please try again later."
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


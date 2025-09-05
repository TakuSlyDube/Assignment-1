const express = require('express');
const app = express();
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

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


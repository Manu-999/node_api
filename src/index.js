const express = require('express');
const app = express();
const personRoute = require('./routes/person');
const path = require('path');
const bodyParser = require('body-parser');
const customerRoute = require('./routes/customer');

app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(`${new Date().toString()} => ${req.originalUrl}`);
  next();
});

app.use(personRoute);
app.use(customerRoute);
app.use(express.static('public'));

//404 Error handler
app.use((req, res, next) => {
  res.status(404).send('We think you are lost');
});

//500 error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.sendFile(path.join(__dirname, '../public/500.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.info(`Server has started on ${PORT}`));

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
// parse requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Enable CORS for all HTTP methods
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  const config = require('./config.js');
// Connect to MongoDB
mongoose
  .connect(
    config.url,
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected Correctamente'))
  .catch(err => console.log(err));

  app.get('/', (req, res) => {
    return res.status(200).json({ msg: 'Hola Mundo!! Productos' });
  });


require('./product.routes.js')(app);

// listen on port 3000
app.listen(config.serverport, () => {
  console.log("Server is listening on port: " + config.serverport);
});

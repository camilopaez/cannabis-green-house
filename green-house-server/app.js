const express = require("express");
const bodyParser = require("body-parser");
const config = require('./config')
const InitiateMongoServer = require("./config/db");
const router = require('./components/router');

InitiateMongoServer(config.mongouri);
const app = express();

// Middleware
app.use(bodyParser.json());

//routes
app.use('/',router)


app.listen(config.port, (req, res) => {
  console.log(`Server Started at PORT ${config.port} in ${config.env} mode`);
});


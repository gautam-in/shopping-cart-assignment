/**
 * Required External Modules
 */
 const express = require("express");
 var cors = require('cors')
 const path = require("path");
 var canned = require('canned')
,   http = require('http')
,   opts = { cors: false, response_delay: 1000, logger: process.stdout }

var corsOptions = {
    origin: '*'
  }

can = canned('./server/', opts)
 
/**
 * App Variables
 */
 const app = express();
 const port = process.env.PORT || "8081";
 
/**
 *  App Configuration
 */
console.log(path.join(__dirname, 'static'));
 app.use('/static', express.static(path.join(__dirname, 'static')));

/**
 * Routes Definitions
 * */
 app.use("/", cors(corsOptions), can);

/**
 * Server Activation
 */
 app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });
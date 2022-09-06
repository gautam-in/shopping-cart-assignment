const express = require('express');
const routes = require('./routes/routes.js');
var path = require('path');
var cookieParser = require('cookie-parser')
const db = require('./configuration/database_connection');
const config = require('./configuration/configuration');
const logger = require('./logger/index');
const cors = require('cors')

const app = express();
const port = config.port;

//enable cors
app.use(cors({credentials:true,origin:'http://localhost:8080'}))
app.use(express.json());
//enable cookie parser
app.use(cookieParser())

//connecting with data base
db.connectToDB();
app.use('/',routes);

//expose static folder
app.use("/static", express.static(path.join(__dirname, 'static')));

//watch server
app.listen(port,()=> {
    logger.debug(`Express server is listning on port ${port}`)
})
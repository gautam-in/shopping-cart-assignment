const mongoose = require('mongoose');
const config = require('./configuration');
const logger = require('../logger/index');

//connection to database
connectToDB = ()=>{
    mongoose.connect(`mongodb://localhost/${config.database}`,{useNewUrlParser:true});
    mongoose.connection
    .once('open',()=>logger.debug("database_connection: "+`mongodb://localhost/${config.database}`))
    .on('error',(error)=>logger.error(`database_connection: ${error.message}`))
}

module.exports = { connectToDB };

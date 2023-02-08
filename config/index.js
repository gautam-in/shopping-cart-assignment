const dev = require('./config.dev');

const production = require('./config.prod');

let config = {};

if (process.env.NODE_ENV === 'production') {
    config = production;
} else { //process.env.NODE_ENV === local
    config = dev;
}

module.exports = config;
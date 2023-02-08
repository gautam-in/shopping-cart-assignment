let config = {};
if (process.env.NODE_ENV === 'production') {
    config = require('./webpack.production');
} else { //process.env.NODE_ENV === local
    config = require('./webpack.dev');
}
module.exports = config;
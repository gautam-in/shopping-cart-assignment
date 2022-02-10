const webpack = require('webpack');
const path = require('path');
const env = process.env.NODE_ENV;

module.exports = {
    mode: env == 'production' || env == 'none' ? env : 'development',
    entry: 
    {
        common : path.resolve(__dirname + '/client/scripts/index.js'),
        products : path.resolve(__dirname + '/client/scripts/productsView.js'),
        loginRegister : path.resolve(__dirname + '/client/scripts/loginRegister.js'),
        home : path.resolve(__dirname + '/client/scripts/categories.js'),
    },
    module: {}
};
const express = require('express')
const home = express.Router()
const routeCommon = require('../utils/routeCommon')

/* GET home page. */
home.get('/', function (req, res, next) {
    // console.log(products[0])
    routeCommon.seoInfo({
        title: 'Show bazar-Home',
        page: 'home',
    })
    res.render('pages/home/index', routeCommon.vm)

    // res.render('index', {
    //     title  : '首页',
    //     message: 'hello world',
    //     layout: 'shared-templates',
    //     helpers: {
    //         yell: function (msg) {
    //             return (msg + '!!!');
    //         }
    //     }
    // });
})

home.get('/products', function (req, res, next) {
    var products = require('../mockData/products/index.get.json')
    routeCommon
        .seoInfo({
            title: 'Show bazar-Products',
            page: 'products',
        })
        .productList({
            products,
        })
    res.render('pages/products/index', routeCommon.vm)
})

home.get('/about', function (req, res, next) {
    res.send('Webpack Express project')
})

module.exports = function (app) {
    app.use('/', home)
}

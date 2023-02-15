const express = require('express')
const home = express.Router()
const routeCommon = require('../utils/routeCommon')
const fs = require('fs')

/* GET home page. */
home.get('/', function (req, res, next) {
    // console.log(products[0])
    routeCommon.seoInfo({
        title: 'Show bazar-Home',
        page: 'home',
    })
    res.render('pages/home/index', routeCommon.vm)
})

home.get('/products', function (req, res, next) {
    var products = require('../mockData/products/index.get.json')
    const cartItems = require('../mockData/cartItems/index.get.json')
    products = products.map((product) => {
        return {
            ...product,
            qty: cartItems[product.id] ?? '0',
        }
    })
    const miniCartItems = products.filter((ele) => cartItems[ele.id])
    routeCommon
        .seoInfo({
            title: 'Show bazar-Products',
            page: 'products',
        })
        .productList({
            products,
        })
        .miniCart({
            length: miniCartItems.length,
            items: miniCartItems,
        })
    res.render('pages/products/index', routeCommon.vm)
})

//Api Endpoint to update Cart Items
home.post('/add-to-cart', (req, res, next) => {
    const { id, qty } = req.body
    const fileName = './mockData/cartItems/index.get.json'
    const file = require('../mockData/cartItems/index.get.json')
    if (qty === '0') {
        delete file[id]
    } else {
        file[id] = qty
    }
    fs.writeFile(fileName, JSON.stringify(file), function writeJSON(err) {
        if (err) {
            res.status(400).send({
                status: 'Error',
                message: 'Something went wrong',
            })
            return console.log(err)
        }
        console.log(JSON.stringify(file))
        console.log('writing to ' + fileName)
        res.send({
            status: 'Success',
            message: 'Product added to cart successfully',
        })
    })
})

module.exports = function (app) {
    app.use('/', home)
}

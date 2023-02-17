const express = require('express')
const home = express.Router()
const routeCommon = require('../utils/routeCommon')
const fs = require('fs')
const path = require('path')
const { ExpressHandlebars } = require('express-handlebars')

const Handlebars = new ExpressHandlebars()
home.get('/', function (req, res, next) {
    var products = require('../mockData/products/index.get.json')
    const cartItems = require('../mockData/cartItems/index.get.json')
    const miniCartItems = products.filter((ele) => cartItems[ele.id])
    routeCommon.seoInfo({
        title: 'Show bazar:Home',
        page: 'home',
    }) .miniCart({
        length: miniCartItems.length,
        items: miniCartItems,
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
            title: 'Show bazar:Products',
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
home.get('/signup', function (req, res, next) {
    routeCommon.seoInfo({
        title: 'Show bazar:Signup',
        page: 'signup',
    })
    res.render('pages/signup/index', routeCommon.vm)
})
home.get('/login', function (req, res, next) {
    routeCommon.seoInfo({
        title: 'Show bazar:Login',
        page: 'login',
    })
    res.render('pages/login/index', routeCommon.vm)
})
//Api Endpoint to update Cart Items
home.post('/add-to-cart', (req, res, next) => {
    const { id, qty } = req.body
    const cartItems = require('../mockData/cartItems/index.get.json')
    const isNewProduct = cartItems[id] ? false : true;
    console.log(isNewProduct);
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
        if (isNewProduct) {
            const products = require('../mockData/products/index.get.json')
            const getProduct = products.filter(
                (ele) => ele.id === id
            )[0]
            getProduct.qty = "1";
            const template = Handlebars.render(
                path.resolve(
                    __dirname,
                    '..',
                    'client',
                    'views',
                    'partials',
                    'miniCartItem.hbs'
                ),
                getProduct
            )
            template.then((data) => {
                res.send({
                    status: 'Success',
                    message: 'Product added to cart successfully',
                    template: data.replace(
                        /NaN/,
                        String(Number(getProduct.price) * Number(qty))
                    ),
                })
            })
        } else {
            res.send({
                status: 'Success',
                message: 'Product added to cart successfully',
            })
        }
    })
})

//Redirection 
home.get('*', function(req, res){
    res.status(404).redirect('/');
});
module.exports = function (app) {
    app.use('/', home)
}

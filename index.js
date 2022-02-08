const express = require("express");
const cors = require('cors');
const path = require('path');
const port = 4000;

const projectRouter = require('./routes/products');
const homeRouter = require('./routes/home');

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

//view engine setup
// var hbs = require('hbs');
var hbs = require('express-hbs');
hbs.registerHelper('evenodd', function (index) {
    return index % 2 === 0;
})
hbs.registerHelper('keyExists', function (key) {
    console.log('key ', key);

    return key || typeof key !== 'undefined'
})
hbs.registerHelper('getProducts', function (num1, num2) {
    return num1 * num2
})

app.engine('hbs', hbs.express4({
    partialsDir: __dirname + '/views/partials',
    defaultLayout: __dirname + '/views/layouts/layout'
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

// app.set('views', path.join(__dirname, '/views'));
// app.set('view engine', hbs);
// hbs.registerPartials(__dirname + '/views/partials', function (err) {
//     console.log(err);
// });

//set public path
app.use(express.static(path.join(__dirname, '/public/')));

app.use('/products', projectRouter);
app.use('/', homeRouter);

// app.get('/', (req, res) => {
//     // res.send("Hello World");
//     res.render('products/listing', { title: 'Shopping Cart', products: "productChunks", successMsg: "successMsg", noMessages: "test" })
// })
// app.get('/products', (req, res) => {
//     console.log('products');
//     res.send({ name: 'Nabaraj' })
// })

app.listen(port, () => {
    console.log(`server listening to ${port}`);
})
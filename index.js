const express = require("express");
const cors = require('cors');
const path = require('path');
const port = 4000;

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

//view engine setup
// var hbs = require('hbs');
var hbs = require('express-hbs');

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



app.get('/', (req, res) => {
    // res.send("Hello World");
    res.render('products/listing', { title: 'Shopping Cart', products: "productChunks", successMsg: "successMsg", noMessages: "test" })
})
app.get('/products', (req, res) => {
    console.log('products');
    res.send({ name: 'Nabaraj' })
})

app.listen(port, () => {
    console.log(`server listening to ${port}`);
})
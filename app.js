var glob = require("glob"),
    jsonConcat = require('json-concat'),
    express = require('express'),
    hbs = require('express-handlebars'),
    app = express(),
    indexRouter = require('./resources/js/index'),
    productsRouter = require('./resources/js/product');
    //cartRouter = require('./resources/js/cart');

// options is optional 
glob("./server/**/*.json", null, function(er, files) {
    if (er)
        console.log(er);
    else {
        jsonConcat({
            src: files,
            dest: "./server/db.json"
        }, function(json) {
            console.log(json);
        });
    };
});

app.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/',
}));

/*----------------- adding static files --------------*/
app.use(express.static(__dirname + '/resources'));
/*----------------------------------------------------*/

app.use('/', indexRouter);
app.use('/product', productsRouter);
//app.use('/cart', cartRouter);

app.set('views', __dirname + '/views/');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('index')
});
app.get('/login', (req, res) => {
    res.render('login')
});
app.get('/register', (req, res) => {
    res.render('register')
});
app.get('/product', (req, res) => {
    res.render('product')
});

app.listen(8000, () => {
    console.log('Example app listening on port 8000!')
});

module.exports = app;
import glob from 'glob';
import jsonConcat from 'json-concat';
import express from 'express';
import hbs from 'express-handlebars';
import homeRouter from './resources/js/home';
import productsRouter from './resources/js/product';
import cartRouter from './resources/js/cart';
const app = express();


glob("./server/**/*.json", null, function (er, files) {
    if (er) { }
    else {
        jsonConcat({
            src: files,
            dest: "./server/db.json"
        }, function (json) { });
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

app.use('/', homeRouter);
app.use('/product', productsRouter);
app.use('/cart', cartRouter);

app.set('views', __dirname + '/views/');
app.set('view engine', 'hbs');


/*----------------- rendering view --------------*/

app.get('/', (req, res) => {
    res.render('home')
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
app.get('/cart', (req, res) => {
    res.render('cart')
});

/*-------------------------------------------------*/

app.listen(8000, () => {
    console.log('Example app listening on port 8000!')
});

module.exports = app;
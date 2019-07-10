import glob from 'glob';
import jsonConcat from 'json-concat';
import express from 'express';
import hbs from 'express-handlebars';
import PATH from 'path';
import homeRouter from '../resources/routes/home';
import productsRouter from '../resources/routes/product';
import cartRouter from '../resources/routes/cart';
import data from '../resources/routes/constant';
const app = express();


glob("./server/**/*.json", null, function(er, files) {
    if (er) {} else {
        jsonConcat({
            src: files,
            dest: "./server/db.json"
        }, function(json) {});
    };
});

app.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutDir: PATH.resolve(__dirname, '../views/layouts/'),
    partialsDir: PATH.resolve(__dirname, '../views/partials/'),
}));

/*----------------- adding static files --------------*/
app.use(express.static(PATH.resolve(__dirname, '../resources/')));
app.use(express.static(PATH.resolve(__dirname + '/js/')));
app.use(express.static(PATH.resolve(__dirname + '/css/')));
/*----------------------------------------------------*/

app.use('/', homeRouter);
app.use('/product', productsRouter);
app.use('/cart', cartRouter);

app.set('views', PATH.resolve(__dirname, '../views/'));
app.set('view engine', 'hbs');


/*----------------- rendering view --------------*/

app.get('/', (req, res) => {
    res.render('home')
});
app.get('/login', (req, res) => {
    res.render('login', {
        itemCounter: data.item_counter,
        content: data.content.content
    });
});

app.get('/register', (req, res) => {
    res.render('register', {
        itemCounter: data.item_counter,
        content: data.content.content
    });
});

app.get('/product', (req, res) => {
    res.render('product')
});

app.get('/cart', (req, res) => {
    res.render('cart')
});

/*-------------------------------------------------*/

app.listen(8000, () => {});

module.exports = app;
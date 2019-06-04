const glob = require("glob")
const jsonConcat = require('json-concat');

// options is optional 
glob("./server/**/*.json", null, function (er, files) {
    if (er)
        console.log(er);
    else {
        jsonConcat({
            src: files,
            dest: "./server/db.json"
        }, function (json) {
            console.log(json);
        });
    };
});

var express = require('express');
var hbs = require('express-handlebars');
var app = express();

var indexRouter = require('./resources/js/index');

app.engine('hbs',hbs({
    extname: 'hbs', 
    defaultLayout:'layout', 
    layoutDir: __dirname+'/views/layouts/',
    partialsDir: __dirname+'/views/partials/',
}));

/*----------------- adding javascript and css files --------------*/
app.use(express.static(__dirname + '/resources'));
app.use(express.static(__dirname + '/vendors'));
app.use('/', indexRouter);

/*----------------- adding javascript and css files --------------*/

app.set('views',__dirname+'/views/');
    app.set('view engine','hbs');

app.get('/', (req, res) => {
  res.render('index')
});
app.get('/login', (req, res) => {
    res.render('login')
});
app.get('/register', (req, res) => {
    res.render('register')
});
app.get('/products', (req, res) => {
    res.render('products')
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});


module.exports = app;
const glob = require("glob");
const jsonConcat = require("json-concat");
glob("./server/**/*.json",null,function(er,files){
    if(er){
        console.log(er);
    }
    else{
        jsonConcat({
            src : files,
            dest: "./server/db.json"
        }, function (json){
            console.log(json);
        })
    };
});
const express = require('express');
var exphbs  = require('express-handlebars');  
var app = express();
var mainRouting = require('./scripts/main');
app.engine('hbs', exphbs({
    extname: 'hbs', 
    defaultLayout: 'main',
    partialsDir: __dirname+'/views/partials/',
    layoutDir: __dirname+'/views/layouts/',
}));
app.use(express.static('static'));
app.use(express.static('style'));
app.use(express.static('scripts'));
app.use(express.static('server'));
app.use('/', mainRouting);
app.set('views',__dirname+'/views/');
app.set('view engine', 'hbs');
 
app.get('/', (req, res) => {
    res.render('home',)
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

app.listen(8080, () => {
  console.log('Example app listening on port 8080!')
});
module.exports = app;
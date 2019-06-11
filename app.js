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
var express = require('express');
var exphbs  = require('express-handlebars');  
var app = express();
 
app.engine('hbs', exphbs({
    extname: 'hbs', 
    defaultLayout: 'main',
    partialsDir: __dirname+'/views/partials/',
    layoutDir: __dirname+'/views/layouts/',
}));
app.use(express.static('static'));
app.use(express.static('style'));
app.use(express.static('scripts'));
const fs = require('fs');
let obj = fs.readFileSync('server/banners/index.get.json');  
let banners = JSON.parse(obj);
app.set('views',__dirname+'/views/');
app.set('view engine', 'hbs');
 
app.get('/', (req, res) => {
    res.render('home',{banners: banners.banners})
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
var express = require('express');
var exphbs  = require('express-handlebars');  
var app = express();
var mainRouting = require('./scripts/main');
var cartRouter = require('./scripts/cart');
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
app.use('/cart', cartRouter);
app.set('views',__dirname+'/views/');
app.set('view engine', 'hbs');
app.listen(8080, () => {
  console.log('Example app listening on port 8080!')
});
module.exports = app;
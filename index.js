var express = require('express');
var path = require('path');
var hbs = require('express-handlebars');
var app = express();

app.engine('hbs',hbs({extname: 'hbs', defaultLayout:'layout', layoutDir: __dirname+'/views/pages/'}));
app.set('views',path.join(__dirname,'views/pages'));
app.set('view engine','hbs');
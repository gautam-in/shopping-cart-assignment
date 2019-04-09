// builtin
var fs = require('fs');
var path = require('path')
    // 3rd party
var express = require('express');
// var hbs = require('hbs');
const exphbs = require('express-handlebars');
debugger;
var app = express();
//app.use('/', express.static(path.resolve('dist')));
app.use('/', express.static(path.resolve('dist')));
//hbs.registerPartial('partial', fs.readFileSync(__dirname + '/web/views/partial.hbs', 'utf8'));
// exphbs.registerPartials(__dirname + '/web/views/partials');
// set the view engine to use handlebars
console.log(`server js ${__dirname}`)
    // console.log(`Navin ${req}`)
var hbs = exphbs.create({
    // Uses multiple partials dirs, templates in "shared/templates/" are shared
    // with the client-side of the app (see below).
    extname: '.hbs',
    defaultLayout: path.join(__dirname, './web/views/layouts/layout'),
    partialsDir: [
        path.resolve(__dirname, './web/views/partials/')
    ]
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', __dirname + '/web/views');

app.use(express.static(__dirname + '/web'));

// app.get('/', (req, res) => {
//     console.log('Hey Home Page Route called')
//     res.render('index');
//   });

app.all('/*', function(req, res, next) {
        console.log('Navin', req);
        next(); // call next() here to move on to next middleware/router
    })
    // app.get('/demo1', function(req, res) {
    //     res.locals = {
    //         some_value: 'foo bar',
    //         list: ['cat', 'dog']
    //     }

//     res.render('index');
// });

// app.get('/demo', function(req, res) {
//     res.render('demo');
// });

app.listen(8080);
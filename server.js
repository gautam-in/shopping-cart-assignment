// debugger;
// builtin
// var fs = require('fs');
var path = require('path')
    // 3rd party
var express = require('express');
// var hbs = require('hbs');
const exphbs = require('express-handlebars');
// debugger;
var app = express();
// app.use('/', express.static(path.resolve('dist')));
// app.use('/', express.static(path.resolve('dist')));
//hbs.registerPartial('partial', fs.readFileSync(__dirname + '/web/views/partial.hbs', 'utf8'));
// exphbs.registerPartials(__dirname + '/web/views/partials');
// set the view engine to use handlebars
console.log(`server js ${__dirname}`)
    // console.log(`Navin ${req}`)
var hbs = exphbs.create({
    // Uses multiple partials dirs, templates in "shared/templates/" are shared
    // with the client-side of the app (see below).
    extname: '.hbs',
    defaultLayout: path.join(__dirname, './src/app/layouts/layout'),
    partialsDir: [
        path.resolve(__dirname, './src/app/partials/')
    ]
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('app', __dirname + path.resolve('/src/app'));

//app.use(express.static(__dirname + '/Public'));


app.get('/', (req, res) => {
    // debugger
    console.log('Navin Tyagi', path.join(__dirname, '/src/app/'))
    console.log('Hey Home Page Route called')

    res.render(`${path.join(__dirname, '/src/app/')}index`);
});


app.get('/plp', (req, res) => {
    console.log('Hey Home Page Route called')
    res.render('plp');
});

app.get('/login', (req, res) => {
    console.log('Hey Home Page Route called')
    res.render('login');
});


app.get('/register', (req, res) => {
    console.log('Hey Home Page Route called')
    res.render('register');
});

app.listen(8080);
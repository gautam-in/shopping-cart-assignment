// Require frameworks
const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');
const sassMiddleware = require('node-sass-middleware');
const bodyParser = require('body-parser');
const hbshelpers = require("handlebars-helpers");
const multihelpers = hbshelpers();
var cookieParser = require('cookie-parser');
var session = require('express-session');
const expressValidator = require('express-validator');
// Import the port, if there is one
const PORT = process.env.PORT;

// Import routes
const api = require('./routes-scripts/routes');
const cartroute = require('./routes-scripts/cart');
const login = require('./routes-scripts/login');
const register = require('./routes-scripts/register');

// Configure the app to use express
const app = express();

// Leverage handlebars
app.engine('hbs', hbs({
    helpers: multihelpers,
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: `${__dirname}/src/views/layouts/`,
    partialsDir: `${__dirname}/src/views/common/`,
}));

// Compile SCSS to CSS
app.use(sassMiddleware({
    src: `${__dirname}/src/assets/scss`,
    dest: `${__dirname}/public`,
    outputStyle: 'compressed',
    debug: true,
}));

// Leverage JSON body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());

// Serve assets via the public directory
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'routes-scripts')));

app.use(cookieParser());
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true
}));

app.use(function(req, res, next) {
    res.locals.session = req.session;
    next();
});

// Set the views path
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'hbs');


// Serve all API routes
app.use('/', api);
app.use('/cart', cartroute);
app.use('/login', login);
app.use('/register', register);


// Render the app
app.listen(PORT || 4200, () => console.log('App listening on port 4200! 🐳'));
module.exports = app;
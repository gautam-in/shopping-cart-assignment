// Require frameworks
const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');
const sassMiddleware = require('node-sass-middleware');
const bodyParser = require('body-parser');

// Import the port, if there is one
const PORT = process.env.PORT;

// Import routes
const api = require('./routes');

// Configure the app to use express
const app = express();

// Leverage handlebars
app.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: `${__dirname}/src/views/layouts/`,
    partialsDir: `${__dirname}/src/views/partials`,
}));

// Compile SCSS to CSS
app.use(sassMiddleware({
    src: `${__dirname}/src/assets/scss`,
    dest: `${__dirname}/public`,
    outputStyle: 'compressed',
    debug: true,
}));

// Leverage JSON body parser
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Serve assets via the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Set the views path
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'hbs');

// Middleware to always use https protocol when in production
// app.use((req, res, next) => {
//   const host = req.headers.host;
//   if (host.startsWith('localhost')) next();
//   else {
//     if (req.headers['x-forwarded-proto'] === 'https') next();
//     else res.redirect(`https://${req.headers.host}${req.url}`);
//   }
// });

// Serve all API routes
app.use('/', api);

// Render the app
app.listen(PORT || 4200, () => console.log('App listening on port 4200! 🐳'));
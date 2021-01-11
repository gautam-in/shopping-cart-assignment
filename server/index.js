// const canned = require('canned');
// const http = require('http');
// const opts = {
//   cors: true,
//   cors_headers: ["Content-Type", "Location"]
// };
// // server\addToCart
// // /path/to/canned/response/folder (default)
// const can = canned('server/addToCart', opts);

// http.createServer(can).listen(3000);

// ----------------------------------------------------------------

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false  
}));

app.use(cors());

// app.use('/public', express.static('public'));


// import routes
const router     = require('./router');
// register routes
app.use('/api', router);


const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log('Connected to port '+port);
});

app.use((req, res, next) => {
    setImmediate(() => {
        res.status(500).json({
            status: false,
            message: "Something went wrong!"
        });
    });
});

app.use(function(err, req, res, next){
    console.error(err.message);
    if(!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});
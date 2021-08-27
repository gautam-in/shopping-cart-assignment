const path = require('path');
const apiRoutes = require('./api.js');

const appRouter = (app, fs) => {
    app.get('/', function(req, res){
        res.sendFile(path.join(__dirname, '../pages/home.html'))
    });
    app.get('/productList', function(req, res){
        res.sendFile(path.join(__dirname, '../pages/products.html'))
    });
    apiRoutes(app, fs);
}
module.exports = appRouter;
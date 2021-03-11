import * as express from 'express';
import {Application} from 'express';
import {login} from './application-route';
import {banner} from './application-route';
import {category} from './application-route';
import {products} from './application-route';
import {addToCart} from './application-route';


const compression = require('compression');
const bodyParser = require('body-parser');
const app: Application = express();
app.use(compression());
app.use(bodyParser.json());
app.route('/login').post(login);

app.route('/banners').get(banner);

app.route('/categories').get(category);

app.route('/products').get(products);

app.route('/addToCart').post(addToCart);

const httpServer: any = app.listen(3000, () => {
    console.log('HTTP REST API Server running at http://localhost:' + httpServer.address().port);
});
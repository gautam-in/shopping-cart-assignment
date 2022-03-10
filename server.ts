/***************************************************************************************************
 * Load `$localize` onto the global scope - used if i18n tags appear in Angular templates.
 */
import '@angular/localize/init';
import 'zone.js/dist/zone-node';

import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';


import { join } from 'path';
import { AppServerModule } from './src/main.server';
import { APP_BASE_HREF } from '@angular/common';
import { existsSync } from 'fs';
const bodyParser = require('body-parser');
const bannerData = require('./server/banners/index.get.json');
const categoryData = require('./server/categories/index.get.json');
const productData = require('./server/products/index.get.json');
const addToCart = require('./server/addToCart/index.post.json');
// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const distFolder = join(process.cwd(), 'dist/sabka-bazar/browser');
  const indexHtml = existsSync(join(distFolder, 'index.original.html'))
    ? 'index.original.html'
    : 'index';

  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
  server.engine(
    'html',
    ngExpressEngine({
      bootstrap: AppServerModule,
    })
  );

  server.set('view engine', 'html');
  server.set('views', distFolder);
  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });

  server.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Expose-Headers', 'Content-Disposition');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', 'POST,GET,PUT,DELETE,OPTIONS');
    next();
  });
  server.use(bodyParser.urlencoded({ extended: false }));
  server.use(bodyParser.json({ limit: '1024mb' }));
  /* GET Banners. */
  server.get('/api/banners', (req, res, next) => {
    res.status(200).send(bannerData);
  });

  /* GET Product Cateogories. */
  server.get('/api/category', (req, res, next) => {
    res.status(200).send(categoryData);
  });

  /* GET Product list. */
  server.get('/api/products/:categoryId?', (req, res, next) => {
    let data = req.params.categoryId
      ? [...productData].filter((x) => x.category === req.params.categoryId)
      : productData;
    res.status(200).send(data);
  });

  /* GET Product list. */
  server.post('/api/addToCart', (req, res, next) => {
    res.status(200).send(addToCart);
  });

  // Serve static files from /browser
  server.get(
    '*.*',
    express.static(distFolder, {
      maxAge: '1y',
    })
  );

  // All regular routes use the Universal engine
  server.get('*', (req, res) => {
    res.render(indexHtml, {
      req,
      providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }],
    });
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 3000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = (mainModule && mainModule.filename) || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

export * from './src/main.server';

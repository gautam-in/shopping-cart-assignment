import 'zone.js/dist/zone-node';

import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import { join } from 'path';

import { AppServerModule } from './src/main.server';
import { APP_BASE_HREF } from '@angular/common';
import { existsSync } from 'fs';
import * as cookieParser from 'cookie-parser';

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const distFolder = join(process.cwd(), 'dist/shopping-cart-client/browser');
  const indexHtml = existsSync(join(distFolder, 'index.original.html'))
    ? 'index.original.html'
    : 'index';

  const gzipStatic = require('connect-gzip-static');
  const oneDay = 86400000;

  server.use(cookieParser());

  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
  server.engine(
    'html',
    ngExpressEngine({
      bootstrap: AppServerModule,
    })
  );

  // add CSP header
  server.use(function (_, res, next) {
    const defaultSrc = "'self'";
    const styleSrc = "'self' 'unsafe-inline' fonts.googleapis.com";
    const fontSrc = "'self' fonts.gstatic.com";
    const connectSrc =
      "'self' localhost:5000 fonts.googleapis.com fonts.gstatic.com";

    res.setHeader(
      'Content-Security-Policy',
      `default-src ${defaultSrc}; style-src ${styleSrc}; font-src ${fontSrc}; connect-src ${connectSrc};`
    );

    return next();
  });

  server.set('view engine', 'html');
  server.set('views', distFolder);

  server.use(gzipStatic(distFolder));

  server.use(gzipStatic(distFolder, { maxAge: oneDay }));

  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser

  // serve robots.txt file for SEO
  server.get('/robots.txt', (_, res) => {
    res.sendFile(distFolder + '/robots.txt');
  });

  // Authenticate user (DUMMY)
  server.post('/authenticate', (_, res) => {
    res.cookie('id', '12345', {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
    });
    res.cookie('XSRF-TOKEN', Math.random() * 100000, {
      secure: true,
      sameSite: 'strict',
    });
    res.send();
  });

  server.get(
    '*.*',
    express.static(distFolder, {
      maxAge: '1y',
    })
  );

  // All regular routes use the Universal engine
  server.get('*', (req, res) => {
    // check if user is authenticated. If not, redirect to login page
    if (
      (!req.cookies || !req.cookies.id) &&
      !(req.url.includes('/login') || req.url.includes('/register'))
    ) {
      res.redirect('/user/login');
      return;
    }

    res.render(indexHtml, {
      req,
      providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }],
    });
  });

  return server;
}

function run(): void {
  const port = process.env.PORT || 4000;

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

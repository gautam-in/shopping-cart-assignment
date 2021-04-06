/* eslint-disable no-underscore-dangle */
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';
import StyleContext from 'isomorphic-style-loader/StyleContext';
import { Helmet } from 'react-helmet';
import Routes from '../client/Routes';

export default (req, store, context) => {
  const css = new Set(); // CSS for all rendered React components
  const insertCss = (...styles) => (
    styles ? styles.forEach((style) => css.add(style._getCss())) : []
  );
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <StyleContext.Provider value={{ insertCss }}>
          {renderRoutes(Routes)}
        </StyleContext.Provider>
      </StaticRouter>
    </Provider>,
  );

  const helmet = Helmet.renderStatic();

  return `
  <!DOCTYPE html>
    <html lang="en">  
      <head>
        <meta charset="utf-8" />
        <!-- IE -->
        <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
        <!-- other browsers -->
        <link rel="icon" type="image/x-icon" href="favicon.ico" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no"/>
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="code exercise"
        />
        <title>Sabka Bazaar</title>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        <style>${[...css].join('')}</style>
      </head>
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <main id="root">${content}</main>
        <script>
          window.INITIAL_STATE = ${serialize(store.getState())}
        </script>
        <script src="bundle.js" defer></script>
      </body>
    </html>
  `;
};

const  { createProxyMiddleware } = require('http-proxy-middleware');
 

module.exports = function(app) {
  app.use(createProxyMiddleware('/auth/*', { target: 'http://[::1]:8080' }))
  // app.use(createProxyMiddleware('/*', { target: 'http://[::1]:3000' }))
  app.use(createProxyMiddleware('/*', { target: 'http://localhost:5000' }))
}

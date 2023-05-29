const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://testerp1apis.nextsolutions.in', // Replace with your API endpoint
      changeOrigin: true,
    })
  );    
};
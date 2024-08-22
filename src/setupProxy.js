const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
    '/backend',
    createProxyMiddleware({
      target: 'http://localhost:8000', // Backend server address
        changeOrigin: true,
        pathRewrite: {
        '^/backend': '', // Remove /backend from the URL path
        },
    })
    );
};

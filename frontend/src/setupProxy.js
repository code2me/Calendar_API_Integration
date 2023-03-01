const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://calenderapp-navneetbahuguna007.b4a.run:4000',
            changeOrigin: true,
        })
    );
};
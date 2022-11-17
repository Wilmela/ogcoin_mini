const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://tarmex.io',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/api/v1',
      },
    }),
  );
};

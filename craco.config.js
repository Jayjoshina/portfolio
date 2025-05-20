module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Fix deprecation warnings
      if (webpackConfig.devServer) {
        // Replace deprecated middleware options with setupMiddlewares
        const devServer = webpackConfig.devServer;
        const { onBeforeSetupMiddleware, onAfterSetupMiddleware } = devServer;

        if (onBeforeSetupMiddleware || onAfterSetupMiddleware) {
          devServer.setupMiddlewares = (middlewares, devServer) => {
            if (onBeforeSetupMiddleware) {
              onBeforeSetupMiddleware(devServer);
            }
            
            if (onAfterSetupMiddleware) {
              onAfterSetupMiddleware(devServer);
            }
            
            return middlewares;
          };
          
          // Remove deprecated options
          delete devServer.onBeforeSetupMiddleware;
          delete devServer.onAfterSetupMiddleware;
        }
      }
      
      return webpackConfig;
    },
  },
};

const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
              '@primary-color': '#4ECDC4',
              '@link-color'   : '#4ECDC4',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
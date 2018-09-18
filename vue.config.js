const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, '/client'),
        va: 'vue2-admin-lte/src',
      },
    },
  },
  outputDir: 'dist',
  pages: {
    index: {
      entry: 'client/main.ts',
      template: 'client/public/index.html',
      filename: 'index.html',
    },
  },
};

const merge = require('webpack-merge');
const path = require('path');

const commonConfig = require('./webpack.config.common');

module.exports = merge(commonConfig, {
  mode: 'development',
  entry: './test/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.test.js'
  }
})
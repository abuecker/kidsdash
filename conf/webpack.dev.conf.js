/* eslint no-var: 0 */
var webpack = require('webpack');
var config = require('./webpack.shared.conf');

config.devtool = 'eval';
config.cache = true;

config.plugins.concat = config.plugins.concat([
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
]);

config.devServer = {
  port: 8080,
  inline: true,
  hot: true,
  noInfo: true,
  colors: true
};

module.exports = config;

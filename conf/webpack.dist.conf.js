/* eslint no-var: 0 */
var webpack = require('webpack');
var config = require('./webpack.shared.conf');
var fs = require('fs');
var path = require('path');
var HTMLWebpackPlugin = require('html-webpack-plugin');

// Load the banner
var banner = fs.readFileSync(
  path.join(__dirname, '..', 'banner.txt'),
  {encoding: 'utf8'}
);

/**
 * Set the production flag so we don't add React HMR
 */
process.env.NODE_ENV = 'production';

/**
 * Overload configuration values
 */
config.output.path = path.join(__dirname, '..', 'dist');

config.plugins.concat = config.plugins.concat([
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    },
    comments: true,
    sourceMap: false
  }),
  new webpack.BannerPlugin(banner)
]);

module.exports = config;

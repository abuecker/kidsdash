/* eslint no-var: 0 */
var webpack = require('webpack');
var path = require('path');
var pathToFA = path.join(
  __dirname, '..', 'node_modules', 'font-awesome', 'css', 'font-awesome.css'
);
var HTMLWebpackPlugin = require('html-webpack-plugin');
var pkg = require('../package.json');

module.exports = {
  context: path.join(__dirname, '..', 'src'),
  entry: {
    app: './js/index.jsx',
    stylesheets: './js/stylesheets.js',
    vendor: ['react', 'moment']
  },
  output: {
    path: path.join(__dirname, '..', 'dev'),
    publicPath: '/',
    filename: '[name].' + pkg.name + '.[hash:6].js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(
      'vendor', 'vendor.' + pkg.name + '.[hash:6].js'
    ),
    new HTMLWebpackPlugin({
      template: './src/index.template.html',
      favicon: './src/favicon.ico'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    preLoaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|libs)/,
      loader: 'eslint-loader'
    }],
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|libs)/,
      loader: 'transform/cacheable?envify'
    }, {
      test: /\.jsx?$/,
      exclude: /(node_modules|libs)/,
      loader: 'babel-loader',
      cacheDirectory: '.wpack'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\/fonts\/.+\.(eot|otf|ttf|woff2?|svg)(\?.+)?$/,
      loader: 'url?limit=10000&name=assets/fonts/[name].[hash:6].[ext]'
    }, {
      test: /.*\.(gif|png|jpe?g|svg|webm|mp4)$/i,
      loaders: [
        'url?limit=10000&hash=sha512&digest=hex&name=' +
        'assets/img/[name].[hash:6].[ext]'
      ]
    }]
  },
  noParse: [
  ],
  resolve: {
    alias: {
      'assets': path.join(__dirname, '..', 'src', 'assets'),
      'utils': path.join(__dirname, '..', 'src', 'js', 'utils'),
      'components': path.join(__dirname, '..', 'src', 'js', 'components'),
      'root': path.join(__dirname, '..', 'src', 'js'),
      'fontawesome': pathToFA,
      'css': path.join(__dirname, '..', 'src', 'css'),
      'stores': path.join(__dirname, '..', 'src', 'js', 'stores'),
      'libs': path.join(__dirname, '..', 'src', 'js', 'libs')
    }
  }
};

/* eslint no-var: 0 */
var webpackConfig = require('../conf/webpack.dist.conf');

module.exports = function() {
  return {
    options: webpackConfig,
    dist: {
      failOnError: true,
      stats: {
        colors: true,
        timings: true,
        reasons: true
      }
    }
  };
};

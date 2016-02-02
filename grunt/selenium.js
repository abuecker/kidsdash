var selenium = require('selenium-standalone');

module.exports = function (grunt) {

  grunt.registerMultiTask('selenium', '', function () {

    var done = this.async();

    // install selenium
    selenium.install({
      logger: function (message) {
        console.log(message)
      }
    }, function (err) {
      if (err) return done(err);

      // start the selenium server
      selenium.start(function (err, child) {
        if (err) return done(err);

        // store the child process
        selenium.child = child;

        // Cleanup on exit
        process.on('exit', function(err) {
          selenium.child.kill();
        });

        // all done
        done();

      });

    });

  });

  return {
    options: {},
    all: {},
  };

};

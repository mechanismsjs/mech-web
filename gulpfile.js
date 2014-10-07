var gulp = require('gulp');
var gutil = require('gulp-util');
var mocha = require('gulp-mocha');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var browserify = require('browserify');
var transform = require('vinyl-transform');

gulp.task('default', ['browserify','watch-browserify']);

gulp.task('watch-browserify', function() {
   return gulp.watch(['./mech-web.js'], ['browserify']);
});

gulp.task('browserify', function() {
   // Single entry point to browserify
    
   var browserified = transform(function(filename) {
       return browserify()
         .require('./mech-web.js', {expose: 'mech-web'})
         .require('mech-core', {expose: 'mech-core'})
         .bundle();
   });

   return gulp.src('./mech-web.js')
      .pipe(browserified)
      .pipe(rename('mech-web.brow.js'))
      .pipe(gulp.dest('./public/'))
      .pipe(rename('mech-web.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('./public/'))
      .on('error', gutil.log);
});

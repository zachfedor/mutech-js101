'use strict';

const gulp = require('gulp');
const browserSync = require('browser-sync').create();

const paths = {
  htmlGlob: './**/*.html',
  jsGlob: './**/*.js'
};


gulp.task('serve', function() {
  browserSync.init({
    server: true
  });

  gulp.watch(paths.htmlGlob).on('change', browserSync.reload);
  gulp.watch(paths.jsGlob).on('change', browserSync.reload);
});

gulp.task('default', ['serve']);


'use strict';

const gulp = require('gulp');
const browserSync = require('browser-sync').create();

const paths = {
  htmlGlob: './src/**/*.html',
  jsGlob: './src/**/*.js'
};


gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: 'src',
    }
  });

  gulp.watch(paths.htmlGlob).on('change', browserSync.reload);
  gulp.watch(paths.jsGlob).on('change', browserSync.reload);
});

gulp.task('default', ['serve']);


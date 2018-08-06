'use strict';

const gulp = require('gulp');
const htmlhint = require('gulp-htmlhint');

const pubDir = global.conf.ui.paths.public;
const rootDir = global.rootDir;

gulp.task('htmlhint', function () {
  return gulp.src(pubDir.patterns + '/*/!(index|*markup-only).html')
    .pipe(htmlhint({htmlhintrc: `${rootDir}/.htmlhintrc`}))
    .pipe(htmlhint.reporter());
});

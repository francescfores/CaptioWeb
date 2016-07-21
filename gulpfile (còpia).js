'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

gulp.task('default', function () { 
    console.log('Hello Gulp!') 
});

 
gulp.task('sass', function () {

  return gulp.src('bootstrap-sass/assets/stylesheets/bootstrap.scss')    
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('assets/css/'))
    //.pipe(gulp.dest('assets/css'));
});
 
gulp.task('watch', function(){
  gulp.watch('bootstrap-sass/assets/stylesheets/bootstrap.scss'); 
  // Other watchers
});
var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
const bowserSync = require('browser-sync').create()


// gulp.task('sass', function(){
//   return gulp.src('./style/**/*.scss')
//     .pipe(sass()) // Converts Sass to CSS with gulp-sass
//     .pipe(gulp.dest('./css'))
// });

function style(){
  return gulp.src('./style/**/*.scss')
  .pipe(sass()) // Converts Sass to CSS with gulp-sass
  .pipe(gulp.dest('./css'))
  .pipe(bowserSync.stream)
}
exports.style = style;

// gulp.task('watch', function(){ //v3 gulp, pokreces sa gulp watch
//   gulp.watch('./style/**/*.scss', gulp.series('style')); //ovo style u gulp.series() je funkcija style() definisana iznad
//   // Other watchers
// })

function watch(){  //v4 gulp, pokreces sa gulp watch
  bowserSync.init({
    server:{
      baseDir:'./'
    }
  });

  gulp.watch('./style/**/*.scss', style)
}
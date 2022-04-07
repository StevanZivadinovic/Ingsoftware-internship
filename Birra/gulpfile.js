// npm install sass gulp-sass --save-dev


var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
// const bowserSync = require('browser-sync').create()

// gulp.task('sass', function(){ //v3
//   return gulp.src('./style/**/*.scss')
//     .pipe(sass()) // Converts Sass to CSS with gulp-sass
//     .pipe(gulp.dest('./css'))
// });

function style(){ //v4
  return gulp.src('./style/**/*.scss')
  .pipe(sass()) // Converts Sass to CSS with gulp-sass
  .pipe(gulp.dest('./css'))
  // .pipe(bowserSync.stream)
}
exports.style = style;

gulp.task('watch', function(){ //v3 gulp
  gulp.watch('./style/**/*.scss', gulp.series('style')); //this style in gulp.series() is funkction style() define above
  // Other watchers
})

// function watch(){  //v4 gulp
//   bowserSync.init({
//     server:{
//       baseDir:'./'
//     }
//   });

//   gulp.watch('./style/**/*.scss', style)
// }
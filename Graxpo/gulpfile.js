var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
// const bowserSync = require('browser-sync').create()//ovo nisam instalirao, mora se instalira da bi radio zadnji deo koda, sad 
//kombinujem gulp v3 i v4 verzije


// gulp.task('sass', function(){ //v3, prvi deo koda
//   return gulp.src('./style/**/*.scss')
//     .pipe(sass()) // Converts Sass to CSS with gulp-sass
//     .pipe(gulp.dest('./css'))
// });

function style(){ //v4, prvi deo koda
  return gulp.src('./style/**/*.scss')
  .pipe(sass()) // Converts Sass to CSS with gulp-sass
  .pipe(gulp.dest('./css'))
  // .pipe(bowserSync.stream)
}
exports.style = style;

gulp.task('watch', function(){ //v3 gulp, pokreces sa gulp watch, drugi deo
  gulp.watch('./style/**/*.scss', gulp.series('style')); //ovo style u gulp.series() je funkcija style() definisana iznad
  // Other watchers
})

// function watch(){  //v4 gulp, pokreces sa gulp watch, drugi deo
//   bowserSync.init({
//     server:{
//       baseDir:'./'
//     }
//   });

//   gulp.watch('./style/**/*.scss', style)
// }
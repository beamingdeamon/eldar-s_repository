
const { gulp} = require('gulp')
const { watch, series} = require('gulp')
const { src, dest} = require('gulp')
const webserver = require('gulp-webserver')

function html (){
  return src('src/*.html')
  .pipe(dest('app/'))
}
 
// gulp.task('webserver', function() {
//   gulp.src('app')
//     .pipe(webserver({
//       livereload: true,
//       directoryListing: true,
//       open: true,
//       fallback: 'index.html'
//     }))
// })

exports.default = function() {
  watch('src/*html', html)
  // watch('src/styles/**/*.css', css)
  // watch('src/styles/**/*.scss', scss)

  // watch('src/assets/**/*', assets)
  // watch('src/scripts/**/*.js', scripts)

  // watch('src/*.js', series(clean, javascript))
};
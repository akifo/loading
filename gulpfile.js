var gulp  = require('gulp');
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');
var stylus = require('gulp-stylus');
var autoprefixer = require('gulp-autoprefixer');
var rename = require("gulp-rename");
var cssnano = require('gulp-cssnano');

// stylus
gulp.task('stylus',function(){
  gulp.src('./loading.styl')
    .pipe(plumber())
    .pipe(stylus())
    .pipe(autoprefixer({browsers: ['last 2 versions']}))
    .pipe(cssnano())
    .pipe(gulp.dest('./'));
});

gulp.task('js', function() {
  gulp.src('./loading.js')
    .pipe(plumber())
    .pipe(uglify())
    .pipe(rename('loading.min.js'))
    .pipe(gulp.dest('./'));
});

// フォルダ監視
gulp.task('watch', function(){

  gulp.watch('./loading.styl',['stylus']);
  gulp.watch('./loading.js',['js']);

});

gulp.task('default', ['watch', 'stylus', 'js']);


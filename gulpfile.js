var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require("gulp-rename");
var pipeline = require('readable-stream').pipeline;
var tinypng = require('gulp-tinypng-compress');
gulp.task('scss', function(){
    return gulp.src('src/scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});
gulp.task('css', () => {
    const postcss    = require('gulp-postcss')
    const sourcemaps = require('gulp-sourcemaps')

    return gulp.src('src/**/*.css')
        .pipe( sourcemaps.init() )
        .pipe( postcss([ require('precss'), require('autoprefixer') ]) )
        .pipe( sourcemaps.write('.') )
        .pipe( gulp.dest('build/') )
});
gulp.task('image', () => {
    return gulp.src('src/**/*.{png,jpg,jpeg}')
        .pipe(tinypng({
            key: 'Lh2dfTTKFwjBsd7BjcW2CqPZ7hfhGqx4',
            sigFile: 'images/.tinypng-sigs'
        }))
        .pipe(rename({
            dirname: "",
        }))

        .pipe(gulp.dest('dist/img'));
});
gulp.task('default', gulp.series(['scss','image']));
gulp.task('watch', function(){
    gulp.watch( 'src/**/*.scss', gulp.series(['scss']));
});
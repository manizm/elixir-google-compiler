var compiler = require('google-closure-compiler-js').gulp();

var gulp = require('gulp');
var Elixir = require('laravel-elixir');

var Task = Elixir.Task;

Elixir.extend('compile', function(src, dest, options) {
    new Task('compile', function() {
        return gulp.src(src, {base: './'})
            .pipe(compiler(options))
            .pipe(gulp.dest(dest));
    });
});
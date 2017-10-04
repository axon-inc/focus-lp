var gulp = require('gulp');
var haml = require('gulp-haml');
var sass = require('gulp-sass');
var browserSync =require('browser-sync');

gulp.task('haml', function() {
	gulp.src('./index.haml')
		.pipe(haml())
		.pipe(gulp.dest('./'));
});

gulp.task('sass', function() {
	gulp.src('./assets/sass/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./assets/css'));
});

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: "./",
			index  : "index.html"
		}
	});
});

gulp.task('bs-reload', function () {
	    browserSync.reload();
});

gulp.task('watch', function() {
	gulp.watch([
		'./index.haml',
		'./assets/sass/*.scss'
	], [
		'haml',
		'sass',
		'bs-reload'
	]);
})

// Default gulp task to run
gulp.task('default', ['haml', 'sass', 'browser-sync', 'watch']);

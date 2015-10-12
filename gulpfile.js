var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
    camelize: true
});

var runSequence = require('run-sequence');
var browserSync = require('browser-sync');
var lazypipe = require('lazypipe');

var reload = browserSync.reload;

////////////////////////////////

var appRoot = "app";

var jsSources = [
  appRoot + '/angular/**/*.js'
];

var sassSources = [
  appRoot + '/styles/app.scss'
];

var sassIncludePaths = [
  appRoot + '/bower_components/',
];

var templateSources = [
  appRoot + '/angular/**/*.html'
];

var assetsSources = [
  appRoot + '/assets/**'
];


////////////////////////////////

gulp.task('sass', function() {
  return gulp.src(sassSources)
      .pipe($.sass({
        precision: 10,
        includePaths: sassIncludePaths,
        errLogToConsole: true
      }))
      .pipe($.autoprefixer({ browsers: ['> 1%', 'IE 9']}))

    .pipe(gulp.dest(appRoot + '/styles/'))
    .pipe(reload({stream:true}));
});

gulp.task('template', function () {
  return gulp.src(templateSources)
      .pipe($.angularTemplatecache({
        includePaths: sassIncludePaths,
        standalone:true,
        module:'bench.templates'
      }))
      .pipe(gulp.dest(appRoot + '/angular/core-module/'))
      .pipe(reload({stream: true}));
});

gulp.task('serve', function() {
  browserSync({
          server: {
              baseDir: "app"
          }
      });

  gulp.watch([appRoot + '/**/*.html'], ['build']);
  gulp.watch([appRoot + '/**/*.scss'], ['sass']);
});



////////////////////////////////


var jsMinify = lazypipe()
    .pipe($.ngAnnotate)
    .pipe($.uglify);

var cssMinify = lazypipe()
    .pipe($.csso);

gulp.task('index', function() {
   return gulp.src(appRoot + '/index.html')
    .pipe($.useref.assets({searchPath: "app/"}).on('error', $.util.log))
    .pipe($.if('*.js', jsMinify()))
    .pipe($.if('*.css', cssMinify()))
    .pipe($.useref.restore())
    .pipe($.useref())
    .pipe(gulp.dest("dist"));
});


////////////////////////////////


gulp.task('build', function() {
    runSequence('template','sass', 'index');
});

gulp.task('default', [
  'template',
  'sass',
  'serve'
]);
